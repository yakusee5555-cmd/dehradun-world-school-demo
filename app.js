/* ============================================================
   RENDERING ONLY — do not edit content here.
   All text, photos and links live in content.js (the SITE object).
   This file just reads SITE and builds the page.
   ============================================================ */
(function () {
  "use strict";
  var S = SITE;
  function el(id) { return document.getElementById(id); }
  function set(id, text) { var n = el(id); if (n) n.textContent = text; }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* Top bar + header */
  set("topbarText", S.topbar.text);
  var tp = el("topbarPhone");
  tp.textContent = S.school.phoneDisplay; tp.href = S.school.phoneLink;
  set("topbarCta", S.topbar.ctaText);
  set("brandMark", S.school.shortName);
  set("brandName", S.school.name);
  set("brandSub", "CISCE · ICSE & ISC · Dehradun");
  document.title = S.school.name + ", " + S.school.city + " — ICSE & ISC (CISCE) | Demo";

  /* Hero */
  el("heroImage").src = S.hero.image;
  set("heroEyebrow", S.hero.eyebrow);
  set("heroTitle", S.hero.title);
  set("heroSub", S.hero.subtitle);
  set("heroPrimary", S.hero.primaryCta);
  var hs = el("heroSecondary");
  hs.textContent = S.hero.secondaryCta + " · " + S.school.phoneDisplay;
  hs.href = S.school.phoneLink;
  el("statBand").innerHTML = S.hero.stats.map(function (st) {
    return '<div class="stat"><strong>' + esc(st.value) + '</strong><span>' + esc(st.label) + "</span></div>";
  }).join("");

  /* About */
  el("aboutImage").src = S.about.image;
  set("aboutEyebrow", S.about.eyebrow);
  set("aboutHeading", S.about.heading);
  el("aboutParas").innerHTML = S.about.paragraphs.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  el("aboutHighlights").innerHTML = S.about.highlights.map(function (h) { return "<li>" + esc(h) + "</li>"; }).join("");

  /* Pillars */
  set("pillarsEyebrow", S.pillars.eyebrow);
  set("pillarsHeading", S.pillars.heading);
  el("pillarCards").innerHTML = S.pillars.items.map(function (p) {
    return '<article class="card pillar-card"><span class="monogram">' + esc(p.initial) + "</span><h3>" +
      esc(p.title) + "</h3><p>" + esc(p.text) + "</p></article>";
  }).join("");

  /* Academics */
  set("acadEyebrow", S.academics.eyebrow);
  set("acadHeading", S.academics.heading);
  set("acadIntro", S.academics.intro);
  el("acadCards").innerHTML = S.academics.stages.map(function (st) {
    return '<article class="card acad-card"><div class="card-media"><img src="' + esc(st.image) +
      '" alt="' + esc(st.name) + '" loading="lazy"><span class="card-tag">' + esc(st.tag) + "</span></div>" +
      '<div class="card-body"><h3>' + esc(st.name) + "</h3><p>" + esc(st.text) + "</p><ul>" +
      st.points.map(function (pt) { return "<li>" + esc(pt) + "</li>"; }).join("") +
      "</ul></div></article>";
  }).join("");

  /* Facilities */
  set("facEyebrow", S.facilities.eyebrow);
  set("facHeading", S.facilities.heading);
  el("facGrid").innerHTML = S.facilities.items.map(function (f) {
    return '<article class="fac-card"><span class="monogram monogram-gold">' + esc(f.initial) + "</span><h3>" +
      esc(f.title) + "</h3><p>" + esc(f.text) + "</p></article>";
  }).join("");

  /* Admissions */
  set("admEyebrow", S.admissions.eyebrow);
  set("admHeading", S.admissions.heading);
  set("admIntro", S.admissions.intro);
  el("admSteps").innerHTML = S.admissions.steps.map(function (st, i) {
    return '<li class="step"><span class="step-num">' + (i + 1) + "</span><h3>" + esc(st.title) +
      "</h3><p>" + esc(st.text) + "</p></li>";
  }).join("");
  set("feesNote", S.admissions.feesNote);
  set("documentsNote", S.admissions.documentsNote);
  set("datesNote", S.admissions.datesNote);
  set("formHeading", S.admissions.form.heading);
  set("formNote", S.admissions.form.note);
  set("formButton", S.admissions.form.button);

  var form = el("enquiryForm");
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    var ok = el("formSuccess");
    ok.textContent = S.admissions.form.success;
    ok.hidden = false;
    form.reset();
    ok.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  /* Gallery */
  set("galEyebrow", S.gallery.eyebrow);
  set("galHeading", S.gallery.heading);
  set("galNote", S.gallery.note);
  el("galleryGrid").innerHTML = S.gallery.items.map(function (g) {
    return '<figure class="card gallery-card"><img src="' + esc(g.image) + '" alt="' + esc(g.caption) +
      '" loading="lazy"><figcaption>' + esc(g.caption) + "</figcaption></figure>";
  }).join("");

  /* Testimonials */
  set("testEyebrow", S.testimonials.eyebrow);
  set("testHeading", S.testimonials.heading);
  el("testCards").innerHTML = S.testimonials.items.map(function (t) {
    return '<article class="card test-card"><div class="quote-mark" aria-hidden="true">&ldquo;</div><blockquote>“' +
      esc(t.quote) + '”</blockquote><p class="test-name">— ' + esc(t.name) + "</p></article>";
  }).join("");

  /* Notices */
  set("noticeEyebrow", S.notices.eyebrow);
  set("noticeHeading", S.notices.heading);
  set("noticeNote", S.notices.note);
  el("noticeList").innerHTML = S.notices.items.map(function (n) {
    return '<div class="notice"><span class="notice-tag">' + esc(n.tag) + "</span><p>" + esc(n.text) + "</p></div>";
  }).join("");

  /* Contact */
  set("contactEyebrow", S.contact.eyebrow);
  set("contactHeading", S.contact.heading);
  el("contactAddress").innerHTML = S.school.addressLines.map(esc).join("<br>");
  var cp = el("contactPhone");
  cp.textContent = S.school.phoneDisplay; cp.href = S.school.phoneLink;
  var ce = el("contactEmail");
  ce.textContent = S.school.email; ce.href = "mailto:" + S.school.email;
  set("officeHours", S.school.officeHours);
  set("officeHoursNote", S.school.officeHoursNote);
  var cc = el("contactCall");
  cc.textContent = "Call " + S.school.phoneDisplay; cc.href = S.school.phoneLink;
  var ml = el("mapLink");
  ml.textContent = S.contact.mapCta; ml.href = S.school.mapUrl;
  set("contactMark", S.school.shortName);
  set("contactCardName", S.school.name);
  set("contactCardAff", S.school.affiliation);

  /* Footer */
  set("footerName", S.school.name);
  set("footerAff", S.school.affiliation);
  set("footerAddress", S.school.addressLines.join(" "));
  var fp = el("footerPhone");
  fp.textContent = S.school.phoneDisplay; fp.href = S.school.phoneLink;
  var fe = el("footerEmail");
  fe.textContent = S.school.email; fe.href = "mailto:" + S.school.email;
  set("footerDemo", S.footer.demoNote);
  set("footerCredit", S.footer.credit);

  /* Sticky mobile bar */
  el("mobileCall").href = S.school.phoneLink;
})();
