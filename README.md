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

Every page shares the same header (school crest + navigation), footer and
sticky mobile Call / Enquire bar — all rendered by `app.js` from `content.js`.

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

- **Real photos lead.** `images/real/` holds verified photographs of the
  school itself (main building, entrance gate, annual function, outdoor art
  activity, crest). The entrance-gate photo was cropped to remove a
  third-party directory's branding panel. The remaining photos in `images/`
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
  6,983 followers) is linked from Home, News and Contact.
- **The enquiry form is front-end only** — it shows a success message but
  sends nothing. It needs a backend/form service before real use.
- The footer carries a **"Demo website — rebuild concept"** note on purpose.
  Remove it only when/if the school adopts the site.
