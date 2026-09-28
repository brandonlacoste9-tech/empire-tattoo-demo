/* EN-only i18n for Empire Tattoo demo */
const i18n = {
  en: {
    "nav.services": "Services",
    "nav.why": "Why us",
    "nav.gallery": "Gallery",
    "nav.faq": "FAQ",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.call": "(405) 600-9475",
    "hero.kicker": "Oklahoma City, Oklahoma · Custom tattoos · Tattoos only, no piercing",
    "hero.title": "Ink worth<br>wearing forever.",
    "hero.sub": "Rated 4.8 out of 5 from 417 reviews: custom tattoos, cover-ups and walk-ins by a crew that treats every piece like a portfolio piece.",
    "hero.cta1": "Call (405) 600-9475",
    "hero.cta2": "See services",
    "trust.t1t": "417 reviews",
    "trust.t1d": "4.8-star rated shop",
    "trust.t2t": "Cover-up specialists",
    "trust.t2d": "New art over old ink",
    "trust.t3t": "Walk-ins welcome",
    "trust.t3d": "Flash &amp; spontaneous pieces",
    "stats.s1n": "4.8\u2605",
    "stats.s1l": "from 417 reviews",
    "stats.s2n": "Oklahoma City",
    "stats.s2l": "&amp; metro area",
    "stats.s3n": "Custom work",
    "stats.s3l": "every piece original",
    "stats.s4n": "Walk-ins",
    "stats.s4l": "&amp; appointments",
    "services.kicker": "What we do",
    "services.title": "Tattoos — custom &amp; bold",
    "services.s1t": "Custom tattoos",
    "services.s1d": "Your idea, drawn to fit your body — one-of-a-kind work.",
    "services.s2t": "Cover-up tattoos",
    "services.s2d": "Old ink, gone — we turn regrettable pieces into art.",
    "services.s3t": "Black &amp; grey",
    "services.s3d": "Smooth shading and bold blackwork that ages beautifully.",
    "services.s4t": "Color work",
    "services.s4d": "Vibrant, saturated color that stays bright for years.",
    "services.s5t": "Script &amp; lettering",
    "services.s5d": "Clean lettering and script, placed with precision.",
    "services.s6t": "Portrait &amp; realism",
    "services.s6d": "Detailed realism work by artists who love the craft.",
    "why.kicker": "Why choose us",
    "why.title": "OKC's serious tattoo shop",
    "why.intro": "Empire Tattoo is tattoos-only — no piercing, no shortcuts. All pricing is done in person, all appointments take a deposit, and every artist brings real experience to the table.",
    "why.l1t": "Tattoos-only shop",
    "why.l1d": "No piercing — all focus goes into the ink.",
    "why.l2t": "Experienced artists",
    "why.l2d": "A crew with years behind the machine.",
    "why.l3t": "In-person pricing",
    "why.l3d": "All pricing is done in person — honest quotes, no guessing.",
    "why.l4t": "Deposit-secured bookings",
    "why.l4d": "All appointments require a deposit — your piece is reserved.",
    "gallery.kicker": "On the job",
    "gallery.title": "Work we are proud of",
    "gallery.c1": "Custom black &amp; grey work",
    "gallery.c2": "Bold color pieces",
    "reviews.kicker": "Word on the street",
    "reviews.title": "Rated 4.8 out of 5 by Oklahoma City customers",
    "reviews.more": "See what clients say about us — 4.8 stars from 417 reviews",
    "faq.kicker": "Good to know",
    "faq.title": "Frequently asked questions",
    "faq.q1": "Do I need an appointment?",
    "faq.a1": "Appointments require a deposit — call (405) 600-9475. Walk-ins are welcome too.",
    "faq.q2": "How do I get pricing?",
    "faq.a2": "All pricing is done in person — stop by and we will quote your piece.",
    "faq.q3": "Do you do piercings?",
    "faq.a3": "No — Empire is tattoos only, no piercing.",
    "faq.q4": "Can you cover up my old tattoo?",
    "faq.a4": "Yes — cover-ups are one of our specialties. Bring it in and we will design over it.",
    "contact.kicker": "Come see us",
    "contact.title": "Get in touch",
    "contact.addr": "Address",
    "contact.phone": "Phone",
    "contact.hours": "Hours",
    "contact.hoursVal": "Monday – Thursday<br>2:00 PM – 9:00 PM<br><br>Friday – Saturday<br>12:00 PM – 10:00 PM<br><br>Sunday<br>Closed",
    "contact.cta": "Call now",
    "footer.tag": "Tattoo shop · Oklahoma City, Oklahoma"
  }
};

function applyLang(lang) {
  const dict = i18n[lang] || i18n.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang("en");

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("mainNav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }, { passive: true });
});
