# Dehradun World School — Demo Website (rebuild concept)

A plain static site: **no build step, no framework.** Open `index.html` in a
browser, or serve the folder with any static server.

## How to edit

- **Text & data → `content.js`** — every word, number, phone, email, address,
  testimonial, notice and link on the page lives in the single `SITE` object in
  this one file. Edit it, save, refresh. Nothing else needs touching.
- **Photos → `images/` folder** — replace a photo by dropping in a new file
  with the **same name** (e.g. `hero.jpg`). To use a different file name, change
  the matching `"image"` line in `content.js`.
- **Layout & colours → `styles.css`** (deep green `#1B4332` + ivory, gold as an
  accent only). **`app.js` and `index.html` are structure/rendering — you
  normally never need them.**

## Honesty notes (read before this goes anywhere near the public)

- **All photos are demo placeholders** (stock school-life photos from Unsplash),
  NOT photos of Dehradun World School — the school's real photos could not be
  extracted from its current website. Replace every image in `images/` with real
  campus photos before any real use.
- **Testimonials are real** — the 6 parent quotes are carried word-for-word from
  the school's current website (dehradunworldschool.com).
- **No fees, results, ratings, affiliation number or principal's message are
  shown** — none are published by the school, so none were invented. The fee,
  documents and dates lines in Admissions are clearly marked placeholders for
  the school to fill in.
- **Stats** — Est. 2008, Pre-Primary–Class 12 and ICSE/ISC (CISCE) come from the
  school itself; the ~1,344 student figure is from government records
  (iCBSE/UDISE), labelled as such on the page.
- **The enquiry form is front-end only** — it shows a success message but sends
  nothing. It needs a backend/form service before real use.
- The footer carries a **"Demo website — rebuild concept"** note on purpose.
  Remove it only when/if the school adopts the site.
