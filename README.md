# Beyond Plastic — Website

## Folder Structure

```
beyond-plastic/
│
├── index.html                 ← Home page (with decomposition animation)
│
├── pages/
│   ├── about.html             ← About page
│   ├── products.html          ← Products page
│   ├── certifications.html    ← Certifications page
│   ├── other.html             ← Partners, achievements, gallery
│   └── contact.html           ← Contact form + map
│
├── css/
│   ├── style.css              ← Global styles (navbar, footer, buttons)
│   ├── home.css               ← Home page / animation styles
│   ├── about.css              ← About page styles
│   ├── products.css           ← Products page styles
│   ├── certifications.css     ← Certifications page styles
│   ├── other.css              ← Other page styles
│   └── contact.css            ← Contact page styles
│
├── js/
│   ├── main.js                ← Navbar scroll, hamburger, scroll reveal
│   └── home-anim.js           ← Decomposition animation controller
│
└── images/
    ├── products/              ← Add product images here
    │   └── (u-cut-1.jpg, d-cut-1.jpg, etc.)
    ├── certificates/          ← Add certificate images here
    ├── team/                  ← Add partner/team photos here
    └── other/                 ← Factory, achievements, process images


## How to Add Product Images

1. Save your image to: `images/products/your-image.jpg`
2. Open `pages/products.html`
3. Find the correct product section (e.g., U-Cut Bags)
4. Copy a card template and add your image filename:

```html
<div class="product-card">
  <div class="product-img-box">
    <img src="../images/products/your-image.jpg" alt="Product Description"/>
  </div>
  <p class="product-name">Your Product Name</p>
</div>
```

The grid is set to 3 columns and automatically wraps — no CSS changes needed.


## How to Add Certifications

Open `pages/certifications.html` and add inside `.certs-grid`:

```html
<div class="cert-card">
  <div class="cert-img-border">
    <img src="../images/certificates/YOUR-CERT.jpg" alt="Cert Name"
         onerror="this.src='https://placehold.co/320x240/d8f3dc/2d6a4f?text=Certificate'"/>
  </div>
  <div class="cert-info-border">
    <h3 class="cert-title">
      <a href="path/to/document.pdf" target="_blank">CERT NAME <i class="fas fa-external-link-alt"></i></a>
    </h3>
    <p class="cert-desc">Description of the certification.</p>
    <a href="path/to/document.pdf" target="_blank" class="cert-view-btn">
      <i class="fas fa-file-pdf"></i> View Certificate
    </a>
  </div>
</div>
```


## How to Add Gallery Images (Other Page)

Open `pages/other.html` and add inside `.gallery-grid`:

```html
<div class="gallery-item">
  <img src="../images/other/YOUR-IMAGE.jpg" alt="Caption"/>
  <div class="gallery-caption">Your Caption Here</div>
</div>
```


## Google Maps (Contact Page)

Replace the `src` in `pages/contact.html` in the `<iframe>` tag with your own
Google Maps embed URL:

1. Go to maps.google.com
2. Search for your factory address
3. Click Share → Embed a map → Copy HTML
4. Replace the iframe src URL


## Fonts & Icons Used

- Fonts: Playfair Display + DM Sans (Google Fonts)
- Icons: Font Awesome 6.5 (CDN)
- No build tools required — open index.html directly in a browser.
