export const CATEGORIES = [
  { id: 'heritage', label: 'Historical Places', icon: '🏛️', image: '/assets/photos/golghar.webp' },
  { id: 'food', label: 'Local Cuisines', icon: '🍲', image: '/assets/photos/local_cuisine.webp' },
  { id: 'culture', label: 'Rich Art & Culture', icon: '🎨', image: '/assets/photos/rich art culture.webp' },
  { id: 'celebrity', label: 'Famous Personalities', icon: '🌟', image: '/assets/photos/manoj_bajpayee.png' }
];

export const IMAGES = [
  // --- UNDER 15 ---
  { id: 'mahabodhi', categoryId: 'heritage', name: 'Mahabodhi Temple', src: '/assets/under_15/MAHABODHI.webp', fact: 'The Mahabodhi Temple is a UNESCO World Heritage Site where the Buddha is said to have attained enlightenment under the sacred Bodhi Tree.' },
  { id: 'nalanda-u', categoryId: 'heritage', name: 'Nalanda University', src: '/assets/under_15/nalanda.webp', fact: 'Founded in the 5th century, Nalanda was one of the greatest centers of learning in the ancient world, attracting scholars from as far away as China and Greece.' },
  { id: 'golghar', categoryId: 'heritage', name: 'Golghar', src: '/assets/photos/golghar.webp', fact: 'Built in 1786 by Captain John Garstin, this massive beehive-shaped granary was designed to store grain for the British army after the famine of 1770.' },
  { id: 'buddha-statue', categoryId: 'heritage', name: 'Buddha Statue', src: '/assets/under_15/The-Great-Buddha-Statue.webp', fact: 'Standing 80 feet tall in Bodh Gaya, this majestic statue took seven years to complete and is made from blocks of red granite and sandstone.' },
  { id: 'rajgir-hills', categoryId: 'heritage', name: 'Rajgir Hills', src: '/assets/under_15/Rajgir_hills.webp', fact: 'Rajgir was the first capital of the Magadha empire. Its seven sacred hills are revered in Hinduism, Buddhism, and Jainism alike.' },
  { id: 'neha-s', categoryId: 'celebrity', name: 'Neha Sharma', src: '/assets/under_15/neha_sharma.png', fact: 'A popular and talented Indian actress from Bhagalpur, Bihar who made her mark in Bollywood.' },
  { id: 'khan-s', categoryId: 'celebrity', name: 'Khan Sir', src: '/assets/under_15/Khan_Sir.png', fact: 'A beloved educational icon from Patna whose unique and humorous teaching style has educated millions across India.' },
  { id: 'anand-k', categoryId: 'celebrity', name: 'Anand Kumar', src: '/assets/under_15/Anand_Kumar.png', fact: 'A legendary educator whose Super 30 program helps underprivileged students crack the world’s toughest engineering exams.' },
  { id: 'sonakshi-s', categoryId: 'celebrity', name: 'Sonakshi Sinha', src: '/assets/under_15/Sonakshi_Sinha.png', fact: 'A leading Bollywood actress with proud roots in Bihar, known for her powerful performances in blockbuster films.' },
  { id: 'litti-chokha', categoryId: 'food', name: 'Litti Chokha', src: '/assets/photos/local_cuisine.webp', fact: 'Bihar\'s signature soul food—roasted wheat dough balls stuffed with spiced sattu (roasted gram flour), served with smoky mashed eggplant and potato.' },
  { id: 'sattu-drink', categoryId: 'food', name: 'Sattu Drink', src: '/assets/under_15/sattu.webp', fact: 'Known as the "Desi Energy Drink", iced sattu mixed with cumin, lime, and black salt provides instant cooling and protein during Bihar\'s scorching summers.' },
  { id: 'thekua', categoryId: 'food', name: 'Thekua', src: '/assets/under_15/thekua.webp', fact: 'A revered traditional sweet made from wheat flour, ghee, and jaggery. It is the core offering (prasad) during Bihar\'s most important festival, Chhath Puja.' },
  { id: 'madhubani', categoryId: 'culture', name: 'Madhubani Art', src: '/assets/under_15/madhubani.webp', fact: 'Also known as Mithila painting, this ancient geometric art form uses natural dyes from plants and was originally painted on freshly plastered mud walls.' },
  { id: 'chhath', categoryId: 'culture', name: 'Chhath Puja', src: '/assets/under_15/chhath.webp', fact: 'An ancient Vedic festival honoring Surya (the Sun God) and Chhathi Maiya, unique in its rigorous fasting, river-bathing rituals, and absence of idol worship.' },
  { id: 'folk-dance', categoryId: 'culture', name: 'Bihar Folk Dance', src: '/assets/under_15/Bihar_Folk_Dance-.webp', fact: 'Dances like Jat-Jatin and Jhijhiya express the vibrant rural culture and folklore, often performed during monsoons and harvest festivals.' },
  { id: 'ganga-aarti', categoryId: 'culture', name: 'Ganga Aarti', src: '/assets/under_15/nit-ghat-ganga-aarti.webp', fact: 'A mesmerizing spiritual evening prayer held at the NIT Ghat, involving massive brass lamps, chanting, and beautiful reflections on the running river.' },
  { id: 'village-life', categoryId: 'culture', name: 'Village Life', src: '/assets/under_15/village side.webp', fact: 'Bihar\'s villages remain the heart of its culture, preserving traditional agricultural practices, tight-knit communities, and ancestral crafts.' },

  // // --- 16-30 YEARS ---
  { id: 'barabar-caves', categoryId: 'heritage', name: 'Barabar Caves', src: '/assets/16-30/Barabar-Caves.webp', fact: 'Constructed during the Mauryan Empire, these are the oldest surviving rock-cut caves in India and feature glass-like highly polished interiors.' },
  { id: 'sher-shah-tomb', categoryId: 'heritage', name: 'Sher Shah Tomb', src: '/assets/under_15/sher.webp', fact: 'Located in Sasaram, this magnificent 122-foot red sandstone tomb stands in the middle of an artificial lake and is a masterpiece of Indo-Islamic architecture.' },
  { id: 'ashoka-pillar', categoryId: 'heritage', name: 'Vaishali Pillar', src: '/assets/16-30/Pillar-Ashoka-Vaishali.webp', fact: 'Unlike other Ashokan pillars bearing four lions, the Vaishali pillar is uniquely crowned by a single Asiatic lion facing north.' },
  { id: 'rajgir-ropeway', categoryId: 'heritage', name: 'Rajgir Ropeway', src: '/assets/16-30/Rajgir-Ropeway.webp', fact: 'India\'s oldest cable car system takes pilgrims on a thrilling ride up the Ratnagiri hill to reach the spectacular Vishwa Shanti Stupa.' },
  { id: 'kesaria-stupa', categoryId: 'heritage', name: 'Kesaria Stupa', src: '/assets/16-30/kesariya-stupa.webp', fact: 'Rising to over 100 feet, Kesariya is historically believed to be the largest and tallest ancient Buddhist stupa in the entire world.' },
  { id: 'manoj-b', categoryId: 'celebrity', name: 'Manoj Bajpayee', src: '/assets/16-30/Manoj_Bajpayee.png', fact: 'A three-time National Film Award-winning actor from Bihar, celebrated globally for his powerful, realistic performances.' },
  { id: 'pankaj-t', categoryId: 'celebrity', name: 'Pankaj Tripathi', src: '/assets/16-30/Pankaj_Tripathi.png', fact: 'Hailing from Belsand in Bihar, his nuanced and natural acting has made him one of the most beloved actors in modern Indian cinema.' },
  { id: 'sushant-r', categoryId: 'celebrity', name: 'Sushant Singh Rajput', src: '/assets/16-30/Sushant_Singh_Rajput.png', fact: 'A brilliant and beloved actor from Patna, known for portraying complex roles and his passion for astrophysics.' },
  { id: 'bismillah-k', categoryId: 'celebrity', name: 'Ustad Bismillah Khan', src: '/assets/16-30/Ustad_Bismillah_Khan.png', fact: 'Born in Dumraon, Bihar, this legendary musician single-handedly elevated the Shehnai to classical concert status worldwide.' },
  { id: 'shatrughan-s', categoryId: 'celebrity', name: 'Shatrughan Sinha', src: '/assets/16-30/Shatrughan_Sinha.png', fact: 'A legendary Bollywood superstar and politician famously known as "Bihari Babu", carrying the pride of his home state.' },
  { id: 'sattu-paratha', categoryId: 'food', name: 'Sattu Paratha', src: '/assets/16-30/sattu paratha.webp', fact: 'A beloved working-class breakfast: wholesome flatbread stuffed with roasted gram flour, carom seeds, and tangy pickle spices.' },
  { id: 'dal-pitha', categoryId: 'food', name: 'Dal Pitha', src: '/assets/16-30/Dal_Pitha.webp', fact: 'Bihar’s brilliant answer to dumplings! These healthy, steam-cooked rice flour pockets are stuffed with heavily spiced lentil paste.' },
  { id: 'champaran-mutton', categoryId: 'food', name: 'Champaran Mutton', src: '/assets/16-30/champaran mutton.webp', fact: 'Also called Ahuna Mutton, this delicacy is slow-cooked in a sealed earthen clay pot with whole spices and entire bulbs of garlic.' },
  { id: 'sonepur-mela', categoryId: 'culture', name: 'Sonepur Mela', src: '/assets/16-30/sonepur-mela.webp', fact: 'Dating back to the Mauryan empire, this vibrant month-long event is recognized as Asia\'s largest cattle and animal fair.' },
  { id: 'shrawani-mela', categoryId: 'culture', name: 'Shrawani Mela', src: '/assets/16-30/Shravani-Mela.webp', fact: 'Millions of Kanwariyas undertake an arduous barefoot trek carrying holy river water during this massive monsoon pilgrimage.' },
  { id: 'mithila-art', categoryId: 'culture', name: 'Mithila Art', src: '/assets/16-30/mithila art.webp', fact: 'Originally a localized women\'s wall art tradition, Mithila painting has exploded into an internationally recognized fine art style.' },
  { id: 'bidesia', categoryId: 'culture', name: 'Bidesia Folk', src: '/assets/16-30/bedesiya.webp', fact: 'Created by Bhikhari Thakur (the Shakespeare of Bhojpuri), this powerful folk theater addresses themes of migration and social issues.' },

  // --- NEW QUESTIONS ---
  { id: 'kesariya-buddha', categoryId: 'heritage', name: 'Kesariya Buddha Site', src: '/assets/new image/kesariya_buddha.webp', fact: 'Believed to be the place where Buddha gave his last sermon before attaining Mahaparinirvana.' },
  { id: 'jal-mandir', categoryId: 'heritage', name: 'Jal Mandir Pawapuri', src: '/assets/new image/jal_mandir.jpg', fact: 'A white marble temple floating in the middle of a lotus-filled lake, marking Mahavira’s cremation site.' },
  { id: 'kakolat', categoryId: 'heritage', name: 'Kakolat Waterfall', src: '/assets/new image/kakolat.jpg', fact: 'A scenic waterfall believed in mythology to free people from snake curses if they bathe here.' },
  { id: 'bhagalpur-silk', categoryId: 'heritage', name: 'Bhagalpuri Silk', src: '/assets/new image/bhagalpur_silk.jpg', fact: 'Known as the "Silk City", Bhagalpur produces world-famous Tussar silk fabrics.' },
  { id: 'sherghati', categoryId: 'heritage', name: 'Sherghati Hills', src: '/assets/new image/sherghati.jpg', fact: 'A lesser-known but historically strategic region during medieval Indian battles.' },
  { id: 'ravish-k', categoryId: 'celebrity', name: 'Ravish Kumar', src: '/assets/new image/ravish.webp', fact: 'A Ramon Magsaysay Award-winning journalist known for independent and fearless reporting.' },
  { id: 'imtiyaz-a', categoryId: 'celebrity', name: 'Imtiaz Ali', src: '/assets/new image/imtiaz.avif', fact: 'A renowned filmmaker from Bihar known for movies like Rockstar and Tamasha.' },
  { id: 'sanjay-m', categoryId: 'celebrity', name: 'Sanjay Mishra', src: '/assets/new image/sanjay.avif', fact: 'A critically acclaimed actor known for his natural acting and comic timing.' },
  { id: 'pooja-s', categoryId: 'celebrity', name: 'Pooja Sharma', src: '/assets/new image/pooja.avif', fact: 'A television actress known for portraying Draupadi in Mahabharat.' },
  { id: 'khesari-l', categoryId: 'celebrity', name: 'Khesari Lal Yadav', src: '/assets/new image/khesari.avif', fact: 'A Bhojpuri superstar singer-actor with massive popularity in rural India.' },
  { id: 'tilkut', categoryId: 'food', name: 'Tilkut', src: '/assets/new image/tilkut.jpg', fact: 'A winter delicacy made from sesame seeds and jaggery, especially famous in Gaya.' },
  { id: 'anarsa', categoryId: 'food', name: 'Anarsa', src: '/assets/new image/anarsa.jpg', fact: 'A unique sweet made from soaked rice flour and jaggery, deep-fried to perfection.' },
  { id: 'kadhi-bari', categoryId: 'food', name: 'Kadhi Bari', src: '/assets/new image/kadhi.jpg', fact: 'A tangy yogurt-based curry with gram flour dumplings, widely eaten in Bihar households.' },
  { id: 'ghugni', categoryId: 'food', name: 'Ghugni', src: '/assets/new image/ghugni.jpg', fact: 'A spicy street food made from black chickpeas, commonly eaten with poori or bread.' },
  { id: 'lai', categoryId: 'food', name: 'Lai', src: '/assets/new image/lai.jpg', fact: 'A crunchy sweet made from puffed grains and jaggery, popular during festivals.' },
  { id: 'angika', categoryId: 'culture', name: 'Angika Language', src: '/assets/new image/angika.jpg', fact: 'An ancient regional language spoken in parts of Bihar and Jharkhand.' },
  { id: 'paag-ceremony', categoryId: 'culture', name: 'Paag Ceremony', src: '/assets/new image/paag_ceremony.avif', fact: 'Honoring guests with a Paag is a symbol of deep respect in Mithila culture.' },
  { id: 'bihar-handloom', categoryId: 'culture', name: 'Bihar Handloom', src: '/assets/new image/handloom.png', fact: 'Traditional weaving techniques produce unique textiles reflecting rural craftsmanship.' },
  { id: 'rural-haat', categoryId: 'culture', name: 'Village Haat', src: '/assets/new image/haat.webp', fact: 'Weekly rural markets where villagers trade goods, food, and handmade products.' },


  // --- 30-55 YEARS ---
  { id: 'vikramshila-u', categoryId: 'heritage', name: 'Vikramshila University', src: '/assets/30-55/vikramshila.webp', fact: 'Operating alongside Nalanda, Vikramshila was established by King Dharmapala as a premier global center for Vajrayana Buddhism.' },
  { id: 'rohtasgarh', categoryId: 'heritage', name: 'Rohtasgarh Fort', src: '/assets/30-55/Rohtasgarh-Fort.webp', fact: 'Perched strategically 1,500 feet high on the Kaimur hills, this massive fortification was considered one of the most impregnable strongholds in India.' },
  { id: 'agam-kuan', categoryId: 'heritage', name: 'Agam Kuan', src: '/assets/30-55/agam kuan.webp', fact: 'The "Unfathomable Well" dates back to Emperor Ashoka. Legend says it is bottomless and connects via underground streams to the Ganges.' },
  { id: 'pawapuri', categoryId: 'heritage', name: 'Pawapuri Temple', src: '/assets/30-55/pawapuri.webp', fact: 'Known as the "Sinless City," this gorgeous Jal Mandir (Water Temple) marks the exact spot where Lord Mahavira attained Nirvana in 527 BCE.' },
  { id: 'ajatshatru', categoryId: 'heritage', name: 'Ajatshatru Fort', src: '/assets/30-55/ajatshatru fort.webp', fact: 'Built by the mighty King Ajatshatru in the 6th century BCE to defend Pataliputra and his kingdom against the powerful Licchavi republic.' },
  { id: 'prakash-j', categoryId: 'celebrity', name: 'Prakash Jha', src: '/assets/photos/Prakash_Jha.png', fact: 'A multi-award-winning film director from Champaran, famous for his intense socio-political movies.' },
  { id: 'ramdhari-sd', categoryId: 'celebrity', name: 'Ramdhari Singh Dinkar', src: '/assets/photos/Ramdhari_Singh_Dinkar.png', fact: 'Revered as the Rashtrakavi (National Poet), his brilliant Hindi literature ignited nationalist pride.' },
  { id: 'phanishwar-nr', categoryId: 'celebrity', name: 'Phanishwar Nath Renu', src: '/assets/photos/Phanishwar_Nath_Renu.png', fact: 'A legendary writer who pioneered the "Aanchalik" (regional) voices in modern Hindi literature, notably "Maila Anchal".' },
  { id: 'bhikhari-t', categoryId: 'celebrity', name: 'Bhikhari Thakur', src: '/assets/photos/Bhikhari_Thakur.png', fact: 'Known as the Shakespeare of Bhojpuri, he was an iconic playwright and social reformer.' },
  { id: 'sharda-s', categoryId: 'celebrity', name: 'Sharda Sinha', src: '/assets/photos/Sharda_Sinha.png', fact: 'The glorious voice of Chhath Puja, a Padma Shri winning folk singer who defined Bihar’s musical identity.' },
  { id: 'makhana-kheer', categoryId: 'food', name: 'Makhana Kheer', src: '/assets/30-55/makhana kheer.webp', fact: 'Bihar completely dominates global Fox Nut (Makhana) production. This roasted makhana milk pudding is considered a royal delicacy.' },
  { id: 'bihari-kebab', categoryId: 'food', name: 'Bihari Kebab', src: '/assets/30-55/bihari kebab.webp', fact: 'Famous for its unbelievably soft texture, achieved by marinating meat with raw papaya and grilling it slowly over charcoal.' },
  { id: 'fish-curry', categoryId: 'food', name: 'Bihari Fish Curry', src: '/assets/30-55/Bihari-Style-Fish-Curry.webp', fact: 'A staple of the riverine state, this robust curry owes its distinct fiery flavor to a paste of freshly ground yellow mustard seeds.' },
  { id: 'aloo-chana', categoryId: 'food', name: 'Aloo Chana Curry', src: '/assets/30-55/aloo chana curry.webp', fact: 'A hearty, spice-laden breakfast powerhouse featuring potatoes and brown chickpeas, usually devoured with hot puffed puris.' },
  { id: 'chura-dahi', categoryId: 'food', name: 'Chura Dahi', src: '/assets/30-55/dahi-chura.webp', fact: 'The ultimate quick meal of flattened rice mixed with fresh curd and golden jaggery—especially consumed heavily on Makar Sankranti.' },
  { id: 'chanakya', categoryId: 'culture', name: 'Chanakya', src: '/assets/30-55/chanakya.webp', fact: 'The brilliant Mauryan royal advisor from Pataliputra who authored the Arthashastra, an ancient Indian masterpiece text on statecraft.' },
  { id: 'aryabhatta', categoryId: 'culture', name: 'Aryabhatta', src: '/assets/30-55/aryabhatta.webp', fact: 'The genius 5th-century mathematician from ancient Bihar who gave the world the digit "zero" and was the first to accurately calculate pi.' },
  { id: 'dashrath', categoryId: 'culture', name: 'Dashrath Manjhi', src: '/assets/30-55/dashrath_manjhi.webp', fact: 'The legendary "Mountain Man" who heroically spent 22 years single-handedly carving a road right through a mountain using only a hammer.' },
  { id: 'jain-buddha', categoryId: 'culture', name: 'Buddhism Traditions', src: '/assets/30-55/buddhism tradition.webp', fact: 'Bihar is literally named after the word "Vihara" (monastery), as the state served as the geographic cradle for both Buddhism and Jainism.' },

  // --- 55+ YEARS ---
  { id: 'lauria', categoryId: 'heritage', name: 'Lauria Nandangarh', src: '/assets/55_plus/Lauriya-Nandangarh.webp', fact: 'Features a perfectly preserved 32-foot Ashokan pillar from 244 BCE, still retaining its incredible, mirror-like Mauryan polish.' },
  { id: 'mundeshwari', categoryId: 'heritage', name: 'Mundeshwari Temple', src: '/assets/55_plus/Mundeshwari-Temple.webp', fact: 'Standing boldly on the Kaimur hills since 108 AD, it is historically considered the oldest functional Hindu temple in the world.' },
  { id: 'v-ruins', categoryId: 'heritage', name: 'Vikramshila Ruins', src: '/assets/55_plus/ruins-of-vikramshila.webp', fact: 'Excavations in Bhagalpur revealed a massive square monastery complex featuring over 100 cells, violently destroyed around 1200 CE.' },
  { id: 'layout', categoryId: 'heritage', name: 'Old Nalanda Layout', src: '/assets/55_plus/old nalanda.webp', fact: 'The ancient campus spanned 14 hectares, meticulously organized with red brick monasteries aligned directly opposite exquisite temples.' },
  { id: 'telhara', categoryId: 'heritage', name: 'Telhara University', src: '/assets/55_plus/Telhara-University.webp', fact: 'Recent excavations uncovered this forgotten university, originally mentioned by the Chinese traveler Hiuen Tsang as being even older than Nalanda!' },
  { id: 'rajendra-p', categoryId: 'celebrity', name: 'Rajendra Prasad', src: '/assets/55_plus/Rajendra_Prasad.png', fact: 'The distinguished first President of India, who hailed from Ziradei in Bihar and guided the nation’s constitution.' },
  { id: 'jayaprakash-n', categoryId: 'celebrity', name: 'Jayaprakash Narayan', src: '/assets/55_plus/Jayaprakash_Narayan.png', fact: 'Known as Lok Nayak, a heroic socialist leader who transformed Indian politics through a massive grassroots revolution.' },
  { id: 'kunwar-s', categoryId: 'celebrity', name: 'Kunwar Singh', src: '/assets/55_plus/Kunwar_Singh.png', fact: 'At age 80, this majestic ruler led the mighty 1857 armed rebellion against the British from Jagdishpur.' },
  { id: 'vidyapati', categoryId: 'celebrity', name: 'Vidyapati', src: '/assets/55_plus/Vidyapati.png', fact: 'A supreme Maithili poet and Sanskrit writer whose deeply emotional songs are sung even centuries later.' },
  { id: 'malpua', categoryId: 'food', name: 'Malpua', src: '/assets/55_plus/malpua.webp', fact: 'A rich, deep-fried, fennel-flavored sweet pancake soaked in sugar syrup. It is the mandatory centerpiece dessert during Holi in Bihar.' },
  { id: 'gur-sweets', categoryId: 'food', name: 'Gur Sweets', src: '/assets/55_plus/gud sweets.webp', fact: 'Winter in Bihar signals the arrival of fresh sugarcane jaggery (Nalen Gur), used extensively to replace sugar in traditional health-boosting sweets.' },
  { id: 'khichdi', categoryId: 'food', name: 'Traditional Khichdi', src: '/assets/55_plus/khichdi.webp', fact: 'A deeply entrenched cultural tradition dictates that heavily spiced, ghee-laden Khichdi must be the staple Saturday afternoon meal in Bihar homes.' },
  { id: 'saag-bhaat', categoryId: 'food', name: 'Saag Bhaat', src: '/assets/55_plus/saag bhaat.webp', fact: 'The epitome of rustic culinary simplicity—steamed rice paired with freshly harvested, oil-tempered green leafy vegetables from local farms.' },
  { id: 'handia', categoryId: 'food', name: 'Local Drinks', src: '/assets/55_plus/local drink.webp', fact: 'Handia is an indigenous traditional rice beer brewed exclusively by local tribal groups, holding deep ceremonial and social significance.' },
  { id: 'mauryan-e', categoryId: 'culture', name: 'Mauryan Empire', src: '/assets/55_plus/mauryan empire.webp', fact: 'Ruled fiercely from Pataliputra (modern Patna), it was the first empire in history to conquer and unify almost the entire Indian subcontinent.' },
  { id: 'gupta-e', categoryId: 'culture', name: 'Gupta Empire', src: '/assets/55_plus/gupta-empire-map.webp', fact: 'Centered powerfully in Magadha (Bihar), this era is considered India’s Golden Age due strictly to monumental leaps in astronomy, math, and art.' },
  { id: 'buddhist-c', categoryId: 'culture', name: 'Buddhist Circuits', src: '/assets/55_plus/buddhist circuit.webp', fact: 'The holy footsteps of Lord Buddha map directly across Bihar—from his defining enlightenment in Bodh Gaya to his profound teachings at Vulture Peak.' },

];

