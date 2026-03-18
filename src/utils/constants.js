export const CATEGORIES = [
  { 
    id: 'heritage', 
    label: 'Historical Places', 
    icon: '🏛️', 
    image: 'https://imgs.search.brave.com/BNKx-UFzUuinGhZTMweMK0-sWOBNfw2CTIPDSqaIlv0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9oYmxp/bWcubW10Y2RuLmNv/bS9jb250ZW50L2h1/YmJsZS9pbWcvcGF0/bmEvbW10L2FjdGl2/aXRpZXMvbV9Hb2xn/aGFyLTFfbF80ODBf/NjQwLmpwZw', 
    desc: 'Explore the ancient wonders and monuments of Bihar' 
  },
  { 
    id: 'modern', 
    label: 'Modern Bihar', 
    icon: '🏙️', 
    image: 'https://imgs.search.brave.com/Vo08sfiBWyIU5mJiCF8BLMcv3guKUUTX17Q_eXRbMA4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubmF0aXZlcGxh/bmV0LmNvbS9oaS9p/bWcvMjAyNC8wNi9w/dGkxMC0wOS0yMDIz/LTAwMDIxN2ItMTcx/OTA0NDI0MS5qcGc', 
    desc: 'Discover the contemporary side of the state' 
  },
  { 
    id: 'food', 
    label: 'Local Cuisines', 
    icon: '🍲', 
    image: 'https://imgs.search.brave.com/FjyE0J4Kr8Oq_trm3FdKPms2k8Nuv8O5To8wdA2xsWo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9saXR0/aS1jaG9raGEtbGl0/aS1jaG9rYS1zdHVm/ZmVkLWNoYW5hLXNh/dHR1LWluZGlhbi1k/aXNoLWJpaGFyLXNl/cnZlZC1naW5nZXIt/Z2FybGljLW1pbnQt/Y2h1dG5leS1iYWlu/Z2FuLTIxNjg5MjM4/OS5qcGc', 
    desc: 'Taste the traditional, authentic flavors' 
  },
  { 
    id: 'culture', 
    label: 'Rich Art & Culture', 
    icon: '🎨', 
    image: 'https://imgs.search.brave.com/0ZCjBlzYz5kgO2fglyzOPU6wWT0NanXWC8T2c4n0ILM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yZW5k/ZXIuZmluZWFydGFt/ZXJpY2EuY29tL2lt/YWdlcy9pbWFnZXMt/cHJvZmlsZS1mbG93/LzQwMC9pbWFnZXMv/YXJ0d29ya2ltYWdl/cy9tZWRpdW1sYXJn/ZS8xL3dlbGNvbWlu/Zy1lbGVwaGFudC1z/aGlscGEtYWRhdmF0/a2FyLmpwZw', 
    desc: 'Immerse in Madhubani art and local traditions' 
  }
];

