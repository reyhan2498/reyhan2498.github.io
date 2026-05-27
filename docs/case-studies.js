export const caseStudies = {
  megabliss: {
    title: 'MegaBliss Platform',
    subtitle: 'Full stack performance & UX',
    period: 'Remote internship · Nov 2023 – Apr 2024',
    intro:
      'Remote internship at MegaBliss & MegaTransact — integrating React/Next.js with APIs and SQL while improving speed and engagement.',
    stats: [
      { value: '40%', label: 'Performance uplift' },
      { value: '25%', label: 'Faster loads' },
      { value: '20%', label: 'Lower bounce' },
      { value: '6 mo', label: 'Duration' }
    ],
    overview: [
      'MegaBliss and MegaTransact provide online platforms and payment-related services. I integrated front-end components with backend services, optimized API and database usage, and resolved UI/UX issues affecting business users.',
      'Stack: Next.js, React, Tailwind CSS, Chakra UI, REST APIs, and SQL — with a focus on load time, reliability, and responsive layouts.'
    ],
    highlights: [
      {
        title: 'Booking & service UX',
        category: 'Platform',
        image: 'images/pic06.png'
      },
      {
        title: 'API & data integration',
        category: 'Backend',
        image: 'images/pic02.jpg',
        imagePosition: 'center top'
      }
    ],
    tags: ['Next.js', 'React', 'REST APIs', 'SQL']
  },
  dailystreaks: {
    title: 'DailyStreaks',
    subtitle: 'Habit tracking & streak building',
    period: 'Personal project',
    intro:
      'A Flutter mobile app designed to help users build and maintain habits through streak tracking, daily reminders, and progress visualization.',
    stats: [
      { value: '5+', label: 'Habit categories' },
      { value: '100%', label: 'Open source' },
      { value: 'Cross-platform', label: 'iOS & Android' },
      { value: 'Flutter', label: 'Framework' }
    ],
    overview: [
      'DailyStreaks is a cross-platform mobile application built with Flutter that helps users establish and maintain positive habits through gamification and streak tracking. The app provides a clean, intuitive interface for managing daily tasks and visualizing progress over time.',
      'The app features local data persistence, customizable reminders, and a variety of habit categories including health, productivity, learning, and personal care. Users can track multiple habits simultaneously and view their streak history to stay motivated.'
    ],
    highlights: [
      {
        title: 'App Preview & Demo',
        category: 'Preview',
        video: 'videos/dailystreaks-demo.mp4',
        image: 'images/dailystreaks-preview.jpg'
      },
      {
        title: 'Local data persistence & reminders',
        category: 'Backend',
        image: 'images/pic03.jpg'
      }
    ],
    tags: ['Flutter', 'Dart', 'Firebase', 'Mobile Development']
  }
};
