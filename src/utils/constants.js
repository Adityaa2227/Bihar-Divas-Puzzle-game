export const CATEGORIES = [
  { id: 'heritage', label: 'Historical Places', icon: '🏛️', image: '/assets/photos/golghar.webp' },
  { id: 'modern', label: 'Modern Bihar', icon: '🏙️', image: '/assets/photos/modern_bihar.webp' },
  { id: 'food', label: 'Local Cuisines', icon: '🍲', image: '/assets/photos/local_cuisine.webp' },
  { id: 'culture', label: 'Rich Art & Culture', icon: '🎨', image: '/assets/photos/rich art culture.webp' }
];

export const IMAGES = [
  // --- UNDER 15 ---
  { id: 'mahabodhi', categoryId: 'heritage', name: 'Mahabodhi Temple', src: '/assets/under_15/MAHABODHI.webp', fact: 'Place where Buddha attained enlightenment.' },
  { id: 'nalanda-u', categoryId: 'heritage', name: 'Nalanda University', src: '/assets/under_15/nalanda.webp', fact: 'Ancient world-renowned learning center.' },
  { id: 'golghar', categoryId: 'heritage', name: 'Golghar', src: '/assets/photos/golghar.webp', fact: 'Massive beehive granary in Patna.' },
  { id: 'buddha-statue', categoryId: 'heritage', name: 'Buddha Statue', src: '/assets/under_15/The-Great-Buddha-Statue.webp', fact: '80-foot Bodh Gaya landmark.' },
  { id: 'rajgir-hills', categoryId: 'heritage', name: 'Rajgir Hills', src: '/assets/under_15/Rajgir_hills.webp', fact: 'Sacred hills of Rajgir.' },
  { id: 'patna-metro', categoryId: 'modern', name: 'Patna Metro', src: '/assets/under_15/patna-metro.webp', fact: 'Modern transit project of Bihar.' },
  { id: 'gandhi-maidan', categoryId: 'modern', name: 'Gandhi Maidan', src: '/assets/under_15/gandhi_maidan.webp', fact: 'Epicenter of events in Patna.' },
  { id: 'ecopark', categoryId: 'modern', name: 'Eco Park', src: '/assets/under_15/eco-park.webp', fact: ' Rajdhani Vatika urban oasis.' },
  { id: 'ganga-riverfront', categoryId: 'modern', name: 'Ganga Riverfront', src: '/assets/under_15/ganga-riverfront.webp', fact: 'Developing bank of sacred Ganges.' },
  { id: 'jp-path', categoryId: 'modern', name: 'JP Ganga Path', src: '/assets/under_15/jp path.webp', fact: 'Marine Drive of Bihar.' },
  { id: 'litti-chokha', categoryId: 'food', name: 'Litti Chokha', src: '/assets/photos/local_cuisine.webp', fact: 'Signature Bihar soul food.' },
  { id: 'sattu-drink', categoryId: 'food', name: 'Sattu Drink', src: '/assets/under_15/sattu.webp', fact: 'Protein-rich desi energy drink.' },
  { id: 'thekua', categoryId: 'food', name: 'Thekua', src: '/assets/under_15/thekua.webp', fact: 'Traditional Chhath Puja cookie.' },
  { id: 'khaja', categoryId: 'food', name: 'Khaja', src: '/assets/under_15/khaja.webp', fact: 'Crispy layered sweet from Silao.' },
  { id: 'chana-ghugni', categoryId: 'food', name: 'Chana Ghugni', src: '/assets/under_15/chana ghughni.webp', fact: 'Spicy chickpea street delicacy.' },
  { id: 'madhubani', categoryId: 'culture', name: 'Madhubani Art', src: '/assets/under_15/madhubani.webp', fact: 'Mithila colorful geometric art.' },
  { id: 'chhath', categoryId: 'culture', name: 'Chhath Puja', src: '/assets/under_15/chhath.webp', fact: 'Ancient Vedic Sun festival.' },
  { id: 'folk-dance', categoryId: 'culture', name: 'Bihar Folk Dance', src: '/assets/under_15/Bihar_Folk_Dance-.webp', fact: 'Rural vibrant dance traditions.' },
  { id: 'ganga-aarti', categoryId: 'culture', name: 'Ganga Aarti', src: '/assets/under_15/nit-ghat-ganga-aarti.webp', fact: 'Spiritual evening prayer on River banks.' },
  { id: 'village-life', categoryId: 'culture', name: 'Village Life', src: '/assets/under_15/village side.webp', fact: 'Rooted and simple Bihar lifestyle.' },

  // --- 16-30 YEARS ---
  { id: 'barabar-caves', categoryId: 'heritage', name: 'Barabar Caves', src: '/assets/16-30/Barabar-Caves.webp', fact: 'Ancient Maurya rock-cut caves.' },
  { id: 'sher-shah-tomb', categoryId: 'heritage', name: 'Sher Shah Tomb', src: '/assets/under_15/sher.webp' },
  { id: 'ashoka-pillar', categoryId: 'heritage', name: 'Vaishali Pillar', src: '/assets/16-30/Pillar-Ashoka-Vaishali.webp', fact: 'Emperor Ashoka\'s lion pillar.' },
  { id: 'rajgir-ropeway', categoryId: 'heritage', name: 'Rajgir Ropeway', src: '/assets/16-30/Rajgir-Ropeway.webp', fact: 'India\'s oldest cable car.' },
  { id: 'kesaria-stupa', categoryId: 'heritage', name: 'Kesaria Stupa', src: '/assets/16-30/kesariya-stupa.webp', fact: 'World\'s mammoth-sized stupa.' },
  { id: 'iit-patna', categoryId: 'modern', name: 'IIT Patna', src: '/assets/16-30/iit patna.webp', fact: 'National institute of tech.' },
  { id: 'nit-patna', categoryId: 'modern', name: 'NIT Patna', src: '/assets/16-30/nit patna.webp', fact: 'Historic technical college.' },
  { id: 'aiims-patna', categoryId: 'modern', name: 'AIIMS Patna', src: '/assets/16-30/AIIMS-Patna.webp', fact: 'Top medical hub of the state.' },
  { id: 'patna-museum', categoryId: 'modern', name: 'Patna Museum', src: '/assets/16-30/patna-museum.webp', fact: 'Artifacts of ancient history.' },
  { id: 'bihar-museum', categoryId: 'modern', name: 'Bihar Museum', src: '/assets/16-30/bihar-museum.webp', fact: 'State-of-the-art museum.' },
  { id: 'sattu-paratha', categoryId: 'food', name: 'Sattu Paratha', src: '/assets/16-30/sattu paratha.webp', fact: 'Lentil-stuffed nutritious flatbread.' },
  { id: 'dal-pitha', categoryId: 'food', name: 'Dal Pitha', src: '/assets/16-30/Dal_Pitha.webp', fact: 'Nutritious steamed dumplings.' },
  { id: 'champaran-mutton', categoryId: 'food', name: 'Champaran Mutton', src: '/assets/16-30/champaran mutton.webp', fact: 'Handi-cooked spicy mutton.' },
  { id: 'kadhi-bari', categoryId: 'food', name: 'Kadhi Bari', src: '/assets/16-30/kadhi bari.webp', fact: 'Gram flour dumplings in gravy.' },
  { id: 'tilkut', categoryId: 'food', name: 'Tilkut', src: '/assets/16-30/tikut.webp', fact: 'Sesame and jaggery winter snack.' },
  { id: 'sonepur-mela', categoryId: 'culture', name: 'Sonepur Mela', src: '/assets/16-30/sonepur-mela.webp', fact: 'Grand historic cattle fair.' },
  { id: 'shrawani-mela', categoryId: 'culture', name: 'Shrawani Mela', src: '/assets/16-30/Shravani-Mela.webp', fact: 'Longest pilgrimage route.' },
  { id: 'mithila-art', categoryId: 'culture', name: 'Mithila Art', src: '/assets/16-30/mithila art.webp', fact: 'Heritage foundation of Madhubani.' },
  { id: 'bidesia', categoryId: 'culture', name: 'Bidesia Folk', src: '/assets/16-30/bedesiya.webp', fact: 'Theatrical folk play form.' },

  // --- 30-55 YEARS ---
  { id: 'vikramshila-u', categoryId: 'heritage', name: 'Vikramshila University', src: '/assets/30-55/vikramshila.webp', fact: 'Ancient Buddhist university ruins.' },
  { id: 'rohtasgarh', categoryId: 'heritage', name: 'Rohtasgarh Fort', src: '/assets/30-55/Rohtasgarh-Fort.webp', fact: 'Ancient and powerful hill fort.' },
  { id: 'agam-kuan', categoryId: 'heritage', name: 'Agam Kuan', src: '/assets/30-55/agam kuan.webp', fact: 'Maurya-era mysterious well.' },
  { id: 'pawapuri', categoryId: 'heritage', name: 'Pawapuri Temple', src: '/assets/30-55/pawapuri.webp', fact: 'Place of Mahavira\'s Nirvana.' },
  { id: 'ajatshatru', categoryId: 'heritage', name: 'Ajatshatru Fort', src: '/assets/30-55/ajatshatru fort.webp', fact: 'Ancient fortification area.' },
  { id: 'vidhan-sabha', categoryId: 'modern', name: 'Vidhan Sabha', src: '/assets/30-55/vidhan sabha.webp', fact: 'Democracy focal point.' },
  { id: 'high-court', categoryId: 'modern', name: 'Patna High Court', src: '/assets/30-55/patna high court.webp', fact: 'Seat of judgment in Bihar.' },
  { id: 'nalanda-new', categoryId: 'modern', name: 'Nalanda New Campus', src: '/assets/30-55/nalanda new campus.webp', fact: 'Modern rebirth of Nalanda.' },
  { id: 'rajendra-setu', categoryId: 'modern', name: 'Rajendra Setu', src: '/assets/30-55/rajendra-setu.webp', fact: 'First Ganges bridge.' },
  { id: 'gaya-airport', categoryId: 'modern', name: 'Gaya Airport', src: '/assets/30-55/gaya-airport.webp', fact: 'International gateway for pilgrims.' },
  { id: 'makhana-kheer', categoryId: 'food', name: 'Makhana Kheer', src: '/assets/30-55/makhana kheer.webp', fact: 'Sweet dish made of fox nuts.' },
  { id: 'bihari-kebab', categoryId: 'food', name: 'Bihari Kebab', src: '/assets/30-55/bihari kebab.webp', fact: 'Soft-marinated spicy skewers.' },
  { id: 'fish-curry', categoryId: 'food', name: 'Bihari Fish Curry', src: '/assets/30-55/Bihari-Style-Fish-Curry.webp', fact: 'Mustard-based traditional preparation.' },
  { id: 'aloo-chana', categoryId: 'food', name: 'Aloo Chana Curry', src: '/assets/30-55/aloo chana curry.webp', fact: 'Staple flavorful veggie curry.' },
  { id: 'chura-dahi', categoryId: 'food', name: 'Chura Dahi', src: '/assets/30-55/dahi-chura.webp', fact: 'Traditional breakfast pair.' },
  { id: 'chanakya', categoryId: 'culture', name: 'Chanakya', src: '/assets/30-55/chanakya.webp', fact: 'The great Mauryan strategist.' },
  { id: 'aryabhatta', categoryId: 'culture', name: 'Aryabhatta', src: '/assets/30-55/aryabhatta.webp', fact: 'Inventor of Zero from Bihar.' },
  { id: 'dashrath', categoryId: 'culture', name: 'Dashrath Manjhi', src: '/assets/30-55/dashrath_manjhi.webp', fact: 'Famous mountain carver.' },
  { id: 'jain-buddha', categoryId: 'culture', name: 'Buddhism Traditions', src: '/assets/30-55/buddhism tradition.webp', fact: 'Roots of world religions in Bihar.' },

  // --- 55+ YEARS ---
  { id: 'lauria', categoryId: 'heritage', name: 'Lauria Nandangarh', src: '/assets/55_plus/Lauriya-Nandangarh.webp', fact: 'Maurya Ashokan pillar site.' },
  { id: 'mundeshwari', categoryId: 'heritage', name: 'Mundeshwari Temple', src: '/assets/55_plus/Mundeshwari-Temple.webp', fact: 'Oldest functional Hindu temple.' },
  { id: 'v-ruins', categoryId: 'heritage', name: 'Vikramshila Ruins', src: '/assets/55_plus/ruins-of-vikramshila.webp', fact: 'Deep monastic university remains.' },
  { id: 'layout', categoryId: 'heritage', name: 'Old Nalanda Layout', src: '/assets/55_plus/old nalanda.webp', fact: 'Ancient archaeological grid.' },
  { id: 'telhara', categoryId: 'heritage', name: 'Telhara University', src: '/assets/55_plus/Telhara-University.webp', fact: 'Excavated ancient education site.' },
  { id: 'old-patna', categoryId: 'modern', name: 'Old Patna City', src: '/assets/55_plus/old patna city.webp', fact: 'Heritage architecture of old town.' },
  { id: 'sonpur-jnc', categoryId: 'modern', name: 'Sonpur Junction', src: '/assets/55_plus/sonepur jn.webp', fact: 'Historic railway hub.' },
  { id: 'barauni', categoryId: 'modern', name: 'Barauni Refinery', src: '/assets/55_plus/barauni refinery.webp', fact: 'Pillar of Bihar industry.' },
  { id: 'haats', categoryId: 'modern', name: 'Traditional Haats', src: '/assets/55_plus/haats.webp', fact: 'Classic village marketplaces.' },
  { id: 'malpua', categoryId: 'food', name: 'Malpua', src: '/assets/55_plus/malpua.webp', fact: 'Bihar\'s own sweet pancakes.' },
  { id: 'gur-sweets', categoryId: 'food', name: 'Gur Sweets', src: '/assets/55_plus/gud sweets.webp', fact: 'Jaggery-based healthy desserts.' },
  { id: 'khichdi', categoryId: 'food', name: 'Traditional Khichdi', src: '/assets/55_plus/khichdi.webp', fact: 'Bihar Saturday special meal.' },
  { id: 'saag-bhaat', categoryId: 'food', name: 'Saag Bhaat', src: '/assets/55_plus/saag bhaat.webp', fact: 'Classic rural nutritional meal.' },
  { id: 'handia', categoryId: 'food', name: 'Local Drinks', src: '/assets/55_plus/local drink.webp', fact: 'Traditional fermented beverages.' },
  { id: 'mauryan-e', categoryId: 'culture', name: 'Mauryan Empire', src: '/assets/55_plus/mauryan empire.webp', fact: 'Golden era of Bihar\'s past.' },
  { id: 'gupta-e', categoryId: 'culture', name: 'Gupta Empire', src: '/assets/55_plus/gupta-empire-map.webp', fact: 'Era of science and mathematics.' },
  { id: 'buddhist-c', categoryId: 'culture', name: 'Buddhist Circuits', src: '/assets/55_plus/buddhist circuit.webp', fact: 'Deep holy exploration routes.' },
];