export const IMAGES = [
  // --- HERITAGE ---
  {
    id: 'golghar',
    categoryId: 'heritage',
    name: 'Golghar, Patna',
    src: 'https://imgs.search.brave.com/BNKx-UFzUuinGhZTMweMK0-sWOBNfw2CTIPDSqaIlv0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9oYmxp/bWcubW10Y2RuLmNv/bS9jb250ZW50L2h1/YmJsZS9pbWcvcGF0/bmEvbW10L2FjdGl2/aXRpZXMvbV9Hb2xn/aGFyLTFfbF80ODBf/NjQwLmpwZw',
    fact: 'Built in 1786 by Captain John Garstin, Golghar is a massive granary without pillars and offers a panoramic view of Patna and the Ganges.',
  },
  {
    id: 'nalanda',
    categoryId: 'heritage',
    name: 'Nalanda University',
    src: 'https://imgs.search.brave.com/emkX3SnE0lzFxSMu8PP054HuM8ITGa-u80F9ctX-TWk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJhdmVsYW5k/bGVpc3VyZWFzaWEu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy9z/aXRlcy8yLzIwMjQv/MDYvMTgxMzE1NTIv/bmFsYW5kYS0yLmpw/Zw',
    fact: 'Nalanda was ancient India\'s first residential university, hosting thousands of students and teachers from across the world.',
  },
  {
    id: 'mahabodhi',
    categoryId: 'heritage',
    name: 'Mahabodhi Temple',
    src: 'https://imgs.search.brave.com/ucOOrGCFVqZKxQGxv-cce4E6-rtZtAexqu_AQE6khQw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFHaklXNmRxMUwu/anBn',
    fact: 'A UNESCO World Heritage site, it marks the location where Lord Buddha attained Enlightenment under the Bodhi tree.',
  },
  {
    id: 'vikramshila',
    categoryId: 'heritage',
    name: 'Vikramshila University',
    src: 'https://imgs.search.brave.com/ooqCkiQL_csUSkctKBeRQm6F50ADCTg-4rsxa9bEJ7s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9oaXN0/b3JpZmllZC5pbi93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/NS9TY3JlZW5zaG90/XzIwMjAwNTMxLTE1/MzUzNi03MjB4NTYw/LmpwZw',
    fact: 'Vikramshila was another premier Buddhist university of ancient India, founded by King Dharmapala.',
  },
  {
    id: 'sher-shah-tomb',
    categoryId: 'heritage',
    name: 'Sher Shah Suri Tomb',
    src: 'https://imgs.search.brave.com/P6ElWm0FlD3fFJ5Bd-yOK5WxNiBbpIUW5tWJ0v7_-3s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zaGVy/LXNoYWgtc3VyaS10/b21iLWluZG8taXNs/YW1pYy1hcmNoaXRl/Y3R1cmUtZGVjLXNo/ZXItc2hhaC1zdXJp/LXRvbWItaW5kby1p/c2xhbWljLWFyY2hp/dGVjdHVyZS1zYXNh/cmFtLWJpaGFyLWlu/ZGlhLTI3ODk4NzA0/My5qcGc',
    fact: 'Located in Sasaram, this tomb is an Indo-Islamic architectural marvel standing in the middle of an artificial lake.',
  },
  {
    id: 'barabar-caves',
    categoryId: 'heritage',
    name: 'Barabar Caves',
    src: 'https://imgs.search.brave.com/gNS9wl8pwN04xRxHVgrXVTmOmZo1lHt2F8RRDNOhxHY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Z29zYWhpbi5jb20v/Z28vcC9mL3QxLzE1/NDYxODQ5NDRfYmFy/YWJhci1jYXZlcy1z/dWx0YW5wdXIyLmpw/Zw',
    fact: 'These are the oldest surviving rock-cut caves in India, dating back to the Maurya Empire.',
  },
  {
    id: 'kesaria-stupa',
    categoryId: 'heritage',
    name: 'Kesaria Stupa',
    src: 'https://imgs.search.brave.com/Fgv7Xrw8mXOJlGuSJ7UC-cu_x3dosJdra0Y_Jyw0qRY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wd29u/bHlpYXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzA0/L3VudGl0bGVkLTIw/MjQtMDQtMjB0MTIx/NjI5MTU1LTEtNjYy/MzhkYjlhYTJhOS53/ZWJw',
    fact: 'Kesaria Stupa is world\'s largest Buddhist stupa, even larger than the one in Sanchi.',
  },
  {
    id: 'rohtasgarh-fort',
    categoryId: 'heritage',
    name: 'Rohtasgarh Fort',
    src: 'https://imgs.search.brave.com/2Hh7QJZfF7osTlyGOCtORHMxYsPL6RnTW7yiyDErA2E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudGVsZWdyYXBo/aW5kaWEuY29tL3Rl/bGVncmFwaC8yMDIz/L05vdi8xNjk5MTQz/OTUwX2ZvcnQuZ2lm.jpeg',
    fact: 'One of the most ancient and strongest forts in India, situated atop the Kaimur hills.',
  },
  {
    id: 'agam-kuan',
    categoryId: 'heritage',
    name: 'Agam Kuan',
    src: 'https://imgs.search.brave.com/-WEwBH7ZZ2gg58odjjyFKAdPH-XQToSXbXo7NC-R4rE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zN2Fw/MS5zY2VuZTcuY29t/L2lzL2ltYWdlL2lu/Y3JlZGlibGVpbmRp/YS9hZ2FtLWt1YW4t/cGF0bmEtYmloYXIt/Mi1tdXN0aGVhZC1o/ZXJvP3FsdD04MiZ0/cz0xNzQyMTYyNTk1/MjMy',
    fact: 'An ancient well associated with Maurya Emperor Ashoka, believed to have unplumbed depth.',
  },
  {
    id: 'patna-sahib',
    categoryId: 'heritage',
    name: 'Patna Sahib Gurudwara',
    src: 'https://imgs.search.brave.com/U1X-8Uv-XXMaLKc2_t2mb7hoC5n-tSz42GbmfEp1rkc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4x/LnRyaXBvdG8uY29t/L21lZGlhL2ZpbHRl/ci9ubC9pbWcvMjM4/MDI5MS9JbWFnZS8x/NzA4MDc1ODc3X3Rh/a2hhdF9zcmlfaGFy/aW1hbmRpcl9qaV9w/YXRuYV9zYWhpYl8x/M2FuZ2xlLmpwZy53/ZWJw',
    fact: 'Birthplace of Guru Gobind Singh Ji, it is one of the five Takhts of the Sikh Religion.',
  },

  // --- MODERN ---
  {
    id: 'patna-skyline',
    categoryId: 'modern',
    name: 'Patna Skyline',
    src: 'https://imgs.search.brave.com/uOQdOfEURz_1KqrOa42m1nHV5jQk1WPJKs8taCI2nt0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hczEu/ZnRjZG4ubmV0L2pw/Zy8wMS81OC84Mi8y/Ni8xMDAwX0ZfMTU4/ODIyNjQ0X1VmN3pQ/MEh6Uzc4NXR5aWM1/ZFE3NUx6RkR6eW5N/eWZoLmpwZw',
    fact: 'Patna is one of the fastest growing cities in India with a booming infrastructure.',
  },
  {
    id: 'sabhyata-dwar',
    categoryId: 'modern',
    name: 'Sabhyata Dwar',
    src: 'https://imgs.search.brave.com/dwCDGmungdjaGzJ49qNTeUteJqZtRb2CMDC9DRlaBP8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zZWF3/YXRlcnNwb3J0cy5j/b20vaW1hZ2VzL3Bs/YWNlcy9zYWJoeWF0/YS1kd2FyLnBuZw',
    fact: 'The Civilization Gate symbolizes the rich history and cultural heritage of Bihar.',
  },
  {
    id: 'ganga-riverfront',
    categoryId: 'modern',
    name: 'Ganga Riverfront',
    src: 'https://imgs.search.brave.com/Kyi0pfvqXYw9GtniOMj7y8DRC087nF_mxZVQsZW7Eco/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zN2Fw/MS5zY2VuZTcuY29t/L2lzL2ltYWdlL2lu/Y3JlZGlibGVpbmRp/YS9kYW1hbi1nYW5n/YS1yaXZlcmZyb250/LXNpbHZhc3NhLWRh/bWFuLSYtZGl1LTIt/YXR0ci1oZXJvP3Fs/dD04MiZ0cz0xNzI2/ODE2MzY5Mjg5',
    fact: 'A modern development along the Ganges with walkways, ghats, and leisure spots.',
  },
  {
    id: 'aiims-patna',
    categoryId: 'modern',
    name: 'AIIMS Patna',
    src: 'https://imgs.search.brave.com/HEUILIt4W5_VpzcvTyCfd1IE0fJsgEzwBbOeCaxu41U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ibG9n/LnJtZ29lLm9yZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/Ny9BSUlNUy1QYXRu/YS0xLndlYnA',
    fact: 'A premier medical institute and hospital representing Bihar\'s healthcare advancement.',
  },
  {
    id: 'patna-metro',
    categoryId: 'modern',
    name: 'Patna Metro',
    src: 'https://imgs.search.brave.com/FzCjMW6AX0lMJbkYYIjA86w7tuWaezd0syi9LS17-6g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bXlwYXRuYW1ldHJv/LmNvbS9pbWFnZXMv/cGF0bmFtZXRyb2lt/Zy5qcGc',
    fact: 'Upcoming metro network that will transform Bihar\'s capital connectivity.',
  },
  {
    id: 'ecopark',
    categoryId: 'modern',
    name: 'Eco Park Patna',
    src: 'https://imgs.search.brave.com/v-ycMUUAfMNKg9-58Zx9v1vEbN7ytCqiDhx6x4OPVG4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MDgvOWQvNmMvYjgv/ZWNvLXBhcmstcmFq/ZGhhbmktdmF0aWth/LmpwZw',
    fact: 'A large green lung in the heart of the city with lakes and lush gardens.',
  },
  {
    id: 'bihar-museum',
    categoryId: 'modern',
    name: 'Bihar Museum',
    src: 'https://imgs.search.brave.com/J04teGGNvPqJ1v7x5Pp--0ELKHdzhq743lOJpfjPDGk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zd2Fy/YWp5YS5ndW1sZXQu/aW8vc3dhcmFqeWEv/MjAyNS0wNC0yMy9z/ZGQ1bm85bS9pbWFn/ZS0xMjAweDgwMC5q/cGc_dz0xMjIwJnE9/MTAwJmNvbXByZXNz/PXRydWUmZm9ybWF0/PWF1dG8',
    fact: 'World-class museum showcasing the history and culture of Bihar across millennia.',
  },
  {
    id: 'jp-path',
    categoryId: 'modern',
    name: 'JP Ganga Path',
    src: 'https://imgs.search.brave.com/Dsi1_mWQPrL19iHRuR8DU3k2tpgzVfLT3yMsynTlGyI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bmV3czRuYXRpb24u/Y29tL0Nsb3VkL25l/d3MvY292ZXJpbWFn/ZS8yME5vdjIwMjUv/Y2RmYTFiYjUtYTRi/ZC00ODFlLTkwNzkt/ZjZkMDNmMmU5NDI5/LmpwZz93aWR0aD03/MzI',
    fact: 'Popularly known as the "Marine Drive of Patna", it\'s a stunning expressway along the Ganges.',
  },

  // --- FOOD ---
  {
    id: 'litti-chokha',
    categoryId: 'food',
    name: 'Litti Chokha',
    src: 'https://images.unsplash.com/photo-1585938389612-a552a28d6914?auto=format&fit=crop&w=800&q=80',
    fact: 'Iconic Bihar fuel: roasted dough balls stuffed with spiced sattu, served with mashed veg side.',
  },
  {
    id: 'thekua',
    categoryId: 'food',
    name: 'Thekua',
    src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    fact: 'Signature Bihar cookie made of whole wheat flour and jaggery, famous for Chhath Puja.',
  },
  {
    id: 'sattu-drink',
    categoryId: 'food',
    name: 'Sattu Drink',
    src: 'https://images.unsplash.com/photo-1614742718915-d9585675cc50?auto=format&fit=crop&w=800&q=80',
    fact: 'Natural protein cooler made from roasted gram flour, a refreshing staple of Bihar.',
  },
  {
    id: 'khaja',
    categoryId: 'food',
    name: 'Khaja',
    src: 'https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?auto=format&fit=crop&w=800&q=80',
    fact: 'Multilayered, crispy sweet pastry that melts in your mouth, traditionally from Silao.',
  },
  {
    id: 'malpua',
    categoryId: 'food',
    name: 'Malpua',
    src: 'https://images.unsplash.com/photo-1596791016021-04285e2b02a9?auto=format&fit=crop&w=800&q=80',
    fact: 'Syrup-soaked pancakes made from flour, milk, and bananas, a festive Bihar favorite.',
  },
  {
    id: 'ghugni',
    categoryId: 'food',
    name: 'Chana Ghugni',
    src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    fact: 'Spicy black chickpea curry, a popular street food and breakfast item in Bihar.',
  },
  {
    id: 'balushahi',
    categoryId: 'food',
    name: 'Balushahi',
    src: 'https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?auto=format&fit=crop&w=800&q=80',
    fact: 'Puff pastry doughnuts made of refined flour and deep-fried in ghee.',
  },

  // --- CULTURE ---
  {
    id: 'madhubani',
    categoryId: 'culture',
    name: 'Madhubani Painting',
    src: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&w=800&q=80',
    fact: 'Mithila art style characterized by geometric patterns and vibrant herbal colors.',
  },
  {
    id: 'sikki-art',
    categoryId: 'culture',
    name: 'Sikki Art',
    src: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    fact: 'Ancient golden grass weaving craft from Mithila used for baskets and ornaments.',
  },
  {
    id: 'bamboo-craft',
    categoryId: 'culture',
    name: 'Bamboo Craft',
    src: 'https://images.unsplash.com/photo-1590487988330-8049878b4004?auto=format&fit=crop&w=800&q=80',
    fact: 'Eco-friendly intricate handicrafts made from bamboo and cane surplus in Bihar.',
  },
  {
    id: 'jatjatin',
    categoryId: 'culture',
    name: 'Jat Jatin Dance',
    src: 'https://images.unsplash.com/photo-1496024840928-4c41702d1c3a?auto=format&fit=crop&w=800&q=80',
    fact: 'Famous folk dance of Mithila region depicting the romantic life of Jat and Jatin.',
  },
  {
    id: 'bidesia',
    categoryId: 'culture',
    name: 'Bidesia Dance',
    src: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=800&q=80',
    fact: 'Powerful folk theatre style created by Bhikhari Thakur, capturing migrant emotions.',
  },
  {
    id: 'sama_chakeva',
    categoryId: 'culture',
    name: 'Sama Chakeva',
    src: 'https://images.unsplash.com/photo-1520110321528-76632fa998a1?auto=format&fit=crop&w=800&q=80',
    fact: 'Festival celebrating the bond between brothers and sisters in Rural Bihar.',
  },
  {
    id: 'chhath',
    categoryId: 'culture',
    name: 'Chhath Puja',
    src: 'https://images.unsplash.com/photo-1598460676451-8b2b73ee0aeb?auto=format&fit=crop&w=800&q=80',
    fact: 'Ancient Vedic festival dedicated to Surya Dev, the only festival where setting sun is worshiped.',
  }
];

export const GRID_SIZES = {
  easy: { size: 3, label: 'Easy 3×3' },
  medium: { size: 4, label: 'Medium 4×4' },
};

export const LS_KEYS = {
  bestScore: 'bihar-puzzle-best-score',
};

export const GAME_MODES = {
  SLIDER: 'slider',
  DRAG_DROP: 'drag_drop',
  JIGSAW: 'jigsaw',
};