export const AGE_GROUPS = {
  under_15: { id: 'under_15', size: 3, label: 'Under 15', tag: ' Young Minds', allowedImages: ['mahabodhi', 'nalanda-u', 'golghar', 'buddha-statue', 'rajgir-hills', 'neha-s', 'khan-s', 'anand-k', 'sonakshi-s', 'litti-chokha', 'sattu-drink', 'thekua', 'khaja', 'chana-ghugni', 'madhubani', 'chhath', 'folk-dance', 'ganga-aarti', 'village-life', 'kesariya-buddha', 'jal-mandir', 'kakolat', 'bhagalpur-silk', 'sherghati', 'ravish-k', 'imtiyaz-a', 'sanjay-m', 'pooja-s', 'khesari-l', 'tilkut', 'anarsa', 'kadhi-bari', 'ghugni', 'lai', 'bhojpuri-cinema', 'angika', 'paag-ceremony', 'bihar-handloom', 'rural-haat'] },
  age_16_30: { id: 'age_16_30', size: 3, label: '16-30 Years', tag: ' Youth', allowedImages: ['barabar-caves', 'sher-shah-tomb', 'ashoka-pillar', 'rajgir-ropeway', 'kesaria-stupa', 'manoj-b', 'pankaj-t', 'sushant-r', 'bismillah-k', 'shatrughan-s', 'sattu-paratha', 'dal-pitha', 'champaran-mutton', 'kadhi-bari', 'tilkut', 'sonepur-mela', 'shrawani-mela', 'mithila-art', 'bhojpuri-songs', 'bidesia', 'kesariya-buddha', 'jal-mandir', 'kakolat', 'bhagalpur-silk', 'sherghati', 'ravish-k', 'imtiyaz-a', 'sanjay-m', 'pooja-s', 'khesari-l', 'anarsa', 'ghugni', 'lai', 'bhojpuri-cinema', 'angika', 'paag-ceremony', 'bihar-handloom', 'rural-haat'] },
  age_30_55: { id: 'age_30_55', size: 3, label: '30-55 Years', tag: ' Adults', allowedImages: ['vikramshila-u', 'rohtasgarh', 'agam-kuan', 'pawapuri', 'ajatshatru', 'prakash-j', 'ramdhari-sd', 'phanishwar-nr', 'bhikhari-t', 'sharda-s', 'makhana-kheer', 'bihari-kebab', 'fish-curry', 'aloo-chana', 'chura-dahi', 'chanakya', 'aryabhatta', 'dashrath', 'magadh', 'jain-buddha'] },
  age_55_plus: { id: 'age_55_plus', size: 3, label: '55+ Years', tag: ' Seniors', allowedImages: ['lauria', 'mundeshwari', 'v-ruins', 'layout', 'telhara', 'rajendra-p', 'jayaprakash-n', 'kunwar-s', 'vidyapati', 'malpua', 'gur-sweets', 'khichdi', 'saag-bhaat', 'handia', 'angika', 'magahi', 'mauryan-e', 'gupta-e', 'buddhist-c'] }
};

export const LS_KEYS = { bestScore: 'bihar-puzzle-best-score' };
export const GAME_MODES = { SLIDER: 'slider', DRAG_DROP: 'drag_drop', JIGSAW: 'jigsaw' };