export const AGE_GROUPS = {
  under_15: { id: 'under_15', size: 3, label: 'Under 15', tag: ' Young Minds', allowedImages: ['mahabodhi', 'nalanda-u', 'golghar', 'buddha-statue', 'rajgir-hills', 'patna-metro', 'gandhi-maidan', 'ecopark', 'ganga-riverfront', 'jp-path', 'litti-chokha', 'sattu-drink', 'thekua', 'khaja', 'chana-ghugni', 'madhubani', 'chhath', 'folk-dance', 'ganga-aarti', 'village-life'] },
  age_16_30: { id: 'age_16_30', size: 3, label: '16-30 Years', tag: ' Youth', allowedImages: ['barabar-caves', 'sher-shah-tomb', 'ashoka-pillar', 'rajgir-ropeway', 'kesaria-stupa', 'iit-patna', 'nit-patna', 'aiims-patna', 'patna-museum', 'bihar-museum', 'sattu-paratha', 'dal-pitha', 'champaran-mutton', 'kadhi-bari', 'tilkut', 'sonepur-mela', 'shrawani-mela', 'mithila-art', 'bhojpuri-songs', 'bidesia'] },
  age_30_55: { id: 'age_30_55', size: 3, label: '30-55 Years', tag: ' Adults', allowedImages: ['vikramshila-u', 'rohtasgarh', 'agam-kuan', 'pawapuri', 'ajatshatru', 'vidhan-sabha', 'high-court', 'nalanda-new', 'rajendra-setu', 'gaya-airport', 'makhana-kheer', 'bihari-kebab', 'fish-curry', 'aloo-chana', 'chura-dahi', 'chanakya', 'aryabhatta', 'dashrath', 'magadh', 'jain-buddha'] },
  age_55_plus: { id: 'age_55_plus', size: 3, label: '55+ Years', tag: ' Seniors', allowedImages: ['lauria', 'mundeshwari', 'v-ruins', 'layout', 'telhara', 'old-patna', 'sonpur-jnc', 'barauni', 'hajipur', 'haats', 'malpua', 'gur-sweets', 'khichdi', 'saag-bhaat', 'handia', 'angika', 'magahi', 'mauryan-e', 'gupta-e', 'buddhist-c'] }
};

export const LS_KEYS = { bestScore: 'bihar-puzzle-best-score' };
export const GAME_MODES = { SLIDER: 'slider', DRAG_DROP: 'drag_drop', JIGSAW: 'jigsaw' };
