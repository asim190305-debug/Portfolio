/* =========================================================================
   PORTFOLIO CLIENT CONFIGURATION (site-config.js)
   Client: Muhammad Asim Shahzad (asim190305@gmail.com)
   ========================================================================= */

// 1. SUPABASE & ADMIN CREDENTIALS
const SUPABASE_URL      = 'https://vmsjsqvigaatbjclytrp.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtc2pzcXZpZ2FhdGJqY2x5dHJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU1MjA3OTQsImV4cCI6MjExMTA5Njc5NH0.4b-mDTcgW8DhrfQjPewRfSxLCy91jYw3_ENwvlagWQs';
const ADMIN_EMAIL       = 'asim190305@gmail.com';
const SETTINGS_ID       = 'main';
const STORAGE_BUCKET    = 'portfolio';
const FEED_FUNCTION     = 'social-feed';

// 2. BUILT-IN SECTION LABELS (Used by Page Builder in admin.html)
const SECTION_LABELS = {
  hero:       'Hero',
  marquee:    'Scrolling Marquee',
  stats:      'Stats Counter',
  about:      'About Me',
  services:   'Core Services',
  skills:     'Skills & Tools',
  experience: 'Professional Experience',
  education:  'Education & Languages',
  highlights: 'Teaching Approach',
  social:     'Social Feed',
  contact:    'Contact'
};

const DEFAULT_ORDER = [
  'marquee', 'stats', 'about', 'services', 'skills',
  'experience', 'education', 'highlights', 'social', 'contact'
];

// 3. SUPPORTED SOCIAL PLATFORMS (Used by Social Media manager in admin.html)
const SOCIAL_PLATFORMS = {
  linkedin:  { name: 'LinkedIn',    icon: 'fa-brands fa-linkedin-in', color: '#0a66c2', ph: 'https://linkedin.com/in/username', feed: false },
  github:    { name: 'GitHub',      icon: 'fa-brands fa-github',      color: '#24292f', ph: 'https://github.com/username',      feed: false },
  youtube:   { name: 'YouTube',     icon: 'fa-brands fa-youtube',     color: '#ff0000', ph: 'https://youtube.com/@handle',      feed: true  },
  instagram: { name: 'Instagram',   icon: 'fa-brands fa-instagram',   color: '#e1306c', ph: 'https://instagram.com/username',   feed: true  },
  facebook:  { name: 'Facebook',    icon: 'fa-brands fa-facebook-f',  color: '#1877f2', ph: 'https://facebook.com/pagename',    feed: true  },
  tiktok:    { name: 'TikTok',      icon: 'fa-brands fa-tiktok',      color: '#111111', ph: 'https://tiktok.com/@username',     feed: true  },
  twitter:   { name: 'X / Twitter', icon: 'fa-brands fa-x-twitter',   color: '#111111', ph: 'https://x.com/username',           feed: false },
  website:   { name: 'Website',     icon: 'fa-solid fa-globe',        color: '#3b82f6', ph: 'https://example.com',              feed: false }
};

