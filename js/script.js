/**
 * ClothyHub - Wholesale Textiles & Fabrics
 * Core JavaScript Engine & Product Catalogue Controller
 */

// ============================================================================
// 1. Business Configuration (Easily customizable in one place)
// ============================================================================
const CONFIG = {
  businessName: "ClothyHub Wholesale Textiles",
  shortName: "ClothyHub",
  // International format without '+' or leading zeros for wa.me
  whatsappNumber: "919372233835", 
  displayPhone: "+91 9372233835",
  email: "codepanel.com@gmail.com",
  salesEmail: "orders@clothyhub.com",
  address: "Textile Trade Market, Ring Road, Surat & Lower Parel, Mumbai, India",
  workingHours: "Mon - Sat: 9:00 AM - 7:30 PM IST",
  currencySymbol: "₹",
  defaultMoq: "50 meters"
};

// ============================================================================
// 2. Comprehensive Product Catalogue Data
// ============================================================================
const categoriesData = [
  {
    id: "cotton",
    name: "Cotton Fabric",
    tagline: "100% Pure & Combed",
    description: "Premium count cambric, poplin, twill, and organic cotton weaves suitable for shirts, kurtas, and apparel.",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=700&q=80",
    localFallback: "images/categories/cotton.jpg"
  },
  {
    id: "rayon",
    name: "Rayon Fabric",
    tagline: "Soft Drape & Viscose",
    description: "Breathable viscose rayon twill, slub, and plain weaves engineered for women's wear, dresses, and ethnic outfits.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
    localFallback: "images/categories/rayon.jpg"
  },
  {
    id: "linen",
    name: "Linen Fabric",
    tagline: "European Flax & Blends",
    description: "Luxurious, naturally textured pure flax linen and linen-cotton blends for high-end boutique collections.",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=700&q=80",
    localFallback: "images/categories/linen.jpg"
  },
  {
    id: "polyester",
    name: "Polyester Fabric",
    tagline: "Crepe, Satin & Micro",
    description: "High durability poly-crepe, georgette, and heavy satin weaves with exceptional color fastness.",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
    localFallback: "images/categories/polyester.jpg"
  },
  {
    id: "denim",
    name: "Denim Fabric",
    tagline: "Raw Indigo & Stretch",
    description: "Heavyweight 10oz - 13.5oz ring-spun denim, selvedge twills, and washed cotton-spandex stretch denim.",
    image: "https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?auto=format&fit=crop&w=700&q=80",
    localFallback: "images/categories/denim.jpg"
  },
  {
    id: "printed",
    name: "Printed Fabric",
    tagline: "Hand-Block & Digital",
    description: "Artisan Sanganeri prints, Kalamkari motifs, and reactive digital floral prints on premium base fabrics.",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=700&q=80",
    localFallback: "images/categories/printed.jpg"
  },
  {
    id: "silk",
    name: "Silk Fabric",
    tagline: "Mulberry & Tussar",
    description: "Lustrous pure mulberry satin silk, raw Matka tussar, and lightweight organza for bridal & couture lines.",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=700&q=80",
    localFallback: "images/categories/silk.jpg"
  },
  {
    id: "blended",
    name: "Blended Fabric",
    tagline: "Poly-Viscose & Tencel",
    description: "Engineered performance blends including Cotton-Tencel, Wool-Cotton, and wrinkle-resistant Poly-Viscose.",
    image: "https://images.unsplash.com/photo-1528458876861-544fd1761a91?auto=format&fit=crop&w=700&q=80",
    localFallback: "images/categories/blended.jpg"
  }
];

