# Dehradun World School — Demo Website (rebuild concept, multi-page)

A plain static site: **no build step, no framework.** Open `index.html` in a
browser, or serve the folder with any static server.

## Pages

| Page | File |
|---|---|
| Home | `index.html` |
| About | `about.html` |
| Academics | `academics.html` |
| Admissions | `admissions.html` |
| Campus & Facilities | `campus.html` |
| School Life | `school-life.html` |
| Gallery | `gallery.html` |
| News & Notices | `news.html` |
| Contact | `contact.html` |
| Director's Message (blank — reserved) | `directors-message.html` |
| Online Application (full form) | `application.html` |

Every page shares the same header (school crest + navigation) and footer —
rendered by `app.js` from `content.js`. The sticky mobile Call / Enquire bar
and the floating WhatsApp button were both removed entirely on Oct 22, 2026,
at the owner's call — contact happens through the top bar, footer and the
Contact page.

## How to edit

- **Text & data → `content.js`** — every word, number, phone, email, address,
  testimonial, notice and link on every page lives in the single `SITE` object
  in this one file, organised per page (`home`, `aboutPage`, `academicsPage`,
  `admissionsPage`, `campusPage`, `schoolLifePage`, `galleryPage`, `newsPage`,
  `contactPage`, plus shared `school`, `nav`, `testimonials`, `pillars`,
  `footer`). Edit it, save, refresh. Nothing else needs touching.
- **Photos → `images/` folder** — real school photos live in `images/real/`,
  activity/demo photos in `images/` directly. Replace a photo by dropping in a
  new file with the **same name**. To use a different file name, change the
  matching `"image"` line in `content.js`.
- **Logo & favicon** — the school crest is `images/logo.png` (transparent
  background; used in the header and footer of every page). The favicon is
  `favicon.ico` (project root) + `images/favicon.png`, both made from the same
  crest and wired on every page.
- **Layout & colours → `styles.css`** (deep green `#1B4332` + ivory, gold as an
  accent only). **`app.js` and the HTML files are structure/rendering — you
  normally never need them.** Each HTML file is a thin shell: head + empty
  containers that `app.js` fills from `content.js`.

## Reserved slots (fill these with the school's real content)

- **Principal's message** (About page) — an empty, clearly-marked slot. The
  school has published no leadership message; nothing was invented.
- **ISC streams, Classes 11–12** (Academics page) — a note asking parents to
  confirm with the office. The school has not published its stream list.
- **Clubs & houses** (School Life page) — reserved slot; no source lists them.
- **Admission documents** (Admissions page) — an *indicative* list, labelled
  "confirm with the school office".
- **Fees** (Admissions page) — shown as "on enquiry". The school publishes no
  fees; aggregator figures were deliberately NOT used.

## Honesty notes (read before this goes anywhere near the public)

- **Home hero (updated Oct 22, 2026):** the home-page hero is now
  `images/real/hero-school.jpg` — a real photograph of Dehradun World
  School's own building and ground, supplied by aryan. (History: on
  Oct 21 the hero was the FIRST version's stock photo of a different
  building, kept at aryan's direction with the v1 soft theme; he
  replaced it with the real building the next night. The v1 soft theme
  — pill buttons, rounded cards — stays, scoped to the home page.)
- **Facility card photos (Oct 22, 2026):** the facility/lab/sports cards
  use illustrative stock photos (`images/fac-*.jpg`) — they show the *kind*
  of facility, not the school's own rooms; swap for real room photos when
  the school shares them. Exception: Playground uses the school's own
  ground photograph (`images/real/up-ground-gathering.jpg`).
- **Photos supplied directly (Oct 21, 2026):** 22 photographs handed over
  by aryan (`images/real/up-*.jpg`) — the campus and courtyard, Janmashtami,
  Grandparents' Day, International Dance Day, the Art & Science Exhibition,
  the school fete, kindergarten graduation, school and Olympiad medals, and
  the school's own 2024–25 toppers board. The Academics board-results
  figures (ICSE topper 97.4%, ISC topper 96.75%, 63/95 and 48/85 at 80%+)
  come only from that board. The same board prints the school's email as
  dwsdehradun@gmail.com — the address this site already uses.
- **Real photos lead.** `images/real/` holds verified photographs of the
  school itself (main building, entrance gate, annual function, outdoor art
  activity, crest). The entrance-gate photo was cropped to remove a
  third-party directory's branding panel. **October 2026 harvest:** 34 more
  real photos were downloaded — Dussehra (11) and Independence Day (17) photos
  downloaded from the school's own Facebook page, and 6 school photos from
  its Google Maps listing (assembly 2017, courtyard panorama, umbrella
  group, red-sweater courtyard portrait, corridor, Christmas 2019) — all in
  `images/real/` with `fb-` / `maps-` prefixes. The Maps listing also
  carried 4 photos that are NOT the school (city/mountain/farmland views);
  those were excluded. One Dussehra photo's Facebook CDN link had already
  expired and could not be downloaded. The remaining photos in `images/`
  are stock school-life photos (Unsplash), used only in activity/gallery
  slots and clearly captioned "Demo photo" in the gallery — never presented
  as the school's campus.
- **Testimonials are real** — the 6 parent quotes are carried word-for-word
  from the school's current website (dehradunworldschool.com).
- **No fees, results, ratings, toppers, affiliation number or principal's
  message are shown as fact** — none are published by the school, so none were
  invented. No "Smart Classes" claim either (government records show 0 digital
  boards, so the claim is conflicted and was left out).
- **Contact details are the verified ones only**: +91 75790 63656 and
  dwsdehradun@gmail.com. A contaminated job posting circulates another
  school's email/phones under this school's name — those were deliberately
  excluded. The signboard landline seen in one photo (0135-2112548) is
  single-source and unverified, so it is not published.
- **Stats** — Est. 2008, Pre-Primary–Class 12 and ICSE/ISC (CISCE) come from
  the school itself; the ~1,344 student figure is from government records
  (iCBSE/UDISE), labelled as such on the page.
- **Facebook** — the school's verified page (facebook.com/dehradunworldschool,
  6,983 followers) is linked from Home, News and Contact. The Gallery page
  also links 8 of the page's videos (the Dussehra video, 57.6K views, plus
  August 2026 school videos); videos are linked, not embedded, so nothing
  breaks if Facebook walls them. One auto-generated "1,500 reactions"
  celebration clip was deliberately not listed — it is not school footage.
- **The enquiry form is front-end only** — it shows a success message but
  sends nothing. It needs a backend/form service before real use.
- The footer carries a **"Demo website — rebuild concept"** note on purpose.
  Remove it only when/if the school adopts the site.
