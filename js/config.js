const siteData = {
  shopName: "DEMO",
  shopTag: "Barbers",
  logoUrl: "images/logo.jpg",
  phone: "0161 330 2090",
  email: "hello@northlinebarbers.co.uk",
  address: "123 ASHTON Street, Manchester, SK16 4XX",
  bookingLink: "https://app.squareup.com/appointments/book/o5xe0j06j1or0z/LVP5PNHFS8XPX/start",
  instagramLink: "#",
  openingHours: "Mon–Fri: 9:00am – 7:00pm | Sat: 9:00am – 5:00pm | Sun: Closed",
  heroTitle: "Sharp Cuts. Clean Finish. Easy Booking.",
  heroText: "Modern barbering with a classic standard. From fresh fades to beard work, we keep it precise, professional, and easy to book.",
  welcomeTitle: "Welcome to Demo Barbers",
  welcomeText: "A professional local barbershop focused on quality cuts, clean service, and a smooth customer experience from the minute you land on the site to the minute you leave the chair.",
  aboutTitle: "Built around quality, consistency, and atmosphere.",
  aboutText: "Northline Barbers delivers modern barbering with a classic standard. We focus on clean results, a professional experience, and making every visit smooth from booking to finish.",
  contactTitle: "Get in touch",
  contactText: "Visit us in shop, call ahead, or book online in seconds.",
  mapEmbedUrl: "https://www.google.com/maps?q=Manchester&output=embed",
  services: [
    {
      name: "Haircut",
      description: "Clean, tailored cut finished to your style.",
      price: "£18"
    },
    {
      name: "Skin Fade",
      description: "Sharp fade with detailed blend and finish.",
      price: "£25"
    },
    {
      name: "Beard Trim",
      description: "Shape-up, tidy, and clean finish.",
      price: "£10"
    },
    {
      name: "Haircut & Beard",
      description: "Full service, most popular appointment.",
      price: "£30"
    },
    {
      name: "Kids Cut",
      description: "Fresh cuts for younger clients.",
      price: "£15"
    }
  ],
  barbers: [
    {
      name: "Taz",
      role: "Barber",
      description: "Known for sharp fades, clean finishes, and consistent cuts."
    },
    {
      name: "Alex",
      role: "Barber",
      description: "Focused on modern cuts, beard work, and tailored styling."
    },
    {
      name: "Mason",
      role: "Barber",
      description: "Reliable, detail-focused barber with a strong eye for finish."
    }
  ]
};

window.siteData = siteData;

// Inject site data into the DOM
function injectSiteData() {
  if (typeof siteData === 'undefined') {
    console.error('siteData is not defined');
    return;
  }
  // Helper function to safely set text content on all matching elements
  function setText(selector, text) {
    document.querySelectorAll(selector).forEach(el => {
      el.textContent = text;
    });
  }

  // Helper function to safely set href on all matching elements
  function setHref(selector, href) {
    document.querySelectorAll(selector).forEach(el => {
      el.href = href;
    });
  }

  // Helper function to safely set src on all matching elements
  function setSrc(selector, src) {
    document.querySelectorAll(selector).forEach(el => {
      el.src = src;
    });
  }

  // Shop name and tag
  setText('[data-shop-name]', siteData.shopName);
  setText('[data-shop-tag]', siteData.shopTag);

  // Logo
  setSrc('[data-logo-src]', siteData.logoUrl);

  // Title
  document.querySelectorAll('[data-title]').forEach(el => {
    el.textContent = el.textContent + siteData.shopName + ' ' + siteData.shopTag;
  });

  // Phone links
  setHref('[data-phone-link]', 'tel:' + siteData.phone);
  setText('[data-phone-link]', 'Call Now');
  setHref('[data-phone-link-display]', 'tel:' + siteData.phone);
  setText('[data-phone-link-display]', siteData.phone);

  // Email
  setHref('[data-email-link]', 'mailto:' + siteData.email);
  setText('[data-email-link]', siteData.email);

  // Address
  setText('[data-address]', siteData.address);

  // Opening hours
  setText('[data-opening-hours]', siteData.openingHours);

  // Booking links
  document.querySelectorAll('[data-booking-link]').forEach(el => {
    el.href = siteData.bookingLink;
  });

  // Instagram
  setHref('[data-instagram-link]', siteData.instagramLink);

  // Copyright
  setText('[data-copyright]', '© 2026 ' + siteData.shopName + ' ' + siteData.shopTag + '. All rights reserved.');

  // Hero
  setText('[data-hero-title]', siteData.heroTitle);
  setText('[data-hero-text]', siteData.heroText);

  // Welcome
  setText('[data-welcome-title]', siteData.welcomeTitle);
  setText('[data-welcome-text]', siteData.welcomeText);

  // About
  setText('[data-about-title]', siteData.aboutTitle);
  setText('[data-about-text]', siteData.aboutText);

  // Contact
  setText('[data-contact-title]', siteData.contactTitle);
  setText('[data-contact-text]', siteData.contactText);

  // Map
  document.querySelectorAll('.map-frame iframe').forEach(iframe => {
    iframe.src = siteData.mapEmbedUrl;
  });

  // Services
  const priceList = document.getElementById('price-list');
  if (priceList) {
    priceList.innerHTML = siteData.services.map(service => `
      <div class="price-item">
        <div>
          <div class="price-name">${service.name}</div>
          <div class="price-desc">${service.description}</div>
        </div>
        <div class="price-value">${service.price}</div>
      </div>
    `).join('');
  }

  // Barbers
  const teamGrid = document.getElementById('team-grid');
  if (teamGrid) {
    teamGrid.innerHTML = siteData.barbers.map((barber, index) => `
      <article class="team-card">
        <div class="team-image">
          <img src="images/barber-${index + 1}.jpg" alt="${barber.name}, ${barber.role}" />
        </div>
        <div class="team-role">${barber.role}</div>
        <h2 class="section-title">${barber.name}</h2>
        <p>${barber.description}</p>
      </article>
    `).join('');
  }
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', injectSiteData);