const productsData = [
  // COTTON
  {
    id: "CT-001",
    name: "60s Combed Cotton Cambric",
    category: "Cotton",
    material: "100% Combed Cotton",
    width: "44 inches (112 cm)",
    gsm: "85 GSM",
    weave: "Plain Cambric Weave",
    moq: "50 meters",
    colors: [
      { name: "Optical White", hex: "#F8FAFC" },
      { name: "Classic Navy", hex: "#1E293B" },
      { name: "Jet Black", hex: "#0F172A" },
      { name: "Dusty Rose", hex: "#D4A5A5" },
      { name: "Sage Green", hex: "#8DA399" }
    ],
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80",
    description: "Ultra-fine, high thread-count combed cotton cambric. Exceptionally soft hand-feel, breathable, and ideal for premium men's shirting, women's kurtis, and kidswear linings.",
    suitableFor: "Luxury Shirts, Kurtas, Summer Dresses, Children's Apparel"
  },
  {
    id: "CT-002",
    name: "Heavy Cotton Twill Drill",
    category: "Cotton",
    material: "100% Ring-Spun Cotton",
    width: "58 inches (147 cm)",
    gsm: "260 GSM",
    weave: "3/1 Heavy Twill",
    moq: "60 meters",
    colors: [
      { name: "Khaki Camel", hex: "#C2A676" },
      { name: "Olive Drab", hex: "#4B5320" },
      { name: "Midnight Black", hex: "#111827" },
      { name: "Dark Navy", hex: "#1A2536" }
    ],
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    description: "Heavyweight, rugged cotton twill drill with diagonal texture. Highly durable construction resistant to tear and abrasion. Perfect for workwear, jackets, utility trousers, and totes.",
    suitableFor: "Chinos, Workwear, Safari Jackets, Utility Pants, Heavy Aprons"
  },

  // RAYON
  {
    id: "RY-101",
    name: "Premium Viscose Rayon Twill",
    category: "Rayon",
    material: "100% Viscose Rayon",
    width: "44 inches (112 cm)",
    gsm: "140 GSM",
    weave: "2/1 Twill Weave",
    moq: "50 meters",
    colors: [
      { name: "Emerald Green", hex: "#065F46" },
      { name: "Wine Burgundy", hex: "#6B1D2F" },
      { name: "Mustard Gold", hex: "#D97706" },
      { name: "Royal Teal", hex: "#0E7490" },
      { name: "Ivory Pearl", hex: "#FAF5EE" }
    ],
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    description: "Luxuriously fluid rayon twill with superior drape and silky touch. Features excellent color saturation, anti-static feel, and moisture absorption for all-day comfort.",
    suitableFor: "Women's Western Dresses, Co-ord Sets, Flowy Tops, Anarkalis"
  },
  {
    id: "RY-102",
    name: "Textured Rayon Slub Voile",
    category: "Rayon",
    material: "100% Rayon (Slub Yarn)",
    width: "48 inches (122 cm)",
    gsm: "120 GSM",
    weave: "Slub Textured Plain",
    moq: "50 meters",
    colors: [
      { name: "Pastel Lavender", hex: "#C4B5FD" },
      { name: "Coral Peach", hex: "#FDBA74" },
      { name: "Sky Azure", hex: "#7DD3FC" },
      { name: "Warm Taupe", hex: "#9CA3AF" }
    ],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    description: "Lightweight rayon slub featuring organic horizontal texture variations. Provides an artisanal look with the cooling touch of natural wood pulp viscose.",
    suitableFor: "Summer Tunics, Scarves, Casual Kurtis, Resort Shirts"
  },

  // LINEN
  {
    id: "LN-201",
    name: "Pure European Washed Linen",
    category: "Linen",
    material: "100% European Flax",
    width: "56 inches (142 cm)",
    gsm: "185 GSM",
    weave: "Plain Enzyme-Washed",
    moq: "40 meters",
    colors: [
      { name: "Natural Flax", hex: "#D7C4A5" },
      { name: "Off White", hex: "#F3EFE6" },
      { name: "Terracotta Rust", hex: "#A85338" },
      { name: "Forest Moss", hex: "#4D5C43" },
      { name: "Charcoal Slate", hex: "#374151" }
    ],
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80",
    description: "Premium French flax linen pre-washed with enzymes for vintage softness. Thermoregulating, hypoallergenic, and develops rich character with every wash.",
    suitableFor: "Boutique Shirts, Linen Blazers, Wide-leg Trousers, Table Linens"
  },
  {
    id: "LN-202",
    name: "Organic Cotton-Linen Blend",
    category: "Linen",
    material: "55% Linen / 45% Cotton",
    width: "54 inches (137 cm)",
    gsm: "160 GSM",
    weave: "Textured Linen Slub",
    moq: "50 meters",
    colors: [
      { name: "Sand Dune", hex: "#E7DCBF" },
      { name: "Denim Blue", hex: "#475569" },
      { name: "Olive Tint", hex: "#848A6F" },
      { name: "Pure Bleach", hex: "#FFFFFF" }
    ],
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
    description: "Best of both worlds: crisp linen texture stabilized with soft cotton yarn. Reduces wrinkling while retaining the signature organic breathability of flax.",
    suitableFor: "Casual Blazers, Summer Shorts, Boho Dresses, Drapery"
  },

  // POLYESTER
  {
    id: "PL-301",
    name: "High-Density Micro Poly Crepe",
    category: "Polyester",
    material: "100% Micro Polyester",
    width: "58 inches (147 cm)",
    gsm: "135 GSM",
    weave: "Crepe de Chine Finish",
    moq: "100 meters",
    colors: [
      { name: "Scarlet Crimson", hex: "#991B1B" },
      { name: "Cobalt Blue", hex: "#1D4ED8" },
      { name: "Pitch Black", hex: "#0A0A0A" },
      { name: "Blush Nude", hex: "#FBCFE8" }
    ],
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
    description: "Fine granular texture with flawless drape. Completely wrinkle-resistant, colorfast through 50+ industrial washes, and designed for high-turnover garment manufacturing.",
    suitableFor: "Formal Blouses, Pleated Skirts, Corporate Uniforms, Scarves"
  },
  {
    id: "PL-302",
    name: "Heavy Duchess Poly Satin",
    category: "Polyester",
    material: "100% Filament Polyester",
    width: "60 inches (152 cm)",
    gsm: "220 GSM",
    weave: "Structured Satin Weave",
    moq: "60 meters",
    colors: [
      { name: "Champagne Gold", hex: "#E2C38E" },
      { name: "Silver Ash", hex: "#CBD5E1" },
      { name: "Ruby Garnet", hex: "#881337" },
      { name: "Deep Midnight", hex: "#0F172A" }
    ],
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80",
    description: "Substantial body with lustrous low-gloss sheen. Structured hand-feel ideal for structured evening gowns, corsets, bridal lehengas, and event wear.",
    suitableFor: "Evening Gowns, Bridal Attire, Corsetry, Event Decor"
  },

  // DENIM
  {
    id: "DN-401",
    name: "12.5 oz Indigo Selvedge Raw Denim",
    category: "Denim",
    material: "100% Ring-Spun Cotton",
    width: "31 inches (Selvedge) / 58 inches",
    gsm: "380 GSM (12.5 oz)",
    weave: "3/1 Right Hand Twill",
    moq: "100 meters",
    colors: [
      { name: "Deep Raw Indigo", hex: "#1A2A44" },
      { name: "Overdyed Black", hex: "#121212" }
    ],
    image: "https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?auto=format&fit=crop&w=800&q=80",
    description: "Authentic heavyweight denim with red selvedge id ticker. Rope-dyed with genuine indigo for high-contrast fading potential. Stiff raw finish ready for cut and wash.",
    suitableFor: "Heritage Jeans, Trucker Jackets, Heavy Denim Aprons, Bags"
  },
  {
    id: "DN-402",
    name: "10 oz Washed Stretch Cotton Denim",
    category: "Denim",
    material: "98% Cotton / 2% Elastane",
    width: "58 inches (147 cm)",
    gsm: "310 GSM (10 oz)",
    weave: "Compact Stretch Twill",
    moq: "80 meters",
    colors: [
      { name: "Mid Stone Wash", hex: "#3B5377" },
      { name: "Light Ice Blue", hex: "#7E9CB9" },
      { name: "Washed Charcoal", hex: "#3F3F46" }
    ],
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
    description: "Comfort stretch denim with 18% recovery elasticity. Form-fitting without bagging out. Smooth face weave ready for bleaching, whisker distressing, and enzyme wash.",
    suitableFor: "Skinny & Slim Jeans, Denim Skirts, Stretch Jackets"
  },

  // PRINTED
  {
    id: "PR-501",
    name: "Hand-Block Floral Sanganeri Cotton",
    category: "Printed",
    material: "100% Cambric 60s Cotton",
    width: "44 inches (112 cm)",
    gsm: "90 GSM",
    weave: "Traditional Artisan Print",
    moq: "50 meters",
    colors: [
      { name: "Indigo Flora", hex: "#1E3A8A" },
      { name: "Marigold Yellow", hex: "#CA8A04" },
      { name: "Crimson Red", hex: "#B91C1C" },
      { name: "Sage Floral", hex: "#4D7C0F" }
    ],
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    description: "Authentic wooden hand-block prints using natural vegetable and fast azo-free pigments. Celebrated for its unique handcrafted beauty across ethnic clothing labels.",
    suitableFor: "Ethnic Kurtis, Maxi Skirts, Block-Print Quilts, Kimonos"
  },
  {
    id: "PR-502",
    name: "Digital Reactive Floral Chiffon Crepe",
    category: "Printed",
    material: "100% Viscose Poly Blend",
    width: "44 inches (112 cm)",
    gsm: "110 GSM",
    weave: "Fine Sheer Weave",
    moq: "50 meters",
    colors: [
      { name: "Botanical Garden", hex: "#15803D" },
      { name: "Midnight Blossom", hex: "#312E81" },
      { name: "Pastel Meadow", hex: "#F472B6" }
    ],
    image: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=800&q=80",
    description: "Ultra-sharp 1200 DPI reactive digital print with vibrant floral motifs. Lightweight semi-sheer drape with graceful movement and color permanence.",
    suitableFor: "Scarves, Overlay Dresses, Georgette Sarees, Flowy Shrugs"
  },

  // SILK
  {
    id: "SK-601",
    name: "Pure Mulberry Satin Silk (19mm)",
    category: "Silk",
    material: "100% Pure Mulberry Silk",
    width: "44 inches (112 cm)",
    gsm: "82 GSM (19 Momme)",
    weave: "High Lustre Satin",
    moq: "30 meters",
    colors: [
      { name: "Royal Emerald", hex: "#047857" },
      { name: "Champagne Pearl", hex: "#EADDC7" },
      { name: "Deep Ruby", hex: "#9F1239" },
      { name: "Midnight Navy", hex: "#0F172A" }
    ],
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
    description: "100% natural Grade 6A mulberry silk with shimmering liquid drape. Hypoallergenic, ultra-smooth against skin, and ideal for high-ticket couture and luxury sleepwear.",
    suitableFor: "Silk Pillowcases, Bridal Camisoles, Luxury Evening Robes, Ties"
  },
  {
    id: "SK-602",
    name: "Raw Matka Tussar Silk",
    category: "Silk",
    material: "100% Handloom Tussar Silk",
    width: "46 inches (116 cm)",
    gsm: "165 GSM",
    weave: "Textured Matka Weave",
    moq: "30 meters",
    colors: [
      { name: "Golden Honey", hex: "#B45309" },
      { name: "Raw Ecru", hex: "#D6D3D1" },
      { name: "Burnt Copper", hex: "#9A3412" }
    ],
    image: "https://images.unsplash.com/photo-1528458876861-544fd1761a91?auto=format&fit=crop&w=800&q=80",
    description: "Richly slubbed wild tussar silk woven from pierces cocoons. Distinct textured slubs, earthy matte finish, and remarkable thermal insulative properties.",
    suitableFor: "Nehru Jackets, Raw Silk Sherwanis, Structured Blazers, Sarees"
  },

  // BLENDED
  {
    id: "BL-701",
    name: "Breathable Tencel-Cotton Luxury Blend",
    category: "Blended",
    material: "60% Tencel Lyocell / 40% Combed Cotton",
    width: "56 inches (142 cm)",
    gsm: "145 GSM",
    weave: "Fine Satin Twill",
    moq: "60 meters",
    colors: [
      { name: "Muted Eucalyptus", hex: "#657E70" },
      { name: "Desert Sand", hex: "#D1BFA7" },
      { name: "Cloud Grey", hex: "#94A3B8" },
      { name: "Deep Ink", hex: "#1E293B" }
    ],
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    description: "Eco-friendly botanical Tencel fibers combined with combed cotton. Silky cool touch, natural moisture control, gentle on sensitive skin, and low carbon footprint.",
    suitableFor: "Smart-Casual Shirting, Sustainable Loungewear, Designer Jumpsuits"
  },
  {
    id: "BL-702",
    name: "Poly-Viscose Wrinkle-Free Suiting",
    category: "Blended",
    material: "65% Polyester / 35% Viscose",
    width: "58 inches (147 cm)",
    gsm: "240 GSM",
    weave: "2-Ply Gabardine Twill",
    moq: "80 meters",
    colors: [
      { name: "Charcoal Heather", hex: "#374151" },
      { name: "Executive Navy", hex: "#1E293B" },
      { name: "Mocha Brown", hex: "#573E32" },
      { name: "Jet Black", hex: "#111827" }
    ],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    description: "Industry-standard suiting fabric engineered with 2-ply high-twist yarn. Excellent crease recovery, sharp crease retention, and high durability for corporate wear.",
    suitableFor: "Uniform Trousers, Corporate Suits, School Uniforms, Blazers"
  }
];