// 4. CLIENT PORTFOLIO DATA — MUHAMMAD ASIM SHAHZAD
const DEFAULTS = {
  seo: {
    title: 'Muhammad Asim Shahzad | Physics & Mathematics Teacher',
    description: 'Portfolio of Muhammad Asim Shahzad — BS Physics graduate and experienced Physics & Mathematics teacher offering secondary instruction and private home tuition in Sargodha, Pakistan.'
  },
  theme: {
    template: 'dennis',
    preset: 'obsidian-cobalt',
    primary: '#3b82f6',
    secondary: '#60a5fa',
    bg: '#090b10',
    bg2: '#10131c',
    card: '#151924',
    text: '#f3f5f9',
    muted: '#98a2b3',
    radius: 16,
    glow: 32,
    fontHeading: 'Plus Jakarta Sans',
    fontBody: 'Inter'
  },
  animations: {
    enabled: true,
    typewriter: true,
    typeSpeed: 85,
    marquee: true,
    marqueeSpeed: 28,
    counters: true,
    preloader: true,
    scrollProgress: true
  },
  nav: { cta: 'Book a Tuition' },
  profile: {
    firstName: 'Muhammad Asim',
    lastName: 'Shahzad',
    brand: 'Asim Shahzad',
    initials: 'MAS',
    hello: "Hello, I'm",
    roles: [
      'Physics & Mathematics Teacher',
      'BS Physics Graduate',
      'Secondary & Matric Specialist',
      'Private Home Tutor'
    ],
    intro: 'Dedicated Physics and Mathematics educator with 3+ years of school teaching and private tutoring experience, backed by a BS in Physics from the University of Sargodha. Helping secondary and matric students master complex concepts with clarity and confidence.',
    photoUrl: 'profile.jpg',
    cvUrl: '',
    yearsExp: '3+',
    yearsLabel: 'Years Teaching',
    floatBadge: 'BS Physics',
    email: 'asim190305@gmail.com',
    phone: '+92 321 3207141',
    whatsapp: '923213207141',
    linkedin: '',
    location: 'Sargodha, Punjab, Pakistan',
    availability: 'Available On-Site (Sargodha) & Online',
    timezone: 'Asia/Karachi',
    aboutTag: 'Physics Educator · Mathematics Specialist · BS Physics',
    aboutTitle: 'Turning complex Physics and Mathematics concepts into clear, practical, and lasting academic mastery.',
    aboutText1: 'I am a Physics and Mathematics Teacher with over 3 years of combined school teaching and private tutoring experience, supported by a Bachelor of Science in Physics from the University of Sargodha. I specialize in teaching Physics and Mathematics at the secondary and matric levels with hands-on classroom exposure to approximately 40 students per class.',
    aboutText2: 'Having taught at Al-Suffah Saviour High School and Islamic Suffah High School alongside providing personalized home tuition in Sargodha, I use creative teaching techniques, structured problem-solving, and clear communication to help every learner build strong conceptual foundations.',
    cvSummary: 'Physics Teacher with over 3 years of combined school teaching and private tutoring experience, supported by a completed BS in Physics from the University of Sargodha. Experienced in teaching Physics and Mathematics at matric level, with classroom exposure to approximately 40 students per class. Skilled in explaining subject concepts through creative teaching techniques, supporting student learning and communicating effectively with learners.'
  },
  sections: {
    hero:       { show: true, nav: 'Home' },
    marquee:    { show: true },
    stats:      { show: true },
    about:      { show: true, nav: 'About', kicker: 'Profile', title: 'About', accent: 'Me', sub: '' },
    services:   { show: true, nav: 'Services', kicker: 'Teaching Services', title: 'Core', accent: 'Services', sub: 'Click any service to inquire directly about classes or tuition.' },
    skills:     { show: true, nav: 'Skills', kicker: 'Capabilities', title: 'Skills &', accent: 'Expertise', sub: '' },
    experience: { show: true, nav: 'Experience', kicker: 'Track Record', title: 'Teaching', accent: 'Experience', sub: '' },
    education:  { show: true, nav: 'Education', kicker: 'Credentials', title: 'Education &', accent: 'Proficiencies', sub: '' },
    highlights: { show: true, nav: '', kicker: 'Why Learn With Me', title: 'How I Help Students', accent: 'Succeed', sub: '' },
    social:     { show: false, nav: '', kicker: 'Updates', title: 'Latest', accent: 'Posts', sub: '', maxItems: 6 },
    contact:    { show: true, nav: 'Contact', kicker: 'Connect', title: 'Start a', accent: 'Conversation', sub: 'Send an inquiry for school roles, private home tuition, or online classes.' }
  },
  order: DEFAULT_ORDER.slice(),
  customSections: [],
  marquee: [
    'Physics Teaching',
    'Mathematics Instruction',
    'Secondary & Matric Prep',
    'Private Home Tuition',
    'BS Physics — UOS',
    'Creative Teaching Techniques',
    'Problem Solving',
    'Python & Office Management'
  ],
  stats: [
    { icon: 'fa-solid fa-chalkboard-user', value: '3', suffix: '+', label: 'Years Teaching Experience' },
    { icon: 'fa-solid fa-users',           value: '40', suffix: '+', label: 'Students Per Classroom' },
    { icon: 'fa-solid fa-school',          value: '4', suffix: '',  label: 'Teaching & Tutoring Roles' },
    { icon: 'fa-solid fa-atom',            value: '2', suffix: '',  label: 'Core STEM Subjects' }
  ],
  services: [
    {
      icon: 'fa-solid fa-atom',
      title: 'Secondary & Matric Physics',
      desc: 'Conceptual, exam-focused Physics instruction covering mechanics, electricity, optics, and numerical problem-solving for Matric and secondary classes.',
      tag: 'Physics'
    },
    {
      icon: 'fa-solid fa-square-root-variable',
      title: 'Mathematics Instruction',
      desc: 'Step-by-step Mathematics teaching that strengthens algebraic reasoning, geometry, and board exam accuracy through clear worked examples.',
      tag: 'Mathematics'
    },
    {
      icon: 'fa-solid fa-chalkboard-user',
      title: 'Private Home Tuition',
      desc: 'Personalized 1-on-1 home tutoring in Sargodha tailored to each student’s pace, daily homework, and conceptual gaps.',
      tag: 'Home Tuition'
    },
    {
      icon: 'fa-solid fa-bullseye',
      title: 'Board Exam & Concept Prep',
      desc: 'Creative teaching techniques, structured revision plans, and regular practice assessments designed to boost student confidence and results.',
      tag: 'Exam Prep'
    }
  ],
  skills: [
    { name: 'Physics Teaching',               percent: 96, category: 'Teaching' },
    { name: 'Mathematics Teaching',           percent: 95, category: 'Teaching' },
    { name: 'Secondary & Matric Instruction', percent: 95, category: 'Teaching' },
    { name: 'Private Tutoring & Mentoring',   percent: 94, category: 'Teaching' },
    { name: 'Creative Teaching Techniques',   percent: 94, category: 'Instructional' },
    { name: 'Classroom Communication',        percent: 93, category: 'Instructional' },
    { name: 'Subject Knowledge Development',  percent: 92, category: 'Instructional' },
    { name: 'Problem Solving & Critical Thinking', percent: 92, category: 'Strengths' },
    { name: 'Leadership & Teamwork',          percent: 90, category: 'Strengths' },
    { name: 'Python Programming',             percent: 80, category: 'Technical' },
    { name: 'Office Management',              percent: 85, category: 'Technical' }
  ],
  competencies: [
    'Physics Teaching',
    'Mathematics Teaching',
    'Secondary School Education',
    'Matric Level Instruction',
    'Classroom Teaching (~40 Students)',
    'Private Home Tutoring',
    'Creative Teaching Techniques',
    'Student Learning Support',
    'Classroom Communication',
    'Python Programming',
    'Office Management',
    'Problem Solving & Critical Thinking'
  ],
  experience: [
    {
      role: 'Physics and Mathematics Teacher',
      company: 'Al-Suffah Saviour High School, Sargodha',
      period: 'September 2026 – Present',
      type: 'Full-Time',
      icon: 'fa-solid fa-chalkboard-user',
      current: true,
      points: [
        'Teach Physics and Mathematics at the secondary school level, supporting students in understanding important subject concepts.',
        'Apply creative teaching techniques to explain academic topics and strengthen students’ subject knowledge.',
        'Provide classroom instruction and learning support to help students develop strong foundations in Physics and Mathematics.'
      ]
    },
    {
      role: 'Home Tutor',
      company: 'Private Home Tuition, Sargodha',
      period: 'June 2025 – Present',
      type: 'Private Tutoring',
      icon: 'fa-solid fa-user-graduate',
      current: true,
      points: [
        'Provide private tutoring to support students in developing their academic knowledge and understanding of subject concepts.',
        'Help students strengthen their grasp of Physics and Mathematics topics through direct, personalized learning support.'
      ]
    },
    {
      role: 'Physics and Mathematics Teacher',
      company: 'Islamic Suffah High School, Sargodha',
      period: 'June 2023 – April 2024',
      type: 'Full-Time',
      icon: 'fa-solid fa-school',
      current: false,
      points: [
        'Taught Physics and Mathematics, focusing on helping students understand core academic concepts.',
        'Applied creative and practical teaching approaches to communicate topics clearly and support student learning.',
        'Assisted students in developing stronger subject knowledge through structured classroom instruction.'
      ]
    },
    {
      role: 'Physics and Mathematics Teacher',
      company: 'Al-Suffah Saviour High School, Sargodha',
      period: 'January 2021 – June 2022',
      type: 'Full-Time',
      icon: 'fa-solid fa-atom',
      current: false,
      points: [
        'Delivered classroom instruction in Physics and Mathematics, helping students understand fundamental academic concepts.',
        'Used productive and creative teaching techniques to support students’ knowledge and understanding of both subjects.'
      ]
    }
  ],
  education: [
    {
      degree: 'Bachelor of Science in Physics (BS Physics)',
      institute: 'University of Sargodha',
      period: '2022 – 2026',
      location: 'Sargodha, Pakistan',
      desc: 'Completed BS in Physics with strong grounding in theoretical & applied physics, mathematical methods, and Python.'
    },
    {
      degree: 'Intermediate in Pre-Engineering (FSc)',
      institute: 'Reader College, Sargodha',
      period: '2019 – 2021',
      location: 'Sargodha, Pakistan',
      desc: 'Pre-Engineering curriculum focused on Physics, Mathematics, and Chemistry.'
    },
    {
      degree: 'Matriculation in Science',
      institute: 'Al-Suffah Saviour High School, Sargodha',
      period: '2017 – 2019',
      location: 'Sargodha, Pakistan',
      desc: 'Secondary science track specializing in Physics and Mathematics.'
    }
  ],
  certifications: [
    {
      title: 'English Language — Fluent',
      org: 'Language Proficiency',
      year: 'Fluent',
      icon: 'fa-solid fa-globe',
      desc: 'Clear spoken and written communication for classroom instruction, exam guidance, and academic mentoring.'
    },
    {
      title: 'Urdu Language — Native',
      org: 'Language Proficiency',
      year: 'Native',
      icon: 'fa-solid fa-comments',
      desc: 'Native bilingual fluency enabling approachable explanations of complex scientific concepts.'
    },
    {
      title: 'Python & Office Management',
      org: 'Technical Skills',
      year: 'Technical',
      icon: 'fa-solid fa-code',
      desc: 'Working proficiency in Python programming and modern office documentation & management tools.'
    }
  ],
  highlights: [
    {
      icon: 'fa-solid fa-lightbulb',
      title: 'Concept-First Pedagogy',
      text: 'Creative, practical teaching methods that replace rote memorization with genuine understanding of Physics and Mathematics.'
    },
    {
      icon: 'fa-solid fa-users',
      title: 'Classroom & 1-on-1 Mastery',
      text: 'Proven ability to lead 40-student classrooms while also delivering focused, individualized coaching in private home tuition.'
    },
    {
      icon: 'fa-solid fa-handshake',
      title: 'Supportive Communication',
      text: 'Patient, clear instruction in both English and Urdu that keeps students engaged, motivated, and exam-ready.'
    }
  ],
  socials: {
    showHero: false,
    showFooter: true,
    showContact: true,
    floatingBar: false,
    platforms: {
      linkedin:  { enabled: false, url: '' },
      github:    { enabled: false, url: '' },
      youtube:   { enabled: false, url: '', feed: false, channelId: '' },
      instagram: { enabled: false, url: '', feed: false },
      facebook:  { enabled: false, url: '', feed: false, mode: 'plugin', pageId: '' },
      tiktok:    { enabled: false, url: '', feed: false },
      twitter:   { enabled: false, url: '' },
      website:   { enabled: false, url: '' }
    },
    posts: []
  },
  contact: {
    formTitle: 'Send a Direct Message',
    formSub: 'Saved securely and delivered straight to asim190305@gmail.com.',
    gmailTo: 'asim190305@gmail.com',
    saveToSupabase: true,
    sendGmail: true,
    whatsappButton: true,
    successMsg: "Thank you! Your inquiry has been received — I'll respond shortly."
  },
  footer: {
    tagline: 'Physics & Mathematics Teacher · BS Physics',
    text: 'All Rights Reserved.'
  }
};

