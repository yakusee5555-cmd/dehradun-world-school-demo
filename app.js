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

    /* Sticky mobile bar (present on every page) */
    var mc = el("mobileCall");
    if (mc) mc.href = S.school.phoneLink;
    var me = el("mobileEnquire");
    if (me) me.href = "admissions.html";
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
  function facCards(items, light) {
    return items.map(function (f) {
      return '<article class="fac-card' + (light ? " fac-card-light" : "") + '"><span class="monogram' +
        (light ? " monogram-gold" : "") + '">' + esc(f.initial) + "</span><h3>" + esc(f.title) + "</h3><p>" + esc(f.text) + "</p></article>";
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

  chrome();
  var renderers = {
    home: renderHome, about: renderAbout, academics: renderAcademics,
    admissions: renderAdmissions, campus: renderCampus,
    "school-life": renderSchoolLife, gallery: renderGallery,
    news: renderNews, contact: renderContact
  };
  if (renderers[page]) renderers[page]();
})();