// ============================================================================
// 3. State Management
// ============================================================================
let currentCategoryFilter = "all";
let currentSearchQuery = "";
let activeModalProduct = null;
let selectedModalColor = null;
let selectedModalQuantity = 100; // default meters

// ============================================================================
// 4. WhatsApp & Email Message Formatters (Complies with PRD)
// ============================================================================

/**
 * Builds pre-filled WhatsApp enquiry message and triggers WhatsApp redirect
 */
function enquireOnWhatsApp(product, colorName = null, meters = null) {
  const selectedColorText = colorName || (product.colors && product.colors.length > 0 ? product.colors[0].name : "Standard Colors");
  const quantityText = meters ? `${meters} meters` : `MOQ: ${product.moq}`;

  const message = 
`Hello ${CONFIG.businessName},

I am interested in the following fabric from your catalogue:
*Product:* ${product.name}
*Product Code:* ${product.id}
*Category:* ${product.category}
*Material:* ${product.material}
*Width:* ${product.width}
*Color:* ${selectedColorText}
*Estimated Requirement:* ${quantityText}

Please share:
1. Wholesale price quote per meter
2. Digital shade card & stock availability
3. Dispatch timeline & GST invoice terms

Looking forward to your prompt response.`;

  const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  
  showToast(`Opening WhatsApp enquiry for ${product.id}...`);
  window.open(waUrl, "_blank");
}

