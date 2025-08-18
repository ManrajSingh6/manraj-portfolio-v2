import type { ExperienceEntry } from './components/experience-card'
import type { ExtracurricularEntry } from './components/extracurricular-card'
import type { ProjectEntry } from './components/project-card'

export const EXPERIENCE_DATA: readonly ExperienceEntry[] = [
  {
    position: {
      title: 'Software Developer',
      startDate: new Date('2025-09-02'),
      description:
        'Develop full-stack features in a React SPA to enable the intelligent monitoring and control of commercially deployed solar projects.'
    },
    company: {
      name: 'Energy Toolbase',
      url: 'https://www.energytoolbase.com/'
    },
    badges: [
      'Typescript',
      'React',
      'Node.js',
      'GraphQL',
      'AWS',
      'Distributed Systems'
    ]
  },
  {
    position: {
      title: 'Software Developer Intern',
      startDate: new Date('2023-05-01'),
      endDate: new Date('2024-08-28'),
      description:
        'Developed full-stack features in a React SPA enabling the intelligent monitoring and control of commercially deployed solar projects. Led an intern team from requirements to release and contributed to the “Papercuts” initiative delivering high-value enhancements and reliability fixes.'
    },
    company: {
      name: 'Energy Toolbase',
      url: 'https://www.energytoolbase.com/'
    },
    badges: ['Typescript', 'React', 'Node.js', 'GraphQL', 'AWS']
  },
  {
    position: {
      title: 'Web Development Intern',
      startDate: new Date('2022-07-01'),
      endDate: new Date('2022-09-30'),
      description:
        'Built responsive full-stack web applications with modern JavaScript frameworks, HTML, and CSS; launched WooCommerce and Shopify sites for eight small businesses, enabling subscription-based services.'
    },
    company: {
      name: 'Omnivir'
    },
    badges: ['Javascript', 'HTML', 'CSS']
  }
]

export const EXTRACURRICULAR_DATA: readonly ExtracurricularEntry[] = [
  {
    position: {
      title: 'Full-stack Developer',
      description:
        'Built a custom CNN to classify wildlife species, with preprocessing and data augmentation for robust performance. Architected a full-stack web app that lets users upload images and view classification results in real time, backed by a model-serving API and a responsive UI for clear feedback.'
    },
    event: {
      name: 'Calgary Hacks Hackathon',
      date: new Date('2025-03-01')
    },
    badges: [
      'Typescript',
      'Python',
      'Machine Learning',
      'Express',
      'React',
      'Supabase'
    ]
  },
  {
    position: {
      title: 'Developer',
      description:
        'Collaborated in a two-person team to build a desktop GUI that teaches Java fundamentals using Java and Swing. Designed interactive lessons and quizzes with live code examples and instant feedback to engage young learners.'
    },
    event: {
      name: 'Hack Your Learning Hackathon',
      date: new Date('2022-03-01')
    },
    badges: ['Java', 'Swing GUI']
  }
]

export const PROJECT_DATA: readonly ProjectEntry[] = [
  {
    title: 'SpendViz - Small Business Finance Tracker',
    description:
      'Developed a finance tracker app to analyze user-uploaded bank statements for profit analysis. Actively used by 2 small businesses to reduce analysis times.',
    imageUrl: '/spendviz-logo.png',
    badges: ['Python', 'Typescript', 'GraphQL', 'React', 'AWS', 'Docker'],
    tags: ['full-stack']
  },
  {
    title: 'Energy Storage System Health Forecasting - Capstone Project',
    description:
      'Developed a predictive maintenance tool for battery energy storage systems, utilizing time-series analysis and machine learning to forecast battery degradation. This data-driven solution allowed customers to bypass invasive testing procedures, and reduce site downtime.',
    imageUrl: '/energytoolbase-logo.jpg',
    badges: [
      'Python',
      'Typescript',
      'GraphQL',
      'React',
      'Time Series Forecasting',
      'Docker',
      'LSTM'
    ],
    tags: ['data-science', 'full-stack']
  },
  {
    title: 'Wilddex - Distributed Wildlife Observation',
    description:
      'Built a full-stack distributed web app containerized with Docker Compose. Consisting of API, ML inference, and DB services designed for high availability and fault tolerance. Used Redis with Redlock for distributed consistency, and integrated a custom CNN via Flask plus GPT APIs to classify wildlife photos and generate AI conservation notes.',
    imageUrl: '/wilddex-logo.png',
    href: 'https://github.com/ManrajSingh6/wilddex',
    badges: ['Python', 'Typescript', 'Flask + Express', 'React', 'Docker'],
    tags: ['distributed-systems', 'full-stack', 'data-science']
  },
  {
    title: 'SpendSaavy',
    description:
      'Developed a finance tracker app to analyze spending and expenditure. Allowed users to visualize financial data via interactive charts, and set trackable goals.',
    imageUrl: '/spendsaavy-logo.png',
    href: 'https://github.com/ManrajSingh6/spendsavvy',
    badges: ['Typescript', 'GraphQL', 'PostgreSQL', 'React', 'Docker'],
    tags: ['full-stack']
  },
  {
    title: 'KNN Vehicle Identifier',
    description:
      'Developed a K-Nearest Neighbors (KNN) model to classify vehicles based on their performance specifications. Implemented data preprocessing, feature extraction, and model evaluation resulting in 94.6% accuracy.',
    imageUrl: '/knn-model.jpg',
    badges: ['Python', 'Machine Learning', 'Scikit-Learn', 'Pandas'],
    tags: ['data-science'],
    href: 'https://github.com/ManrajSingh6/Machine-Learning-Prediction-Model-KNN'
  }
]
