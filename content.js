/* ============================================================
   DEHRADUN WORLD SCHOOL — DEMO SITE CONTENT
   ------------------------------------------------------------
   EDIT THIS FILE to change anything on the website.
   Every word, number, photo and link on the page comes from
   the SITE object below. You do not need to touch any other
   file to update the site's content.

   Photos: change the file inside the images/ folder, or point
   "image" to a new file name here. Keep the same file name and
   you don't even need to edit this file.
   ============================================================ */

const SITE = {

  /* ---------- School basics ---------- */
  school: {
    name: "Dehradun World School",
    shortName: "DWS",
    city: "Dehradun",
    affiliation: "Affiliated to the Council for the Indian School Certificate Examinations (CISCE), New Delhi — ICSE & ISC",
    phoneDisplay: "+91 75790 63656",
    phoneLink: "tel:+917579063656",
    email: "dwsdehradun@gmail.com",
    addressLines: [
      "Bagicha, Nathuawala,",
      "Raipur–Balawala Road,",
      "Dehradun, Uttarakhand 248008"
    ],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=30.274321,78.106714",
    officeHours: "Mon–Sat, 8:00 AM – 1:00 PM",
    officeHoursNote: "Office hours as listed publicly — please confirm with the school office."
  },

  /* ---------- Top bar ---------- */
  topbar: {
    text: "Admissions Open — Pre-Primary to Class 12",
    ctaText: "Enquire Now"
  },

  /* ---------- Hero ---------- */
  hero: {
    image: "images/hero.jpg",
    eyebrow: "Dehradun · Est. 2008 · CISCE (ICSE & ISC)",
    title: "Dehradun World School",
    subtitle: "A modern education and a nurturing environment where every child grows — intellectually, physically, socially and spiritually.",
    primaryCta: "Enquire for Admission",
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

  /* ---------- About ---------- */
  about: {
    image: "images/about.jpg",
    eyebrow: "About the school",
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
    ]
  },

  /* ---------- Pillars ---------- */
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

  /* ---------- Academics ---------- */
  academics: {
    eyebrow: "Academics",
    heading: "One journey, Pre-Primary to Class 12",
    intro: "Every stage follows the CISCE curriculum, with compulsory spoken English across the campus and continuous evaluation so no child quietly falls behind.",
    stages: [
      {
        name: "Pre-Primary",
        tag: "Montessori",
        image: "images/academics-preprimary.jpg",
        text: "Learning by doing, the Montessori way — in specially designed preschool rooms with see-through doors, cushioned floors and soft-corner furniture.",
        points: ["Montessori methods", "Learning by doing", "Safe, purpose-built rooms"]
      },
      {
        name: "Primary",
        tag: "Foundations",
        image: "images/academics-primary.jpg",
        text: "Strong foundations in language, mathematics and concepts — taught with modern methods and individual attention.",
        points: ["Concept-first teaching", "Compulsory spoken English", "Individual attention"]
      },
      {
        name: "Middle School",
        tag: "Building depth",
        image: "images/academics-middle.jpg",
        text: "Depth in the sciences, mathematics and languages, with lab-based learning and continuous evaluation through tests and feedback.",
        points: ["Science & ICT labs", "Continuous evaluation", "Atal Tinkering Lab access"]
      },
      {
        name: "Senior School",
        tag: "ICSE & ISC",
        image: "images/academics-senior.jpg",
        text: "Focused preparation for the ICSE (Class X) and ISC (Class XII) board examinations — and for premier institutions in India and abroad.",
        points: ["ICSE — Class X", "ISC — Class XII", "Board-focused mentoring"]
      }
    ]
  },

  /* ---------- Campus & facilities ----------
     This list comes from government-reported school records
     (iCBSE / UDISE). Edit freely as the school confirms more. */
  facilities: {
    eyebrow: "Campus & facilities",
    heading: "A campus built for learning and safety",
    items: [
      { initial: "Li", title: "Library", text: "A school library that builds the reading habit from the earliest classes." },
      { initial: "ICT", title: "ICT & Computer Lab", text: "Computer learning with internet access and modern teaching tools." },
      { initial: "Sc", title: "Science Lab", text: "An integrated science laboratory for hands-on experiments." },
      { initial: "AT", title: "Atal Tinkering Lab", text: "A dedicated innovation lab where students build, test and tinker." },
      { initial: "Sp", title: "Playground & Sports", text: "Ample playground space in the preschool wing and primary block." },
      { initial: "Se", title: "CCTV-Secured Campus", text: "Round-the-clock CCTV surveillance, indoors and outdoors." },
      { initial: "Me", title: "Medical Check-ups", text: "Regular medical check-ups for students on campus." },
      { initial: "Gr", title: "Green Campus", text: "Solar power and rain-water harvesting built into the campus." },
      { initial: "Sa", title: "Safe by Design", text: "Preschool rooms with see-through doors, cushioned floors, soft-corner furniture — and ramps for accessibility." }
    ]
  },

  /* ---------- Admissions ---------- */
  admissions: {
    eyebrow: "Admissions",
    heading: "Admission, in four simple steps",
    intro: "Admissions are open from Pre-Primary to Class 12. Start with an enquiry — the school office will guide you from there.",
    steps: [
      { title: "Enquire", text: "Fill the enquiry form below, or call the school office on +91 75790 63656." },
      { title: "Visit", text: "Visit the campus at Nathuawala, meet the office and see the school in person." },
      { title: "Register", text: "Complete the registration and submit the required documents at the school office." },
      { title: "Confirm", text: "After the interaction and document check, confirm your child's admission with the office." }
    ],
    /* HONESTY NOTES — do not replace these with invented details.
       The school has not published a fee table, a document list or
       admission dates anywhere. Add the real ones here when the
       school provides them. */
    feesNote: "Fee structure: the school does not publish fees online. Please call +91 75790 63656 for the current fee structure — no hidden charges, ask the office directly.",
    documentsNote: "Documents required: demo placeholder — the school's official document list is not published yet. This line is where the confirmed list will go.",
    datesNote: "Key dates: demo placeholder — admission dates for the coming session will be added here by the school.",
    form: {
      heading: "Enquire for admission",
      note: "Demo form — in this demo your enquiry is not sent anywhere. On the live site it will reach the school office.",
      button: "Send Enquiry",
      success: "Thank you! Your enquiry has been noted. The school office will contact you. (Demo — nothing was actually sent.)"
    }
  },

  /* ---------- Gallery ----------
     DEMO PHOTOS: these are placeholder photos (stock images of
     school life), NOT photos of Dehradun World School — the
     school's real photos could not be extracted from its current
     website. Replace every file in images/ with real campus
     photos as they become available. */
  gallery: {
    eyebrow: "Gallery",
    heading: "Life at school",
    note: "Demo photos — replace with real Dehradun World School photos in the images folder.",
    items: [
      { image: "images/gallery-library.jpg", caption: "The library" },
      { image: "images/gallery-science.jpg", caption: "In the science lab" },
      { image: "images/gallery-sports.jpg", caption: "Sports & athletics" },
      { image: "images/gallery-art.jpg", caption: "Art & craft" },
      { image: "images/gallery-play.jpg", caption: "Outdoor play" },
      { image: "images/gallery-reading.jpg", caption: "Reading time" }
    ]
  },

  /* ---------- Parent voices ----------
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

  /* ---------- Notice board ----------
     DEMO NOTICES: samples only, so the board doesn't ship empty.
     Replace with real school notices in this file. */
  notices: {
    eyebrow: "Notice board",
    heading: "Notices & updates",
    note: "Demo notices — replace these with real school notices in content.js.",
    items: [
      { tag: "Admissions", text: "Admissions open — Pre-Primary to Class 12. Call +91 75790 63656 to enquire." },
      { tag: "Demo notice", text: "Sample notice: school office is open Mon–Sat, 8:00 AM – 1:00 PM." },
      { tag: "Demo notice", text: "Sample notice: replace this line with the school's next real announcement." }
    ]
  },

  /* ---------- Contact ---------- */
  contact: {
    eyebrow: "Visit us",
    heading: "Contact the school",
    mapCta: "Open in Google Maps"
  },

  /* ---------- Footer ---------- */
  footer: {
    demoNote: "Demo website — rebuild concept for Dehradun World School. Photos are demo placeholders; content is editable in content.js.",
    credit: "Concept redesign — not the school's official website."
  }
};