/**
 * Builds mailto: link with pre-filled subject and body
 */
function enquireViaEmail(product, colorName = null, meters = null) {
  const selectedColorText = colorName || (product.colors && product.colors.length > 0 ? product.colors[0].name : "Standard Colors");
  const quantityText = meters ? `${meters} meters` : `MOQ: ${product.moq}`;

  const subject = `Wholesale Enquiry: ${product.name} [${product.id}]`;
  const body = 
`Hello Sales Team,

I am interested in placing a wholesale enquiry for the following fabric:

Product Details:
- Name: ${product.name}
- Product Code: ${product.id}
- Category: ${product.category}
- Material: ${product.material}
- Width: ${product.width}
- Weave: ${product.weave || "Standard"}
- Preferred Color: ${selectedColorText}
- Required Quantity: ${quantityText} (MOQ: ${product.moq})

Please provide:
- Best wholesale tiered price (MOQ / 500m / 1000m+)
- Available colorways & swatch sample dispatch
- Delivery timeframe and shipping costs

Business Details:
Company Name: 
Location / City: 
Contact Number: 

Thank you,
Wholesale Buyer`;

  const mailtoUrl = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  showToast("Opening email client...");
  window.location.href = mailtoUrl;
}

/**
 * General WhatsApp Enquiry (Hero, Header, Floating Button)
 */
