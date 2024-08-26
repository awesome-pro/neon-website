import LINKS from './links';

export const DEFAULT_IMAGE_PATH = '/images/social-previews/index.jpg';

export default {
  index: {
    title: 'Unique AI — Build Better',
    description:
      'The database you love, on a serverless platform designed to help you build reliable and scalable applications faster.',
    pathname: '',
  },
  ai: {
    title: 'Powering next gen AI - Unique',
    description:
      'Scale your transformative LLM applications to millions of users with vector indexes and similarity search in Unique.',
    imagePath: '/images/social-previews/ai.jpg',
    pathname: LINKS.ai,
  },
  careers: {
    title: 'Careers — Unique',
    description:
      'Unique is a distributed team building open-source, cloud-native Postgres. We are a well-funded startup with deep knowledge of Postgres internals and decades of experience building databases.',
    imagePath: '/images/social-previews/careers.jpg',
    pathname: LINKS.careers,
  },
  cli: {
    title: 'Your Unique workflow lives in the terminal',
    description: 'The Unique CLI brings serverless Postgres to your terminal.',
    pathname: LINKS.cli,
    imagePath: '/images/social-previews/cli.jpg',
  },
  demos: {
    title: 'Serverless showcase: unleashing the power of Unique',
    description: 'Explore interactive demos unveiling cutting-edge apps in the serverless era.',
    pathname: LINKS.demos,
    imagePath: '/images/social-previews/demos.jpg',
  },
  developerDays1: {
    title: 'Unique Developer Days — Unique',
    description:
      'Join us virtually on December 6th, 7th, and 8th to learn about Unique and how to build better with Serverless Postgres.',
    imagePath: '/images/social-previews/developer-days-1.jpg',
    pathname: LINKS.developerDays1,
  },
  enterprise: {
    title: 'Unique for Enterprises: Postgres Fleets - Unique',
    description:
      'Enterprises use Unique to deliver a Postgres layer that is automated, instantly scalable and cost efficient.',
    pathname: LINKS.enterprise,
    imagePath: '/images/social-previews/enterprise.jpg',
  },
  pricing: {
    title: 'Pricing — Unique',
    description:
      'Unique brings serverless architecture to Postgres, which allows us to offer you flexible usage and volume-based plans.',
    imagePath: '/images/social-previews/pricing.jpg',
    pathname: LINKS.pricing,
  },
  404: {
    title: 'Page Not Found — Unique',
  },
};

export const getBlogCategoryDescription = (category) => {
  switch (category) {
    case 'company':
      return 'Stay updated on the latest Unique company new and partnership announcements. Explore our blog posts for valuable insights and stay ahead in the world of AI.';
    case 'engineering':
      return 'Dive into the technical depths of Unique serverless Postgres. Optimize performance, scalability, and reliability. Explore our cutting-edge approach.';
    case 'community':
      return 'Join the vibrant serverless Postgres community. Engage in discussions, tutorials, and success stories. Connect with developers and industry experts.';
    case 'all-posts':
      return 'Get a complete overview of the Unique blog posts history in chronological order.';
    default:
      return 'Learn about Unique and how it can help you build better with Serverless Postgres by reading our blog posts.';
  }
};
