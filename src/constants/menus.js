import ConsoleIcon from 'icons/console.inline.svg';
import aboutUsDarkIcon from 'icons/header/about-us-dark.svg';
import aboutUsIcon from 'icons/header/about-us.svg';
import aiDarkIcon from 'icons/header/ai-dark.svg';
import aiIcon from 'icons/header/ai.svg';
import blogDarkIcon from 'icons/header/blog-dark.svg';
import blogIcon from 'icons/header/blog.svg';
import careersDarkIcon from 'icons/header/careers-dark.svg';
import careersIcon from 'icons/header/careers.svg';
import cliDarkIcon from 'icons/header/cli-dark.svg';
import cliIcon from 'icons/header/cli.svg';
import demosDarkIcon from 'icons/header/demos-dark.svg';
import demosIcon from 'icons/header/demos.svg';
import discordDarkIcon from 'icons/header/discord-dark.svg';
import discordIcon from 'icons/header/discord.svg';
import enterpriseDarkIcon from 'icons/header/enterprise-dark.svg';
import enterpriseIcon from 'icons/header/enterprise.svg';
import PostgresDocsIcon from 'icons/postgres.inline.svg';
import TransactionsIcon from 'icons/transactions.inline.svg';

import LINKS from './links';

export default {
  header: [
    {
      text: 'Features',
      items: [
        {
          icon: {
            light: cliIcon,
            dark: cliDarkIcon,
          },
          text: 'CLI',
          description: 'Unique in your terminal',
          to: LINKS.cli,
        },
        {
          icon: {
            light: aiIcon,
            dark: aiDarkIcon,
          },
          text: 'AI',
          description: 'Unique as your vector store',
          to: LINKS.ai,
        },
      ],
    },
    {
      text: 'Pricing',
      to: LINKS.pricing,
    },
    {
      text: 'Docs',
      to: LINKS.docs,
    },
    {
      text: 'Resources',
      items: [
        {
          icon: {
            light: blogIcon,
            dark: blogDarkIcon,
          },
          text: 'Blog',
          description: 'Learn from the experts',
          to: LINKS.blog,
        },
        {
          icon: {
            light: demosIcon,
            dark: demosDarkIcon,
          },
          text: 'Demos',
          description: 'Try interactive demos',
          to: LINKS.demos,
        },
        {
          icon: {
            light: discordIcon,
            dark: discordDarkIcon,
          },
          text: 'Discord',
          description: 'Join the community',
          to: LINKS.discord,
        },
      ],
    },
    {
      text: 'Company',
      items: [
        {
          icon: {
            light: aboutUsIcon,
            dark: aboutUsDarkIcon,
          },
          text: 'About us',
          description: 'Meet the team',
          to: LINKS.aboutUs,
        },
        {
          icon: {
            light: careersIcon,
            dark: careersDarkIcon,
          },
          text: 'Careers',
          description: 'Be Unique',
          to: LINKS.careers,
        },
        {
          icon: {
            light: enterpriseIcon,
            dark: enterpriseDarkIcon,
          },
          text: 'Enterprise',
          description: 'Scale & grow',
          to: LINKS.enterprise,
        },
      ],
    },
  ],
  footer: [
    {
      heading: 'Company',
      links: [
        {
          text: 'About us',
          to: LINKS.aboutUs,
        },
        {
          text: 'Pricing',
          to: LINKS.pricing,
        },
        {
          text: 'Contact Sales',
          to: LINKS.contactSales,
        },
        {
          text: 'Early Access',
          to: LINKS.earlyAccess,
        },
      ],
    },
    {
      heading: 'Resources',
      links: [
        {
          text: 'AI',
          to: LINKS.ai,
        },
        {
          text: 'Blog',
          to: LINKS.blog,
        },
        {
          text: 'Docs',
          to: LINKS.docs,
        },
        {
          text: 'Community Guides',
          to: LINKS.guides,
        },
        {
          text: 'Demos',
          to: LINKS.demos,
        },
        {
          text: 'Support',
          to: LINKS.support,
        },
      ],
    },
    {
      heading: 'Community',
      links: [
        {
          text: 'x.com',
          to: LINKS.twitter,
          icon: 'x-icon',
        },
        {
          text: 'LinkedIn',
          to: LINKS.linkedin,
          icon: 'linkedin-icon',
        },
        {
          text: 'GitHub',
          to: LINKS.github,
          icon: 'github-icon',
        },
        {
          text: 'Discord',
          to: LINKS.discord,
          icon: 'discord-icon',
        },
      ],
    },
    {
      heading: 'Legal',
      links: [
        {
          text: 'Privacy Policy',
          to: LINKS.privacy,
        },
        {
          text: 'Terms of Service',
          to: LINKS.terms,
        },
        {
          text: 'Privacy Guide',
          to: LINKS.privacyGuide,
        },
      ],
    },
  ],
  docSidebar: [
    {
      icon: TransactionsIcon,
      title: 'API Reference',
      slug: LINKS.apiReference,
    },
    {
      icon: ConsoleIcon,
      title: 'CLI Reference',
      slug: LINKS.cliReference,
    },
  ],
  postgresSidebar: [
    {
      icon: PostgresDocsIcon,
      title: 'Unique Docs',
      slug: LINKS.docs,
    },
  ],
};
