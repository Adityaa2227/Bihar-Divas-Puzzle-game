// IndexedDB wrapper for caching Images as Base64/Blobs
const DB_NAME = 'BiharPuzzleImageCache';
const STORE_NAME = 'images';

// Initialize DB
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// Convert image URL to Base64/Blob
const fetchImageAsBase64 = async (url) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result); // Base64 Data URL
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.warn(`Failed to fetch image for caching: ${url}`, error);
    return url; // fallback to original URL
  }
};

// Retrieve from cache
export const getCachedImage = async (url) => {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(url);
      
      request.onsuccess = () => resolve(request.result); // Returns base64 or undefined
      request.onerror = () => reject(request.error);
    });
  } catch (error) {
    console.warn('DB Error', error);
    return null;
  }
};

// Save to cache
export const setCachedImage = async (url, base64Data) => {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(base64Data, url);
      
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } catch (error) {
    console.warn('DB Error', error);
  }
};

// Main hook logic exposed: Get the cached version, or download and encode it
export const loadAndCacheImage = async (url) => {
  // Check if we already have it in IndexedDB
  let cached = await getCachedImage(url);
  
  if (cached) {
    return cached; // Return stored base64!
  }
  
  // High-performance image fetch & encode
  const base64Data = await fetchImageAsBase64(url);
  
  // Cache it for future offline play or instant loads
  if (base64Data && base64Data.startsWith('data:image')) {
    await setCachedImage(url, base64Data);
  }
  
  return base64Data;
};

// Pre-warm the cache for specific critical images (like puzzle categories)
export const preloadImageCache = async (urls) => {
  for (const url of urls) {
    const db = await openDB();
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(url);
    
    request.onsuccess = async () => {
      if (!request.result) {
        // Not in cache, so we fetch and cache it quietly in background
        const base64 = await fetchImageAsBase64(url);
        if (base64.startsWith('data:image')) {
          setCachedImage(url, base64);
        }
      }
    };
  }
};
