/* ============================================================
   DEHRADUN WORLD SCHOOL — DEMO SITE CONTENT (multi-page)
   ------------------------------------------------------------
   EDIT THIS FILE to change anything on the website.
   Every word, number, photo and link on every page comes from
   the SITE object below. You do not need to touch any other
   file to update the site's content.

   Photos: change the file inside the images/ folder, or point
   "image" to a new file name here. Keep the same file name and
   you don't even need to edit this file.

   Pages: index (Home) · about · academics · admissions ·
   campus · school-life · gallery · news · contact
   ============================================================ */

const SITE = {

  /* ---------- School basics ---------- */
  school: {
    name: "Dehradun World School",
    shortName: "DWS",
    city: "Dehradun",
    logo: "images/logo.png",
    tagline: "discover the world of knowledge",
    motto: "तमसो मा ज्योतिर्गमय",
    mottoTranslation: "Tamaso Ma Jyotirgamaya — “Lead me from darkness to light”",
    affiliation: "Affiliated to the Council for the Indian School Certificate Examinations (CISCE), New Delhi — ICSE & ISC",
    phoneDisplay: "+91 75790 63656",
    phoneLink: "tel:+917579063656",
    email: "dwsdehradun@gmail.com",
    /* Floating WhatsApp button target — the school's own number.
       Confirm the number is WhatsApp-active before going live. */
    whatsapp: "https://wa.me/917579063656?text=Hello%2C%20I%20have%20an%20enquiry%20about%20admission%20at%20Dehradun%20World%20School.",
    addressLines: [
      "Bagicha, Nathuawala,",
      "Raipur–Balawala Road,",
      "Dehradun, Uttarakhand 248008"
    ],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Dehradun+World+School+Bagicha+Nathuawala+Raipur+Balawala+Road+Dehradun+248008",
    officeHours: "Mon–Sat, 8:00 AM – 1:00 PM",
    officeHoursNote: "Office hours as listed publicly — please confirm with the school office.",
    facebook: {
      url: "https://www.facebook.com/dehradunworldschool",
      label: "facebook.com/dehradunworldschool",
      followers: "6,983 followers"
    }
  },

  /* ---------- Navigation (shared by every page) ----------
     "children" render as a dropdown under the section on desktop
     and as an accordion group on mobile. Items deep-link to
     section anchors on the section's own page. */
  nav: [
    { label: "Home", href: "index.html", key: "home" },
    {
      label: "About", href: "about.html", key: "about",
      children: [
        { label: "Our School", href: "about.html" },
        { label: "Mission & Values", href: "about.html#values" },
        { label: "Crest & Motto", href: "about.html#crest" },
        { label: "History", href: "about.html#timeline" },
        { label: "Leadership", href: "about.html#leadership" }
      ]
    },
    {
      label: "Admissions", href: "admissions.html", key: "admissions",
      children: [
        { label: "Admission Process", href: "admissions.html#process" },
        { label: "Online Application", href: "application.html" },
        { label: "Enquiry Form", href: "admissions.html#enquire" },
        { label: "Documents Required", href: "admissions.html#documents" },
        { label: "Fees", href: "admissions.html#fees" },
        { label: "FAQs", href: "admissions.html#faq" }
      ]
    },
    {
      label: "Academics", href: "academics.html", key: "academics",
      children: [
        { label: "Overview", href: "academics.html" },
        { label: "Pre-Primary", href: "academics.html#preprimary" },
        { label: "Primary", href: "academics.html#primary" },
        { label: "Middle School", href: "academics.html#middle" },
        { label: "Senior School — ICSE & ISC", href: "academics.html#senior" },
        { label: "Teaching Approach", href: "academics.html#teaching" },
        { label: "Labs & Learning Spaces", href: "academics.html#labs" },
        { label: "Director's Message", href: "directors-message.html" }
      ]
    },
    {
      label: "Campus", href: "campus.html", key: "campus",
      children: [
        { label: "Facilities", href: "campus.html" },
        { label: "Sports Facilities", href: "campus.html#sports" },
        { label: "Safety & Care", href: "campus.html#safety" }
      ]
    },
    {
      label: "School Life", href: "school-life.html", key: "school-life",
      children: [
        { label: "Events & Celebrations", href: "school-life.html" },
        { label: "Sports", href: "school-life.html#sports" },
        { label: "Arts & Activities", href: "school-life.html#arts" },
        { label: "Clubs & Houses", href: "school-life.html#clubs" }
      ]
    },
    {
      label: "Gallery", href: "gallery.html", key: "gallery",
      children: [
        { label: "School Photos", href: "gallery.html" },
        { label: "Events", href: "gallery.html#events" },
        { label: "Campus", href: "gallery.html#campus" }
      ]
    },
    {
      label: "News", href: "news.html", key: "news",
      children: [
        { label: "Notices", href: "news.html" },
        { label: "Events", href: "news.html#events" },
        { label: "Parent Voices", href: "news.html#testimonials" },
        { label: "Follow on Facebook", href: "https://www.facebook.com/dehradunworldschool", external: true }
      ]
    },
    { label: "Contact", href: "contact.html", key: "contact" }
  ],

  /* ---------- Top bar ---------- */
  topbar: {
    text: "Admissions Open — Pre-Primary to Class 12",
    ctaText: "Enquire Now",
    ctaHref: "admissions.html"
  },

  /* ================= HOME PAGE ================= */
  home: {
    hero: {
      image: "images/hero.jpg",
      imageAlt: "Stately school building with lawns (illustrative photo)",
      eyebrow: "Dehradun · Est. 2008 · CISCE (ICSE & ISC)",
      title: "Dehradun World School",
      tagline: "Discover the world of knowledge",
      subtitle: "A modern education and a nurturing environment where every child grows — intellectually, physically, socially and spiritually.",
      primaryCta: "Enquire for Admission",
      primaryHref: "admissions.html",
      secondaryCta: "Call the School",
      /* Stats: only figures the school / government records support.
         The student count is a government-record figure (iCBSE/UDISE),
         not a marketing claim. Edit or remove freely. */
      stats: [
        { value: "2008", label: "Established" },
        { value: "Pre-Primary – XII", label: "Classes offered" },
        { value: "ICSE & ISC", label: "CISCE curriculum" },
        { value: "~1,344", label: "Students (govt. records)" }
      ]
    },
    welcome: {
      eyebrow: "Welcome to DWS",
      heading: "A school founded by IIT Delhi alumni, run on values",
      text: "Dehradun World School is a co-educational CISCE school in Nathuawala, Dehradun — established in 2008 by IIT Delhi alumni and educationalists to give every child a modern education with a special emphasis on moral and ethical values, tolerance and compassion.",
      image: "images/about.jpg",
      imageAlt: "Students learning together",
      linkText: "More about the school",
      linkHref: "about.html"
    },
    stagesHeading: {
      eyebrow: "Academics",
      heading: "One journey, Pre-Primary to Class 12",
      intro: "Four stages, one CISCE curriculum — with compulsory spoken English across the campus and continuous evaluation so no child quietly falls behind.",
      linkText: "Explore academics",
      linkHref: "academics.html"
    },
    facilitiesHeading: {
      eyebrow: "Campus & facilities",
      heading: "Built for learning, designed for safety",
      linkText: "See the full campus",
      linkHref: "campus.html",
      /* Titles must match entries in campus.facilities below. */
      picks: ["Library", "Atal Tinkering Lab", "Science Lab", "Playground", "CCTV-Secured Campus", "Medical Check-ups"]
    },
    eventsHeading: {
      eyebrow: "School life",
      heading: "A year full of moments",
      linkText: "More of school life",
      linkHref: "school-life.html"
    },
    visit: {
      eyebrow: "Find us",
      heading: "Visit the School",
      mapEmbed: "https://www.google.com/maps?q=Dehradun+World+School+Bagicha+Nathuawala+Raipur+Balawala+Road+Dehradun+248008&output=embed",
      mapTitle: "Dehradun World School location on Google Maps",
      directionsText: "Get Directions",
      directionsHref: "https://www.google.com/maps/dir/?api=1&destination=Dehradun+World+School+Bagicha+Nathuawala+Raipur+Balawala+Road+Dehradun+248008"
    },
    /* Director's Welcome — home page. Name AND photograph
       supplied by aryan (Oct 22, 2026). Welcome TEXT left
       blank at his ask — drop it in here when it arrives. */
    directorWelcome: {
      eyebrow: "Director's Welcome",
      heading: "A word of welcome",
      text: "",
      slotNote: "The Director's welcome message will appear here.",
      photo: "images/real/director-photo.jpg",
      photoAlt: "Mr Hamendra Singh Dawaan, Director of Dehradun World School",
      photoLabel: "Director's photograph",
      name: "Mr Hamendra Singh Dawaan",
      role: "Director"
    },
    facebookCard: {
      heading: "Follow the school on Facebook",
      text: "Celebrations, events and everyday moments from campus — the school's official Facebook page is where DWS shares them first.",
      buttonText: "Visit the Facebook page"
    }
  },

  /* ---------- Pillars (used on Home + About) ---------- */
  pillars: {
    eyebrow: "How a child grows here",
    heading: "Four pillars of a DWS education",
    items: [
      { initial: "L", title: "Learn", text: "Intellectual growth through a CISCE curriculum designed by IIT alumni — strong concepts, not rote learning." },
      { initial: "P", title: "Play", text: "Physical development through playgrounds, sport and active days — a healthy body for a healthy mind." },
      { initial: "G", title: "Grow", text: "Social growth in a nurturing, co-educational environment where children learn to work and live together." },
      { initial: "C", title: "Character", text: "Spiritual and moral grounding — values, tolerance and compassion are taught as seriously as subjects." }
    ]
  },

  /* ================= ABOUT PAGE ================= */
  aboutPage: {
    heroEyebrow: "About the school",
    heroTitle: "About Dehradun World School",
    heroIntro: "A co-educational CISCE school in Nathuawala, Dehradun — a bold initiative by IIT Delhi alumni and educationalists, established in 2008.",
    image: "images/about.jpg",
    imageAlt: "Students learning together",
    heading: "A bold initiative by IIT Delhi alumni & educationalists",
    paragraphs: [
      "The Dehradun World School, affiliated to the Council for the Indian School Certificate Examinations, is a co-educational school established in 2008 to provide a modern education system and nurturing environment where each child can develop intellectually, physically, socially and spiritually.",
      "In a short span of time the school has earned a reputation of providing a brilliant academic standard and discipline among its students. The Dehradun World School is a bold initiative by IIT Delhi alumni and educationalists to impart the kind of education that will make the child proficient enough to take on examination for premier institutions in India and abroad. The school recognizes the high standards set by the Council for Indian School Certificate Examination (CISCE), New Delhi. The school provides modern education with a special emphasis on moral and ethical values that helps in nurturing the character of a child, tolerance and compassion.",
      "The curriculum, teaching methods and evaluation techniques have been evolved by a team of IITians, and have been highly appreciated by parents and the teaching fraternity. The school uses modern teaching methods and tools, with special care for student safety — preschool classrooms are designed with see-through doors, cushioned floors and soft-corner furniture, and the campus is covered by CCTV surveillance, indoors and outdoors."
    ],
    highlights: [
      "Co-educational, English medium",
      "Founded by IIT Delhi alumni",
      "Emphasis on moral values, tolerance & compassion",
      "CCTV-secured campus, indoors and outdoors"
    ],
    founding: {
      eyebrow: "Our founding story",
      heading: "Started by IITians who wanted a different kind of school",
      paragraphs: [
        "Dehradun World School began in 2008 as a bold initiative by IIT Delhi alumni and educationalists — people who had themselves been formed by India's premier institutions, and who wanted to build a school that could prepare children to take on examinations for premier institutions in India and abroad.",
        "That founding team did not just start the school; they evolved its curriculum, teaching methods and evaluation techniques themselves. The result is a school where concept clarity matters more than rote, English is spoken across the campus, and discipline walks hand in hand with warmth."
      ]
    },
    mission: {
      eyebrow: "Mission & values",
      heading: "What the school stands for",
      items: [
        { initial: "M", title: "Modern education", text: "Modern teaching methods and tools, and a curriculum evolved by a team of IITians — reviewed against the high standards set by CISCE, New Delhi." },
        { initial: "N", title: "Nurturing environment", text: "A place where each child can develop intellectually, physically, socially and spiritually — known by name, not just by roll number." },
        { initial: "V", title: "Moral & ethical values", text: "Special emphasis on moral and ethical values that nurture character — honesty, responsibility and self-discipline from the earliest classes." },
        { initial: "T", title: "Tolerance & compassion", text: "Children grow up together in a co-educational community — learning tolerance, compassion and respect for others as everyday practice." },
        { initial: "S", title: "Safety, by design", text: "Round-the-clock CCTV surveillance indoors and outdoors, and preschool rooms designed for little children — see-through doors, cushioned floors, soft-corner furniture." }
      ]
    },
    crest: {
      eyebrow: "The crest & motto",
      heading: "A pine tree, rising over the hills",
      text: "The school crest carries a pine tree — a symbol of Dehradun's hills and of growth that is slow, straight and strong — within a laurel wreath, under the school's name. Below it runs the motto from the Brihadaranyaka Upanishad, and on the school's own signboard, its promise in English.",
      mottoLabel: "Our motto",
      taglineLabel: "Our tagline"
    },
    timeline: {
      eyebrow: "Milestones",
      heading: "The journey so far",
      note: "Milestones as recorded in government recognition records (iCBSE).",
      items: [
        { year: "2008", text: "Dehradun World School is founded at Nathuawala, Dehradun by IIT Delhi alumni and educationalists. Primary and Upper-Primary sections receive recognition." },
        { year: "2010", text: "Secondary and Higher Secondary sections are recognised — DWS becomes a full school through Class 12, offering ICSE (Class X) and ISC (Class XII)." },
        { year: "Today", text: "A Pre-Primary to Class 12 CISCE school serving around 1,344 students (government records), with a Montessori preschool, laboratories, an Atal Tinkering Lab and a full campus at Nathuawala." }
      ]
    },
    /* LEADERSHIP SLOT — editable placeholder. The school's website
       publishes no leadership message, and no principal is named on
       it. Add the real name, photo and message here when the school
       provides them. Do not fill this with an invented person. */
    leadership: {
      eyebrow: "From the school leadership",
      heading: "A message from the Principal's desk",
      slotNote: "This space is reserved for a message from the school's leadership. The school has not published one yet — when it does, it belongs here, in the Principal's own words.",
      slotCta: "Meanwhile, speak with the school office"
    }
  },

  /* ================= ACADEMICS PAGE ================= */
  academicsPage: {
    heroEyebrow: "Academics",
    heroTitle: "Academics at DWS",
    heroIntro: "Every stage follows the CISCE curriculum — ICSE at Class X, ISC at Class XII — with compulsory spoken English across the campus and continuous evaluation so no child quietly falls behind.",
    stagesHeading: "The four stages",
    stages: [
      {
        name: "Pre-Primary",
        anchor: "preprimary",
        tag: "Montessori",
        classes: "Preschool",
        image: "images/academics-preprimary.jpg",
        text: "Learning by doing, the Montessori way — in specially designed preschool rooms with see-through doors, cushioned floors and soft-corner furniture, where little children feel safe enough to explore.",
        points: ["Montessori methods", "Learning by doing", "See-through classroom doors", "Cushioned floors & soft-corner furniture", "CCTV-covered preschool block"]
      },
      {
        name: "Primary",
        anchor: "primary",
        tag: "Foundations",
        classes: "Classes 1–5",
        image: "images/academics-primary.jpg",
        text: "Strong foundations in language, mathematics and concepts — taught with modern methods and individual attention, with spoken English from the very start.",
        points: ["Concept-first teaching", "Compulsory spoken English", "The reading habit, built in the library", "Individual attention in class"]
      },
      {
        name: "Middle School",
        anchor: "middle",
        tag: "Building depth",
        classes: "Classes 6–8",
        image: "images/academics-middle.jpg",
        text: "Depth in the sciences, mathematics and languages, with lab-based learning, computer education and continuous evaluation through tests and feedback.",
        points: ["Integrated science lab work", "ICT & computer lab", "Atal Tinkering Lab", "Continuous evaluation & feedback"]
      },
      {
        name: "Senior School",
        anchor: "senior",
        tag: "ICSE & ISC",
        classes: "Classes 9–12",
        image: "images/academics-senior.jpg",
        text: "Focused preparation for the ICSE (Class X) and ISC (Class XII) board examinations — and for the premier institutions in India and abroad that the school's founders set their sights on.",
        points: ["ICSE — Class X boards", "ISC — Class XII boards", "Board-focused mentoring", "Preparation for premier institutions"]
      }
    ],
    approach: {
      eyebrow: "How learning works here",
      heading: "The DWS way of teaching",
      items: [
        { initial: "En", title: "Compulsory spoken English", text: "English is the medium of instruction — and the language of the campus. Parents credit compulsory spoken English with visibly raising their children's standards." },
        { initial: "Ev", title: "Continuous evaluation", text: "Regular tests and continuous evaluation, with individual attention, so progress is tracked all year — not discovered at report-card time." },
        { initial: "IIT", title: "Methods evolved by IITians", text: "The curriculum, teaching methods and evaluation techniques were evolved by a team of IITians, and are appreciated by parents and the teaching fraternity." },
        { initial: "Mt", title: "Modern teaching tools", text: "Modern teaching methods and tools in everyday classroom use — including an ICT lab with internet access for computer learning." }
      ]
    },
    labs: {
      eyebrow: "Learning by doing",
      heading: "Labs that make concepts real",
      items: [
        { initial: "AT", title: "Atal Tinkering Lab", text: "A dedicated innovation lab where students build, test and tinker — the hands-on heart of the middle and senior school." },
        { initial: "Sc", title: "Integrated Science Lab", text: "Experiments that turn textbook science into something students can see, touch and question." },
        { initial: "ICT", title: "ICT & Computer Lab", text: "Computer learning with internet access — digital skills taught as a subject, not an afterthought." }
      ]
    },
    /* BOARD RESULTS — every figure below is printed on the
       school's own published 2024–25 toppers board (the photograph
       is the results figure on this page, and sits in the
       gallery). Nothing here comes from anywhere else. */
    results: {
      eyebrow: "Board results",
      heading: "The Class of 2024–25",
      image: "images/real/up-toppers-2025.jpg",
      imageAlt: "The school's 2024–25 toppers board, with photographs of the ICSE and ISC toppers and their percentages",
      imageCaption: "The school's toppers board for 2024–25.",
      boards: [
        { exam: "ICSE — Class X, 2024–25", topper: "Akansha", score: "97.4%", note: "School topper. 63 of the 95 students who appeared scored 80% and above." },
        { exam: "ISC — Class XII, 2024–25", topper: "Devyani Gaur", score: "96.75%", note: "School topper. 48 of the 85 students who appeared scored 80% and above." }
      ],
      note: "Results as published on the school's toppers board for the 2024–25 session."
    },
    /* ISC STREAMS SLOT: the school has not published its Class 11–12
       stream list. One unverified directory anecdote mentions
       Science/Commerce — do NOT state streams as fact. Replace this
       note with the confirmed list when the school provides it. */
    streamsNote: {
      heading: "ISC streams (Classes 11–12)",
      text: "The school offers the ISC programme at Classes 11–12. The current stream list is best confirmed with the school office — call +91 75790 63656 and they will walk you through the options for your child."
    },
    subjectsNote: "Core subjects across the stages follow the standard CISCE curriculum — English, Hindi, Mathematics, Science, Social Studies and Computer Education, with Sanskrit/third language and value education as prescribed by the Council."
  },

  /* ================= DIRECTOR'S MESSAGE PAGE =================
     Reserved page — aryan asked for the MESSAGE blank (Oct 22,
     2026); his name and photograph were supplied by aryan the
     same night and are shown. Do NOT invent a director's
     message. (The only other leadership name on record is the
     principal's, from government records, and it stays off-site.) */
  directorsMessagePage: {
    heroEyebrow: "Academics",
    heroTitle: "Director's Message to Prospective Parents",
    heroIntro: "",
    photo: "images/real/director-photo.jpg",
    photoAlt: "Mr Hamendra Singh Dawaan, Director of Dehradun World School",
    photoLabel: "Director's photograph",
    slotNote: "The Director's message to prospective parents will be published on this page."
  },

  /* ================= ONLINE APPLICATION PAGE =================
     The full application form, mirroring the school's application
     format (fields as on the school's form — aryan's screenshot,
     Oct 22, 2026). Demo form: submissions are not sent anywhere. */
  applicationPage: {
    heroEyebrow: "Admissions",
    heroTitle: "Online Application",
    heroIntro: "Fill in the application form below — student details and correspondence address, the way the school office needs them. Fields marked * are required.",
    formNote: "Demo form — in this demo your application is not sent anywhere. On the live site it will reach the school office.",
    button: "Submit Application",
    success: "Thank you! Your application has been noted. The school office will contact you on your WhatsApp number. (Demo — nothing was actually sent.)"
  },

  /* ================= ADMISSIONS PAGE ================= */
  admissionsPage: {
    heroEyebrow: "Admissions",
    heroTitle: "Admissions",
    heroIntro: "Admissions are open from Pre-Primary to Class 12. Start with an enquiry — the school office will guide you from there.",
    heading: "Admission, in four simple steps",
    steps: [
      { title: "Enquire", text: "Fill the enquiry form below, or call the school office on +91 75790 63656." },
      { title: "Visit", text: "Visit the campus at Nathuawala, meet the office and see the school in person." },
      { title: "Interaction / Assessment", text: "A short interaction or assessment for your child, and a document check at the school office." },
      { title: "Confirm", text: "Complete the admission formalities with the office and confirm your child's seat." }
    ],
    /* HONESTY NOTES — do not replace these with invented details.
       The school has not published a fee table or admission dates
       anywhere. Add the real ones here when the school provides
       them. NEVER publish aggregator fee figures. */
    feesNote: "Fee structure: the school does not publish fees online. Please call +91 75790 63656 for the current fee structure — ask the office directly.",
    documentsNote: "Documents below are indicative — the school's confirmed list is issued by the office at registration. Please confirm with the school office.",
    documents: [
      "Birth certificate of the child (photocopy)",
      "Previous class report card / marksheet",
      "Transfer certificate (TC) from the previous school, where applicable",
      "Passport-size photographs of the child",
      "Aadhaar card of the child and parents (photocopy)",
      "Address proof of the parent"
    ],
    datesNote: "Admissions typically open in spring (March–April) for the coming session — places fill by class, so please call +91 75790 63656 to confirm the current window and seat availability.",
    faq: {
      heading: "Questions parents ask us",
      items: [
        { q: "Which board does the school follow?", a: "Dehradun World School is affiliated to CISCE, New Delhi — ICSE at Class X and ISC at Class XII. It is a co-educational, English-medium school." },
        { q: "Which classes can my child join?", a: "Admissions run from Pre-Primary (Montessori preschool) through Class 12, subject to seat availability in the class. Call +91 75790 63656 to check the class you need." },
        { q: "What is the fee structure?", a: "The school does not publish fees online. Parents consistently describe the school as quality education at an affordable fee — for the exact current structure, call the school office on +91 75790 63656." },
        { q: "When do admissions open?", a: "Admissions typically open in spring (March–April). Windows and seats vary by class, so a quick call to +91 75790 63656 is the surest way to confirm." },
        { q: "How do I visit the campus?", a: "The school is at Bagicha, Nathuawala, Raipur–Balawala Road, Dehradun 248008. Call ahead on +91 75790 63656 and the office will arrange your visit." }
      ]
    },
    form: {
      heading: "Enquire for admission",
      note: "Demo form — in this demo your enquiry is not sent anywhere. On the live site it will reach the school office.",
      button: "Send Enquiry",
      success: "Thank you! Your enquiry has been noted. The school office will contact you. (Demo — nothing was actually sent.)"
    },
    applyCard: {
      heading: "Online Application",
      text: "Ready to apply in one go? Fill the full application form online — student details and correspondence address, all in one place.",
      button: "Open the Application Form"
    }
  },

  /* ================= CAMPUS PAGE =================
     The facilities list comes from government-reported school
     records (iCBSE / UDISE) plus the school's SchoolsOfDehradun
     profile for sports facilities. Edit freely as the school
     confirms more. "Smart Classes" is deliberately NOT listed —
     government records show 0 digital boards (conflicted claim). */
  campusPage: {
    heroEyebrow: "Campus & facilities",
    heroTitle: "Campus & Facilities",
    heroIntro: "A full campus at Nathuawala — classrooms, laboratories, a library, playing fields and a security-first design, in the foothills of Dehradun.",
    heading: "Facilities on campus",
    facilities: [
      { initial: "Li", title: "Library", text: "A school library that builds the reading habit from the earliest classes." },
      { initial: "ICT", title: "ICT & Computer Lab", text: "Computer learning with internet access — 50 functional computers on campus, per government records." },
      { initial: "Sc", title: "Science Lab", text: "An integrated science laboratory for hands-on experiments." },
      { initial: "AT", title: "Atal Tinkering Lab", text: "A dedicated innovation lab where students build, test and tinker." },
      { initial: "Cl", title: "45 Classrooms", text: "Large, ventilated classrooms across five building blocks — 45 classrooms in good condition, per government records." },
      { initial: "Sp", title: "Playground", text: "A vast playground, with ample play space in the preschool wing and primary block." },
      { initial: "Se", title: "CCTV-Secured Campus", text: "Round-the-clock CCTV surveillance, indoors and outdoors, across the campus." },
      { initial: "Me", title: "Medical Check-ups", text: "Regular medical check-ups for students on campus." },
      { initial: "Gr", title: "Green Campus", text: "Solar power and rain-water harvesting built into the campus." },
      { initial: "Sa", title: "Safe & Accessible by Design", text: "Preschool rooms with see-through doors, cushioned floors and soft-corner furniture — plus ramps and handrails for accessibility, and clean drinking water." }
    ],
    photos: {
      heading: "The campus, as it is",
      items: [
        { image: "images/real/main-building-flagpole.jpg", caption: "The main building and flagpole" },
        { image: "images/real/entrance-gate.jpg", caption: "The school entrance gate, Nathuawala" },
        { image: "images/real/maps-courtyard-pano.jpg", caption: "The playing field, courtyard and basketball hoop (Google Maps photo)" },
        { image: "images/real/maps-assembly-2017.jpg", caption: "Students assembled on the ground in front of the main building (Google Maps photo, 2017)" },
        { image: "images/real/up-campus-welcome.jpg", caption: "The main building and courtyard — welcome back to school" },
        { image: "images/real/up-ground-gathering.jpg", caption: "The school ground at a full-school gathering, by the flagpole" }
      ]
    },
    sports: {
      eyebrow: "Sports facilities",
      heading: "Room to run, courts to play on",
      intro: "Physical development is one of the school's four pillars — and the campus gives it space.",
      items: [
        { initial: "Ba", title: "Basketball Court", text: "An outdoor basketball court for games periods, practice and inter-house play." },
        { initial: "Bd", title: "Badminton Court", text: "A badminton court for a sport Dehradun loves — quick feet, quicker minds." },
        { initial: "In", title: "Indoor Games", text: "Indoor games facilities for the days the hills decide it rains." },
        { initial: "Pl", title: "Playground", text: "Open ground for athletics, free play and the everyday running around childhood needs." }
      ]
    },
    safety: {
      eyebrow: "Safety first",
      heading: "Designed so parents can relax",
      items: [
        "Round-the-clock CCTV surveillance, indoors and outdoors",
        "Preschool rooms with see-through doors, cushioned floors and soft-corner furniture",
        "Regular medical check-ups for students",
        "Ramps and handrails for accessibility",
        "Clean drinking water and hand-wash facilities"
      ]
    }
  },

  /* ================= SCHOOL LIFE PAGE =================
     Activities below are ONLY the ones evidenced in real photos
     or school profiles. Do not add invented events. */
  schoolLifePage: {
    heroEyebrow: "School life",
    heroTitle: "School Life at DWS",
    heroIntro: "Book fairs and annual functions, art on the lawn and games on the court — the parts of school a child actually remembers.",
    eventsHeading: "Moments from the school year",
    events: [
      {
        title: "Dussehra Celebration",
        image: "images/real/fb-dussehra-02.jpg",
        imageAlt: "The Ravan effigy standing on the school ground in front of the main building at the Dussehra celebration",
        text: "The school celebrated Dussehra on its own ground — a Ravan effigy before the main building, students gathered in the courtyard and watching from the balconies. In the school's words on its Facebook page, the festival is the mark of victory over evil. (October 2026.)"
      },
      {
        title: "Independence Day Celebration",
        image: "images/real/fb-independence-06.jpg",
        imageAlt: "Students performing on the outdoor stage in front of the Happy Independence Day India backdrop",
        text: "Independence Day filled the outdoor stage — dances, a skit, the school choir, speeches and a guitar performance before the tricolour backdrop, with the whole school watching from the ground. Photographs from the school's Facebook page. (August 2026.)"
      },
      {
        title: "Scholastic Book Fair",
        image: "images/real/main-building-book-fair.jpg",
        imageAlt: "Scholastic book fair stands set up in front of the main school building",
        text: "Scholastic book stands take over the stage in front of the main building — a book fair that puts hundreds of books within reach of every class, and feeds the reading habit the library builds all year."
      },
      {
        title: "Annual Function",
        image: "images/real/annual-function-stage.jpg",
        imageAlt: "Students in uniform in choir formation on stage at the annual function",
        text: "The school's annual function brings students onto one stage — seen here in choir formation, in uniform, under the school crest. The biggest evening of the school year."
      },
      {
        title: "Outdoor Art Activity",
        anchor: "arts",
        image: "images/real/outdoor-art-activity.webp",
        imageAlt: "Students drawing and painting on the school lawn",
        text: "On art activity days the lawn becomes the classroom — students spread out with their drawing books in front of the main teaching block, learning in the open Dehradun air."
      },
      {
        title: "Christmas Celebration",
        image: "images/real/up-christmas-stage.jpg",
        imageAlt: "The stage dressed for Christmas — a decorated tree, reindeer, Santa's sleigh and wrapped gifts",
        text: "Christmas is celebrated at school — a stage dressed with a tree, reindeer and Santa's sleigh, one of the festivals that mark the school's year of togetherness, in a community built on tolerance and compassion."
      },
      {
        title: "Janmashtami",
        image: "images/real/up-janmashtami.jpg",
        imageAlt: "Young children dressed as Krishna and Radha on the decorated stage for Janmashtami",
        text: "Janmashtami brings the youngest stars to the stage — children dressed as Krishna and Radha before a flower-ringed backdrop, celebrating the festival together at school."
      },
      {
        title: "Grandparents' Day",
        image: "images/real/up-grandparents-day.jpg",
        imageAlt: "The stage decorated with hearts and balloons for Grandparents' Day, beneath the school crest",
        text: "Grandparents are guests of honour at school — a stage dressed with hearts and balloons beneath the school crest, and a morning that celebrates the people who anchor every family."
      },
      {
        title: "International Dance Day",
        image: "images/real/up-dance-day-group.jpg",
        imageAlt: "Students performing a classical group dance on stage for International Dance Day",
        text: "For International Dance Day the stage fills with classical dance — students in white and pink performing together — and the day's champions take home the trophy."
      },
      {
        title: "Art & Science Exhibition",
        image: "images/real/up-exhibition-mandala.jpg",
        imageAlt: "Mandala and dot-art plates made by students, displayed at the Art and Science Exhibition",
        text: "The annual Art and Science Exhibition covers the ground with student work — mandala plates, painted stones, models and craft — with the whole school walking the tables."
      },
      {
        title: "Kindergarten Graduation",
        image: "images/real/up-kg-graduation.jpg",
        imageAlt: "Kindergarten children in graduation caps and gowns holding their scrolls, with their teacher",
        text: "The youngest students graduate in caps and gowns, scrolls in hand — the Montessori years behind them, Class 1 ahead."
      },
      {
        title: "The School Fete",
        image: "images/real/up-fete-donut.jpg",
        imageAlt: "The donut stall at the school fete, under its hand-painted 'Donut Worry, Be Happy' sign",
        text: "At the school fete the ground turns into a fair — food and games stalls, cold drinks all round, and a donut counter whose only sales pitch is 'Donut Worry, Be Happy'."
      }
    ],
    sports: {
      eyebrow: "Sports & games",
      heading: "Play is a pillar, not a break",
      intro: "Physical development is one of the four pillars of a DWS education. On campus, children play on the basketball court and the badminton court, compete at indoor games, and run free on the playground.",
      items: [
        { title: "Basketball", text: "Court games in sports periods and after-class play." },
        { title: "Badminton", text: "A court of their own for a game that rewards speed and focus." },
        { title: "Indoor Games", text: "Facilities for indoor games on rainy hill days." },
        { title: "Playground Sports", text: "Athletics and free play on the school's open ground." }
      ]
    },
    sportsImage: "images/gallery-sports.jpg",
    sportsImageAlt: "Sports and athletics (demo photo)",
    /* CLUBS & HOUSES SLOT: no source anywhere lists the school's
       clubs or house system. This section is an editable slot —
       replace with the real list when the school provides it.
       Do NOT invent house names or club lists. */
    clubsSlot: {
      eyebrow: "Clubs & houses",
      heading: "Clubs, houses & societies",
      slotNote: "This space is reserved for the school's clubs, houses and societies. When the school shares its list — house names, clubs, and how students join — it will live here. Ask the school office on +91 75790 63656 for what is running this session."
    }
  },

  /* ================= GALLERY PAGE =================
     REAL PHOTOS FIRST — every photo in the "real" group is a
     photograph of Dehradun World School itself: the original
     verified set, Dussehra and Independence Day photographs from
     the school's own Facebook page, and photographs from the
     school's Google Maps listing (harvested October 2026). The "demo" group is stock photography of school
     life, clearly labelled, for slots the school will fill with
     its own photos. Never caption a demo photo as the school. */
  galleryPage: {
    heroEyebrow: "Gallery",
    heroTitle: "Gallery",
    heroIntro: "Real photographs of Dehradun World School first — then demo photos, clearly marked, holding the places the school's own album will fill.",
    realHeading: "Dehradun World School, in pictures",
    realItems: [
      { image: "images/real/main-building-book-fair.jpg", caption: "The main building during the Scholastic book fair" },
      { image: "images/real/entrance-gate.jpg", anchor: "campus", caption: "The entrance gate — 'Affiliated to the Council for the Indian School Certificate Examinations, New Delhi'" },
      { image: "images/real/main-building-flagpole.jpg", caption: "The main building and the flagpole" },
      { image: "images/real/annual-function-stage.jpg", anchor: "events", caption: "Choir on stage at the annual function" },
      { image: "images/real/outdoor-art-activity.webp", caption: "Outdoor art activity on the school lawn" },
      { image: "images/real/targetstudy-crest.jpg", caption: "The school crest — pine tree and the motto तमसो मा ज्योतिर्गमय" },
      { image: "images/real/fb-dussehra-01.jpg", caption: "Dussehra — the Ravan effigy, up close" },
      { image: "images/real/fb-dussehra-02.jpg", caption: "Dussehra — the Ravan effigy on the school ground" },
      { image: "images/real/fb-dussehra-03.jpg", caption: "Dussehra — students and staff in the courtyard" },
      { image: "images/real/fb-dussehra-06.jpg", caption: "Dussehra — watching from the school balconies" },
      { image: "images/real/fb-dussehra-09.jpg", caption: "Dussehra — students seated in the courtyard" },
      { image: "images/real/fb-dussehra-11.jpg", caption: "Dussehra — the youngest students watch" },
      { image: "images/real/fb-independence-01.jpg", caption: "Independence Day — students view the decorated display board" },
      { image: "images/real/fb-independence-02.jpg", caption: "Independence Day — a performance in white" },
      { image: "images/real/fb-independence-04.jpg", caption: "Independence Day — the school choir on stage" },
      { image: "images/real/fb-independence-06.jpg", caption: "Independence Day — performing before the tricolour backdrop" },
      { image: "images/real/fb-independence-08.jpg", caption: "Independence Day — students with the national flag" },
      { image: "images/real/fb-independence-10.jpg", caption: "Independence Day — a student addresses the school" },
      { image: "images/real/fb-independence-12.jpg", caption: "Independence Day — group dance on the outdoor stage" },
      { image: "images/real/fb-independence-17.jpg", caption: "Independence Day — guitar on stage" },
      { image: "images/real/maps-assembly-2017.jpg", caption: "Students assembled on the ground (Google Maps photo, 2017)" },
      { image: "images/real/maps-courtyard-pano.jpg", caption: "The courtyard, playing field and basketball hoop (Google Maps photo)" },
      { image: "images/real/maps-umbrella-students.jpg", caption: "Students under a festive umbrella by the main building (Google Maps photo)" },
      { image: "images/real/maps-corridor.jpg", caption: "Inside a school corridor (Google Maps photo)" },
      { image: "images/real/maps-christmas-2019.jpg", caption: "Christmas celebration — Santa hats on stage (Google Maps photo, 2019)" },
      { image: "images/real/up-toppers-2025.jpg", caption: "The 2024–25 toppers board — ICSE & ISC results" },
      { image: "images/real/up-olympiad-medals.jpg", caption: "SOF International Social Studies Olympiad — Zonal Medals of Distinction, 2023–24" },
      { image: "images/real/up-school-medals.jpg", caption: "School medals, engraved with the crest and the main building" },
      { image: "images/real/up-campus-welcome.jpg", caption: "Welcome back — the main building and courtyard" },
      { image: "images/real/up-ground-gathering.jpg", caption: "The whole school on the ground, by the flagpole" },
      { image: "images/real/up-independence-choir.jpg", caption: "Independence Day — the choir before the tricolour" },
      { image: "images/real/up-janmashtami.jpg", caption: "Janmashtami — little Krishnas and Radhas on stage" },
      { image: "images/real/up-grandparents-day.jpg", caption: "Grandparents' Day on the school stage" },
      { image: "images/real/up-stage-dance.jpg", caption: "Classical dance on the school stage" },
      { image: "images/real/up-dance-day-group.jpg", caption: "International Dance Day — group performance" },
      { image: "images/real/up-dance-day-duo.jpg", caption: "International Dance Day — classical dancers" },
      { image: "images/real/up-dance-day-trophy.jpg", caption: "International Dance Day — the junior champion's trophy" },
      { image: "images/real/up-trophy-stage.jpg", caption: "A trophy presentation on the school stage" },
      { image: "images/real/up-uttarakhand-day.jpg", caption: "Uttarakhand Foundation Day — folk dance" },
      { image: "images/real/up-exhibition-board.jpg", caption: "The Art and Science Exhibition" },
      { image: "images/real/up-exhibition-crafts.jpg", caption: "Student exhibits at the Art and Science Exhibition" },
      { image: "images/real/up-exhibition-mandala.jpg", caption: "Mandala art at the exhibition" },
      { image: "images/real/up-kg-graduation.jpg", caption: "Kindergarten graduation — caps, gowns and scrolls" },
      { image: "images/real/up-christmas-stage.jpg", caption: "Christmas — the decorated stage, tree and sleigh" },
      { image: "images/real/up-fete-students.jpg", caption: "At the school fete — between the stalls" },
      { image: "images/real/up-fete-donut.jpg", caption: "The donut stall at the school fete" },
      { image: "images/real/up-field-games.jpg", caption: "Games on the field — staff take aim at the buckets" }
    ],
    demoHeading: "School life (demo photos)",
    demoNote: "Demo photos — stock images of school life, NOT photographs of Dehradun World School. They hold gallery slots until the school's own photos replace them (same file names, in the images folder).",
    demoItems: [
      { image: "images/gallery-library.jpg", caption: "Demo photo — the library" },
      { image: "images/gallery-science.jpg", caption: "Demo photo — in the science lab" },
      { image: "images/gallery-sports.jpg", caption: "Demo photo — sports & athletics" },
      { image: "images/gallery-art.jpg", caption: "Demo photo — art & craft" },
      { image: "images/gallery-play.jpg", caption: "Demo photo — outdoor play" },
      { image: "images/gallery-reading.jpg", caption: "Demo photo — reading time" }
    ],
    /* VIDEOS — these live on the school's Facebook page; the rows
       below link out to the posts there. Only the Dussehra video
       carries the school's own caption; the August 2026 videos were
       posted without captions, so none are invented here. */
    videosHeading: "School videos",
    videosNote: "Videos are hosted on the school's Facebook page — each row opens the video there.",
    videos: [
      { title: "Dussehra celebration", meta: "Facebook video · October 2026 · 1 min 31 sec · 57.6K views", url: "https://www.facebook.com/100066875043296/videos/1816886392780120" },
      { title: "School video", meta: "Facebook video · August 2026 · 7.1K views", url: "https://www.facebook.com/dehradunworldschool/videos/2585581548550157/" },
      { title: "School video", meta: "Facebook video · August 2026 · 5.2K views", url: "https://www.facebook.com/dehradunworldschool/videos/1062806229602440/" },
      { title: "School video", meta: "Facebook video · August 2026 · 4.7K views", url: "https://www.facebook.com/dehradunworldschool/videos/1615904773229204/" },
      { title: "School video", meta: "Facebook video · August 2026 · 3.8K views", url: "https://www.facebook.com/dehradunworldschool/videos/1374102044830651/" },
      { title: "School video", meta: "Facebook video · August 2026 · 2.9K views", url: "https://www.facebook.com/dehradunworldschool/videos/1019550544408287/" },
      { title: "School video", meta: "Facebook video · August 2026 · 2.7K views", url: "https://www.facebook.com/dehradunworldschool/videos/1054029897527193/" },
      { title: "School video", meta: "Facebook video", url: "https://www.facebook.com/dehradunworldschool/videos/1572486300954655/" }
    ]
  },

  /* ---------- Parent voices (Home preview + News page carries full set) ----------
     These are the school's REAL published parent testimonials,
     carried over word-for-word from dehradunworldschool.com. */
  testimonials: {
    eyebrow: "Parent voices",
    heading: "What parents say about DWS",
    items: [
      { quote: "I appreciate the teaching methodologies adopted by school in ensuring a good understanding of subjects.", name: "Mr. Deepak Bhandari" },
      { quote: "My child loves to come to school where preschool has adopted Montessori teaching methods which involves learning by doing process.", name: "Mr. Amit Panwar" },
      { quote: "I trust the dedicated staff and school leadership who are committed to quality education in this school", name: "Mr. Jay Badoni" },
      { quote: "The overall environment of school has helped in improving my child's english. Compulsory spoken English in school is raising the standards of school.", name: "Mrs. Vrunda Rajput" },
      { quote: "Continuous evaluation with tests and individual attention has helped my son improve in all subjects", name: "Mrs. Vaibhavi" },
      { quote: "Quality education at affordable fee and discipline made me decide to send my daughter to Dehradun World School.", name: "Mrs. Shivani Singh" }
    ]
  },

  /* ================= NEWS PAGE =================
     DEMO NOTICES: samples only, so the board doesn't ship empty.
     Replace with real school notices in this file. No dates are
     shown on purpose — the school publishes no notice dates. */
  newsPage: {
    heroEyebrow: "News & notices",
    heroTitle: "News & Notices",
    heroIntro: "Announcements from the school office — and the school's Facebook page, where DWS posts its everyday news first.",
    noticesHeading: "Notice board",
    noticesNote: "Demo notices — replace these with real school notices in content.js.",
    notices: [
      { tag: "Admissions", text: "Admissions open — Pre-Primary to Class 12. Call +91 75790 63656 to enquire." },
      { tag: "Demo notice", text: "Sample notice: school office is open Mon–Sat, 8:00 AM – 1:00 PM." },
      { tag: "Demo notice", text: "Sample notice: replace this line with the school's next real announcement." }
    ],
    eventsHeading: "From the school year",
    eventsNote: "The moments the school's own photographs record — see the full set on the School Life page."
  },

  /* ================= CONTACT PAGE ================= */
  contactPage: {
    heroEyebrow: "Visit us",
    heroTitle: "Contact the School",
    heroIntro: "Call, write, or come and see the campus at Nathuawala — the office is happy to help with admissions and everything else.",
    heading: "Get in touch",
    mapCta: "Open in Google Maps",
    facebookLabel: "Follow us on Facebook",
    admissionsCard: {
      heading: "Applying for admission?",
      text: "Start with the enquiry form — or call the office and they will guide you through the four steps.",
      buttonText: "Go to Admissions"
    }
  },

  /* ---------- Footer ---------- */
  footer: {
    demoNote: "Demo website — rebuild concept for Dehradun World School. Real school photos lead the gallery; stock photos are clearly marked demo placeholders. Content is editable in content.js.",
    credit: "Concept redesign — not the school's official website."
  }
};
