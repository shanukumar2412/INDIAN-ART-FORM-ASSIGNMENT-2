// India's Complete Official Territory Boundary
// As per Government of India / Survey of India official position
// Includes: Jammu & Kashmir (including PoK), Ladakh (including Aksai Chin), and Arunachal Pradesh

export const INDIA_OFFICIAL_BOUNDARY = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "India Official Territory",
        note: "As per Government of India and Survey of India. Includes PoK and Aksai Chin."
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          // ========================
          // INDIA's COMPLETE OFFICIAL BOUNDARY (Clockwise from northwest)
          // Government of India / Survey of India Claimed Territory
          // Includes Jammu & Kashmir, PoK, Aksai Chin, Arunachal Pradesh
          // ========================

          // --- Pakistan border (southwest to northwest) ---
          [68.10, 23.00],   // Gujarat coast / Rann of Kutch
          [68.20, 23.80],
          [68.90, 24.30],
          [70.00, 27.00],
          [70.50, 27.80],
          [71.00, 28.50],
          [71.90, 29.70],
          [73.00, 32.00],   // Punjab / Rajasthan border area
          [73.90, 33.40],   // Near Pathankot

          // --- Pakistan Occupied Kashmir (PoK) ---
          // India claims entire J&K as per Instrument of Accession 1947
          [73.80, 34.20],   // Mirpur area (PoK)
          [74.00, 34.80],   // Muzaffarabad area (PoK capital)
          [73.90, 35.30],
          [73.50, 35.90],
          [73.20, 36.30],
          [72.60, 36.80],
          [73.00, 37.00],   // Northern PoK (Gilgit region)
          [74.10, 37.10],   // Northernmost point of claimed PoK
          [75.50, 37.10],   // Gilgit-Baltistan upper area
          [76.50, 37.00],   // Towards Siachen glacier

          // --- Siachen Glacier & Aksai Chin (China-Occupied Kashmir) ---
          // India claims Aksai Chin as part of Ladakh district
          [77.80, 37.20],   // Siachen area
          [78.30, 36.90],
          [79.00, 36.40],   // Aksai Chin western extent
          [79.80, 36.00],
          [80.30, 35.50],   // Aksai Chin eastern extent
          [80.60, 35.00],
          [80.20, 34.20],

          // --- Ladakh / Tibet border (China LAC - official Indian claim) ---
          [81.00, 33.20],
          [82.00, 32.10],
          [83.10, 31.10],
          [83.80, 30.20],
          [84.60, 29.50],
          [85.50, 29.00],
          [86.50, 28.20],

          // --- Arunachal Pradesh (McMahon Line - India's claimed boundary) ---
          [87.50, 27.90],
          [88.80, 27.80],
          [90.40, 27.90],
          [91.70, 27.80],
          [93.30, 28.00],
          [95.00, 27.70],
          [96.00, 27.30],
          [97.35, 28.10],   // Easternmost point of Arunachal Pradesh

          // --- Northeast states ---
          [97.00, 27.40],
          [96.80, 26.50],
          [96.10, 25.90],
          [95.20, 25.10],
          [94.50, 24.60],
          [93.40, 24.10],   // Nagaland/Myanmar border
          [93.80, 23.50],
          [93.20, 23.00],
          [92.90, 22.50],
          [92.50, 22.00],
          [92.30, 23.50],   // Mizoram / Bangladesh border
          [91.80, 24.40],
          [91.20, 24.00],
          [90.50, 25.20],

          // --- West Bengal / Bangladesh border ---
          [89.70, 26.40],
          [89.00, 27.00],
          [88.40, 27.40],
          [88.10, 26.70],

          // --- Sikkim & West Bengal ---
          [88.50, 25.00],
          [88.20, 23.80],
          [88.00, 22.50],
          [87.80, 21.50],

          // --- Odisha / Andhra coast ---
          [87.40, 20.00],
          [86.50, 18.80],
          [85.80, 17.60],
          [83.50, 15.50],
          [81.00, 13.50],
          [80.30, 12.50],
          [80.00, 11.00],

          // --- Tamil Nadu southern tip ---
          [79.50, 9.50],
          [78.50, 8.60],
          [77.50, 8.10],   // Kanyakumari (southernmost tip)

          // --- Kerala / Karnataka coast (west coast going north) ---
          [76.60, 8.80],
          [76.20, 10.00],
          [75.50, 11.00],
          [75.10, 12.50],
          [74.50, 14.00],
          [74.00, 16.00],
          [73.60, 17.50],
          [73.10, 19.00],

          // --- Maharashtra / Gujarat coast ---
          [72.80, 20.50],
          [72.60, 21.50],
          [72.20, 22.50],
          [68.60, 23.10],
          [68.10, 23.00]   // Back to start
        ]]
      }
    }
  ]
};

// Boundary style for the official India territory overlay
export const INDIA_BOUNDARY_STYLE = {
  fillColor: "#D4AF37",      // Gold fill
  weight: 2.5,               // Border thickness
  opacity: 0.9,
  color: "#B85D3A",          // Terracotta border
  dashArray: "4 3",          // Slightly dashed for border distinction
  fillOpacity: 0.06          // Very subtle fill - map tiles still visible
};

// Style for the solid outer glow effect
export const INDIA_BOUNDARY_GLOW_STYLE = {
  fillColor: "transparent",
  weight: 5,
  opacity: 0.25,
  color: "#D4AF37",
  dashArray: null,
  fillOpacity: 0
};
