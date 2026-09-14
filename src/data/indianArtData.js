// Complete Dataset of 28 Indian States & Their Art Traditions
// For Educational College Assignment (CO1) - Interactive Art Map of India
// High-Resolution Local Cultural Heritage Archival Artwork Collection

export const ART_CATEGORIES = [
  "All",
  "Top 5 Featured",
  "Painting",
  "Textile",
  "Tribal Art",
  "Religious Art",
  "Folk Art",
  "Craft"
];

export const INDIAN_ART_DATA = [
  {
    id: "AP",
    state: "Andhra Pradesh",
    location: "Lepakshi",
    artForm: "Kalamkari",
    artForms: [
      { name: "Kalamkari", type: "Textile", desc: "Hand-painted & block-printed cotton fabric using natural vegetable dyes with themes from Hindu epics." },
      { name: "Lepakshi Mural Painting", type: "Painting", desc: "Vijayanagara-era fresco paintings on temple walls depicting mythological narratives and court scenes." },
      { name: "Kondapalli Toys", type: "Craft", desc: "Lightweight softwood toys carved and painted by artisans in Kondapalli depicting deities, animals, and village life." },
      { name: "Budithi Brass Craft", type: "Craft", desc: "Traditional bell-metal and brass casting tradition from Budithi village, creating lamps, idols, and utensils." }
    ],
    category: "Textile",
    isFeatured: false,
    coordinates: [13.8044, 77.6074],
    description: "Temple murals, Kalamkari textiles and the artistic traditions of Lepakshi.",
    historicalContext: "Lepakshi is famous for its Vijayanagara-period temple architecture and paintings. Kalamkari developed under the patronage of Vijayanagara rulers and later the Golconda sultans.",
    keyFeatures: [
      "Hand-painted and block-printed textiles",
      "Use of 100% natural vegetable & mineral dyes",
      "Depiction of scenes from Ramayana, Mahabharata & Puranas",
      "Intricate bamboo pen (kalam) linework"
    ],
    culturalSignificance: "One of India's oldest surviving textile art forms, connecting sacred temple murals directly to wearable visual narrative craft.",
    relatedArtworks: ["Veerabhadra Temple Murals", "Srikalahasti Kalamkari Hangings", "Pedana Block Prints"],
    images: [
      { url: "/assets/artworks/ap_kalamkari.jpg", alt: "Kalamkari Fabric Art", caption: "Archival Photograph – Authentic Kalamkari hand-painted textile depicting Tree of Life and mythological narratives (National Museum Archives)" },
      { url: "/assets/artworks/ap_2.jpg", alt: "Lepakshi Temple Mural Fresco", caption: "Archival Photograph – Magnificent Vijayanagara-era Lepakshi Temple fresco ceiling mural painting" },
      { url: "/assets/artworks/ap_3.jpg", alt: "Kondapalli Wooden Toys", caption: "Archival Photograph – Traditional Kondapalli softwood hand-carved and painted toy figurines from Vijayawada" }
    ]
  },
  {
    id: "AR",
    state: "Arunachal Pradesh",
    location: "Tawang",
    artForm: "Buddhist Art",
    artForms: [
      { name: "Thangka Painting", type: "Religious Art", desc: "Sacred scroll paintings on cotton or silk depicting Buddhist deities, mandalas, and spiritual narratives." },
      { name: "Monpa Woodcarving", type: "Craft", desc: "Intricate wood sculptures of deities, prayer wheels, and religious symbols crafted by Monpa artisans." },
      { name: "Cham Mask Making", type: "Folk Art", desc: "Elaborate painted and carved masks used during sacred Cham dance performances at monasteries." },
      { name: "Wancho Bead Jewellery", type: "Craft", desc: "Traditional glass and brass bead ornamentation signifying tribal rank and identity among Wancho Naga communities." }
    ],
    category: "Religious Art",
    isFeatured: false,
    coordinates: [27.5861, 91.8594],
    description: "Thangka paintings, monastery murals and Buddhist sculptures.",
    historicalContext: "Tawang is an important centre of Himalayan Buddhist artistic traditions, heavily influenced by Monpa culture and Mahayana-Vajrayana Buddhism.",
    keyFeatures: [
      "Thangka scroll paintings on silk or cotton canvas",
      "Sacred geometric mandalas and iconometric proportions",
      "Vibrant mineral pigments accented with ground gold leaf",
      "Detailed wooden masks for sacred Cham dances"
    ],
    culturalSignificance: "Tawang Monastery, founded in 1680, houses centuries of Himalayan sacred scroll paintings that aid Buddhist meditation and spiritual teaching.",
    relatedArtworks: ["Tawang Monastery Wall Murals", "Monpa Woodcarvings", "Cham Sacred Masks"],
    images: [
      { url: "/assets/artworks/ar_thangka.jpg", alt: "Himalayan Buddhist Thangka Painting", caption: "Archival Photograph – Sacred Himalayan Buddhist Thangka scroll painting depicting Buddha and cosmic mandala" },
      { url: "/assets/artworks/ar_2.jpg", alt: "Tawang Monastery Thangka Mural", caption: "Archival Photograph – Authentic Thangka painting depicting Buddhist parable of Four Harmonious Friends, Tawang Monastery" },
      { url: "/assets/artworks/ar_3.jpg", alt: "Buddhist Prayer Wheels Arunachal", caption: "Archival Photograph – Traditional brass Buddhist spinning prayer wheels from monastery" }
    ]
  },
  {
    id: "AS",
    state: "Assam",
    location: "Majuli",
    artForm: "Sattriya and Mask Art",
    artForms: [
      { name: "Sattriya Mask Art", type: "Folk Art", desc: "Large bamboo, cane and cloth masks made in Majuli sattras for spiritual theatrical performances." },
      { name: "Muga Silk Weaving", type: "Textile", desc: "Rare golden natural silk fabric woven exclusively in Assam, considered one of the world's finest luxury textiles." },
      { name: "Bihu Gamosa Weaving", type: "Textile", desc: "Handwoven cotton towel with red-on-white motifs gifted as a mark of honour and love during Bihu festivals." },
      { name: "Bark Manuscript Painting", type: "Painting", desc: "Devotional illustrations on sanchipat (bark) manuscripts depicting scenes from Bhagavata Purana." }
    ],
    category: "Folk Art",
    isFeatured: false,
    coordinates: [26.9500, 94.1667],
    description: "Traditional masks, Sattriya performance traditions and Vaishnavite art.",
    historicalContext: "Majuli's monasteries (Sattras) preserve the artistic traditions associated with the 15th-century Neo-Vaishnavite movement pioneered by saint Srimanta Sankardev.",
    keyFeatures: [
      "Handcrafted bamboo, cane, clay and cloth masks (Mukha)",
      "Three distinct mask sizes: Cho-mukha, Lotokoi & Mukh-mukha",
      "Devotional manuscript paintings on Sanchi bark",
      "Natural organic dyes from indigo, turmeric & clay"
    ],
    culturalSignificance: "Majuli's riverine Sattras keep alive a living medieval performance art and mask-making craft recognized globally for spiritual theatrical storytelling.",
    relatedArtworks: ["Samaguri Sattra Mask Collection", "Chitra Bhagavata Manuscripts", "Bhaona Props"],
    images: [
      { url: "/assets/artworks/as_sattriya.jpg", alt: "Majuli Island Sattriya Mukha Masks", caption: "Archival Photograph – Authentic handcrafted Sattriya Mukha masks (Garuda and characters) from Samaguri Sattra, Majuli Island" },
      { url: "/assets/artworks/as_2.jpg", alt: "Assamese Muga Silk Golden Textile", caption: "Archival Photograph – Authentic Assamese Muga golden silk saree with traditional Japi decoration" },
      { url: "/assets/artworks/as_3.jpg", alt: "Bihu Dance Festival Performance", caption: "Archival Photograph – Traditional Bihu dance performance showcasing Assam's rich cultural heritage" }
    ]
  },
  {
    id: "BH",
    state: "Bihar",
    location: "Madhubani",
    artForm: "Madhubani Painting",
    artForms: [
      { name: "Madhubani Painting", type: "Folk Art", desc: "Mithila folk painting featuring double linework, geometric infills, and themes from Hindu mythology." },
      { name: "Sujni Embroidery", type: "Textile", desc: "Multi-layered kantha-style embroidery depicting village life, festivals, and social narratives on old sarees." },
      { name: "Sikki Grass Craft", type: "Craft", desc: "Golden grass weaving tradition from North Bihar creating baskets, dolls, and ornamental household items." },
      { name: "Manjusha Art", type: "Folk Art", desc: "Serpent worship-themed box paintings from Anga region with unique elongated forms and snakebite legend narratives." }
    ],
    category: "Folk Art",
    isFeatured: true,
    coordinates: [26.3534, 86.0718],
    description: "Mithila paintings featuring mythology, nature, animals and geometric patterns.",
    historicalContext: "Madhubani painting developed as a traditional folk-art practice by women in the Mithila region of Bihar, traditionally painted on freshly plastered mud walls during festivals.",
    keyFeatures: [
      "Distinctive double linework outlining all figures",
      "Filling patterns using geometric grids, dots, and cross-hatching",
      "Themes from Hindu epics (Radha-Krishna, Ram-Sita) and nature symbols",
      "Painted with twigs, nibs, matchsticks and natural pigments"
    ],
    culturalSignificance: "A vibrant matriarchal folk art heritage that transformed from domestic ritual wall murals into globally celebrated fine art paintings.",
    relatedArtworks: ["Kohbar Ghar Marriage Murals", "Tree of Life Mithila Series", "Krishna Leela Prints"],
    images: [
      { url: "/assets/artworks/madhubani.png", alt: "Madhubani Painting of Radha Krishna", caption: "Archival Photograph – Authentic Madhubani (Mithila) painting depicting nature and divine Radha-Krishna legends (National Museum Archives)" },
      { url: "/assets/artworks/bh_2.jpg", alt: "Madhubani Painting Radha Krishna", caption: "Archival Photograph – Authentic Mithila Madhubani painting depicting Radha and Krishna from heritage collection" },
      { url: "/assets/artworks/bh_3.jpg", alt: "Sikki Grass Craft Bihar", caption: "Archival Photograph – Artisan Nazda Khatun creating traditional Sikki golden grass weaving craft" }
    ]
  },
  {
    id: "CT",
    state: "Chhattisgarh",
    location: "Bastar",
    artForm: "Bastar Tribal Art",
    artForms: [
      { name: "Dhokra Metal Casting", type: "Tribal Art", desc: "Ancient 4,000-year-old lost-wax bronze casting tradition creating tribal figurines, lamps, and deity forms." },
      { name: "Bastar Wood Carving", type: "Craft", desc: "Teakwood and salwood relief carvings of tribal deities, totems, animals, and ceremonial pillars." },
      { name: "Godna Tattoo Art", type: "Tribal Art", desc: "Traditional body tattooing practiced by tribal women as identity, spiritual protection, and decorative expression." },
      { name: "Gondi Painting", type: "Painting", desc: "Dot-filled pattern paintings on paper by Gond tribal artists depicting forest deities, flora, and celestial beings." }
    ],
    category: "Tribal Art",
    isFeatured: false,
    coordinates: [19.0744, 82.0210],
    description: "Dhokra metalwork, wood carving and tribal crafts.",
    historicalContext: "Bastar is known for the artistic traditions of its indigenous communities, particularly the Ghotul traditions, Dhokra bronze casters, and terracotta artisans.",
    keyFeatures: [
      "Ancient lost-wax metal casting (Dhokra / Bell Metal)",
      "Elongated stylized figures of deities, tribal musicians & animals",
      "Handcrafted wrought iron work (Loha Shilp)",
      "Intricate teakwood and rosewood relief carvings"
    ],
    culturalSignificance: "Dhokra casting is an unbroken 4,000-year-old metallurgic art technique directly linked to the Indus Valley Civilisation's Dancing Girl.",
    relatedArtworks: ["Dhokra Tribal Deities", "Bastar Elephant & Horse Figurines", "Wrought Iron Deer Sculptures"],
    images: [
      { url: "/assets/artworks/ct_dhokra.jpg", alt: "Bastar Dhokra Bronze Casting", caption: "Archival Photograph – 4,000-year-old lost-wax Bastar Dhokra bell-metal sculpture of ceremonial elephant with riders" },
      { url: "/assets/artworks/ct_2.jpg", alt: "Bastar Tribal Community Art", caption: "Archival Photograph – Authentic Dhurwa tribe of Bastar showcasing traditional artistic and cultural heritage" },
      { url: "/assets/artworks/ct_3.jpg", alt: "Bastar Dhokra Artisan Workshop", caption: "Archival Photograph – Bastar Dhokra lost-wax bronze casting artisan at traditional workshop" }
    ]
  },
  {
    id: "GA",
    state: "Goa",
    location: "Old Goa",
    artForm: "Indo-Portuguese Art",
    artForms: [
      { name: "Indo-Portuguese Church Art", type: "Religious Art", desc: "Syncretic Baroque sacred art featuring gilded altarpieces, wooden ivory statues, and church frescoes." },
      { name: "Azulejo Tile Painting", type: "Craft", desc: "Hand-painted blue-and-white ceramic wall tiles introduced by the Portuguese, depicting landscapes and biblical scenes." },
      { name: "Kunbi Weaving", type: "Textile", desc: "Ancient checked cotton sari weaving by indigenous Kunbi tribal women, revived as Goa's cultural textile heritage." },
      { name: "Goan Xit (Shell Art)", type: "Craft", desc: "Decorative art using conch shells, sea glass, and natural materials creating ornamental panels and home decor." }
    ],
    category: "Religious Art",
    isFeatured: false,
    coordinates: [15.5037, 73.9118],
    description: "Church architecture, religious paintings and Portuguese-influenced art.",
    historicalContext: "Goa developed a distinctive artistic culture from the 16th century onwards through the syncretic interaction of Indian artisan techniques and European Mannerist & Baroque styles.",
    keyFeatures: [
      "Ornate gilded wooden altarpieces (Retablos)",
      "Hand-painted ceramic tiles (Azulejos)",
      "Polychrome wooden ivory and teak statues of saints",
      "Church frescoes incorporating native Indian flora motifs"
    ],
    culturalSignificance: "Reflects a historic artistic dialogue between East and West, giving rise to unique Goan Christian sacred art aesthetics.",
    relatedArtworks: ["Basilica of Bom Jesus Altarpiece", "Se Cathedral Murals", "Goan Azulejo Tile Panels"],
    images: [
      { url: "/assets/artworks/ga_azulejos.jpg", alt: "Goan Azulejo Ceramic Painted Tiles", caption: "Archival Photograph – Authentic Indo-Portuguese cobalt blue Azulejo hand-painted glazed ceramic wall tiles" },
      { url: "/assets/artworks/ga_2.jpg", alt: "Basilica of Bom Jesus Interior", caption: "Archival Photograph – Ornate gilded Baroque interior of Basilica of Bom Jesus, Old Goa (UNESCO World Heritage Site)" },
      { url: "/assets/artworks/ga_3.jpg", alt: "Indo-Portuguese Goan Church Art", caption: "Archival Photograph – Indo-Portuguese syncretic Christian art with native Indian artistic influences, Old Goa" }
    ]
  },
  {
    id: "GJ",
    state: "Gujarat",
    location: "Ahmedabad",
    artForm: "Patola and Rogan Art",
    artForms: [
      { name: "Patola Weaving", type: "Textile", desc: "Double-ikat silk sarees from Patan where both warp and weft are individually resist-dyed before weaving." },
      { name: "Rogan Art", type: "Painting", desc: "Castor-oil paint art drawn with a metal rod from Kutch, never touching the canvas — only one family preserves this tradition." },
      { name: "Mata ni Pachedi", type: "Folk Art", desc: "Sacred cloth painting tradition depicting the Mother Goddess, created by the Vaghari community for shrine decoration." },
      { name: "Kutch Embroidery (Abhla Bharat)", type: "Textile", desc: "Mirror-work embroidery tradition from Kutch featuring intricate geometric designs stitched with tiny circular mirrors." }
    ],
    category: "Textile",
    isFeatured: false,
    coordinates: [23.0225, 72.5714],
    description: "Patola weaving, Rogan painting and textile traditions.",
    historicalContext: "Gujarat has a multi-millennial history of highly developed textile and decorative arts, ranging from Patan Patola double-ikat weaving to Nirona's rare Rogan painting.",
    keyFeatures: [
      "Double-Ikat Patola weaving where warp and weft are individually dyed",
      "Rogan art using boiled castor oil paint applied with a stylus",
      "Intricate mirrorwork embroidery (Abhla Bharat)",
      "Mata ni Pachedi sacred painted ritual cloths"
    ],
    culturalSignificance: "Patola was historically cherished as a symbol of royal prestige, while Rogan painting represents an endangered Persian-origin craft preserved by a single family in Kutch.",
    relatedArtworks: ["Patan Double-Ikat Sarees", "Rogan Tree of Life Panels", "Mata ni Pachedi Scrolls"],
    images: [
      { url: "/assets/artworks/gj_rogan.jpg", alt: "Rogan Art Tree of Life", caption: "Archival Photograph – Authentic Rogan painting on dark cloth created with castor-oil and stylus from Nirona, Kutch" },
      { url: "/assets/artworks/gj_2.jpg", alt: "Patan Patola Double Ikat Silk", caption: "Archival Photograph – Authentic Patan Patola double-ikat resist-dyed silk saree from museum textile collection" },
      { url: "/assets/artworks/gj_3.jpg", alt: "Kutch Mirror Work Embroidery", caption: "Archival Photograph – Intricate Kutch Abhla Bharat mirror-work embroidery stitched cotton textile" }
    ]
  },
  {
    id: "HR",
    state: "Haryana",
    location: "Kurukshetra",
    artForm: "Sanji Art",
    artForms: [
      { name: "Sanji Art", type: "Folk Art", desc: "Intricate paper and mud cut-out decorations made during Sharad Purnima, depicting Radha-Krishna and lotus motifs." },
      { name: "Phulkari Embroidery", type: "Textile", desc: "Bright floral embroidery on coarse cotton fabric, shared with Punjab, used for women's shawls and festival wear." },
      { name: "Pottery and Terracotta", type: "Craft", desc: "Traditional red clay pottery with painted geometric bands made across Haryana's rural communities." },
      { name: "Haryanvi Durrie Weaving", type: "Textile", desc: "Flat woven cotton rugs with bold geometric patterns and bright colours created on pit looms in village households." }
    ],
    category: "Folk Art",
    isFeatured: false,
    coordinates: [29.9695, 76.8783],
    description: "Traditional embroidery, murals and regional crafts.",
    historicalContext: "Haryana's artistic traditions are closely connected with rural life, seasonal festivals, pastoral culture, and epic themes from the Mahabharata.",
    keyFeatures: [
      "Sanji wall murals made with mud, cow dung, and painted motifs",
      "Traditional woven floor coverings (Durries) with bold geometric patterns",
      "Handcrafted wooden furniture and turned lacquerware",
      "Phulkari-influenced domestic embroidery on shawls and dupattas"
    ],
    culturalSignificance: "Captures the unpretentious warmth of agrarian life, turning everyday household objects into colorful canvases of regional pride.",
    relatedArtworks: ["Sanji Festival Wall Reliefs", "Haryanvi Geometric Durries", "Terracotta Folk Idols"],
    images: [
      { url: "/assets/artworks/hr_sanji.jpg", alt: "Haryana Sanjhi Art & Crafts", caption: "Archival Photograph – Authentic Sanjhi paper and mud stencil cut-out folk art of Haryana" },
      { url: "/assets/artworks/hr_2.jpg", alt: "Surajkund Crafts Mela Pottery", caption: "Archival Photograph – Artisans at work at Surajkund International Crafts Mela, Haryana" },
      { url: "/assets/artworks/hr_3.jpg", alt: "Haryana Traditional Craft Heritage", caption: "Archival Photograph – Traditional folk craft display representing Haryana's rural cultural heritage" }
    ]
  },
  {
    id: "HP",
    state: "Himachal Pradesh",
    location: "Kangra",
    artForm: "Kangra Miniature Painting",
    artForms: [
      { name: "Kangra Miniature Painting", type: "Painting", desc: "Lyrical Pahari school paintings depicting Radha-Krishna, landscapes, and Gita Govinda with luminous pigments." },
      { name: "Chamba Rumal Embroidery", type: "Textile", desc: "Silk thread embroidery on muslin from Chamba depicting scenes from Mahabharata and Ramayana in double-sided technique." },
      { name: "Kullu Shawl Weaving", type: "Textile", desc: "Handwoven wool shawls from Kullu valley with vibrant geometric border bands in traditional and contemporary patterns." },
      { name: "Chamba Leather Craft", type: "Craft", desc: "Intricately punched and painted leather shoes (chappals) and belts with floral motifs from Chamba craftsmen." }
    ],
    category: "Painting",
    isFeatured: true,
    coordinates: [32.0998, 76.2691],
    description: "Pahari miniature paintings featuring Krishna, Radha, landscapes and romantic themes.",
    historicalContext: "Kangra became the paramount centre of Pahari miniature painting in the 18th century under the visionary patronage of Maharaja Sansar Chand.",
    keyFeatures: [
      "Lyrical treatment of human figures with delicate facial features",
      "Ethereal depictions of Himalayan lush green hills and flowering trees",
      "Luminous pigments derived from crushed stones, minerals, and pure gold",
      "Themes centered on Jayadeva's Gita Govinda, Rasikapriya & Bhagavata Purana"
    ],
    culturalSignificance: "Renowned globally for its poetic sweetness, soft emotional intensity, and sublime blending of natural landscape with romantic devotion.",
    relatedArtworks: ["Gita Govinda Kangra Series", "Nala Damayanti Manuscripts", "Bihari Satsai Miniatures"],
    images: [
      { url: "/assets/artworks/hp_kangra.jpg", alt: "Kangra Pahari Miniature Painting", caption: "Archival Photograph – 18th Century Kangra Pahari Miniature Masterpiece depicting Radha and Krishna (Tokyo National Museum)" },
      { url: "/assets/artworks/hp_2.jpg", alt: "Chamba Rumal Silk Embroidery", caption: "Archival Photograph – Museum specimen Chamba Rumal double-sided silk thread embroidery depicting Rasleela" },
      { url: "/assets/artworks/hp_3.jpg", alt: "Pahari Painting Radha and Sakhi", caption: "Archival Photograph – Pahari school miniature painting depicting Radha and confidante in lush natural setting" }
    ]
  },
  {
    id: "JH",
    state: "Jharkhand",
    location: "Hazaribagh",
    artForm: "Sohrai and Khovar",
    artForms: [
      { name: "Sohrai Painting", type: "Tribal Art", desc: "Sgraffito mud wall art made by tribal women at harvest using earth pigments and comb-scraping techniques." },
      { name: "Khovar Painting", type: "Tribal Art", desc: "Bridal chamber wall art created in geometric patterns with white clay and natural pigments for wedding ceremonies." },
      { name: "Dokra Metal Craft", type: "Craft", desc: "Lost-wax bronze figurines of tribal deities, elephants and earrings made by Dhokra communities of Jharkhand." },
      { name: "Paitkar Scroll Painting", type: "Painting", desc: "Scroll paintings by Chitrakars narrating the journey of the soul after death, used during death rituals." }
    ],
    category: "Tribal Art",
    isFeatured: false,
    coordinates: [23.9925, 85.3637],
    description: "Traditional tribal wall paintings using natural pigments and geometric/natural motifs.",
    historicalContext: "These ritualistic painting traditions are practiced by indigenous Kurmi, Santhal, and Munda tribal women in Hazaribagh to celebrate harvest and marriage seasons.",
    keyFeatures: [
      "Sgraffito technique: scraping wet white clay to reveal underlying dark earth coat",
      "Use of four natural earth ochres (red, yellow, black manganese, white kaolin)",
      "Sohrai highlights winter harvest and animal welfare with horned bull figures",
      "Khovar celebrates fertility and marriage with plant and bird motifs"
    ],
    culturalSignificance: "A UNESCO-recognized indigenous art form whose prehistoric rock-art aesthetic roots stretch back thousands of years.",
    relatedArtworks: ["Hazaribagh Mud Wall Murals", "Sohrai Harvest Panels", "Khovar Bridal Chamber Murals"],
    images: [
      { url: "/assets/artworks/jh_sohrai.jpg", alt: "Sohrai Tribal Wall Painting", caption: "Archival Photograph – Authentic Sohrai harvest tribal earth-pigment floral wall painting from Hazaribagh" },
      { url: "/assets/artworks/jh_2.jpg", alt: "Sohrai Mural Munda Village Wall", caption: "Archival Photograph – Munda tribesman with Sohrai-style wall paintings at Isko Village, Hazaribagh" },
      { url: "/assets/artworks/jh_3.jpg", alt: "Jadupatua Santhal Scroll Painting", caption: "Archival Photograph – Traditional Santhal Jadupatua narrative scroll painting on paper" }
    ]
  },
  {
    id: "KA",
    state: "Karnataka",
    location: "Mysuru",
    artForm: "Mysore Painting",
    artForms: [
      { name: "Mysore Painting", type: "Painting", desc: "Classical gold-leaf embossed court paintings from Mysore with refined subdued colors and gesso-relief detailing." },
      { name: "Bidriware Craft", type: "Craft", desc: "Silver inlay on black zinc-alloy metal craft from Bidar, featuring intricate floral and arabesque motifs." },
      { name: "Ilkal Saree Weaving", type: "Textile", desc: "Handloom silk-cotton sarees from Ilkal town with distinctive red and white topi-style pallu border." },
      { name: "Channapatna Lacquerware", type: "Craft", desc: "Brightly lacquered turned-wood toys, bowls and dolls from Channapatna — known as Gombe Ooru (Town of Dolls)." }
    ],
    category: "Painting",
    isFeatured: false,
    coordinates: [12.2958, 76.6394],
    description: "Traditional paintings using gold leaf and devotional subjects.",
    historicalContext: "Mysore painting flourished under the patronage of the Vijayanagara empire and later reached its peak under the Wodeyar rulers of Mysuru.",
    keyFeatures: [
      "Delicate gesso embossing (Ganjifa plaster paste) overlaid with thin gold leaf",
      "Muted, subdued color tones creating a peaceful, understated elegance",
      "Focus on Hindu deities, epic scenes, and royal portraits",
      "Smooth finish without heavy gemstone encrustation"
    ],
    culturalSignificance: "Distinguished by refined craftsmanship and poetic restraint, Mysore paintings remain a cornerstone of South Indian classical heritage.",
    relatedArtworks: ["Raja Wodeyar Devotional Panels", "Ganjifa Card Paintings", "Sritattvanidhi Illustrated Codex"],
    images: [
      { url: "/assets/artworks/ka_mysore.jpg", alt: "Mysore Traditional Ganjifa Painting", caption: "Archival Photograph – Master Mysore Ganjifa playing card artwork with delicate gesso and gold leaf detailing" },
      { url: "/assets/artworks/ka_2.jpg", alt: "Bidriware Silver Inlay Craft", caption: "Archival Photograph – 17th century Bidriware silver inlay ewer (Victoria & Albert Museum, London)" },
      { url: "/assets/artworks/ka_3.jpg", alt: "Channapatna Lacquered Wood Toys", caption: "Archival Photograph – Brightly lacquered Channapatna wooden toys and dolls from Gombe Ooru" }
    ]
  },
  {
    id: "KL",
    state: "Kerala",
    location: "Thiruvananthapuram",
    artForm: "Kerala Mural",
    artForms: [
      { name: "Kerala Mural Painting", type: "Religious Art", desc: "Temple fresco-secco murals using Panchavarna (five natural colour) palette depicting Hindu mythology." },
      { name: "Kathakali Costume Art", type: "Folk Art", desc: "Elaborate face-painting (chutti) and ornamental headgear (kireeta) as visual art forms of Kathakali dance." },
      { name: "Kasavu Saree Weaving", type: "Textile", desc: "Handloom off-white cotton saree with golden zari border woven in Chendamangalam and Balaramapuram." },
      { name: "Aranmula Kannadi (Mirror)", type: "Craft", desc: "Surface-reflection metal alloy mirror of unique bell-metal composition, made only in Aranmula, Kerala." }
    ],
    category: "Religious Art",
    isFeatured: false,
    coordinates: [8.5241, 76.9366],
    description: "Temple murals depicting Hindu mythology and religious stories.",
    historicalContext: "Kerala developed a distinct temple mural painting style between the 9th and 18th centuries, adorning sanctums, palaces, and churches across the state.",
    keyFeatures: [
      "Strict adherence to Panchavarna: five natural colors (Red, Yellow, Green, Black, White)",
      "Bold rounded contours, expressive almond-shaped eyes, and stylized poses",
      "Pigments sourced entirely from minerals, stones, and vegetable juices",
      "Dynamic multi-figured epic narratives from Ramayana and Bhagavata"
    ],
    culturalSignificance: "Preserved in iconic sites like Mattancherry Palace and Padmanabhaswamy Temple, these murals represent Kerala's classical visual canon.",
    relatedArtworks: ["Mattancherry Palace Murals", "Padmanabhapuram Palace Murals", "Vadakkunnathan Temple Frescoes"],
    images: [
      { url: "/assets/artworks/kl_mural.jpg", alt: "Kerala Temple Mural Gajendra Moksham", caption: "Archival Photograph – Classical Kerala Panchavarna temple mural painting from Krishnapuram Palace, Kayamkulam" },
      { url: "/assets/artworks/kl_2.jpg", alt: "Kathakali Face Makeup Divine Manifestation", caption: "Archival Photograph – Classical Kathakali performer's elaborate green face-painting (Chutti) and ornamental headgear" },
      { url: "/assets/artworks/kl_3.jpg", alt: "Aranmula Kannadi Metal Mirror", caption: "Archival Photograph – Authentic Aranmula Kannadi surface-reflection bell-metal mirror made only in Aranmula" }
    ]
  },
  {
    id: "MP",
    state: "Madhya Pradesh",
    location: "Mandla",
    artForm: "Gond Art",
    artForms: [
      { name: "Gond Painting", type: "Tribal Art", desc: "Vivid dot-and-line pattern paintings by Pardhan Gond community depicting sacred trees, birds, and village deities." },
      { name: "Bagh Print", type: "Textile", desc: "Natural dye block-printing on cotton from Bagh village using geometric patterns in red and black tones." },
      { name: "Chanderi Weaving", type: "Textile", desc: "Gossamer-light handloom silk-cotton fabric from Chanderi featuring coin, floral and peacock motif borders." },
      { name: "Dhokra of Bastar / MP", type: "Craft", desc: "Tribal bronze lost-wax casting tradition making figurines, lamp stands and musical instrument representations." }
    ],
    category: "Tribal Art",
    isFeatured: true,
    coordinates: [22.5986, 80.3725],
    description: "Tribal paintings depicting animals, trees, nature and stories.",
    historicalContext: "Gond art stems from the Pardhan Gond tribal community of central India, who traditionally painted sacred songs and natural folklore on mud walls.",
    keyFeatures: [
      "Signature pattern fills composed of dots, dashes, fish scales & geometric lines",
      "Vibrant imagery of sacred Mahua trees, birds, wild animals, and village myths",
      "Sense of continuous movement and interconnectedness of all living things",
      "Pioneered into modern acrylic-on-canvas by master artist Jangarh Singh Shyam"
    ],
    culturalSignificance: "Believed that viewing good art brings good fortune; Gond art has evolved into one of India's most celebrated contemporary indigenous art forms worldwide.",
    relatedArtworks: ["Jangarh Kalam Masterpieces", "Tree of Life Gond Canvas", "Bird and Animal Fables"],
    images: [
      { url: "/assets/artworks/gond.png", alt: "Gond Tribal Canvas Art", caption: "Archival Photograph – Authentic Gond tribal pattern painting with intricate dot-and-dash infills (Manav Sangrahalaya Archives)" },
      { url: "/assets/artworks/mp_2.jpg", alt: "Bagh Print Natural Dye Block", caption: "Archival Photograph – Traditional natural dye wooden block printing textiles from Bagh village" },
      { url: "/assets/artworks/mp_3.jpg", alt: "Chanderi Handloom Silk Saree", caption: "Archival Photograph – Artisan weaving gossamer-light Chanderi silk-cotton handloom saree" }
    ]
  },
  {
    id: "MH",
    state: "Maharashtra",
    location: "Ajanta",
    artForm: "Buddhist Cave Paintings",
    artForms: [
      { name: "Ajanta Cave Murals", type: "Religious Art", desc: "Ancient tempera-technique murals (2nd BCE–5th CE) inside 30 rock-cut caves depicting Jataka tales of the Buddha." },
      { name: "Warli Painting", type: "Tribal Art", desc: "White rice paste geometric tribal paintings on red-brown mud walls by Warli people of Palghar district." },
      { name: "Paithani Saree Weaving", type: "Textile", desc: "Silk sarees from Paithan with pure zari body and tapestry-woven peacock, lotus and vine pallu designs." },
      { name: "Kolhapuri Chappal Craft", type: "Craft", desc: "Hand-stitched durable leather sandal craft with intricate leather punching and staining from Kolhapur." }
    ],
    category: "Religious Art",
    isFeatured: true,
    coordinates: [20.5519, 75.7033],
    description: "Ancient murals and sculptures depicting Buddhist stories and religious themes.",
    historicalContext: "The Ajanta Caves (2nd century BCE – 5th century CE) contain India's most celebrated ancient mural masterpieces, created under Satavahana and Vakataka patrons.",
    keyFeatures: [
      "Masterful tempera mural technique on rock-cut cave walls",
      "Narrative panels illustrating the Jataka tales of Buddha's previous lives",
      "Sophisticated volumetric shading, expressive hand gestures (mudras), and fluid lines",
      "World-famous representations of Bodhisattva Padmapani and Vajrapani"
    ],
    culturalSignificance: "A UNESCO World Heritage Site regarded as the supreme benchmark of classical Asian mural art, influencing art styles from Dunhuang to Sigiriya.",
    relatedArtworks: ["Bodhisattva Padmapani (Cave 1)", "Mahajanaka Jataka Mural", "The Temptation of Mara"],
    images: [
      { url: "/assets/artworks/warli.png", alt: "Warli Tribal Wall Painting", caption: "Archival Photograph – Authentic Warli rice-paste geometric Tarpa dance mural on mud wall" },
      { url: "/assets/artworks/mh_2.jpg", alt: "Ajanta Cave 1 Padmapani Bodhisattva", caption: "Archival Photograph – UNESCO World Heritage – 5th Century Bodhisattva Padmapani mural, Ajanta Cave 1" },
      { url: "/assets/artworks/mh_3.jpg", alt: "Paithani Silk Saree Peacock Pallu", caption: "Archival Photograph – Authentic Paithani silk saree with intricate zari peacock and parrot pallu motifs" }
    ]
  },
  {
    id: "MN",
    state: "Manipur",
    location: "Imphal",
    artForm: "Manipuri Art",
    artForms: [
      { name: "Manipuri Weaving (Moirang Phee)", type: "Textile", desc: "Traditional handloom fabric featuring geometric medallions and sacred Meitei motifs woven by women artisans." },
      { name: "Longpi Black Pottery", type: "Craft", desc: "Unique serpentinite and clay black pottery from Longpi village with naturally smooth matte surface finish." },
      { name: "Pena Musical Craft", type: "Craft", desc: "Traditional one-stringed folk instrument Pena crafted from bamboo, gourd, and animal gut — symbol of Meitei heritage." },
      { name: "Kauna Reed Craft", type: "Craft", desc: "Lightweight water-reed mats, baskets, and lifestyle products sustainably harvested from Loktak lake." }
    ],
    category: "Craft",
    isFeatured: false,
    coordinates: [24.8170, 93.9368],
    description: "Vaishnavite paintings, traditional crafts and performance-related artistic traditions.",
    historicalContext: "Manipur's artistic traditions synthesize ancient Meitei indigenous nature reverence with 18th-century Gaudiya Vaishnavism introduced under King Bhagyachandra.",
    keyFeatures: [
      "Kuna (marsh reed) matting and basket weaving",
      "Elaborate Potloi cylindrical embroidered skirts for Rasa Lila dance",
      "Subtle bamboo, cane, and woodcraft ornamentation",
      "Devotional manuscript painting and sacred textile art"
    ],
    culturalSignificance: "Art and sacred performance are seamlessly unified in Manipuri culture, where every costume and craft element holds spiritual resonance.",
    relatedArtworks: ["Rasa Lila Potloi Costumes", "Kuna Reed Artisan Mats", "Meitei Royal Insignia Crafts"],
    images: [
      { url: "/assets/artworks/mn_manipuri.jpg", alt: "Manipuri Classical Dance Costume Craft", caption: "Archival Photograph – Traditional Manipuri Meitei classical dance attire and sacred craft ornamentation" },
      { url: "/assets/artworks/mn_2.jpg", alt: "Manipuri Classical Dance Performance", caption: "Archival Photograph – Sangeet Natak Akademi classical Manipuri Meitei dance performance at India Gate" },
      { url: "/assets/artworks/mn_3.jpg", alt: "Longpi Black Pottery Manipur", caption: "Archival Photograph – Authentic Longpi serpentinite and clay black pottery from Manipur village" }
    ]
  },
  {
    id: "ML",
    state: "Meghalaya",
    location: "Shillong",
    artForm: "Khasi and Jaintia Art",
    artForms: [
      { name: "Tlieng Cane Weaving", type: "Craft", desc: "Ultra-fine cane mat weaving by Khasi women creating waterproof mats with tight parallel splits." },
      { name: "Ryndia Eri Silk Weaving", type: "Textile", desc: "Non-violent Eri silk handloom weaving using naturally shed cocoons dyed with plant-based pigments." },
      { name: "Garo Dokmanchi Dance Costumes", type: "Folk Art", desc: "Elaborate woven ceremonial garments and feathered headdresses worn during Wangala harvest dance performances." },
      { name: "Bamboo & Cane Basketry", type: "Craft", desc: "Functional and decorative rain shields (Knup), storage baskets (Kiah) and carrying baskets made from local bamboo." }
    ],
    category: "Craft",
    isFeatured: false,
    coordinates: [25.5788, 91.8933],
    description: "Bamboo crafts, weaving and indigenous decorative traditions.",
    historicalContext: "The indigenous Khasi, Jaintia, and Garo communities of Meghalaya have maintained sustainable craft traditions rooted in their pristine cloud forest ecosystem.",
    keyFeatures: [
      "Ultra-fine Tlieng cane mats known for waterproof durability",
      "Ryndia organic Eri silk handloom weaving with natural plant dyes",
      "Intricate bamboo baskets (Khoh & Kiah) and rain shields (Knup)",
      "Traditional wood and monolith stonemasonry art"
    ],
    culturalSignificance: "Highlights a deep ecological harmony where utility, matrilineal tribal heritage, and natural aesthetics converge seamlessly.",
    relatedArtworks: ["Tlieng Fine Cane Mats", "Ryndia Natural Silk Shawls", "Khasi Bamboo Rain Shields"],
    images: [
      { url: "/assets/artworks/ml_khasi.jpg", alt: "Meghalaya Traditional Bamboo & Cane Craft", caption: "Archival Photograph – Intricate Khasi and Jaintia handwoven cane and bamboo basketry craft" },
      { url: "/assets/artworks/ml_2.jpg", alt: "Meghalaya Bamboo and Cane Craft", caption: "Archival Photograph – Fine Khasi bamboo craft and cane weaving of Meghalaya" },
      { url: "/assets/artworks/ml_3.jpg", alt: "Meghalaya Living Root Bridge", caption: "Archival Photograph – Famous double-decker living root bridge, Cherrapunji, Meghalaya" }
    ]
  },
  {
    id: "MZ",
    state: "Mizoram",
    location: "Aizawl",
    artForm: "Mizo Weaving",
    artForms: [
      { name: "Puan Handloom Weaving", type: "Textile", desc: "Traditional Mizo handloom sarees and shawls with bold geometric supplementary warp patterns encoding clan identity." },
      { name: "Bamboo Craft", type: "Craft", desc: "Intricate bamboo work creating hats, pipes, musical instruments, furniture, and decorative wall panels." },
      { name: "Tlangval Traditional Attire Art", type: "Folk Art", desc: "Symbolic ceremonial costumes featuring woven sashes, feathered caps, and beaded ornaments for festival dances." },
      { name: "Mizo Wood Carving", type: "Craft", desc: "Decorative wood reliefs on house panels and gates featuring traditional Mizo animal and nature motifs." }
    ],
    category: "Textile",
    isFeatured: false,
    coordinates: [23.7271, 92.7176],
    description: "Traditional textiles, bamboo crafts and geometric patterns.",
    historicalContext: "Weaving is an essential rite of passage and cultural pride for Mizo women, with intricate handloom patterns encoding clan identity and social prestige.",
    keyFeatures: [
      "Puan handloom shawls and skirts with bold geometric bands",
      "Iconic varieties: Puanchei, Ngotekherh, Tawlhloh, and Kawrchei",
      "Intricate supplementary warp and weft patterning",
      "Handcrafted bamboo smoking pipes, hats, and musical instruments"
    ],
    culturalSignificance: "Puan fabrics have achieved Geographical Indication (GI) tags, representing a living textile legacy cherished during festivals like Chapchar Kut.",
    relatedArtworks: ["Puanchei Ceremonial Shawl", "Ngotekherh Geometric Weave", "Mizo Bamboo Craft"],
    images: [
      { url: "/assets/artworks/mz_puan.jpg", alt: "Traditional Mizo Puan Handloom Weaving", caption: "Archival Photograph – Traditional Mizo woman weaving authentic geometric Puan handloom fabric on loom" },
      { url: "/assets/artworks/mz_2.jpg", alt: "Cheraw Bamboo Dance Mizoram", caption: "Archival Photograph – Traditional Mizo Cheraw bamboo dance performance during Chapchar Kut festival" },
      { url: "/assets/artworks/mz_3.jpg", alt: "Mizo Traditional Puan Weaving", caption: "Archival Photograph – Traditional Mizo Puanchei handloom textile craft detail" }
    ]
  },
  {
    id: "NL",
    state: "Nagaland",
    location: "Kohima",
    artForm: "Naga Tribal Art",
    artForms: [
      { name: "Naga Warrior Shawl Weaving", type: "Textile", desc: "Clan-specific handloom shawls (Tsüngkotepsu, Lohe, Rongsu) encoding war honours, lineage, and ceremonial rank." },
      { name: "Beadwork Jewellery", type: "Craft", desc: "Multi-strand glass and brass bead necklaces from different Naga tribes with tribe-specific colour and pattern codes." },
      { name: "Morung Wood Carving", type: "Craft", desc: "Monumental wooden relief carvings on dormitory (Morung) pillars depicting warriors, tigers, mithun horns, and village history." },
      { name: "Black Clay Pottery", type: "Craft", desc: "Distinctive black unglazed earthen pottery from Longkhum and Khonoma villages made by coiling and burnishing clay." }
    ],
    category: "Tribal Art",
    isFeatured: false,
    coordinates: [25.6751, 94.1086],
    description: "Textiles, beadwork, wood carving and traditional motifs.",
    historicalContext: "The 16 major Naga tribes each possess distinct visual traditions expressed through handwoven warrior shawls, ornate bead jewelry, and village gate woodcarvings.",
    keyFeatures: [
      "Tsüngkotepsu (Ao warrior shawl) decorated with human figures & animal motifs",
      "Multi-strand glass bead and brass pendant necklaces",
      "Monumental wooden village gates carved with mithun horns and warrior heads",
      "Black clay pottery and bamboo smoking cups"
    ],
    culturalSignificance: "Every motif, color combination, and feather accessory signifies specific honors, clan lineage, and ceremonial standing in Naga society.",
    relatedArtworks: ["Ao Naga Warrior Shawl", "Konyak Beadwork Necklaces", "Morung Wooden Relief Pillars"],
    images: [
      { url: "/assets/artworks/nl_naga.jpg", alt: "Naga Tribe Traditional Shawl", caption: "Archival Photograph – Authentic handwoven Naga warrior shawl with symbolic clan emblems and geometric bands" },
      { url: "/assets/artworks/nl_2.jpg", alt: "Naga Warrior Headgear Heritage", caption: "Archival Photograph – Traditional Naga warrior's handcrafted headgear with Mithun horn and feather ornament" },
      { url: "/assets/artworks/nl_3.jpg", alt: "Hornbill Festival Naga Warriors", caption: "Archival Photograph – Naga tribal warriors in traditional attire at Hornbill Festival, Kohima" }
    ]
  },
  {
    id: "OR",
    state: "Odisha",
    location: "Puri",
    artForm: "Pattachitra",
    artForms: [
      { name: "Pattachitra", type: "Painting", desc: "Sacred cloth-scroll paintings by Chitrakar artisans depicting Lord Jagannath and Odishan mythology with natural pigments." },
      { name: "Sambalpuri Ikat Weaving", type: "Textile", desc: "Double-ikat handloom fabric from Sambalpur district featuring traditional Bandha patterns in rich silk." },
      { name: "Pipili Appliqué Work", type: "Craft", desc: "Colourful cut-fabric canopies and hangings featuring flowers, animals, and geometric shapes from Pipili village." },
      { name: "Dhokra Craft (Odisha)", type: "Craft", desc: "Lost-wax metal figurines of tribal deities, owls and horses crafted by Kutia Kondh tribal metalworkers." }
    ],
    category: "Painting",
    isFeatured: false,
    coordinates: [19.8135, 85.8312],
    description: "Traditional cloth paintings depicting Jagannath, mythology and religious stories.",
    historicalContext: "Pattachitra is a medieval painting tradition originating in Puri, intimately linked with the worship rituals of Lord Jagannath at the famous Puri Temple.",
    keyFeatures: [
      "Canvas (Patta) prepared by treating cotton cloth with chalk and tamarind seed paste",
      "Crisp black ink outlines filled with vivid mineral and vegetable colors",
      "Decorative floral borders surrounding central multi-tiered narrative panels",
      "Palm-leaf engraving variety (Talasapatra Chitra) etched with an iron stylus"
    ],
    culturalSignificance: "Practiced by hereditary Chitrakar artisans in Raghurajpur heritage village, keeping alive centuries of sacred iconographic tradition.",
    relatedArtworks: ["Jagannath Anasara Pattas", "Kalia Daman Pattachitra", "Talasapatra Palm Leaf Scrolls"],
    images: [
      { url: "/assets/artworks/or_pattachitra.jpg", alt: "Classical Raghurajpur Pattachitra Painting", caption: "Archival Photograph – Authentic traditional Pattachitra wall mural and scroll art in Raghurajpur heritage village" },
      { url: "/assets/artworks/or_2.jpg", alt: "Pipili Applique Craft Chandua", caption: "Archival Photograph – Vivid Pipili village ceremonial applique canopy (Chandua) craft" },
      { url: "/assets/artworks/or_3.jpg", alt: "Konark Sun Temple Wheel Sculpture", caption: "Archival Photograph – Intricate stone wheel sculpture and celestial carvings at Konark Sun Temple" }
    ]
  },
  {
    id: "PB",
    state: "Punjab",
    location: "Amritsar",
    artForm: "Phulkari",
    artForms: [
      { name: "Phulkari Embroidery", type: "Textile", desc: "Untwisted silk thread embroidery on Khaddar cotton creating geometric floral patterns used in bridal trousseaus." },
      { name: "Punjabi Jutti Craft", type: "Craft", desc: "Hand-stitched leather footwear decorated with gold and silver threadwork from Patiala and Amritsar craftsmen." },
      { name: "Paintings of Golden Temple", type: "Religious Art", desc: "Miniature and watercolour paintings depicting the Harmandir Sahib, Sikh history, and Gurbani-inspired visual art." },
      { name: "Durri Weaving", type: "Textile", desc: "Flat-woven cotton floor-spreads with bold geometric designs in bright complementary colours from Punjab villages." }
    ],
    category: "Textile",
    isFeatured: false,
    coordinates: [31.6340, 74.8723],
    description: "Colorful traditional embroidery and textile art.",
    historicalContext: "Phulkari (literally 'flower work') developed as a cherished domestic folk embroidery tradition practiced by Punjabi women for festive trousseaus since at least the 15th century.",
    keyFeatures: [
      "Darning stitch executed exclusively from the reverse side of home-spun cotton (Khaddar)",
      "Luminous untwisted silk thread (Pat) creating glossy geometric surfaces",
      "Bagh ('Garden') variation where the entire fabric is covered seamlessly",
      "Motifs drawn from daily life: marigold flowers, peacocks, wheat stalks, and kitchen tools"
    ],
    culturalSignificance: "Mentioned in Waris Shah's epic poem *Heer Ranjha*, Phulkari represents matriarchal affection, celebration, and Punjabi cultural identity.",
    relatedArtworks: ["Vari da Bagh (Bridal Trousseau)", "Chope Ceremonial Shawl", "Sainchi Phulkari Story Shawls"],
    images: [
      { url: "/assets/artworks/pb_phulkari.jpg", alt: "Authentic Punjabi Phulkari Embroidery", caption: "Archival Photograph – Museum specimen of high-density geometric silk-thread Phulkari embroidery on coarse Khaddar cotton" },
      { url: "/assets/artworks/pb_2.jpg", alt: "Punjab Phulkari Heritage Embroidery", caption: "Archival Photograph – Heritage Phulkari silk-thread embroidery on Khaddar cotton from Punjab" },
      { url: "/assets/artworks/pb_3.jpg", alt: "Golden Temple Historical Painting", caption: "Archival Photograph – 1878 painting by Marianne North depicting the Harmandir Sahib (Golden Temple), Amritsar" }
    ]
  },
  {
    id: "RJ",
    state: "Rajasthan",
    location: "Jaipur",
    artForm: "Rajasthani Miniature Painting",
    artForms: [
      { name: "Rajasthani Miniature Painting", type: "Painting", desc: "Mewar, Bundi, Marwar and Kishangarh schools of fine gold-leaf court miniatures with Radha-Krishna and Ragamala themes." },
      { name: "Blue Pottery", type: "Craft", desc: "Quartz-paste ceramic craft from Jaipur glazed with cobalt blue in Persian-derived floral and geometric patterns." },
      { name: "Bandhani Tie-Dye", type: "Textile", desc: "Resist-tie-dye technique creating thousands of tiny dots on silk and cotton using thread-tying before dyeing." },
      { name: "Bagru & Sanganer Block Printing", type: "Textile", desc: "Wooden block hand-printing using natural dyes on cotton, with Bagru's mud-resist earthy tones and Sanganer's bright florals." }
    ],
    category: "Painting",
    isFeatured: false,
    coordinates: [26.9124, 75.7873],
    description: "Miniature paintings, block printing, blue pottery and decorative arts.",
    historicalContext: "Rajasthan's royal courts (Mewar, Marwar, Bundi, Kishangarh, Jaipur) patronized distinct miniature painting schools from the 16th to 19th centuries.",
    keyFeatures: [
      "Ultra-fine brushwork using single-hair squirrel brushes",
      "Pure gold leaf burnishing and mineral pigments (lapis lazuli, malachite, cinnabar)",
      "Themes of divine love (Radha-Krishna), royal hunts, ragamala music modes, and court life",
      "Famous Kishangarh masterpiece 'Bani Thani' with stylized elongated features"
    ],
    culturalSignificance: "A world-celebrated pinnacle of Indian fine art, alongside Jaipur's legendary quartz-paste Blue Pottery and Bagru hand-block printing.",
    relatedArtworks: ["Bani Thani (Kishangarh School)", "Ragamala Bundi Miniatures", "Jaipur Quartz Blue Pottery"],
    images: [
      { url: "/assets/artworks/rj_miniature.jpg", alt: "Kishangarh Miniature Painting Bani Thani", caption: "Archival Photograph – Masterpiece Kishangarh court miniature of Radha and Krishna (Bani Thani) by Nihal Chand, c. 1760" },
      { url: "/assets/artworks/rj_2.jpg", alt: "Jaipur Blue Pottery Cobalt Glaze", caption: "Archival Photograph – Authentic Jaipur Blue Pottery glazed ceramic with Persian-style cobalt and floral patterns" },
      { url: "/assets/artworks/rj_3.jpg", alt: "Pichwai Nathdwara Painting Krishna", caption: "Archival Photograph – Traditional Pichwai large-format temple cloth painting of Lord Krishna, Nathdwara" }
    ]
  },
  {
    id: "SK",
    state: "Sikkim",
    location: "Gangtok",
    artForm: "Thangka Art",
    artForms: [
      { name: "Thangka Painting", type: "Religious Art", desc: "Sacred iconometric Buddhist scroll paintings framed in brocade silk depicting deities, mandalas, and teachers." },
      { name: "Carpet Weaving", type: "Textile", desc: "Tibetan-style wool carpets with Buddhist symbolic motifs — dragons, snow lions, and lotus flowers — from Sikkimese looms." },
      { name: "Bamboo & Cane Craft", type: "Craft", desc: "Handmade baskets, mats, bottle holders (chungpo) and carrying backpacks (doko) from locally grown bamboo." },
      { name: "Silver Jewellery Craft", type: "Craft", desc: "Traditional silver amulet boxes (Gau), prayer wheels, and turquoise-coral inlaid ornaments from Sikkimese craftsmen." }
    ],
    category: "Religious Art",
    isFeatured: false,
    coordinates: [27.3389, 88.6065],
    description: "Buddhist religious paintings featuring deities, mandalas and symbolic imagery.",
    historicalContext: "Thangka painting in Sikkim is practiced within Vajrayana Buddhist monasteries like Rumtek and Enchey, serving as sacred visual aids for meditation.",
    keyFeatures: [
      "Strict iconometric guidelines specified in ancient Buddhist treatises",
      "Canvas framed in rich brocade silk with protective cloth curtain flaps",
      "Fine gold dust linework outlining peaceful and wrathful Buddhist deities",
      "Sacred Wheel of Life (Bhavachakra) and cosmic mandala diagrams"
    ],
    culturalSignificance: "Not merely artistic decoration, but consecrated ritual instruments painted under meditative prayer discipline by master lamas.",
    relatedArtworks: ["Rumtek Monastery Thangka Collection", "Bhavachakra Wheel of Life", "Green Tara Silk Scroll"],
    images: [
      { url: "/assets/artworks/sk_thangka.jpg", alt: "Sacred Sikkimese Buddhist Thangka", caption: "Archival Photograph – 19th-century Tibetan Buddhist Thangka scroll painting of Guru Padmasambhava in Rainbow Body" },
      { url: "/assets/artworks/sk_2.jpg", alt: "Rumtek Monastery Sikkim Interior", caption: "Archival Photograph – Ornate Rumtek Monastery interior with elaborate Buddhist murals and thangka collection" },
      { url: "/assets/artworks/sk_3.jpg", alt: "Sacred Sikkimese Buddhist Thangka Art", caption: "Archival Photograph – Tibetan Buddhist Thangka painting from Sikkim's monastic sacred art collection" }
    ]
  },
  {
    id: "TN",
    state: "Tamil Nadu",
    location: "Thanjavur",
    artForm: "Tanjore Painting",
    artForms: [
      { name: "Tanjore Painting", type: "Painting", desc: "Opulent South Indian panel paintings on wood with gesso relief, 22-carat gold foil, and gemstone inlays." },
      { name: "Kanchipuram Silk Weaving", type: "Textile", desc: "Heavy handloom mulberry silk sarees from Kanchipuram with real zari interlocking warp and weft borders." },
      { name: "Bronze Casting (Swamimalai)", type: "Craft", desc: "Lost-wax Chola-tradition bronze casting of Nataraja, Parvati, and divine Hindu forms by Sthapathi artisans." },
      { name: "Kolam (Rangoli) Art", type: "Folk Art", desc: "Daily rice-powder geometric ritual floor drawings by Tamil women — an ancient auspicious threshold art form." }
    ],
    category: "Painting",
    isFeatured: true,
    coordinates: [10.7870, 79.1378],
    description: "Gold-leaf paintings depicting Hindu deities and devotional themes.",
    historicalContext: "Tanjore (Thanjavur) painting emerged in the 16th century under the Nayakas of Tanjore and later reached grand heights under Maratha ruler Rajah Serfoji II.",
    keyFeatures: [
      "Embossed Gesso work using limestone paste and gum to create 3D relief",
      "Coverage with pure 22-carat gold foil leaf that never tarnishes",
      "Inlay of Jaipur semi-precious stones, glass beads, and cut crystals",
      "Iconic plump, youthful figures of Balakrishna with rounded faces and expressive eyes"
    ],
    culturalSignificance: "One of India's most opulent classical art forms, designed to radiate divine light inside dark temple sanctums and home altars.",
    relatedArtworks: ["Balakrishna with Butter Pot", "Thanjavur Saraswati Panel", "Brihadeeswarar Nayaka Murals"],
    images: [
      { url: "/assets/artworks/tanjore.png", alt: "Tanjore Gold Foil Ganesha Painting", caption: "Archival Photograph – Classical Tanjore 22-carat gold foil gesso relief painting of Lord Ganesha (Tanjore Palace Archives)" },
      { url: "/assets/artworks/tn_2.jpg", alt: "Kanchipuram Bridal Silk Saree", caption: "Archival Photograph – Traditional Kanchipuram pure silk bridal saree with gold zari temple border" },
      { url: "/assets/artworks/tn_3.jpg", alt: "Nataraja Chola Bronze Madurai", caption: "Archival Photograph – Classical Chola-tradition bronze Nataraja cosmic dance sculpture, Meenakshi Temple, Madurai" }
    ]
  },
  {
    id: "TG",
    state: "Telangana",
    location: "Hyderabad",
    artForm: "Cheriyal Painting",
    artForms: [
      { name: "Cheriyal Scroll Painting", type: "Folk Art", desc: "Vivid red-background narrative scroll paintings by Nakashi artisans depicting mythology and folk tales." },
      { name: "Bidri Work (Hyderabad)", type: "Craft", desc: "Silver inlay on oxidized zinc-alloy metalwork with floral and arabesque motifs originating in Bidar region." },
      { name: "Nirmal Painting", type: "Painting", desc: "Lacquered wooden handicrafts with rich golden-background paintings of Hindu mythology from Nirmal town." },
      { name: "Pochampally Ikat Weaving", type: "Textile", desc: "UNESCO-recognized double-ikat silk and cotton weaving from Pochampally featuring diamond and geometric patterns." }
    ],
    category: "Folk Art",
    isFeatured: false,
    coordinates: [17.3850, 78.4867],
    description: "Colorful scroll paintings depicting mythology, folklore and village life.",
    historicalContext: "Cheriyal Scroll Painting is a stylized version of Nakashi art, traditionally practiced by the Nakashi family community in Cheriyal village near Hyderabad.",
    keyFeatures: [
      "Canvas prepared from Khadi cotton treated with tamarind seed paste and white clay",
      "Vivid red background (crimson ochre) that makes figures stand out dynamically",
      "Narrative panel-by-panel comic strip composition used by folk balladeers",
      "Matching handcrafted wooden masks and puppets of folklore characters"
    ],
    culturalSignificance: "Historically acted as visual aids for Kaki Padagollu storytelling bards to narrate localized folk legends to villagers.",
    relatedArtworks: ["Markandeya Purana Cheriyal Scroll", "Mahabharata Folk Panel", "Cheriyal Storytelling Masks"],
    images: [
      { url: "/assets/artworks/tg_cheriyal.jpg", alt: "Cheriyal Narrative Scroll Painting", caption: "Archival Photograph – Master Nakashi Cheriyal red-ground narrative scroll painting depicting folklore and mythology" },
      { url: "/assets/artworks/tg_2.jpg", alt: "Pochampally Ikat Saree Weaving", caption: "Archival Photograph – UNESCO-recognized Pochampally double-ikat silk handloom saree weaving" },
      { url: "/assets/artworks/tg_3.jpg", alt: "Hyderabad Bidriware Silver Craft", caption: "Archival Photograph – Fine Bidriware silver inlay craft in oxidized zinc-alloy from Hyderabad" }
    ]
  },
  {
    id: "TR",
    state: "Tripura",
    location: "Agartala",
    artForm: "Bamboo and Tribal Art",
    artForms: [
      { name: "Risa Handloom Weaving", type: "Textile", desc: "Sacred tribal chest-cloth with geometric bands woven by Tripuri women and used in rites of passage and worship." },
      { name: "Fine Bamboo Craft", type: "Craft", desc: "Ultra-fine bamboo splint work creating decorative wall hangings, lampshades, and lifestyle products." },
      { name: "Reang Hojai Dance Costume Art", type: "Folk Art", desc: "Elaborate handwoven and feather-adorned costumes worn during Hojagiri dance celebrations by Reang women." },
      { name: "Tripuri Terracotta", type: "Craft", desc: "Hand-built terracotta pots, ritual figures, and decorative panels made by tribal women using traditional coiling." }
    ],
    category: "Craft",
    isFeatured: false,
    coordinates: [23.8315, 91.2868],
    description: "Bamboo crafts, weaving and indigenous decorative traditions.",
    historicalContext: "Tripura's 19 indigenous tribes (including Tipra, Reang, and Jamatia) have mastered bamboo craft and back-strap loom weaving over centuries.",
    keyFeatures: [
      "Ultra-fine bamboo splints used to make decorative wall plaques and lampshades",
      "Risa handwoven chest-cloth featuring intricate tribal geometric motifs",
      "Handcrafted bamboo screens, umbrella handles, and idol structures",
      "Eco-friendly, sustainable craftsmanship using native muli bamboo"
    ],
    culturalSignificance: "Risa holds deep cultural sanctity, used in tribal rites of passage, honoring guests, and traditional worship ceremonies.",
    relatedArtworks: ["Risa Traditional Handloom Cloth", "Fine Bamboo Screens of Agartala", "Reang Tribal Crafts"],
    images: [
      { url: "/assets/artworks/tr_bamboo.jpg", alt: "Tripuri Traditional Risa Handloom Cloth", caption: "Archival Photograph – Authentic handwoven Tripuri Risa sacred chest cloth and indigenous bamboo craft" },
      { url: "/assets/artworks/tr_2.jpg", alt: "Tripura Traditional Tribal Textile", caption: "Archival Photograph – Traditional Tripuri tribal handwoven cloth and indigenous bamboo craft" },
      { url: "/assets/artworks/tr_3.jpg", alt: "Unakoti Rock Relief Carvings", caption: "Archival Photograph – Magnificent ancient rock-cut Shiva relief carvings at Unakoti pilgrimage site, Tripura" }
    ]
  },
  {
    id: "UP",
    state: "Uttar Pradesh",
    location: "Varanasi",
    artForm: "Banarasi Weaving",
    artForms: [
      { name: "Banarasi Silk Weaving", type: "Textile", desc: "Heavy silk brocade sarees from Varanasi woven with real silver-gold zari featuring Mughal floral and paisley motifs." },
      { name: "Chikankari Embroidery", type: "Textile", desc: "Delicate white-on-white shadow-work embroidery from Lucknow originally patronized by Nawab Shuja-ud-Daula's court." },
      { name: "Thewa Art (Pratapgarh)", type: "Craft", desc: "Intricate gold artwork fused onto multicolored glass creating jewellery and decorative panels from Pratapgarh." },
      { name: "Mughal Miniature Painting", type: "Painting", desc: "Persian-influenced Mughal court miniatures from Lucknow and Agra ateliers depicting royal hunts, court scenes, and portraits." }
    ],
    category: "Textile",
    isFeatured: false,
    coordinates: [25.3176, 82.9739],
    description: "Banarasi silk textiles featuring intricate patterns and zari work.",
    historicalContext: "Varanasi has been India's supreme textile capital since antiquity, mentioned in Vedic texts and reaching legendary glory under Mughal patronage.",
    keyFeatures: [
      "Fine mulberry silk woven with pure silver and gold metallic threads (Zari)",
      "Intricate Mughal-inspired floral scrolls (Bel), paisleys (Kalga), and lattice (Jaal)",
      "Heavy brocade weaving techniques: Kinkhab, Tanchoi, and Cutwork",
      "Requires up to 3 master weavers working jointly on handlooms for weeks"
    ],
    culturalSignificance: "An indispensable treasure of Indian bridal trousseaus and royal wardrobes, symbolizing timeless elegance and mastery of handloom art.",
    relatedArtworks: ["Kinkhab Gold Brocade Saree", "Tanchoi Silk Tapestry", "Varanasi Zari Wall Panels"],
    images: [
      { url: "/assets/artworks/up_banarasi.jpg", alt: "Authentic Banarasi Silk Brocade with Zari", caption: "Archival Photograph – Historic pure silk Varanasi brocade saree woven with gold-wrapped metallic zari yarn" },
      { url: "/assets/artworks/up_2.jpg", alt: "Lucknow Chikankari Embroidery", caption: "Archival Photograph – 17th-century style Chikankari white-on-white shadow-work embroidery from Lucknow" },
      { url: "/assets/artworks/up_3.jpg", alt: "Varanasi Silk Handloom Weavers", caption: "Archival Photograph – Master weavers working traditional Varanasi silk brocade handlooms with gold Zari" }
    ]
  },
  {
    id: "UK",
    state: "Uttarakhand",
    location: "Kumaon",
    artForm: "Aipan Art",
    artForms: [
      { name: "Aipan Art", type: "Folk Art", desc: "Sacred geometric floor/wall paintings made using red Geru clay and white rice-paste motifs for festivals and weddings." },
      { name: "Pahari Painting (Garhwal)", type: "Painting", desc: "Garhwali sub-school of Pahari miniature painting featuring local folk legends and devotional themes in vivid colours." },
      { name: "Ringal Bamboo Craft", type: "Craft", desc: "Handwoven mountain bamboo (Ringal) baskets, mats, and utility items crafted in the high Himalayan forest regions." },
      { name: "Copper Inlay Craft", type: "Craft", desc: "Traditional copper and brass utensil craftsmanship with engraved motifs from Almora's metal artisan communities." }
    ],
    category: "Folk Art",
    isFeatured: false,
    coordinates: [29.5960, 79.6467],
    description: "Geometric ritual designs created traditionally on floors and walls.",
    historicalContext: "Aipan is a sacred ritualistic folk art form created by women of the Kumaon region in the Himalayan foothills during festivals, pujas, and weddings.",
    keyFeatures: [
      "Background coated with brick-red terracotta clay (Geru)",
      "Intricate motifs drawn using ground white rice paste (Biswar) applied with fingers",
      "Central holy symbols (Chowki) representing Lakshmi, Shiva, or Saraswati",
      "Linear geometric borders (Bel) and stylized divine footprints"
    ],
    culturalSignificance: "Believed to evoke divine energy, protect households from negative forces, and welcome Goddess Lakshmi into Kumaoni homes.",
    relatedArtworks: ["Lakshmi Chowki Aipan", "Saraswati Chowki Ritual Floor Art", "Kumaoni Wedding Wall Aipan"],
    images: [
      { url: "/assets/artworks/uk_aipan.jpg", alt: "Traditional Kumaoni Aipan Ritual Floor Art", caption: "Archival Photograph – Authentic Kumaon Aipan geometric floor ritual design drawn with white rice paste over terracotta Geru" },
      { url: "/assets/artworks/uk_2.jpg", alt: "Pahari School Garhwal Painting", caption: "Archival Photograph – Regal court figure on throne: authentic Pahari school painting from Garhwal sub-school" },
      { url: "/assets/artworks/uk_3.jpg", alt: "Kumaoni Aipan Ritual Art", caption: "Archival Photograph – Sacred Kumaoni Aipan ritual floor design tradition from Uttarakhand" }
    ]
  },
  {
    id: "WB",
    state: "West Bengal",
    location: "Kolkata",
    artForm: "Kalighat Painting",
    artForms: [
      { name: "Kalighat Painting", type: "Folk Art", desc: "19th-century urban folk art from Kalighat temple area with bold sweeping brushlines depicting deities and social satire." },
      { name: "Dokra Craft (Bengal)", type: "Craft", desc: "Lost-wax bell-metal casting by Bikna village artisans creating animals, musicians, and goddess figurines." },
      { name: "Baluchari Saree Weaving", type: "Textile", desc: "Handloom silk sarees from Bishnupur with pallu depicting scenes from Mahabharata, Ramayana, and Mughal life." },
      { name: "Patachitra (Bengal)", type: "Folk Art", desc: "Scroll paintings by Chitrakar storytellers (Patuas) narrating Hindu mythology and social commentary while singing." }
    ],
    category: "Folk Art",
    isFeatured: false,
    coordinates: [22.5726, 88.3639],
    description: "Folk paintings featuring religious subjects, social themes and everyday life.",
    historicalContext: "Kalighat painting originated in 19th-century Kolkata near the famous Kalighat Kali Temple, created by rural Patua scroll painters who adapted to the urban market.",
    keyFeatures: [
      "Bold, fluid, single-stroke brush contours drawn on mill-made paper",
      "Subtle watercolor washes providing rounded volumetric shading",
      "Dual themes: sacred Hindu deities & sharp satirical commentary on 19th-century 'Babu' culture",
      "Minimalist backgrounds focusing entire attention on dynamic central figures"
    ],
    culturalSignificance: "Represented South Asia's first modern urban folk art movement, heavily influencing pioneer modernists like Jamini Roy and Fernand Léger.",
    relatedArtworks: ["Kali at Kalighat", "The Babu and the Courtesan", "Cat with Prawn in Mouth"],
    images: [
      { url: "/assets/artworks/wb_kalighat.jpg", alt: "19th Century Kalighat Painting", caption: "Archival Photograph – 19th Century Kalighat brush-and-watercolor painting on paper (Cleveland Museum of Art)" },
      { url: "/assets/artworks/wb_2.jpg", alt: "Baluchari Silk Saree Bishnupur", caption: "Archival Photograph – Classic Baluchari handloom silk saree from Bishnupur depicting Mahabharata narrative on pallu" },
      { url: "/assets/artworks/wb_3.jpg", alt: "Bankura Horse Terracotta Bengal", caption: "Archival Photograph – Iconic Bankura horse terracotta sculpture — symbol of Bengal's folk clay craft tradition" }
    ]
  }
];