// 5. SHARED UTILITIES (Used by admin.html)
function merge(base, over) {
  if (over === undefined || over === null) return base;
  if (Array.isArray(over)) return over;
  if (typeof over === 'object' && base && typeof base === 'object' && !Array.isArray(base)) {
    const out = { ...base };
    for (const k in over) out[k] = merge(base[k], over[k]);
    return out;
  }
  return over;
}

function orderList(c) {
  const customIds = (c.customSections || []).map(x => x.id);
  const valid = new Set([...DEFAULT_ORDER, ...customIds]);
  const saved = Array.isArray(c.order) ? c.order.filter(id => valid.has(id)) : [];
  const missing = [...DEFAULT_ORDER, ...customIds].filter(id => !saved.includes(id));
  return [...saved, ...missing];
}

function parseMedia(raw) {
  const u = String(raw || '').trim();
  if (!u) return null;
  if (/^data:image\//i.test(u) || /\.(png|jpe?g|gif|webp|avif|svg)(\?.*)?$/i.test(u)) {
    return { kind: 'image', src: u, thumb: u };
  }
  if (/\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(u)) {
    return { kind: 'video', src: u, thumb: '' };
  }
  const yt = u.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/);
  if (yt) return { kind: 'iframe', pl: 'youtube', src: `https://www.youtube.com/embed/${yt[1]}`, thumb: `https://i.ytimg.com/vi/${yt[1]}/hqdefault.jpg` };
  if (/vimeo\.com/i.test(u)) return { kind: 'iframe', pl: 'website', src: u, thumb: '' };
  if (/instagram\.com/i.test(u)) return { kind: 'iframe', pl: 'instagram', src: u, thumb: '' };
  if (/facebook\.com/i.test(u)) return { kind: 'iframe', pl: 'facebook', src: u, thumb: '' };
  if (/tiktok\.com/i.test(u)) return { kind: 'iframe', pl: 'tiktok', src: u, thumb: '' };
  if (/linkedin\.com/i.test(u)) return { kind: 'iframe', pl: 'linkedin', src: u, thumb: '' };
  return { kind: 'link', src: u, thumb: '' };
}
