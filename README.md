# ClothyHub — Wholesale Cloth Business Website

**ClothyHub** is a clean, modern, ultra-premium, and mobile-first B2B digital product catalogue and lead-generation website designed specifically for wholesale textile suppliers, fabric distributors, and cloth merchants.

---

## 🌟 Key Highlights & Features

- **Lead Generation First**: Unlike complex e-commerce stores with carts, checkout, and inventory databases, ClothyHub focuses on converting visitors directly into high-intent **WhatsApp** and **Email** wholesale leads.
- **Instant WhatsApp Pre-filled Inquiries**:
  - One-click enquiry sends fabric name, code, material, width, chosen color shade, and requested meter quantity straight to the seller's WhatsApp.
- **Deep Email Integration**:
  - Pre-formatted `mailto:` links with clean subject lines and structured requirement templates.
- **Interactive Product Modal**:
  - Technical specifications (Material, Width, GSM, Weave, MOQ, Applications).
  - Interactive colorway swatches.
  - Quick meter quantity calculator with volume presets (50m, 100m, 250m, 500m, 1000m+).
  - Swatch sample book request trigger.
- **Real-Time Fabric Search & Filtering**:
  - Instant live search across names, codes, materials, weaves, and descriptions.
  - Category pill filter tabs (Cotton, Rayon, Linen, Polyester, Denim, Printed, Silk, Blended).
- **High-Converting B2B Sections**:
  - Major Cloth Categories showcase.
  - Why Choose Us (6 value pillars).
  - 5-Step Wholesale Process (Browse → Select → Enquire → Quote → Dispatch).
  - About Business with trust metrics.
  - Bulk / Custom Dyeing RFQ card.
  - Direct Contact details with working hours.
  - Persistent Floating WhatsApp Quick Button with pulsing status badge.
- **Zero Dependencies**:
  - Built with 100% standard HTML5, CSS3, and modern Vanilla JavaScript (ES6+).
  - No frameworks (No React, Vue, Node.js, PHP, or databases needed).
  - Free and instant to host on any static hosting (GitHub Pages, Vercel, Netlify, or Apache/Nginx).

---

## 📁 Project File Structure

```text
cloth/
│
├── index.html            # Main semantic HTML5 homepage structure
├── css/
│   └── style.css         # Modern design system (tokens, luxury palette, responsive breakpoints)
├── js/
│   └── script.js         # Config, product catalogue dataset, search, filter, modal, & WhatsApp logic
├── images/               # Product photos, category images, and banners
└── README.md             # Documentation and customization guide
```

---

## ⚙️ How to Customize Business Details

Open [`js/script.js`](file:///c:/Users/Hamza/Desktop/cloth/js/script.js) and locate the `CONFIG` object at the very top:

```javascript
const CONFIG = {
  businessName: "ClothyHub Wholesale Textiles",
  shortName: "ClothyHub",
  // International format without '+' or leading zeros for wa.me
  whatsappNumber: "919876543210", 
  displayPhone: "+91 98765 43210",
  email: "sales@clothyhub.com",
  salesEmail: "orders@clothyhub.com",
  address: "Textile Trade Market, Ring Road, Surat & Lower Parel, Mumbai, India",
  workingHours: "Mon - Sat: 9:00 AM - 7:30 PM IST",
  currencySymbol: "₹",
  defaultMoq: "50 meters"
};
```

Simply update `whatsappNumber` to your business phone number (country code + phone number with no spaces or symbols), and update your email and address. The entire website, header, hero, modal, forms, and floating button will immediately reflect your settings.

---

## 🧵 How to Add or Modify Fabrics

All product data is centralized inside the `productsData` array in [`js/script.js`](file:///c:/Users/Hamza/Desktop/cloth/js/script.js). 

To add a new fabric, add an item following this format:

```javascript
{
  id: "CT-003",
  name: "Organic Khadi Cotton Weave",
  category: "Cotton",
  material: "100% Hand-Spun Cotton",
  width: "44 inches (112 cm)",
  gsm: "130 GSM",
  weave: "Plain Handloom",
  moq: "50 meters",
  colors: [
    { name: "Natural Ecru", hex: "#F5F5DC" },
    { name: "Indigo Blue", hex: "#1B2A4A" }
  ],
  image: "https://images.unsplash.com/...", // or local image path: "images/products/khadi.jpg"
  description: "Authentic hand-spun breathable organic cotton...",
  suitableFor: "Kurta Pajamas, Shirts, Artisanal Apparel"
}
```

The search bar, category filter, product counts, and modal will automatically update without any changes to the HTML!

---

## 🚀 How to Run & Deploy

### 1. View Locally
Simply double-click [`index.html`](file:///c:/Users/Hamza/Desktop/cloth/index.html) in your file manager to open it directly in Chrome, Edge, Safari, or Firefox.

Or run a local static server if you prefer:
```bash
npx serve .
# or
python -m http.server 8080
```

### 2. Deploy Free to Web
- **GitHub Pages**: Push this repository to GitHub and enable GitHub Pages in repository settings.
- **Vercel / Netlify**: Drag-and-drop the `cloth` folder onto Netlify or link via Vercel for instant free global CDN hosting.
- **Static Hosting**: Upload all files to cPanel `public_html` or any web hosting server.