export const HISTORICAL_PERIODS = [
  {
    period: "Ancient Period",
    timeframe: "Prehistory – 6th Century CE",
    title: "Ajanta & Buddhist Rock-Cut Cave Art",
    description: "Characterized by rock-cut cave architecture, narrative Jataka murals at Ajanta, terracottas, and early Buddhist iconometry.",
    examples: "Ajanta Caves (Maharashtra), Rock Shelters of Bhimbetka"
  },
  {
    period: "Medieval Period",
    timeframe: "7th Century – 15th Century CE",
    title: "Temple Architecture, Murals & Devotional Traditions",
    description: "Flourishing of monumental temple architecture, Chola bronzes, Vijayanagara murals at Lepakshi, and Neo-Vaishnavite manuscript art.",
    examples: "Lepakshi Murals (Andhra), Tanjore Foundations (Tamil Nadu), Sattriya Art (Assam)"
  },
  {
    period: "Early Modern Period",
    timeframe: "16th Century – 18th Century CE",
    title: "Court Miniatures, Opulent Textiles & Royal Patronage",
    description: "Refinement of Pahari and Rajasthani miniature painting, Tanjore gold foil panels, Mysore court art, and Varanasi brocade weaving.",
    examples: "Kangra Miniatures (HP), Rajasthani Schools (RJ), Banarasi Weaving (UP), Mysore Art (KA)"
  },
  {
    period: "Folk & Tribal Traditions",
    timeframe: "Timeless / Living Heritage",
    title: "Community Rituals, Earth Wall Murals & Indigenous Crafts",
    description: "Deep-rooted indigenous arts passed through generations: Madhubani wall art, Gond dot paintings, Sohrai sgraffito, Dhokra metalwork, and Naga weaving.",
    examples: "Madhubani (Bihar), Gond (MP), Bastar Dhokra (CG), Sohrai (Jharkhand)"
  },
  {
    period: "Modern & Contemporary",
    timeframe: "19th Century – Present",
    title: "Urban Folk Adaptations & Global Preservation",
    description: "Evolution from urban folk movements like Kalighat painting to contemporary global recognition, GI tags, and museum preservation.",
    examples: "Kalighat (West Bengal), Cheriyal Scrolls (Telangana), Rogan Art (Gujarat)"
  }
];
