export const CATEGORIES = [
  { id: 'heritage', label: 'Historical Places', icon: '🏛️', image: 'src/assets/photos/golghar.webp' },
  { id: 'modern', label: 'Modern Bihar', icon: '🏙️', image: 'src/assets/photos/modern_bihar.webp' },
  { id: 'food', label: 'Local Cuisines', icon: '🍲', image: 'src/assets/photos/local_cuisine.webp' },
  { id: 'culture', label: 'Rich Art & Culture', icon: '🎨', image: 'src/assets/photos/rich art culture.webp' }
];

export const IMAGES = [
  // --- UNDER 15 ---
  { id: 'mahabodhi', categoryId: 'heritage', name: 'Mahabodhi Temple', src: 'src/assets/under_15/MAHABODHI.webp', fact: 'Place where Buddha attained enlightenment.' },
  { id: 'nalanda-u', categoryId: 'heritage', name: 'Nalanda University', src: 'src/assets/under_15/nalanda.webp', fact: 'Ancient world-renowned learning center.' },
  { id: 'golghar', categoryId: 'heritage', name: 'Golghar', src: 'src/assets/photos/golghar.webp', fact: 'Massive beehive granary in Patna.' },
  { id: 'buddha-statue', categoryId: 'heritage', name: 'Buddha Statue', src: 'src/assets/under_15/The-Great-Buddha-Statue.webp', fact: '80-foot Bodh Gaya landmark.' },
  { id: 'rajgir-hills', categoryId: 'heritage', name: 'Rajgir Hills', src: 'src/assets/under_15/Rajgir_hills.webp', fact: 'Sacred hills of Rajgir.' },
  { id: 'patna-metro', categoryId: 'modern', name: 'Patna Metro', src: 'src/assets/under_15/patna-metro.webp', fact: 'Modern transit project of Bihar.' },
  { id: 'gandhi-maidan', categoryId: 'modern', name: 'Gandhi Maidan', src: 'src/assets/under_15/gandhi_maidan.webp', fact: 'Epicenter of events in Patna.' },
  { id: 'ecopark', categoryId: 'modern', name: 'Eco Park', src: 'src/assets/under_15/eco-park.webp', fact: ' Rajdhani Vatika urban oasis.' },
  { id: 'ganga-riverfront', categoryId: 'modern', name: 'Ganga Riverfront', src: 'src/assets/under_15/ganga-riverfront.webp', fact: 'Developing bank of sacred Ganges.' },
  { id: 'jp-path', categoryId: 'modern', name: 'JP Ganga Path', src: 'src/assets/under_15/jp path.webp', fact: 'Marine Drive of Bihar.' },
  { id: 'litti-chokha', categoryId: 'food', name: 'Litti Chokha', src: 'src/assets/photos/local_cuisine.webp', fact: 'Signature Bihar soul food.' },
  { id: 'sattu-drink', categoryId: 'food', name: 'Sattu Drink', src: 'src/assets/under_15/sattu.webp', fact: 'Protein-rich desi energy drink.' },
  { id: 'thekua', categoryId: 'food', name: 'Thekua', src: 'src/assets/under_15/thekua.webp', fact: 'Traditional Chhath Puja cookie.' },
  { id: 'khaja', categoryId: 'food', name: 'Khaja', src: 'src/assets/under_15/khaja.webp', fact: 'Crispy layered sweet from Silao.' },
  { id: 'chana-ghugni', categoryId: 'food', name: 'Chana Ghugni', src: 'src/assets/under_15/chana ghughni.webp', fact: 'Spicy chickpea street delicacy.' },
  { id: 'madhubani', categoryId: 'culture', name: 'Madhubani Art', src: 'src/assets/under_15/madhubani.webp', fact: 'Mithila colorful geometric art.' },
  { id: 'chhath', categoryId: 'culture', name: 'Chhath Puja', src: 'src/assets/under_15/chhath.webp', fact: 'Ancient Vedic Sun festival.' },
  { id: 'folk-dance', categoryId: 'culture', name: 'Bihar Folk Dance', src: 'src/assets/under_15/Bihar_Folk_Dance-.webp', fact: 'Rural vibrant dance traditions.' },
  { id: 'ganga-aarti', categoryId: 'culture', name: 'Ganga Aarti', src: 'src/assets/under_15/nit-ghat-ganga-aarti.webp', fact: 'Spiritual evening prayer on River banks.' },
  { id: 'village-life', categoryId: 'culture', name: 'Village Life', src: 'src/assets/under_15/village side.webp', fact: 'Rooted and simple Bihar lifestyle.' },

  // --- 16-30 YEARS ---
  { id: 'barabar-caves', categoryId: 'heritage', name: 'Barabar Caves', src: 'src/assets/16-30/Barabar-Caves.webp', fact: 'Ancient Maurya rock-cut caves.' },
  { id: 'sher-shah-tomb', categoryId: 'heritage', name: 'Sher Shah Tomb', src: 'src/assets/under_15/sher.webp' },
  { id: 'ashoka-pillar', categoryId: 'heritage', name: 'Vaishali Pillar', src: 'src/assets/16-30/Pillar-Ashoka-Vaishali.webp', fact: 'Emperor Ashoka\'s lion pillar.' },
  { id: 'rajgir-ropeway', categoryId: 'heritage', name: 'Rajgir Ropeway', src: 'src/assets/16-30/Rajgir-Ropeway.webp', fact: 'India\'s oldest cable car.' },
  { id: 'kesaria-stupa', categoryId: 'heritage', name: 'Kesaria Stupa', src: 'src/assets/16-30/kesariya-stupa.webp', fact: 'World\'s mammoth-sized stupa.' },
  { id: 'iit-patna', categoryId: 'modern', name: 'IIT Patna', src: 'src/assets/16-30/iit patna.webp', fact: 'National institute of tech.' },
  { id: 'nit-patna', categoryId: 'modern', name: 'NIT Patna', src: 'src/assets/16-30/nit patna.webp', fact: 'Historic technical college.' },
  { id: 'aiims-patna', categoryId: 'modern', name: 'AIIMS Patna', src: 'src/assets/16-30/AIIMS-Patna.webp', fact: 'Top medical hub of the state.' },
  { id: 'patna-museum', categoryId: 'modern', name: 'Patna Museum', src: 'src/assets/16-30/patna-museum.webp', fact: 'Artifacts of ancient history.' },
  { id: 'bihar-museum', categoryId: 'modern', name: 'Bihar Museum', src: 'src/assets/16-30/bihar-museum.webp', fact: 'State-of-the-art museum.' },
  { id: 'sattu-paratha', categoryId: 'food', name: 'Sattu Paratha', src: 'src/assets/16-30/sattu paratha.webp', fact: 'Lentil-stuffed nutritious flatbread.' },
  { id: 'dal-pitha', categoryId: 'food', name: 'Dal Pitha', src: 'src/assets/16-30/Dal_Pitha.webp', fact: 'Nutritious steamed dumplings.' },
  { id: 'champaran-mutton', categoryId: 'food', name: 'Champaran Mutton', src: 'src/assets/16-30/champaran mutton.webp', fact: 'Handi-cooked spicy mutton.' },
  { id: 'kadhi-bari', categoryId: 'food', name: 'Kadhi Bari', src: 'src/assets/16-30/kadhi bari.webp', fact: 'Gram flour dumplings in gravy.' },
  { id: 'tilkut', categoryId: 'food', name: 'Tilkut', src: 'src/assets/16-30/tikut.webp', fact: 'Sesame and jaggery winter snack.' },
  { id: 'sonepur-mela', categoryId: 'culture', name: 'Sonepur Mela', src: 'src/assets/16-30/sonepur-mela.webp', fact: 'Grand historic cattle fair.' },
  { id: 'shrawani-mela', categoryId: 'culture', name: 'Shrawani Mela', src: 'src/assets/16-30/Shravani-Mela.webp', fact: 'Longest pilgrimage route.' },
  { id: 'mithila-art', categoryId: 'culture', name: 'Mithila Art', src: 'src/assets/16-30/mithila art.webp', fact: 'Heritage foundation of Madhubani.' },
  { id: 'bidesia', categoryId: 'culture', name: 'Bidesia Folk', src: 'src/assets/16-30/bedesiya.webp', fact: 'Theatrical folk play form.' },

  // --- 30-55 YEARS ---
  { id: 'vikramshila-u', categoryId: 'heritage', name: 'Vikramshila University', src: 'https://imgs.search.brave.com/ooqCkiQL_csUSkctKBeRQm6F50ADCTg-4rsxa9bEJ7s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9oaXN0/b3JpZmllZC5pbi93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/NS9TY3JlZW5zaG90/XzIwMjAwNTMxLTE1/MzUzNi03MjB4NTYw/LmpwZw', fact: 'Ancient Buddhist university ruins.' },
  { id: 'rohtasgarh', categoryId: 'heritage', name: 'Rohtasgarh Fort', src: 'https://imgs.search.brave.com/2Hh7QJZfF7osTlyGOCtORHMxYsPL6RnTW7yiyDErA2E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudGVsZWdyYXBo/aW5kaWEuY29tL3Rl/bGVncmFwaC8yMDIz/L05vdi8xNjk5MTQz/OTUwX2ZvcnQuZ2lm.jpeg', fact: 'Ancient and powerful hill fort.' },
  { id: 'agam-kuan', categoryId: 'heritage', name: 'Agam Kuan', src: 'https://imgs.search.brave.com/-WEwBH7ZZ2gg58odjjyFKAdPH-XQToSXbXo7NC-R4rE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zN2Fw/MS5zY2VuZTcuY29t/L2lzL2ltYWdlL2lu/Y3JlZGlibGVpbmRp/YS9hZ2FtLWt1YW4t/cGF0bmEtYmloYXIt/Mi1tdXN0aGVhZC1o/ZXJvP3FsdD04MiZ0/cz0xNzQyMTYyNTk1/MjMy', fact: 'Maurya-era mysterious well.' },
  { id: 'pawapuri', categoryId: 'heritage', name: 'Pawapuri Temple', src: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Mundeshwari_temple.jpg', fact: 'Place of Mahavira\'s Nirvana.' },
  { id: 'ajatshatru', categoryId: 'heritage', name: 'Ajatshatru Fort', src: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Telhara_Ancient_University_Excavation_Site.jpg', fact: 'Ancient fortification area.' },
  { id: 'vidhan-sabha', categoryId: 'modern', name: 'Vidhan Sabha', src: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Bihar_Vidhan_Sabha_Building.jpg', fact: 'Democracy focal point.' },
  { id: 'high-court', categoryId: 'modern', name: 'Patna High Court', src: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Patna_High_Court_building.jpg', fact: 'Seat of judgment in Bihar.' },
  { id: 'nalanda-new', categoryId: 'modern', name: 'Nalanda New Campus', src: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Telhara_Ancient_University_Excavation_Site.jpg', fact: 'Modern rebirth of Nalanda.' },
  { id: 'rajendra-setu', categoryId: 'modern', name: 'Rajendra Setu', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Rajendra_Setu.jpg/1280px-Rajendra_Setu.jpg', fact: 'First Ganges bridge.' },
  { id: 'gaya-airport', categoryId: 'modern', name: 'Gaya Airport', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/IIT_Patna_Campus.jpg/1280px-IIT_Patna_Campus.jpg', fact: 'International gateway for pilgrims.' },
  { id: 'makhana-kheer', categoryId: 'food', name: 'Makhana Kheer', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Makhana_Kheer.jpg/1280px-Makhana_Kheer.jpg', fact: 'Sweet dish made of fox nuts.' },
  { id: 'bihari-kebab', categoryId: 'food', name: 'Bihari Kebab', src: 'https://thumbs.dreamstime.com/b/champaran-mutton-handi-ahuna-popular-dish-bihar-state-india-253105610.jpg', fact: 'Soft-marinated spicy skewers.' },
  { id: 'fish-curry', categoryId: 'food', name: 'Bihari Fish Curry', src: 'https://imgs.search.brave.com/FjyE0J4Kr8Oq_trm3FdKPms2k8Nuv8O5To8wdA2xsWo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9saXR0/aS1jaG9raGEtbGl0/aS1jaG9rYS1zdHVm/ZmVkLWNoYW5hLXNh/dHR1LWluZGlhbi1k/aXNoLWJpaGFyLXNl/cnZlZC1naW5nZXIt/Z2FybGljLW1pbnQt/Y2h1dG5leS1iYWlu/Z2FuLTIxNjg5MjM4/OS5qcGc', fact: 'Mustard-based traditional preparation.' },
  { id: 'aloo-chana', categoryId: 'food', name: 'Aloo Chana Curry', src: 'https://imgs.search.brave.com/Cf8e3M1xmkKkRdVM-1Wu9oe9A6XZLZDu98qocaf2SBU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dmVnYW5yaWNoYS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDUvS2FsYS1D/aGFuYS1HaHVnbmkt/NzY0NC0zMDB4MzAw/LmpwZw', fact: 'Staple flavorful veggie curry.' },
  { id: 'chura-dahi', categoryId: 'food', name: 'Chura Dahi', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Malpua.jpg/1280px-Malpua.jpg', fact: 'Traditional breakfast pair.' },
  { id: 'chanakya', categoryId: 'culture', name: 'Chanakya', src: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Aryabhata.jpg', fact: 'The great Mauryan strategist.' },
  { id: 'aryabhatta', categoryId: 'culture', name: 'Aryabhatta', src: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Aryabhata.jpg', fact: 'Inventor of Zero from Bihar.' },
  { id: 'dashrath', categoryId: 'culture', name: 'Dashrath Manjhi', src: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Dashrath_Manjhi.jpg', fact: 'Famous mountain carver.' },
  { id: 'magadh', categoryId: 'culture', name: 'Magadh History', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Didarganj_Yakshi_Patna_Museum.jpg', fact: 'Imperial glory of ancient India.' },
  { id: 'jain-buddha', categoryId: 'culture', name: 'Buddhism Traditions', src: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Buddha_Statue_in_Bodh_Gaya.jpg', fact: 'Roots of world religions in Bihar.' },

  // --- 55+ YEARS ---
  { id: 'lauria', categoryId: 'heritage', name: 'Lauria Nandangarh', src: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Ashoka%27s_Pillar%2C_Vaishali.jpg', fact: 'Maurya Ashokan pillar site.' },
  { id: 'mundeshwari', categoryId: 'heritage', name: 'Mundeshwari Temple', src: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Mundeshwari_temple.jpg', fact: 'Oldest functional Hindu temple.' },
  { id: 'v-ruins', categoryId: 'heritage', name: 'Vikramshila Ruins', src: 'https://imgs.search.brave.com/ooqCkiQL_csUSkctKBeRQm6F50ADCTg-4rsxa9bEJ7s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9oaXN0/b3JpZmllZC5pbi93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/NS9TY3JlZW5zaG90/XzIwMjAwNTMxLTE1/MzUzNi03MjB4NTYw/LmpwZw', fact: 'Deep monastic university remains.' },
  { id: 'layout', categoryId: 'heritage', name: 'Old Nalanda Layout', src: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Telhara_Ancient_University_Excavation_Site.jpg', fact: 'Ancient archaeological grid.' },
  { id: 'telhara', categoryId: 'heritage', name: 'Telhara University', src: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Telhara_Ancient_University_Excavation_Site.jpg', fact: 'Excavated ancient education site.' },
  { id: 'old-patna', categoryId: 'modern', name: 'Old Patna City', src: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Patna_Museum_%28cropped%29.jpg', fact: 'Heritage architecture of old town.' },
  { id: 'sonpur-jnc', categoryId: 'modern', name: 'Sonpur Junction', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/IIT_Patna_Campus.jpg/1280px-IIT_Patna_Campus.jpg', fact: 'Historic railway hub.' },
  { id: 'barauni', categoryId: 'modern', name: 'Barauni Refinery', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Rajendra_Setu.jpg/1280px-Rajendra_Setu.jpg', fact: 'Pillar of Bihar industry.' },
  { id: 'hajipur', categoryId: 'modern', name: 'Hajipur Industrial', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Rajendra_Setu.jpg/1280px-Rajendra_Setu.jpg', fact: 'Industrial development zone.' },
  { id: 'haats', categoryId: 'modern', name: 'Traditional Haats', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Rural_Bihar.jpg', fact: 'Classic village marketplaces.' },
  { id: 'malpua', categoryId: 'food', name: 'Malpua', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Malpua.jpg/1280px-Malpua.jpg', fact: 'Bihar\'s own sweet pancakes.' },
  { id: 'gur-sweets', categoryId: 'food', name: 'Gur Sweets', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Malpua.jpg/1280px-Malpua.jpg', fact: 'Jaggery-based healthy desserts.' },
  { id: 'khichdi', categoryId: 'food', name: 'Traditional Khichdi', src: 'https://imgs.search.brave.com/FjyE0J4Kr8Oq_trm3FdKPms2k8Nuv8O5To8wdA2xsWo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9saXR0/aS1jaG9raGEtbGl0/aS1jaG9rYS1zdHVm/ZmVkLWNoYW5hLXNh/dHR1LWluZGlhbi1k/aXNoLWJpaGFyLXNl/cnZlZC1naW5nZXIt/Z2FybGljLW1pbnQt/Y2h1dG5leS1iYWlu/Z2FuLTIxNjg5MjM4/OS5qcGc', fact: 'Bihar Saturday special meal.' },
  { id: 'saag-bhaat', categoryId: 'food', name: 'Saag Bhaat', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Rural_Bihar.jpg', fact: 'Classic rural nutritional meal.' },
  { id: 'handia', categoryId: 'food', name: 'Local Drinks', src: 'https://imgs.search.brave.com/6qxhZBEGvpA7KlMwTmbeO9UFKlgfGp8QLzjxpvJBwXY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9zYXR0dS1z/dW1tZXItZHJpbmst/cHJlcGFyZWQtYnkt/MjYwbnctMTM2NTI5/MDQ5NS5qcGc', fact: 'Traditional fermented beverages.' },
  { id: 'angika', categoryId: 'culture', name: 'Angika Culture', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Didarganj_Yakshi_Patna_Museum.jpg', fact: 'Roots of Anga region heritage.' },
  { id: 'magahi', categoryId: 'culture', name: 'Magahi Traditions', src: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Bihar_Focal_Dance-.jpg', fact: 'Language and customs of Magadh.' },
  { id: 'mauryan-e', categoryId: 'culture', name: 'Mauryan Empire', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Didarganj_Yakshi_Patna_Museum.jpg', fact: 'Golden era of Bihar\'s past.' },
  { id: 'gupta-e', categoryId: 'culture', name: 'Gupta Empire', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Didarganj_Yakshi_Patna_Museum.jpg', fact: 'Era of science and mathematics.' },
  { id: 'buddhist-c', categoryId: 'culture', name: 'Buddhist Circuits', src: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Buddha_Statue_in_Bodh_Gaya.jpg', fact: 'Deep holy exploration routes.' }
];

export const AGE_GROUPS = {
  under_15: { id: 'under_15', size: 3, label: 'Under 15', tag: '🧒 Young Minds', allowedImages: ['mahabodhi', 'nalanda-u', 'golghar', 'buddha-statue', 'rajgir-hills', 'patna-metro', 'gandhi-maidan', 'ecopark', 'ganga-riverfront', 'jp-path', 'litti-chokha', 'sattu-drink', 'thekua', 'khaja', 'chana-ghugni', 'madhubani', 'chhath', 'folk-dance', 'ganga-aarti', 'village-life'] },
  age_16_30: { id: 'age_16_30', size: 3, label: '16-30 Years', tag: '⚡ Youth', allowedImages: ['barabar-caves', 'sher-shah-tomb', 'ashoka-pillar', 'rajgir-ropeway', 'kesaria-stupa', 'iit-patna', 'nit-patna', 'aiims-patna', 'patna-museum', 'bihar-museum', 'sattu-paratha', 'dal-pitha', 'champaran-mutton', 'kadhi-bari', 'tilkut', 'sonepur-mela', 'shrawani-mela', 'mithila-art', 'bhojpuri-songs', 'bidesia'] },
  age_30_55: { id: 'age_30_55', size: 3, label: '30-55 Years', tag: '🌟 Adults', allowedImages: ['vikramshila-u', 'rohtasgarh', 'agam-kuan', 'pawapuri', 'ajatshatru', 'vidhan-sabha', 'high-court', 'nalanda-new', 'rajendra-setu', 'gaya-airport', 'makhana-kheer', 'bihari-kebab', 'fish-curry', 'aloo-chana', 'chura-dahi', 'chanakya', 'aryabhatta', 'dashrath', 'magadh', 'jain-buddha'] },
  age_55_plus: { id: 'age_55_plus', size: 3, label: '55+ Years', tag: '🧠 Seniors', allowedImages: ['lauria', 'mundeshwari', 'v-ruins', 'layout', 'telhara', 'old-patna', 'sonpur-jnc', 'barauni', 'hajipur', 'haats', 'malpua', 'gur-sweets', 'khichdi', 'saag-bhaat', 'handia', 'angika', 'magahi', 'mauryan-e', 'gupta-e', 'buddhist-c'] }
};

export const LS_KEYS = { bestScore: 'bihar-puzzle-best-score' };
export const GAME_MODES = { SLIDER: 'slider', DRAG_DROP: 'drag_drop', JIGSAW: 'jigsaw' };