function triggerGeneralWhatsApp(customMessage = null) {
  const defaultMsg = customMessage || 
`Hello ${CONFIG.businessName},

I am a wholesale buyer looking for quality fabrics. 
Could you please share your latest fabric catalogue, MOQ, and price list?

Thank you!`;

  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(defaultMsg)}`;
  showToast("Connecting to ClothyHub WhatsApp...");
  window.open(url, "_blank");
}

/**
 * General Email Enquiry
 */
function triggerGeneralEmail() {
  const subject = `Wholesale Fabric Catalogue & Quotation Request - ${CONFIG.shortName}`;
  const body = 
`Hello ${CONFIG.businessName} Team,

I would like to inquire about your wholesale fabric inventory and pricing terms.

Please send me:
- Current product catalogue & rate cards
- Swatch sample book details
- Minimum Order Quantities (MOQ) and freight details

My Business Info:
Company Name: 
Nature of Business (Retailer / Manufacturer / Boutique / Exporter): 
Phone / WhatsApp: 

Thank you.`;

  window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// ============================================================================
// 5. DOM Rendering: Categories, Products & Filter Controls
// ============================================================================

function renderCategories() {
  const container = document.getElementById("categoriesGrid");
  if (!container) return;

  container.innerHTML = categoriesData.map(cat => {
    // Count products in this category
    const count = productsData.filter(p => p.category.toLowerCase() === cat.name.replace(" Fabric", "").toLowerCase() || p.category.toLowerCase().includes(cat.id)).length;

    return `
      <div class="category-card" onclick="filterByCategory('${cat.name.replace(' Fabric', '')}')">
        <div class="category-image-wrap">
          <img src="${cat.image}" alt="${cat.name} wholesale supply" loading="lazy" onerror="this.src='${cat.localFallback}'">
          <span class="category-badge-chip">${count > 0 ? count + ' Fabrics' : 'In Stock'}</span>
        </div>
        <div class="category-info">
          <h3 class="category-title">${cat.name}</h3>
          <p class="category-desc">${cat.description}</p>
          <div class="category-cta-row">
            <span>View Fabrics Collection</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function renderCategoryPills() {
  const pillsContainer = document.getElementById("categoryFilterPills");
  if (!pillsContainer) return;

  const categories = [
    { label: "All Fabrics", value: "all", count: productsData.length },
    { label: "Cotton", value: "Cotton", count: productsData.filter(p => p.category === "Cotton").length },
    { label: "Rayon", value: "Rayon", count: productsData.filter(p => p.category === "Rayon").length },
    { label: "Linen", value: "Linen", count: productsData.filter(p => p.category === "Linen").length },
    { label: "Polyester", value: "Polyester", count: productsData.filter(p => p.category === "Polyester").length },
    { label: "Denim", value: "Denim", count: productsData.filter(p => p.category === "Denim").length },
    { label: "Printed", value: "Printed", count: productsData.filter(p => p.category === "Printed").length },
    { label: "Silk", value: "Silk", count: productsData.filter(p => p.category === "Silk").length },
    { label: "Blended", value: "Blended", count: productsData.filter(p => p.category === "Blended").length }
  ];

  pillsContainer.innerHTML = categories.map(cat => `
    <button class="filter-pill ${currentCategoryFilter === cat.value ? 'active' : ''}" 
            onclick="setCategoryFilter('${cat.value}')">
      ${cat.label}
      <span class="pill-count">${cat.count}</span>
    </button>
  `).join("");
}

