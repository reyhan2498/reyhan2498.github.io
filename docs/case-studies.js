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
        video: 'assets/DailyStreaks_Recording.mp4',
        image: 'images/dailystreaks-preview.jpg'
      }
    ],
    tags: ['Flutter', 'Dart', 'Firebase', 'Mobile Development']
  },
  dogguy: {
    title: 'Dog Guy',
    subtitle: 'Website fix & optimization',
    period: 'Freelance project',
    intro:
      'Helped a local business resolve critical email deliverability issues and improve their website\'s user experience across all devices.',
    stats: [
      { value: '100%', label: 'Email deliverability' },
      { value: 'Mobile', label: 'Optimized' },
      { value: 'DNS', label: 'Configured' },
      { value: '1', label: 'Happy client' }
    ],
    overview: [
      'The Dog Guy website, built on Wix, was experiencing critical email communication issues. Messages sent through the website chat were being replied to from an incorrect email address, causing them to be blocked by Gmail and other email providers. This was severely impacting the business\'s ability to communicate with customers.',
      'I resolved the issue by migrating the email system to a more reliable setup and properly configuring DNS and email settings. Additionally, I improved the website layout for better navigation and optimized the mobile version by adjusting spacing, resizing images, and improving how sections stack on smaller screens.'
    ],
    highlights: [
      {
        title: 'Before - Homepage',
        category: 'Before',
        image: 'images/Dogguy01.png'
      },
      {
        title: 'Before - Mobile View',
        category: 'Before',
        image: 'images/dogguy02.png'
      },
      {
        title: 'After - Homepage',
        category: 'After',
        image: 'images/dogguy03.png'
      },
      {
        title: 'After - Mobile View',
        category: 'After',
        image: 'images/dogguy04.png'
      }
    ],
    tags: ['Wix', 'Google Workspace', 'DNS', 'Web Development']
  }
};
