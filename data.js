const destinations = [
  // =============================================
  // TAMIL NADU — DEVOTIONAL
  // UNESCO Big Three, Pancha Bhoota Sthalams,
  // Coastal Shrines, Major Hubs, Advanced Circuit
  // =============================================

  // --- UNESCO "Big Three" ---
  {
    id: 1,
    name: "Madurai",
    state: "Tamil Nadu",
    emoji: "🏛️",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Cultural heart of Tamil Nadu — home to the grand Meenakshi Amman Temple with 14 colourful gopurams and the Hall of a Thousand Pillars.",
    spots: [
      { name: "Meenakshi Amman Temple", detail: "14 gopurams, Hall of 1,000 Pillars — cultural icon of Tamil Nadu" },
      { name: "Thirumalai Nayakkar Palace", detail: "17th century Indo-Saracenic palace with grand courtyard" },
      { name: "Alagar Kovil", detail: "Vishnu temple in the Alagar Hills, 21 km from Madurai" },
      { name: "Gandhi Memorial Museum", detail: "Exhibits on India's freedom struggle" },
      { name: "Vandiyur Mariamman Teppakulam", detail: "Huge temple tank — famous for the annual float festival" },
      { name: "Koodal Azhagar Temple", detail: "Rare Vishnu temple where deity faces all four directions — one of 108 Divya Desams" }
    ],
    hotels: [
      { name: "Heritage Madurai", detail: "Luxury heritage — ₹7,000/night" },
      { name: "Hotel Supreme", detail: "Mid-range — ₹1,800/night" },
      { name: "Hotel Tamil Nadu", detail: "Budget — ₹800/night" }
    ],
    stays: [
      { name: "Temple Town Homestay", detail: "Traditional home near the temple" },
      { name: "Chettinad Heritage Stay", detail: "Nearby Chettinad mansion experience" }
    ]
  },
  {
    id: 2,
    name: "Thanjavur",
    state: "Tamil Nadu",
    emoji: "🏛️",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Rice bowl of Tamil Nadu — the UNESCO Brihadeeswarar 'Big Temple' features a 216-ft vimana tower and a massive monolithic Nandi, built by Raja Raja Chola in 1010 AD.",
    spots: [
      { name: "Brihadeeswarar Temple", detail: "UNESCO — 216-ft vimana, shadow never falls on ground at noon" },
      { name: "Thanjavur Royal Palace", detail: "Nayak and Maratha era palace with art gallery" },
      { name: "Saraswathi Mahal Library", detail: "One of Asia's oldest libraries with rare palm-leaf manuscripts" },
      { name: "Schwartz Church", detail: "18th century Danish church built by Raja Serfoji II" }
    ],
    hotels: [
      { name: "Svatma", detail: "Heritage luxury — ₹10,000/night" },
      { name: "Hotel Parisutham", detail: "Mid-range — ₹2,500/night" },
      { name: "Hotel Tamil Nadu (TTDC)", detail: "Budget — ₹900/night" }
    ],
    stays: [
      { name: "Heritage Agraharam Stay", detail: "Traditional Brahmin street home" },
      { name: "Village Farmstay", detail: "Paddy field experience near Thanjavur" }
    ]
  },
  {
    id: 3,
    name: "Darasuram",
    state: "Tamil Nadu",
    emoji: "🏛️",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "UNESCO Great Living Chola Temple — the Airavatesvara Temple is known for its chariot-shaped architecture and intricate stone carvings near Kumbakonam.",
    spots: [
      { name: "Airavatesvara Temple", detail: "UNESCO — chariot-shaped temple with exquisite Chola stone carvings" },
      { name: "Gangaikonda Cholapuram", detail: "Built by Rajendra Chola I — softer, feminine version of the Big Temple" },
      { name: "Kumbakonam Temples", detail: "Cluster of 188 temples in the nearby temple town" },
      { name: "Mahamaham Tank", detail: "Sacred tank where the 12-year Mahamaham festival is held" }
    ],
    hotels: [
      { name: "Sara Regency (Kumbakonam)", detail: "Best nearby — ₹3,000/night" },
      { name: "Hotel Raya's", detail: "Mid-range — ₹1,500/night" },
      { name: "Pilgrim Rest House", detail: "Budget — ₹500/night" }
    ],
    stays: [
      { name: "Agraharam Heritage Stay", detail: "Traditional Brahmin quarter home in Kumbakonam" },
      { name: "Kaveri Delta Farmstay", detail: "Rural life amid paddy fields" }
    ]
  },

  // --- Coastal & Island Shrines ---
  {
    id: 4,
    name: "Rameswaram",
    state: "Tamil Nadu",
    emoji: "🛕",
    category: "devotional",
    rideTypes: ["solo", "bike", "car"],
    description: "Sacred island and Char Dham site — Ramanathaswamy Temple has the world's longest temple corridor and 22 sacred wells for ritual bathing.",
    spots: [
      { name: "Ramanathaswamy Temple", detail: "World's longest corridor at 1,212m — 22 sacred theerthams" },
      { name: "Pamban Bridge", detail: "India's first sea bridge connecting the island to mainland" },
      { name: "Dhanushkodi", detail: "Ghost town at the tip where Bay of Bengal meets Indian Ocean" },
      { name: "Gandhamadhana Parvatham", detail: "Hillock with Ram's footprint imprint" },
      { name: "Agni Theertham", detail: "Sacred beach for ritual holy dip" },
      { name: "Uthirakosamangai Temple", detail: "Ancient Shiva temple with emerald lingam — 30 km from Rameswaram" }
    ],
    hotels: [
      { name: "Hyatt Place", detail: "Premium comfort — ₹5,000/night" },
      { name: "Daiwik Hotels", detail: "Pilgrim-friendly — ₹2,000/night" },
      { name: "Hotel Tamil Nadu (TTDC)", detail: "Government run — ₹1,200/night" }
    ],
    stays: [
      { name: "Seaside Guest House", detail: "Simple stay near the temple" },
      { name: "Fisherman Village Homestay", detail: "Local coastal life experience" }
    ]
  },
  {
    id: 5,
    name: "Kanyakumari",
    state: "Tamil Nadu",
    emoji: "🌅",
    category: "devotional",
    rideTypes: ["solo", "bike", "car"],
    description: "Southernmost tip of India — where Bay of Bengal, Arabian Sea, and Indian Ocean meet. Sunrise and sunset visible from the same spot.",
    spots: [
      { name: "Kumari Amman Temple", detail: "Ancient Devi temple at land's end — three seas confluence" },
      { name: "Vivekananda Rock Memorial", detail: "Iconic memorial on a rock island reached by ferry" },
      { name: "Thiruvalluvar Statue", detail: "133-ft statue of the Tamil poet-saint" },
      { name: "Suchindram Thanumalayan Temple", detail: "Unique Trinity lingam (Shiva+Vishnu+Brahma) with musical pillars" },
      { name: "Padmanabhapuram Palace", detail: "Largest wooden palace of Travancore kings" },
      { name: "Nagaraja Temple (Nagercoil)", detail: "Ancient serpent deity temple — unique Jain-Hindu heritage" }
    ],
    hotels: [
      { name: "Sparsa Resort", detail: "Sea-facing luxury — ₹5,000/night" },
      { name: "Hotel Temple Citi", detail: "Mid-range — ₹1,500/night" },
      { name: "TTDC Hotel", detail: "Budget government stay — ₹800/night" }
    ],
    stays: [
      { name: "Sunrise View Homestay", detail: "Watch sunrise over the ocean" },
      { name: "Coastal Guest House", detail: "Simple stay near the shore" }
    ]
  },
  {
    id: 6,
    name: "Thiruchendur",
    state: "Tamil Nadu",
    emoji: "🌊",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "One of the six abodes of Lord Murugan — uniquely located on the seashore where Murugan defeated the demon Surapadman.",
    spots: [
      { name: "Subrahmanya Swamy Temple", detail: "Arupadai Veedu — seashore Murugan temple with ancient sanctum" },
      { name: "Thiruchendur Beach", detail: "Sacred beach adjacent to the temple" },
      { name: "Manapad", detail: "Nearby coastal town with Holy Cross Church and coral reefs" },
      { name: "Kayalpattinam", detail: "Historic port town with Indo-Islamic heritage" }
    ],
    hotels: [
      { name: "Hotel Tamil Nadu (TTDC)", detail: "Government stay — ₹1,000/night" },
      { name: "Sri Subramanya Lodge", detail: "Budget near temple — ₹600/night" },
      { name: "Tuticorin Hotels", detail: "Nearby city options — ₹1,500/night" }
    ],
    stays: [
      { name: "Temple Town Homestay", detail: "Simple home near the shore temple" },
      { name: "Coastal Village Stay", detail: "Fishing village experience" }
    ]
  },
  // --- Pancha Bhoota Sthalams (Five Elements) ---
  {
    id: 7,
    name: "Tiruvannamalai",
    state: "Tamil Nadu",
    emoji: "🔥",
    category: "devotional",
    rideTypes: ["solo", "bike", "car"],
    description: "Pancha Bhoota Sthalam for Fire — Arunachaleswarar Temple is one of the largest temple complexes in the world at the foot of the sacred Arunachala Hill.",
    spots: [
      { name: "Arunachaleswarar Temple", detail: "Massive 25-acre complex — Fire element of Pancha Bhoota" },
      { name: "Girivalam Path", detail: "14 km sacred circumambulation path around Arunachala Hill" },
      { name: "Sri Ramana Ashram", detail: "Ashram of the revered sage Ramana Maharshi" },
      { name: "Virupaksha Cave", detail: "Cave where Ramana Maharshi meditated for 17 years" },
      { name: "Karthigai Deepam Festival", detail: "Massive fire lit atop Arunachala — visible for miles" }
    ],
    hotels: [
      { name: "Sparsa Resort", detail: "Luxury — ₹5,000/night" },
      { name: "Hotel Arunachala", detail: "Mid-range — ₹1,500/night" },
      { name: "Ashram Guest House", detail: "Budget spiritual stay — ₹400/night" }
    ],
    stays: [
      { name: "Girivalam Path Homestay", detail: "On the sacred circumambulation route" },
      { name: "Hilltop Meditation Retreat", detail: "Silent retreat near Arunachala" }
    ]
  },
  {
    id: 8,
    name: "Chidambaram",
    state: "Tamil Nadu",
    emoji: "✨",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Pancha Bhoota Sthalam for Space (Akasha) — Thillai Nataraja Temple houses the Cosmic Dancer form of Shiva and the mysterious Chidambaram Rahasyam.",
    spots: [
      { name: "Nataraja Temple", detail: "Space element — gold-roofed sanctum with the Chidambaram Secret" },
      { name: "Thillai Kali Amman Temple", detail: "Powerful Kali temple on the outskirts" },
      { name: "Pichavaram Mangrove Forest", detail: "Second largest mangrove — boat rides through 1,100 hectares" },
      { name: "Annamalai University", detail: "Historic campus with beautiful architecture" },
      { name: "Veerattaneswarar Temple (Panruti)", detail: "One of the Ashta Veerattanam — Shiva as the slayer of Andhaka" }
    ],
    hotels: [
      { name: "Hotel Saradharam", detail: "Near temple — ₹2,000/night" },
      { name: "Hotel Akshaya", detail: "Mid-range — ₹1,200/night" },
      { name: "Pilgrim Lodge", detail: "Budget — ₹500/night" }
    ],
    stays: [
      { name: "Agraharam Homestay", detail: "Traditional home in the temple town" },
      { name: "Pichavaram Eco Stay", detail: "Near the mangrove backwaters" }
    ]
  },
  {
    id: 9,
    name: "Srirangam (Trichy)",
    state: "Tamil Nadu",
    emoji: "💧",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Largest functioning Hindu temple in the world at 156 acres — Jambukeswarar Temple nearby represents the Water element of Pancha Bhoota.",
    spots: [
      { name: "Ranganathaswamy Temple", detail: "156 acres, 21 gopurams, 7 prakarams — largest functioning Hindu temple" },
      { name: "Jambukeswarar Temple", detail: "Pancha Bhoota Water element — perennial underground spring in sanctum" },
      { name: "Rock Fort Temple", detail: "Ancient temple atop 83m rock — 360° city views" },
      { name: "Ucchi Pillayar Temple", detail: "Ganesh temple on 3.8 billion-year-old rock with panoramic views" },
      { name: "Kallanai Dam", detail: "2,000-year-old dam built by Karikala Chola on river Kaveri" }
    ],
    hotels: [
      { name: "Sangam Hotel Trichy", detail: "Premium — ₹4,000/night" },
      { name: "Hotel Femina", detail: "Mid-range — ₹1,800/night" },
      { name: "TTDC Hotel", detail: "Budget — ₹800/night" }
    ],
    stays: [
      { name: "Temple Town Homestay", detail: "Within the temple prakarams" },
      { name: "Kaveri Riverside Stay", detail: "Peaceful stay by the river" }
    ]
  },
  {
    id: 10,
    name: "Kanchipuram",
    state: "Tamil Nadu",
    emoji: "🌍",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "City of Thousand Temples — Ekambareswarar Temple represents Earth in the Pancha Bhoota, with a 3,500-year-old mango tree yielding four types of fruit.",
    spots: [
      { name: "Ekambareswarar Temple", detail: "Pancha Bhoota Earth element — 3,500-year-old mango tree" },
      { name: "Kamakshi Amman Temple", detail: "Major Shakti Peedam — one of India's holiest Devi shrines" },
      { name: "Kailasanathar Temple", detail: "Oldest Pallava temple in Kanchipuram — stunning sandstone carvings" },
      { name: "Varadharaja Perumal Temple", detail: "Major Vishnu temple with 100-pillar mandapam" },
      { name: "Silk Weaving Centre", detail: "Famous Kanchipuram silk saree workshops" }
    ],
    hotels: [
      { name: "GRT Regency", detail: "Best in town — ₹4,000/night" },
      { name: "Hotel Baboo Soorya", detail: "Mid-range — ₹1,500/night" },
      { name: "TTDC Hotel", detail: "Budget — ₹800/night" }
    ],
    stays: [
      { name: "Silk Town Homestay", detail: "Stay with silk weaving families" },
      { name: "Temple Circuit Guesthouse", detail: "Walking distance to major temples" }
    ]
  },
  // --- Major Spiritual Hubs ---
  {
    id: 11,
    name: "Palani",
    state: "Tamil Nadu",
    emoji: "⛰️",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Most famous of the six abodes of Lord Murugan — hilltop temple reachable via 693 steps or cable car, with the idol made of Navapashanam.",
    spots: [
      { name: "Dhandayuthapani Temple", detail: "Arupadai Veedu — hilltop Murugan temple via 693 steps or cable car" },
      { name: "Idumban Temple", detail: "Temple of Murugan's devotee at the hill base" },
      { name: "Palani Hills", detail: "Scenic hills surrounding the temple town" },
      { name: "Thaipusam Festival", detail: "Massive annual festival with kavadi processions" },
      { name: "Lakshmi Narasimhar Temple", detail: "Ancient Vishnu temple at Narasingapuram near Palani hills" }
    ],
    hotels: [
      { name: "Hotel Subam", detail: "Near temple — ₹1,500/night" },
      { name: "GRT Regency Palani", detail: "Mid-range — ₹2,500/night" },
      { name: "Devasthanam Guest House", detail: "Budget pilgrim stay — ₹400/night" }
    ],
    stays: [
      { name: "Hilltop Ashram", detail: "Spiritual stay near the temple" },
      { name: "Palani Town Homestay", detail: "Local family home" }
    ]
  },
  {
    id: 12,
    name: "Chennai (Mylapore)",
    state: "Tamil Nadu",
    emoji: "🛕",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Kapaleeshwarar Temple in Mylapore — iconic 7th-century Shiva temple with vibrant Dravidian sculptures and the sacred temple tank.",
    spots: [
      { name: "Kapaleeshwarar Temple", detail: "7th-century Shiva temple — vibrant gopuram and sacred tank" },
      { name: "San Thome Basilica", detail: "Gothic church over the tomb of Apostle St. Thomas" },
      { name: "Parthasarathy Temple", detail: "One of the oldest temples in Chennai — 8th century Pallava era" },
      { name: "Santhome Beach", detail: "Quiet beach near the basilica" }
    ],
    hotels: [
      { name: "Taj Coromandel", detail: "Luxury — ₹8,000/night" },
      { name: "Hanu Reddy Residences", detail: "Heritage boutique — ₹3,500/night" },
      { name: "Zostel Chennai", detail: "Budget hostel — ₹500/night" }
    ],
    stays: [
      { name: "Mylapore Heritage Stay", detail: "Traditional home in the temple quarter" },
      { name: "Besant Nagar Apartment", detail: "Near Elliot's Beach" }
    ]
  },
  {
    id: 13,
    name: "Kumbakonam",
    state: "Tamil Nadu",
    emoji: "🛕",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Temple town of the Kaveri delta — 188 temples, Navagraha circuit, and the 12-year Mahamaham festival. Adi Kumbeswarar's lingam is made of sand and nectar.",
    spots: [
      { name: "Adi Kumbeswarar Temple", detail: "Main Shiva temple — lingam made of sand and nectar" },
      { name: "Sarangapani Temple", detail: "Largest Vishnu temple in Kumbakonam with towering gopuram" },
      { name: "Navagraha Temples", detail: "Nine temples for the nine planetary deities — unique circuit" },
      { name: "Mahamaham Tank", detail: "Sacred tank for the 12-year Mahamaham festival" },
      { name: "Airavatesvara Temple (Darasuram)", detail: "UNESCO Chola temple nearby with stone chariot" },
      { name: "Nageswaran Temple", detail: "Ancient Chola-era Shiva temple — one of the oldest in Kumbakonam" }
    ],
    hotels: [
      { name: "Sara Regency", detail: "Best in town — ₹3,000/night" },
      { name: "Hotel Raya's", detail: "Mid-range — ₹1,500/night" },
      { name: "Pilgrim Rest House", detail: "Budget — ₹500/night" }
    ],
    stays: [
      { name: "Agraharam Heritage Stay", detail: "Traditional Brahmin quarter home" },
      { name: "Kaveri Delta Farmstay", detail: "Rural life amid paddy fields" }
    ]
  },
  {
    id: 14,
    name: "Srivilliputhur",
    state: "Tamil Nadu",
    emoji: "🏯",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Birthplace of Andal — the 192-ft Rajagopuram is so iconic it serves as the official emblem of the Tamil Nadu Government.",
    spots: [
      { name: "Andal Temple", detail: "192-ft Rajagopuram — official emblem of Tamil Nadu Government" },
      { name: "Nachiyar Kovil", detail: "Temple where Andal is believed to have merged with Vishnu" },
      { name: "Srivilliputhur Megamalai Tiger Reserve", detail: "Nearby wildlife reserve with cloud forests" },
      { name: "Ayyanar Falls", detail: "Seasonal waterfall in the reserve" }
    ],
    hotels: [
      { name: "Local Lodge", detail: "Basic stay — ₹600/night" },
      { name: "Virudhunagar Hotels", detail: "Nearby town options — ₹1,200/night" },
      { name: "Rajapalayam Hotels", detail: "Nearby town — ₹1,000/night" }
    ],
    stays: [
      { name: "Temple Town Homestay", detail: "Simple home near the temple" },
      { name: "Village Stay", detail: "Rural Tamil Nadu experience" }
    ]
  },
  {
    id: 15,
    name: "Tirunelveli",
    state: "Tamil Nadu",
    emoji: "🎵",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Home to the Nellaiappar Temple — famous for its Musical Pillars that produce different notes when tapped, and the twin temple of Kanthimathi.",
    spots: [
      { name: "Nellaiappar Temple", detail: "Famous Musical Pillars producing different notes when tapped" },
      { name: "Krishnapuram Palace", detail: "18th century Nayak palace with largest single mural in India" },
      { name: "Courtallam Falls", detail: "Spa of South India — medicinal waterfalls 60 km away" },
      { name: "Sikkal Singaravelan Temple", detail: "Murugan idol said to perspire during Soorasamharam festival" },
      { name: "Papanasanathar Temple", detail: "Ancient Shiva temple on the banks of Thamiraparani river — sins washed away" }
    ],
    hotels: [
      { name: "Hotel Aryaas", detail: "Best in town — ₹2,000/night" },
      { name: "Hotel Janakiram", detail: "Mid-range — ₹1,200/night" },
      { name: "TTDC Hotel", detail: "Budget — ₹700/night" }
    ],
    stays: [
      { name: "Courtallam Homestay", detail: "Near the famous spa falls" },
      { name: "Heritage Home", detail: "Traditional Tirunelveli home" }
    ]
  },
  {
    id: 78,
    name: "Velankanni",
    state: "Tamil Nadu",
    emoji: "⛪",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Basilica of Our Lady of Good Health — one of India's most visited Christian pilgrimage sites, known as the 'Lourdes of the East' on the Coromandel coast.",
    spots: [
      { name: "Velankanni Basilica", detail: "16th-century shrine — major Catholic pilgrimage with annual Novena festival" },
      { name: "Our Lady of Health Church", detail: "Gothic-style church with beautiful stained glass" },
      { name: "Velankanni Beach", detail: "Serene beach adjacent to the basilica" },
      { name: "Nagapattinam Kayarohanaswami Temple", detail: "Ancient Shiva temple in nearby Nagapattinam" }
    ],
    hotels: [
      { name: "Hotel Tamil Nadu (TTDC)", detail: "Government stay — ₹1,000/night" },
      { name: "Pilgrim Guest Houses", detail: "Church-run accommodation — ₹500/night" },
      { name: "Hotel Sea Shore", detail: "Budget near beach — ₹800/night" }
    ],
    stays: [
      { name: "Coastal Homestay", detail: "Simple home near the basilica" },
      { name: "Fisherman Village Stay", detail: "Local coastal life experience" }
    ]
  },
  {
    id: 79,
    name: "Bannari (Erode)",
    state: "Tamil Nadu",
    emoji: "🔱",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Bannari Amman Temple — a renowned Shakti temple at the foothills of the Western Ghats near Sathyamangalam, surrounded by lush forests.",
    spots: [
      { name: "Bannari Amman Temple", detail: "Powerful Shakti temple at the Western Ghats foothills" },
      { name: "Sathyamangalam Tiger Reserve", detail: "Nearby wildlife reserve with elephants and tigers" },
      { name: "Bhavanisagar Dam", detail: "One of the largest earthen dams in India" },
      { name: "Kodiveri Falls", detail: "Scenic check dam and waterfall near Gobichettipalayam" }
    ],
    hotels: [
      { name: "Erode Hotels", detail: "Nearby city options — ₹1,500/night" },
      { name: "Local Lodge", detail: "Basic stay near temple — ₹600/night" },
      { name: "Forest Rest House", detail: "Government forest stay — ₹800/night" }
    ],
    stays: [
      { name: "Village Homestay", detail: "Rural life near the Western Ghats" },
      { name: "Farm Stay Gobichettipalayam", detail: "Agricultural experience" }
    ]
  },
  {
    id: 80,
    name: "Nagore",
    state: "Tamil Nadu",
    emoji: "🕌",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Nagore Dargah — a prominent 16th-century Sufi shrine dedicated to Hazrat Syed Shahul Hameed, attracting devotees of all faiths from across South India.",
    spots: [
      { name: "Nagore Dargah", detail: "16th-century Sufi shrine with five minarets — annual Kandoori festival" },
      { name: "Nagore Beach", detail: "Quiet beach near the dargah" },
      { name: "Nagapattinam Temples", detail: "Nearby ancient port town with Hindu and Buddhist heritage" },
      { name: "Sikkal Singaravelan Temple", detail: "Murugan temple 10 km away with unique sweating idol" }
    ],
    hotels: [
      { name: "Dargah Guest House", detail: "Pilgrim accommodation — ₹400/night" },
      { name: "Nagapattinam Hotels", detail: "Nearby town options — ₹1,200/night" },
      { name: "Hotel Tamil Nadu (TTDC)", detail: "Budget — ₹800/night" }
    ],
    stays: [
      { name: "Coastal Homestay", detail: "Simple home near the dargah" },
      { name: "Heritage Stay Nagapattinam", detail: "Colonial-era town experience" }
    ]
  },
  {
    id: 81,
    name: "Tiruvarur",
    state: "Tamil Nadu",
    emoji: "🎶",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Birthplace of the Carnatic music trinity — Thyagaraja Temple houses one of the largest temple chariots in Asia and the sacred Kamalalayam tank.",
    spots: [
      { name: "Thyagaraja Temple", detail: "Massive Shiva temple — one of the largest temple cars in Asia" },
      { name: "Rajagopalaswamy Temple (Mannargudi)", detail: "Largest Krishna temple in South India — 23 km from Tiruvarur" },
      { name: "Kamalalayam Tank", detail: "Sacred temple tank — one of the largest in Tamil Nadu" },
      { name: "Tyagaraja Aradhana", detail: "Annual Carnatic music festival honouring the saint-composer" }
    ],
    hotels: [
      { name: "Hotel Gnanam", detail: "Best in town — ₹1,500/night" },
      { name: "Local Lodge", detail: "Budget near temple — ₹600/night" },
      { name: "Nagapattinam Hotels", detail: "Nearby options — ₹1,200/night" }
    ],
    stays: [
      { name: "Temple Town Homestay", detail: "Traditional home near the temple" },
      { name: "Delta Village Stay", detail: "Kaveri delta rural experience" }
    ]
  },
  {
    id: 82,
    name: "Vellore",
    state: "Tamil Nadu",
    emoji: "✨",
    category: "devotional",
    rideTypes: ["solo", "bike", "car"],
    description: "Home to the Sripuram Golden Temple — 1,500 kg of gold covering the temple, and the historic Jalakandeswarar Temple inside Vellore Fort.",
    spots: [
      { name: "Sripuram Golden Temple", detail: "1,500 kg gold-plated temple — stunning star-shaped walkway" },
      { name: "Jalakandeswarar Temple", detail: "16th-century Vijayanagara temple inside Vellore Fort" },
      { name: "Vellore Fort", detail: "16th-century fort with moat, church, and mosque within" },
      { name: "Science Park", detail: "Interactive science exhibits for families" }
    ],
    hotels: [
      { name: "Hotel Darling Residency", detail: "Best in town — ₹3,000/night" },
      { name: "GRT Regency", detail: "Mid-range — ₹2,000/night" },
      { name: "Hotel Rivers", detail: "Budget — ₹1,000/night" }
    ],
    stays: [
      { name: "Fort Area Homestay", detail: "Near the historic fort" },
      { name: "CMC Campus Guest House", detail: "Quiet stay near the medical campus" }
    ]
  },
  {
    id: 83,
    name: "Kodumudi (Erode)",
    state: "Tamil Nadu",
    emoji: "🛕",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Magudeeswarar Temple — ancient Shiva temple on the banks of river Kaveri, one of the Saptha Vidanga Sthalams with a unique dancing Shiva form.",
    spots: [
      { name: "Magudeeswarar Temple", detail: "Saptha Vidanga Sthalam — unique dancing Shiva on the Kaveri banks" },
      { name: "Kaveri River Ghat", detail: "Sacred bathing ghat with scenic river views" },
      { name: "Bhavani Sangameshwarar Temple", detail: "Confluence of three rivers — 25 km away" },
      { name: "Erode Market", detail: "Famous turmeric and textile market" }
    ],
    hotels: [
      { name: "Erode Hotels", detail: "Nearby city options — ₹1,500/night" },
      { name: "Local Lodge", detail: "Basic stay near temple — ₹500/night" },
      { name: "Gobichettipalayam Hotels", detail: "Nearby town — ₹800/night" }
    ],
    stays: [
      { name: "Riverside Homestay", detail: "Simple home on the Kaveri banks" },
      { name: "Village Stay", detail: "Rural Erode district experience" }
    ]
  },
  // =============================================
  // TAMIL NADU — HILL STATIONS
  // Source: tamilnadutourism.com + Gemini offbeat
  // =============================================
  {
    id: 16,
    name: "Ooty",
    state: "Tamil Nadu",
    emoji: "🌄",
    category: "hill-station",
    rideTypes: ["solo", "bike", "car"],
    description: "Queen of Hill Stations in the Nilgiris — tea gardens, the UNESCO Nilgiri Mountain Railway, and misty peaks at 2,240m.",
    spots: [
      { name: "Botanical Garden", detail: "22-hectare garden with over 1,000 plant species" },
      { name: "Doddabetta Peak", detail: "Highest point in the Nilgiris at 2,637m" },
      { name: "Nilgiri Mountain Railway", detail: "UNESCO heritage toy train from Mettupalayam" },
      { name: "Ooty Lake", detail: "Boating surrounded by eucalyptus groves" },
      { name: "Tea Museum", detail: "Nilgiri tea processing and heritage" },
      { name: "Kalhatty Ghats", detail: "36 hairpin bends — one of the steepest routes to Ooty, restricted for heavy vehicles" }
    ],
    hotels: [
      { name: "Savoy Hotel - IHCL", detail: "Heritage luxury since 1829 — ₹8,000/night" },
      { name: "Sterling Ooty Elk Hill", detail: "Mid-range resort — ₹3,000/night" },
      { name: "Zostel Ooty", detail: "Budget hostel — ₹500/night" }
    ],
    stays: [
      { name: "Tea Estate Bungalow", detail: "Colonial bungalow amid tea gardens" },
      { name: "Hilltop Cottage", detail: "Cozy cottage with valley views" }
    ]
  },
  {
    id: 17,
    name: "Kodaikanal",
    state: "Tamil Nadu",
    emoji: "🌸",
    category: "hill-station",
    rideTypes: ["bike", "car"],
    description: "Princess of Hill Stations — star-shaped lake, mist-laden cliffs, dense forests, and pine-scented air at 2,133m.",
    spots: [
      { name: "Kodai Lake", detail: "Star-shaped lake for boating and cycling" },
      { name: "Coaker's Walk", detail: "Cliffside walkway with panoramic valley views" },
      { name: "Pillar Rocks", detail: "Three giant rock pillars rising 400ft" },
      { name: "Dolphin's Nose", detail: "Flat rock projecting over a steep fall" },
      { name: "Bryant Park", detail: "Botanical garden with rare flowers" }
    ],
    hotels: [
      { name: "The Carlton", detail: "Luxury hilltop — ₹7,000/night" },
      { name: "Hotel Kodai International", detail: "Mid-range — ₹2,000/night" },
      { name: "Backpacker's Hostel", detail: "Budget — ₹450/night" }
    ],
    stays: [
      { name: "Pine Forest Cottage", detail: "Secluded cottage in the woods" },
      { name: "Lakeside Homestay", detail: "Walking distance to Kodai Lake" }
    ]
  },
  {
    id: 18,
    name: "Coonoor",
    state: "Tamil Nadu",
    emoji: "🍵",
    category: "hill-station",
    rideTypes: ["bike", "car"],
    description: "Quieter neighbour of Ooty — rolling tea estates, Sim's Park, and a scenic Nilgiri toy train halt.",
    spots: [
      { name: "Sim's Park", detail: "Botanical garden with over 1,000 plant species" },
      { name: "Dolphin's Nose Viewpoint", detail: "Stunning view of Catherine Falls and the valley" },
      { name: "Lamb's Rock", detail: "Panoramic viewpoint overlooking Coimbatore plains" },
      { name: "Highfield Tea Factory", detail: "Watch tea processing and taste fresh Nilgiri tea" },
      { name: "Hidden Valley", detail: "Secluded valley with trekking trails" }
    ],
    hotels: [
      { name: "Gateway Coonoor - Taj", detail: "Heritage luxury — ₹9,000/night" },
      { name: "YMCA Coonoor", detail: "Budget heritage — ₹1,200/night" },
      { name: "Coonoor Homestay", detail: "Family-run — ₹1,500/night" }
    ],
    stays: [
      { name: "Tea Planter's Bungalow", detail: "Colonial-era bungalow in tea estate" },
      { name: "Hillside Cottage", detail: "Quiet cottage with garden views" }
    ]
  },
  {
    id: 19,
    name: "Yercaud",
    state: "Tamil Nadu",
    emoji: "☕",
    category: "hill-station",
    rideTypes: ["bike", "car"],
    description: "Jewel of the South in the Shevaroy Hills — 20 famous hairpin bends with named turns, coffee plantations, a serene lake, and pleasant climate year-round.",
    spots: [
      { name: "Yercaud Lake", detail: "Scenic lake with boating and surrounding gardens" },
      { name: "Shevaroy Temple", detail: "Hilltop temple at the highest point" },
      { name: "Lady's Seat", detail: "Viewpoint overlooking Salem plains and ghat road" },
      { name: "Kiliyur Falls", detail: "90-ft waterfall reached by a short forest trek" },
      { name: "Pagoda Point", detail: "Four rocks stacked like a pagoda with panoramic views" }
    ],
    hotels: [
      { name: "GRT Nature Trails", detail: "Eco-resort — ₹5,000/night" },
      { name: "Sterling Yercaud", detail: "Resort with pool — ₹4,000/night" },
      { name: "Hotel Tamil Nadu (TTDC)", detail: "Government stay — ₹1,200/night" }
    ],
    stays: [
      { name: "Coffee Estate Homestay", detail: "Wake up to coffee plantations" },
      { name: "Orchard Farmstay", detail: "Surrounded by orange and jackfruit trees" }
    ]
  },
  {
    id: 20,
    name: "Valparai",
    state: "Tamil Nadu",
    emoji: "🌫️",
    category: "hill-station",
    rideTypes: ["bike", "car"],
    description: "Hidden gem in the Anamalai Hills — 40+ hairpin bends through dense tea estates, one of Tamil Nadu's top bike routes. Scenic Athirapally–Valparai ghat road.",
    spots: [
      { name: "Sholayar Dam", detail: "Massive dam surrounded by dense forests" },
      { name: "Monkey Falls", detail: "Refreshing waterfall on the Pollachi-Valparai road" },
      { name: "Nallamudi Viewpoint", detail: "Breathtaking view of the Anamalai ranges" },
      { name: "Grass Hills", detail: "Rolling grasslands ideal for nature walks" }
    ],
    hotels: [
      { name: "Stanmore Bungalow", detail: "Heritage plantation stay — ₹4,500/night" },
      { name: "Hotel Valparai Inn", detail: "Mid-range — ₹1,500/night" },
      { name: "TTDC Guest House", detail: "Budget — ₹800/night" }
    ],
    stays: [
      { name: "Plantation Homestay", detail: "Amidst tea and coffee estates" },
      { name: "Forest Edge Cottage", detail: "Close to Anamalai Tiger Reserve" }
    ]
  },
  {
    id: 21,
    name: "Kotagiri",
    state: "Tamil Nadu",
    emoji: "🏞️",
    category: "hill-station",
    rideTypes: ["bike", "car"],
    description: "Oldest and quietest hill station in the Nilgiris — best climate, pristine tea gardens, and Toda tribal heritage.",
    spots: [
      { name: "Catherine Falls", detail: "Second highest waterfall in the Nilgiris" },
      { name: "Kodanad Viewpoint", detail: "Stunning views of Moyar gorge and Mysore plateau" },
      { name: "Longwood Shola", detail: "Ancient shola forest with nature trails" },
      { name: "Rangaswamy Peak", detail: "Pillar-like rock formation with panoramic views" }
    ],
    hotels: [
      { name: "La Maison", detail: "Boutique heritage — ₹6,000/night" },
      { name: "Sullivan Court", detail: "Mid-range — ₹2,500/night" },
      { name: "Kotagiri Homestay", detail: "Budget — ₹800/night" }
    ],
    stays: [
      { name: "Toda Village Homestay", detail: "Experience indigenous Toda culture" },
      { name: "Tea Garden Cottage", detail: "Surrounded by Nilgiri tea estates" }
    ]
  },
  {
    id: 22,
    name: "Sirumalai",
    state: "Tamil Nadu",
    emoji: "🍌",
    category: "hill-station",
    rideTypes: ["bike", "car"],
    description: "Offbeat eco-friendly hill station near Dindigul — famous for the Sirumalai banana, herbal air, and a calm lake with observation tower.",
    spots: [
      { name: "Sirumalai Lake", detail: "Serene lake surrounded by hills" },
      { name: "Observation Tower", detail: "Panoramic views over Dindigul and the plains" },
      { name: "Agaya Gangai Falls", detail: "Waterfall deep in the Sirumalai forests" },
      { name: "Banana Plantations", detail: "Famous Sirumalai hill banana farms" }
    ],
    hotels: [
      { name: "Sirumalai Hills Resort", detail: "Basic resort — ₹1,500/night" },
      { name: "Dindigul Hotels", detail: "Base town options — ₹1,000/night" },
      { name: "Forest Rest House", detail: "Budget — ₹600/night" }
    ],
    stays: [
      { name: "Hilltop Homestay", detail: "Family home with valley views" },
      { name: "Farm Stay", detail: "Banana and spice plantation experience" }
    ]
  },
  {
    id: 23,
    name: "Javadi Hills",
    state: "Tamil Nadu",
    emoji: "🔭",
    category: "hill-station",
    rideTypes: ["bike", "car"],
    description: "Untamed wilderness in the Eastern Ghats — home to the Vainu Bappu Observatory (one of Asia's largest) and perfect for night sky watching.",
    spots: [
      { name: "Vainu Bappu Observatory", detail: "One of Asia's largest telescopes — stargazing paradise" },
      { name: "Beemanmadavu Falls", detail: "Waterfall reached by a forest trek" },
      { name: "Kavalur Village", detail: "Tribal village near the observatory" },
      { name: "Amirthi Zoological Park", detail: "Mini zoo and waterfall at the foothills" }
    ],
    hotels: [
      { name: "Forest Guest House", detail: "Basic — ₹800/night" },
      { name: "Tirupattur Hotels", detail: "Base town options — ₹1,000/night" },
      { name: "Camping Sites", detail: "Budget tents — ₹400/night" }
    ],
    stays: [
      { name: "Tribal Village Homestay", detail: "Stay with local tribal families" },
      { name: "Observatory Guest House", detail: "Near the telescope complex" }
    ]
  },
  {
    id: 24,
    name: "Manjolai",
    state: "Tamil Nadu",
    emoji: "🌿",
    category: "hill-station",
    rideTypes: ["car"],
    description: "Mini-Ooty inside the Kalakkad Mundanthurai Tiger Reserve — high-altitude tea estates, the Upper Kodaiyar Dam, and pristine cloud forests.",
    spots: [
      { name: "Manjolai Tea Estates", detail: "High-altitude tea gardens with misty views" },
      { name: "Upper Kodaiyar Dam", detail: "Serene reservoir in the cloud forest" },
      { name: "KMTR Forest Trails", detail: "Guided trails through India's first biosphere reserve" },
      { name: "Manimuthar Falls", detail: "Scenic waterfall en route to Manjolai" }
    ],
    hotels: [
      { name: "Estate Bungalow", detail: "Plantation stay — ₹2,000/night" },
      { name: "Tenkasi Hotels", detail: "Base town — ₹1,000/night" },
      { name: "Forest Rest House", detail: "Basic — ₹600/night" }
    ],
    stays: [
      { name: "Tea Estate Cottage", detail: "Amidst the cloud forest tea gardens" },
      { name: "Courtallam Homestay", detail: "Near the famous spa waterfalls" }
    ]
  },
  {
    id: 84,
    name: "Kolli Hills",
    state: "Tamil Nadu",
    emoji: "🏍️",
    category: "hill-station",
    rideTypes: ["bike", "car"],
    description: "Mountain of Death — 70 consecutive hairpin bends on MDR181, Tamil Nadu's most thrilling bike route. Climbs rapidly to 1,300m in Namakkal district with dense forests and waterfalls.",
    spots: [
      { name: "70 Hairpin Bends", detail: "Legendary 70 consecutive turns on MDR181 — starts near Kalappanaickenpatti" },
      { name: "Agaya Gangai Waterfalls", detail: "300-step descent to a stunning waterfall in the forest" },
      { name: "Arapaleeswarar Temple", detail: "Ancient Shiva temple at the hilltop surrounded by forests" },
      { name: "Siddhar Caves", detail: "Ancient caves where sages meditated — scenic forest setting" },
      { name: "Botanical Garden", detail: "Medicinal plants garden maintained by the forest department" }
    ],
    hotels: [
      { name: "Tamil Nadu Forest Rest House", detail: "Government stay — ₹800/night" },
      { name: "Kolli Hills Resort", detail: "Mid-range — ₹2,000/night" },
      { name: "Local Guest House", detail: "Budget — ₹500/night" }
    ],
    stays: [
      { name: "Tribal Village Homestay", detail: "Stay with Malayali tribal families" },
      { name: "Hilltop Farmstay", detail: "Pepper and coffee plantation experience" }
    ]
  },
  // =============================================
  // TAMIL NADU — TREKKING (Top 20 of 2026)
  // Source: trektamilnadu.com — Govt. of Tamil Nadu
  // Book at trektamilnadu.com | ₹499–₹2,999
  // Mandatory guide (1:5 ratio) | Closed mid-Feb to mid-Apr
  // =============================================

  // --- 🟢 EASY TREKS (Beginners & Families) ---
  {
    id: 25,
    name: "Swamimalai (Yelagiri)",
    state: "Tamil Nadu",
    emoji: "🟢",
    category: "trekking",
    rideTypes: ["bike", "car"],
    description: "🟢 Easy | 6 km | Yelagiri — A well-defined trail to the highest point in Yelagiri with a spectacular summit view. Book at trektamilnadu.com.",
    spots: [
      { name: "Swamimalai Summit", detail: "Highest point in Yelagiri — panoramic 360° views" },
      { name: "Forest Trail (6 km)", detail: "Well-marked path through deciduous forest" },
      { name: "Yelagiri Lake", detail: "Peaceful boating at the base" },
      { name: "Jalagamparai Waterfall", detail: "Seasonal waterfall — short detour trek" }
    ],
    hotels: [
      { name: "Sterling Yelagiri", detail: "Resort — ₹4,000/night" },
      { name: "Hotel Green Valley", detail: "Mid-range — ₹1,500/night" },
      { name: "Nature Camp", detail: "Budget camping — ₹500/night" }
    ],
    stays: [
      { name: "Hilltop Homestay", detail: "Family-run home with views" },
      { name: "Adventure Camp", detail: "Tents and trekking packages" }
    ]
  },
  {
    id: 26,
    name: "Gudiyam Caves (Tiruvallur)",
    state: "Tamil Nadu",
    emoji: "🟢",
    category: "trekking",
    rideTypes: ["solo", "bike"],
    description: "🟢 Easy | 9 km | Tiruvallur — Heritage trail near Chennai to prehistoric rock shelters. Perfect for archaeology buffs. Book at trektamilnadu.com.",
    spots: [
      { name: "Gudiyam Caves", detail: "Prehistoric rock shelters with evidence of early human habitation" },
      { name: "Heritage Nature Trail (9 km)", detail: "Gentle guided walk through scrub forest" },
      { name: "Tiruvallur Temple", detail: "Ancient Veeraraghava Perumal temple nearby" },
      { name: "Pulicat Lake", detail: "India's second largest brackish water lagoon nearby" }
    ],
    hotels: [
      { name: "Chennai Hotels", detail: "60 km from Chennai — ₹2,000+/night" },
      { name: "Tiruvallur Lodge", detail: "Basic — ₹800/night" },
      { name: "Day Trip", detail: "Best done as a day trip from Chennai" }
    ],
    stays: [
      { name: "Village Homestay", detail: "Rural experience near the caves" },
      { name: "Pulicat Fisherman Stay", detail: "Coastal village near the lagoon" }
    ]
  },
  {
    id: 27,
    name: "Longwood Shola (Kotagiri)",
    state: "Tamil Nadu",
    emoji: "🟢",
    category: "trekking",
    rideTypes: ["car"],
    description: "🟢 Easy | 3 km | Kotagiri — Ramsar wetland site and birdwatcher's paradise. A gentle walk through ancient tropical evergreen shola forests.",
    spots: [
      { name: "Longwood Shola Forest", detail: "Ramsar site — ancient tropical evergreen forest" },
      { name: "Birdwatching Trail (3 km)", detail: "Spot Nilgiri Laughingthrush, Nilgiri Pipit, and more" },
      { name: "Kodanad Viewpoint", detail: "Nearby — stunning views of Moyar gorge" },
      { name: "Catherine Falls", detail: "Second highest waterfall in the Nilgiris" }
    ],
    hotels: [
      { name: "La Maison Kotagiri", detail: "Boutique heritage — ₹6,000/night" },
      { name: "Sullivan Court", detail: "Mid-range — ₹2,500/night" },
      { name: "Kotagiri Homestay", detail: "Budget — ₹800/night" }
    ],
    stays: [
      { name: "Toda Village Homestay", detail: "Experience indigenous Toda culture" },
      { name: "Tea Garden Cottage", detail: "Surrounded by Nilgiri tea estates" }
    ]
  },
  {
    id: 28,
    name: "Cairn Hill (Ooty)",
    state: "Tamil Nadu",
    emoji: "🟢",
    category: "trekking",
    rideTypes: ["solo", "car"],
    description: "🟢 Easy | Ooty — One of the oldest cypress plantations in the Nilgiris. A calm, shaded forest walk ideal for families.",
    spots: [
      { name: "Cairn Hill Cypress Plantation", detail: "Historic cypress grove — one of the oldest in India" },
      { name: "Forest Walk", detail: "Gentle shaded trail through the plantation" },
      { name: "Doddabetta Peak", detail: "Nearby — highest point in the Nilgiris" },
      { name: "Botanical Garden", detail: "22-hectare garden with rare species" }
    ],
    hotels: [
      { name: "Savoy Hotel - IHCL", detail: "Heritage luxury — ₹8,000/night" },
      { name: "Sterling Ooty", detail: "Mid-range — ₹3,000/night" },
      { name: "Zostel Ooty", detail: "Budget — ₹500/night" }
    ],
    stays: [
      { name: "Tea Estate Bungalow", detail: "Colonial bungalow amid tea gardens" },
      { name: "Hilltop Cottage", detail: "Cozy cottage with valley views" }
    ]
  },
  {
    id: 29,
    name: "Gene Pool (Gudalur)",
    state: "Tamil Nadu",
    emoji: "🟢",
    category: "trekking",
    rideTypes: ["car"],
    description: "🟢 Easy | 8 km | Gudalur — Educational trail through a biodiversity conservation park with diverse endemic plants of the Western Ghats.",
    spots: [
      { name: "Gene Pool Conservation Park", detail: "Biodiversity park with endemic Western Ghats plants" },
      { name: "Nature Education Trail (8 km)", detail: "Guided walk with botanical information boards" },
      { name: "Mudumalai Tiger Reserve", detail: "Nearby — tigers, elephants, and Indian gaur" },
      { name: "Pykara Falls", detail: "Scenic waterfall with boating" }
    ],
    hotels: [
      { name: "Jungle Retreat Mudumalai", detail: "Eco-lodge — ₹5,000/night" },
      { name: "Gudalur Hotels", detail: "Base town — ₹1,200/night" },
      { name: "Forest Dept Dormitory", detail: "Basic — ₹600/night" }
    ],
    stays: [
      { name: "Tribal Guided Stay", detail: "Tribal youth-led forest experience" },
      { name: "Jungle Camp", detail: "Camping at the edge of the reserve" }
    ]
  },
  {
    id: 30,
    name: "Baraliyar (Coimbatore)",
    state: "Tamil Nadu",
    emoji: "🟢",
    category: "trekking",
    rideTypes: ["car"],
    description: "🟢 Easy | 4 km | Coimbatore — A scenic riverside descent known for butterfly diversity and cool streams in the Anamalai foothills.",
    spots: [
      { name: "Baraliyar River Trail (4 km)", detail: "Riverside descent through butterfly-rich forest" },
      { name: "Cool Streams", detail: "Natural rock pools for a refreshing dip" },
      { name: "Anamalai Foothills", detail: "Gateway to the Anamalai Tiger Reserve" },
      { name: "Topslip", detail: "Nearby — elephant camp and treehouse stays" }
    ],
    hotels: [
      { name: "Forest Dept Rest House", detail: "Inside the reserve — ₹1,500/night" },
      { name: "Pollachi Hotels", detail: "Base town — ₹1,000/night" },
      { name: "Topslip Log House", detail: "Rustic forest stay — ₹1,000/night" }
    ],
    stays: [
      { name: "Treehouse at Topslip", detail: "Elevated stay in the canopy" },
      { name: "Tribal Village Experience", detail: "Stay with Kadar tribal community" }
    ]
  },

  // --- 🟡 MODERATE TREKS (Regular Hikers) ---
  {
    id: 60,
    name: "Topslip - Pandaravarai (Pollachi)",
    state: "Tamil Nadu",
    emoji: "🟡",
    category: "trekking",
    rideTypes: ["car"],
    description: "🟡 Moderate | Pollachi — Anamalai Tiger Reserve trail famous for Hornbills, Elephants, and Malabar Giant Squirrels. Book at trektamilnadu.com.",
    spots: [
      { name: "Pandaravarai Trail", detail: "Forest trail with rich wildlife sightings" },
      { name: "Hornbill Spotting", detail: "Great Indian Hornbill and Malabar Pied Hornbill" },
      { name: "Malabar Giant Squirrel", detail: "Spot the colourful giant squirrel in the canopy" },
      { name: "Elephant Sightings", detail: "Wild elephant herds along the trail" }
    ],
    hotels: [
      { name: "Forest Dept Rest House", detail: "Inside the reserve — ₹1,500/night" },
      { name: "Topslip Log House", detail: "Rustic forest stay — ₹1,000/night" },
      { name: "Pollachi Hotels", detail: "Base town — ₹1,000/night" }
    ],
    stays: [
      { name: "Treehouse at Topslip", detail: "Elevated stay in the canopy" },
      { name: "Tribal Village Experience", detail: "Stay with Kadar tribal community" }
    ]
  },
  {
    id: 61,
    name: "Kolukkumalai Sunrise (Theni)",
    state: "Tamil Nadu",
    emoji: "🟡",
    category: "trekking",
    rideTypes: ["car"],
    description: "🟡 Moderate | Theni — Breathtaking hike to the world's highest organic tea estate to watch the sunrise above the clouds. Book at trektamilnadu.com.",
    spots: [
      { name: "Kolukkumalai Tea Estate", detail: "World's highest organic tea estate at 7,900 ft" },
      { name: "Sunrise Point", detail: "Watch sunrise above a sea of clouds" },
      { name: "Jeep Trail", detail: "Thrilling off-road jeep ride to the base" },
      { name: "Tea Factory Visit", detail: "Century-old tea processing with orthodox methods" }
    ],
    hotels: [
      { name: "Munnar Hotels", detail: "Nearest town (Kerala side) — ₹2,000+/night" },
      { name: "Suryanelli Homestay", detail: "Base village — ₹1,000/night" },
      { name: "Tent Stay at Summit", detail: "Camping at the tea estate — ₹800/night" }
    ],
    stays: [
      { name: "Tea Estate Cottage", detail: "Stay at the highest tea estate" },
      { name: "Mountain Camping", detail: "Camp under the stars above the clouds" }
    ]
  },
  {
    id: 62,
    name: "Jalagamparai (Tirupattur)",
    state: "Tamil Nadu",
    emoji: "🟡",
    category: "trekking",
    rideTypes: ["bike", "car"],
    description: "🟡 Moderate | 4 hrs | Tirupattur — Eastern Ghats trek through fruit-bearing forests to a seasonal waterfall. Book at trektamilnadu.com.",
    spots: [
      { name: "Jalagamparai Waterfall", detail: "Seasonal waterfall — reward at the end of the trek" },
      { name: "Fruit Forest Trail", detail: "4-hour trek through jackfruit and mango forests" },
      { name: "Eastern Ghats Viewpoint", detail: "Views of the Javadi Hills range" },
      { name: "Amirthi Zoological Park", detail: "Mini zoo and waterfall at the foothills" }
    ],
    hotels: [
      { name: "Tirupattur Hotels", detail: "Base town — ₹1,000/night" },
      { name: "Yelagiri Resorts", detail: "Nearby hill station — ₹2,000+/night" },
      { name: "Forest Guest House", detail: "Basic — ₹600/night" }
    ],
    stays: [
      { name: "Tribal Village Homestay", detail: "Stay with local Malayali tribal families" },
      { name: "Farm Stay", detail: "Rural Eastern Ghats experience" }
    ]
  },
  {
    id: 63,
    name: "Sathuragiri Hills (Virudhunagar)",
    state: "Tamil Nadu",
    emoji: "🟡",
    category: "trekking",
    rideTypes: ["solo", "car"],
    description: "🟡 Moderate | 14 km | Virudhunagar — Spiritually significant trek through rugged terrain with medicinal herbs and ancient hilltop shrines.",
    spots: [
      { name: "Sundara Mahalingam Temple", detail: "Ancient hilltop Shiva shrine at the summit" },
      { name: "Medicinal Herb Forest", detail: "14-km trail through rare medicinal plant zones" },
      { name: "Rugged Rock Formations", detail: "Dramatic rocky terrain with cave shelters" },
      { name: "Panoramic Summit Views", detail: "360° views of the southern Tamil Nadu plains" }
    ],
    hotels: [
      { name: "Virudhunagar Hotels", detail: "Base town — ₹1,000/night" },
      { name: "Srivilliputhur Lodge", detail: "Nearby town — ₹800/night" },
      { name: "Temple Rest House", detail: "Basic pilgrim stay at summit — ₹300/night" }
    ],
    stays: [
      { name: "Summit Camping", detail: "Camp near the ancient shrine" },
      { name: "Village Homestay", detail: "Local home at the base village" }
    ]
  },
  {
    id: 64,
    name: "Karikayur to Porivarai (Nilgiris)",
    state: "Tamil Nadu",
    emoji: "🟡",
    category: "trekking",
    rideTypes: ["car"],
    description: "🟡 Moderate | 6 km | Nilgiris — Trek to ancient rock paintings combining history with nature in the Nilgiri Biosphere Reserve.",
    spots: [
      { name: "Ancient Rock Paintings", detail: "Prehistoric rock art in the Nilgiri forests" },
      { name: "Porivarai Trail (6 km)", detail: "Forest trail through shola and grasslands" },
      { name: "Nilgiri Biosphere Views", detail: "Views of the Western Ghats biodiversity hotspot" },
      { name: "Wildlife Sightings", detail: "Nilgiri Tahr, sambar deer, and langurs" }
    ],
    hotels: [
      { name: "Ooty Hotels", detail: "Nearest town — ₹2,000+/night" },
      { name: "Forest Dept Dormitory", detail: "Basic — ₹600/night" },
      { name: "Masinagudi Homestay", detail: "Budget — ₹1,000/night" }
    ],
    stays: [
      { name: "Jungle Camp", detail: "Camping in the Nilgiri forests" },
      { name: "Tribal Guided Stay", detail: "Tribal youth-led experience" }
    ]
  },
  {
    id: 65,
    name: "Injikadavu (Tirunelveli)",
    state: "Tamil Nadu",
    emoji: "🟡",
    category: "trekking",
    rideTypes: ["car"],
    description: "🟡 Moderate | 18 km | Tirunelveli — Long trail in the Kalakkad Mundanthurai Tiger Reserve with rich riverine ecosystems. Book at trektamilnadu.com.",
    spots: [
      { name: "Injikadavu Trail (18 km)", detail: "Riverine forest trail in KMTR" },
      { name: "River Crossings", detail: "Multiple stream crossings through the reserve" },
      { name: "Riverine Ecosystem", detail: "Rich aquatic biodiversity and riparian forests" },
      { name: "KMTR Wildlife", detail: "Elephants, leopards, and endemic birds" }
    ],
    hotels: [
      { name: "Forest Rest House", detail: "Inside the reserve — ₹800/night" },
      { name: "Tenkasi Hotels", detail: "Base town — ₹1,000/night" },
      { name: "Courtallam Resorts", detail: "Nearby — ₹2,000/night" }
    ],
    stays: [
      { name: "Eco Camp KMTR", detail: "Camping inside the biosphere reserve" },
      { name: "Courtallam Homestay", detail: "Near the famous spa falls" }
    ]
  },

  // --- 🔴 TOUGH TREKS (Experienced Adventurers) ---
  {
    id: 70,
    name: "Velliangiri Hills (Coimbatore)",
    state: "Tamil Nadu",
    emoji: "🔴",
    category: "trekking",
    rideTypes: ["solo", "car"],
    description: "🔴 Tough | 12 km | 7 Hills — 'Kailash of the South.' A grueling climb over 7 hills that is as spiritually rewarding as it is physically demanding.",
    spots: [
      { name: "Seven Hills Climb (12 km)", detail: "Grueling ascent over 7 progressively harder hills" },
      { name: "Shiva Temple at Summit", detail: "Ancient Shiva lingam at the 7th hill peak" },
      { name: "Grassland Plateau", detail: "Open grasslands between hills 5 and 6" },
      { name: "Isha Yoga Center", detail: "Starting point — Sadhguru's ashram at the foothills" }
    ],
    hotels: [
      { name: "Isha Yoga Center Stay", detail: "Ashram accommodation — ₹500/night" },
      { name: "Coimbatore Hotels", detail: "City options — ₹2,000+/night" },
      { name: "Poondi Hotels", detail: "Base village — ₹800/night" }
    ],
    stays: [
      { name: "Ashram Stay", detail: "Spiritual stay at Isha Foundation" },
      { name: "Summit Camping", detail: "Camp at the grasslands between hills" }
    ]
  },
  {
    id: 71,
    name: "Kodaikanal to Vellagavi (Dindigul)",
    state: "Tamil Nadu",
    emoji: "🔴",
    category: "trekking",
    rideTypes: ["car"],
    description: "🔴 Tough | 12 hrs | Dindigul — Legendary steep descent to a remote village where locals live without footwear to honor the land's sanctity.",
    spots: [
      { name: "Kumbakarai Falls Start", detail: "Starting point waterfall in Dindigul" },
      { name: "Vellagavi Village", detail: "Remote tribal village — no road access, only by trek" },
      { name: "Dense Forest Descent", detail: "12-hour steep trail through Western Ghats" },
      { name: "Kodaikanal Connection", detail: "Trail connects the plains to Kodaikanal hills" }
    ],
    hotels: [
      { name: "Dindigul Hotels", detail: "Base town — ₹1,000/night" },
      { name: "Trek Organizer Camp", detail: "Guided trek with camping — ₹2,000/person" },
      { name: "Kodaikanal Hotels", detail: "End point — ₹2,000+/night" }
    ],
    stays: [
      { name: "Forest Camping", detail: "Camp midway in the dense forest" },
      { name: "Vellagavi Village Stay", detail: "Remote tribal village experience" }
    ]
  },
  {
    id: 72,
    name: "Parsons Valley to Mukurthi (Nilgiris)",
    state: "Tamil Nadu",
    emoji: "🔴",
    category: "trekking",
    rideTypes: ["car"],
    description: "🔴 Tough | 20 km | Nilgiris — Massive high-altitude trek through shola grasslands and wild streams to the Mukurthi hut.",
    spots: [
      { name: "Parsons Valley Reservoir", detail: "Starting point — scenic reservoir in the Nilgiris" },
      { name: "Shola Grassland Trail (20 km)", detail: "High-altitude trek through pristine grasslands" },
      { name: "Wild Stream Crossings", detail: "Multiple stream crossings through the trail" },
      { name: "Mukurthi Hut", detail: "Remote forest hut — endpoint of the trek" }
    ],
    hotels: [
      { name: "Ooty Hotels", detail: "Nearest town — ₹2,000+/night" },
      { name: "Forest Dept Dormitory", detail: "Basic — ₹600/night" },
      { name: "Avalanche Bungalow", detail: "Heritage forest stay — ₹1,500/night" }
    ],
    stays: [
      { name: "Mukurthi Hut Camping", detail: "Camp at the remote forest hut" },
      { name: "Grassland Bivouac", detail: "Wild camping in the shola grasslands" }
    ]
  },
  {
    id: 73,
    name: "Avalanche - Kolaribetta (Nilgiris)",
    state: "Tamil Nadu",
    emoji: "🔴",
    category: "trekking",
    rideTypes: ["car"],
    description: "🔴 Tough | 18 km | Nilgiris — Vantage point to see deer drinking from the Avalanche dam. Dense shola forests and high-altitude grasslands.",
    spots: [
      { name: "Avalanche Lake", detail: "Starting point — scenic lake surrounded by forests" },
      { name: "Kolaribetta Peak (18 km)", detail: "Tough climb to the vantage point" },
      { name: "Deer at Avalanche Dam", detail: "Spot sambar deer drinking at the dam" },
      { name: "Shola Forest Trail", detail: "Dense evergreen forest sections" }
    ],
    hotels: [
      { name: "Avalanche Bungalow", detail: "Heritage forest stay — ₹1,500/night" },
      { name: "Ooty Hotels", detail: "Nearest town — ₹2,000+/night" },
      { name: "Forest Dept Dormitory", detail: "Basic — ₹600/night" }
    ],
    stays: [
      { name: "Lakeside Camping", detail: "Camp near Avalanche Lake" },
      { name: "Forest Bivouac", detail: "Wild camping on the trail" }
    ]
  },
  {
    id: 74,
    name: "Needle Rock / Oosi Malai (Gudalur)",
    state: "Tamil Nadu",
    emoji: "🔴",
    category: "trekking",
    rideTypes: ["car"],
    description: "🔴 Tough | Gudalur — Steep climb to a needle-shaped peak offering 360° views of Mudumalai plains and Bandipur forests.",
    spots: [
      { name: "Needle Rock Summit", detail: "360° views of Mudumalai and Bandipur" },
      { name: "Steep Forest Ascent", detail: "Challenging climb through dense vegetation" },
      { name: "Mudumalai Plains View", detail: "Panoramic view of the tiger reserve" },
      { name: "Bandipur Forest View", detail: "Karnataka's Bandipur visible from the top" }
    ],
    hotels: [
      { name: "Jungle Retreat Mudumalai", detail: "Eco-lodge — ₹5,000/night" },
      { name: "Gudalur Hotels", detail: "Base town — ₹1,200/night" },
      { name: "Masinagudi Homestay", detail: "Budget — ₹1,000/night" }
    ],
    stays: [
      { name: "Jungle Camp", detail: "Camping at the edge of the reserve" },
      { name: "Tribal Guided Stay", detail: "Tribal youth-led experience" }
    ]
  },
  {
    id: 75,
    name: "Guthirayan Peak (Krishnagiri)",
    state: "Tamil Nadu",
    emoji: "🔴",
    category: "trekking",
    rideTypes: ["bike", "car"],
    description: "🔴 Tough | 11 km | Krishnagiri — Challenging climb to the highest peak in the Melagiris with views of the Cauvery valley.",
    spots: [
      { name: "Guthirayan Summit (11 km)", detail: "Highest peak in the Melagiri range" },
      { name: "Cauvery Valley Views", detail: "Panoramic views of the Cauvery river valley" },
      { name: "Dense Forest Trail", detail: "Steep ascent through dry deciduous forest" },
      { name: "Melagiri Range", detail: "Rugged Eastern Ghats terrain" }
    ],
    hotels: [
      { name: "Krishnagiri Hotels", detail: "Base town — ₹1,200/night" },
      { name: "Hogenakkal Hotels", detail: "Nearby waterfall town — ₹1,000/night" },
      { name: "Forest Guest House", detail: "Basic — ₹600/night" }
    ],
    stays: [
      { name: "Summit Camping", detail: "Camp at the peak" },
      { name: "Village Homestay", detail: "Local home at the base" }
    ]
  },
  {
    id: 76,
    name: "Kondappanaikanpatti (Salem)",
    state: "Tamil Nadu",
    emoji: "🔴",
    category: "trekking",
    rideTypes: ["car"],
    description: "🔴 Tough | Salem — Steep ascent through the Yercaud foothills, popular among seasoned trekkers in the region.",
    spots: [
      { name: "Gundur Trail", detail: "Steep ascent through Yercaud foothills" },
      { name: "Shevaroy Hills Views", detail: "Views of the Yercaud hill range" },
      { name: "Dense Scrub Forest", detail: "Trail through dry and scrub forest zones" },
      { name: "Salem Plains View", detail: "Panoramic views of Salem district" }
    ],
    hotels: [
      { name: "Salem Hotels", detail: "Base city — ₹1,500/night" },
      { name: "Yercaud Resorts", detail: "Nearby hill station — ₹3,000+/night" },
      { name: "Forest Guest House", detail: "Basic — ₹600/night" }
    ],
    stays: [
      { name: "Hilltop Camping", detail: "Camp at the summit" },
      { name: "Coffee Estate Stay (Yercaud)", detail: "Nearby plantation experience" }
    ]
  },
  {
    id: 77,
    name: "Karikayur to Rangaswamy Peak (Nilgiris)",
    state: "Tamil Nadu",
    emoji: "🔴",
    category: "trekking",
    rideTypes: ["car"],
    description: "🔴 Tough | 8 km | Nilgiris — Trek to a distinct bottle-shaped peak with religious significance for local tribes.",
    spots: [
      { name: "Rangaswamy Peak", detail: "Bottle-shaped rock pillar — sacred to local tribes" },
      { name: "Karikayur Trail (8 km)", detail: "Steep climb through shola and grasslands" },
      { name: "Tribal Sacred Site", detail: "Religious significance for Nilgiri tribal communities" },
      { name: "Panoramic Nilgiri Views", detail: "360° views from the peak" }
    ],
    hotels: [
      { name: "Kotagiri Homestay", detail: "Nearest town — ₹800/night" },
      { name: "Ooty Hotels", detail: "Nearby — ₹2,000+/night" },
      { name: "Forest Dept Dormitory", detail: "Basic — ₹600/night" }
    ],
    stays: [
      { name: "Grassland Camping", detail: "Camp near the peak" },
      { name: "Toda Village Homestay", detail: "Indigenous Toda culture experience" }
    ]
  },

  // =============================================
  // TAMIL NADU — BEACHES
  // =============================================
  {
    id: 33,
    name: "Pondicherry",
    state: "Tamil Nadu",
    emoji: "🌊",
    category: "beach",
    rideTypes: ["solo", "bike"],
    description: "French colonial charm meets serene beaches — colourful streets, cafes, Auroville's golden Matrimandir, and the Bay of Bengal coastline.",
    spots: [
      { name: "Promenade Beach", detail: "Scenic seaside walkway with French-era buildings" },
      { name: "Auroville", detail: "International township with the golden Matrimandir" },
      { name: "French Quarter", detail: "Colourful colonial streets, cafes, and boutiques" },
      { name: "Paradise Beach", detail: "Secluded beach reached by boat from Chunnambar" },
      { name: "Serenity Beach", detail: "Surfing spot with golden sand" }
    ],
    hotels: [
      { name: "Palais de Mahe", detail: "Boutique luxury — ₹7,000/night" },
      { name: "Hotel Atithi", detail: "Comfortable — ₹1,500/night" },
      { name: "Zostel Pondicherry", detail: "Budget hostel — ₹500/night" }
    ],
    stays: [
      { name: "French Villa B&B", detail: "Charming colonial guesthouse" },
      { name: "Auroville Guest House", detail: "Peaceful community stay" }
    ]
  },
  {
    id: 34,
    name: "Mahabalipuram",
    state: "Tamil Nadu",
    emoji: "🏖️",
    category: "beach",
    rideTypes: ["solo", "bike"],
    description: "UNESCO heritage beach town — Pallava-era Shore Temple (8th century granite marvel on the Bay of Bengal), monolithic rock carvings, and surf schools.",
    spots: [
      { name: "Shore Temple", detail: "8th century Pallava granite temple on the sea edge" },
      { name: "Pancha Rathas", detail: "Five monolithic rock-cut chariots named after the Pandavas" },
      { name: "Arjuna's Penance", detail: "World's largest open-air bas-relief rock carving" },
      { name: "Tiger Cave", detail: "Rock-cut mandapam with tiger head carvings" },
      { name: "Mahabalipuram Beach", detail: "Sandy beach with temple backdrop and surf schools" }
    ],
    hotels: [
      { name: "Radisson Blu Resort", detail: "Beachside luxury — ₹6,000/night" },
      { name: "Hotel Mahabs", detail: "Mid-range — ₹2,000/night" },
      { name: "Backpacker Hostel", detail: "Budget — ₹450/night" }
    ],
    stays: [
      { name: "Beach Cottage", detail: "Stone cottage near the shore" },
      { name: "Artist Village Stay", detail: "Stay with local stone sculptors" }
    ]
  },
  {
    id: 35,
    name: "Marina & Covelong",
    state: "Tamil Nadu",
    emoji: "🏄",
    category: "beach",
    rideTypes: ["solo", "bike", "car"],
    description: "Chennai's coastline — Marina is the second longest urban beach in the world (13 km), and Covelong is Tamil Nadu's surfing capital.",
    spots: [
      { name: "Marina Beach", detail: "13 km — second longest urban beach in the world" },
      { name: "Covelong Point Surf School", detail: "TN's surfing hub with lessons and board rentals" },
      { name: "Elliot's Beach", detail: "Quieter beach popular with locals in Besant Nagar" },
      { name: "San Thome Basilica", detail: "Gothic church over the tomb of St. Thomas" },
      { name: "Dakshinachitra", detail: "Heritage museum of South Indian art and architecture" }
    ],
    hotels: [
      { name: "Taj Fisherman's Cove", detail: "Beachside luxury at Covelong — ₹12,000/night" },
      { name: "Vivanta Chennai", detail: "Premium — ₹6,000/night" },
      { name: "Zostel Chennai", detail: "Budget hostel — ₹500/night" }
    ],
    stays: [
      { name: "Surf Shack Covelong", detail: "Stay and surf packages" },
      { name: "ECR Beach House", detail: "Rental house on East Coast Road" }
    ]
  },
  {
    id: 85,
    name: "Silver Beach (Cuddalore)",
    state: "Tamil Nadu",
    emoji: "🏖️",
    category: "beach",
    rideTypes: ["solo", "bike", "car"],
    description: "Long, expansive beach in Cuddalore — popular for boat rides, water sports, and a peaceful coastal escape near Chidambaram.",
    spots: [
      { name: "Silver Beach", detail: "Wide sandy beach with boat rides and water sports" },
      { name: "Pichavaram Mangroves", detail: "Second largest mangrove forest — 30 min away" },
      { name: "Fort St. David", detail: "Historic British-era fort ruins near the beach" },
      { name: "Devanampattinam Beach", detail: "Fishing village beach with local culture" }
    ],
    hotels: [
      { name: "Hotel Atithi", detail: "Best in town — ₹1,500/night" },
      { name: "Hotel Tamil Nadu (TTDC)", detail: "Budget — ₹800/night" },
      { name: "Beach Guest House", detail: "Simple stay — ₹600/night" }
    ],
    stays: [
      { name: "Coastal Homestay", detail: "Simple home near the beach" },
      { name: "Pichavaram Eco Stay", detail: "Near the mangrove backwaters" }
    ]
  },
  {
    id: 86,
    name: "Kodikkarai (Point Calimere)",
    state: "Tamil Nadu",
    emoji: "🦩",
    category: "beach",
    rideTypes: ["solo", "car"],
    description: "Where the Palk Strait meets the Bay of Bengal — a paradise for birdwatchers with thousands of migratory flamingos, and a pristine wildlife sanctuary.",
    spots: [
      { name: "Point Calimere Wildlife Sanctuary", detail: "Wetland sanctuary — flamingos, pelicans, and 250+ bird species" },
      { name: "Kodikkarai Beach", detail: "Serene, unspoiled beach at the tip of the Cauvery delta" },
      { name: "Flamingo Point", detail: "Best spot to see thousands of migratory flamingos (Nov–Feb)" },
      { name: "Kodikkarai Lighthouse", detail: "Historic lighthouse with coastal views" }
    ],
    hotels: [
      { name: "Forest Rest House", detail: "Government stay inside sanctuary — ₹600/night" },
      { name: "Vedaranyam Hotels", detail: "Nearby town options — ₹800/night" },
      { name: "Nagapattinam Hotels", detail: "Base town — ₹1,200/night" }
    ],
    stays: [
      { name: "Birdwatcher's Cottage", detail: "Simple stay near the sanctuary" },
      { name: "Delta Village Stay", detail: "Cauvery delta rural experience" }
    ]
  },
  {
    id: 87,
    name: "Muttom Beach",
    state: "Tamil Nadu",
    emoji: "🌅",
    category: "beach",
    rideTypes: ["solo", "bike", "car"],
    description: "Hidden gem near Kanyakumari — dramatic rocky coastline with a lighthouse, stunning sunrise views, and one of Tamil Nadu's most scenic beaches.",
    spots: [
      { name: "Muttom Beach", detail: "Rocky beach with dramatic waves and lighthouse views" },
      { name: "Muttom Lighthouse", detail: "Scenic lighthouse on the rocky headland" },
      { name: "Sanguthurai Beach", detail: "Secluded, quiet beach 10 km away — perfect for solitude" },
      { name: "Thengapattinam Beach", detail: "Calm fishing village beach with traditional boats" }
    ],
    hotels: [
      { name: "Kanyakumari Hotels", detail: "Nearby options — ₹1,500/night" },
      { name: "Local Guest House", detail: "Basic stay — ₹500/night" },
      { name: "Nagercoil Hotels", detail: "Base town — ₹1,000/night" }
    ],
    stays: [
      { name: "Coastal Homestay", detail: "Simple home near the beach" },
      { name: "Fishing Village Stay", detail: "Experience local coastal life" }
    ]
  },

  // =============================================
  // KERALA
  // =============================================
  {
    id: 36,
    name: "Munnar",
    state: "Kerala",
    emoji: "🍃",
    category: "hill-station",
    rideTypes: ["bike", "car"],
    description: "Endless rolling tea plantations, cool climate, and misty mountain peaks.",
    spots: [
      { name: "Eravikulam National Park", detail: "Home to the endangered Nilgiri Tahr" },
      { name: "Mattupetty Dam", detail: "Scenic reservoir with boating" },
      { name: "Top Station", detail: "Highest point in Munnar with panoramic views" },
      { name: "Tea Museum", detail: "History of Munnar's tea heritage" }
    ],
    hotels: [
      { name: "Windermere Estate", detail: "Plantation luxury — ₹10,000/night" },
      { name: "Bracknell Forest", detail: "Mid-range treehouse — ₹3,000/night" },
      { name: "Zostel Munnar", detail: "Budget hostel — ₹600/night" }
    ],
    stays: [
      { name: "Tea Plantation Homestay", detail: "Live among the tea gardens" },
      { name: "Mountain View Cottage", detail: "Quiet retreat with valley views" }
    ]
  },
  {
    id: 37,
    name: "Alleppey",
    state: "Kerala",
    emoji: "🛶",
    category: "beach",
    rideTypes: ["solo", "car"],
    description: "Venice of the East — famous for backwater houseboat cruises and serene canals.",
    spots: [
      { name: "Alleppey Backwaters", detail: "Iconic houseboat cruise through canals" },
      { name: "Alappuzha Beach", detail: "Historic pier and lighthouse beach" },
      { name: "Kumarakom Bird Sanctuary", detail: "Migratory birds in mangrove forests" },
      { name: "Marari Beach", detail: "Quiet, pristine fishing village beach" }
    ],
    hotels: [
      { name: "Houseboat Deluxe", detail: "Luxury floating stay — ₹8,000/night" },
      { name: "Ramada Alleppey", detail: "Lakeside comfort — ₹4,000/night" },
      { name: "Artpackers Life", detail: "Backpacker hostel — ₹500/night" }
    ],
    stays: [
      { name: "Backwater Homestay", detail: "Traditional Kerala home by the canal" },
      { name: "Houseboat Standard", detail: "Budget houseboat experience" }
    ]
  },
  {
    id: 38,
    name: "Wayanad",
    state: "Kerala",
    emoji: "🌿",
    category: "trekking",
    rideTypes: ["bike", "car"],
    description: "Lush green district with wildlife, caves, waterfalls, and spice plantations.",
    spots: [
      { name: "Edakkal Caves", detail: "Ancient petroglyphs from Neolithic era" },
      { name: "Banasura Sagar Dam", detail: "Largest earth dam in India" },
      { name: "Chembra Peak", detail: "Trek to the heart-shaped lake" },
      { name: "Wayanad Wildlife Sanctuary", detail: "Elephants, tigers, and lush forests" }
    ],
    hotels: [
      { name: "Vythiri Resort", detail: "Treehouse luxury — ₹12,000/night" },
      { name: "Hotel Green Gates", detail: "Mid-range — ₹2,500/night" },
      { name: "Jungle Hostel", detail: "Budget — ₹500/night" }
    ],
    stays: [
      { name: "Spice Plantation Stay", detail: "Surrounded by pepper and cardamom" },
      { name: "Tribal Village Homestay", detail: "Experience indigenous culture" }
    ]
  },
  {
    id: 39,
    name: "Kovalam",
    state: "Kerala",
    emoji: "🏖️",
    category: "beach",
    rideTypes: ["solo", "bike"],
    description: "Crescent beaches, Ayurvedic retreats, and a charming lighthouse.",
    spots: [
      { name: "Lighthouse Beach", detail: "Iconic beach with the Vizhinjam lighthouse" },
      { name: "Hawa Beach", detail: "Calm waters ideal for swimming" },
      { name: "Vellayani Lake", detail: "Largest freshwater lake in Trivandrum" },
      { name: "Padmanabhapuram Palace", detail: "Stunning wooden palace nearby" }
    ],
    hotels: [
      { name: "Leela Kovalam", detail: "Cliffside luxury — ₹15,000/night" },
      { name: "Hotel Samudra", detail: "KTDC beachfront — ₹3,500/night" },
      { name: "Beach Hostel", detail: "Budget — ₹450/night" }
    ],
    stays: [
      { name: "Ayurvedic Retreat", detail: "Wellness stay with treatments" },
      { name: "Beachside Cottage", detail: "Steps from the shore" }
    ]
  },
  {
    id: 40,
    name: "Sabarimala",
    state: "Kerala",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "One of the most visited pilgrimage centres in the world — Lord Ayyappa's abode.",
    spots: [
      { name: "Sabarimala Temple", detail: "Hilltop temple open during Mandala season" },
      { name: "Pamba River", detail: "Sacred river for ritual bathing" },
      { name: "Erumely", detail: "Starting point of the traditional trek" },
      { name: "Periyar Tiger Reserve", detail: "Nearby wildlife sanctuary" }
    ],
    hotels: [
      { name: "KTDC Periyar House", detail: "Government stay — ₹2,000/night" },
      { name: "Abad Green Forest", detail: "Eco-resort — ₹4,000/night" },
      { name: "Pilgrim Rest House", detail: "Basic — ₹500/night" }
    ],
    stays: [
      { name: "Kumily Homestay", detail: "Spice village near Thekkady" },
      { name: "Forest Edge Cottage", detail: "Stay at the edge of the reserve" }
    ]
  },
  {
    id: 88,
    name: "Sree Padmanabhaswamy Temple",
    state: "Kerala",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Monumental Hindu shrine to Lord Vishnu in Thiruvananthapuram, one of the richest temples in the world.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Sree_Padmanabhaswamy_Temple.jpg/400px-Sree_Padmanabhaswamy_Temple.jpg",
    destinationCoords: [8.4826, 76.9437],
    spots: [
      { name: "Main Sanctum", detail: "Lord Vishnu in Anantha Shayanam posture", coords: [8.4826, 76.9437] },
      { name: "Ottakkal Mandapam", detail: "Single stone mandapam with intricate carvings", coords: [8.4828, 76.9435] },
      { name: "Temple Tank (Padma Theertham)", detail: "Sacred temple pond", coords: [8.4830, 76.9440] }
    ],
    spotTimings: { "Main Sanctum": "3:30 AM–12:00 PM, 5:00–8:15 PM", "Ottakkal Mandapam": "3:30 AM–8:15 PM" },
    hotels: [
      { name: "Hilton Garden Inn", detail: "Premium — ₹6,000/night" },
      { name: "Hotel Residency Tower", detail: "Mid-range — ₹2,500/night" }
    ],
    stays: [
      { name: "Temple Trust Accommodation", detail: "Basic pilgrim rooms" }
    ]
  },
  {
    id: 89,
    name: "Attukal Bhagavathy Temple",
    state: "Kerala",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Hindu goddess shrine famous for the Attukal Pongala festival — the largest gathering of women in the world.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Attukal_temple.jpg/400px-Attukal_temple.jpg",
    destinationCoords: [8.4780, 76.9520],
    spots: [
      { name: "Main Temple", detail: "Goddess Bhadrakali shrine", coords: [8.4780, 76.9520] },
      { name: "Pongala Ground", detail: "Massive festival area for Attukal Pongala", coords: [8.4775, 76.9525] }
    ],
    spotTimings: { "Main Temple": "4:30 AM–12:00 PM, 5:00–8:30 PM" },
    hotels: [
      { name: "Hotel Chaithram", detail: "KTDC — ₹2,000/night" },
      { name: "Ariya Nivaas", detail: "Budget — ₹1,200/night" }
    ],
    stays: [
      { name: "Pilgrim Guest House", detail: "Near temple premises" }
    ]
  },
  {
    id: 90,
    name: "Thrikkakkara Vamana Moorthy Temple",
    state: "Kerala",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Ancient temple dedicated to Vamana (Vishnu avatar) in Kochi — the origin of Onam festival.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Thrikkakara_Temple.jpg/400px-Thrikkakara_Temple.jpg",
    destinationCoords: [10.0261, 76.3125],
    spots: [
      { name: "Main Shrine", detail: "Vamana Moorthy sanctum", coords: [10.0261, 76.3125] },
      { name: "Onam Celebrations Area", detail: "Grand Onam festival venue", coords: [10.0265, 76.3128] }
    ],
    spotTimings: { "Main Shrine": "4:30 AM–11:30 AM, 5:00–8:00 PM" },
    hotels: [
      { name: "Grand Hyatt Kochi", detail: "Luxury — ₹8,000/night" },
      { name: "Zostel Kochi", detail: "Budget — ₹600/night" }
    ],
    stays: [
      { name: "Kochi Homestay", detail: "Traditional Kerala home" }
    ]
  },
  {
    id: 91,
    name: "Sree Poornathrayeesa Temple",
    state: "Kerala",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Landmark temple in Tripunithura with annual Vrishchikolsavam celebrations and elephant processions.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Sree_Poornathrayeesa_Temple.jpg/400px-Sree_Poornathrayeesa_Temple.jpg",
    destinationCoords: [9.9508, 76.3485],
    spots: [
      { name: "Main Sanctum", detail: "Lord Vishnu as Santhanagopala Moorthy", coords: [9.9508, 76.3485] },
      { name: "Koothambalam", detail: "Traditional temple theatre", coords: [9.9510, 76.3488] }
    ],
    spotTimings: { "Main Sanctum": "3:00 AM–11:30 AM, 5:00–8:30 PM" },
    hotels: [
      { name: "Marriott Kochi", detail: "Premium — ₹7,000/night" },
      { name: "Hotel Aiswarya", detail: "Budget — ₹1,500/night" }
    ],
    stays: [
      { name: "Tripunithura Homestay", detail: "Heritage area stay" }
    ]
  },
  {
    id: 92,
    name: "Mannarasala Sree Nagaraja Temple",
    state: "Kerala",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Famous ancient temple for serpent gods near Haripad — unique for its priestess tradition.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Mannarasala_Temple.jpg/400px-Mannarasala_Temple.jpg",
    destinationCoords: [9.2833, 76.4667],
    spots: [
      { name: "Main Shrine", detail: "Nagaraja (Serpent King) sanctum", coords: [9.2833, 76.4667] },
      { name: "Sacred Grove", detail: "Thousands of serpent idols in the grove", coords: [9.2830, 76.4670] }
    ],
    spotTimings: { "Main Shrine": "5:00 AM–12:00 PM, 5:00–7:30 PM" },
    hotels: [
      { name: "Hotel Aida", detail: "Alappuzha — ₹2,000/night" },
      { name: "Haripad Lodge", detail: "Budget — ₹800/night" }
    ],
    stays: [
      { name: "Backwater Homestay", detail: "Near Haripad canals" }
    ]
  },
  {
    id: 93,
    name: "Aranmula Parthasarathy Temple",
    state: "Kerala",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Sacred Hindu shrine dedicated to Lord Krishna (Parthasarathy) — famous for Aranmula boat race.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Aranmula_Parthasarathy_Temple.jpg/400px-Aranmula_Parthasarathy_Temple.jpg",
    destinationCoords: [9.3167, 76.6833],
    spots: [
      { name: "Main Temple", detail: "Lord Krishna as Parthasarathy", coords: [9.3167, 76.6833] },
      { name: "Aranmula Boat Race Venue", detail: "Famous Vallam Kali snake boat race", coords: [9.3170, 76.6840] }
    ],
    spotTimings: { "Main Temple": "4:00 AM–12:00 PM, 5:00–8:00 PM" },
    hotels: [
      { name: "Aranmula Heritage", detail: "Traditional — ₹2,500/night" },
      { name: "Pilgrim Rest", detail: "Budget — ₹700/night" }
    ],
    stays: [
      { name: "Riverside Homestay", detail: "By the Pampa river" }
    ]
  },
  {
    id: 94,
    name: "Guruvayur Sree Krishna Temple",
    state: "Kerala",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "One of the most important Krishna temples in India — ancient complex in Guruvayur, Thrissur.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Guruvayoor_Temple_1.jpg/400px-Guruvayoor_Temple_1.jpg",
    destinationCoords: [10.5942, 76.0410],
    spots: [
      { name: "Main Sanctum", detail: "Guruvayurappan — four-armed Vishnu", coords: [10.5942, 76.0410] },
      { name: "Punnathurkotta", detail: "Elephant sanctuary of the temple", coords: [10.5920, 76.0430] },
      { name: "Mammiyur Mahadeva Temple", detail: "Shiva temple opposite Guruvayur", coords: [10.5945, 76.0415] }
    ],
    spotTimings: { "Main Sanctum": "3:00 AM–12:30 PM, 4:30–9:15 PM" },
    hotels: [
      { name: "Hotel Vanamala", detail: "Near temple — ₹2,500/night" },
      { name: "Krishna Inn", detail: "Budget — ₹1,000/night" }
    ],
    stays: [
      { name: "Temple Guest House", detail: "Devaswom accommodation" }
    ]
  },
  {
    id: 95,
    name: "Sri Kadampuzha Bhagavathy Temple",
    state: "Kerala",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Sacred Hindu site dedicated to Goddess Parvathi in Malappuram — believed to grant marriage wishes.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Kadampuzha_temple.jpg/400px-Kadampuzha_temple.jpg",
    destinationCoords: [10.8833, 76.0667],
    spots: [
      { name: "Main Shrine", detail: "Goddess Parvathi sanctum", coords: [10.8833, 76.0667] },
      { name: "Temple Pond", detail: "Sacred pond for rituals", coords: [10.8835, 76.0670] }
    ],
    spotTimings: { "Main Shrine": "4:30 AM–12:00 PM, 5:00–8:00 PM" },
    hotels: [
      { name: "Hotel Nesto", detail: "Malappuram — ₹2,000/night" },
      { name: "Budget Lodge", detail: "Near temple — ₹800/night" }
    ],
    stays: [
      { name: "Village Homestay", detail: "Rural Kerala experience" }
    ]
  },
  {
    id: 96,
    name: "Sree Vallabha Temple",
    state: "Kerala",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Sprawling, colorful Hindu temple complex in Thiruvalla dedicated to Lord Vishnu.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Sree_Vallabha_Temple_Thiruvalla.jpg/400px-Sree_Vallabha_Temple_Thiruvalla.jpg",
    destinationCoords: [9.3833, 76.5750],
    spots: [
      { name: "Main Sanctum", detail: "Lord Vishnu shrine", coords: [9.3833, 76.5750] },
      { name: "Temple Festival Ground", detail: "Annual Arattu festival venue", coords: [9.3835, 76.5755] }
    ],
    spotTimings: { "Main Sanctum": "4:00 AM–11:30 AM, 5:00–8:00 PM" },
    hotels: [
      { name: "Hotel Nandanam", detail: "Thiruvalla — ₹1,800/night" },
      { name: "Pilgrim Lodge", detail: "Budget — ₹600/night" }
    ],
    stays: [
      { name: "Thiruvalla Homestay", detail: "Quiet riverside stay" }
    ]
  },
  {
    id: 97,
    name: "Thirunelli Sree Maha Vishnu Temple",
    state: "Kerala",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["car", "bike"],
    description: "Ancient Hindu temple with stone pillars in the Brahmagiri hills of Wayanad — the Kashi of the South.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Thirunelli_Temple.jpg/400px-Thirunelli_Temple.jpg",
    destinationCoords: [11.9100, 75.9983],
    spots: [
      { name: "Main Temple", detail: "Maha Vishnu shrine with ancient pillars", coords: [11.9100, 75.9983] },
      { name: "Papanashini River", detail: "Sacred river for ancestral rites", coords: [11.9105, 75.9990] },
      { name: "Pakshipathalam", detail: "Trekking spot near the temple", coords: [11.9200, 76.0100] }
    ],
    spotTimings: { "Main Temple": "5:30 AM–12:00 PM, 5:00–7:30 PM" },
    hotels: [
      { name: "Vythiri Resort", detail: "Wayanad luxury — ₹12,000/night" },
      { name: "Forest Rest House", detail: "Basic — ₹800/night" }
    ],
    stays: [
      { name: "Tribal Homestay", detail: "Wayanad forest edge" }
    ]
  },
  {
    id: 98,
    name: "Vaikom Mahadeva Temple",
    state: "Kerala",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Famous Hindu temple dedicated to Lord Shiva in Vaikom — historic site of the Vaikom Satyagraha.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Vaikom_Mahadeva_Temple.jpg/400px-Vaikom_Mahadeva_Temple.jpg",
    destinationCoords: [9.7500, 76.3917],
    spots: [
      { name: "Main Sanctum", detail: "Lord Shiva (Mahadeva) shrine", coords: [9.7500, 76.3917] },
      { name: "Vaikom Ashtami Festival", detail: "12-day annual temple festival", coords: [9.7505, 76.3920] }
    ],
    spotTimings: { "Main Sanctum": "4:00 AM–11:30 AM, 5:00–8:00 PM" },
    hotels: [
      { name: "Lake Palace Resort", detail: "Kumarakom — ₹5,000/night" },
      { name: "Vaikom Lodge", detail: "Budget — ₹900/night" }
    ],
    stays: [
      { name: "Lakeside Homestay", detail: "Near Vembanad Lake" }
    ]
  },
  {
    id: 99,
    name: "Panniyoor Varaha Moorthy Temple",
    state: "Kerala",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Beautiful temple with a serene waterbody and village atmosphere in Kumbidi, Palakkad.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Guruvayoor_Temple_1.jpg/400px-Guruvayoor_Temple_1.jpg",
    destinationCoords: [10.7833, 76.2167],
    spots: [
      { name: "Main Shrine", detail: "Lord Varaha Moorthy sanctum", coords: [10.7833, 76.2167] },
      { name: "Temple Pond", detail: "Beautiful waterbody with village views", coords: [10.7835, 76.2170] }
    ],
    spotTimings: { "Main Shrine": "5:00 AM–12:00 PM, 5:00–7:30 PM" },
    hotels: [
      { name: "Hotel Indraprastha", detail: "Palakkad — ₹2,000/night" },
      { name: "Budget Stay", detail: "Near temple — ₹700/night" }
    ],
    stays: [
      { name: "Village Homestay", detail: "Authentic rural Kerala" }
    ]
  },
  {
    id: 100,
    name: "Kodungallur Sree Kurumba Bhagavathi Temple",
    state: "Kerala",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Hindu temple dedicated to Goddess Bhadrakali in Kodungallur — famous for the Bharani festival.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Kodungallur_Temple.jpg/400px-Kodungallur_Temple.jpg",
    destinationCoords: [10.2260, 76.1940],
    spots: [
      { name: "Main Shrine", detail: "Goddess Bhadrakali sanctum", coords: [10.2260, 76.1940] },
      { name: "Bharani Festival Ground", detail: "Annual Meena Bharani celebrations", coords: [10.2265, 76.1945] }
    ],
    spotTimings: { "Main Shrine": "4:30 AM–12:00 PM, 5:00–8:00 PM" },
    hotels: [
      { name: "Hotel Presidency", detail: "Thrissur — ₹2,500/night" },
      { name: "Kodungallur Lodge", detail: "Budget — ₹800/night" }
    ],
    stays: [
      { name: "Heritage Homestay", detail: "Historic Kodungallur town" }
    ]
  },
  {
    id: 101,
    name: "Chengannur Mahadevar Temple",
    state: "Kerala",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Hindu temple devoted to Lord Shiva and Goddess Parvati in Chengannur — unique menstruation ritual.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Chengannur_Mahadeva_Temple.jpg/400px-Chengannur_Mahadeva_Temple.jpg",
    destinationCoords: [9.3167, 76.6167],
    spots: [
      { name: "Main Sanctum", detail: "Shiva and Parvati shrine", coords: [9.3167, 76.6167] },
      { name: "Temple Festival", detail: "Annual Thiruvarattu festival", coords: [9.3170, 76.6170] }
    ],
    spotTimings: { "Main Sanctum": "4:00 AM–11:30 AM, 5:00–8:00 PM" },
    hotels: [
      { name: "Hotel Aishwarya", detail: "Chengannur — ₹1,500/night" },
      { name: "Pilgrim Rest", detail: "Budget — ₹600/night" }
    ],
    stays: [
      { name: "Chengannur Homestay", detail: "Quiet town stay" }
    ]
  },
  {
    id: 102,
    name: "Sree Parthasarathi Temple, Guruvayur",
    state: "Kerala",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Hindu temple near Guruvayur known for its elephant procession and traditional rituals.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Guruvayoor_Temple_1.jpg/400px-Guruvayoor_Temple_1.jpg",
    destinationCoords: [10.5900, 76.0450],
    spots: [
      { name: "Main Shrine", detail: "Lord Parthasarathi sanctum", coords: [10.5900, 76.0450] },
      { name: "Elephant Procession Route", detail: "Famous Aanayottam route", coords: [10.5905, 76.0455] }
    ],
    spotTimings: { "Main Shrine": "4:00 AM–12:00 PM, 5:00–8:00 PM" },
    hotels: [
      { name: "Hotel Vanamala", detail: "Guruvayur — ₹2,500/night" },
      { name: "Krishna Inn", detail: "Budget — ₹1,000/night" }
    ],
    stays: [
      { name: "Guruvayur Guest House", detail: "Near temple complex" }
    ]
  },
  {
    id: 103,
    name: "Ambalappuzha Sree Krishna Swamy Temple",
    state: "Kerala",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "13th-century Hindu temple famous for its Palpayasam (milk pudding) offering to Lord Krishna.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Ambalappuzha_Temple.JPG/400px-Ambalappuzha_Temple.JPG",
    destinationCoords: [9.3833, 76.3500],
    spots: [
      { name: "Main Sanctum", detail: "Lord Krishna (Unni Kannan) shrine", coords: [9.3833, 76.3500] },
      { name: "Palpayasam Counter", detail: "Famous temple prasadam", coords: [9.3835, 76.3505] }
    ],
    spotTimings: { "Main Sanctum": "4:00 AM–12:00 PM, 5:00–8:00 PM" },
    hotels: [
      { name: "Ramada Alleppey", detail: "Lakeside — ₹4,000/night" },
      { name: "Budget Lodge", detail: "Ambalappuzha — ₹700/night" }
    ],
    stays: [
      { name: "Backwater Homestay", detail: "Canal-side stay" }
    ]
  },
  {
    id: 104,
    name: "Sree Thirumandhamkunnu Bhagavathi Temple",
    state: "Kerala",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Well-known ancient Hindu temple in Angadipuram, Malappuram — dedicated to Goddess Bhagavathi.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Kadampuzha_temple.jpg/400px-Kadampuzha_temple.jpg",
    destinationCoords: [10.9667, 76.2167],
    spots: [
      { name: "Main Shrine", detail: "Goddess Bhagavathi sanctum", coords: [10.9667, 76.2167] },
      { name: "Pooram Festival", detail: "Grand annual temple festival", coords: [10.9670, 76.2170] }
    ],
    spotTimings: { "Main Shrine": "4:30 AM–12:00 PM, 5:00–8:00 PM" },
    hotels: [
      { name: "Hotel Nesto", detail: "Malappuram — ₹2,000/night" },
      { name: "Angadipuram Lodge", detail: "Budget — ₹700/night" }
    ],
    stays: [
      { name: "Rural Homestay", detail: "Malappuram countryside" }
    ]
  },
  {
    id: 105,
    name: "Lokanarkavu Temple",
    state: "Kerala",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Ancient temple in Vatakara with stunning wood carvings and preserved murals.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Attukal_temple.jpg/400px-Attukal_temple.jpg",
    destinationCoords: [11.5950, 75.5600],
    spots: [
      { name: "Main Shrine", detail: "Durga, Shiva, and Vishnu shrines", coords: [11.5950, 75.5600] },
      { name: "Ancient Murals", detail: "Stunningly preserved wood carvings", coords: [11.5952, 75.5605] }
    ],
    spotTimings: { "Main Shrine": "5:00 AM–12:00 PM, 5:00–8:00 PM" },
    hotels: [
      { name: "Hotel Alakapuri", detail: "Kozhikode — ₹2,500/night" },
      { name: "Vatakara Lodge", detail: "Budget — ₹800/night" }
    ],
    stays: [
      { name: "Malabar Homestay", detail: "Traditional Malabar home" }
    ]
  },
  {
    id: 106,
    name: "Thiruvanchikulam Mahadeva Temple",
    state: "Kerala",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Ancient Paadal Petra Sthalam temple in Kodungallur with many deities — one of the oldest Shiva temples.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Kodungallur_Temple.jpg/400px-Kodungallur_Temple.jpg",
    destinationCoords: [10.2300, 76.2000],
    spots: [
      { name: "Main Sanctum", detail: "Lord Shiva shrine — Paadal Petra Sthalam", coords: [10.2300, 76.2000] },
      { name: "Multiple Deity Shrines", detail: "Various sub-shrines within complex", coords: [10.2305, 76.2005] }
    ],
    spotTimings: { "Main Sanctum": "4:30 AM–11:30 AM, 5:00–7:30 PM" },
    hotels: [
      { name: "Hotel Presidency", detail: "Thrissur — ₹2,500/night" },
      { name: "Kodungallur Lodge", detail: "Budget — ₹800/night" }
    ],
    stays: [
      { name: "Heritage Stay", detail: "Historic Kodungallur" }
    ]
  },
  {
    id: 107,
    name: "Kaviyoor Mahadeva Temple",
    state: "Kerala",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Ancient rock-cut cave temple near Thiruvalla — one of the oldest temples in Kerala.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Kaviyoor_temple.jpg/400px-Kaviyoor_temple.jpg",
    destinationCoords: [9.4000, 76.5833],
    spots: [
      { name: "Main Temple", detail: "Lord Shiva shrine", coords: [9.4000, 76.5833] },
      { name: "Rock-Cut Cave", detail: "Ancient cave temple with carvings", coords: [9.4005, 76.5838] }
    ],
    spotTimings: { "Main Temple": "5:00 AM–12:00 PM, 5:00–7:30 PM" },
    hotels: [
      { name: "Hotel Nandanam", detail: "Thiruvalla — ₹1,800/night" },
      { name: "Kaviyoor Lodge", detail: "Budget — ₹600/night" }
    ],
    stays: [
      { name: "Thiruvalla Homestay", detail: "Quiet riverside stay" }
    ]
  },
  {
    id: 108,
    name: "Sree Maha Ganapathi Temple, Kottarakkara",
    state: "Kerala",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "One of the most important Ganapathi temples in Kerala — a key halting point for Sabarimala pilgrims.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Sabarimala_5.jpg/600px-Sabarimala_5.jpg",
    destinationCoords: [9.0083, 76.7750],
    spots: [
      { name: "Main Sanctum", detail: "Lord Ganesha (Maha Ganapathi) shrine", coords: [9.0083, 76.7750] },
      { name: "Shiva Shrine", detail: "Originally Kizhakkekara Siva Kshethram", coords: [9.0085, 76.7753] },
      { name: "Ayyappa & Murugan Shrines", detail: "Sub-shrines within the complex", coords: [9.0080, 76.7748] }
    ],
    spotTimings: { "Main Sanctum": "4:00 AM–12:00 PM, 5:00–8:30 PM" },
    hotels: [
      { name: "Hotel Sudarsan", detail: "Kottarakkara — ₹1,500/night" },
      { name: "Pilgrim Lodge", detail: "Budget — ₹600/night" }
    ],
    stays: [
      { name: "Kottarakkara Homestay", detail: "Quiet town near Kollam" }
    ]
  },
  {
    id: 109,
    name: "Ettumanoor Shri Mahadeva Temple",
    state: "Kerala",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Ancient Shiva temple in Ettumanoor, Kottayam — famous for its murals and the Ezhara Ponnana festival.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Ettumanoor_Mahadeva_Temple.jpg/400px-Ettumanoor_Mahadeva_Temple.jpg",
    destinationCoords: [9.6700, 76.5600],
    spots: [
      { name: "Main Sanctum", detail: "Lord Shiva shrine with ancient murals", coords: [9.6700, 76.5600] },
      { name: "Ezhara Ponnana", detail: "Seven-and-a-half golden elephants festival", coords: [9.6703, 76.5603] }
    ],
    spotTimings: { "Main Sanctum": "3:30 AM–12:00 PM, 5:00–8:30 PM" },
    hotels: [
      { name: "Hotel Windsor Castle", detail: "Kottayam — ₹2,500/night" },
      { name: "Budget Inn", detail: "Ettumanoor — ₹800/night" }
    ],
    stays: [
      { name: "Kottayam Homestay", detail: "Rubber plantation stay" }
    ]
  },
  {
    id: 110,
    name: "Sree Vadakkumnathan Temple",
    state: "Kerala",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Iconic ancient Shiva temple in the heart of Thrissur — the venue of the famous Thrissur Pooram festival.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Vadakkumnathan_Temple.jpg/400px-Vadakkumnathan_Temple.jpg",
    destinationCoords: [10.5276, 76.2144],
    spots: [
      { name: "Main Sanctum", detail: "Lord Shiva (Vadakkumnathan) shrine", coords: [10.5276, 76.2144] },
      { name: "Thrissur Pooram Ground", detail: "Thekkinkadu Maidan — Pooram festival venue", coords: [10.5280, 76.2150] },
      { name: "Koothambalam", detail: "Ancient temple theatre", coords: [10.5274, 76.2140] }
    ],
    spotTimings: { "Main Sanctum": "4:00 AM–11:00 AM, 5:00–8:00 PM" },
    hotels: [
      { name: "Hotel Luciya Palace", detail: "Thrissur — ₹3,000/night" },
      { name: "Joys Palace", detail: "Mid-range — ₹2,000/night" }
    ],
    stays: [
      { name: "Thrissur Heritage Home", detail: "Traditional Kerala nalukettu" }
    ]
  },
  {
    id: 111,
    name: "Eravikulam & Chokramudi Trek",
    state: "Kerala",
    emoji: "🥾",
    category: "trekking",
    rideTypes: ["car", "bike"],
    description: "Eravikulam National Park with Nilgiri Tahr and Chokramudi Peak offering sweeping summit views near Munnar.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Eravikulam_National_Park.jpg/400px-Eravikulam_National_Park.jpg",
    destinationCoords: [10.1833, 77.0667],
    spots: [
      { name: "Eravikulam National Park", detail: "Home to endangered Nilgiri Tahr — peak point worth trekking", coords: [10.1833, 77.0667] },
      { name: "Chokramudi Peak", detail: "Hikes to summit with sweeping views of Bison Valley", coords: [10.0500, 77.0833] },
      { name: "Chokramudi Trekking Point", detail: "Starting point on Munnar-Kumily Highway", coords: [10.0480, 77.0850] }
    ],
    spotTimings: { "Eravikulam National Park": "7:00 AM – 4:00 PM (Closed Feb–Mar)", "Chokramudi Peak": "5:30 AM – 5:00 PM" },
    hotels: [
      { name: "Windermere Estate", detail: "Munnar luxury — ₹10,000/night" },
      { name: "Zostel Munnar", detail: "Budget — ₹600/night" }
    ],
    stays: [
      { name: "Tea Plantation Homestay", detail: "Among the tea gardens" }
    ]
  },
  {
    id: 112,
    name: "Illikkal Kallu & Ilaveezhapoonchira",
    state: "Kerala",
    emoji: "🥾",
    category: "trekking",
    rideTypes: ["car", "bike"],
    description: "Panoramic rock formations and serene meadows — two stunning trekking spots in Kottayam district.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Ilaveezhapoonchira.jpg/400px-Ilaveezhapoonchira.jpg",
    destinationCoords: [9.8167, 76.8333],
    spots: [
      { name: "Illikkal Kallu", detail: "Panoramic views, 1 km trek — open 8:30 AM–5:30 PM", coords: [9.8167, 76.8333] },
      { name: "Ilaveezhapoonchira", detail: "Serene breezy meadows with excellent trekking path", coords: [9.8333, 76.8000] },
      { name: "Thattupara View Point", detail: "High area accessible by vehicle or trekking", coords: [9.8200, 76.8200] }
    ],
    spotTimings: { "Illikkal Kallu": "8:00 AM – 5:30 PM", "Ilaveezhapoonchira": "Open all day" },
    hotels: [
      { name: "Hotel Windsor Castle", detail: "Kottayam — ₹2,500/night" },
      { name: "Budget Lodge", detail: "Erattupetta — ₹800/night" }
    ],
    stays: [
      { name: "Rubber Plantation Homestay", detail: "Kottayam countryside" }
    ]
  },
  {
    id: 113,
    name: "Vagamon & Thangalpara Trek",
    state: "Kerala",
    emoji: "🥾",
    category: "trekking",
    rideTypes: ["car", "bike"],
    description: "Pine forests, meadows, and Thangalpara viewpoint — 20-30 min trek gives the best view of Vagamon.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Vagamon.jpg/400px-Vagamon.jpg",
    destinationCoords: [9.6861, 76.9056],
    spots: [
      { name: "Thangalpara", detail: "20-30 min trek gives the best view of Vagamon", coords: [9.6900, 76.9100] },
      { name: "Vagamon Pine Forest", detail: "Scenic pine tree valley for walks", coords: [9.6861, 76.9056] },
      { name: "Vagamon Meadows", detail: "Rolling green hills and paragliding", coords: [9.6850, 76.9000] }
    ],
    spotTimings: { "Thangalpara": "8:00 AM – 5:00 PM", "Vagamon Pine Forest": "Open all day" },
    hotels: [
      { name: "Vagamon Heights", detail: "Hilltop resort — ₹3,500/night" },
      { name: "Budget Cottage", detail: "Vagamon — ₹1,000/night" }
    ],
    stays: [
      { name: "Meadow View Homestay", detail: "Surrounded by green hills" }
    ]
  },
  {
    id: 114,
    name: "Rhodo Valley & Meesapulimala",
    state: "Kerala",
    emoji: "🥾",
    category: "trekking",
    rideTypes: ["car", "bike"],
    description: "Peaceful, rarely crowded trails through Rhodo Valley to Meesapulimala — the second highest peak in South India.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Meesapulimala.jpg/400px-Meesapulimala.jpg",
    destinationCoords: [10.1000, 77.1500],
    spots: [
      { name: "Rhodo Valley", detail: "Peaceful trail, rarely crowded — perfect for trekking", coords: [10.0900, 77.1200] },
      { name: "Meesapulimala Peak", detail: "Second highest peak in South India (2,640m)", coords: [10.1000, 77.1500] },
      { name: "Mattuppetti Trail", detail: "Scenic trail connecting to Meesapulimala", coords: [10.0800, 77.1100] }
    ],
    spotTimings: { "Rhodo Valley": "Open all day", "Meesapulimala Peak": "5:00 AM – 4:00 PM (Permit required)" },
    hotels: [
      { name: "Windermere Estate", detail: "Munnar luxury — ₹10,000/night" },
      { name: "Zostel Munnar", detail: "Budget — ₹600/night" }
    ],
    stays: [
      { name: "Mountain Camp", detail: "Camping near the trail" }
    ]
  },
  {
    id: 115,
    name: "Periyar National Park",
    state: "Kerala",
    emoji: "🥾",
    category: "trekking",
    rideTypes: ["car", "bike"],
    description: "Scenic game reserve and ecotourism destination in Thekkady with jungle treks and boat rides.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Periyar_National_Park.jpg/400px-Periyar_National_Park.jpg",
    destinationCoords: [9.4667, 77.1667],
    spots: [
      { name: "Periyar Lake Boat Ride", detail: "Spot elephants and bison from the lake", coords: [9.4667, 77.1667] },
      { name: "Jungle Trek", detail: "Guided treks through tiger reserve", coords: [9.4700, 77.1700] },
      { name: "Bamboo Rafting", detail: "Rafting through the forest waterways", coords: [9.4650, 77.1650] }
    ],
    spotTimings: { "Periyar Lake Boat Ride": "7:00 AM – 4:00 PM", "Jungle Trek": "7:00 AM – 3:00 PM" },
    hotels: [
      { name: "Spice Village", detail: "CGH Earth — ₹12,000/night" },
      { name: "Hotel Periyar", detail: "KTDC — ₹2,000/night" }
    ],
    stays: [
      { name: "Kumily Spice Homestay", detail: "Surrounded by spice gardens" }
    ]
  },
  {
    id: 116,
    name: "Neyyar & Shoolam Falls Trek",
    state: "Kerala",
    emoji: "🥾",
    category: "trekking",
    rideTypes: ["car", "bike"],
    description: "Trekking and boating amidst lush greenery at Neyyar Wildlife Sanctuary and nearby Shoolam Waterfalls.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neyyar_dam.jpg/400px-Neyyar_dam.jpg",
    destinationCoords: [8.5500, 77.0833],
    spots: [
      { name: "Neyyar Wildlife Sanctuary", detail: "Trekking and boating amidst lush greenery", coords: [8.5500, 77.0833] },
      { name: "Shoolam Waterfalls", detail: "10 min trek from parking — beautiful falls", coords: [8.5600, 77.0900] },
      { name: "Neyyar Dam", detail: "Scenic dam with crocodile farm", coords: [8.5450, 77.0800] }
    ],
    spotTimings: { "Neyyar Wildlife Sanctuary": "9:00 AM – 5:00 PM", "Shoolam Waterfalls": "Open all day" },
    hotels: [
      { name: "Sivananda Ashram", detail: "Yoga retreat — ₹1,500/night" },
      { name: "Forest Rest House", detail: "Basic — ₹800/night" }
    ],
    stays: [
      { name: "Neyyar Homestay", detail: "Near the dam" }
    ]
  },
  {
    id: 117,
    name: "Kattadikadavu & Urulikuzhi Falls",
    state: "Kerala",
    emoji: "🥾",
    category: "trekking",
    rideTypes: ["car", "bike"],
    description: "Amazing trekking spots with mountain views and waterfalls surrounded by ample greenery.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Periyar_Tiger_Reserve.jpg/400px-Periyar_Tiger_Reserve.jpg",
    destinationCoords: [9.5000, 77.1000],
    spots: [
      { name: "Kattadikadavu View Point", detail: "Best trekking spot — amazing view on top", coords: [9.5000, 77.1000] },
      { name: "Urulikuzhi Waterfalls", detail: "Beautiful place surrounded by mountains and greenery", coords: [9.4800, 77.0800] }
    ],
    spotTimings: { "Kattadikadavu View Point": "6:00 AM – 6:00 PM", "Urulikuzhi Waterfalls": "Open all day" },
    hotels: [
      { name: "Spice Village", detail: "Thekkady — ₹12,000/night" },
      { name: "Budget Lodge", detail: "Kumily — ₹800/night" }
    ],
    stays: [
      { name: "Spice Garden Homestay", detail: "Cardamom hills" }
    ]
  },
  {
    id: 118,
    name: "Shendurney & Thenmala Trek",
    state: "Kerala",
    emoji: "🥾",
    category: "trekking",
    rideTypes: ["car", "bike"],
    description: "Protected wildlife area with safari tours and treks at India's first planned ecotourism destination.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Thenmala_Dam.jpg/400px-Thenmala_Dam.jpg",
    destinationCoords: [8.9600, 77.0600],
    spots: [
      { name: "Shendurney Wildlife Sanctuary", detail: "Protected area with safari tours and treks", coords: [8.9600, 77.0600] },
      { name: "Thenmala Ecotourism", detail: "India's first planned ecotourism destination", coords: [8.9500, 77.0700] },
      { name: "Palaruvi Waterfalls", detail: "Milky waterfall nearby — 300 ft drop", coords: [8.9400, 77.0500] }
    ],
    spotTimings: { "Shendurney Wildlife Sanctuary": "8:00 AM – 5:00 PM", "Thenmala Ecotourism": "9:00 AM – 5:00 PM" },
    hotels: [
      { name: "KTDC Thenmala", detail: "Eco lodge — ₹2,000/night" },
      { name: "Forest Rest House", detail: "Basic — ₹700/night" }
    ],
    stays: [
      { name: "Thenmala Homestay", detail: "Near the dam" }
    ]
  },
  {
    id: 119,
    name: "Chimmini & Silent Valley Trek",
    state: "Kerala",
    emoji: "🥾",
    category: "trekking",
    rideTypes: ["car", "bike"],
    description: "Amazing trekking through Silent Valley's mesmerizing trails and Chimmini Wildlife Sanctuary's calm forests.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Silent_Valley_National_Park.jpg/400px-Silent_Valley_National_Park.jpg",
    destinationCoords: [11.0833, 76.4333],
    spots: [
      { name: "Silent Valley National Park", detail: "Mesmerizing trekking trails through pristine forest", coords: [11.0833, 76.4333] },
      { name: "Chimmini Wildlife Sanctuary", detail: "Peace and calm weather — amazing trekking", coords: [10.4500, 76.2833] },
      { name: "Sairandhri", detail: "Base camp inside Silent Valley", coords: [11.0900, 76.4400] }
    ],
    spotTimings: { "Silent Valley National Park": "8:00 AM – 4:00 PM", "Chimmini Wildlife Sanctuary": "8:00 AM – 5:00 PM" },
    hotels: [
      { name: "KTDC Mukkali", detail: "Near Silent Valley — ₹1,500/night" },
      { name: "Forest Lodge", detail: "Basic — ₹600/night" }
    ],
    stays: [
      { name: "Palakkad Homestay", detail: "Gateway to Silent Valley" }
    ]
  },
  {
    id: 120,
    name: "Vayalada & Kurangani Hills",
    state: "Kerala",
    emoji: "🥾",
    category: "trekking",
    rideTypes: ["car", "bike"],
    description: "Vayalada's 1 km scenic trek and Kurangani Hills with private waterfalls — great trekking in Kerala.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Vayalada.jpg/400px-Vayalada.jpg",
    destinationCoords: [11.4167, 75.9500],
    spots: [
      { name: "Vayalada View Point", detail: "1 km trek amid great scenery — worth the climb", coords: [11.4167, 75.9500] },
      { name: "Kurangani Hills", detail: "Nice private waterfalls and trekking trails", coords: [10.0833, 77.2500] },
      { name: "Kochareekkal Caves", detail: "Cavern and waterfall in a forest setting near Piravom", coords: [9.8700, 76.5000] }
    ],
    spotTimings: { "Vayalada View Point": "6:00 AM – 7:00 PM", "Kochareekkal Caves": "8:00 AM – 5:00 PM" },
    hotels: [
      { name: "Hotel Alakapuri", detail: "Kozhikode — ₹2,500/night" },
      { name: "Trekker's Lodge", detail: "Budget — ₹700/night" }
    ],
    stays: [
      { name: "Malabar Homestay", detail: "Traditional Malabar home" }
    ]
  },

  // Kerala Hill Stations
  {
    id: 121,
    name: "Munnar Echo Point & Kottappara",
    state: "Kerala",
    emoji: "⛰️",
    category: "hill-station",
    rideTypes: ["car", "bike"],
    description: "Echo Point's misty lake reflections and Kottappara's sunrise with sea of clouds — iconic Munnar hill experiences.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Echo_Point_Munnar-Kerala.jpg/400px-Echo_Point_Munnar-Kerala.jpg",
    destinationCoords: [10.0667, 77.0600],
    spots: [
      { name: "Echo Point", detail: "Misty lake with natural echo phenomenon", coords: [10.0667, 77.0600] },
      { name: "Kottappara Hilltop Viewpoint", detail: "Sunrise and sea of clouds — perfect viewpoint", coords: [10.0800, 77.0700] },
      { name: "Kottapara Hilltop", detail: "Panoramic views of Munnar valley", coords: [10.0750, 77.0650] }
    ],
    spotTimings: { "Echo Point": "9:00 AM – 5:00 PM", "Kottappara Hilltop Viewpoint": "5:00 AM – 6:00 PM" },
    hotels: [
      { name: "Windermere Estate", detail: "Munnar luxury — ₹10,000/night" },
      { name: "Zostel Munnar", detail: "Budget — ₹600/night" }
    ],
    stays: [
      { name: "Tea Valley Homestay", detail: "Among Munnar tea gardens" }
    ]
  },
  {
    id: 122,
    name: "Top Station & Uluppuni",
    state: "Kerala",
    emoji: "⛰️",
    category: "hill-station",
    rideTypes: ["car", "bike"],
    description: "Top Station's full-angle panoramic hill views and Uluppuni's breathtaking surrounding vistas at the Kerala-Tamil Nadu border.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Top_Station_Munnar.jpg/400px-Top_Station_Munnar.jpg",
    destinationCoords: [10.1250, 77.2417],
    spots: [
      { name: "Top Station", detail: "Full angle view of surrounding hills — Kerala-TN border", coords: [10.1250, 77.2417] },
      { name: "Uluppuni Top Station", detail: "Breathtaking surrounding views from the summit", coords: [10.1300, 77.2500] },
      { name: "Kurangani View", detail: "Panoramic views of Western Ghats", coords: [10.1200, 77.2400] }
    ],
    spotTimings: { "Top Station": "6:00 AM – 6:00 PM", "Uluppuni Top Station": "6:00 AM – 7:00 PM" },
    hotels: [
      { name: "Mountain Club Resort", detail: "Munnar — ₹5,000/night" },
      { name: "Budget Inn", detail: "Suryanelli — ₹1,000/night" }
    ],
    stays: [
      { name: "Hilltop Homestay", detail: "Near Top Station" }
    ]
  },
  {
    id: 123,
    name: "Pettimudi & Kottapara Hilltop",
    state: "Kerala",
    emoji: "⛰️",
    category: "hill-station",
    rideTypes: ["car", "bike"],
    description: "Pettimudi's serene hilltop with tea estate views and Kottapara's panoramic viewpoint in Mullaringadu.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Hill_View_%28Munnar_-_Kerala%29.jpg/400px-Hill_View_%28Munnar_-_Kerala%29.jpg",
    destinationCoords: [10.0700, 77.0500],
    spots: [
      { name: "Pettimudi Hill Top", detail: "Serene hilltop with tea estate panorama", coords: [10.0700, 77.0500] },
      { name: "Kottapara Hilltop", detail: "Panoramic viewpoint in Mullaringadu", coords: [10.0750, 77.0550] },
      { name: "Tea Museum", detail: "History of Munnar tea plantations", coords: [10.0600, 77.0600] }
    ],
    spotTimings: { "Pettimudi Hill Top": "6:00 AM – 7:00 PM", "Kottapara Hilltop": "Open all day" },
    hotels: [
      { name: "Tea County", detail: "KTDC — ₹3,500/night" },
      { name: "Green View", detail: "Budget — ₹800/night" }
    ],
    stays: [
      { name: "Plantation Homestay", detail: "Amid tea gardens" }
    ]
  },
  {
    id: 124,
    name: "Nelliyampathy & Meenampara",
    state: "Kerala",
    emoji: "⛰️",
    category: "hill-station",
    rideTypes: ["car", "bike"],
    description: "Nelliyampathy's misty hills with orange groves and Meenampara's breathtaking views from the hilltop in Palakkad.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Nelliyampathy_forests%2CMinnampara.jpg/400px-Nelliyampathy_forests%2CMinnampara.jpg",
    destinationCoords: [10.5333, 76.6833],
    spots: [
      { name: "Meenampara Hill View Point 1", detail: "Breathtaking views from the top hill", coords: [10.5400, 76.6900] },
      { name: "Nelliyampathy Hills", detail: "Misty hills with orange and tea plantations", coords: [10.5333, 76.6833] },
      { name: "Seetharkundu Viewpoint", detail: "Panoramic valley views", coords: [10.5300, 76.6800] }
    ],
    spotTimings: { "Meenampara Hill View Point 1": "9:00 AM – 5:00 PM", "Nelliyampathy Hills": "Open all day" },
    hotels: [
      { name: "KTDC Nelliyampathy", detail: "Hill resort — ₹2,500/night" },
      { name: "Orange Valley Homestay", detail: "Budget — ₹1,200/night" }
    ],
    stays: [
      { name: "Plantation Bungalow", detail: "Colonial-era estate stay" }
    ]
  },
  {
    id: 125,
    name: "Palakkayam Thattu & Lakkidi",
    state: "Kerala",
    emoji: "⛰️",
    category: "hill-station",
    rideTypes: ["car", "bike"],
    description: "Palakkayam Thattu's amazing sunrise/sunset views and Lakkidi's awesome hill views in every season — Wayanad's gateway.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Lakkidi_view_point.jpg/400px-Lakkidi_view_point.jpg",
    destinationCoords: [11.5167, 75.9833],
    spots: [
      { name: "Palakkayam Thattu", detail: "Amazing sunrise/sunset views, cool climate, photo spots", coords: [11.5167, 75.9833] },
      { name: "Lakkidi View Point", detail: "Awesome views of hills in rain, sun or winter", coords: [11.5200, 76.0200] },
      { name: "Chain Tree", detail: "Historic landmark at Lakkidi pass", coords: [11.5180, 76.0180] }
    ],
    spotTimings: { "Palakkayam Thattu": "Open all day", "Lakkidi View Point": "Open all day" },
    hotels: [
      { name: "Vythiri Resort", detail: "Wayanad luxury — ₹8,000/night" },
      { name: "Budget Stay", detail: "Kalpetta — ₹1,000/night" }
    ],
    stays: [
      { name: "Wayanad Treehouse", detail: "Unique forest canopy stay" }
    ]
  },
  {
    id: 126,
    name: "Panchalimedu & Kailasappara",
    state: "Kerala",
    emoji: "⛰️",
    category: "hill-station",
    rideTypes: ["car", "bike"],
    description: "Panchalimedu's Pandava legend hilltop and Kailasappara — the most beautiful underrated relaxing point in Idukki.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Sunrise_View_From_Panchalimedu%2C_Idukki.jpg/400px-Sunrise_View_From_Panchalimedu%2C_Idukki.jpg",
    destinationCoords: [9.7500, 76.9500],
    spots: [
      { name: "Panchalimedu Hill Station", detail: "Pandava legend hilltop — nice views from the top", coords: [9.7500, 76.9500] },
      { name: "Kailasappara Top Hill Station", detail: "Most beautiful underrated relaxing point in Idukki", coords: [9.7600, 76.9600] },
      { name: "Panchalimedu Viewpoint", detail: "360-degree views of Idukki hills", coords: [9.7480, 76.9480] }
    ],
    spotTimings: { "Panchalimedu Hill Station": "6:00 AM – 6:00 PM", "Kailasappara Top Hill Station": "Open all day" },
    hotels: [
      { name: "Idukki Hilltop Resort", detail: "Mid-range — ₹3,000/night" },
      { name: "Budget Lodge", detail: "Thodupuzha — ₹800/night" }
    ],
    stays: [
      { name: "Spice Garden Homestay", detail: "Cardamom hills of Idukki" }
    ]
  },
  {
    id: 127,
    name: "Vagamon Hills & Kolahalamedu",
    state: "Kerala",
    emoji: "⛰️",
    category: "hill-station",
    rideTypes: ["car", "bike"],
    description: "One of the most breathtaking hill stations — Vagamon's rolling meadows and Kolahalamedu's misty peaks.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Vagamon.jpg/400px-Vagamon.jpg",
    destinationCoords: [9.6861, 76.9056],
    spots: [
      { name: "Vagamon Hills", detail: "One of the most breathtaking hill stations in Kerala", coords: [9.6861, 76.9056] },
      { name: "Kolahalamedu", detail: "Misty peaks with panoramic views", coords: [9.6900, 76.9100] },
      { name: "Vagamon Pine Forest", detail: "Scenic pine valley walks", coords: [9.6850, 76.9000] }
    ],
    spotTimings: { "Vagamon Hills": "Open all day", "Kolahalamedu": "Open all day" },
    hotels: [
      { name: "Vagamon Heights", detail: "Hilltop resort — ₹3,500/night" },
      { name: "Budget Cottage", detail: "Vagamon — ₹1,000/night" }
    ],
    stays: [
      { name: "Meadow View Homestay", detail: "Surrounded by green hills" }
    ]
  },
  {
    id: 128,
    name: "Ilaveezhapoonchira Top Station",
    state: "Kerala",
    emoji: "⛰️",
    category: "hill-station",
    rideTypes: ["car", "bike"],
    description: "360-degree sunrise and sunset views from the hilltop — a perfect spot for scenic viewpoints and peaceful vibes.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Ilaveezhapoonchira.jpg/400px-Ilaveezhapoonchira.jpg",
    destinationCoords: [9.8333, 76.8000],
    spots: [
      { name: "Ilaveezhapoonchira Top Station", detail: "360-degree sunrise and sunset views from the hilltop", coords: [9.8333, 76.8000] },
      { name: "Illikkal Kallu", detail: "Perfect spot for scenic viewpoints and peaceful vibes", coords: [9.8167, 76.8333] },
      { name: "Moonnilavu Viewpoint", detail: "Panoramic views of the valley", coords: [9.8250, 76.8150] }
    ],
    spotTimings: { "Ilaveezhapoonchira Top Station": "Open all day", "Illikkal Kallu": "8:00 AM – 5:30 PM" },
    hotels: [
      { name: "Hotel Windsor Castle", detail: "Kottayam — ₹2,500/night" },
      { name: "Budget Lodge", detail: "Erattupetta — ₹800/night" }
    ],
    stays: [
      { name: "Hilltop Homestay", detail: "Near Ilaveezhapoonchira" }
    ]
  },
  {
    id: 129,
    name: "Meesapulimala & Devikulam",
    state: "Kerala",
    emoji: "⛰️",
    category: "hill-station",
    rideTypes: ["car", "bike"],
    description: "Best mountain views from Meesapulimala summit and Devikulam's serene lake surrounded by tea plantations.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Meesapulimala.jpg/400px-Meesapulimala.jpg",
    destinationCoords: [10.1000, 77.1500],
    spots: [
      { name: "Meesapulimala Mountain Top", detail: "Best view from mountain — second highest peak in South India", coords: [10.1000, 77.1500] },
      { name: "Devikulam Lake", detail: "Serene lake surrounded by tea plantations", coords: [10.0500, 77.1000] },
      { name: "Sita Devi Lake", detail: "Mythological lake with crystal clear water", coords: [10.0550, 77.1050] }
    ],
    spotTimings: { "Meesapulimala Mountain Top": "4:30 AM – 4:00 PM (Permit required)", "Devikulam Lake": "9:00 AM – 5:00 PM" },
    hotels: [
      { name: "Windermere Estate", detail: "Munnar luxury — ₹10,000/night" },
      { name: "Zostel Munnar", detail: "Budget — ₹600/night" }
    ],
    stays: [
      { name: "Mountain Camp", detail: "Camping near the summit trail" }
    ]
  },
  {
    id: 130,
    name: "Kochareekkal Caves & Piravom",
    state: "Kerala",
    emoji: "⛰️",
    category: "hill-station",
    rideTypes: ["car", "bike"],
    description: "Cavern and waterfall in a forest setting near Piravom — recommended for exploring nearby waterfalls and hill stations.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Kochareekkal_Caves%2C_Piravom_%280%29.jpg/400px-Kochareekkal_Caves%2C_Piravom_%280%29.jpg",
    destinationCoords: [9.8700, 76.5000],
    spots: [
      { name: "Kochareekkal Caves", detail: "Cavern and waterfall in a forest setting", coords: [9.8700, 76.5000] },
      { name: "Piravom Hills", detail: "Scenic hills near Ernakulam", coords: [9.8750, 76.5050] },
      { name: "Nearby Waterfalls", detail: "Multiple waterfalls in the forest area", coords: [9.8680, 76.4980] }
    ],
    spotTimings: { "Kochareekkal Caves": "8:00 AM – 5:00 PM", "Piravom Hills": "Open all day" },
    hotels: [
      { name: "Hotel Periyar", detail: "Ernakulam — ₹2,000/night" },
      { name: "Budget Stay", detail: "Piravom — ₹700/night" }
    ],
    stays: [
      { name: "Village Homestay", detail: "Traditional Kerala home near Piravom" }
    ]
  },

  // Kerala Beaches
  {
    id: 131,
    name: "Alleppey Beach & Pier",
    state: "Kerala",
    emoji: "🏖️",
    category: "beach",
    rideTypes: ["car", "bike"],
    description: "Big sandy beach with an old pier and nearby park in Alappuzha — the Venice of the East.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Alleppey_beach.jpg/400px-Alleppey_beach.jpg",
    destinationCoords: [9.4900, 76.3267],
    spots: [
      { name: "Alleppey Beach", detail: "Big beach with old pier and nearby park", coords: [9.4900, 76.3267] },
      { name: "Alleppey Pier", detail: "Historic pier extending into the Arabian Sea", coords: [9.4910, 76.3250] },
      { name: "Vijaya Beach Park", detail: "Beachside park with gardens", coords: [9.4880, 76.3280] }
    ],
    spotTimings: { "Alleppey Beach": "Open all day", "Vijaya Beach Park": "8:00 AM – 6:00 PM" },
    hotels: [
      { name: "Ramada Alleppey", detail: "Beachfront — ₹5,000/night" },
      { name: "Budget Stay", detail: "Alappuzha town — ₹800/night" }
    ],
    stays: [
      { name: "Houseboat Stay", detail: "Iconic Kerala backwater houseboat" }
    ]
  },
  {
    id: 132,
    name: "Muzhappilangad Drive-In Beach",
    state: "Kerala",
    emoji: "🏖️",
    category: "beach",
    rideTypes: ["car", "bike"],
    description: "India's longest drive-in beach — 4 km of sandy shore open to motor vehicles in Kannur.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Fisherman_at_Muzhappilangad_Beach.jpg/400px-Fisherman_at_Muzhappilangad_Beach.jpg",
    destinationCoords: [11.8167, 75.3833],
    spots: [
      { name: "Muzhappilangad Drive-In Beach", detail: "4 km long sandy beach open to motor vehicles", coords: [11.8167, 75.3833] },
      { name: "Dharmadam Island", detail: "Small island visible from the beach", coords: [11.8200, 75.3800] }
    ],
    spotTimings: { "Muzhappilangad Drive-In Beach": "Open all day" },
    hotels: [
      { name: "Kannur Beach House", detail: "Beachfront — ₹3,000/night" },
      { name: "Budget Lodge", detail: "Kannur — ₹700/night" }
    ],
    stays: [
      { name: "Fisherman's Homestay", detail: "Traditional Kannur coastal home" }
    ]
  },
  {
    id: 133,
    name: "Marari & Puthenthodu Beach",
    state: "Kerala",
    emoji: "🏖️",
    category: "beach",
    rideTypes: ["car", "bike"],
    description: "Spacious sandy Marari Beach with waves and Puthenthodu's clean, calm beach away from city crowds.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Marari_Beach.jpg/400px-Marari_Beach.jpg",
    destinationCoords: [9.5833, 76.2833],
    spots: [
      { name: "Marari Beach", detail: "Spacious sandy beach with waves", coords: [9.5833, 76.2833] },
      { name: "Puthenthodu Beach", detail: "Beautiful, clean, calm beach away from city crowds", coords: [9.5900, 76.2800] },
      { name: "Puthenthode Beach", detail: "Nice beach with calm vibe and great views", coords: [9.5850, 76.2850] }
    ],
    spotTimings: { "Marari Beach": "Open all day", "Puthenthodu Beach": "Open all day" },
    hotels: [
      { name: "Marari Beach Resort", detail: "CGH Earth — ₹12,000/night" },
      { name: "Beach Cottage", detail: "Budget — ₹1,000/night" }
    ],
    stays: [
      { name: "Fishing Village Homestay", detail: "Traditional coastal Kerala home" }
    ]
  },
  {
    id: 134,
    name: "Cherai & Kuzhuppilly Beach",
    state: "Kerala",
    emoji: "🏖️",
    category: "beach",
    rideTypes: ["car", "bike"],
    description: "Cherai's dolphin-spotting shores and Kuzhuppilly's soft sand with calm waves — perfect for peaceful walks near Kochi.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Cherai_Beach_Kerala.jpg/400px-Cherai_Beach_Kerala.jpg",
    destinationCoords: [10.1333, 76.1667],
    spots: [
      { name: "Cherai Beach", detail: "Swimming, dolphins and shell collecting", coords: [10.1333, 76.1667] },
      { name: "Kuzhuppilly Beach", detail: "Soft sand and calm waves — perfect for peaceful walk", coords: [10.1400, 76.1700] },
      { name: "Njarackal Arattuvazhi Beach", detail: "Quiet beach near Kochi backwaters", coords: [10.0500, 76.2167] }
    ],
    spotTimings: { "Cherai Beach": "Open all day", "Kuzhuppilly Beach": "Open all day" },
    hotels: [
      { name: "Cherai Beach Resorts", detail: "Beachfront — ₹4,000/night" },
      { name: "Budget Stay", detail: "Cherai — ₹800/night" }
    ],
    stays: [
      { name: "Island Homestay", detail: "Vypeen Island coastal home" }
    ]
  },
  {
    id: 135,
    name: "Bekal Fort Beach",
    state: "Kerala",
    emoji: "🏖️",
    category: "beach",
    rideTypes: ["car", "bike"],
    description: "Stunning beach beside the historic Bekal Fort — where the Arabian Sea meets ancient laterite walls in Kasaragod.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Bekal_Fort_%284530729846%29.jpg/400px-Bekal_Fort_%284530729846%29.jpg",
    destinationCoords: [12.3917, 75.0333],
    spots: [
      { name: "Bekal Fort Beach", detail: "Beach beside the historic Bekal Fort", coords: [12.3917, 75.0333] },
      { name: "Bekal Fort", detail: "Largest fort in Kerala — panoramic sea views", coords: [12.3930, 75.0320] },
      { name: "Pallikere Beach", detail: "Secluded beach near Bekal", coords: [12.3900, 75.0350] }
    ],
    spotTimings: { "Bekal Fort Beach": "10:00 AM – 5:30 PM", "Bekal Fort": "8:00 AM – 5:30 PM" },
    hotels: [
      { name: "Taj Bekal Resort", detail: "Luxury — ₹15,000/night" },
      { name: "Budget Lodge", detail: "Kasaragod — ₹800/night" }
    ],
    stays: [
      { name: "Bekal Homestay", detail: "Near the fort" }
    ]
  },
  {
    id: 136,
    name: "Edava Beach & Varkala",
    state: "Kerala",
    emoji: "🏖️",
    category: "beach",
    rideTypes: ["car", "bike"],
    description: "Edava's relaxed atmosphere with beautiful sunsets and Varkala's dramatic cliff-top beach views.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Varkala_Beach%2C_Varkala%2C_Kerala.jpg/400px-Varkala_Beach%2C_Varkala%2C_Kerala.jpg",
    destinationCoords: [8.7333, 76.7167],
    spots: [
      { name: "Edava Beach", detail: "Relaxed atmosphere with beautiful sunsets", coords: [8.7500, 76.7100] },
      { name: "Varkala Cliff Beach", detail: "Dramatic cliff-top beach with stunning views", coords: [8.7333, 76.7167] },
      { name: "Papanasam Beach", detail: "Sacred beach believed to wash away sins", coords: [8.7350, 76.7150] }
    ],
    spotTimings: { "Edava Beach": "Open all day", "Varkala Cliff Beach": "Open all day" },
    hotels: [
      { name: "Varkala Marine Palace", detail: "Cliff-top — ₹4,000/night" },
      { name: "Beach Hostel", detail: "Budget — ₹500/night" }
    ],
    stays: [
      { name: "Cliff Homestay", detail: "Overlooking the Arabian Sea" }
    ]
  },
  {
    id: 137,
    name: "Beypore & Kappil Beach",
    state: "Kerala",
    emoji: "🏖️",
    category: "beach",
    rideTypes: ["car", "bike"],
    description: "Beypore's historic port beach in Kozhikode and Kappil's clean white sand with nice breeze.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Beypore_Beach%2C_Kozhikode%2C_Kerala.jpg/400px-Beypore_Beach%2C_Kozhikode%2C_Kerala.jpg",
    destinationCoords: [11.1667, 75.8000],
    spots: [
      { name: "Beypore Beach", detail: "Historic port beach with Uru (dhow) building yard", coords: [11.1667, 75.8000] },
      { name: "Kappil Beach", detail: "Clean white sand with nice breeze", coords: [8.7200, 76.7300] },
      { name: "Beypore Pulimuttu", detail: "Long stone pier extending into the sea", coords: [11.1650, 75.7980] }
    ],
    spotTimings: { "Beypore Beach": "Open all day", "Kappil Beach": "Open all day" },
    hotels: [
      { name: "Hotel Alakapuri", detail: "Kozhikode — ₹2,500/night" },
      { name: "Beach Cottage", detail: "Budget — ₹800/night" }
    ],
    stays: [
      { name: "Malabar Homestay", detail: "Traditional Kozhikode home" }
    ]
  },
  {
    id: 138,
    name: "Elamkunnapuzha & Nattika Beach",
    state: "Kerala",
    emoji: "🏖️",
    category: "beach",
    rideTypes: ["car", "bike"],
    description: "Blue Waves beach with scenic casuarina woods and Nattika's serene shoreline in Thrissur.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Nattika_beach.JPG/400px-Nattika_beach.JPG",
    destinationCoords: [10.3333, 76.1833],
    spots: [
      { name: "Elamkunnapuzha Blue Waves Beach", detail: "Scenic beach with casuarina tree woods", coords: [10.0400, 76.2100] },
      { name: "Nattika Beach", detail: "Serene shoreline in Thrissur district", coords: [10.3333, 76.1833] },
      { name: "Thambankadavu Beach", detail: "Best private beach experience — very clean", coords: [10.3400, 76.1800] }
    ],
    spotTimings: { "Elamkunnapuzha Blue Waves Beach": "Open all day", "Nattika Beach": "Open all day" },
    hotels: [
      { name: "Nattika Beach Ayurveda Resort", detail: "Luxury — ₹8,000/night" },
      { name: "Budget Stay", detail: "Thrissur — ₹900/night" }
    ],
    stays: [
      { name: "Coastal Homestay", detail: "Near Nattika beach" }
    ]
  },
  {
    id: 139,
    name: "Vadanappally & Swapnatheeram",
    state: "Kerala",
    emoji: "🏖️",
    category: "beach",
    rideTypes: ["car", "bike"],
    description: "Vadanappally's traditional fishing beach and Swapnatheeram's dreamy shoreline in Thrissur coast.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Nattika_beach.JPG/400px-Nattika_beach.JPG",
    destinationCoords: [10.3667, 76.1667],
    spots: [
      { name: "Vadanappally Beach", detail: "Traditional fishing beach with golden sand", coords: [10.3667, 76.1667] },
      { name: "Swapnatheeram Beach", detail: "Dreamy shoreline — Swapnatheeram means dream shore", coords: [10.3700, 76.1650] },
      { name: "Panchavadi Beach", detail: "Quiet beach with scenic views", coords: [10.3600, 76.1700] }
    ],
    spotTimings: { "Vadanappally Beach": "Open all day", "Swapnatheeram Beach": "Open all day" },
    hotels: [
      { name: "Beach Resort Thrissur", detail: "Mid-range — ₹3,000/night" },
      { name: "Budget Lodge", detail: "Chavakkad — ₹700/night" }
    ],
    stays: [
      { name: "Fisherman's Homestay", detail: "Traditional coastal home" }
    ]
  },
  {
    id: 140,
    name: "Kodungallur Azhikode Beach",
    state: "Kerala",
    emoji: "🏖️",
    category: "beach",
    rideTypes: ["car", "bike"],
    description: "Where the Periyar River meets the Arabian Sea — historic Kodungallur's scenic beach with backwater views.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Kappil_beach_kerala.jpg/400px-Kappil_beach_kerala.jpg",
    destinationCoords: [10.2333, 76.1667],
    spots: [
      { name: "Kodungallur Azhikode Beach", detail: "Where Periyar River meets the Arabian Sea", coords: [10.2333, 76.1667] },
      { name: "Azhikode Munakkal Beach", detail: "Scenic beach with backwater confluence", coords: [10.2350, 76.1650] },
      { name: "Kodungallur Kotta", detail: "Historic Portuguese fort ruins nearby", coords: [10.2260, 76.1940] }
    ],
    spotTimings: { "Kodungallur Azhikode Beach": "Open all day" },
    hotels: [
      { name: "Hotel Indraprastha", detail: "Kodungallur — ₹2,000/night" },
      { name: "Budget Stay", detail: "Kodungallur — ₹600/night" }
    ],
    stays: [
      { name: "Backwater Homestay", detail: "Near the river confluence" }
    ]
  },

  // =============================================
  // KARNATAKA
  // =============================================
  {
    id: 41,
    name: "Coorg",
    state: "Karnataka",
    emoji: "☕",
    category: "hill-station",
    rideTypes: ["bike", "car"],
    description: "Scotland of India — lush coffee plantations, misty hills, and waterfalls.",
    spots: [
      { name: "Abbey Falls", detail: "Beautiful waterfall amid coffee estates" },
      { name: "Raja's Seat", detail: "Panoramic sunset viewpoint" },
      { name: "Dubare Elephant Camp", detail: "Interact with elephants by the river" },
      { name: "Talacauvery", detail: "Origin of the river Cauvery" }
    ],
    hotels: [
      { name: "Tamara Coorg", detail: "Luxury eco-resort — ₹15,000/night" },
      { name: "Hotel Coorg International", detail: "Mid-range — ₹2,000/night" },
      { name: "Coorg Backpackers", detail: "Budget stay — ₹600/night" }
    ],
    stays: [
      { name: "Coffee Estate Homestay", detail: "Wake up to coffee plantations" },
      { name: "Treehouse Stay", detail: "Unique treetop experience" }
    ]
  },
  {
    id: 42,
    name: "Hampi",
    state: "Karnataka",
    emoji: "🏛️",
    category: "trekking",
    rideTypes: ["solo", "bike"],
    description: "UNESCO World Heritage Site — ancient ruins of the Vijayanagara Empire.",
    spots: [
      { name: "Virupaksha Temple", detail: "Functioning temple from the 7th century" },
      { name: "Vittala Temple", detail: "Famous stone chariot and musical pillars" },
      { name: "Matanga Hill", detail: "Best sunrise point in Hampi" },
      { name: "Hippie Island", detail: "Laid-back vibes across the river" }
    ],
    hotels: [
      { name: "Evolve Back Hampi", detail: "Luxury heritage — ₹18,000/night" },
      { name: "Clarks Inn Hampi", detail: "Comfortable — ₹2,500/night" },
      { name: "Goan Corner", detail: "Budget guesthouse — ₹400/night" }
    ],
    stays: [
      { name: "Riverside Hut", detail: "Basic hut on Hippie Island" },
      { name: "Heritage Homestay", detail: "Traditional Kannada home" }
    ]
  },
  {
    id: 43,
    name: "Mysore",
    state: "Karnataka",
    emoji: "👑",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "City of Palaces — royal heritage, sandalwood, silk, and Dasara festival.",
    spots: [
      { name: "Mysore Palace", detail: "Stunning Indo-Saracenic palace lit up at night" },
      { name: "Chamundi Hills", detail: "Hilltop temple with city views" },
      { name: "Brindavan Gardens", detail: "Musical fountain and terraced gardens" },
      { name: "St. Philomena's Church", detail: "One of the tallest churches in Asia" }
    ],
    hotels: [
      { name: "Radisson Blu Mysore", detail: "Premium — ₹6,000/night" },
      { name: "Hotel Pai Vista", detail: "Mid-range — ₹2,000/night" },
      { name: "Sonder Hostel", detail: "Budget — ₹500/night" }
    ],
    stays: [
      { name: "Palace View Homestay", detail: "Views of the illuminated palace" },
      { name: "Silk Weaver's Home", detail: "Stay with traditional silk artisans" }
    ]
  },
  {
    id: 44,
    name: "Gokarna",
    state: "Karnataka",
    emoji: "🏝️",
    category: "beach",
    rideTypes: ["solo", "bike"],
    description: "Peaceful beach town with temple vibes — the quieter cousin of Goa.",
    spots: [
      { name: "Om Beach", detail: "Om-shaped beach, iconic for photos" },
      { name: "Kudle Beach", detail: "Relaxed beach with shacks and sunsets" },
      { name: "Half Moon Beach", detail: "Secluded cove reached by trek" },
      { name: "Paradise Beach", detail: "Secluded beach — best reached by trekking from Belekan" },
      { name: "Mahabaleshwar Temple", detail: "Ancient Shiva temple in town" }
    ],
    hotels: [
      { name: "SwaSwara", detail: "Wellness luxury — ₹12,000/night" },
      { name: "Namaste Cafe", detail: "Beachside rooms — ₹1,500/night" },
      { name: "Zostel Gokarna", detail: "Budget hostel — ₹500/night" }
    ],
    stays: [
      { name: "Beach Hut", detail: "Simple hut right on the sand" },
      { name: "Clifftop Tent", detail: "Glamping with ocean views" }
    ]
  },
  {
    id: 45,
    name: "Kudremukh",
    state: "Karnataka",
    emoji: "🥾",
    category: "trekking",
    rideTypes: ["bike", "car"],
    description: "Horse-face mountain — one of Karnataka's best treks through shola grasslands.",
    spots: [
      { name: "Kudremukh Peak Trek", detail: "Challenging trek through rolling grasslands" },
      { name: "Hanuman Gundi Falls", detail: "Waterfall inside the national park" },
      { name: "Kudremukh National Park", detail: "Rich biodiversity and scenic trails" },
      { name: "Lakya Dam", detail: "Serene reservoir surrounded by hills" }
    ],
    hotels: [
      { name: "Nature Camp Kudremukh", detail: "Forest stay — ₹2,000/night" },
      { name: "Kudremukh Guest House", detail: "Basic — ₹1,000/night" },
      { name: "Trek Base Camp", detail: "Budget tents — ₹500/night" }
    ],
    stays: [
      { name: "Forest Homestay", detail: "Local home near the national park" },
      { name: "Plantation Stay", detail: "Coffee and areca nut estate" }
    ]
  },

  // --- Karnataka Devotional Spots ---

  // Coastal & Coastal Range
  {
    id: 141,
    name: "Udupi",
    state: "Karnataka",
    emoji: "🛕",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Famous for the Sri Krishna Temple and the birthplace of Dvaita philosophy by Madhvacharya. The temple's unique west-facing idol is viewed through the Kanakana Kindi window.",
    spots: [
      { name: "Sri Krishna Temple", detail: "13th-century temple — idol viewed through Kanakana Kindi window" },
      { name: "Anantheshwara Temple", detail: "Ancient Shiva temple adjacent to Krishna Temple" },
      { name: "Malpe Beach", detail: "Popular beach 6 km from Udupi with St. Mary's Island boat rides" },
      { name: "Kadiyali Maha Ganapathi Temple", detail: "Revered Ganesh temple near Udupi" }
    ],
    hotels: [
      { name: "Hotel Kidiyoor", detail: "Near temple — ₹2,500/night" },
      { name: "Udupi Residency", detail: "Mid-range — ₹1,500/night" },
      { name: "Pilgrim Guest House", detail: "Budget — ₹600/night" }
    ],
    stays: [
      { name: "Temple Town Homestay", detail: "Traditional home near the Krishna Temple" },
      { name: "Malpe Beach Stay", detail: "Coastal stay near the beach" }
    ]
  },
  {
    id: 142,
    name: "Murudeshwar",
    state: "Karnataka",
    emoji: "🔱",
    category: "devotional",
    rideTypes: ["solo", "bike", "car"],
    description: "Home to the world's second-tallest Shiva statue (123 ft) perched on Kanduka Hill with stunning Arabian Sea views and a 20-storey Raja Gopura.",
    spots: [
      { name: "Murudeshwar Temple", detail: "123-ft Shiva statue on Kanduka Hill overlooking the sea" },
      { name: "Raja Gopura", detail: "20-storey temple tower with elevator and panoramic views" },
      { name: "Murudeshwar Beach", detail: "Scenic beach at the foot of the temple hill" },
      { name: "Netrani Island", detail: "Coral island 19 km offshore — popular for scuba diving" }
    ],
    hotels: [
      { name: "RNS Residency", detail: "Sea-facing — ₹3,000/night" },
      { name: "Naveen Beach Resort", detail: "Mid-range — ₹1,800/night" },
      { name: "Budget Lodge", detail: "Near temple — ₹700/night" }
    ],
    stays: [
      { name: "Seaside Homestay", detail: "Coastal home with temple views" },
      { name: "Fisherman Village Stay", detail: "Local coastal life experience" }
    ]
  },
  {
    id: 143,
    name: "Gokarna (Devotional)",
    state: "Karnataka",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "bike", "car"],
    description: "Houses the sacred Atmalinga at the Mahabaleshwar Temple — one of the top salvation sites in Hindu tradition. The name means 'cow's ear' in Sanskrit.",
    spots: [
      { name: "Mahabaleshwar Temple", detail: "Ancient Shiva temple housing the Atmalinga — top moksha site" },
      { name: "Koti Tirtha", detail: "Sacred temple tank for ritual bathing" },
      { name: "Maha Ganapathi Temple", detail: "Ganesh temple where Ganapathi tricked Ravana" },
      { name: "Bhadrakali Temple", detail: "Powerful Devi temple in the temple town" }
    ],
    hotels: [
      { name: "SwaSwara", detail: "Wellness luxury — ₹12,000/night" },
      { name: "Hotel Gokarna International", detail: "Mid-range — ₹2,000/night" },
      { name: "Zostel Gokarna", detail: "Budget hostel — ₹500/night" }
    ],
    stays: [
      { name: "Temple Town Homestay", detail: "Traditional home near Mahabaleshwar Temple" },
      { name: "Agraharam Stay", detail: "Heritage quarter experience" }
    ]
  },
  {
    id: 144,
    name: "Kukke Subramanya",
    state: "Karnataka",
    emoji: "🐍",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Nestled in the Western Ghats, this temple is famous for serpent worship (Naga deity). Devotees perform Sarpa Samskara and Ashlesha Bali rituals here.",
    spots: [
      { name: "Kukke Subramanya Temple", detail: "Renowned serpent deity temple — Sarpa Samskara rituals" },
      { name: "Adi Subramanya Temple", detail: "Ancient cave temple upstream on the Kumaradhara river" },
      { name: "Kumaradhara River", detail: "Sacred river for ritual bathing before temple visit" },
      { name: "Kumara Parvatha Trek", detail: "Challenging trek starting from Subramanya — one of Karnataka's toughest" }
    ],
    hotels: [
      { name: "Temple Guest House", detail: "Devasthana accommodation — ₹500/night" },
      { name: "Hotel Nandini", detail: "Mid-range — ₹1,500/night" },
      { name: "Local Lodge", detail: "Budget — ₹400/night" }
    ],
    stays: [
      { name: "Western Ghats Homestay", detail: "Amid lush forests near the temple" },
      { name: "Plantation Stay", detail: "Areca and coffee estate experience" }
    ]
  },
  {
    id: 145,
    name: "Dharmasthala",
    state: "Karnataka",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Known for the Manjunatha Temple — a unique blend of Hinduism and Jainism where a Jain Heggade family administers a Hindu Shiva temple. Free Annadana feeds 10,000+ daily.",
    spots: [
      { name: "Manjunatha Temple", detail: "Shiva temple administered by Jain Heggade family — unique interfaith tradition" },
      { name: "Bahubali Statue", detail: "39-ft monolithic Gommateshwara statue" },
      { name: "Manjusha Museum", detail: "Museum with antique collections and vintage cars" },
      { name: "Annadana Hall", detail: "Free meals served to 10,000+ devotees daily" }
    ],
    hotels: [
      { name: "Dharmasthala Guest House", detail: "Temple trust accommodation — ₹300/night" },
      { name: "Hotel Manjunatha", detail: "Mid-range — ₹1,200/night" },
      { name: "Netravathi Residency", detail: "Budget — ₹800/night" }
    ],
    stays: [
      { name: "Temple Town Homestay", detail: "Simple home near the temple complex" },
      { name: "Riverside Stay", detail: "Near the Netravathi river" }
    ]
  },
  {
    id: 146,
    name: "Kollur Mookambika",
    state: "Karnataka",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "A renowned Shakti Peetha dedicated to Goddess Mookambika at the foothills of Kodachadri peak. One of the seven Mukti Sthalas of Karnataka.",
    spots: [
      { name: "Mookambika Temple", detail: "Powerful Shakti Peetha — one of seven Mukti Sthalas" },
      { name: "Kodachadri Peak", detail: "Scenic trek to the peak behind the temple — stunning sunset views" },
      { name: "Souparnika River", detail: "Sacred river for ritual bathing" },
      { name: "Arishina Gundi Falls", detail: "Waterfall trek near Kodachadri" }
    ],
    hotels: [
      { name: "Temple Trust Guest House", detail: "Devasthana stay — ₹400/night" },
      { name: "Hotel Sai Prasad", detail: "Mid-range — ₹1,200/night" },
      { name: "Local Lodge", detail: "Budget — ₹500/night" }
    ],
    stays: [
      { name: "Forest Edge Homestay", detail: "Near Kodachadri foothills" },
      { name: "Village Homestay", detail: "Rural Karnataka experience" }
    ]
  },

  // Western Ghats & Historic Places
  {
    id: 147,
    name: "Sringeri",
    state: "Karnataka",
    emoji: "📿",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "The first of four Advaita Pithas (monasteries) founded by Adi Shankaracharya in the 8th century. The Sharadamba Temple sits on the banks of the Tunga river.",
    spots: [
      { name: "Sharadamba Temple", detail: "First Advaita Pitha — Goddess Sharada on the Tunga river banks" },
      { name: "Vidyashankara Temple", detail: "12-zodiac-pillar temple — sunlight falls on each pillar per month" },
      { name: "Tunga River", detail: "Sacred river with fish feeding — fish are considered sacred here" },
      { name: "Sringeri Mutt", detail: "Ancient monastery with rich philosophical heritage" }
    ],
    hotels: [
      { name: "Mutt Guest House", detail: "Monastery accommodation — ₹300/night" },
      { name: "Hotel Mayura", detail: "Mid-range — ₹1,200/night" },
      { name: "Local Lodge", detail: "Budget — ₹500/night" }
    ],
    stays: [
      { name: "Riverside Homestay", detail: "Peaceful stay on the Tunga river" },
      { name: "Western Ghats Homestay", detail: "Amid coffee and spice plantations" }
    ]
  },
  {
    id: 148,
    name: "Horanadu",
    state: "Karnataka",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Known for the Annapoorneshwari Temple dedicated to the Goddess of Food, located amidst lush Western Ghats landscapes. Free meals served to all visitors.",
    spots: [
      { name: "Annapoorneshwari Temple", detail: "Goddess of Food — free Annadana for all visitors" },
      { name: "Bhadra River", detail: "Scenic river flowing near the temple" },
      { name: "Kalasa Kalaseshwara Temple", detail: "Ancient Shiva temple 10 km away in Kalasa town" },
      { name: "Kemmangundi", detail: "Hill station 40 km away with Hebbe Falls and Z-Point" }
    ],
    hotels: [
      { name: "Temple Guest House", detail: "Free/donation-based accommodation" },
      { name: "Hotel Mayura", detail: "Mid-range — ₹1,000/night" },
      { name: "Local Lodge", detail: "Budget — ₹500/night" }
    ],
    stays: [
      { name: "Plantation Homestay", detail: "Coffee estate stay near Horanadu" },
      { name: "Forest Edge Stay", detail: "Amid the Western Ghats greenery" }
    ]
  },
  {
    id: 149,
    name: "Hampi (Devotional)",
    state: "Karnataka",
    emoji: "🛕",
    category: "devotional",
    rideTypes: ["solo", "bike", "car"],
    description: "UNESCO World Heritage Site — the Virupaksha Temple has been functioning since the 7th century within the ruins of the Vijayanagara Empire capital.",
    spots: [
      { name: "Virupaksha Temple", detail: "Functioning 7th-century Shiva temple — UNESCO Heritage" },
      { name: "Vittala Temple Complex", detail: "Famous stone chariot and musical pillars" },
      { name: "Hemakuta Hill Temples", detail: "Cluster of ancient Jain and Shiva temples" },
      { name: "Lakshmi Narasimha Statue", detail: "Largest monolithic Narasimha statue — 6.7m tall" }
    ],
    hotels: [
      { name: "Evolve Back Hampi", detail: "Luxury heritage — ₹18,000/night" },
      { name: "Clarks Inn Hampi", detail: "Comfortable — ₹2,500/night" },
      { name: "Goan Corner", detail: "Budget guesthouse — ₹400/night" }
    ],
    stays: [
      { name: "Heritage Homestay", detail: "Traditional Kannada home near ruins" },
      { name: "Riverside Hut", detail: "Basic hut on Hippie Island" }
    ]
  },
  {
    id: 150,
    name: "Shravanabelagola",
    state: "Karnataka",
    emoji: "🧘",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Famous for the 57-ft monolithic statue of Gommateshwara (Bahubali) — the tallest monolithic stone statue in the world, carved in 983 AD atop Vindhyagiri Hill.",
    spots: [
      { name: "Gommateshwara Statue", detail: "57-ft monolithic Bahubali — tallest monolithic statue in the world (983 AD)" },
      { name: "Vindhyagiri Hill", detail: "614 steps to the summit — panoramic views of the plains" },
      { name: "Chandragiri Hill", detail: "Cluster of Jain basadis and temples" },
      { name: "Mahamastakabhisheka", detail: "Grand anointing ceremony held once every 12 years" }
    ],
    hotels: [
      { name: "Hotel Raghu", detail: "Near the hill — ₹1,500/night" },
      { name: "KSTDC Hotel Mayura", detail: "Government stay — ₹1,000/night" },
      { name: "Pilgrim Dharamshala", detail: "Budget — ₹300/night" }
    ],
    stays: [
      { name: "Heritage Homestay", detail: "Traditional home near Vindhyagiri" },
      { name: "Village Stay", detail: "Rural Karnataka experience" }
    ]
  },

  // Bangalore/Mysore Region
  {
    id: 151,
    name: "Nanjangud",
    state: "Karnataka",
    emoji: "🛕",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Known as Dakshina Kashi (South Kashi) — the Srikanteshwara Temple on the banks of river Kapila is one of the largest temples in Karnataka.",
    spots: [
      { name: "Srikanteshwara Temple", detail: "Dakshina Kashi — massive Shiva temple on the Kapila river" },
      { name: "Kapila River Ghat", detail: "Sacred bathing ghat along the river" },
      { name: "Nanjangud Rasabale", detail: "Famous for the unique Nanjangud banana variety" },
      { name: "Mysore (nearby)", detail: "Royal city just 23 km away" }
    ],
    hotels: [
      { name: "Mysore Hotels", detail: "Nearby city options — ₹2,000/night" },
      { name: "Local Lodge", detail: "Basic stay near temple — ₹600/night" },
      { name: "Pilgrim Guest House", detail: "Budget — ₹400/night" }
    ],
    stays: [
      { name: "Riverside Homestay", detail: "Near the Kapila river" },
      { name: "Village Stay", detail: "Rural Mysore district experience" }
    ]
  },
  {
    id: 152,
    name: "Srirangapatna",
    state: "Karnataka",
    emoji: "🛕",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Island town on the Kaveri river — home to the Sri Ranganathaswamy Temple and the historic capital of Tipu Sultan's kingdom.",
    spots: [
      { name: "Sri Ranganathaswamy Temple", detail: "Ancient Vishnu temple on the Kaveri river island" },
      { name: "Tipu Sultan's Summer Palace", detail: "Daria Daulat Bagh — ornate Indo-Islamic palace" },
      { name: "Gumbaz", detail: "Mausoleum of Tipu Sultan and Hyder Ali" },
      { name: "Nimishamba Temple", detail: "Riverside Parvati temple — wishes granted in a nimisha (minute)" }
    ],
    hotels: [
      { name: "Mysore Hotels", detail: "Nearby city options — ₹2,000/night" },
      { name: "KSTDC Hotel Mayura", detail: "Government stay — ₹1,000/night" },
      { name: "Local Lodge", detail: "Budget — ₹500/night" }
    ],
    stays: [
      { name: "Island Homestay", detail: "Stay on the Kaveri river island" },
      { name: "Heritage Stay", detail: "Near Tipu Sultan's palace" }
    ]
  },
  {
    id: 153,
    name: "Kotilingeshwara",
    state: "Karnataka",
    emoji: "🔱",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Known for hosting lakhs of Shiva lingas in the Kolar district — features a 108-ft Shiva linga and a 35-ft Nandi, with devotees sponsoring new lingas continuously.",
    spots: [
      { name: "Kotilingeshwara Temple", detail: "108-ft Shiva linga with lakhs of smaller lingas around it" },
      { name: "Giant Nandi Statue", detail: "35-ft monolithic Nandi bull facing the main linga" },
      { name: "Temple Garden", detail: "Vast grounds with rows of Shiva lingas" },
      { name: "Kolar Gold Fields (nearby)", detail: "Historic gold mining town 30 km away" }
    ],
    hotels: [
      { name: "Kolar Hotels", detail: "Nearby town options — ₹1,200/night" },
      { name: "Local Lodge", detail: "Basic stay near temple — ₹500/night" },
      { name: "Bangalore Hotels", detail: "90 km away — wide range of options" }
    ],
    stays: [
      { name: "Village Homestay", detail: "Rural Kolar district experience" },
      { name: "Farm Stay", detail: "Agricultural life near the temple" }
    ]
  },

  // --- Karnataka Trekking Spots ---

  // 🟢 Easy Treks
  {
    id: 154,
    name: "Nandi Hills",
    state: "Karnataka",
    emoji: "🌄",
    category: "trekking",
    rideTypes: ["solo", "bike", "car"],
    description: "🟢 Popular sunrise trek just 60 km from Bangalore — ancient Tipu Sultan fort, paragliding, and panoramic views from 1,478m.",
    spots: [
      { name: "Nandi Hills Sunrise Point", detail: "Iconic sunrise viewpoint — arrive by 5:30 AM" },
      { name: "Tipu Sultan's Summer Palace", detail: "Tipu's Drop — a cliff used for executing prisoners" },
      { name: "Amrita Sarovar", detail: "Ancient lake at the hilltop" },
      { name: "Yoga Nandeeshwara Temple", detail: "9th-century Chola-era temple at the summit" }
    ],
    hotels: [
      { name: "Hotel Mayura Pine Top", detail: "KSTDC hilltop stay — ₹2,000/night" },
      { name: "Bangalore Hotels", detail: "60 km away — wide range" },
      { name: "Nandi Cross Homestay", detail: "Budget near base — ₹800/night" }
    ],
    stays: [
      { name: "Hilltop Camping", detail: "Camping with sunrise views" },
      { name: "Vineyard Stay", detail: "Grover Zampa vineyard nearby" }
    ]
  },
  {
    id: 155,
    name: "Skandagiri",
    state: "Karnataka",
    emoji: "🌙",
    category: "trekking",
    rideTypes: ["bike", "car"],
    description: "🟢 Famous night trek near Bangalore — hike under the stars and watch sunrise above the clouds from the ruined Kalavara Durga fort at 1,350m.",
    spots: [
      { name: "Skandagiri Night Trek", detail: "Popular night trek — start at 2 AM for sunrise at summit" },
      { name: "Kalavara Durga Ruins", detail: "Ancient fort ruins at the peak" },
      { name: "Cloud Walk", detail: "Walk above the cloud line during monsoon and winter" },
      { name: "Papagni Temple", detail: "Small temple at the base of the hill" }
    ],
    hotels: [
      { name: "Chikballapur Hotels", detail: "Nearby town — ₹1,200/night" },
      { name: "Nandi Hills Stays", detail: "10 km away — ₹1,500/night" },
      { name: "Trek Organizer Camp", detail: "Guided trek with camping — ₹1,000/person" }
    ],
    stays: [
      { name: "Summit Camping", detail: "Camp at the fort ruins" },
      { name: "Base Village Homestay", detail: "Local home at Kalwara village" }
    ]
  },
  {
    id: 156,
    name: "Savandurga",
    state: "Karnataka",
    emoji: "🧗",
    category: "trekking",
    rideTypes: ["bike", "car"],
    description: "🟢 One of the largest monolith hills in Asia — a rocky scramble 50 km from Bangalore with Manchanabele Dam views and ancient fort ruins.",
    spots: [
      { name: "Savandurga Hill Trek", detail: "Rocky scramble up one of Asia's largest monoliths" },
      { name: "Manchanabele Dam", detail: "Scenic reservoir at the base — kayaking available" },
      { name: "Savandurga Fort Ruins", detail: "Remains of Kempe Gowda's 16th-century fort" },
      { name: "Narasimha Swamy Temple", detail: "Cave temple at the base of the hill" }
    ],
    hotels: [
      { name: "Ramanagara Hotels", detail: "Nearby town — ₹1,200/night" },
      { name: "Bangalore Hotels", detail: "50 km away — wide range" },
      { name: "Lakeside Camp", detail: "Camping near Manchanabele — ₹800/person" }
    ],
    stays: [
      { name: "Dam View Homestay", detail: "Near Manchanabele reservoir" },
      { name: "Rock Climbing Camp", detail: "Adventure camp at the base" }
    ]
  },

  // 🟡 Moderate Treks
  {
    id: 157,
    name: "Kodachadri",
    state: "Karnataka",
    emoji: "🌿",
    category: "trekking",
    rideTypes: ["bike", "car"],
    description: "🟡 Stunning Western Ghats peak at 1,343m — dense shola forests, Hidlumane Falls, and a Mookambika temple at the summit with Arabian Sea views on clear days.",
    spots: [
      { name: "Kodachadri Peak", detail: "1,343m summit — Arabian Sea visible on clear days" },
      { name: "Hidlumane Falls", detail: "Multi-tiered waterfall on the trek route" },
      { name: "Sarvajna Peetha", detail: "Adi Shankaracharya's meditation spot at the summit" },
      { name: "Nagodi Forest Trail", detail: "Dense forest trail through the Western Ghats" }
    ],
    hotels: [
      { name: "Kollur Hotels", detail: "Nearby temple town — ₹1,000/night" },
      { name: "Forest Department Guest House", detail: "Basic stay — ₹500/night" },
      { name: "Trek Base Camp Nagodi", detail: "Camping — ₹600/person" }
    ],
    stays: [
      { name: "Homestay Nagodi", detail: "Village home at the trek base" },
      { name: "Summit Camping", detail: "Camp at the peak with sunset views" }
    ]
  },
  {
    id: 158,
    name: "Tadiandamol",
    state: "Karnataka",
    emoji: "⛰️",
    category: "trekking",
    rideTypes: ["bike", "car"],
    description: "🟡 Highest peak in Coorg at 1,748m — rolling grasslands, misty trails through shola forests, and panoramic views of the Western Ghats.",
    spots: [
      { name: "Tadiandamol Peak", detail: "1,748m — highest peak in Coorg with 360° views" },
      { name: "Nalaknad Palace", detail: "Ruined palace of Kodagu kings at the trek base" },
      { name: "Grassland Meadows", detail: "Rolling green meadows near the summit" },
      { name: "Bisle Viewpoint (nearby)", detail: "Confluence of three mountain ranges — 40 km away" }
    ],
    hotels: [
      { name: "Coorg Hotels", detail: "Madikeri options — ₹2,000/night" },
      { name: "Kakkabe Homestay", detail: "Near trek base — ₹1,200/night" },
      { name: "Trek Organizer Camp", detail: "Guided trek — ₹1,500/person" }
    ],
    stays: [
      { name: "Coffee Estate Stay", detail: "Plantation stay near Kakkabe" },
      { name: "Hilltop Camping", detail: "Camp at the grassland meadows" }
    ]
  },
  {
    id: 159,
    name: "Mullayanagiri",
    state: "Karnataka",
    emoji: "🏔️",
    category: "trekking",
    rideTypes: ["bike", "car"],
    description: "🟡 Highest peak in Karnataka at 1,930m — a scenic trek from Chikmagalur through coffee estates and shola grasslands to the Shiva temple at the summit.",
    spots: [
      { name: "Mullayanagiri Peak", detail: "1,930m — highest point in Karnataka with Shiva temple" },
      { name: "Baba Budangiri", detail: "Sacred peak with a Sufi dargah and Hindu cave — 10 km away" },
      { name: "Sarpadhari Trail", detail: "Serpentine trail through dense forest to the peak" },
      { name: "Manikyadhara Falls", detail: "Waterfall on the Baba Budangiri route" }
    ],
    hotels: [
      { name: "The Serai Chikmagalur", detail: "Luxury coffee estate — ₹12,000/night" },
      { name: "Hotel Mayura", detail: "Mid-range — ₹1,500/night" },
      { name: "Zostel Chikmagalur", detail: "Budget hostel — ₹500/night" }
    ],
    stays: [
      { name: "Coffee Plantation Stay", detail: "Wake up to coffee estates" },
      { name: "Hilltop Camping", detail: "Camp near the summit" }
    ]
  },
  {
    id: 160,
    name: "Ettina Bhuja",
    state: "Karnataka",
    emoji: "🐂",
    category: "trekking",
    rideTypes: ["bike", "car"],
    description: "🟡 The 'Ox's Shoulder' peak in Mudigere — a dramatic rocky pinnacle at 1,150m with stunning views of the Charmadi Ghats and surrounding valleys.",
    spots: [
      { name: "Ettina Bhuja Peak", detail: "Rocky pinnacle resembling an ox's shoulder — 1,150m" },
      { name: "Byrapura Base", detail: "Trek starts from this small village" },
      { name: "Grassland Plateau", detail: "Open meadows before the final rocky ascent" },
      { name: "Charmadi Ghat Views", detail: "Panoramic views of the winding ghat road" }
    ],
    hotels: [
      { name: "Mudigere Hotels", detail: "Nearby town — ₹1,200/night" },
      { name: "Chikmagalur Hotels", detail: "30 km away — ₹1,500/night" },
      { name: "Trek Camp", detail: "Guided trek with camping — ₹1,000/person" }
    ],
    stays: [
      { name: "Village Homestay Byrapura", detail: "Local home at the trek base" },
      { name: "Plantation Stay", detail: "Coffee estate near Mudigere" }
    ]
  },
  {
    id: 161,
    name: "Bandaje Falls Trek",
    state: "Karnataka",
    emoji: "💧",
    category: "trekking",
    rideTypes: ["bike", "car"],
    description: "🟡 Hidden waterfall trek near Charmadi — a scenic 6 km trail through dense forests to a stunning 200-ft waterfall surrounded by cliffs.",
    spots: [
      { name: "Bandaje Arbi Falls", detail: "200-ft waterfall hidden in a cliff amphitheatre" },
      { name: "Ballalarayana Durga Fort", detail: "Ruined fort on the ridge above the falls" },
      { name: "Forest Trail", detail: "6 km trail through dense Western Ghats forest" },
      { name: "Durgadahalli Base", detail: "Trek starting point village" }
    ],
    hotels: [
      { name: "Charmadi Hotels", detail: "Nearby ghat town — ₹1,000/night" },
      { name: "Mudigere Hotels", detail: "20 km away — ₹1,200/night" },
      { name: "Trek Camp", detail: "Guided trek — ₹800/person" }
    ],
    stays: [
      { name: "Forest Edge Homestay", detail: "Near the trek base" },
      { name: "Waterfall Camping", detail: "Camp near the falls (seasonal)" }
    ]
  },

  // 🔴 Tough Treks
  {
    id: 162,
    name: "Kumara Parvatha",
    state: "Karnataka",
    emoji: "🔥",
    category: "trekking",
    rideTypes: ["bike", "car"],
    description: "🔴 One of the toughest treks in Karnataka — 14 km gruelling trail from Kukke Subramanya to the 1,712m peak through dense forests and steep rocky sections.",
    spots: [
      { name: "Kumara Parvatha Peak", detail: "1,712m summit — one of Karnataka's toughest treks" },
      { name: "Shesha Parvatha", detail: "Intermediate peak with camping spot" },
      { name: "Bhattara Mane", detail: "Forest rest stop with basic shelter" },
      { name: "Pushpagiri Wildlife Sanctuary", detail: "Trek passes through this protected sanctuary" }
    ],
    hotels: [
      { name: "Kukke Subramanya Hotels", detail: "Temple town base — ₹800/night" },
      { name: "Forest Department Rest House", detail: "Basic — ₹400/night" },
      { name: "Trek Organizer Package", detail: "Guided 2-day trek — ₹2,500/person" }
    ],
    stays: [
      { name: "Shesha Parvatha Camping", detail: "Camp at the intermediate peak" },
      { name: "Temple Town Homestay", detail: "Stay at Subramanya before the trek" }
    ]
  },

  // --- Karnataka Hill Stations ---
  {
    id: 163,
    name: "Chikmagalur",
    state: "Karnataka",
    emoji: "☕",
    category: "hill-station",
    rideTypes: ["solo", "bike", "car"],
    description: "The Coffee Land of Karnataka — easy driving access to misty viewpoints, Hirekolale Lake, lush coffee estates, and the gateway to Mullayanagiri and Baba Budangiri.",
    spots: [
      { name: "Hirekolale Lake", detail: "Scenic lake surrounded by hills — perfect for evening walks" },
      { name: "Coffee Estates", detail: "Sprawling plantations — India's coffee story began here" },
      { name: "Baba Budangiri", detail: "Sacred peak with Sufi dargah and Hindu cave shrine" },
      { name: "Hebbe Falls", detail: "Two-tiered waterfall accessible via jeep from Kemmanagundi" }
    ],
    hotels: [
      { name: "The Serai Chikmagalur", detail: "Luxury coffee estate — ₹12,000/night" },
      { name: "Hotel Mayura", detail: "Mid-range — ₹1,500/night" },
      { name: "Zostel Chikmagalur", detail: "Budget hostel — ₹500/night" }
    ],
    stays: [
      { name: "Coffee Plantation Homestay", detail: "Wake up to coffee blossoms" },
      { name: "Hilltop Estate Bungalow", detail: "Colonial-era planter's bungalow" }
    ]
  },
  {
    id: 164,
    name: "Kemmanagundi",
    state: "Karnataka",
    emoji: "🌿",
    category: "hill-station",
    rideTypes: ["car"],
    description: "A serene, lush green hill station in the Baba Budan range — built as a summer retreat by the Mysore Maharaja, with Z-Point viewpoint and Hebbe Falls nearby.",
    spots: [
      { name: "Z-Point", detail: "Panoramic viewpoint overlooking the valley and Shola forests" },
      { name: "Raj Bhavan", detail: "Former summer palace of the Mysore Maharaja" },
      { name: "Hebbe Falls", detail: "Two-tiered 168m waterfall — jeep ride from Kemmanagundi" },
      { name: "Rose Garden", detail: "Terraced garden with hundreds of rose varieties" }
    ],
    hotels: [
      { name: "KSTDC Hotel Mayura", detail: "Government hilltop stay — ₹1,500/night" },
      { name: "Chikmagalur Hotels", detail: "30 km away — ₹2,000/night" },
      { name: "Local Guest House", detail: "Budget — ₹600/night" }
    ],
    stays: [
      { name: "Hilltop Homestay", detail: "Quiet stay amid the Baba Budan range" },
      { name: "Coffee Estate Stay", detail: "Plantation bungalow nearby" }
    ]
  },
  {
    id: 165,
    name: "Agumbe",
    state: "Karnataka",
    emoji: "🌧️",
    category: "hill-station",
    rideTypes: ["bike", "car"],
    description: "The Cherrapunji of the South — breathtaking sunset views from the famous viewpoint, rich rainforest scenery, and home to the King Cobra and the Agumbe Rainforest Research Station.",
    spots: [
      { name: "Agumbe Sunset Point", detail: "Famous viewpoint — one of the best sunsets in Karnataka" },
      { name: "Onake Abbi Falls", detail: "Tall waterfall deep inside the rainforest" },
      { name: "Agumbe Rainforest Research Station", detail: "King Cobra research centre by Romulus Whitaker" },
      { name: "Barkana Falls", detail: "One of the highest waterfalls in Karnataka — 259m" }
    ],
    hotels: [
      { name: "Doddamane Homestay", detail: "Heritage Malnad house — ₹1,500/night" },
      { name: "Kasturba Nagar Guest House", detail: "Basic — ₹800/night" },
      { name: "Sringeri Hotels", detail: "30 km away — ₹1,200/night" }
    ],
    stays: [
      { name: "Rainforest Homestay", detail: "Amid the dense Western Ghats forest" },
      { name: "Traditional Malnad Home", detail: "Heritage wooden house experience" }
    ]
  },
  {
    id: 166,
    name: "Himavad Gopalaswamy Betta",
    state: "Karnataka",
    emoji: "⛰️",
    category: "hill-station",
    rideTypes: ["car"],
    description: "A misty hill in Chamarajanagar district at 1,450m — features a Venugopalaswamy temple at the summit reachable by vehicle, surrounded by Bandipur forest and wildlife.",
    spots: [
      { name: "Venugopalaswamy Temple", detail: "Ancient hilltop temple often shrouded in mist" },
      { name: "Misty Summit Viewpoint", detail: "Panoramic views of Bandipur forest below" },
      { name: "Bandipur National Park", detail: "Tiger reserve at the base — safari available" },
      { name: "Gundlupet Town", detail: "Gateway town with local markets" }
    ],
    hotels: [
      { name: "Bandipur Safari Lodge", detail: "Jungle lodge — ₹5,000/night" },
      { name: "Gundlupet Hotels", detail: "Nearby town — ₹1,000/night" },
      { name: "Forest Department Guest House", detail: "Basic — ₹500/night" }
    ],
    stays: [
      { name: "Jungle Edge Homestay", detail: "Near Bandipur forest" },
      { name: "Farm Stay Gundlupet", detail: "Rural Chamarajanagar experience" }
    ]
  },
  {
    id: 167,
    name: "Jogimatti Forest",
    state: "Karnataka",
    emoji: "🌲",
    category: "hill-station",
    rideTypes: ["car"],
    description: "A tranquil, forested hill near Chitradurga — features a small zoo, nature trails, viewpoints, and a peaceful retreat away from the crowds.",
    spots: [
      { name: "Jogimatti Viewpoint", detail: "Panoramic views of Chitradurga and surrounding plains" },
      { name: "Jogimatti Zoo", detail: "Small zoo with native wildlife species" },
      { name: "Nature Trail", detail: "Forested walking trail through the hills" },
      { name: "Chitradurga Fort (nearby)", detail: "Massive stone fortress — 'Stone Fortress' of Nayakas" }
    ],
    hotels: [
      { name: "Chitradurga Hotels", detail: "Nearby city — ₹1,200/night" },
      { name: "KSTDC Hotel Mayura", detail: "Government stay — ₹1,000/night" },
      { name: "Local Lodge", detail: "Budget — ₹500/night" }
    ],
    stays: [
      { name: "Forest Guest House", detail: "Quiet stay inside the forest area" },
      { name: "Heritage Homestay", detail: "Near Chitradurga fort" }
    ]
  },
  {
    id: 168,
    name: "Male Mahadeshwara Betta (MM Hills)",
    state: "Karnataka",
    emoji: "🛕",
    category: "hill-station",
    rideTypes: ["solo", "car"],
    description: "A popular hilly pilgrimage site in Chamarajanagar — the Mahadeshwara temple sits atop the hill surrounded by dense forest, wildlife, and a peaceful, scenic environment.",
    spots: [
      { name: "Mahadeshwara Temple", detail: "Hilltop Shiva temple — major pilgrimage site" },
      { name: "MM Hills Wildlife Sanctuary", detail: "Dense forest with elephants, leopards, and bison" },
      { name: "Palar Dam", detail: "Scenic reservoir surrounded by forest" },
      { name: "Hanumanthapura", detail: "Ancient Hanuman temple in the forest" }
    ],
    hotels: [
      { name: "Temple Trust Guest House", detail: "Pilgrim accommodation — ₹400/night" },
      { name: "Forest Rest House", detail: "Basic forest stay — ₹600/night" },
      { name: "Kollegal Hotels", detail: "Nearby town — ₹1,000/night" }
    ],
    stays: [
      { name: "Forest Edge Homestay", detail: "Near the wildlife sanctuary" },
      { name: "Pilgrimage Homestay", detail: "Simple home near the temple" }
    ]
  },

  {
    id: 169,
    name: "Karwar",
    state: "Karnataka",
    emoji: "🏖️",
    category: "beach",
    rideTypes: ["bike", "car"],
    description: "Karnataka's northernmost coastal town — pristine beaches, water sports at Devbagh, and the serene Majali beach surrounded by lush green hills.",
    spots: [
      { name: "Devbagh Beach", detail: "Secluded island beach — water sports and dolphin spotting" },
      { name: "Majali Beach", detail: "Clean, uncrowded beach with lush green surroundings" },
      { name: "Karwar Beach", detail: "Main town beach with scenic views of the harbour" },
      { name: "Sadashivgad Fort", detail: "Hilltop fort with panoramic views of the Kali river and sea" }
    ],
    hotels: [
      { name: "Devbagh Beach Resort", detail: "Jungle Lodges — ₹6,000/night" },
      { name: "Sterling Karwar", detail: "Comfortable stay — ₹3,500/night" },
      { name: "Hotel Bhadra", detail: "Budget — ₹1,000/night" }
    ],
    stays: [
      { name: "Seaside Homestay Karwar", detail: "Local home near the beach" },
      { name: "Devbagh Island Stay", detail: "Eco-cottage on the island" }
    ]
  },
  {
    id: 170,
    name: "Kasarkod Beach",
    state: "Karnataka",
    emoji: "🏖️",
    category: "beach",
    rideTypes: ["bike", "car"],
    description: "India's first Blue Flag certified beach near Honnavar — pristine sands lined with casuarina trees along the Arabian Sea coast of Uttara Kannada.",
    spots: [
      { name: "Kasarkod Blue Flag Beach", detail: "Eco-certified pristine beach with clean sands" },
      { name: "Casuarina Forest Walk", detail: "Shaded walk through coastal casuarina groves" },
      { name: "Honnavar Town", detail: "Nearby coastal town with local seafood" },
      { name: "Apsarakonda Falls (nearby)", detail: "Scenic waterfall cascading into the sea — 15 km away" }
    ],
    hotels: [
      { name: "Honnavar Hotels", detail: "Nearby town — ₹1,200/night" },
      { name: "Beach View Lodge", detail: "Basic stay near the beach — ₹800/night" },
      { name: "KSTDC Guest House", detail: "Government stay — ₹1,000/night" }
    ],
    stays: [
      { name: "Coastal Homestay Honnavar", detail: "Local home with seafood meals" },
      { name: "Beach Cottage", detail: "Simple cottage near the shore" }
    ]
  },
  {
    id: 171,
    name: "Maravanthe Beach",
    state: "Karnataka",
    emoji: "🏖️",
    category: "beach",
    rideTypes: ["solo", "bike", "car"],
    description: "A unique scenic stretch where NH-66 runs between the Arabian Sea on one side and the Souparnika river on the other — one of India's most picturesque coastal drives.",
    spots: [
      { name: "Maravanthe Beach", detail: "Stunning beach alongside the highway — sea on one side, river on the other" },
      { name: "Scenic Highway Drive", detail: "Panoramic drive on NH-66 flanked by sea and river" },
      { name: "Trasi Beach", detail: "Quiet extension of Maravanthe with fewer crowds" },
      { name: "Kollur Mookambika (nearby)", detail: "Famous temple — 30 km inland" }
    ],
    hotels: [
      { name: "Hotel Kamat", detail: "Highway hotel — ₹1,500/night" },
      { name: "Maravanthe Beach Resort", detail: "Beachside — ₹2,500/night" },
      { name: "Budget Lodge Kundapura", detail: "Nearby town — ₹800/night" }
    ],
    stays: [
      { name: "Seaside Homestay", detail: "Local home right on the coast" },
      { name: "River View Cottage", detail: "Cottage overlooking the Souparnika river" }
    ]
  },

  // =============================================
  // MAHARASHTRA
  // =============================================
  {
    id: 46,
    name: "Lonavala",
    state: "Maharashtra",
    emoji: "⛰️",
    category: "hill-station",
    rideTypes: ["bike", "car"],
    description: "Popular hill station near Mumbai — waterfalls, forts, and chikki.",
    spots: [
      { name: "Tiger's Leap", detail: "Cliff viewpoint resembling a leaping tiger" },
      { name: "Bhushi Dam", detail: "Monsoon waterfall spot loved by locals" },
      { name: "Karla Caves", detail: "Ancient Buddhist rock-cut caves" },
      { name: "Rajmachi Fort", detail: "Trek to twin forts with valley views" }
    ],
    hotels: [
      { name: "Della Resorts", detail: "Adventure luxury — ₹10,000/night" },
      { name: "Fariyas Resort", detail: "Family-friendly — ₹5,000/night" },
      { name: "Backpacker Hostel", detail: "Budget — ₹500/night" }
    ],
    stays: [
      { name: "Valley View Villa", detail: "Private villa in the ghats" },
      { name: "Camping at Pawna Lake", detail: "Lakeside camping experience" }
    ]
  },
  {
    id: 47,
    name: "Mahabaleshwar",
    state: "Maharashtra",
    emoji: "🍓",
    category: "hill-station",
    rideTypes: ["car", "bike"],
    description: "Strawberry capital of India — viewpoints, ancient temples, and lush greenery.",
    spots: [
      { name: "Arthur's Seat", detail: "Queen of all viewpoints in Mahabaleshwar" },
      { name: "Venna Lake", detail: "Boating and horse riding by the lake" },
      { name: "Mapro Garden", detail: "Strawberry farm with tastings and shopping" },
      { name: "Pratapgad Fort", detail: "Historic Maratha fort with panoramic views" }
    ],
    hotels: [
      { name: "Le Meridien", detail: "Luxury hilltop — ₹9,000/night" },
      { name: "Hotel Brightland", detail: "Mid-range — ₹3,000/night" },
      { name: "YHA Hostel", detail: "Budget — ₹600/night" }
    ],
    stays: [
      { name: "Strawberry Farm Stay", detail: "Pick your own strawberries" },
      { name: "Forest Cottage", detail: "Secluded stay in the woods" }
    ]
  },
  {
    id: 48,
    name: "Alibaug",
    state: "Maharashtra",
    emoji: "⛵",
    category: "beach",
    rideTypes: ["solo", "bike", "car"],
    description: "Coastal getaway from Mumbai — beaches, forts, and seafood.",
    spots: [
      { name: "Alibaug Beach", detail: "Main beach with Kolaba Fort in the sea" },
      { name: "Kashid Beach", detail: "White sand beach, one of the cleanest" },
      { name: "Murud-Janjira Fort", detail: "Unconquered sea fort with rich history" },
      { name: "Kihim Beach", detail: "Quiet beach with butterfly diversity" }
    ],
    hotels: [
      { name: "Radisson Blu Alibaug", detail: "Beachside luxury — ₹8,000/night" },
      { name: "U Tropicana", detail: "Resort — ₹4,000/night" },
      { name: "Beach Hostel", detail: "Budget — ₹500/night" }
    ],
    stays: [
      { name: "Beachfront Villa", detail: "Private villa steps from the sea" },
      { name: "Fisherman's Homestay", detail: "Authentic coastal living" }
    ]
  },
  {
    id: 49,
    name: "Ajanta & Ellora",
    state: "Maharashtra",
    emoji: "🗿",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "UNESCO World Heritage caves — masterpieces of Buddhist, Hindu, and Jain art.",
    spots: [
      { name: "Ajanta Caves", detail: "30 rock-cut Buddhist caves with murals" },
      { name: "Ellora Caves", detail: "34 caves including the Kailasa Temple" },
      { name: "Bibi Ka Maqbara", detail: "Mini Taj Mahal of the Deccan" },
      { name: "Daulatabad Fort", detail: "Impregnable hilltop fortress" }
    ],
    hotels: [
      { name: "Vivanta Aurangabad", detail: "Premium — ₹6,000/night" },
      { name: "Lemon Tree", detail: "Mid-range — ₹3,000/night" },
      { name: "MTDC Resort", detail: "Government budget — ₹1,000/night" }
    ],
    stays: [
      { name: "Heritage Homestay", detail: "Traditional Marathwada home" },
      { name: "Farm Stay Aurangabad", detail: "Rural experience near the caves" }
    ]
  },
  {
    id: 50,
    name: "Harishchandragad",
    state: "Maharashtra",
    emoji: "🧗",
    category: "trekking",
    rideTypes: ["bike", "car"],
    description: "One of Maharashtra's toughest treks — the iconic Konkan Kada overhanging cliff.",
    spots: [
      { name: "Konkan Kada", detail: "Massive overhanging cliff with valley views" },
      { name: "Harishchandreshwar Temple", detail: "Ancient temple at the summit" },
      { name: "Kedareshwar Cave", detail: "Shiva lingam surrounded by water" },
      { name: "Saptatirtha Pushkarni", detail: "Sacred rock-cut water tank" }
    ],
    hotels: [
      { name: "Base Village Homestay", detail: "Stay at Khireshwar village — ₹800/night" },
      { name: "Trek Organizer Camp", detail: "Guided trek with camping — ₹1,500/person" },
      { name: "Malshej Ghat Resort", detail: "Nearby resort — ₹3,000/night" }
    ],
    stays: [
      { name: "Summit Camping", detail: "Camp at the top near the temple" },
      { name: "Village Homestay", detail: "Local tribal home at base" }
    ]
  },
  {
    id: 51,
    name: "Shirdi",
    state: "Maharashtra",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Holy town of Sai Baba — one of India's most visited pilgrimage destinations.",
    spots: [
      { name: "Sai Baba Temple", detail: "Main shrine with Sai Baba's samadhi" },
      { name: "Dwarkamai Mosque", detail: "Where Sai Baba lived and preached" },
      { name: "Chavadi", detail: "Sai Baba's alternate resting place" },
      { name: "Shani Shingnapur", detail: "Nearby temple of Lord Shani" }
    ],
    hotels: [
      { name: "Hotel Sai Sahavas", detail: "Near temple — ₹2,500/night" },
      { name: "Sai Neem Tree Hotel", detail: "Mid-range — ₹1,800/night" },
      { name: "Dharamshala", detail: "Budget pilgrim stay — ₹300/night" }
    ],
    stays: [
      { name: "Ashram Stay", detail: "Spiritual community living" },
      { name: "Local Homestay", detail: "Simple home near the temple" }
    ]
  },
  {
    id: 172,
    name: "Trimbakeshwar",
    state: "Maharashtra",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "One of the 12 Jyotirlingas near Nashik — the ancient Shiva temple sits near the origin of the Godavari River, surrounded by the Brahmagiri hills.",
    spots: [
      { name: "Trimbakeshwar Shiva Temple", detail: "Sacred Jyotirlinga temple with unique three-faced lingam" },
      { name: "Brahmagiri Hill", detail: "Origin of the Godavari River — short trek to the source" },
      { name: "Kushavarta Kund", detail: "Sacred water tank used for rituals" },
      { name: "Anjaneri Fort", detail: "Believed birthplace of Lord Hanuman — nearby trek" }
    ],
    hotels: [
      { name: "Hotel Shiva Heritage", detail: "Near temple — ₹2,000/night" },
      { name: "MTDC Resort Trimbak", detail: "Government stay — ₹1,500/night" },
      { name: "Dharamshala", detail: "Pilgrim budget — ₹400/night" }
    ],
    stays: [
      { name: "Trimbak Homestay", detail: "Local home near the temple town" },
      { name: "Ashram Stay", detail: "Spiritual stay near the Godavari" }
    ]
  },
  {
    id: 173,
    name: "Pandharpur",
    state: "Maharashtra",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "Heart of the Warkari movement — the Vitthal-Rukmini temple on the banks of the Bhima river draws millions of devotees, especially during the Ashadhi and Kartiki Ekadashi pilgrimages.",
    spots: [
      { name: "Vitthal Rukmini Temple", detail: "Main shrine of Lord Vitthal — centre of Warkari tradition" },
      { name: "Pundalik Temple", detail: "Dedicated to the devotee Pundalik on the riverbank" },
      { name: "Bhima River Ghat", detail: "Sacred bathing ghats along the river" },
      { name: "ISKCON Pandharpur", detail: "Modern Krishna temple with gardens" }
    ],
    hotels: [
      { name: "Hotel Vitthal Darshan", detail: "Near temple — ₹1,500/night" },
      { name: "Pandharpur Dharamshala", detail: "Pilgrim stay — ₹300/night" },
      { name: "Lodge Bhakti", detail: "Budget — ₹600/night" }
    ],
    stays: [
      { name: "Warkari Ashram", detail: "Community spiritual stay" },
      { name: "Riverside Homestay", detail: "Simple home near the Bhima ghats" }
    ]
  },
  {
    id: 174,
    name: "Bhimashankar",
    state: "Maharashtra",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["bike", "car"],
    description: "A Jyotirlinga temple nestled in the Sahyadri hills — surrounded by the Bhimashankar Wildlife Sanctuary, home to the Indian giant squirrel and lush Western Ghats forest.",
    spots: [
      { name: "Bhimashankar Temple", detail: "Ancient Jyotirlinga — one of 12 sacred Shiva shrines" },
      { name: "Bhimashankar Wildlife Sanctuary", detail: "Home to the Indian giant squirrel (Shekru)" },
      { name: "Gupt Bhimashankar", detail: "Hidden cave temple in the forest" },
      { name: "Hanuman Lake", detail: "Scenic lake near the temple" }
    ],
    hotels: [
      { name: "MTDC Resort Bhimashankar", detail: "Government stay — ₹1,500/night" },
      { name: "Temple Trust Rooms", detail: "Basic pilgrim stay — ₹500/night" },
      { name: "Forest Rest House", detail: "In the sanctuary — ₹800/night" }
    ],
    stays: [
      { name: "Village Homestay", detail: "Local home in the Sahyadri foothills" },
      { name: "Nature Camp", detail: "Eco-stay near the wildlife sanctuary" }
    ]
  },
  {
    id: 175,
    name: "Ashtavinayak Temples",
    state: "Maharashtra",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["car"],
    description: "A sacred circuit of eight Ganesha temples around Pune — Morgaon, Siddhatek, Pali, Mahad, Theur, Lenyadri, Ozar, and Ranjangaon, each with a unique idol and legend.",
    spots: [
      { name: "Morgaon (Mayureshwar)", detail: "First temple of the circuit — peacock-riding Ganesha" },
      { name: "Siddhatek (Siddhivinayak)", detail: "Self-manifested idol on the Bhima river" },
      { name: "Lenyadri (Girijatmaj)", detail: "Cave temple in Buddhist-era rock-cut caves" },
      { name: "Ozar (Vigneshwar)", detail: "Temple with a golden dome and fortified walls" }
    ],
    hotels: [
      { name: "Pune Hotels", detail: "Base city for the circuit — ₹2,000/night" },
      { name: "Temple Trust Dharamshalas", detail: "Available at each temple — ₹300/night" },
      { name: "Highway Lodges", detail: "En route between temples — ₹800/night" }
    ],
    stays: [
      { name: "Pune Homestay", detail: "Base in Pune for the circuit" },
      { name: "Rural Homestay", detail: "Village stays near individual temples" }
    ]
  },
  {
    id: 176,
    name: "Nashik-Panchavati",
    state: "Maharashtra",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "A sacred city on the Godavari — Panchavati is where Lord Rama spent his exile. Key sites include Ramkund, Kalaram Temple, and the Kumbh Mela ghats.",
    spots: [
      { name: "Ramkund", detail: "Sacred bathing ghat on the Godavari — Kumbh Mela site" },
      { name: "Kalaram Temple", detail: "Black stone Rama temple in Panchavati" },
      { name: "Sita Gufaa", detail: "Cave where Sita is believed to have been abducted" },
      { name: "Tapovan", detail: "Believed site of Lakshmana cutting Surpanakha's nose" }
    ],
    hotels: [
      { name: "Express Inn Nashik", detail: "Premium — ₹4,000/night" },
      { name: "Ginger Nashik", detail: "Mid-range — ₹2,500/night" },
      { name: "Panchavati Dharamshala", detail: "Pilgrim budget — ₹400/night" }
    ],
    stays: [
      { name: "Godavari View Homestay", detail: "Home near the river ghats" },
      { name: "Vineyard Stay", detail: "Wine country experience near Nashik" }
    ]
  },
  {
    id: 177,
    name: "Tuljapur Bhavani Temple",
    state: "Maharashtra",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "One of the three-and-a-half Shakti Peethas of Maharashtra — the Tulja Bhavani temple is the kuladevi of the Bhonsle dynasty and was worshipped by Chhatrapati Shivaji Maharaj.",
    spots: [
      { name: "Tulja Bhavani Temple", detail: "Main Shakti Peeth — self-manifested idol of the goddess" },
      { name: "Gomukh Tirtha", detail: "Sacred water spring near the temple" },
      { name: "Dharashiv Caves (nearby)", detail: "Ancient Jain rock-cut caves — 30 km away" },
      { name: "Mankeshwar Temple", detail: "Shiva temple near the main shrine" }
    ],
    hotels: [
      { name: "Temple Trust Guest House", detail: "Near temple — ₹500/night" },
      { name: "Hotel Bhavani", detail: "Mid-range — ₹1,200/night" },
      { name: "Dharamshala", detail: "Pilgrim budget — ₹300/night" }
    ],
    stays: [
      { name: "Tuljapur Homestay", detail: "Local home in the temple town" },
      { name: "Farm Stay Osmanabad", detail: "Rural Marathwada experience" }
    ]
  },
  {
    id: 178,
    name: "Jejuri Khandoba Temple",
    state: "Maharashtra",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "bike", "car"],
    description: "A hilltop temple dedicated to Lord Khandoba (Malhari Martand) near Pune — famous for the vibrant turmeric (bhandara) celebrations where devotees shower the temple in yellow.",
    spots: [
      { name: "Khandoba Temple", detail: "Hilltop shrine — famous for turmeric showers" },
      { name: "Temple Steps", detail: "300+ steps to the summit lined with shops" },
      { name: "Karha River", detail: "River at the base of the temple hill" },
      { name: "Bhandara Festival", detail: "Vibrant yellow turmeric celebration — Sundays and festivals" }
    ],
    hotels: [
      { name: "Jejuri Lodge", detail: "Basic near temple — ₹800/night" },
      { name: "Pune Hotels", detail: "50 km away — ₹2,000/night" },
      { name: "Dharamshala", detail: "Pilgrim stay — ₹300/night" }
    ],
    stays: [
      { name: "Village Homestay Jejuri", detail: "Local home near the temple" },
      { name: "Farm Stay", detail: "Rural experience near Pune" }
    ]
  },
  {
    id: 179,
    name: "Grishneshwar Temple",
    state: "Maharashtra",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["solo", "car"],
    description: "The last of the 12 Jyotirlingas — this ancient Shiva temple near Ellora features exquisite red stone carvings and is one of Maharashtra's most sacred shrines.",
    spots: [
      { name: "Grishneshwar Temple", detail: "12th Jyotirlinga — intricate red stone architecture" },
      { name: "Ellora Caves (adjacent)", detail: "UNESCO World Heritage rock-cut caves nearby" },
      { name: "Sunheri Mahal", detail: "Historic palace in nearby Aurangabad" },
      { name: "Khuldabad", detail: "Sacred town with Sufi shrines — 'Valley of Saints'" }
    ],
    hotels: [
      { name: "Aurangabad Hotels", detail: "Nearby city — ₹2,500/night" },
      { name: "MTDC Ellora", detail: "Government stay near caves — ₹1,500/night" },
      { name: "Dharamshala", detail: "Pilgrim budget — ₹400/night" }
    ],
    stays: [
      { name: "Heritage Homestay", detail: "Traditional Marathwada home" },
      { name: "Cave View Stay", detail: "Near Ellora caves" }
    ]
  },
  {
    id: 180,
    name: "Ganpatipule",
    state: "Maharashtra",
    emoji: "🙏",
    category: "devotional",
    rideTypes: ["bike", "car"],
    description: "A coastal temple town in Ratnagiri — the Swayambhu Ganesh temple faces the Arabian Sea, with a pristine beach and the scenic Konkan coastline all around.",
    spots: [
      { name: "Ganpatipule Temple", detail: "Self-manifested Ganesha idol facing the sea" },
      { name: "Ganpatipule Beach", detail: "Clean beach right next to the temple" },
      { name: "Prachin Konkan Museum", detail: "Open-air museum of Konkan life and culture" },
      { name: "Jaigad Fort (nearby)", detail: "Coastal fort with lighthouse — 25 km away" }
    ],
    hotels: [
      { name: "MTDC Resort Ganpatipule", detail: "Beachside government resort — ₹3,000/night" },
      { name: "Abhishek Beach Resort", detail: "Mid-range — ₹2,000/night" },
      { name: "Temple Trust Rooms", detail: "Pilgrim stay — ₹500/night" }
    ],
    stays: [
      { name: "Konkan Homestay", detail: "Traditional Konkani home with seafood meals" },
      { name: "Beach Cottage", detail: "Simple cottage near the shore" }
    ]
  }
];

// Derived data
const states = [...new Set(destinations.map(d => d.state))];
const categories = [
  { id: "devotional", label: "🙏 Devotional" },
  { id: "trekking", label: "🥾 Trekking" },
  { id: "hill-station", label: "🏔️ Hill Stations" },
  { id: "beach", label: "🏖️ Beaches" }
];

// Spot timing data — visiting hours for all spots
const spotTimings = {
  // TN Devotional
  "Meenakshi Amman Temple": "5:00 AM – 12:30 PM, 4:00 PM – 9:30 PM",
  "Thirumalai Nayakkar Palace": "9:00 AM – 5:00 PM",
  "Alagar Kovil": "6:00 AM – 12:30 PM, 4:00 PM – 8:00 PM",
  "Gandhi Memorial Museum": "10:00 AM – 5:45 PM (Closed Mon)",
  "Brihadeeswarar Temple": "6:00 AM – 12:30 PM, 4:00 PM – 8:30 PM",
  "Thanjavur Royal Palace": "9:00 AM – 6:00 PM",
  "Saraswathi Mahal Library": "10:00 AM – 5:30 PM (Closed Wed)",
  "Schwartz Church": "6:00 AM – 6:00 PM",
  "Airavatesvara Temple": "6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM",
  "Gangaikonda Cholapuram": "6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM",
  "Kumbakonam Temples": "6:00 AM – 12:00 PM, 4:00 PM – 8:30 PM",
  "Mahamaham Tank": "Open 24 hours",
  "Ramanathaswamy Temple": "5:00 AM – 1:00 PM, 3:00 PM – 9:00 PM",
  "Pamban Bridge": "Open 24 hours",
  "Dhanushkodi": "6:00 AM – 5:30 PM",
  "Gandhamadhana Parvatham": "7:00 AM – 5:00 PM",
  "Agni Theertham": "Open 24 hours",
  "Kumari Amman Temple": "4:30 AM – 12:15 PM, 4:00 PM – 8:15 PM",
  "Vivekananda Rock Memorial": "8:00 AM – 4:00 PM",
  "Thiruvalluvar Statue": "8:00 AM – 4:00 PM",
  "Suchindram Thanumalayan Temple": "6:00 AM – 12:00 PM, 4:30 PM – 8:30 PM",
  "Padmanabhapuram Palace": "9:00 AM – 4:30 PM (Closed Mon)",
  "Subrahmanya Swamy Temple": "5:30 AM – 12:30 PM, 4:00 PM – 9:00 PM",
  "Thiruchendur Beach": "Open 24 hours",
  "Manapad": "Open all day",
  "Kayalpattinam": "Open all day",
  "Arunachaleswarar Temple": "5:30 AM – 12:30 PM, 3:30 PM – 9:30 PM",
  "Girivalam Path": "Open 24 hours (Full moon nights popular)",
  "Sri Ramana Ashram": "6:00 AM – 8:00 PM",
  "Virupaksha Cave": "Sunrise – Sunset",
  "Karthigai Deepam Festival": "Nov/Dec annually",
  "Nataraja Temple": "6:00 AM – 12:00 PM, 4:00 PM – 9:00 PM",
  "Thillai Kali Amman Temple": "6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM",
  "Pichavaram Mangrove Forest": "9:00 AM – 5:00 PM",
  "Annamalai University": "Campus open all day",
  "Ranganathaswamy Temple": "6:00 AM – 1:00 PM, 3:15 PM – 9:00 PM",
  "Jambukeswarar Temple": "6:00 AM – 1:00 PM, 3:00 PM – 8:30 PM",
  "Rock Fort Temple": "6:00 AM – 8:00 PM",
  "Ucchi Pillayar Temple": "6:00 AM – 8:00 PM",
  "Kallanai Dam": "Open 24 hours",
  "Ekambareswarar Temple": "6:00 AM – 12:30 PM, 4:00 PM – 8:30 PM",
  "Kamakshi Amman Temple": "5:30 AM – 12:30 PM, 4:00 PM – 8:30 PM",
  "Kailasanathar Temple": "6:00 AM – 12:00 PM, 4:00 PM – 6:00 PM",
  "Varadharaja Perumal Temple": "6:00 AM – 12:00 PM, 4:00 PM – 8:30 PM",
  "Silk Weaving Centre": "9:00 AM – 6:00 PM",
  "Dhandayuthapani Temple": "6:00 AM – 8:00 PM",
  "Idumban Temple": "6:00 AM – 8:00 PM",
  "Palani Hills": "Open all day",
  "Thaipusam Festival": "Jan/Feb annually",
  "Kapaleeshwarar Temple": "5:30 AM – 12:00 PM, 4:00 PM – 9:00 PM",
  "San Thome Basilica": "6:00 AM – 8:00 PM",
  "Parthasarathy Temple": "6:00 AM – 12:00 PM, 4:00 PM – 9:00 PM",
  "Santhome Beach": "Open 24 hours",
  "Adi Kumbeswarar Temple": "6:00 AM – 12:30 PM, 4:00 PM – 8:30 PM",
  "Sarangapani Temple": "6:00 AM – 12:30 PM, 4:00 PM – 8:30 PM",
  "Navagraha Temples": "6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM",
  "Andal Temple": "6:00 AM – 12:30 PM, 4:00 PM – 8:30 PM",
  "Nachiyar Kovil": "6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM",
  "Srivilliputhur Megamalai Tiger Reserve": "6:00 AM – 6:00 PM (Permit required)",
  "Ayyanar Falls": "Best during monsoon",
  "Nellaiappar Temple": "5:30 AM – 12:30 PM, 4:00 PM – 9:00 PM",
  "Krishnapuram Palace": "9:00 AM – 5:00 PM",
  "Courtallam Falls": "6:00 AM – 6:00 PM",
  "Sikkal Singaravelan Temple": "6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM",
  "Triveni Sangamam": "Open 24 hours",

  // Velankanni
  "Velankanni Basilica": "5:30 AM – 9:00 PM",
  "Our Lady of Health Church": "6:00 AM – 8:00 PM",
  "Velankanni Beach": "Open 24 hours",
  "Nagapattinam Kayarohanaswami Temple": "6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM",

  // Bannari
  "Bannari Amman Temple": "6:00 AM – 12:30 PM, 4:00 PM – 8:30 PM",
  "Sathyamangalam Tiger Reserve": "6:00 AM – 6:00 PM (Permit required)",
  "Bhavanisagar Dam": "Open all day",
  "Kodiveri Falls": "8:00 AM – 5:30 PM",

  // Nagore
  "Nagore Dargah": "5:00 AM – 10:00 PM",
  "Nagore Beach": "Open 24 hours",
  "Nagapattinam Temples": "6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM",

  // Madurai addition
  "Vandiyur Mariamman Teppakulam": "6:00 AM – 8:00 PM",
  "Koodal Azhagar Temple": "6:00 AM – 12:30 PM, 4:00 PM – 8:30 PM",

  // Rameswaram addition
  "Uthirakosamangai Temple": "6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM",

  // Kanyakumari addition
  "Nagaraja Temple (Nagercoil)": "5:30 AM – 12:00 PM, 4:30 PM – 8:30 PM",

  // Palani addition
  "Lakshmi Narasimhar Temple": "6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM",

  // Chidambaram addition
  "Veerattaneswarar Temple (Panruti)": "6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM",

  // Kumbakonam addition
  "Nageswaran Temple": "6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM",

  // Tirunelveli addition
  "Papanasanathar Temple": "6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM",

  // Tiruvarur
  "Thyagaraja Temple": "6:00 AM – 12:30 PM, 4:00 PM – 9:00 PM",
  "Rajagopalaswamy Temple (Mannargudi)": "6:00 AM – 12:00 PM, 4:00 PM – 8:30 PM",
  "Kamalalayam Tank": "Open all day",
  "Tyagaraja Aradhana": "Jan annually",

  // Vellore
  "Sripuram Golden Temple": "8:00 AM – 8:00 PM",
  "Jalakandeswarar Temple": "6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM",
  "Vellore Fort": "9:00 AM – 6:00 PM",
  "Science Park": "10:00 AM – 5:30 PM",

  // Kodumudi
  "Magudeeswarar Temple": "6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM",
  "Kaveri River Ghat": "Open all day",
  "Bhavani Sangameshwarar Temple": "6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM",
  "Erode Market": "8:00 AM – 9:00 PM",

  // TN Hill Stations
  "Botanical Garden": "7:00 AM – 6:30 PM",
  "Doddabetta Peak": "7:00 AM – 6:00 PM",
  "Nilgiri Mountain Railway": "First train 7:10 AM (Check schedule)",
  "Ooty Lake": "8:00 AM – 6:00 PM",
  "Tea Museum": "9:00 AM – 4:00 PM (Closed Mon)",
  "Kalhatty Ghats": "Open 24 hours (Caution: steep, restricted for heavy vehicles)",
  "Kodai Lake": "6:00 AM – 5:30 PM (Boating 8 AM–5 PM)",
  "Coaker's Walk": "7:00 AM – 7:00 PM",
  "Pillar Rocks": "9:00 AM – 4:00 PM",
  "Dolphin's Nose": "7:00 AM – 5:00 PM",
  "Bryant Park": "9:00 AM – 6:00 PM",
  "Sim's Park": "7:00 AM – 6:30 PM",
  "Dolphin's Nose Viewpoint": "7:00 AM – 6:00 PM",
  "Lamb's Rock": "9:00 AM – 5:30 PM",
  "Highfield Tea Factory": "8:00 AM – 5:00 PM",
  "Hidden Valley": "Sunrise – Sunset",
  "Yercaud Lake": "6:00 AM – 6:00 PM",
  "Shevaroy Temple": "6:00 AM – 6:00 PM",
  "Lady's Seat": "8:00 AM – 5:30 PM",
  "Kiliyur Falls": "8:00 AM – 5:00 PM",
  "Pagoda Point": "8:00 AM – 5:30 PM",
  "Sholayar Dam": "9:00 AM – 5:00 PM",
  "Monkey Falls": "8:00 AM – 5:00 PM",
  "Nallamudi Viewpoint": "6:00 AM – 6:00 PM",
  "Grass Hills": "6:00 AM – 6:00 PM",
  "Catherine Falls": "Viewpoint open all day",
  "Kodanad Viewpoint": "6:00 AM – 6:00 PM",
  "Longwood Shola": "7:00 AM – 5:00 PM (Permit required)",
  "Rangaswamy Peak": "6:00 AM – 5:00 PM",
  "Sirumalai Lake": "8:00 AM – 5:00 PM",
  "Observation Tower": "9:00 AM – 5:00 PM",
  "Banana Plantations": "Open all day",
  "Vainu Bappu Observatory": "By appointment (Fri evenings for public)",
  "Beemanmadavu Falls": "Best during monsoon",
  "Kavalur Village": "Open all day",
  "Amirthi Zoological Park": "10:00 AM – 5:30 PM (Closed Tue)",
  "Manjolai Tea Estates": "Permit required — 6:00 AM – 5:00 PM",
  "Upper Kodaiyar Dam": "9:00 AM – 5:00 PM",
  "KMTR Forest Trails": "6:00 AM – 5:00 PM (Permit required)",
  "Manimuthar Falls": "8:00 AM – 5:30 PM",

  // Kolli Hills
  "70 Hairpin Bends": "Open 24 hours (Best: early morning)",
  "Agaya Gangai Waterfalls": "7:00 AM – 5:00 PM",
  "Arapaleeswarar Temple": "6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM",
  "Siddhar Caves": "Open all day",
  "Balaji Temple": "6:00 AM – 7:00 PM",

  // TN Trekking
  "Swamimalai Summit": "6:00 AM – 5:00 PM (Book at trektamilnadu.com)",
  "Forest Trail (6 km)": "6:00 AM – 5:00 PM",
  "Yelagiri Lake": "8:00 AM – 6:00 PM",
  "Jalagamparai Waterfall": "8:00 AM – 5:00 PM (Seasonal)",
  "Gudiyam Caves": "9:00 AM – 5:00 PM",
  "Heritage Nature Trail (9 km)": "7:00 AM – 5:00 PM",
  "Tiruvallur Temple": "6:00 AM – 8:00 PM",
  "Pulicat Lake": "Open all day",
  "Longwood Shola Forest": "7:00 AM – 5:00 PM (Book at trektamilnadu.com)",
  "Birdwatching Trail (3 km)": "6:00 AM – 10:00 AM (Best hours)",
  "Cairn Hill Cypress Plantation": "7:00 AM – 5:00 PM",
  "Forest Walk": "7:00 AM – 5:00 PM",
  "Gene Pool Conservation Park": "8:00 AM – 5:00 PM",
  "Nature Education Trail (8 km)": "8:00 AM – 4:00 PM",
  "Mudumalai Tiger Reserve": "6:00 AM – 6:00 PM",
  "Pykara Falls": "9:00 AM – 5:00 PM",
  "Baraliyar River Trail (4 km)": "7:00 AM – 4:00 PM",
  "Cool Streams": "Open during trek hours",
  "Anamalai Foothills": "6:00 AM – 6:00 PM",
  "Topslip": "6:00 AM – 6:00 PM",
  "Pandaravarai Trail": "6:00 AM – 4:00 PM (Book at trektamilnadu.com)",
  "Hornbill Spotting": "6:00 AM – 9:00 AM (Best hours)",
  "Malabar Giant Squirrel": "Early morning best",
  "Elephant Sightings": "Dawn and dusk best",
  "Kolukkumalai Tea Estate": "4:00 AM – 10:00 AM (Sunrise trek)",
  "Sunrise Point": "5:00 AM – 7:00 AM",
  "Jeep Trail": "4:00 AM – 6:00 PM",
  "Tea Factory Visit": "8:00 AM – 5:00 PM",
  "Fruit Forest Trail": "7:00 AM – 4:00 PM",
  "Eastern Ghats Viewpoint": "Sunrise – Sunset",
  "Sundara Mahalingam Temple": "6:00 AM – 6:00 PM",
  "Medicinal Herb Forest": "6:00 AM – 5:00 PM",
  "Rugged Rock Formations": "During trek hours",
  "Panoramic Summit Views": "During trek hours",
  "Ancient Rock Paintings": "8:00 AM – 4:00 PM",
  "Porivarai Trail (6 km)": "7:00 AM – 4:00 PM",
  "Nilgiri Biosphere Views": "During trek hours",
  "Wildlife Sightings": "Dawn and dusk best",
  "Injikadavu Trail (18 km)": "6:00 AM – 5:00 PM (Book at trektamilnadu.com)",
  "River Crossings": "During trek hours",
  "Riverine Ecosystem": "During trek hours",
  "KMTR Wildlife": "Dawn and dusk best",
  "Seven Hills Climb (12 km)": "2:00 AM start (Night trek tradition)",
  "Shiva Temple at Summit": "Open during trek season",
  "Grassland Plateau": "During trek hours",
  "Isha Yoga Center": "6:00 AM – 8:00 PM",
  "Kumbakarai Falls Start": "6:00 AM – 5:00 PM",
  "Vellagavi Village": "Accessible only by trek",
  "Dense Forest Descent": "Start by 5:00 AM",
  "Kodaikanal Connection": "Trail ends by evening",
  "Parsons Valley Reservoir": "Permit required — 6:00 AM",
  "Shola Grassland Trail (20 km)": "Start by 5:00 AM",
  "Wild Stream Crossings": "During trek hours",
  "Mukurthi Hut": "Overnight stay with permit",
  "Avalanche Lake": "9:00 AM – 5:00 PM",
  "Kolaribetta Peak (18 km)": "Start by 5:00 AM",
  "Deer at Avalanche Dam": "Dawn best",
  "Shola Forest Trail": "During trek hours",
  "Needle Rock Summit": "6:00 AM – 5:00 PM",
  "Steep Forest Ascent": "Start by 6:00 AM",
  "Mudumalai Plains View": "During trek hours",
  "Bandipur Forest View": "During trek hours",
  "Guthirayan Summit (11 km)": "Start by 5:00 AM",
  "Cauvery Valley Views": "During trek hours",
  "Dense Forest Trail": "Start by 5:00 AM",
  "Melagiri Range": "During trek hours",
  "Gundur Trail": "Start by 6:00 AM",
  "Shevaroy Hills Views": "During trek hours",
  "Dense Scrub Forest": "During trek hours",
  "Salem Plains View": "During trek hours",
  "Karikayur Trail (8 km)": "Start by 6:00 AM",
  "Tribal Sacred Site": "Respect local customs",
  "Panoramic Nilgiri Views": "During trek hours",
  "Sathuragiri Hills": "6:00 AM – 5:00 PM",

  // TN Beaches
  "Promenade Beach": "Open 24 hours",
  "Auroville": "Matrimandir: 9:30 AM – 4:00 PM (Closed Sun)",
  "French Quarter": "Open all day (Cafes 8 AM – 10 PM)",
  "Paradise Beach": "9:00 AM – 5:30 PM (Boat timings)",
  "Serenity Beach": "Open 24 hours",
  "Shore Temple": "6:00 AM – 6:00 PM",
  "Pancha Rathas": "6:00 AM – 6:00 PM",
  "Arjuna's Penance": "6:00 AM – 6:00 PM",
  "Tiger Cave": "6:00 AM – 6:00 PM",
  "Mahabalipuram Beach": "Open 24 hours",
  "Marina Beach": "Open 24 hours (Best: 5 AM – 9 AM, 4 PM – 8 PM)",
  "Covelong Point Surf School": "6:00 AM – 6:00 PM",
  "Elliot's Beach": "Open 24 hours",
  "Dakshinachitra": "10:00 AM – 6:00 PM (Closed Tue)",

  // Silver Beach (Cuddalore)
  "Silver Beach": "Open 24 hours",
  "Fort St. David": "Open all day (ruins)",
  "Devanampattinam Beach": "Open 24 hours",

  // Kodikkarai (Point Calimere)
  "Point Calimere Wildlife Sanctuary": "6:00 AM – 6:00 PM",
  "Kodikkarai Beach": "Open 24 hours",
  "Flamingo Point": "6:00 AM – 6:00 PM (Best: Nov–Feb dawn)",
  "Kodikkarai Lighthouse": "3:00 PM – 5:00 PM",

  // Muttom Beach
  "Muttom Beach": "Open 24 hours",
  "Muttom Lighthouse": "3:00 PM – 5:00 PM",
  "Sanguthurai Beach": "Open 24 hours",
  "Thengapattinam Beach": "Open 24 hours",

  // Kerala
  "Eravikulam National Park": "7:30 AM – 4:00 PM (Closed Feb–Mar)",
  "Mattupetty Dam": "9:00 AM – 5:00 PM",
  "Top Station": "6:00 AM – 6:00 PM",
  "Alleppey Backwaters": "Houseboats: Check-in 12 PM",
  "Alappuzha Beach": "Open 24 hours",
  "Kumarakom Bird Sanctuary": "6:00 AM – 6:00 PM",
  "Marari Beach": "Open 24 hours",
  "Edakkal Caves": "9:30 AM – 4:30 PM",
  "Banasura Sagar Dam": "9:00 AM – 5:00 PM",
  "Chembra Peak": "7:00 AM – 2:00 PM (Entry closes)",
  "Wayanad Wildlife Sanctuary": "7:00 AM – 5:00 PM",
  "Lighthouse Beach": "Open 24 hours (Lighthouse: 3 PM – 5 PM)",
  "Hawa Beach": "Open 24 hours",
  "Vellayani Lake": "Open all day",
  "Sabarimala Temple": "Open during Mandala-Makaravilakku season",
  "Pamba River": "Open 24 hours",
  "Erumely": "Open all day",
  "Periyar Tiger Reserve": "7:00 AM – 5:00 PM",

  // Karnataka
  "Abbey Falls": "9:00 AM – 5:00 PM",
  "Raja's Seat": "5:30 AM – 7:30 PM",
  "Dubare Elephant Camp": "9:00 AM – 11:00 AM, 4:30 PM – 5:30 PM",
  "Talacauvery": "6:00 AM – 6:00 PM",
  "Virupaksha Temple": "6:00 AM – 6:00 PM",
  "Vittala Temple": "8:30 AM – 5:00 PM",
  "Matanga Hill": "Sunrise – Sunset",
  "Hippie Island": "Open all day",
  "Mysore Palace": "10:00 AM – 5:30 PM",
  "Chamundi Hills": "7:30 AM – 2:00 PM, 3:30 PM – 6:00 PM, 7:30 PM – 9:00 PM",
  "Brindavan Gardens": "6:00 AM – 8:00 PM (Fountain: 6:30 PM – 8:30 PM)",
  "St. Philomena's Church": "5:00 AM – 6:00 PM",
  "Om Beach": "Open 24 hours",
  "Kudle Beach": "Open 24 hours",
  "Half Moon Beach": "Open 24 hours",
  "Mahabaleshwar Temple": "6:00 AM – 8:00 PM",
  "Kudremukh Peak Trek": "6:00 AM – 5:00 PM (Permit required)",
  "Hanuman Gundi Falls": "8:00 AM – 5:00 PM",
  "Kudremukh National Park": "6:00 AM – 6:00 PM",
  "Lakya Dam": "Open all day",

  // Maharashtra
  "Tiger's Leap": "8:00 AM – 6:00 PM",
  "Bhushi Dam": "Open 24 hours (Best in monsoon)",
  "Karla Caves": "9:00 AM – 5:00 PM",
  "Rajmachi Fort": "Open all day (Trek anytime)",
  "Arthur's Seat": "8:00 AM – 6:00 PM",
  "Venna Lake": "8:00 AM – 6:00 PM",
  "Mapro Garden": "8:00 AM – 9:00 PM",
  "Pratapgad Fort": "9:00 AM – 5:00 PM",
  "Alibaug Beach": "Open 24 hours",
  "Kashid Beach": "Open 24 hours",
  "Murud-Janjira Fort": "7:00 AM – 6:00 PM",
  "Kihim Beach": "Open 24 hours",
  "Ajanta Caves": "9:00 AM – 5:00 PM (Closed Mon)",
  "Ellora Caves": "6:00 AM – 6:00 PM (Closed Tue)",
  "Bibi Ka Maqbara": "8:00 AM – 8:00 PM",
  "Daulatabad Fort": "9:00 AM – 6:00 PM",
  "Konkan Kada": "Open all day (Trek anytime)",
  "Harishchandreshwar Temple": "Open all day",
  "Kedareshwar Cave": "Open all day",
  "Saptatirtha Pushkarni": "Open all day",
  "Sai Baba Temple": "4:00 AM – 10:15 PM",
  "Dwarkamai Mosque": "5:00 AM – 10:00 PM",
  "Chavadi": "5:00 AM – 10:00 PM",
  "Shani Shingnapur": "5:00 AM – 10:00 PM"
};

// Apply timings to all destination spots
for (const dest of destinations) {
  for (const spot of dest.spots) {
    if (spotTimings[spot.name]) {
      spot.timing = spotTimings[spot.name];
    }
  }
}

// Best time to visit
const bestTimeToVisit = {
  "devotional": "Oct – Mar (pleasant weather for temple visits)",
  "trekking": "Jun – Sep (monsoon greenery) & Oct – Jan (clear skies). Closed mid-Feb to mid-Apr.",
  "hill-station": "Apr – Jun (summer escape) & Sep – Nov (post-monsoon clarity)",
  "beach": "Oct – Feb (calm seas, cool breeze)"
};

// Seasonal months — which months each category is best [1=Jan..12=Dec]
const seasonalMonths = {
  "devotional": [10, 11, 12, 1, 2, 3],
  "trekking": [6, 7, 8, 9, 10, 11, 12, 1],
  "hill-station": [4, 5, 6, 9, 10, 11],
  "beach": [10, 11, 12, 1, 2]
};

// Coordinates for map display [lat, lng]
const destinationCoords = {
  // TN Devotional
  "Madurai": [9.9195, 78.1193],
  "Thanjavur": [10.7870, 79.1378],
  "Darasuram": [10.9480, 79.3530],
  "Rameswaram": [9.2876, 79.3129],
  "Kanyakumari": [8.0883, 77.5385],
  "Thiruchendur": [8.4942, 78.1190],
  "Tiruvannamalai": [12.2253, 79.0747],
  "Chidambaram": [11.3992, 79.6946],
  "Srirangam (Trichy)": [10.8627, 78.6874],
  "Kanchipuram": [12.8342, 79.7036],
  "Palani": [10.4390, 77.5204],
  "Chennai (Mylapore)": [13.0339, 80.2707],
  "Kumbakonam": [10.9617, 79.3881],
  "Srivilliputhur": [9.5120, 77.6340],
  "Tirunelveli": [8.7139, 77.7567],
  "Velankanni": [10.6832, 79.8449],
  "Bannari (Erode)": [11.6020, 77.0050],
  "Nagore": [10.8240, 79.8430],
  "Tiruvarur": [10.7725, 79.6345],
  "Vellore": [12.9165, 79.1325],
  "Kodumudi (Erode)": [11.0770, 77.8870],

  // TN Hill Stations
  "Ooty": [11.4102, 76.6950],
  "Kodaikanal": [10.2381, 77.4892],
  "Coonoor": [11.3530, 76.7959],
  "Yercaud": [11.7750, 78.2050],
  "Valparai": [10.3270, 76.9550],
  "Kotagiri": [11.4220, 76.8610],
  "Sirumalai": [10.2170, 77.9830],
  "Javadi Hills": [12.3500, 78.8500],
  "Manjolai": [8.7500, 77.3500],
  "Kolli Hills": [11.2500, 78.3500],
  "Swamimalai (Yelagiri)": [12.5820, 78.6360],

  // TN Trekking
  "Gudiyam Caves (Tiruvallur)": [13.1200, 79.8400],
  "Longwood Shola (Kotagiri)": [11.4300, 76.8600],
  "Cairn Hill (Ooty)": [11.4100, 76.7100],
  "Gene Pool (Gudalur)": [11.5000, 76.5000],
  "Baraliyar (Coimbatore)": [10.4500, 76.8500],
  "Topslip - Pandaravarai (Pollachi)": [10.4900, 76.8300],
  "Kolukkumalai Sunrise (Theni)": [10.0700, 77.2500],
  "Jalagamparai (Tirupattur)": [12.4700, 78.5700],
  "Sathuragiri Hills (Virudhunagar)": [9.6500, 77.8500],
  "Karikayur to Porivarai (Nilgiris)": [11.3800, 76.7300],
  "Injikadavu (Tirunelveli)": [8.7000, 77.3000],
  "Velliangiri Hills (Coimbatore)": [11.0100, 76.8200],
  "Kodaikanal to Vellagavi (Dindigul)": [10.2200, 77.4600],
  "Parsons Valley to Mukurthi (Nilgiris)": [11.3900, 76.5400],
  "Avalanche - Kolaribetta (Nilgiris)": [11.3700, 76.6000],
  "Needle Rock / Oosi Malai (Gudalur)": [11.5100, 76.5100],
  "Guthirayan Peak (Krishnagiri)": [12.2500, 78.1500],
  "Kondappanaikanpatti (Salem)": [11.7500, 78.3000],
  "Karikayur to Rangaswamy Peak (Nilgiris)": [11.4200, 76.7800],

  // TN Beaches
  "Pondicherry": [11.9416, 79.8083],
  "Mahabalipuram": [12.6172, 80.1927],
  "Marina & Covelong": [12.9500, 80.2707],
  "Silver Beach (Cuddalore)": [11.7480, 79.7680],
  "Kodikkarai (Point Calimere)": [10.2930, 79.8580],
  "Muttom Beach": [8.1350, 77.3280],

  // Kerala
  "Munnar": [10.0889, 77.0595],
  "Alleppey": [9.4981, 76.3388],
  "Wayanad": [11.6854, 76.1320],
  "Kovalam": [8.3988, 76.9782],
  "Sabarimala": [9.4361, 77.0811],
  "Sree Padmanabhaswamy Temple": [8.4826, 76.9437],
  "Attukal Bhagavathy Temple": [8.4780, 76.9520],
  "Thrikkakkara Vamana Moorthy Temple": [10.0261, 76.3125],
  "Sree Poornathrayeesa Temple": [9.9508, 76.3485],
  "Mannarasala Sree Nagaraja Temple": [9.2833, 76.4667],
  "Aranmula Parthasarathy Temple": [9.3167, 76.6833],
  "Guruvayur Sree Krishna Temple": [10.5942, 76.0410],
  "Sri Kadampuzha Bhagavathy Temple": [10.8833, 76.0667],
  "Sree Vallabha Temple": [9.3833, 76.5750],
  "Thirunelli Sree Maha Vishnu Temple": [11.9100, 75.9983],
  "Vaikom Mahadeva Temple": [9.7500, 76.3917],
  "Panniyoor Varaha Moorthy Temple": [10.7833, 76.2167],
  "Kodungallur Sree Kurumba Bhagavathi Temple": [10.2260, 76.1940],
  "Chengannur Mahadevar Temple": [9.3167, 76.6167],
  "Sree Parthasarathi Temple, Guruvayur": [10.5900, 76.0450],
  "Ambalappuzha Sree Krishna Swamy Temple": [9.3833, 76.3500],
  "Sree Thirumandhamkunnu Bhagavathi Temple": [10.9667, 76.2167],
  "Lokanarkavu Temple": [11.5950, 75.5600],
  "Thiruvanchikulam Mahadeva Temple": [10.2300, 76.2000],
  "Kaviyoor Mahadeva Temple": [9.4000, 76.5833],
  "Sree Maha Ganapathi Temple, Kottarakkara": [9.0083, 76.7750],
  "Ettumanoor Shri Mahadeva Temple": [9.6700, 76.5600],
  "Sree Vadakkumnathan Temple": [10.5276, 76.2144],

  // Kerala Trekking
  "Eravikulam & Chokramudi Trek": [10.1833, 77.0667],
  "Illikkal Kallu & Ilaveezhapoonchira": [9.8167, 76.8333],
  "Vagamon & Thangalpara Trek": [9.6861, 76.9056],
  "Rhodo Valley & Meesapulimala": [10.1000, 77.1500],
  "Periyar National Park": [9.4667, 77.1667],
  "Neyyar & Shoolam Falls Trek": [8.5500, 77.0833],
  "Kattadikadavu & Urulikuzhi Falls": [9.5000, 77.1000],
  "Shendurney & Thenmala Trek": [8.9600, 77.0600],
  "Chimmini & Silent Valley Trek": [11.0833, 76.4333],
  "Vayalada & Kurangani Hills": [11.4167, 75.9500],

  // Kerala Hill Stations
  "Munnar Echo Point & Kottappara": [10.0667, 77.0600],
  "Top Station & Uluppuni": [10.1250, 77.2417],
  "Pettimudi & Kottapara Hilltop": [10.0700, 77.0500],
  "Nelliyampathy & Meenampara": [10.5333, 76.6833],
  "Palakkayam Thattu & Lakkidi": [11.5167, 75.9833],
  "Panchalimedu & Kailasappara": [9.7500, 76.9500],
  "Vagamon Hills & Kolahalamedu": [9.6861, 76.9056],
  "Ilaveezhapoonchira Top Station": [9.8333, 76.8000],
  "Meesapulimala & Devikulam": [10.1000, 77.1500],
  "Kochareekkal Caves & Piravom": [9.8700, 76.5000],

  // Kerala Beaches
  "Alleppey Beach & Pier": [9.4900, 76.3267],
  "Muzhappilangad Drive-In Beach": [11.8167, 75.3833],
  "Marari & Puthenthodu Beach": [9.5833, 76.2833],
  "Cherai & Kuzhuppilly Beach": [10.1333, 76.1667],
  "Bekal Fort Beach": [12.3917, 75.0333],
  "Edava Beach & Varkala": [8.7333, 76.7167],
  "Beypore & Kappil Beach": [11.1667, 75.8000],
  "Elamkunnapuzha & Nattika Beach": [10.3333, 76.1833],
  "Vadanappally & Swapnatheeram": [10.3667, 76.1667],
  "Kodungallur Azhikode Beach": [10.2333, 76.1667],

  // Karnataka
  "Coorg": [12.3375, 75.8069],
  "Hampi": [15.3350, 76.4600],
  "Mysore": [12.2958, 76.6394],
  "Gokarna": [14.5479, 74.3188],
  "Kudremukh": [13.1753, 75.2544],
  "Udupi": [13.3409, 74.7421],
  "Murudeshwar": [14.0944, 74.4844],
  "Gokarna (Devotional)": [14.5479, 74.3188],
  "Kukke Subramanya": [12.6750, 75.6200],
  "Dharmasthala": [12.9625, 75.3725],
  "Kollur Mookambika": [13.8600, 74.8100],
  "Sringeri": [13.4183, 75.2525],
  "Horanadu": [13.3833, 75.4167],
  "Hampi (Devotional)": [15.3350, 76.4600],
  "Shravanabelagola": [12.8586, 76.4861],
  "Nanjangud": [12.1167, 76.6833],
  "Srirangapatna": [12.4181, 76.6947],
  "Kotilingeshwara": [13.0833, 78.1333],
  "Nandi Hills": [13.3702, 77.6835],
  "Skandagiri": [13.3617, 77.6892],
  "Savandurga": [12.9192, 77.2917],
  "Kodachadri": [13.8583, 74.8694],
  "Tadiandamol": [12.2500, 75.7333],
  "Mullayanagiri": [13.3917, 75.7167],
  "Ettina Bhuja": [13.1667, 75.5833],
  "Bandaje Falls Trek": [13.1000, 75.5500],
  "Kumara Parvatha": [12.6500, 75.6000],
  "Chikmagalur": [13.3161, 75.7720],
  "Kemmanagundi": [13.5333, 75.7500],
  "Agumbe": [13.5028, 75.0931],
  "Himavad Gopalaswamy Betta": [11.9667, 76.6833],
  "Jogimatti Forest": [14.2333, 76.3833],
  "Male Mahadeshwara Betta (MM Hills)": [12.0000, 77.1167],
  "Karwar": [14.8025, 74.1240],
  "Kasarkod Beach": [14.2833, 74.4500],
  "Maravanthe Beach": [13.7500, 74.5833],

  // Maharashtra
  "Lonavala": [18.7546, 73.4062],
  "Mahabaleshwar": [17.9307, 73.6477],
  "Alibaug": [18.6414, 72.8722],
  "Ajanta & Ellora": [20.5519, 75.7033],
  "Harishchandragad": [19.3900, 73.7700],
  "Shirdi": [19.7668, 74.4773],
  "Trimbakeshwar": [19.9322, 73.5311],
  "Pandharpur": [17.6783, 75.3267],
  "Bhimashankar": [19.0719, 73.5353],
  "Ashtavinayak Temples": [18.2700, 74.3200],
  "Nashik-Panchavati": [20.0063, 73.7900],
  "Tuljapur Bhavani Temple": [18.0100, 76.0700],
  "Jejuri Khandoba Temple": [18.2750, 74.1600],
  "Grishneshwar Temple": [20.0258, 75.1792],
  "Ganpatipule": [17.1450, 73.2667]
};

// Spot coordinates for map markers [lat, lng]
const spotCoords = {
  "Abbey Falls": [12.456, 75.718],
  "Adi Kumbeswarar Temple": [10.9697, 79.3904],
  "Agaya Gangai Falls": [10.207, 77.9866],
  "Agaya Gangai Waterfalls": [11.2700, 78.3300],
  "70 Hairpin Bends": [11.2500, 78.3500],
  "Arapaleeswarar Temple": [11.2550, 78.3450],
  "Siddhar Caves": [11.2600, 78.3400],
  "Agni Theertham": [9.288, 79.318],
  "Airavatesvara Temple": [10.948, 79.353],
  "Airavatesvara Temple (Darasuram)": [10.9666, 79.3782],
  "Ajanta Caves": [20.5519, 75.7033],
  "Alagar Kovil": [10.053, 78.096],
  "Alappuzha Beach": [9.4987, 76.349],
  "Alibaug Beach": [18.6495, 72.8747],
  "Alleppey Backwaters": [9.4981, 76.3388],
  "Amirthi Zoological Park": [12.4645, 78.5624],
  "Anamalai Foothills": [10.4417, 76.8542],
  "Ancient Rock Paintings": [11.3916, 76.7329],
  "Andal Temple": [9.512, 77.634],
  "Annamalai University": [11.3918, 79.6873],
  "Arjuna's Penance": [12.619, 80.195],
  "Arthur's Seat": [17.95, 73.63],
  "Arunachaleswarar Temple": [12.231, 79.068],
  "Auroville": [12.007, 79.81],
  "Avalanche Lake": [11.38, 76.6027],
  "Ayyanar Falls": [9.5066, 77.6266],
  "Banana Plantations": [10.2113, 77.9748],
  "Banasura Sagar Dam": [11.6859, 76.1436],
  "Bandipur Forest View": [11.5048, 76.5024],
  "Baraliyar River Trail (4 km)": [10.4586, 76.8523],
  "Beemanmadavu Falls": [12.3505, 78.8618],
  "Bhushi Dam": [18.75, 73.4],
  "Bannari Amman Temple": [11.6020, 77.0050],
  "Bhavanisagar Dam": [11.5070, 77.0680],
  "Bhavani Sangameshwarar Temple": [11.4430, 77.6840],
  "Bibi Ka Maqbara": [20.5435, 75.7072],
  "Birdwatching Trail (3 km)": [11.4305, 76.8702],
  "Botanical Garden": [11.414, 76.696],
  "Brihadeeswarar Temple": [10.7828, 79.1318],
  "Brindavan Gardens": [12.2851, 76.6435],
  "Bryant Park": [10.234, 77.487],
  "Cairn Hill Cypress Plantation": [11.4198, 76.7128],
  "Catherine Falls": [11.4239, 76.8531],
  "Cauvery Valley Views": [12.2504, 78.1588],
  "Chamundi Hills": [12.272, 76.67],
  "Chavadi": [19.7566, 74.4806],
  "Chembra Peak": [11.675, 76.1361],
  "Coaker's Walk": [10.231, 77.492],
  "Cool Streams": [10.4504, 76.8605],
  "Courtallam Falls": [8.931, 77.278],
  "Covelong Point Surf School": [12.9505, 80.2798],
  "Dakshinachitra": [12.9557, 80.2631],
  "Daulatabad Fort": [20.5469, 75.6942],
  "Deer at Avalanche Dam": [11.3606, 76.6042],
  "Dense Forest Descent": [10.2107, 77.4641],
  "Dense Forest Trail": [12.2415, 78.1542],
  "Dense Scrub Forest": [11.7402, 78.3043],
  "Dhandayuthapani Temple": [10.439, 77.5204],
  "Dhanushkodi": [9.172, 79.427],
  "Doddabetta Peak": [11.402, 76.735],
  "Dolphin's Nose": [10.2309, 77.4806],
  "Dolphin's Nose Viewpoint": [11.3535, 76.804],
  "Dubare Elephant Camp": [12.3288, 75.8111],
  "Dwarkamai Mosque": [19.7673, 74.4887],
  "Eastern Ghats Viewpoint": [12.4593, 78.5732],
  "Edakkal Caves": [11.62, 76.22],
  "Ekambareswarar Temple": [12.847, 79.7],
  "Elephant Sightings": [10.4838, 76.8213],
  "Elliot's Beach": [12.9425, 80.2747],
  "Ellora Caves": [20.0268, 75.179],
  "Eravikulam National Park": [10.0995, 77.0621],
  "Erumely": [9.4254, 77.0854],
  "Forest Trail (6 km)": [12.5824, 78.6453],
  "Forest Walk": [11.4105, 76.7192],
  "French Quarter": [11.9331, 79.812],
  "Fruit Forest Trail": [12.4705, 78.5793],
  "Gandhamadhana Parvatham": [9.2803, 79.3064],
  "Gandhi Memorial Museum": [9.917, 78.116],
  "Gangaikonda Cholapuram": [11.206, 79.449],
  "Gene Pool Conservation Park": [11.5116, 76.5027],
  "Erode Market": [11.3410, 77.7172],
  "Girivalam Path": [12.23, 79.07],
  "Grass Hills": [10.3217, 76.9486],
  "Grassland Plateau": [11.002, 76.8233],
  "Gudiyam Caves": [13.1289, 79.8421],
  "Gundur Trail": [11.7592, 78.3022],
  "Guthirayan Summit (11 km)": [12.2616, 78.1531],
  "Half Moon Beach": [14.5375, 74.322],
  "Hanuman Gundi Falls": [13.1758, 75.2658],
  "Harishchandreshwar Temple": [19.3905, 73.7809],
  "Hawa Beach": [8.3994, 76.9897],
  "Heritage Nature Trail (9 km)": [13.1206, 79.8518],
  "Hidden Valley": [11.3593, 76.7881],
  "Highfield Tea Factory": [11.3474, 76.7868],
  "Hippie Island": [15.328, 76.4534],
  "Hornbill Spotting": [10.4905, 76.8385],
  "Idumban Temple": [10.4395, 77.5306],
  "Injikadavu Trail (18 km)": [8.7093, 77.3021],
  "Isha Yoga Center": [11.0025, 76.812],
  "Jalagamparai Waterfall": [12.4815, 78.5722],
  "Jambukeswarar Temple": [10.856, 78.704],
  "Jalakandeswarar Temple": [12.9165, 79.1325],
  "Jeep Trail": [10.0609, 77.2535],
  "KMTR Forest Trails": [8.7403, 77.3531],
  "KMTR Wildlife": [8.6938, 77.2925],
  "Kailasanathar Temple": [12.85, 79.698],
  "Kallanai Dam": [10.8689, 78.6787],
  "Kamakshi Amman Temple": [12.842, 79.705],
  "Kamalalayam Tank": [10.7725, 79.6345],
  "Kalhatty Ghats": [11.4500, 76.7200],
  "Kaveri River Ghat": [11.0770, 77.8870],
  "Kapaleeshwarar Temple": [13.0339, 80.2707],
  "Karikayur Trail (8 km)": [11.4206, 76.7917],
  "Karla Caves": [18.7435, 73.4098],
  "Karthigai Deepam Festival": [12.2314, 79.0656],
  "Kashid Beach": [18.642, 72.8814],
  "Kavalur Village": [12.3393, 78.8532],
  "Kayalpattinam": [8.4886, 78.111],
  "Kedareshwar Cave": [19.3798, 73.7738],
  "Kihim Beach": [18.6354, 72.8642],
  "Kiliyur Falls": [11.7693, 78.198],
  "Kodai Lake": [10.235, 77.489],
  "Kodaikanal Connection": [10.2146, 77.4508],
  "Kodanad Viewpoint": [11.4215, 76.8641],
  "Kodiveri Falls": [11.5500, 77.1600],
  "Koodal Azhagar Temple": [9.9200, 78.1190],
  "Kolaribetta Peak (18 km)": [11.3705, 76.6103],
  "Kolukkumalai Tea Estate": [10.0808, 77.2523],
  "Konkan Kada": [19.39, 73.77],
  "Krishnapuram Palace": [8.7145, 77.7672],
  "Kudle Beach": [14.5484, 74.328],
  "Kudremukh National Park": [13.1642, 75.2577],
  "Kudremukh Peak Trek": [13.1831, 75.2567],
  "Kumarakom Bird Sanctuary": [9.4875, 76.3425],
  "Kumari Amman Temple": [8.0883, 77.5385],
  "Kumbakarai Falls Start": [10.2298, 77.4628],
  "Kumbakonam Temples": [10.9395, 79.3562],
  "Lady's Seat": [11.7641, 78.2085],
  "Lakya Dam": [13.1687, 75.2469],
  "Lamb's Rock": [11.3444, 76.7992],
  "Lakshmi Narasimhar Temple": [10.4500, 77.5100],
  "Lighthouse Beach": [8.4075, 76.9804],
  "Longwood Shola": [11.4143, 76.8644],
  "Longwood Shola Forest": [11.4407, 76.8622],
  "Mahabaleshwar Temple": [17.925, 73.66],
  "Mahabalipuram Beach": [12.6234, 80.1857],
  "Mahamaham Tank": [10.9557, 79.3812],
  "Malabar Giant Squirrel": [10.479, 76.8337],
  "Manapad": [8.4843, 78.1226],
  "Magudeeswarar Temple": [11.0770, 77.8870],
  "Manimuthar Falls": [8.743, 77.3421],
  "Manjolai Tea Estates": [8.7613, 77.353],
  "Mapro Garden": [17.9196, 73.6508],
  "Marari Beach": [9.4927, 76.3322],
  "Marina Beach": [13.05, 80.282],
  "Matanga Hill": [15.3245, 76.4632],
  "Mattupetty Dam": [10.0894, 77.0675],
  "Medicinal Herb Forest": [9.6505, 77.8617],
  "Meenakshi Amman Temple": [9.9195, 78.1193],
  "Melagiri Range": [12.2427, 78.141],
  "Monkey Falls": [10.3275, 76.9639],
  "Mudumalai Plains View": [11.5014, 76.5139],
  "Mudumalai Tiger Reserve": [11.4921, 76.5032],
  "Mukurthi Hut": [11.3827, 76.533],
  "Murud-Janjira Fort": [18.6317, 72.8758],
  "Mysore Palace": [12.3052, 76.6552],
  "Nachiyar Kovil": [9.5126, 77.6444],
  "Nallamudi Viewpoint": [10.3158, 76.9586],
  "Nataraja Temple": [11.3992, 79.6946],
  "Nature Education Trail (8 km)": [11.5005, 76.5101],
  "Navagraha Temples": [10.9519, 79.3915],
  "Nagore Dargah": [10.8240, 79.8430],
  "Nagore Beach": [10.8260, 79.8500],
  "Nagapattinam Temples": [10.7672, 79.8449],
  "Nagapattinam Kayarohanaswami Temple": [10.7672, 79.8449],
  "Nagaraja Temple (Nagercoil)": [8.1833, 77.4119],
  "Nageswaran Temple": [10.9610, 79.3890],
  "Needle Rock Summit": [11.5186, 76.5125],
  "Nellaiappar Temple": [8.7139, 77.7567],
  "Nilgiri Biosphere Views": [11.3694, 76.7331],
  "Nilgiri Mountain Railway": [11.41, 76.695],
  "Observation Tower": [10.2174, 77.9939],
  "Om Beach": [14.53, 74.31],
  "Ooty Lake": [11.406, 76.689],
  "Our Lady of Health Church": [10.6835, 79.8445],
  "Padmanabhapuram Palace": [8.246, 77.326],
  "Pagoda Point": [11.7806, 78.1974],
  "Palani Hills": [10.4284, 77.5242],
  "Pamba River": [9.4366, 77.0928],
  "Pamban Bridge": [9.279, 79.211],
  "Papanasanathar Temple": [8.6500, 77.3700],
  "Pancha Rathas": [12.615, 80.192],
  "Pandaravarai Trail": [10.4986, 76.8328],
  "Panoramic Nilgiri Views": [11.4147, 76.7721],
  "Panoramic Summit Views": [9.6436, 77.8436],
  "Paradise Beach": [11.9348, 79.8014],
  "Parsons Valley Reservoir": [11.398, 76.5423],
  "Parthasarathy Temple": [13.0238, 80.2736],
  "Periyar Tiger Reserve": [9.429, 77.0721],
  "Pichavaram Mangrove Forest": [11.417, 79.777],
  "Pillar Rocks": [10.21, 77.47],
  "Porivarai Trail (6 km)": [11.3806, 76.7417],
  "Pratapgad Fort": [17.9232, 73.6407],
  "Promenade Beach": [11.934, 79.836],
  "Pulicat Lake": [13.1148, 79.8314],
  "Pykara Falls": [11.4941, 76.492],
  "Raja's Seat": [12.3379, 75.8178],
  "Rajmachi Fort": [18.7472, 73.3996],
  "Ramanathaswamy Temple": [9.288, 79.317],
  "Rajagopalaswamy Temple (Mannargudi)": [10.6630, 79.4500],
  "Ranganathaswamy Temple": [10.8627, 78.6874],
  "Rangaswamy Peak": [11.4309, 76.7824],
  "River Crossings": [8.7005, 77.3119],
  "Riverine Ecosystem": [8.6915, 77.304],
  "Rock Fort Temple": [10.858, 78.687],
  "Rugged Rock Formations": [9.6409, 77.8541],
  "Sabarimala Temple": [9.4361, 77.0811],
  "Sai Baba Temple": [19.7771, 74.4797],
  "Salem Plains View": [11.7433, 78.2938],
  "San Thome Basilica": [13.034, 80.278],
  "Santhome Beach": [13.0283, 80.2636],
  "Saptatirtha Pushkarni": [19.384, 73.7636],
  "Sarangapani Temple": [10.9621, 79.3972],
  "Sathyamangalam Tiger Reserve": [11.5200, 77.0200],
  "Saraswathi Mahal Library": [10.7855, 79.1335],
  "Schwartz Church": [10.7804, 79.1315],
  "Serenity Beach": [11.9473, 79.8007],
  "Seven Hills Climb (12 km)": [11.0214, 76.8231],
  "Shani Shingnapur": [19.761, 74.4698],
  "Shevaroy Hills Views": [11.7506, 78.3108],
  "Shevaroy Temple": [11.7756, 78.2146],
  "Shiva Temple at Summit": [11.0105, 76.8309],
  "Shola Forest Trail": [11.3645, 76.5916],
  "Shola Grassland Trail (20 km)": [11.3905, 76.5507],
  "Sholayar Dam": [10.337, 76.958],
  "Shore Temple": [12.6172, 80.1927],
  "Sikkal Singaravelan Temple": [8.7075, 77.7484],
  "Silk Weaving Centre": [12.8397, 79.6936],
  "Sim's Park": [11.353, 76.7959],
  "Sirumalai Lake": [10.2285, 77.986],
  "Sri Ramana Ashram": [12.228, 79.064],
  "Sripuram Golden Temple": [12.8950, 79.1450],
  "Srivilliputhur Megamalai Tiger Reserve": [9.5039, 77.6379],
  "St. Philomena's Church": [12.2902, 76.6306],
  "Steep Forest Ascent": [11.5106, 76.5192],
  "Subrahmanya Swamy Temple": [8.5028, 78.1216],
  "Suchindram Thanumalayan Temple": [8.0822, 77.5322],
  "Sundara Mahalingam Temple": [9.6594, 77.8524],
  "Sunrise Point": [10.0704, 77.2597],
  "Swamimalai Summit": [12.5927, 78.6386],
  "Talacauvery": [12.3304, 75.798],
  "Tea Factory Visit": [10.0631, 77.2417],
  "Tea Museum": [11.408, 76.692],
  "Thaipusam Festival": [10.4318, 77.5124],
  "Thanjavur Royal Palace": [10.786, 79.134],
  "Thillai Kali Amman Temple": [11.3997, 79.7032],
  "Thyagaraja Temple": [10.7725, 79.6345],
  "Tyagaraja Aradhana": [10.7725, 79.6345],
  "Thiruchendur Beach": [8.4946, 78.1278],
  "Thirumalai Nayakkar Palace": [9.921, 78.121],
  "Thiruvalluvar Statue": [8.078, 77.553],
  "Tiger Cave": [12.6109, 80.1837],
  "Tiger's Leap": [18.74, 73.41],
  "Tiruvallur Temple": [13.1122, 79.8436],
  "Top Station": [10.0812, 77.0636],
  "Topslip": [10.4428, 76.8436],
  "Tribal Sacred Site": [11.412, 76.783],
  "Ucchi Pillayar Temple": [10.8574, 78.6809],
  "Upper Kodaiyar Dam": [8.7505, 77.3605],
  "Uthirakosamangai Temple": [9.3500, 78.9000],
  "Vainu Bappu Observatory": [12.3582, 78.8525],
  "Varadharaja Perumal Temple": [12.8271, 79.6951],
  "Vandiyur Mariamman Teppakulam": [9.9150, 78.1350],
  "Velankanni Basilica": [10.6832, 79.8449],
  "Velankanni Beach": [10.6850, 79.8500],
  "Veerattaneswarar Temple (Panruti)": [11.7450, 79.5670],
  "Vellore Fort": [12.9165, 79.1325],
  "Vellagavi Village": [10.2204, 77.4703],
  "Vellayani Lake": [8.3898, 76.982],
  "Venna Lake": [17.93, 73.65],
  "Virupaksha Cave": [12.2182, 79.0685],
  "Virupaksha Temple": [15.335, 76.46],
  "Vittala Temple": [15.335, 76.47],
  "Vivekananda Rock Memorial": [8.0775, 77.5525],
  "Wayanad Wildlife Sanctuary": [11.6781, 76.1251],
  "Wild Stream Crossings": [11.3817, 76.543],
  "Wildlife Sightings": [11.3737, 76.7231],
  "Yelagiri Lake": [12.5745, 78.6402],
  "Yercaud Lake": [11.775, 78.205],

  // Beach spots — Silver Beach, Kodikkarai, Muttom
  "Silver Beach": [11.7480, 79.7680],
  "Pichavaram Mangroves": [11.4170, 79.7770],
  "Fort St. David": [11.7350, 79.7620],
  "Devanampattinam Beach": [11.7550, 79.7750],
  "Point Calimere Wildlife Sanctuary": [10.2930, 79.8580],
  "Kodikkarai Beach": [10.2900, 79.8600],
  "Flamingo Point": [10.2950, 79.8550],
  "Kodikkarai Lighthouse": [10.2920, 79.8590],
  "Muttom Beach": [8.1350, 77.3280],
  "Muttom Lighthouse": [8.1340, 77.3260],
  "Sanguthurai Beach": [8.1800, 77.2500],
  "Thengapattinam Beach": [8.1600, 77.2100]
};

// Verified Wikimedia Commons images (CC licensed)
// Attribution: Images from Wikimedia Commons contributors, licensed under CC BY-SA
const destinationImages = {
  // TN Devotional
  "Madurai": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Madurai_meenakshi_temple.jpg/600px-Madurai_meenakshi_temple.jpg",
  "Thanjavur": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Brihadeeswara.jpg/600px-Brihadeeswara.jpg",
  "Darasuram": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Darasuram%2C_Airavatesvara_Temple%2C_Dravidian_architecture%2C_India.jpg/600px-Darasuram%2C_Airavatesvara_Temple%2C_Dravidian_architecture%2C_India.jpg",
  "Rameswaram": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Ramanathaswamy_Temple_night_view.jpg/600px-Ramanathaswamy_Temple_night_view.jpg",
  "Kanyakumari": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Vivekananda_Rock_Memorial%2C_Kanyakumari%2C_India_2.jpg/600px-Vivekananda_Rock_Memorial%2C_Kanyakumari%2C_India_2.jpg",
  "Thiruchendur": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Thiruchendur_Temple_Rajagopuram.JPG/600px-Thiruchendur_Temple_Rajagopuram.JPG",
  "Tiruvannamalai": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Tiruvannamalai_arunachaleswarar_kovil.jpg/600px-Tiruvannamalai_arunachaleswarar_kovil.jpg",
  "Chidambaram": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Nataraja_Temple_gopuram_artwork_in_Chidambaram%2C_Tamil_Nadu.jpg/600px-Nataraja_Temple_gopuram_artwork_in_Chidambaram%2C_Tamil_Nadu.jpg",
  "Srirangam (Trichy)": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Ranganathaswamy_Temple%2C_Srirangam_%2849998238482%29.jpg/600px-Ranganathaswamy_Temple%2C_Srirangam_%2849998238482%29.jpg",
  "Kanchipuram": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Ekambareswarar_Temple_at_night_in_Kanchipuram_01.jpg/600px-Ekambareswarar_Temple_at_night_in_Kanchipuram_01.jpg",
  "Palani": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Arulmigu_Dhandayuthapani_Swamy_Temple_in_Palany_hill.jpg/600px-Arulmigu_Dhandayuthapani_Swamy_Temple_in_Palany_hill.jpg",
  "Chennai (Mylapore)": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Kapaleeshwarar_Temple%2C_Mylapore%2C_Chennai%2C_India.jpg/600px-Kapaleeshwarar_Temple%2C_Mylapore%2C_Chennai%2C_India.jpg",
  "Kumbakonam": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Kumbakonam_Mahamaham_Tank.jpg",
  "Srivilliputhur": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Srivilliputhur_Andal_temple_%2832%29.jpg/600px-Srivilliputhur_Andal_temple_%2832%29.jpg",
  "Tirunelveli": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Nellaiappar_Temple_%2848410%29.jpg/600px-Nellaiappar_Temple_%2848410%29.jpg",
  "Velankanni": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Velankanni_Church-1.jpg/600px-Velankanni_Church-1.jpg",
  "Bannari (Erode)": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Bannari_Amman_Temple.JPG/600px-Bannari_Amman_Temple.JPG",
  "Nagore": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Nagore_Dargah3.JPG/600px-Nagore_Dargah3.JPG",
  "Tiruvarur": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Thear_2.jpg/600px-Thear_2.jpg",
  "Vellore": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Sripuram_Temple_Full_View.jpg/600px-Sripuram_Temple_Full_View.jpg",
  "Kodumudi (Erode)": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Kodumudi_%2812%29.jpg/600px-Kodumudi_%2812%29.jpg",

  // TN Hill Stations
  "Ooty": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Fields_Hazy_Mountains_Marlimund_Ooty_Nilgiris_Aug25_A7CR_07258.jpg/600px-Fields_Hazy_Mountains_Marlimund_Ooty_Nilgiris_Aug25_A7CR_07258.jpg",
  "Kodaikanal": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Kodaikanal_Lake_2.jpg/600px-Kodaikanal_Lake_2.jpg",
  "Coonoor": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gandhipuram_Tea_Estate_Coonoor_Nilgiris_Jun25_A7CR_05879.jpg/600px-Gandhipuram_Tea_Estate_Coonoor_Nilgiris_Jun25_A7CR_05879.jpg",
  "Yercaud": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Yercaud_Hills_at_Salem_in_Tamilnadu.jpg/600px-Yercaud_Hills_at_Salem_in_Tamilnadu.jpg",
  "Valparai": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Anamalai_tiger_reserve%2C_Valparai_-_panoramio.jpg/600px-Anamalai_tiger_reserve%2C_Valparai_-_panoramio.jpg",
  "Kotagiri": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Misty_hills_kotagiri_ooty_tamilnadu_-_panoramio.jpg/600px-Misty_hills_kotagiri_ooty_tamilnadu_-_panoramio.jpg",
  "Sirumalai": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Sirumalai_Hills.jpg/600px-Sirumalai_Hills.jpg",
  "Javadi Hills": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Javadi_Hills.jpg/600px-Javadi_Hills.jpg",
  "Manjolai": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Manjolai_Tea_estate.jpg/600px-Manjolai_Tea_estate.jpg",
  "Kolli Hills": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/KolliHills_Valley.JPG/600px-KolliHills_Valley.JPG",
  "Swamimalai (Yelagiri)": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Yelagiri_Hills.jpg/600px-Yelagiri_Hills.jpg",

  // TN Trekking — Easy
  "Gudiyam Caves (Tiruvallur)": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Gudiyam_Cave.jpg/600px-Gudiyam_Cave.jpg",
  "Longwood Shola (Kotagiri)": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Longwood_Shola_Reserve_Forest%2C_Kotagiri%2C_Tamil_Nadu.jpg/600px-Longwood_Shola_Reserve_Forest%2C_Kotagiri%2C_Tamil_Nadu.jpg",
  "Cairn Hill (Ooty)": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Fields_Hazy_Mountains_Marlimund_Ooty_Nilgiris_Aug25_A7CR_07258.jpg/600px-Fields_Hazy_Mountains_Marlimund_Ooty_Nilgiris_Aug25_A7CR_07258.jpg",
  "Gene Pool (Gudalur)": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Western_Ghats%2C_Masinagudi%2C_Nilgiris.jpg/600px-Western_Ghats%2C_Masinagudi%2C_Nilgiris.jpg",
  "Baraliyar (Coimbatore)": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Anamalai_tiger_reserve%2C_Valparai_-_panoramio.jpg/600px-Anamalai_tiger_reserve%2C_Valparai_-_panoramio.jpg",
  "Topslip - Pandaravarai (Pollachi)": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Topslip%2C_Anamalai_Tiger_Reserve_-_panoramio.jpg/600px-Topslip%2C_Anamalai_Tiger_Reserve_-_panoramio.jpg",

  // TN Trekking — Moderate
  "Kolukkumalai Sunrise (Theni)": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Kolukkumalai_Tea_Estate.JPG/600px-Kolukkumalai_Tea_Estate.JPG",
  "Jalagamparai (Tirupattur)": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Jalagamparai_Falls_%283976643944%29.jpg/600px-Jalagamparai_Falls_%283976643944%29.jpg",
  "Sathuragiri Hills (Virudhunagar)": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Sathuragiri_Sundara_Mahalingam_Temple_%2855544%29.jpg/600px-Sathuragiri_Sundara_Mahalingam_Temple_%2855544%29.jpg",
  "Karikayur to Porivarai (Nilgiris)": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Misty_hills_kotagiri_ooty_tamilnadu_-_panoramio.jpg/600px-Misty_hills_kotagiri_ooty_tamilnadu_-_panoramio.jpg",
  "Injikadavu (Tirunelveli)": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Manjolai_Tea_estate.jpg/600px-Manjolai_Tea_estate.jpg",
  "Velliangiri Hills (Coimbatore)": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Temple_after_the_first_hill_at_Vellingiri.JPG/600px-Temple_after_the_first_hill_at_Vellingiri.JPG",
  "Kodaikanal to Vellagavi (Dindigul)": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/View_from_Vellagavi_Village.jpg/600px-View_from_Vellagavi_Village.jpg",

  // TN Trekking — Tough
  "Parsons Valley to Mukurthi (Nilgiris)": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Mukurthi_Peak_Nilgiris_India_Jan18_D72_5120.jpg/600px-Mukurthi_Peak_Nilgiris_India_Jan18_D72_5120.jpg",
  "Avalanche - Kolaribetta (Nilgiris)": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Avalanche_Lake_2.jpg/600px-Avalanche_Lake_2.jpg",
  "Needle Rock / Oosi Malai (Gudalur)": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Gudalur_Needle_Rock_Valley_View_Nilgiris_Aug25_A7CR_07358.jpg/600px-Gudalur_Needle_Rock_Valley_View_Nilgiris_Aug25_A7CR_07358.jpg",
  "Guthirayan Peak (Krishnagiri)": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Krishnagiri_Fort%2C_Gingee%2C_Viluppuram%2C_Tamil_Nadu%2C_India_%282018%29.jpg/600px-Krishnagiri_Fort%2C_Gingee%2C_Viluppuram%2C_Tamil_Nadu%2C_India_%282018%29.jpg",
  "Kondappanaikanpatti (Salem)": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Palamalai_hills_in_kolathur.jpg/600px-Palamalai_hills_in_kolathur.jpg",
  "Karikayur to Rangaswamy Peak (Nilgiris)": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Rangasamy_Peak_seen_from_Kodanad.jpg/600px-Rangasamy_Peak_seen_from_Kodanad.jpg",

  // TN Beaches
  "Pondicherry": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Pondicherry-French_Quarter-WUS02277.jpg/600px-Pondicherry-French_Quarter-WUS02277.jpg",
  "Mahabalipuram": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Mamallapuram%2C_Shore_Temple%2C_India.jpg/600px-Mamallapuram%2C_Shore_Temple%2C_India.jpg",
  "Marina & Covelong": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Marina_Beach_in_Chennai.jpg/600px-Marina_Beach_in_Chennai.jpg",
  "Silver Beach (Cuddalore)": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Silver_beach_at_Cuddalore.jpg/600px-Silver_beach_at_Cuddalore.jpg",
  "Kodikkarai (Point Calimere)": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Point_Calimere_Wildlife_and_Bird_Sanctuary_IMG_1757.jpg/600px-Point_Calimere_Wildlife_and_Bird_Sanctuary_IMG_1757.jpg",
  "Muttom Beach": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Muttom_Tamil_Nadu.JPG/600px-Muttom_Tamil_Nadu.JPG",

  // Kerala
  "Munnar": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Tea_estate_from_munnar.jpg/600px-Tea_estate_from_munnar.jpg",
  "Alleppey": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Sunset_at_Alleppey_backwaters.3.jpg/600px-Sunset_at_Alleppey_backwaters.3.jpg",
  "Wayanad": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Edakkal_Caves_-_Interior.jpg/600px-Edakkal_Caves_-_Interior.jpg",
  "Kovalam": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Kovalam_beach_trivandrum_kerala.jpg/600px-Kovalam_beach_trivandrum_kerala.jpg",
  "Sabarimala": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Sabarimala_5.jpg/600px-Sabarimala_5.jpg",
  "Sree Padmanabhaswamy Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Sree_Padmanabhaswamy_Temple.jpg/400px-Sree_Padmanabhaswamy_Temple.jpg",
  "Attukal Bhagavathy Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Attukal_temple.jpg/400px-Attukal_temple.jpg",
  "Thrikkakkara Vamana Moorthy Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Thrikkakara_Temple.jpg/400px-Thrikkakara_Temple.jpg",
  "Sree Poornathrayeesa Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Sree_Poornathrayeesa_Temple.jpg/400px-Sree_Poornathrayeesa_Temple.jpg",
  "Mannarasala Sree Nagaraja Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Mannarasala_Temple.jpg/400px-Mannarasala_Temple.jpg",
  "Aranmula Parthasarathy Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Aranmula_Parthasarathy_Temple.jpg/400px-Aranmula_Parthasarathy_Temple.jpg",
  "Guruvayur Sree Krishna Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Guruvayoor_Temple_1.jpg/400px-Guruvayoor_Temple_1.jpg",
  "Sri Kadampuzha Bhagavathy Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Kadampuzha_temple.jpg/400px-Kadampuzha_temple.jpg",
  "Sree Vallabha Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Sree_Vallabha_Temple_Thiruvalla.jpg/400px-Sree_Vallabha_Temple_Thiruvalla.jpg",
  "Thirunelli Sree Maha Vishnu Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Thirunelli_Temple.jpg/400px-Thirunelli_Temple.jpg",
  "Vaikom Mahadeva Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Vaikom_Mahadeva_Temple.jpg/400px-Vaikom_Mahadeva_Temple.jpg",
  "Panniyoor Varaha Moorthy Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Guruvayoor_Temple_1.jpg/400px-Guruvayoor_Temple_1.jpg",
  "Kodungallur Sree Kurumba Bhagavathi Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Kodungallur_Temple.jpg/400px-Kodungallur_Temple.jpg",
  "Chengannur Mahadevar Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Chengannur_Mahadeva_Temple.jpg/400px-Chengannur_Mahadeva_Temple.jpg",
  "Sree Parthasarathi Temple, Guruvayur": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Guruvayoor_Temple_1.jpg/400px-Guruvayoor_Temple_1.jpg",
  "Ambalappuzha Sree Krishna Swamy Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Ambalappuzha_Temple.JPG/400px-Ambalappuzha_Temple.JPG",
  "Sree Thirumandhamkunnu Bhagavathi Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Kadampuzha_temple.jpg/400px-Kadampuzha_temple.jpg",
  "Lokanarkavu Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Attukal_temple.jpg/400px-Attukal_temple.jpg",
  "Thiruvanchikulam Mahadeva Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Kodungallur_Temple.jpg/400px-Kodungallur_Temple.jpg",
  "Kaviyoor Mahadeva Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Kaviyoor_temple.jpg/400px-Kaviyoor_temple.jpg",
  "Sree Maha Ganapathi Temple, Kottarakkara": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Sabarimala_5.jpg/600px-Sabarimala_5.jpg",
  "Ettumanoor Shri Mahadeva Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Ettumanoor_Mahadeva_Temple.jpg/400px-Ettumanoor_Mahadeva_Temple.jpg",
  "Sree Vadakkumnathan Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Vadakkumnathan_Temple.jpg/400px-Vadakkumnathan_Temple.jpg",

  // Kerala Trekking
  "Eravikulam & Chokramudi Trek": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Eravikulam_National_Park.jpg/400px-Eravikulam_National_Park.jpg",
  "Illikkal Kallu & Ilaveezhapoonchira": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Ilaveezhapoonchira.jpg/400px-Ilaveezhapoonchira.jpg",
  "Vagamon & Thangalpara Trek": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Vagamon.jpg/400px-Vagamon.jpg",
  "Rhodo Valley & Meesapulimala": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Meesapulimala.jpg/400px-Meesapulimala.jpg",
  "Periyar National Park": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Periyar_National_Park.jpg/400px-Periyar_National_Park.jpg",
  "Neyyar & Shoolam Falls Trek": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neyyar_dam.jpg/400px-Neyyar_dam.jpg",
  "Kattadikadavu & Urulikuzhi Falls": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Periyar_Tiger_Reserve.jpg/400px-Periyar_Tiger_Reserve.jpg",
  "Shendurney & Thenmala Trek": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Thenmala_Dam.jpg/400px-Thenmala_Dam.jpg",
  "Chimmini & Silent Valley Trek": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Silent_Valley_National_Park.jpg/400px-Silent_Valley_National_Park.jpg",
  "Vayalada & Kurangani Hills": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Vayalada.jpg/400px-Vayalada.jpg",

  // Kerala Hill Stations
  "Munnar Echo Point & Kottappara": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Echo_Point_Munnar-Kerala.jpg/400px-Echo_Point_Munnar-Kerala.jpg",
  "Top Station & Uluppuni": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Top_Station_Munnar.jpg/400px-Top_Station_Munnar.jpg",
  "Pettimudi & Kottapara Hilltop": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Hill_View_%28Munnar_-_Kerala%29.jpg/400px-Hill_View_%28Munnar_-_Kerala%29.jpg",
  "Nelliyampathy & Meenampara": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Nelliyampathy_forests%2CMinnampara.jpg/400px-Nelliyampathy_forests%2CMinnampara.jpg",
  "Palakkayam Thattu & Lakkidi": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Lakkidi_view_point.jpg/400px-Lakkidi_view_point.jpg",
  "Panchalimedu & Kailasappara": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Sunrise_View_From_Panchalimedu%2C_Idukki.jpg/400px-Sunrise_View_From_Panchalimedu%2C_Idukki.jpg",
  "Vagamon Hills & Kolahalamedu": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Vagamon.jpg/400px-Vagamon.jpg",
  "Ilaveezhapoonchira Top Station": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Ilaveezhapoonchira.jpg/400px-Ilaveezhapoonchira.jpg",
  "Meesapulimala & Devikulam": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Meesapulimala.jpg/400px-Meesapulimala.jpg",
  "Kochareekkal Caves & Piravom": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Kochareekkal_Caves%2C_Piravom_%280%29.jpg/400px-Kochareekkal_Caves%2C_Piravom_%280%29.jpg",

  // Kerala Beaches
  "Alleppey Beach & Pier": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Alleppey_beach.jpg/400px-Alleppey_beach.jpg",
  "Muzhappilangad Drive-In Beach": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Fisherman_at_Muzhappilangad_Beach.jpg/400px-Fisherman_at_Muzhappilangad_Beach.jpg",
  "Marari & Puthenthodu Beach": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Marari_Beach.jpg/400px-Marari_Beach.jpg",
  "Cherai & Kuzhuppilly Beach": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Cherai_Beach_Kerala.jpg/400px-Cherai_Beach_Kerala.jpg",
  "Bekal Fort Beach": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Bekal_Fort_%284530729846%29.jpg/400px-Bekal_Fort_%284530729846%29.jpg",
  "Edava Beach & Varkala": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Varkala_Beach%2C_Varkala%2C_Kerala.jpg/400px-Varkala_Beach%2C_Varkala%2C_Kerala.jpg",
  "Beypore & Kappil Beach": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Beypore_Beach%2C_Kozhikode%2C_Kerala.jpg/400px-Beypore_Beach%2C_Kozhikode%2C_Kerala.jpg",
  "Elamkunnapuzha & Nattika Beach": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Nattika_beach.JPG/400px-Nattika_beach.JPG",
  "Vadanappally & Swapnatheeram": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Nattika_beach.JPG/400px-Nattika_beach.JPG",
  "Kodungallur Azhikode Beach": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Kappil_beach_kerala.jpg/400px-Kappil_beach_kerala.jpg",

  // Karnataka
  "Coorg": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Abbey_Falls_2022_2.jpg/600px-Abbey_Falls_2022_2.jpg",
  "Hampi": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Hampi_-_Hemakuta_Hill%2C_Virupaksha_Temple.jpg/600px-Hampi_-_Hemakuta_Hill%2C_Virupaksha_Temple.jpg",
  "Mysore": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mysore_Palace_Morning.jpg/600px-Mysore_Palace_Morning.jpg",
  "Gokarna": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Gokarna_picture_near_Om_Beach.jpg/600px-Gokarna_picture_near_Om_Beach.jpg",
  "Kudremukh": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Kudremukh_national_park.jpg/600px-Kudremukh_national_park.jpg",
  "Udupi": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Krishna_Mutt%2CUdupi.JPG/600px-Krishna_Mutt%2CUdupi.JPG",
  "Murudeshwar": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Murudeshwar_Shiva_Statue.jpg/600px-Murudeshwar_Shiva_Statue.jpg",
  "Gokarna (Devotional)": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Gokarna_picture_near_Om_Beach.jpg/600px-Gokarna_picture_near_Om_Beach.jpg",
  "Kukke Subramanya": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Kukke_Subhramanya.JPG/600px-Kukke_Subhramanya.JPG",
  "Dharmasthala": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Dharmasthala_Temple.jpg/600px-Dharmasthala_Temple.jpg",
  "Kollur Mookambika": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Sri_Mookambika_Temple%2C_Kollur.jpg/600px-Sri_Mookambika_Temple%2C_Kollur.jpg",
  "Sringeri": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Sringeri_Sharada_Peeta_%284479042861%29.jpg/600px-Sringeri_Sharada_Peeta_%284479042861%29.jpg",
  "Horanadu": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Horanadu_Temple.jpg/600px-Horanadu_Temple.jpg",
  "Hampi (Devotional)": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Hampi_-_Hemakuta_Hill%2C_Virupaksha_Temple.jpg/600px-Hampi_-_Hemakuta_Hill%2C_Virupaksha_Temple.jpg",
  "Shravanabelagola": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Gomateswara%2C_Shravanabelagola.jpg/600px-Gomateswara%2C_Shravanabelagola.jpg",
  "Nanjangud": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Nanjangud_Temple.2.jpg/600px-Nanjangud_Temple.2.jpg",
  "Srirangapatna": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Ranganathaswamy_Temple%2C_Srirangapatna.jpg/600px-Ranganathaswamy_Temple%2C_Srirangapatna.jpg",
  "Kotilingeshwara": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Kotilingeshwara.JPG/600px-Kotilingeshwara.JPG",
  "Nandi Hills": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Nandi_Hills.jpg/600px-Nandi_Hills.jpg",
  "Skandagiri": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Skandagiri.jpg/600px-Skandagiri.jpg",
  "Savandurga": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Savandurga_hill.jpg/600px-Savandurga_hill.jpg",
  "Kodachadri": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Kodachadri_Peak.jpg/600px-Kodachadri_Peak.jpg",
  "Tadiandamol": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Tadiandamol.jpg/600px-Tadiandamol.jpg",
  "Mullayanagiri": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Mullayanagiri_Peak.jpg/600px-Mullayanagiri_Peak.jpg",
  "Ettina Bhuja": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Ettina_Bhuja.jpg/600px-Ettina_Bhuja.jpg",
  "Bandaje Falls Trek": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Bandaje_falls.jpg/600px-Bandaje_falls.jpg",
  "Kumara Parvatha": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Kumaraparvatha.jpg/600px-Kumaraparvatha.jpg",
  "Chikmagalur": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Chikkamagaluru.jpg/600px-Chikkamagaluru.jpg",
  "Kemmanagundi": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Kemmangundi.jpg/600px-Kemmangundi.jpg",
  "Agumbe": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Agumbe.jpg/600px-Agumbe.jpg",
  "Himavad Gopalaswamy Betta": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Himavad_Gopalaswamy_Betta.jpg/600px-Himavad_Gopalaswamy_Betta.jpg",
  "Jogimatti Forest": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Jogimatti.jpg/600px-Jogimatti.jpg",
  "Male Mahadeshwara Betta (MM Hills)": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Male_Mahadeshwara_Temple.jpg/600px-Male_Mahadeshwara_Temple.jpg",
  "Karwar": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Karwar%2C_Karnataka.jpg/600px-Karwar%2C_Karnataka.jpg",
  "Kasarkod Beach": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Kasrkod-beach-park-Honnavar.jpg/600px-Kasrkod-beach-park-Honnavar.jpg",
  "Maravanthe Beach": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Maravanthe_Beach.jpg/600px-Maravanthe_Beach.jpg",

  // Maharashtra
  "Lonavala": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Lonavala_Hills_seen_from_train.jpg/600px-Lonavala_Hills_seen_from_train.jpg",
  "Mahabaleshwar": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Mahabaleshwar-scene.jpg",
  "Alibaug": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Alibaug_Fort_South_CauseWay.JPG/600px-Alibaug_Fort_South_CauseWay.JPG",
  "Ajanta & Ellora": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Buddhist_Monks_inside_premises_of_Ajanta_Caves%2C_Maharashtra%2C_India_28.jpg/600px-Buddhist_Monks_inside_premises_of_Ajanta_Caves%2C_Maharashtra%2C_India_28.jpg",
  "Harishchandragad": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Harishchandragad_Konkan_Kada.jpg/600px-Harishchandragad_Konkan_Kada.jpg",
  "Shirdi": "https://upload.wikimedia.org/wikipedia/commons/d/df/Shirdi_Sai_Baba_3.jpg",
  "Trimbakeshwar": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Trimbakeshwar_Shiva_Temple_2005.jpg/600px-Trimbakeshwar_Shiva_Temple_2005.jpg",
  "Pandharpur": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Pandharpur_Vithoba_temple.jpg",
  "Bhimashankar": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Bhimashankar.jpg",
  "Ashtavinayak Temples": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Morgaon.jpg/600px-Morgaon.jpg",
  "Nashik-Panchavati": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Panchavati-Ramkund.jpg/600px-Panchavati-Ramkund.jpg",
  "Tuljapur Bhavani Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Raje_Shahaji_Mahadwar_of_Tulja_Bhavani_Temple.jpg/600px-Raje_Shahaji_Mahadwar_of_Tulja_Bhavani_Temple.jpg",
  "Jejuri Khandoba Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Khandoba_temple_Pune.jpg/600px-Khandoba_temple_Pune.jpg",
  "Grishneshwar Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Grishneshwar_temple_in_Aurangabad_district.jpg/600px-Grishneshwar_temple_in_Aurangabad_district.jpg",
  "Ganpatipule": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/A_Beach_at_GanapatiPule.jpg/600px-A_Beach_at_GanapatiPule.jpg"
};

// Verified spot images for key temples and landmarks
const spotImages = {
  "Meenakshi Amman Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Madurai_meenakshi_temple.jpg/400px-Madurai_meenakshi_temple.jpg",
  "Brihadeeswarar Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Brihadeeswara.jpg/400px-Brihadeeswara.jpg",
  "Airavatesvara Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Darasuram%2C_Airavatesvara_Temple%2C_Dravidian_architecture%2C_India.jpg/400px-Darasuram%2C_Airavatesvara_Temple%2C_Dravidian_architecture%2C_India.jpg",
  "Ramanathaswamy Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Ramanathaswamy_Temple_night_view.jpg/400px-Ramanathaswamy_Temple_night_view.jpg",
  "Vivekananda Rock Memorial": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Vivekananda_Rock_Memorial%2C_Kanyakumari%2C_India_2.jpg/400px-Vivekananda_Rock_Memorial%2C_Kanyakumari%2C_India_2.jpg",
  "Arunachaleswarar Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Tiruvannamalai_arunachaleswarar_kovil.jpg/400px-Tiruvannamalai_arunachaleswarar_kovil.jpg",
  "Nataraja Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Nataraja_Temple_gopuram_artwork_in_Chidambaram%2C_Tamil_Nadu.jpg/400px-Nataraja_Temple_gopuram_artwork_in_Chidambaram%2C_Tamil_Nadu.jpg",
  "Ranganathaswamy Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Ranganathaswamy_Temple%2C_Srirangam_%2849998238482%29.jpg/400px-Ranganathaswamy_Temple%2C_Srirangam_%2849998238482%29.jpg",
  "Ekambareswarar Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Ekambareswarar_Temple_at_night_in_Kanchipuram_01.jpg/400px-Ekambareswarar_Temple_at_night_in_Kanchipuram_01.jpg",
  "Kapaleeshwarar Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Kapaleeshwarar_Temple%2C_Mylapore%2C_Chennai%2C_India.jpg/400px-Kapaleeshwarar_Temple%2C_Mylapore%2C_Chennai%2C_India.jpg",
  "Dhandayuthapani Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Arulmigu_Dhandayuthapani_Swamy_Temple_in_Palany_hill.jpg/400px-Arulmigu_Dhandayuthapani_Swamy_Temple_in_Palany_hill.jpg",
  "Andal Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Srivilliputhur_Andal_temple_%2832%29.jpg/400px-Srivilliputhur_Andal_temple_%2832%29.jpg",
  "Nellaiappar Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Nellaiappar_Temple_%2848410%29.jpg/400px-Nellaiappar_Temple_%2848410%29.jpg",
  "Shore Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Mamallapuram%2C_Shore_Temple%2C_India.jpg/400px-Mamallapuram%2C_Shore_Temple%2C_India.jpg",
  "Mysore Palace": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mysore_Palace_Morning.jpg/400px-Mysore_Palace_Morning.jpg",
  "Virupaksha Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Hampi_-_Hemakuta_Hill%2C_Virupaksha_Temple.jpg/400px-Hampi_-_Hemakuta_Hill%2C_Virupaksha_Temple.jpg",
  "Ajanta Caves": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Buddhist_Monks_inside_premises_of_Ajanta_Caves%2C_Maharashtra%2C_India_28.jpg/400px-Buddhist_Monks_inside_premises_of_Ajanta_Caves%2C_Maharashtra%2C_India_28.jpg",
  "Ellora Caves": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Courtyard_and_Mahabharata_Reliefs_at_the_Kailasa_Temple%2C_Ellora_01.jpg/400px-Courtyard_and_Mahabharata_Reliefs_at_the_Kailasa_Temple%2C_Ellora_01.jpg",
  "Ooty Lake": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Fields_Hazy_Mountains_Marlimund_Ooty_Nilgiris_Aug25_A7CR_07258.jpg/400px-Fields_Hazy_Mountains_Marlimund_Ooty_Nilgiris_Aug25_A7CR_07258.jpg",
  "Kodaikanal Lake": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Kodaikanal_Lake_2.jpg/400px-Kodaikanal_Lake_2.jpg",
  "Sim's Park": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gandhipuram_Tea_Estate_Coonoor_Nilgiris_Jun25_A7CR_05879.jpg/400px-Gandhipuram_Tea_Estate_Coonoor_Nilgiris_Jun25_A7CR_05879.jpg",
  "Abbey Falls": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Abbey_Falls_2022_2.jpg/400px-Abbey_Falls_2022_2.jpg",
  "Marina Beach": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Marina_Beach_in_Chennai.jpg/400px-Marina_Beach_in_Chennai.jpg",
  "Promenade Beach": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Pondicherry-French_Quarter-WUS02277.jpg/400px-Pondicherry-French_Quarter-WUS02277.jpg",
  "Gudiyam Cave": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Gudiyam_Cave.jpg/400px-Gudiyam_Cave.jpg",
  "Longwood Shola": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Longwood_Shola_Reserve_Forest%2C_Kotagiri%2C_Tamil_Nadu.jpg/400px-Longwood_Shola_Reserve_Forest%2C_Kotagiri%2C_Tamil_Nadu.jpg",
  "Kolukkumalai Tea Estate": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Kolukkumalai_Tea_Estate.JPG/400px-Kolukkumalai_Tea_Estate.JPG",
  "Jalagamparai Falls": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Jalagamparai_Falls_%283976643944%29.jpg/400px-Jalagamparai_Falls_%283976643944%29.jpg",
  "Mukurthi Peak": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Mukurthi_Peak_Nilgiris_India_Jan18_D72_5120.jpg/400px-Mukurthi_Peak_Nilgiris_India_Jan18_D72_5120.jpg",
  "Avalanche Lake": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Avalanche_Lake_2.jpg/400px-Avalanche_Lake_2.jpg",
  "Needle Rock": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Gudalur_Needle_Rock_Valley_View_Nilgiris_Aug25_A7CR_07358.jpg/400px-Gudalur_Needle_Rock_Valley_View_Nilgiris_Aug25_A7CR_07358.jpg",
  "Rangaswamy Peak": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Rangasamy_Peak_seen_from_Kodanad.jpg/400px-Rangasamy_Peak_seen_from_Kodanad.jpg",
  "Vellagavi Village": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/View_from_Vellagavi_Village.jpg/400px-View_from_Vellagavi_Village.jpg",
  "Sathuragiri Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Sathuragiri_Sundara_Mahalingam_Temple_%2855544%29.jpg/400px-Sathuragiri_Sundara_Mahalingam_Temple_%2855544%29.jpg",
  "Topslip": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Topslip%2C_Anamalai_Tiger_Reserve_-_panoramio.jpg/400px-Topslip%2C_Anamalai_Tiger_Reserve_-_panoramio.jpg",
  "Velliangiri Temple": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Temple_after_the_first_hill_at_Vellingiri.JPG/400px-Temple_after_the_first_hill_at_Vellingiri.JPG",
  "Konkan Kada": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Harishchandragad_Konkan_Kada.jpg/400px-Harishchandragad_Konkan_Kada.jpg",
  "Kudremukh Peak": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Kudremukh_national_park.jpg/400px-Kudremukh_national_park.jpg"
};



// All Indian States & Major Districts for Distance Calculator
const distanceLocations = {
  "Tamil Nadu": {
    "Chennai": [13.0827, 80.2707], "Madurai": [9.9252, 78.1198], "Coimbatore": [11.0168, 76.9558],
    "Tiruchirappalli": [10.7905, 78.7047], "Salem": [11.6643, 78.1460], "Tirunelveli": [8.7139, 77.7567],
    "Erode": [11.3410, 77.7172], "Vellore": [12.9165, 79.1325], "Thanjavur": [10.7870, 79.1378],
    "Dindigul": [10.3624, 77.9695], "Kanchipuram": [12.8342, 79.7036], "Tiruvannamalai": [12.2253, 79.0747],
    "Tiruppur": [11.1085, 77.3411], "Cuddalore": [11.7480, 79.7714], "Thoothukudi": [8.7642, 78.1348],
    "Nagercoil": [8.1833, 77.4119], "Kumbakonam": [10.9617, 79.3881], "Karur": [10.9601, 78.0766],
    "Sivaganga": [10.1356, 78.4816], "Ramanathapuram": [9.3639, 78.8395], "Theni": [10.0104, 77.4768],
    "Virudhunagar": [9.5851, 77.9526], "Namakkal": [11.2189, 78.1674], "Krishnagiri": [12.5186, 78.2137],
    "Dharmapuri": [12.1211, 78.1582], "Perambalur": [11.2320, 78.8807], "Ariyalur": [11.1428, 79.0754],
    "Nagapattinam": [10.7672, 79.8449], "Pudukkottai": [10.3833, 78.8001], "Nilgiris (Ooty)": [11.4102, 76.6950],
    "Kodaikanal": [10.2381, 77.4892], "Rameswaram": [9.2876, 79.3129], "Kanyakumari": [8.0883, 77.5385],
    "Pondicherry": [11.9416, 79.8083], "Mahabalipuram": [12.6172, 80.1927], "Hosur": [12.7409, 77.8253]
  },
  "Kerala": {
    "Thiruvananthapuram": [8.5241, 76.9366], "Kochi": [9.9312, 76.2673], "Kozhikode": [11.2588, 75.7804],
    "Thrissur": [10.5276, 76.2144], "Kollam": [8.8932, 76.6141], "Palakkad": [10.7867, 76.6548],
    "Alappuzha": [9.4981, 76.3388], "Kannur": [11.8745, 75.3704], "Kottayam": [9.5916, 76.5222],
    "Malappuram": [11.0510, 76.0711], "Pathanamthitta": [9.2648, 76.7870], "Idukki": [9.8494, 76.9720],
    "Wayanad": [11.6854, 76.1320], "Ernakulam": [9.9816, 76.2999], "Kasaragod": [12.4996, 74.9869],
    "Munnar": [10.0889, 77.0595], "Kovalam": [8.3988, 76.9782], "Thekkady": [9.6080, 77.1615],
    "Kumarakom": [9.6175, 76.4301], "Varkala": [8.7379, 76.7163], "Sabarimala": [9.4361, 77.0811]
  },
  "Karnataka": {
    "Bengaluru": [12.9716, 77.5946], "Mysuru": [12.2958, 76.6394], "Mangaluru": [12.9141, 74.8560],
    "Hubli-Dharwad": [15.3647, 75.1240], "Belagavi": [15.8497, 74.4977], "Kalaburagi": [17.3297, 76.8343],
    "Davangere": [14.4644, 75.9218], "Ballari": [15.1394, 76.9214], "Shivamogga": [13.9299, 75.5681],
    "Tumakuru": [13.3379, 77.1173], "Udupi": [13.3409, 74.7421], "Raichur": [16.2076, 77.3463],
    "Hassan": [13.0072, 76.0962], "Chitradurga": [14.2226, 76.3980], "Bidar": [17.9104, 77.5199],
    "Coorg (Kodagu)": [12.3375, 75.8069], "Hampi": [15.3350, 76.4600], "Gokarna": [14.5479, 74.3188],
    "Chikmagalur": [13.3161, 75.7720], "Badami": [15.9150, 75.6750], "Kudremukh": [13.1753, 75.2544]
  },
  "Maharashtra": {
    "Mumbai": [19.0760, 72.8777], "Pune": [18.5204, 73.8567], "Nagpur": [21.1458, 79.0882],
    "Nashik": [19.9975, 73.7898], "Aurangabad": [19.8762, 75.3433], "Solapur": [17.6599, 75.9064],
    "Kolhapur": [16.7050, 74.2433], "Thane": [19.2183, 72.9781], "Navi Mumbai": [19.0330, 73.0297],
    "Sangli": [16.8524, 74.5815], "Satara": [17.6805, 74.0183], "Ratnagiri": [16.9902, 73.3120],
    "Ahmednagar": [19.0948, 74.7480], "Latur": [18.3968, 76.5604], "Amravati": [20.9374, 77.7796],
    "Lonavala": [18.7546, 73.4062], "Mahabaleshwar": [17.9307, 73.6477], "Alibaug": [18.6414, 72.8722],
    "Shirdi": [19.7668, 74.4773], "Ajanta & Ellora": [20.5519, 75.7033]
  },
  "Andhra Pradesh": {
    "Hyderabad": [17.3850, 78.4867], "Visakhapatnam": [17.6868, 83.2185], "Vijayawada": [16.5062, 80.6480],
    "Guntur": [16.3067, 80.4365], "Nellore": [14.4426, 79.9865], "Kurnool": [15.8281, 78.0373],
    "Tirupati": [13.6288, 79.4192], "Rajahmundry": [17.0005, 81.8040], "Kakinada": [16.9891, 82.2475],
    "Anantapur": [14.6819, 77.6006], "Kadapa": [14.4674, 78.8241], "Ongole": [15.5057, 80.0499],
    "Chittoor": [13.2172, 79.1003], "Eluru": [16.7107, 81.0952], "Srikakulam": [18.2949, 83.8938]
  },
  "Telangana": {
    "Hyderabad": [17.3850, 78.4867], "Warangal": [17.9784, 79.5941], "Nizamabad": [18.6725, 78.0940],
    "Karimnagar": [18.4386, 79.1288], "Khammam": [17.2473, 80.1514], "Mahbubnagar": [16.7488, 77.9855],
    "Nalgonda": [17.0575, 79.2690], "Adilabad": [19.6640, 78.5320], "Medak": [18.0539, 78.2601],
    "Rangareddy": [17.2543, 78.3926], "Siddipet": [18.1019, 78.8520]
  },
  "Rajasthan": {
    "Jaipur": [26.9124, 75.7873], "Jodhpur": [26.2389, 73.0243], "Udaipur": [24.5854, 73.7125],
    "Jaisalmer": [26.9157, 70.9083], "Ajmer": [26.4499, 74.6399], "Bikaner": [28.0229, 73.3119],
    "Kota": [25.2138, 75.8648], "Pushkar": [26.4898, 74.5511], "Mount Abu": [24.5926, 72.7156],
    "Alwar": [27.5530, 76.6346], "Bharatpur": [27.2152, 77.5030], "Chittorgarh": [24.8887, 74.6269],
    "Ranthambore": [26.0173, 76.5026], "Bundi": [25.4305, 75.6499]
  },
  "Uttar Pradesh": {
    "Lucknow": [26.8467, 80.9462], "Agra": [27.1767, 78.0081], "Varanasi": [25.3176, 82.9739],
    "Kanpur": [26.4499, 80.3319], "Prayagraj": [25.4358, 81.8463], "Noida": [28.5355, 77.3910],
    "Ghaziabad": [28.6692, 77.4538], "Meerut": [28.9845, 77.7064], "Mathura": [27.4924, 77.6737],
    "Ayodhya": [26.7922, 82.1998], "Gorakhpur": [26.7606, 83.3732], "Jhansi": [25.4484, 78.5685],
    "Aligarh": [27.8974, 78.0880], "Bareilly": [28.3670, 79.4304], "Moradabad": [28.8386, 78.7733]
  },
  "Madhya Pradesh": {
    "Bhopal": [23.2599, 77.4126], "Indore": [22.7196, 75.8577], "Jabalpur": [23.1815, 79.9864],
    "Gwalior": [26.2183, 78.1828], "Ujjain": [23.1765, 75.7885], "Sagar": [23.8388, 78.7378],
    "Khajuraho": [24.8318, 79.9199], "Sanchi": [23.4793, 77.7399], "Pachmarhi": [22.4675, 78.4340],
    "Orchha": [25.3520, 78.6408], "Mandu": [22.3354, 75.3920], "Rewa": [24.5373, 81.3042]
  },
  "Gujarat": {
    "Ahmedabad": [23.0225, 72.5714], "Surat": [21.1702, 72.8311], "Vadodara": [22.3072, 73.1812],
    "Rajkot": [22.3039, 70.8022], "Gandhinagar": [23.2156, 72.6369], "Bhavnagar": [21.7645, 72.1519],
    "Junagadh": [21.5222, 70.4579], "Dwarka": [22.2442, 68.9685], "Somnath": [20.8880, 70.4013],
    "Kutch": [23.7337, 69.8597], "Gir National Park": [21.1243, 70.7935], "Diu": [20.7141, 70.9876],
    "Saputara": [20.5744, 73.7480], "Statue of Unity": [21.8380, 73.7191]
  },
  "West Bengal": {
    "Kolkata": [22.5726, 88.3639], "Darjeeling": [27.0410, 88.2663], "Siliguri": [26.7271, 88.3953],
    "Howrah": [22.5958, 88.2636], "Durgapur": [23.5204, 87.3119], "Asansol": [23.6739, 86.9524],
    "Shantiniketan": [23.6814, 87.6855], "Sundarbans": [21.9497, 89.1833], "Digha": [21.6278, 87.5098],
    "Murshidabad": [24.1745, 88.2700], "Kalimpong": [27.0594, 88.4695], "Bishnupur": [23.0728, 87.3175]
  },
  "Goa": {
    "Panaji": [15.4909, 73.8278], "Margao": [15.2832, 73.9862], "Vasco da Gama": [15.3982, 73.8113],
    "Mapusa": [15.5916, 73.8087], "Calangute": [15.5449, 73.7553], "Anjuna": [15.5735, 73.7413],
    "Palolem": [15.0100, 74.0232], "Old Goa": [15.5009, 73.9116], "Dudhsagar Falls": [15.3144, 74.3143]
  },
  "Odisha": {
    "Bhubaneswar": [20.2961, 85.8245], "Puri": [19.8135, 85.8312], "Cuttack": [20.4625, 85.8830],
    "Rourkela": [22.2604, 84.8536], "Konark": [19.8876, 86.0945], "Sambalpur": [21.4669, 83.9812],
    "Chilika Lake": [19.7260, 85.3200], "Berhampur": [19.3150, 84.7941]
  },
  "Punjab": {
    "Chandigarh": [30.7333, 76.7794], "Amritsar": [31.6340, 74.8723], "Ludhiana": [30.9010, 75.8573],
    "Jalandhar": [31.3260, 75.5762], "Patiala": [30.3398, 76.3869], "Bathinda": [30.2110, 74.9455],
    "Mohali": [30.7046, 76.7179], "Pathankot": [32.2643, 75.6421]
  },
  "Haryana": {
    "Gurugram": [28.4595, 77.0266], "Faridabad": [28.4089, 77.3178], "Panipat": [29.3909, 76.9635],
    "Ambala": [30.3782, 76.7767], "Karnal": [29.6857, 76.9905], "Hisar": [29.1492, 75.7217],
    "Rohtak": [28.8955, 76.6066], "Kurukshetra": [29.9695, 76.8783]
  },
  "Bihar": {
    "Patna": [25.6093, 85.1376], "Gaya": [24.7955, 84.9994], "Bodh Gaya": [24.6961, 84.9869],
    "Nalanda": [25.1368, 85.4430], "Rajgir": [25.0283, 85.4168], "Muzaffarpur": [26.1209, 85.3647],
    "Bhagalpur": [25.2425, 86.9842], "Vaishali": [25.6841, 85.3218]
  },
  "Jharkhand": {
    "Ranchi": [23.3441, 85.3096], "Jamshedpur": [22.8046, 86.2029], "Dhanbad": [23.7957, 86.4304],
    "Bokaro": [23.6693, 86.1511], "Deoghar": [24.4764, 86.6944], "Hazaribagh": [23.9966, 85.3637],
    "Netarhat": [23.4784, 84.2680]
  },
  "Chhattisgarh": {
    "Raipur": [21.2514, 81.6296], "Bilaspur": [22.0797, 82.1409], "Durg": [21.1904, 81.2849],
    "Jagdalpur": [19.0868, 82.0208], "Korba": [22.3595, 82.7501], "Chitrakote Falls": [19.2033, 81.7000]
  },
  "Uttarakhand": {
    "Dehradun": [30.3165, 78.0322], "Haridwar": [29.9457, 78.1642], "Rishikesh": [30.0869, 78.2676],
    "Nainital": [29.3803, 79.4636], "Mussoorie": [30.4598, 78.0644], "Jim Corbett": [29.5300, 78.7747],
    "Auli": [30.5268, 79.5670], "Kedarnath": [30.7352, 79.0669], "Badrinath": [30.7433, 79.4938],
    "Valley of Flowers": [30.7280, 79.6050], "Chopta": [30.2900, 79.2100]
  },
  "Himachal Pradesh": {
    "Shimla": [31.1048, 77.1734], "Manali": [32.2396, 77.1887], "Dharamshala": [32.2190, 76.3234],
    "Dalhousie": [32.5387, 75.9706], "Kullu": [31.9579, 77.1095], "Kasol": [32.0101, 77.3142],
    "Spiti Valley": [32.2460, 78.0349], "Bir Billing": [31.8800, 76.7200], "Chamba": [32.5534, 76.1258],
    "Kinnaur": [31.5800, 78.1700], "McLeod Ganj": [32.2427, 76.3213]
  },
  "Jammu & Kashmir": {
    "Srinagar": [34.0837, 74.7973], "Jammu": [32.7266, 74.8570], "Gulmarg": [34.0484, 74.3805],
    "Pahalgam": [34.0161, 75.3150], "Sonamarg": [34.3032, 75.2931], "Leh": [34.1526, 77.5771],
    "Patnitop": [33.0900, 75.3200], "Vaishno Devi": [33.0305, 74.9490]
  },
  "Ladakh": {
    "Leh": [34.1526, 77.5771], "Pangong Lake": [33.7595, 78.6600], "Nubra Valley": [34.6800, 77.5700],
    "Magnetic Hill": [34.1700, 77.3700], "Zanskar": [33.5000, 76.8500], "Tso Moriri": [32.9000, 78.3200]
  },
  "Sikkim": {
    "Gangtok": [27.3389, 88.6065], "Pelling": [27.3000, 88.2400], "Namchi": [27.1667, 88.3500],
    "Lachung": [27.6900, 88.7500], "Ravangla": [27.3100, 88.3600], "Tsomgo Lake": [27.3725, 88.7650],
    "Gurudongmar Lake": [27.9500, 88.7000]
  },
  "Assam": {
    "Guwahati": [26.1445, 91.7362], "Jorhat": [26.7509, 94.2037], "Dibrugarh": [27.4728, 94.9120],
    "Silchar": [24.8333, 92.7789], "Tezpur": [26.6338, 92.8000], "Kaziranga": [26.5775, 93.1711],
    "Majuli Island": [26.9500, 94.1700]
  },
  "Meghalaya": {
    "Shillong": [25.5788, 91.8933], "Cherrapunji": [25.2700, 91.7200], "Dawki": [25.1862, 92.0115],
    "Mawlynnong": [25.2000, 91.9200], "Tura": [25.5144, 90.2147]
  },
  "Nagaland": {
    "Kohima": [25.6751, 94.1086], "Dimapur": [25.9042, 93.7270], "Mokokchung": [26.3222, 94.5222]
  },
  "Manipur": {
    "Imphal": [24.8170, 93.9368], "Loktak Lake": [24.5500, 93.8000], "Ukhrul": [25.1200, 94.3700]
  },
  "Mizoram": {
    "Aizawl": [23.7271, 92.7176], "Lunglei": [22.8800, 92.7300]
  },
  "Tripura": {
    "Agartala": [23.8315, 91.2868], "Udaipur (Tripura)": [23.5300, 91.4800], "Neermahal": [23.5100, 91.4500]
  },
  "Arunachal Pradesh": {
    "Itanagar": [27.0844, 93.6053], "Tawang": [27.5860, 91.8596], "Ziro": [27.5400, 93.8300],
    "Bomdila": [27.2645, 92.4159], "Pasighat": [28.0700, 95.3300]
  },
  "Delhi": {
    "New Delhi": [28.6139, 77.2090], "Old Delhi": [28.6562, 77.2410], "Dwarka (Delhi)": [28.5921, 77.0460],
    "Noida": [28.5355, 77.3910], "Gurugram": [28.4595, 77.0266]
  }
};

// Food specialties by destination
const foodSpecialties = {
  "Madurai": ["Jigarthanda", "Kari Dosa", "Paruthi Paal", "Meen Kulambu"],
  "Thanjavur": ["Thanjavur Idli", "Degree Coffee", "Athirasam"],
  "Rameswaram": ["Appam & Stew", "Fresh Seafood", "Kothu Parotta"],
  "Kanyakumari": ["Fish Curry", "Banana Chips", "Puttu & Kadala"],
  "Tiruvannamalai": ["Temple Annadhanam", "Pongal", "Filter Coffee"],
  "Chidambaram": ["Chettinad Chicken", "Kavuni Arisi", "Jaggery Pongal"],
  "Srirangam (Trichy)": ["Srirangam Puliyodarai", "Trichy Sambar", "Manapparai Murukku"],
  "Kanchipuram": ["Kanchipuram Idli", "Silk Saree Biryani", "Temple Prasadam"],
  "Palani": ["Panchamirtham (Prasadam)", "Hill Banana", "Palani Patti"],
  "Chennai (Mylapore)": ["Filter Coffee", "Idli-Sambar", "Mylapore Sundal"],
  "Kumbakonam": ["Kumbakonam Degree Coffee", "Paal Payasam", "Adai Avial"],
  "Ooty": ["Ooty Chocolate", "Varkey Biscuit", "Nilgiri Tea"],
  "Kodaikanal": ["Kodai Cheese", "Eucalyptus Oil", "Homemade Chocolate"],
  "Coonoor": ["Nilgiri Tea", "Baker's Bread", "Coonoor Honey"],
  "Yercaud": ["Yercaud Coffee", "Jackfruit Chips", "Orange Marmalade"],
  "Valparai": ["Fresh Tea", "Bamboo Chicken", "Tribal Honey"],
  "Kolli Hills": ["Hill Banana", "Tribal Honey", "Pepper Chicken"],
  "Pondicherry": ["French Crepes", "Prawn Curry", "Pondicherry Filter Coffee"],
  "Mahabalipuram": ["Grilled Seafood", "Fish Fry", "Coconut Water"],
  "Marina & Covelong": ["Sundal", "Bajji", "Rose Milk"],
  "Munnar": ["Munnar Tea", "Kerala Parotta", "Fish Molee"],
  "Alleppey": ["Karimeen Pollichathu", "Appam & Stew", "Toddy Shop Fish Fry"],
  "Wayanad": ["Wayanad Honey", "Bamboo Rice", "Kerala Sadya"],
  "Kovalam": ["Prawn Curry", "Puttu & Kadala", "Fresh Toddy"],
  "Coorg": ["Coorg Pandi Curry", "Akki Roti", "Coorg Honey"],
  "Hampi": ["Jolada Roti", "Bisi Bele Bath", "Mango Lassi"],
  "Mysore": ["Mysore Pak", "Mysore Masala Dosa", "Mysore Bonda"],
  "Gokarna": ["Fish Thali", "Sol Kadhi", "Rava Fried Fish"],
  "Lonavala": ["Chikki", "Fudge", "Vada Pav"],
  "Mahabaleshwar": ["Strawberry Cream", "Corn on Cob", "Mapro Sandwich"],
  "Alibaug": ["Bombil Fry", "Sol Kadhi", "Modak"],
  "Ajanta & Ellora": ["Naan Qalia", "Sheer Khurma", "Aurangabad Biryani"],
  "Shirdi": ["Prasadam Laddu", "Puran Poli", "Sabudana Vada"],
  "Sree Padmanabhaswamy Temple": ["Appam & Stew", "Puttu & Kadala", "Kerala Sadya"],
  "Attukal Bhagavathy Temple": ["Pongala Prasadam", "Puttu & Kadala", "Avial"],
  "Thrikkakkara Vamana Moorthy Temple": ["Kerala Sadya", "Erissery", "Olan"],
  "Sree Poornathrayeesa Temple": ["Appam & Stew", "Karimeen Fry", "Payasam"],
  "Mannarasala Sree Nagaraja Temple": ["Noorum Palum Prasadam", "Avial", "Thoran"],
  "Aranmula Parthasarathy Temple": ["Aranmula Payasam", "Kerala Sadya", "Banana Chips"],
  "Guruvayur Sree Krishna Temple": ["Guruvayur Appam", "Unniyappam", "Temple Payasam"],
  "Sri Kadampuzha Bhagavathy Temple": ["Malabar Biryani", "Pathiri", "Sulaimani Tea"],
  "Sree Vallabha Temple": ["Palada Pradhaman", "Avial", "Thoran"],
  "Thirunelli Sree Maha Vishnu Temple": ["Wayanad Honey", "Bamboo Rice", "Puttu"],
  "Vaikom Mahadeva Temple": ["Karimeen Pollichathu", "Appam & Stew", "Toddy"],
  "Kodungallur Sree Kurumba Bhagavathi Temple": ["Thrissur Pooram Snacks", "Puttu", "Kadala Curry"],
  "Chengannur Mahadevar Temple": ["Palada Pradhaman", "Avial", "Sambar"],
  "Ambalappuzha Sree Krishna Swamy Temple": ["Ambalappuzha Palpayasam", "Appam", "Stew"],
  "Kaviyoor Mahadeva Temple": ["Palada Pradhaman", "Puttu & Kadala", "Avial"],
  "Sree Maha Ganapathi Temple, Kottarakkara": ["Modak Prasadam", "Appam & Stew", "Kerala Sadya"],
  "Ettumanoor Shri Mahadeva Temple": ["Palada Pradhaman", "Puttu & Kadala", "Kottayam Fish Curry"],
  "Sree Vadakkumnathan Temple": ["Thrissur Pooram Snacks", "Puttu & Kadala", "Kerala Sadya"],

  // Kerala Trekking
  "Eravikulam & Chokramudi Trek": ["Munnar Tea & Snacks", "Puttu & Kadala", "Kerala Parotta & Beef"],
  "Illikkal Kallu & Ilaveezhapoonchira": ["Kottayam Fish Curry", "Appam & Stew", "Tapioca & Fish"],
  "Vagamon & Thangalpara Trek": ["Idukki Bamboo Chicken", "Puttu & Kadala", "Kerala Porotta"],
  "Rhodo Valley & Meesapulimala": ["Munnar Tea & Snacks", "Cardamom Tea", "Kerala Sadya"],
  "Periyar National Park": ["Thekkady Spice Tea", "Kerala Fish Curry", "Appam & Stew"],
  "Neyyar & Shoolam Falls Trek": ["Trivandrum Banana Chips", "Puttu & Kadala", "Kerala Sadya"],
  "Kattadikadavu & Urulikuzhi Falls": ["Cardamom Coffee", "Kerala Parotta & Beef", "Tapioca & Fish"],
  "Shendurney & Thenmala Trek": ["Kollam Cashew Curry", "Appam & Stew", "Kerala Fish Curry"],
  "Chimmini & Silent Valley Trek": ["Palakkad Dosa", "Puttu & Kadala", "Kerala Sadya"],
  "Vayalada & Kurangani Hills": ["Kozhikode Biryani", "Malabar Parotta", "Banana Chips"],

  // Kerala Hill Stations
  "Munnar Echo Point & Kottappara": ["Munnar Tea & Snacks", "Puttu & Kadala", "Kerala Parotta"],
  "Top Station & Uluppuni": ["Cardamom Tea", "Munnar Neyyappam", "Kerala Sadya"],
  "Pettimudi & Kottapara Hilltop": ["Munnar Tea & Snacks", "Puttu & Kadala", "Appam & Stew"],
  "Nelliyampathy & Meenampara": ["Palakkad Dosa", "Nelliyampathy Orange Juice", "Kerala Sadya"],
  "Palakkayam Thattu & Lakkidi": ["Wayanad Bamboo Rice", "Puttu & Kadala", "Kerala Porotta"],
  "Panchalimedu & Kailasappara": ["Idukki Bamboo Chicken", "Cardamom Coffee", "Tapioca & Fish"],
  "Vagamon Hills & Kolahalamedu": ["Vagamon Cheese", "Puttu & Kadala", "Kerala Parotta"],
  "Ilaveezhapoonchira Top Station": ["Kottayam Fish Curry", "Appam & Stew", "Tapioca & Fish"],
  "Meesapulimala & Devikulam": ["Munnar Tea & Snacks", "Cardamom Tea", "Kerala Sadya"],
  "Kochareekkal Caves & Piravom": ["Ernakulam Biryani", "Appam & Stew", "Kerala Fish Curry"],

  // Kerala Beaches
  "Alleppey Beach & Pier": ["Alleppey Fish Curry", "Karimeen Pollichathu", "Appam & Stew"],
  "Muzhappilangad Drive-In Beach": ["Kannur Biryani", "Thalassery Dum Biryani", "Kerala Parotta"],
  "Marari & Puthenthodu Beach": ["Karimeen Fry", "Alleppey Fish Curry", "Appam & Stew"],
  "Cherai & Kuzhuppilly Beach": ["Kochi Biryani", "Kerala Fish Curry", "Puttu & Kadala"],
  "Bekal Fort Beach": ["Kasaragod Fish Curry", "Neer Dosa", "Chicken Ghee Roast"],
  "Edava Beach & Varkala": ["Varkala Fish Curry", "Prawn Moilee", "Appam & Stew"],
  "Beypore & Kappil Beach": ["Kozhikode Biryani", "Malabar Parotta", "Sulaimani Tea"],
  "Elamkunnapuzha & Nattika Beach": ["Thrissur Pooram Snacks", "Puttu & Kadala", "Kerala Sadya"],
  "Vadanappally & Swapnatheeram": ["Thrissur Fish Curry", "Puttu & Kadala", "Kerala Parotta"],
  "Kodungallur Azhikode Beach": ["Kodungallur Fish Fry", "Appam & Stew", "Kerala Sadya"]
};

// Major Toll Plazas across India — [lat, lng, name, highway, rates: {car, lcv, bus, mav}]
const tollPlazas = [
  // Tamil Nadu
  [12.8100, 80.0200, "Paranur", "NH45", {car:75, lcv:120, bus:260, mav:400}],
  [12.5500, 79.8900, "Tindivanam", "NH45", {car:65, lcv:105, bus:230, mav:355}],
  [12.1800, 79.6200, "Villupuram", "NH45", {car:70, lcv:115, bus:245, mav:380}],
  [11.7500, 79.4500, "Ulundurpet", "NH45", {car:65, lcv:105, bus:230, mav:355}],
  [11.3500, 79.1800, "Perambalur", "NH45", {car:70, lcv:115, bus:245, mav:380}],
  [10.9500, 78.8500, "Trichy Toll", "NH45", {car:75, lcv:120, bus:260, mav:400}],
  [10.4500, 78.4000, "Dindigul", "NH45B", {car:65, lcv:105, bus:230, mav:355}],
  [10.0500, 78.1500, "Madurai North", "NH45B", {car:70, lcv:115, bus:245, mav:380}],
  [9.7500, 78.0000, "Madurai South", "NH44", {car:65, lcv:105, bus:230, mav:355}],
  [9.3500, 77.8500, "Virudhunagar", "NH44", {car:70, lcv:115, bus:245, mav:380}],
  [8.9500, 77.7000, "Tirunelveli", "NH44", {car:65, lcv:105, bus:230, mav:355}],
  [13.0200, 80.1100, "Vandalur", "NH48", {car:80, lcv:130, bus:275, mav:425}],
  [12.8500, 79.7500, "Sriperumbudur", "NH48", {car:75, lcv:120, bus:260, mav:400}],
  [12.6000, 79.3000, "Walajapet", "NH48", {car:70, lcv:115, bus:245, mav:380}],
  [12.3500, 78.8500, "Vellore", "NH48", {car:65, lcv:105, bus:230, mav:355}],
  [11.8000, 78.2000, "Salem East", "NH44", {car:70, lcv:115, bus:245, mav:380}],
  [11.4000, 77.7500, "Erode", "NH44", {car:65, lcv:105, bus:230, mav:355}],
  [11.1000, 77.3500, "Tiruppur", "NH44", {car:70, lcv:115, bus:245, mav:380}],
  [11.0000, 77.0000, "Coimbatore", "NH44", {car:75, lcv:120, bus:260, mav:400}],
  [10.5000, 76.9000, "Palakkad Border", "NH544", {car:80, lcv:130, bus:275, mav:425}],
  [12.9500, 80.1500, "Maduravoyal", "NH4", {car:85, lcv:135, bus:285, mav:440}],
  [13.1500, 80.0500, "Poonamallee", "NH4", {car:75, lcv:120, bus:260, mav:400}],
  [11.6500, 78.1500, "Namakkal", "NH44", {car:65, lcv:105, bus:230, mav:355}],
  [10.7800, 79.1400, "Thanjavur", "NH67", {car:60, lcv:100, bus:215, mav:335}],
  [9.2800, 79.3100, "Rameswaram Road", "NH87", {car:55, lcv:90, bus:195, mav:305}],

  // Kerala
  [10.5500, 76.2500, "Thrissur", "NH544", {car:70, lcv:115, bus:245, mav:380}],
  [10.0000, 76.3000, "Ernakulam", "NH544", {car:75, lcv:120, bus:260, mav:400}],
  [9.5000, 76.3500, "Alappuzha", "NH66", {car:65, lcv:105, bus:230, mav:355}],
  [9.0000, 76.6000, "Kollam", "NH66", {car:65, lcv:105, bus:230, mav:355}],
  [8.6000, 76.9000, "Thiruvananthapuram", "NH66", {car:70, lcv:115, bus:245, mav:380}],
  [11.2500, 75.8000, "Kozhikode", "NH66", {car:70, lcv:115, bus:245, mav:380}],
  [11.8700, 75.3700, "Kannur", "NH66", {car:65, lcv:105, bus:230, mav:355}],
  [12.0000, 75.3000, "Kasaragod", "NH66", {car:65, lcv:105, bus:230, mav:355}],

  // Karnataka
  [12.8500, 77.6500, "Bengaluru - Electronic City", "NH44", {car:85, lcv:135, bus:285, mav:440}],
  [12.7000, 77.5000, "Bengaluru - Kengeri", "NH275", {car:80, lcv:130, bus:275, mav:425}],
  [13.2000, 77.7000, "Devanahalli", "NH44", {car:75, lcv:120, bus:260, mav:400}],
  [13.5000, 77.5000, "Chikballapur", "NH44", {car:70, lcv:115, bus:245, mav:380}],
  [14.0000, 77.5000, "Anantapur Border", "NH44", {car:70, lcv:115, bus:245, mav:380}],
  [12.4000, 76.7000, "Mysuru - Srirangapatna", "NH275", {car:65, lcv:105, bus:230, mav:355}],
  [12.5500, 76.6500, "Mandya", "NH275", {car:65, lcv:105, bus:230, mav:355}],
  [13.0000, 75.8000, "Hassan", "NH75", {car:60, lcv:100, bus:215, mav:335}],
  [13.9000, 75.6000, "Shivamogga", "NH206", {car:60, lcv:100, bus:215, mav:335}],
  [14.5000, 75.9000, "Davangere", "NH48", {car:65, lcv:105, bus:230, mav:355}],
  [15.0000, 75.5000, "Hubli", "NH48", {car:70, lcv:115, bus:245, mav:380}],
  [15.8500, 74.5000, "Belagavi", "NH48", {car:75, lcv:120, bus:260, mav:400}],
  [12.9000, 74.8500, "Mangaluru", "NH75", {car:70, lcv:115, bus:245, mav:380}],
  [15.3500, 76.4600, "Hospet (Hampi)", "NH50", {car:55, lcv:90, bus:195, mav:305}],

  // Maharashtra
  [19.2000, 73.0000, "Mumbai - Thane", "NH3", {car:90, lcv:145, bus:305, mav:470}],
  [19.0000, 73.1000, "Khalapur", "NH4", {car:85, lcv:135, bus:285, mav:440}],
  [18.8000, 73.3500, "Khandala", "NH4", {car:80, lcv:130, bus:275, mav:425}],
  [18.7500, 73.4000, "Lonavala", "NH4", {car:75, lcv:120, bus:260, mav:400}],
  [18.5500, 73.8000, "Pune - Khed", "NH4", {car:80, lcv:130, bus:275, mav:425}],
  [18.3000, 73.9500, "Shirwal", "NH4", {car:70, lcv:115, bus:245, mav:380}],
  [17.7000, 74.0000, "Satara", "NH4", {car:70, lcv:115, bus:245, mav:380}],
  [17.0000, 74.2500, "Kolhapur", "NH4", {car:70, lcv:115, bus:245, mav:380}],
  [16.5000, 74.5000, "Kagal (KA Border)", "NH4", {car:75, lcv:120, bus:260, mav:400}],
  [19.5000, 73.8000, "Nashik - Sinnar", "NH3", {car:70, lcv:115, bus:245, mav:380}],
  [19.8000, 75.3500, "Aurangabad", "NH211", {car:65, lcv:105, bus:230, mav:355}],
  [20.5000, 75.7000, "Jalgaon", "NH6", {car:65, lcv:105, bus:230, mav:355}],
  [20.9000, 77.8000, "Amravati", "NH6", {car:65, lcv:105, bus:230, mav:355}],
  [21.1500, 79.1000, "Nagpur West", "NH6", {car:75, lcv:120, bus:260, mav:400}],
  [21.2000, 79.2500, "Nagpur East", "NH7", {car:75, lcv:120, bus:260, mav:400}],
  [19.7700, 74.4800, "Shirdi", "NH160", {car:60, lcv:100, bus:215, mav:335}],

  // Andhra Pradesh & Telangana
  [17.5000, 78.5000, "Hyderabad ORR - Shamshabad", "NH44", {car:85, lcv:135, bus:285, mav:440}],
  [17.2000, 78.5500, "Shadnagar", "NH44", {car:70, lcv:115, bus:245, mav:380}],
  [16.8000, 78.5000, "Kurnool Road", "NH44", {car:70, lcv:115, bus:245, mav:380}],
  [16.3000, 78.3000, "Kurnool", "NH44", {car:65, lcv:105, bus:230, mav:355}],
  [15.8000, 78.0500, "Kurnool South", "NH44", {car:65, lcv:105, bus:230, mav:355}],
  [15.0000, 78.0000, "Kadapa", "NH44", {car:65, lcv:105, bus:230, mav:355}],
  [14.5000, 78.5000, "Rayachoti", "NH44", {car:60, lcv:100, bus:215, mav:335}],
  [14.0000, 79.0000, "Chitoor", "NH44", {car:65, lcv:105, bus:230, mav:355}],
  [13.6500, 79.4000, "Tirupati", "NH44", {car:70, lcv:115, bus:245, mav:380}],
  [16.5000, 80.6500, "Vijayawada", "NH65", {car:75, lcv:120, bus:260, mav:400}],
  [17.0000, 81.8000, "Rajahmundry", "NH16", {car:65, lcv:105, bus:230, mav:355}],
  [17.7000, 83.2000, "Visakhapatnam", "NH16", {car:75, lcv:120, bus:260, mav:400}],
  [15.5000, 80.0500, "Ongole", "NH16", {car:60, lcv:100, bus:215, mav:335}],
  [14.4500, 79.9900, "Nellore", "NH16", {car:65, lcv:105, bus:230, mav:355}],

  // Rajasthan
  [26.9500, 75.7500, "Jaipur - Ajmer Road", "NH48", {car:75, lcv:120, bus:260, mav:400}],
  [26.5000, 74.7000, "Ajmer", "NH48", {car:65, lcv:105, bus:230, mav:355}],
  [26.3000, 73.0500, "Jodhpur", "NH62", {car:65, lcv:105, bus:230, mav:355}],
  [24.6000, 73.7000, "Udaipur", "NH48", {car:65, lcv:105, bus:230, mav:355}],
  [27.2000, 76.0000, "Jaipur - Delhi Road", "NH48", {car:80, lcv:130, bus:275, mav:425}],
  [27.5000, 76.6000, "Alwar", "NH48", {car:70, lcv:115, bus:245, mav:380}],
  [25.2000, 75.8500, "Kota", "NH52", {car:65, lcv:105, bus:230, mav:355}],

  // Uttar Pradesh
  [28.4000, 77.3500, "Noida - Greater Noida", "NH24", {car:90, lcv:145, bus:305, mav:470}],
  [28.5500, 77.4500, "Ghaziabad", "NH24", {car:85, lcv:135, bus:285, mav:440}],
  [28.0000, 78.0000, "Aligarh", "NH2", {car:70, lcv:115, bus:245, mav:380}],
  [27.2000, 78.0000, "Agra", "NH2", {car:80, lcv:130, bus:275, mav:425}],
  [26.8500, 80.9500, "Lucknow", "NH2", {car:75, lcv:120, bus:260, mav:400}],
  [26.4500, 80.3500, "Kanpur", "NH2", {car:70, lcv:115, bus:245, mav:380}],
  [25.4500, 81.8500, "Prayagraj", "NH2", {car:70, lcv:115, bus:245, mav:380}],
  [25.3200, 82.9700, "Varanasi", "NH2", {car:75, lcv:120, bus:260, mav:400}],
  [27.5000, 77.6700, "Mathura", "NH2", {car:65, lcv:105, bus:230, mav:355}],

  // Gujarat
  [23.0500, 72.5500, "Ahmedabad - Vadodara Exp", "NH48", {car:85, lcv:135, bus:285, mav:440}],
  [22.3000, 73.2000, "Vadodara", "NH48", {car:75, lcv:120, bus:260, mav:400}],
  [21.2000, 72.8500, "Surat", "NH48", {car:80, lcv:130, bus:275, mav:425}],
  [22.3000, 70.8000, "Rajkot", "NH27", {car:65, lcv:105, bus:230, mav:355}],
  [21.8500, 73.7200, "Statue of Unity Road", "NH56", {car:60, lcv:100, bus:215, mav:335}],
  [23.2200, 72.6400, "Gandhinagar", "NH48", {car:70, lcv:115, bus:245, mav:380}],

  // Madhya Pradesh
  [23.2600, 77.4100, "Bhopal", "NH46", {car:70, lcv:115, bus:245, mav:380}],
  [22.7200, 75.8600, "Indore", "NH52", {car:70, lcv:115, bus:245, mav:380}],
  [23.1800, 79.9900, "Jabalpur", "NH7", {car:65, lcv:105, bus:230, mav:355}],
  [26.2200, 78.1800, "Gwalior", "NH44", {car:70, lcv:115, bus:245, mav:380}],
  [23.1800, 75.7900, "Ujjain", "NH52", {car:60, lcv:100, bus:215, mav:335}],

  // West Bengal & Odisha
  [22.6000, 88.4000, "Kolkata - Dankuni", "NH2", {car:80, lcv:130, bus:275, mav:425}],
  [22.3500, 87.8500, "Kolaghat", "NH6", {car:65, lcv:105, bus:230, mav:355}],
  [21.5000, 87.0000, "Kharagpur", "NH6", {car:65, lcv:105, bus:230, mav:355}],
  [20.3000, 85.8200, "Bhubaneswar", "NH16", {car:70, lcv:115, bus:245, mav:380}],
  [19.8100, 85.8300, "Puri Road", "NH316", {car:55, lcv:90, bus:195, mav:305}],

  // Delhi & Haryana
  [28.6500, 77.1500, "Delhi - Gurugram", "NH48", {car:90, lcv:145, bus:305, mav:470}],
  [28.4600, 77.0300, "Gurugram - Manesar", "NH48", {car:85, lcv:135, bus:285, mav:440}],
  [28.2000, 76.8000, "Dharuhera", "NH48", {car:75, lcv:120, bus:260, mav:400}],
  [28.9000, 77.0000, "Kundli", "NH44", {car:80, lcv:130, bus:275, mav:425}],
  [29.4000, 76.9600, "Panipat", "NH44", {car:70, lcv:115, bus:245, mav:380}],
  [29.7000, 76.9800, "Karnal", "NH44", {car:70, lcv:115, bus:245, mav:380}],
  [30.0000, 76.8500, "Ambala", "NH44", {car:70, lcv:115, bus:245, mav:380}],

  // Punjab
  [30.7300, 76.7800, "Chandigarh - Zirakpur", "NH22", {car:75, lcv:120, bus:260, mav:400}],
  [30.9000, 75.8600, "Ludhiana", "NH1", {car:70, lcv:115, bus:245, mav:380}],
  [31.3300, 75.5800, "Jalandhar", "NH1", {car:65, lcv:105, bus:230, mav:355}],
  [31.6300, 74.8700, "Amritsar", "NH1", {car:75, lcv:120, bus:260, mav:400}],

  // Uttarakhand
  [30.3200, 78.0300, "Dehradun", "NH7", {car:65, lcv:105, bus:230, mav:355}],
  [29.9500, 78.1600, "Haridwar", "NH7", {car:60, lcv:100, bus:215, mav:335}],
  [29.0000, 79.5000, "Haldwani", "NH9", {car:60, lcv:100, bus:215, mav:335}],

  // Bihar
  [25.6100, 85.1400, "Patna", "NH30", {car:70, lcv:115, bus:245, mav:380}],
  [25.0300, 85.4200, "Rajgir Road", "NH82", {car:55, lcv:90, bus:195, mav:305}],
  [24.8000, 85.0000, "Gaya", "NH2", {car:65, lcv:105, bus:230, mav:355}],

  // Goa
  [15.4000, 74.0000, "Goa - Anmod Ghat", "NH4A", {car:60, lcv:100, bus:215, mav:335}],
  [15.5000, 73.8300, "Panaji", "NH66", {car:55, lcv:90, bus:195, mav:305}],

  // Himachal Pradesh
  [31.1000, 77.1700, "Shimla - Shogi", "NH5", {car:60, lcv:100, bus:215, mav:335}],
  [31.5000, 76.9000, "Bilaspur", "NH21", {car:55, lcv:90, bus:195, mav:305}],

  // Assam & NE
  [26.1400, 91.7400, "Guwahati", "NH37", {car:65, lcv:105, bus:230, mav:355}],
  [26.7500, 94.2000, "Jorhat", "NH37", {car:55, lcv:90, bus:195, mav:305}]
];
