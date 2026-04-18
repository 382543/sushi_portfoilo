import { useEffect, useRef, useState } from 'react'
import { NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import heroImg from './assets/sushi.png'
import './App.css'

function App() {
  const location = useLocation()

  const roleVariants = [
    { line1: 'Full Stack', line2: 'Developer' },
    { line1: 'AI-ML / Data Science', line2: 'Engineer' },
  ]

  const [roleIndex, setRoleIndex] = useState(0)
  const [skillsQuery, setSkillsQuery] = useState('')
  const [swipeDirection, setSwipeDirection] = useState('forward')
  const previousPathRef = useRef(location.pathname)

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roleVariants.length)
    }, 1000)

    return () => clearInterval(timer)
  }, [roleVariants.length])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  const aboutIntro =
    'I am Sushila Yerukula - transforming data into meaningful insights and building intelligent, user-focused applications that make those insights accessible.'

  const aboutSummary =
    'I blend data science with modern web development: training machine learning models, analyzing patterns, and solving real-world problems while also crafting clean, interactive interfaces for the solutions I build.'

  const aboutHighlights = [
    { label: 'Education', value: 'B.Tech CSE, VIT Andhra Pradesh' },
    { label: 'Focus', value: 'Data Science + Web Development' },
    { label: 'Research', value: 'Published paper in fraud detection' },
    { label: 'Certification', value: 'Oracle Cloud, UI/UX, Android Dev' },
  ]

  const aboutExpertise = [
    {
      title: 'Core Expertise',
      text: 'Building intelligent systems with TensorFlow and OpenCV, analyzing data with Power BI and Tableau, and developing scalable web applications with React and FastAPI.',
      items: ['TensorFlow', 'OpenCV', 'Power BI', 'Tableau', 'React.js', 'FastAPI'],
    },
    {
      title: 'Engineering Stack',
      text: 'Full-stack development and deployment across front end, backend, databases, and cloud tooling.',
      items: ['HTML5', 'CSS3', 'JavaScript', 'MySQL', 'AWS EC2', 'Vercel'],
    },
  ]

  const education = [
    {
      school: 'VIT Andhra Pradesh',
      degree: 'B.Tech in Computer Science and Engineering',
      duration: '2022 - 2026',
    },
    {
      school: 'Montessori School, Kurnool',
      degree: 'SSC',
      duration: '2019 - 2020',
    },
  ]

  const skillGroups = [
    {
      label: 'Programming Languages',
      icon: '</>',
      summary: 'Core languages for systems, analysis, and application development.',
      items: [
        { name: 'Python', level: 'Advanced' },
        { name: 'React.js', level: 'Advanced' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'SQL', level: 'Advanced' },
      ],
    },
    {
      label: 'Web Development',
      icon: '⌂',
      summary: 'Frontend and backend web skills used to build responsive applications.',
      items: [
        { name: 'HTML5', level: 'Advanced' },
        { name: 'CSS3', level: 'Advanced' },
        { name: 'FastAPI', level: 'Intermediate' },
        { name: 'Tailwind', level: 'Intermediate' },
      ],
    },
    {
      label: 'Data Science Libraries',
      icon: '◌',
      summary: 'Libraries for data manipulation, analysis, and modeling.',
      items: [
        { name: 'Pandas', level: 'Advanced' },
        { name: 'NumPy', level: 'Advanced' },
        { name: 'Scikit-learn', level: 'Intermediate' },
      ],
    },
    {
      label: 'AI & NLP',
      icon: '◈',
      summary: 'Intelligent systems, text processing, and model-driven automation.',
      items: [
        { name: 'TensorFlow', level: 'Intermediate' },
        { name: 'OpenCV', level: 'Intermediate' },
        { name: 'NLP', level: 'Intermediate' },
        { name: 'LLM Basics', level: 'Beginner' },
      ],
    },
    {
      label: 'Machine Learning',
      icon: '⚡',
      summary: 'Model development techniques used in predictive systems.',
      items: [
        { name: 'Logistic Regression', level: 'Advanced' },
        { name: 'Random Forest', level: 'Advanced' },
        { name: 'SVM', level: 'Intermediate' },
        { name: 'Cross-Validation', level: 'Advanced' },
      ],
    },
    {
      label: 'Computer Vision',
      icon: '◉',
      summary: 'Image processing and object detection systems.',
      items: [
        { name: 'CNN', level: 'Advanced' },
        { name: 'YOLOv3', level: 'Intermediate' },
        { name: 'Image Processing', level: 'Advanced' },
        { name: 'Object Detection', level: 'Intermediate' },
      ],
    },
    {
      label: 'Data Visualization',
      icon: '◐',
      summary: 'Creating charts, graphs, and model performance visuals.',
      items: [
        { name: 'Matplotlib', level: 'Advanced' },
        { name: 'Seaborn', level: 'Intermediate' },
        { name: 'ROC-AUC', level: 'Advanced' },
        { name: 'Precision-Recall', level: 'Intermediate' },
      ],
    },
    {
      label: 'Tools & Databases',
      icon: '⌘',
      summary: 'Tools and platforms used for development and workflow management.',
      items: [
        { name: 'Jupyter Notebook', level: 'Advanced' },
        { name: 'Git', level: 'Advanced' },
        { name: 'GitHub', level: 'Advanced' },
        { name: 'VS Code', level: 'Advanced' },
        { name: 'MySQL', level: 'Advanced' },
        { name: 'XAMPP', level: 'Intermediate' },
      ],
    },
    {
      label: 'Cloud Platforms',
      icon: '☁',
      summary: 'Cloud and deployment platforms used to publish applications.',
      items: [
        { name: 'Vercel', level: 'Advanced' },
        { name: 'Render', level: 'Intermediate' },
        { name: 'AWS EC2', level: 'Intermediate' },
      ],
    },
  ]

  const dataScienceProjects = [
    {
      title: 'CKD Prediction System',
      description:
        'Analyzed more than 400 clinical records to develop a predictive model for early Chronic Kidney Disease detection. Performed preprocessing, feature scaling, and correlation analysis, then implemented Logistic Regression and Random Forest with 5-fold cross-validation.',
      stack: 'Python, Machine Learning, Logistic Regression, Random Forest, ROC-AUC',
      link: 'https://github.com/382543/your-ckd-repo',
      live: '#',
    },
    {
      title: 'Credit Card Fraud Detection',
      description:
        'Built machine learning models on an imbalanced transaction dataset for fraud detection. Applied class weighting techniques to improve recall for fraudulent cases and measured robustness with ROC-AUC and Precision-Recall curve analysis.',
      stack: 'Python, Machine Learning, Imbalanced Learning, Precision-Recall Analysis',
      link: 'https://github.com/382543/credit-card-fraud-detection',
      live: '#',
    },
  ]

  const webDevelopmentProjects = [
    {
      title: 'Food Quality Detection Web App',
      description:
        'Built a full-stack web application for real-time food detection and freshness classification. Developed a responsive React frontend for image upload and live prediction visualization, with a FastAPI backend for efficient model inference and API handling.',
      stack: 'React, FastAPI, YOLOv3, CNN',
      link: 'https://github.com/382543/caliber_chatbot_app',
      live: 'https://caliber-chatbot-app-1.onrender.com/',
    },
    {
      title: 'PrestaShop E-Commerce Deployment',
      description:
        'Deployed and configured a scalable PrestaShop e-commerce platform on AWS EC2. Implemented SSL, DNS configuration, and server hardening for secure access while optimizing the frontend UI and static assets.',
      stack: 'AWS EC2, PrestaShop',
      link: 'https://your-prestashop-github-link',
      live: 'http://13.232.5.42/',
    },
    {
      title: 'AI-Powered Event Manager Application',
      description:
        'Developed an intelligent event management system for college activities with ML-based event success prediction, NLP sentiment analysis for feedback, and personalized recommendations.',
      stack: 'React.js, FastAPI, scikit-learn, NLP',
      link: 'https://your-event-manager-github-link',
      live: 'https://your-event-manager-live-link',
    },
    {
      title: 'Interactive Christmas Surprise Web App',
      description:
        'Created an interactive animated web experience with snowfall animations, reveal interactions, and cross-device responsiveness for smooth performance.',
      stack: 'HTML, CSS, JavaScript',
      link: 'https://github.com/382543',
      live: 'https://christmas-suprise-mu.vercel.app/',
    },
  ]

  const certificates = [
    {
      title: 'Oracle Cloud Infrastructure 2025 - DevOps Professional (Oracle)',
      link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=3596F811137A005411D0562D95F9D415FEF9FF1FFCCF084D190F8819FE0C4148',
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 - Foundations Associate (Oracle)',
      link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=4C3056B392436158F6A09BEE8971B439EAC5734EAC1030BBC0E8D85D6F48E0A4',
    },
    {
      title: 'Adobe UI/UX Design Certification',
      link: 'https://drive.google.com/file/d/1PBUhocedQDboxcJypRZ79is_GXOXaCoZ/view',
    },
    {
      title: 'Android Development - E-Cell IIT Roorkee',
      link: 'https://drive.google.com/file/d/1yW4WSTF5pCD5ZQD3b_7KfyvOXOZq0fym/view',
    },
    {
      title: 'VIT-AP SCOPE - 5-Day DevOps Workshop',
      link: 'https://drive.google.com/file/d/1ADJYEBU6IS9hh3H89BbE9IvYjVu03ca9/view',
    },
    {
      title: 'Code with gear ngc',
      link: 'https://drive.google.com/file/d/13nn6lTBjQ7G0N_DKA0B-nYr0rIa4xb-I/view?usp=drive_link',
    },
    {
      title: 'Skill forge',
      link: 'https://drive.google.com/file/d/1ADt8VTwMswogzuq8t9K2ZDM9e0EgbfiF/view?usp=sharing',
    },
  ]

  const codingMetrics = [
    { label: 'Live Profiles', value: '4' },
    { label: 'Competitive Focus', value: 'DSA + Web' },
    { label: 'Featured Work', value: 'Projects + Research' },
  ]

  const codingProfiles = [
    {
      title: 'LeetCode',
      stat: '1800+ Rating • Knight',
      note: '500+ problems solved',
      link: 'https://leetcode.com/u/Jayamma/',
      accent: 'orange',
    },
    {
      title: 'HackerRank',
      stat: 'Practice & interviews',
      note: 'Algorithm drills and skills',
      link: 'https://www.hackerrank.com/profile/susheelay160',
      accent: 'blue',
    },
    {
      title: 'GitHub',
      stat: 'Builds & experiments',
      note: 'Web apps, ML systems, tooling',
      link: 'https://github.com/382543',
      accent: 'slate',
    },
    {
      title: 'LinkedIn',
      stat: 'Professional profile',
      note: 'Networking and opportunities',
      link: 'https://linkedin.com/in/sushila-yerukula-117056267',
      accent: 'violet',
    },
  ]

  const contactDetails = [
    {
      label: 'Email',
      href: 'mailto:susheelay160@gmail.com',
      stat: 'Primary inbox',
      note: 'Project inquiries and collaboration',
      accent: 'blue',
    },
    {
      label: 'Phone',
      href: 'tel:+910000000000',
      stat: 'Direct call',
      note: 'Quick conversations and updates',
      accent: 'orange',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/sushila-yerukula-117056267',
      stat: 'Professional profile',
      note: 'Networking and opportunities',
      accent: 'violet',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/382543',
      stat: 'Open-source work',
      note: 'Repositories, commits, and projects',
      accent: 'slate',
    },
  ]

  const renderContactIcon = (label) => {
    if (label === 'Email') {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 2v.2l8 5.2 8-5.2V8H4Zm16 8V10.5l-7.45 4.84a1 1 0 0 1-1.1 0L4 10.5V16h16Z" />
        </svg>
      )
    }

    if (label === 'Phone') {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.32.56 3.57.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.19 2.45.56 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2Z" />
        </svg>
      )
    }

    if (label === 'LinkedIn') {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M19 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18.33H5.67V9.75h2.67v8.58ZM7 8.58a1.54 1.54 0 1 1 0-3.08 1.54 1.54 0 0 1 0 3.08Zm11.33 9.75h-2.67v-4.67c0-1.11-.02-2.54-1.54-2.54-1.55 0-1.79 1.21-1.79 2.46v4.75H9.67V9.75h2.56v1.17h.04c.36-.67 1.23-1.38 2.54-1.38 2.71 0 3.21 1.79 3.21 4.12v4.67Z" />
        </svg>
      )
    }

    if (label === 'GitHub') {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.55 2.35 1.1 2.92.85.09-.66.35-1.1.64-1.35-2.22-.26-4.55-1.14-4.55-5.08 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .85-.28 2.79 1.05a9.33 9.33 0 0 1 5.08 0c1.94-1.33 2.79-1.05 2.79-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.74 0 3.95-2.34 4.81-4.57 5.07.36.31.69.92.69 1.86 0 1.35-.01 2.44-.01 2.77 0 .27.18.6.69.5A10.29 10.29 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
        </svg>
      )
    }

    return null
  }

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About me' },
    { to: '/education', label: 'Education' },
    { to: '/projects', label: 'Projects' },
    { to: '/skills', label: 'Skills' },
    { to: '/certificates', label: 'Certificate' },
    { to: '/coding-platform', label: 'Coding Platform' },
    { to: '/research', label: 'Research' },
    { to: '/keep-in-touch', label: 'Keep in Touch' },
  ]

  const routeSequence = [
    '/',
    '/about',
    '/education',
    '/projects',
    '/skills',
    '/certificates',
    '/coding-platform',
    '/research',
    '/keep-in-touch',
  ]

  useEffect(() => {
    const previousPath = previousPathRef.current
    const nextPath = location.pathname

    if (previousPath === nextPath) {
      return
    }

    const previousIndex = routeSequence.indexOf(previousPath)
    const nextIndex = routeSequence.indexOf(nextPath)

    if (previousIndex !== -1 && nextIndex !== -1) {
      setSwipeDirection(nextIndex >= previousIndex ? 'forward' : 'backward')
    } else {
      setSwipeDirection('forward')
    }

    previousPathRef.current = nextPath
  }, [location.pathname])

  const sectionTitle = {
    '/': 'Home',
    '/about': 'About Me',
    '/education': 'Education',
    '/projects': 'Projects',
    '/skills': 'Skills',
    '/certificates': 'Certificates',
    '/coding-platform': 'Coding Platform',
    '/research': 'Research',
    '/keep-in-touch': 'Keep in Touch',
  }

  const filteredSkillGroups = skillGroups.filter((group) => {
    const query = skillsQuery.trim().toLowerCase()
    if (!query) {
      return true
    }

    return (
      group.label.toLowerCase().includes(query) ||
      group.items.some((item) => item.name.toLowerCase().includes(query))
    )
  })

  const renderEducation = (revealClass = 'reveal-2', variantClass = '') => (
    <section className={`education-section ${variantClass} ${revealClass}`}>
      <div className="education-shell">
        <div className="education-hero">
          <span className="education-eyebrow">Learning Path</span>
          <h2>{sectionTitle['/education']}</h2>
          <p>
            A compact academic timeline showing where my computer science foundation and
            school background were built.
          </p>
        </div>

        <div className="education-timeline">
          {education.map((item, index) => (
            <article className="education-card" key={`${item.school}-${item.degree}`}>
              <div className="education-marker">0{index + 1}</div>
              <div className="education-content">
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
                <strong>{item.detail}</strong>
                <span>{item.duration}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )

  const renderProjectGroup = (title, description, projectItems, revealIndex, groupClass = '') => (
    <section className={`projects-section ${groupClass}`}>
      <div className={`section-head reveal-${revealIndex}`}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="project-grid">
        {projectItems.map((project, index) => (
          <article className={`project-card reveal-${revealIndex + index + 1}`} key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>{project.stack}</span>
            <div className="project-links">
              <a className="project-link project-link-github" href={project.link} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="project-link project-link-live" href={project.live} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )

  const renderProjects = (variantClass = '') => (
    <div className={`projects-route-shell ${variantClass}`}>
      {renderProjectGroup(
        'Data Science Projects',
        'Selected work in predictive modeling, healthcare analytics, and fraud detection.',
        dataScienceProjects,
        3,
        'projects-group-data',
      )}
      {renderProjectGroup(
        'Web Development Projects',
        'Selected work in full-stack web development, deployment, and interactive experiences.',
        webDevelopmentProjects,
        6,
        'projects-group-web',
      )}
    </div>
  )

  const renderSkills = (revealClass = 'reveal-2', variantClass = '') => (
    <section className={`skills-section ${variantClass} ${revealClass}`}>
      <div className="skills-shell">
        <div className="skills-hero">
          <h2>The Skill Matrix.</h2>
          <p>
            A comprehensive architecture of technical competencies across data science,
            machine learning, and application development.
          </p>
        </div>

        <div className="skills-search">
          <input
            type="search"
            value={skillsQuery}
            onChange={(event) => setSkillsQuery(event.target.value)}
            placeholder="Filter skills by name..."
            aria-label="Filter skills by name"
          />
        </div>

        <div className="skills-grid">
          {filteredSkillGroups.map((group) => (
            <article className="skill-matrix-card" key={group.label}>
              <div className="skill-card-head">
                <span className="skill-card-icon">{group.icon}</span>
                <div>
                  <h3>{group.label}</h3>
                  <p>{group.summary}</p>
                </div>
              </div>

              <div className="skill-list">
                {group.items.map((item) => (
                  <div className="skill-row" key={item.name}>
                    <span className="skill-name">{item.name}</span>
                    <span className={`skill-badge skill-badge-${item.level.toLowerCase()}`}>
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )

  const renderCertificates = (revealClass = 'reveal-2', variantClass = '') => (
    <section className={`certificate-section ${variantClass} ${revealClass}`}>
      <div className="certificate-shell">
        <div className="certificate-header">
          <span className="certificate-eyebrow">Verified Authority</span>
          <h2>{sectionTitle['/certificates']}</h2>
          <p>Selected credentials that support both my web and data science profile.</p>
        </div>

        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <article className="certificate-card" key={certificate.title}>
              <div className="certificate-line"></div>
              <h3>{certificate.title}</h3>
              <a href={certificate.link} target="_blank" rel="noreferrer">
                View Certificate
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )

  const renderCodingIcon = (title) => {
    if (title === 'LeetCode') {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M15.7 4.3a1 1 0 0 1 1.4 1.4L9.8 13l7.3 7.3a1 1 0 0 1-1.4 1.4l-8-8a1 1 0 0 1 0-1.4l8-8Z" />
          <path d="M9.2 12a1 1 0 0 1 1-1h8.8a1 1 0 1 1 0 2h-8.8a1 1 0 0 1-1-1Z" />
        </svg>
      )
    }

    if (title === 'HackerRank') {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M7.2 3.7h9.6l4.8 8.3-4.8 8.3H7.2L2.4 12l4.8-8.3Zm2.1 4.1v8.4h2.1v-2.8h1.2v2.8h2.1V7.8h-2.1v3h-1.2v-3H9.3Z" />
        </svg>
      )
    }

    if (title === 'GitHub') {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.55 2.35 1.1 2.92.85.09-.66.35-1.1.64-1.35-2.22-.26-4.55-1.14-4.55-5.08 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .85-.28 2.79 1.05a9.33 9.33 0 0 1 5.08 0c1.94-1.33 2.79-1.05 2.79-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.74 0 3.95-2.34 4.81-4.57 5.07.36.31.69.92.69 1.86 0 1.35-.01 2.44-.01 2.77 0 .27.18.6.69.5A10.29 10.29 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
        </svg>
      )
    }

    if (title === 'LinkedIn') {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M19 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18.33H5.67V9.75h2.67v8.58ZM7 8.58a1.54 1.54 0 1 1 0-3.08 1.54 1.54 0 0 1 0 3.08Zm11.33 9.75h-2.67v-4.67c0-1.11-.02-2.54-1.54-2.54-1.55 0-1.79 1.21-1.79 2.46v4.75H9.67V9.75h2.56v1.17h.04c.36-.67 1.23-1.38 2.54-1.38 2.71 0 3.21 1.79 3.21 4.12v4.67Z" />
        </svg>
      )
    }

    return '< />'
  }

  const renderCodingPlatform = (revealClass = 'reveal-7', variantClass = '') => (
    <section className={`coding-section ${variantClass} ${revealClass}`}>
      <div className="coding-shell">
        <div className="coding-header">
          <h2>Coding DNA</h2>
          <p>
            Quantifying competitive problem solving and professional presence through verified
            profiles and project history.
          </p>

          <div className="coding-metrics">
            {codingMetrics.map((metric) => (
              <div className="coding-metric" key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="coding-grid">
          {codingProfiles.map((profile) => (
            <a
              className={`coding-card coding-card-${profile.accent}`}
              key={profile.title}
              href={profile.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="coding-card-icon">{renderCodingIcon(profile.title)}</div>
              <div className="coding-card-top">
                <h3>{profile.title}</h3>
                <span>{profile.stat}</span>
              </div>
              <p>{profile.note}</p>
              <div className="coding-card-arrow">↗</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )

  const renderResearch = (revealClass = 'reveal-2', variantClass = '') => (
    <section className={`research-section ${variantClass} ${revealClass}`}>
      <div className="research-shell">
        <div className="research-banner">
          <span className="research-eyebrow">Research</span>
          <h2>{sectionTitle['/research']}</h2>
          <p>
            A publication spotlight on my machine learning research and the technical results
            behind it.
          </p>
        </div>

        <article className="research-spotlight">
          <div className="research-tag">IEEE Conference Publication, 2025</div>
          <h3>
            Comparative Analysis of Machine Learning and Deep Learning Models for Credit Card
            Fraud Detection
          </h3>
          <p>
            Conducted a comparative evaluation of Logistic Regression, Decision Tree, Random
            Forest, Support Vector Machine, k-Nearest Neighbors, and Recurrent Neural Networks
            for credit card fraud detection.
          </p>
          <a href="https://ieeexplore.ieee.org/document/10864225" target="_blank" rel="noreferrer">
            View Publication
          </a>
        </article>
      </div>
    </section>
  )

  const renderKeepInTouch = (revealClass = 'reveal-2', variantClass = 'page-contact') => (
    <section className={`contact-section-unique ${variantClass} ${revealClass}`}>
      <div className="contact-shell">
        <article className="contact-card">
          <span className="research-eyebrow">Let&apos;s Connect</span>
          <h2>{sectionTitle['/keep-in-touch']}</h2>
          <p>Select a channel.</p>

          <div className="contact-platform-grid">
            {contactDetails.map((item) => (
              <a
                className={`coding-card contact-platform-card coding-card-${item.accent}`}
                href={item.href}
                key={item.label}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={item.label}
                title={item.label}
              >
                <div className="coding-card-icon">{renderContactIcon(item.label)}</div>
                <div className="coding-card-top">
                  <h3>{item.label}</h3>
                  <span>{item.stat}</span>
                </div>
                <p>{item.note}</p>
                <div className="coding-card-arrow">↗</div>
              </a>
            ))}
          </div>
        </article>
      </div>
    </section>
  )

  const renderHomeContent = () => (
    <>
      <section id="home" className="showcase reveal-1">
        <p className="showcase-left">I'M</p>

        <div className="showcase-center">
          <div className="blob"></div>
          <img src={heroImg} alt="Sushila profile" className="showcase-image" />
          <p className="showcase-name">Sushila Yerukula</p>
        </div>

        <p className="showcase-right">
          {roleVariants[roleIndex].line1}
          <br />
          {roleVariants[roleIndex].line2}
        </p>
      </section>

      <section className="about-section home-about reveal-2">
        <div className="about-intro">
          <span className="about-eyebrow">About</span>
          <h2>Data & AI Specialist.</h2>
          <p>{aboutIntro}</p>
          <p>{aboutSummary}</p>
        </div>

        <div className="about-highlights">
          {aboutHighlights.map((item) => (
            <article className="about-highlight-card" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>

        <div className="about-expertise-grid">
          {aboutExpertise.map((group) => (
            <article className="about-expertise-card" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.text}</p>
              <div className="about-expertise-tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

    </>
  )

  return (
    <div className="book-layout">
      <header className="topbar">
        <nav className="hero-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'hero-nav-link hero-nav-link-active' : 'hero-nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <div className={`route-stage route-stage-${swipeDirection}`} key={location.pathname}>
        <Routes location={location}>
        <Route path="/" element={renderHomeContent()} />
        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route
          path="/about"
          element={
            <section className="about-section reveal-2">
              <div className="about-intro">
                <span className="about-eyebrow">About</span>
                <h2>Data & AI Specialist.</h2>
                <p>{aboutIntro}</p>
                <p>{aboutSummary}</p>
              </div>

              <div className="about-highlights">
                {aboutHighlights.map((item) => (
                  <article className="about-highlight-card" key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </article>
                ))}
              </div>

              <div className="about-expertise-grid">
                {aboutExpertise.map((group) => (
                  <article className="about-expertise-card" key={group.title}>
                    <h3>{group.title}</h3>
                    <p>{group.text}</p>
                    <div className="about-expertise-tags">
                      {group.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          }
        />

        <Route path="/education" element={renderEducation('reveal-2')} />
        <Route path="/projects" element={renderProjects('page-projects')} />
        <Route path="/skills" element={renderSkills('reveal-2')} />
        <Route path="/certificates" element={renderCertificates('reveal-2')} />
        <Route path="/coding-platform" element={renderCodingPlatform('reveal-7')} />
        <Route path="/research" element={renderResearch('reveal-2')} />
        <Route path="/keep-in-touch" element={renderKeepInTouch('reveal-2')} />

        <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