function renderProducts() {
  const container = document.getElementById("productsGrid");
  const statElement = document.getElementById("resultsStat");
  if (!container) return;

  // Filter products based on search query and category
  const filtered = productsData.filter(product => {
    const matchesCategory = currentCategoryFilter === "all" || 
      product.category.toLowerCase() === currentCategoryFilter.toLowerCase();

    const q = currentSearchQuery.trim().toLowerCase();
    const matchesSearch = !q || 
      product.name.toLowerCase().includes(q) ||
      product.id.toLowerCase().includes(q) ||
      product.material.toLowerCase().includes(q) ||
      product.category.toLowerCase().includes(q) ||
      product.description.toLowerCase().includes(q);

    return matchesCategory && matchesSearch;
  });

  // Update counter
  if (statElement) {
    statElement.innerHTML = `Showing <strong>${filtered.length}</strong> of <strong>${productsData.length}</strong> fabrics`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="catalogue-empty">
        <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h3 class="empty-title">No fabrics match your search</h3>
        <p class="empty-desc">We couldn't find any fabrics matching "${currentSearchQuery}". Try another keyword or browse all categories.</p>
        <button class="btn btn-outline" onclick="resetFilters()">View All Fabrics</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(product => {
    // Generate color swatch preview dots
    const colorsHtml = (product.colors || []).slice(0, 4).map(c => 
      `<span class="color-dot" style="background-color: ${c.hex};" title="${c.name}"></span>`
    ).join("");

    const extraColorsCount = (product.colors && product.colors.length > 4) ? `+${product.colors.length - 4}` : "";

    return `
      <article class="product-card" id="card-${product.id}">
        <div class="product-media" onclick="openProductModal('${product.id}')" style="cursor: pointer;">
          <img src="${product.image}" alt="${product.name} - ${product.material} wholesale" loading="lazy">
          <span class="product-code-badge">${product.id}</span>
          <span class="product-category-chip">${product.category}</span>
          <button class="product-quick-view-btn" aria-label="View specifications for ${product.name}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            Quick Specs
          </button>
        </div>

        <div class="product-content">
          <div class="product-title-row">
            <h3 class="product-title">${product.name}</h3>
          </div>
          <p class="product-short-desc">${product.description}</p>

          <div class="product-specs-list">
            <div class="spec-item">
              <span class="spec-label">Material</span>
              <span class="spec-val">${product.material}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Width</span>
              <span class="spec-val">${product.width}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Weight</span>
              <span class="spec-val">${product.gsm}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Wholesale MOQ</span>
              <span class="spec-val" style="color: var(--gold-600);">${product.moq}</span>
            </div>
          </div>

          <div class="product-colors-wrap">
            <span class="colors-label">Available Shades:</span>
            <div class="color-dots-group">
              ${colorsHtml}
              ${extraColorsCount ? `<span class="color-more-tag">${extraColorsCount}</span>` : ""}
            </div>
          </div>

          <div class="product-pricing-row">
            <div class="wholesale-price-notice">
              <span class="price-status">Wholesale Rate</span>
              <span class="price-lead">Contact for Tiered Quote</span>
            </div>
          </div>

          <div class="product-action-buttons">
            <button class="btn btn-whatsapp" onclick="enquireOnWhatsApp(getProductById('${product.id}'))" aria-label="Enquire about ${product.name} on WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.473-8.413z"/>
              </svg>
              WhatsApp
            </button>
            <button class="btn btn-outline btn-sm" onclick="openProductModal('${product.id}')" title="View Full Specifications & Sample Request">
              Details
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function getProductById(id) {
  return productsData.find(p => p.id === id) || null;
}

// Filter Actions
function setCategoryFilter(category) {
  currentCategoryFilter = category;
  renderCategoryPills();
  renderProducts();
}

function filterByCategory(category) {
  currentCategoryFilter = category;
  renderCategoryPills();
  renderProducts();
  
  // Smooth scroll to catalogue section
  const section = document.getElementById("catalogue");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function resetFilters() {
  currentCategoryFilter = "all";
  currentSearchQuery = "";
  const searchInput = document.getElementById("fabricSearchInput");
  if (searchInput) searchInput.value = "";
  renderCategoryPills();
  renderProducts();
}

// ============================================================================
// 6. Product Details Modal Controller
// ============================================================================

function openProductModal(productId) {
  const product = getProductById(productId);
  if (!product) return;

  activeModalProduct = product;
  selectedModalColor = (product.colors && product.colors.length > 0) ? product.colors[0].name : "Standard Color";
  selectedModalQuantity = parseInt(product.moq) || 50;

  // Populate Modal Fields
  const modalImg = document.getElementById("modalImg");
  const modalCode = document.getElementById("modalCode");
  const modalCat = document.getElementById("modalCategory");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDescription");
  const modalMaterial = document.getElementById("modalMaterial");
  const modalWidth = document.getElementById("modalWidth");
  const modalGsm = document.getElementById("modalGsm");
  const modalWeave = document.getElementById("modalWeave");
  const modalMoq = document.getElementById("modalMoq");
  const modalUsage = document.getElementById("modalUsage");
  const swatchesContainer = document.getElementById("modalSwatches");
  const qtyInput = document.getElementById("modalQtyInput");

  if (modalImg) {
    modalImg.src = product.image;
    modalImg.alt = `${product.name} Fabric`;
  }
  if (modalCode) modalCode.textContent = product.id;
  if (modalCat) modalCat.textContent = product.category;
  if (modalTitle) modalTitle.textContent = product.name;
  if (modalDesc) modalDesc.textContent = product.description;
  if (modalMaterial) modalMaterial.textContent = product.material;
  if (modalWidth) modalWidth.textContent = product.width;
  if (modalGsm) modalGsm.textContent = product.gsm;
  if (modalWeave) modalWeave.textContent = product.weave || "Standard Weave";
  if (modalMoq) modalMoq.textContent = product.moq;
  if (modalUsage) modalUsage.textContent = product.suitableFor || "Apparel & Garments";
  if (qtyInput) qtyInput.value = selectedModalQuantity;

  // Render Swatches in Modal
  if (swatchesContainer) {
    swatchesContainer.innerHTML = (product.colors || []).map((col, index) => `
      <div class="swatch-pill ${index === 0 ? 'selected' : ''}" 
           onclick="selectModalColor('${col.name}', this)">
        <span class="swatch-color-circle" style="background-color: ${col.hex};"></span>
        <span>${col.name}</span>
      </div>
    `).join("");
  }

  // Update preset buttons state
  updateQuantityPresetsUI(selectedModalQuantity);

  // Show Modal
  const modal = document.getElementById("productModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scroll
  }
}

function closeProductModal() {
  const modal = document.getElementById("productModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
  activeModalProduct = null;
}

function selectModalColor(colorName, element) {
  selectedModalColor = colorName;
  const swatches = document.querySelectorAll(".swatch-pill");
  swatches.forEach(s => s.classList.remove("selected"));
  if (element) element.classList.add("selected");
}

function setModalQtyPreset(qty) {
  selectedModalQuantity = qty;
  const input = document.getElementById("modalQtyInput");
  if (input) input.value = qty;
  updateQuantityPresetsUI(qty);
}

function updateQuantityPresetsUI(qty) {
  const buttons = document.querySelectorAll(".qty-preset-btn");
  buttons.forEach(btn => {
    const val = parseInt(btn.getAttribute("data-qty"));
    if (val === qty) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function triggerModalWhatsApp() {
  if (!activeModalProduct) return;
  const input = document.getElementById("modalQtyInput");
  const qty = input ? input.value : selectedModalQuantity;
  enquireOnWhatsApp(activeModalProduct, selectedModalColor, qty);
}

function triggerModalEmail() {
  if (!activeModalProduct) return;
  const input = document.getElementById("modalQtyInput");
  const qty = input ? input.value : selectedModalQuantity;
  enquireViaEmail(activeModalProduct, selectedModalColor, qty);
}

function requestSampleSwatch() {
  if (!activeModalProduct) return;
  const message = 
`Hello ${CONFIG.businessName},

I would like to request a physical swatch sample book for:
Product: ${activeModalProduct.name} (${activeModalProduct.id})
Category: ${activeModalProduct.category}
Color shade interest: ${selectedModalColor || "Full shade card"}

Please advise on sample courier charges and delivery time to my location.`;

  const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  showToast("Requesting fabric swatches on WhatsApp...");
  window.open(waUrl, "_blank");
}

// ============================================================================
// 7. Bulk Custom RFQ & General Contact Forms
// ============================================================================

function handleBulkWhatsAppSubmit(e) {
  if (e) e.preventDefault();

  const fabricType = document.getElementById("bulkFabricType")?.value || "Not specified";
  const quantity = document.getElementById("bulkQuantity")?.value || "Not specified";
  const colorSpec = document.getElementById("bulkColorSpec")?.value || "Any / Assorted";
  const notes = document.getElementById("bulkNotes")?.value || "Standard wholesale dispatch";

  const message = 
`Hello ${CONFIG.businessName},

*BULK / CUSTOM REQUIREMENT ENQUIRY*
- Fabric Type: ${fabricType}
- Target Quantity: ${quantity} meters
- Color / Shade Spec: ${colorSpec}
- Additional Specifications: ${notes}

Please provide a custom manufacturing / wholesale bulk quote with lowest rate per meter and production lead time.`;

  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  showToast("Redirecting to WhatsApp Bulk Desk...");
  window.open(url, "_blank");
}

function handleBulkEmailSubmit() {
  const fabricType = document.getElementById("bulkFabricType")?.value || "General Requirement";
  const quantity = document.getElementById("bulkQuantity")?.value || "500+ meters";
  const colorSpec = document.getElementById("bulkColorSpec")?.value || "Custom";
  const notes = document.getElementById("bulkNotes")?.value || "Need wholesale quote";

  const subject = `Bulk Custom Order RFQ: ${fabricType} (${quantity} meters)`;
  const body = 
`Hello ClothyHub Wholesale Team,

Please provide a formal bulk quotation for:
- Fabric Category: ${fabricType}
- Required Quantity: ${quantity} meters
- Color / Dyeing Spec: ${colorSpec}
- Technical Notes / GSM requirement: ${notes}

Company Name: 
GST / Tax ID: 
Delivery Destination: 
Contact Person: 

Looking forward to your quotation.`;

  window.location.href = `mailto:${CONFIG.salesEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function handleGeneralContactSubmit(e) {
  if (e) e.preventDefault();

  const name = document.getElementById("contactName")?.value || "Buyer";
  const businessType = document.getElementById("contactBusinessType")?.value || "Wholesale Buyer";
  const phone = document.getElementById("contactPhone")?.value || "Not provided";
  const messageText = document.getElementById("contactMessage")?.value || "Inquiry on bulk fabrics";

  const message = 
`Hello ${CONFIG.businessName},

*NEW BUSINESS INQUIRY*
- Name: ${name}
- Business Type: ${businessType}
- Phone / WhatsApp: ${phone}
- Inquiry: ${messageText}

Please contact me back with fabric catalogue and price list.`;

  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  showToast("Connecting your inquiry to WhatsApp...");
  window.open(url, "_blank");
}

// ============================================================================
// 8. Mobile Navigation Drawer & UI Interactions
// ============================================================================

function toggleMobileNav() {
  const drawer = document.getElementById("mobileDrawer");
  const toggle = document.getElementById("mobileToggle");
  const backdrop = document.getElementById("mobileBackdrop");

  const isOpen = drawer.classList.contains("open");
  if (isOpen) {
    drawer.classList.remove("open");
    toggle.classList.remove("active");
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
  } else {
    drawer.classList.add("open");
    toggle.classList.add("active");
    backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeMobileNav() {
  const drawer = document.getElementById("mobileDrawer");
  const toggle = document.getElementById("mobileToggle");
  const backdrop = document.getElementById("mobileBackdrop");

  if (drawer) drawer.classList.remove("open");
  if (toggle) toggle.classList.remove("active");
  if (backdrop) backdrop.classList.remove("open");
  document.body.style.overflow = "";
}

// Toast Feedback Notification
function showToast(message) {
  let toast = document.getElementById("globalToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "globalToast";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// ============================================================================
// 9. Initializer & Event Listeners
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Render Dynamic Sections
  renderCategories();
  renderCategoryPills();
  renderProducts();

  // Search Input Listener
  const searchInput = document.getElementById("fabricSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value;
      renderProducts();
    });
  }

  // Header Scroll Effect
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });

  // Modal Close on Backdrop Click
  const modal = document.getElementById("productModal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeProductModal();
      }
    });
  }

  // Modal Close on Escape Key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductModal();
      closeMobileNav();
    }
  });

  // Active Navigation link highlighter
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");
      const navLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);
      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add("active");
        } else {
          navLink.classList.remove("active");
        }
      }
    });
  });
});
