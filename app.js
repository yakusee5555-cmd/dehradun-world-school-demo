/* ============================================================
   RENDERING ONLY — do not edit content here.
   All text, photos and links live in content.js (the SITE object).
   This file reads SITE and builds the shared chrome (top bar,
   header with logo + nav, footer, sticky mobile bar) and the
   sections of whichever page it is loaded on.
   The current page is set by <body data-page="...">.
   ============================================================ */
(function () {
  "use strict";
  var S = SITE;
  var page = document.body.getAttribute("data-page") || "home";

  function el(id) { return document.getElementById(id); }
  function set(id, text) { var n = el(id); if (n) n.textContent = text; }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function fill(id, html) { var n = el(id); if (n) n.innerHTML = html; }

  /* ---------- Shared chrome ---------- */
  function chrome() {
    set("topbarText", S.topbar.text);
    var tp = el("topbarPhone");
    if (tp) { tp.textContent = S.school.phoneDisplay; tp.href = S.school.phoneLink; }
    var tc = el("topbarCta");
    if (tc) { tc.textContent = S.topbar.ctaText; tc.href = S.topbar.ctaHref; }

    /* Header nav with active-page state + dropdowns.
       Sections with children get a dropdown panel (desktop:
       hover / focus / caret click; mobile: accordion). The
       parent item of the current page is marked active too. */
    fill("mainNav", S.nav.map(function (n) {
      var active = n.key === page;
      var link = '<a class="nav-link' + (active ? " active" : "") + '" href="' + esc(n.href) + '"' +
        (active ? ' aria-current="page"' : "") + ">" + esc(n.label) + "</a>";
      if (!n.children || !n.children.length) {
        return '<div class="nav-item' + (active ? " nav-item-active" : "") + '">' + link + "</div>";
      }
      var kids = n.children.map(function (c) {
        var ext = c.external ? ' target="_blank" rel="noopener"' : "";
        return '<a href="' + esc(c.href) + '"' + ext + ">" + esc(c.label) + "</a>";
      }).join("");
      var cols = n.children.length >= 5 ? " dropdown-cols" : "";
      return '<div class="nav-item has-drop' + (active ? " nav-item-active" : "") + '">' + link +
        '<button class="nav-caret" type="button" aria-expanded="false" aria-haspopup="true" aria-label="Toggle the ' +
        esc(n.label) + ' menu"></button>' +
        '<div class="dropdown' + cols + '">' + kids + "</div></div>";
    }).join(""));

    /* Dropdown open/close: caret toggles its own item and closes
       the others; Escape and outside clicks close everything. */
    var navEl = el("mainNav");
    function closeDrops(except) {
      if (!navEl) return;
      var items = navEl.querySelectorAll(".nav-item.open");
      for (var i = 0; i < items.length; i++) {
        if (items[i] !== except) {
          items[i].classList.remove("open");
          var b = items[i].querySelector(".nav-caret");
          if (b) b.setAttribute("aria-expanded", "false");
        }
      }
    }
    if (navEl) {
      var carets = navEl.querySelectorAll(".nav-caret");
      for (var ci = 0; ci < carets.length; ci++) {
        carets[ci].addEventListener("click", function (ev) {
          ev.stopPropagation();
          var item = this.parentNode;
          var willOpen = !item.classList.contains("open");
          closeDrops(item);
          item.classList.toggle("open", willOpen);
          this.setAttribute("aria-expanded", willOpen ? "true" : "false");
        });
      }
      document.addEventListener("click", function (ev) {
        if (!ev.target.closest || !ev.target.closest(".nav-item")) closeDrops(null);
      });
      document.addEventListener("keydown", function (ev) {
        if (ev.key === "Escape") closeDrops(null);
      });
    }

    /* Mobile menu toggle */
    var toggle = el("navToggle"), nav = el("mainNav");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    /* Footer */
    set("footerName", S.school.name);
    set("footerAff", S.school.affiliation);
    set("footerAddress", S.school.addressLines.join(" "));
    var fp = el("footerPhone");
    if (fp) { fp.textContent = S.school.phoneDisplay; fp.href = S.school.phoneLink; }
    var fe = el("footerEmail");
    if (fe) { fe.textContent = S.school.email; fe.href = "mailto:" + S.school.email; }
    var ff = el("footerFb");
    if (ff) { ff.textContent = S.school.facebook.label; ff.href = S.school.facebook.url; }
    fill("footerNav", S.nav.map(function (n) {
      return '<a href="' + esc(n.href) + '">' + esc(n.label) + "</a>";
    }).join(""));
    set("footerDemo", S.footer.demoNote);
    set("footerCredit", S.footer.credit);

    /* Floating WhatsApp button — every page, bottom-right
       (CSS shows it on desktop viewports only). */
    var wa = document.createElement("a");
    wa.className = "wa-float";
    wa.href = S.school.whatsapp;
    wa.target = "_blank";
    wa.rel = "noopener";
    wa.setAttribute("aria-label", "Chat with the school on WhatsApp");
    wa.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91A9.87 9.87 0 0 0 12.04 2zm0 18.03h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 8.24 8.25c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.38-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>';
    document.body.appendChild(wa);
  }

  /* ---------- Shared building blocks ---------- */
  function pillarCards() {
    return S.pillars.items.map(function (p) {
      return '<article class="card pillar-card"><span class="monogram">' + esc(p.initial) + "</span><h3>" +
        esc(p.title) + "</h3><p>" + esc(p.text) + "</p></article>";
    }).join("");
  }
  function sectionHead(eyebrow, heading, intro, light) {
    return '<p class="eyebrow' + (light ? " eyebrow-light" : "") + '">' + esc(eyebrow) + "</p><h2>" +
      esc(heading) + "</h2>" + (intro ? '<p class="section-intro">' + esc(intro) + "</p>" : "");
  }
  function testCards(items) {
    return items.map(function (t) {
      return '<article class="card test-card"><div class="quote-mark" aria-hidden="true">&ldquo;</div><blockquote>“' +
        esc(t.quote) + '”</blockquote><p class="test-name">— ' + esc(t.name) + "</p></article>";
    }).join("");
  }
  function noticeList(items) {
    return items.map(function (n) {
      return '<div class="notice"><span class="notice-tag">' + esc(n.tag) + "</span><p>" + esc(n.text) + "</p></div>";
    }).join("");
  }
  function eventCards(events) {
    return events.map(function (ev) {
      var media = ev.image
        ? '<div class="card-media"><img src="' + esc(ev.image) + '" alt="' + esc(ev.imageAlt) + '" loading="lazy"></div>'
        : "";
      return '<article class="card event-card"' + (ev.anchor ? ' id="' + esc(ev.anchor) + '"' : "") + ">" + media + '<div class="card-body"><h3>' + esc(ev.title) +
        "</h3><p>" + esc(ev.text) + "</p></div></article>";
    }).join("");
  }
  /* Facility / lab / sports cards — photo-top cards with a
     hover zoom + lift and a scroll-reveal (aryan's call,
     Oct 22, 2026: the old monogram tiles "looked like an AI
     periodic table"). Falls back to the monogram tile when an
     item has no photo. The `light` arg is kept for call-site
     compatibility; cards are white on every background now. */
  function facCards(items, light) {
    return items.map(function (f) {
      var media = f.image
        ? '<div class="fac-media"><img src="' + esc(f.image) + '" alt="' + esc(f.imageAlt || "") +
          '" loading="lazy"' + (f.imagePos ? ' style="object-position:' + esc(f.imagePos) + '"' : "") + "></div>"
        : "";
      var mono = f.image ? "" : '<span class="monogram">' + esc(f.initial) + "</span>";
      return '<article class="fac-card reveal">' + media + '<div class="fac-body">' + mono +
        "<h3>" + esc(f.title) + "</h3><p>" + esc(f.text) + "</p></div></article>";
    }).join("");
  }
  function facebookCard() {
    var f = S.home.facebookCard;
    return '<div class="fb-card"><div><h3>' + esc(f.heading) + "</h3><p>" + esc(f.text) + '</p><p class="fb-meta">' +
      esc(S.school.facebook.label) + " · " + esc(S.school.facebook.followers) + '</p></div>' +
      '<a class="btn btn-green" href="' + esc(S.school.facebook.url) + '" target="_blank" rel="noopener">' + esc(f.buttonText) + "</a></div>";
  }
  function pageHero(eyebrow, title, intro) {
    return '<section class="page-hero"><div class="container"><p class="eyebrow eyebrow-light">' +
      esc(eyebrow) + "</p><h1>" + esc(title) + "</h1>" +
      (intro ? '<p class="page-hero-intro">' + esc(intro) + "</p>" : "") + "</div></section>";
  }

  /* Photo slot: shows the photo when one is supplied, otherwise
     the dashed reserved-slot label. */
  function fillPhotoSlot(node, photo, alt, label) {
    if (!node) return;
    if (photo) {
      node.classList.add("has-photo");
      node.innerHTML = '<img src="' + esc(photo) + '" alt="' + esc(alt) + '" loading="lazy">';
    } else {
      node.textContent = label;
    }
  }

  /* ---------- Enquiry form (Admissions page) ---------- */
  function wireForm() {
    var form = el("enquiryForm");
    if (!form) return;
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var ok = el("formSuccess");
      ok.textContent = S.admissionsPage.form.success;
      ok.hidden = false;
      form.reset();
      ok.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  /* ================= PAGE RENDERERS ================= */

  function renderHome() {
    var H = S.home;
    el("heroImage").src = H.hero.image;
    el("heroImage").alt = H.hero.imageAlt;
    set("heroEyebrow", H.hero.eyebrow);
    set("heroTitle", H.hero.title);
    set("heroTagline", H.hero.tagline);
    set("heroMotto", S.school.motto + " · " + S.school.mottoTranslation);
    set("heroSub", H.hero.subtitle);
    var hp = el("heroPrimary");
    hp.textContent = H.hero.primaryCta; hp.href = H.hero.primaryHref;
    var hs = el("heroSecondary");
    hs.textContent = H.hero.secondaryCta + " · " + S.school.phoneDisplay;
    hs.href = S.school.phoneLink;
    fill("statBand", H.hero.stats.map(function (st) {
      return '<div class="stat"><strong>' + esc(st.value) + "</strong><span>" + esc(st.label) + "</span></div>";
    }).join(""));

    el("welcomeImage").src = H.welcome.image;
    el("welcomeImage").alt = H.welcome.imageAlt;
    fill("welcomeHead", sectionHead(H.welcome.eyebrow, H.welcome.heading));
    set("welcomeText", H.welcome.text);
    var wl = el("welcomeLink");
    wl.textContent = H.welcome.linkText; wl.href = H.welcome.linkHref;

    fill("pillarsHead", sectionHead(S.pillars.eyebrow, S.pillars.heading));
    fill("pillarCards", pillarCards());

    fill("stagesHead", sectionHead(H.stagesHeading.eyebrow, H.stagesHeading.heading, H.stagesHeading.intro));
    fill("stageCards", S.academicsPage.stages.map(function (st) {
      return '<article class="card stage-mini"><span class="card-tag-static">' + esc(st.tag) + "</span><h3>" +
        esc(st.name) + '</h3><p class="stage-classes">' + esc(st.classes) + "</p><p>" + esc(st.text) + "</p></article>";
    }).join(""));
    var sl = el("stagesLink");
    sl.textContent = H.stagesHeading.linkText; sl.href = H.stagesHeading.linkHref;

    var byTitle = {};
    S.campusPage.facilities.forEach(function (f) { byTitle[f.title] = f; });
    var picks = H.facilitiesHeading.picks.map(function (t) { return byTitle[t]; }).filter(Boolean);
    fill("facPicks", facCards(picks, true));
    var fl = el("facLink");
    fl.textContent = H.facilitiesHeading.linkText; fl.href = H.facilitiesHeading.linkHref;

    fill("eventsHead", sectionHead(H.eventsHeading.eyebrow, H.eventsHeading.heading));
    /* Skip the event that uses the hero photo — no image repeats on one page. */
    var homeEvents = S.schoolLifePage.events.filter(function (ev) { return ev.image !== H.hero.image; }).slice(0, 3);
    fill("homeEvents", eventCards(homeEvents));
    var evl = el("eventsLink");
    evl.textContent = H.eventsHeading.linkText; evl.href = H.eventsHeading.linkHref;

    fill("testHead", sectionHead(S.testimonials.eyebrow, S.testimonials.heading));
    fill("testCards", testCards(S.testimonials.items.slice(0, 3)));
    fill("noticePreview", noticeList(S.newsPage.notices));
    fill("fbSlot", facebookCard());

    var V = H.visit;
    fill("visitHead", sectionHead(V.eyebrow, V.heading));
    set("visitAddress", S.school.addressLines.join(" "));
    var mf = el("mapFrame");
    if (mf) { mf.src = V.mapEmbed; mf.title = V.mapTitle; }
    var dl = el("directionsLink");
    if (dl) { dl.textContent = V.directionsText; dl.href = V.directionsHref; }

    var DW = H.directorWelcome;
    fill("dwHead", sectionHead(DW.eyebrow, DW.heading));
    fill("dwText", DW.text ? "<p>" + esc(DW.text) + "</p>"
      : '<p class="dw-note">' + esc(DW.slotNote) + "</p>");
    fillPhotoSlot(el("dwPhotoSlot"), DW.photo, DW.photoAlt, DW.photoLabel);
    set("dwName", DW.name);
    set("dwRole", DW.role);
  }

  function renderAbout() {
    var A = S.aboutPage;
    fill("pageHero", pageHero(A.heroEyebrow, A.heroTitle, A.heroIntro));
    el("aboutImage").src = A.image;
    el("aboutImage").alt = A.imageAlt;
    set("aboutHeading", A.heading);
    fill("aboutParas", A.paragraphs.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join(""));
    fill("aboutHighlights", A.highlights.map(function (h) { return "<li>" + esc(h) + "</li>"; }).join(""));

    fill("foundingHead", sectionHead(A.founding.eyebrow, A.founding.heading));
    fill("foundingParas", A.founding.paragraphs.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join(""));

    fill("missionHead", sectionHead(A.mission.eyebrow, A.mission.heading));
    fill("missionCards", A.mission.items.map(function (m) {
      return '<article class="card pillar-card"><span class="monogram">' + esc(m.initial) + "</span><h3>" +
        esc(m.title) + "</h3><p>" + esc(m.text) + "</p></article>";
    }).join(""));

    fill("pillarsHead", sectionHead(S.pillars.eyebrow, S.pillars.heading));
    fill("pillarCards", pillarCards());

    set("crestEyebrow", A.crest.eyebrow);
    set("crestHeading", A.crest.heading);
    set("crestText", A.crest.text);
    set("crestMottoLabel", A.crest.mottoLabel);
    set("crestMotto", S.school.motto);
    set("crestMottoTr", S.school.mottoTranslation);
    set("crestTaglineLabel", A.crest.taglineLabel);
    set("crestTagline", "“" + S.school.tagline + "”");

    fill("timelineHead", sectionHead(A.timeline.eyebrow, A.timeline.heading, A.timeline.note));
    fill("timelineList", A.timeline.items.map(function (t) {
      return '<li class="timeline-item"><span class="timeline-year">' + esc(t.year) + "</span><p>" + esc(t.text) + "</p></li>";
    }).join(""));

    fill("leadershipHead", sectionHead(A.leadership.eyebrow, A.leadership.heading));
    set("leadershipNote", A.leadership.slotNote);
    var lc = el("leadershipCta");
    lc.textContent = A.leadership.slotCta + " · " + S.school.phoneDisplay;
    lc.href = S.school.phoneLink;
  }

  function renderAcademics() {
    var A = S.academicsPage;
    fill("pageHero", pageHero(A.heroEyebrow, A.heroTitle, A.heroIntro));
    set("stagesHeading", A.stagesHeading);
    fill("acadCards", A.stages.map(function (st) {
      return '<article class="card acad-card"' + (st.anchor ? ' id="' + esc(st.anchor) + '"' : "") + '><div class="card-media"><img src="' + esc(st.image) +
        '" alt="' + esc(st.name) + '" loading="lazy"><span class="card-tag">' + esc(st.tag) + "</span></div>" +
        '<div class="card-body"><p class="stage-classes">' + esc(st.classes) + "</p><h3>" + esc(st.name) + "</h3><p>" +
        esc(st.text) + "</p><ul>" + st.points.map(function (pt) { return "<li>" + esc(pt) + "</li>"; }).join("") +
        "</ul></div></article>";
    }).join(""));
    fill("approachHead", sectionHead(A.approach.eyebrow, A.approach.heading));
    fill("approachCards", A.approach.items.map(function (m) {
      return '<article class="card pillar-card"><span class="monogram">' + esc(m.initial) + "</span><h3>" +
        esc(m.title) + "</h3><p>" + esc(m.text) + "</p></article>";
    }).join(""));
    fill("labsHead", sectionHead(A.labs.eyebrow, A.labs.heading));
    fill("labsGrid", facCards(A.labs.items, true));
    fill("resultsHead", sectionHead(A.results.eyebrow, A.results.heading));
    fill("resultsBody",
      '<figure class="results-figure"><img src="' + esc(A.results.image) + '" alt="' + esc(A.results.imageAlt) +
      '" loading="lazy"><figcaption>' + esc(A.results.imageCaption) + "</figcaption></figure>" +
      '<div class="card-row">' + A.results.boards.map(function (b) {
        return '<article class="card result-card"><p class="result-exam">' + esc(b.exam) +
          '</p><p class="result-score">' + esc(b.score) + '</p><p class="result-topper">Topper — ' +
          esc(b.topper) + "</p><p>" + esc(b.note) + "</p></article>";
      }).join("") + "</div>" +
      '<p class="section-intro" style="margin-top:1.2rem">' + esc(A.results.note) + "</p>");
    set("streamsHeading", A.streamsNote.heading);
    set("streamsText", A.streamsNote.text);
    set("subjectsNote", A.subjectsNote);
  }

  function renderAdmissions() {
    var A = S.admissionsPage;
    fill("pageHero", pageHero(A.heroEyebrow, A.heroTitle, A.heroIntro));
    set("admHeading", A.heading);
    fill("admSteps", A.steps.map(function (st, i) {
      return '<li class="step"><span class="step-num">' + (i + 1) + "</span><h3>" + esc(st.title) +
        "</h3><p>" + esc(st.text) + "</p></li>";
    }).join(""));
    set("feesNote", A.feesNote);
    set("documentsNote", A.documentsNote);
    fill("documentsList", A.documents.map(function (d) { return "<li>" + esc(d) + "</li>"; }).join(""));
    set("datesNote", A.datesNote);
    set("applyHeading", A.applyCard.heading);
    set("applyText", A.applyCard.text);
    var apb = el("applyBtn");
    if (apb) { apb.textContent = A.applyCard.button; apb.href = "application.html"; }
    set("formHeading", A.form.heading);
    set("formNote", A.form.note);
    set("formButton", A.form.button);
    wireForm();
    set("faqHeading", A.faq.heading);
    fill("faqList", A.faq.items.map(function (f) {
      return '<div class="faq-item"><h3>' + esc(f.q) + "</h3><p>" + esc(f.a) + "</p></div>";
    }).join(""));
  }

  function renderCampus() {
    var C = S.campusPage;
    fill("pageHero", pageHero(C.heroEyebrow, C.heroTitle, C.heroIntro));
    set("facHeading", C.heading);
    fill("facGrid", facCards(C.facilities, false));
    set("photosHeading", C.photos.heading);
    fill("campusPhotos", C.photos.items.map(function (p) {
      return '<figure class="card gallery-card"><img src="' + esc(p.image) + '" alt="' + esc(p.caption) +
        '" loading="lazy"><figcaption>' + esc(p.caption) + "</figcaption></figure>";
    }).join(""));
    fill("sportsHead", sectionHead(C.sports.eyebrow, C.sports.heading, C.sports.intro));
    fill("sportsGrid", facCards(C.sports.items, true));
    fill("safetyHead", sectionHead(C.safety.eyebrow, C.safety.heading));
    fill("safetyList", C.safety.items.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join(""));
  }

  function renderSchoolLife() {
    var L = S.schoolLifePage;
    fill("pageHero", pageHero(L.heroEyebrow, L.heroTitle, L.heroIntro));
    set("eventsHeading", L.eventsHeading);
    fill("eventCards", eventCards(L.events));
    fill("sportsHead", sectionHead(L.sports.eyebrow, L.sports.heading, L.sports.intro));
    el("sportsImage").src = L.sportsImage;
    el("sportsImage").alt = L.sportsImageAlt;
    fill("sportsCards", L.sports.items.map(function (s) {
      return '<article class="card pillar-card"><h3>' + esc(s.title) + "</h3><p>" + esc(s.text) + "</p></article>";
    }).join(""));
    fill("clubsHead", sectionHead(L.clubsSlot.eyebrow, L.clubsSlot.heading));
    set("clubsNote", L.clubsSlot.slotNote);
  }

  function renderGallery() {
    var G = S.galleryPage;
    fill("pageHero", pageHero(G.heroEyebrow, G.heroTitle, G.heroIntro));
    set("realHeading", G.realHeading);
    fill("realGrid", G.realItems.map(function (g) {
      return '<figure class="card gallery-card"' + (g.anchor ? ' id="' + esc(g.anchor) + '"' : "") + '><img src="' + esc(g.image) + '" alt="' + esc(g.caption) +
        '" loading="lazy"><figcaption>' + esc(g.caption) + "</figcaption></figure>";
    }).join(""));
    set("videosHeading", G.videosHeading);
    set("videosNote", G.videosNote);
    fill("videoList", G.videos.map(function (v) {
      return '<a class="video-row" href="' + esc(v.url) + '" target="_blank" rel="noopener"><span class="video-title">' +
        esc(v.title) + '</span><span class="video-meta">' + esc(v.meta) + "</span></a>";
    }).join(""));
    set("demoHeading", G.demoHeading);
    set("demoNote", G.demoNote);
    fill("demoGrid", G.demoItems.map(function (g) {
      return '<figure class="card gallery-card"><img src="' + esc(g.image) + '" alt="' + esc(g.caption) +
        '" loading="lazy"><figcaption>' + esc(g.caption) + "</figcaption></figure>";
    }).join(""));
  }

  function renderNews() {
    var N = S.newsPage;
    fill("pageHero", pageHero(N.heroEyebrow, N.heroTitle, N.heroIntro));
    set("noticesHeading", N.noticesHeading);
    set("noticesNote", N.noticesNote);
    fill("noticeList", noticeList(N.notices));
    fill("fbSlot", facebookCard());
    set("eventsHeading", N.eventsHeading);
    set("eventsNote", N.eventsNote);
    fill("newsEvents", eventCards(S.schoolLifePage.events.slice(0, 3)));
    var l = el("newsEventsLink");
    if (l) l.href = "school-life.html";
    fill("testHead", sectionHead(S.testimonials.eyebrow, S.testimonials.heading));
    fill("testCards", testCards(S.testimonials.items));
  }

  function renderContact() {
    var C = S.contactPage;
    fill("pageHero", pageHero(C.heroEyebrow, C.heroTitle, C.heroIntro));
    set("contactHeading", C.heading);
    fill("contactAddress", S.school.addressLines.map(esc).join("<br>"));
    var cp = el("contactPhone");
    cp.textContent = S.school.phoneDisplay; cp.href = S.school.phoneLink;
    var ce = el("contactEmail");
    ce.textContent = S.school.email; ce.href = "mailto:" + S.school.email;
    set("officeHours", S.school.officeHours);
    set("officeHoursNote", S.school.officeHoursNote);
    var cf = el("contactFb");
    cf.textContent = S.school.facebook.label + " · " + S.school.facebook.followers;
    cf.href = S.school.facebook.url;
    var cc = el("contactCall");
    cc.textContent = "Call " + S.school.phoneDisplay; cc.href = S.school.phoneLink;
    var ml = el("mapLink");
    ml.textContent = C.mapCta; ml.href = S.school.mapUrl;
    set("contactCardName", S.school.name);
    set("contactCardAff", S.school.affiliation);
    set("contactCardMotto", S.school.motto + " — " + S.school.tagline);
    set("admCardHeading", C.admissionsCard.heading);
    set("admCardText", C.admissionsCard.text);
    var ab = el("admCardBtn");
    ab.textContent = C.admissionsCard.buttonText; ab.href = "admissions.html";
  }

  function renderDirectorsMessage() {
    var D = S.directorsMessagePage;
    fill("pageHero", pageHero(D.heroEyebrow, D.heroTitle, D.heroIntro));
    fillPhotoSlot(el("directorPhotoSlot"), D.photo, D.photoAlt, D.photoLabel);
    set("directorSlotNote", D.slotNote);
  }

  function renderApplication() {
    var A = S.applicationPage;
    fill("pageHero", pageHero(A.heroEyebrow, A.heroTitle, A.heroIntro));
    set("applyNote", A.formNote);
    set("applyButton", A.button);
    var form = el("applyForm");
    if (form) {
      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        if (!form.checkValidity()) { form.reportValidity(); return; }
        var ok = el("applySuccess");
        ok.textContent = A.success;
        ok.hidden = false;
        form.reset();
        ok.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    }
  }

  chrome();
  var renderers = {
    home: renderHome, about: renderAbout, academics: renderAcademics,
    admissions: renderAdmissions, campus: renderCampus,
    "school-life": renderSchoolLife, gallery: renderGallery,
    news: renderNews, contact: renderContact,
    "directors-message": renderDirectorsMessage, application: renderApplication
  };
  if (renderers[page]) renderers[page]();

  /* Scroll-reveal — elements with .reveal fade/slide in once
     when they enter the viewport. */
  var revealNodes = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealNodes.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    revealNodes.forEach(function (n) { io.observe(n); });
  } else {
    revealNodes.forEach(function (n) { n.classList.add("in"); });
  }
})();
