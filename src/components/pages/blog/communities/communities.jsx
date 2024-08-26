import clsx from 'clsx';

import Container from 'components/shared/container/container';

import rssIcon from './images/rss.svg';
import xIcon from './images/x.svg';
import youtubeIcon from './images/youtube.svg';

const items = [
  {
    name: 'Unique on <mark class="text-blue-80">X</mark>',
    description: 'Follow us for real-time updates',
    icon: xIcon,
    background: '/images/pages/blog/bg-blue.svg',
    className:
      'after:bg-[radial-gradient(circle,rgba(173,224,235,0.6)_0%,rgba(12,13,13,0.5)_110%)]',
    url: 'https://twitter.com/abhinandan_v0/',
    hoverColor: 'hover:after:border-blue-80/60',
  },
  {
    name: 'Stay ahead with <mark class="text-yellow-70">RSS</mark>',
    description: 'Subscribe for the latest news',
    icon: rssIcon,
    background: '/images/pages/blog/bg-yellow.svg',
    className:
      'after:bg-[radial-gradient(circle,rgba(240,240,117,0.6)_0%,rgba(12,13,13,0.5)_110%)]',
    url: '/blog/rss.xml',
    hoverColor: 'hover:after:border-yellow-70/60',
  },
  {
    name: 'Unique on <mark class="text-pink-90">YouTube</mark>',
    description: 'Explore our video tutorials',
    icon: youtubeIcon,
    background: '/images/pages/blog/bg-pink.svg',
    className:
      'after:bg-[radial-gradient(circle,rgba(255,204,229,0.6)_0%,rgba(12,13,13,0.5)_110%)]',
    url: 'https://youtube.com/@typescriptmastery001?si=ukL97T2mAtuylBIV',
    hoverColor: 'hover:after:border-pink-90/60',
  },
];

const Communities = () => (
  <section className="mb-40 xl:mb-[88px] lg:mb-20 md:my-12">
    <Container className="flex flex-col items-center" size="1344">
      <h2 className="font-title text-4xl font-medium leading-none tracking-tighter xl:text-[32px] lg:text-[28px] md:text-center md:text-2xl">
        Connect with Unique’s communities
      </h2>
      <ul className="mt-14 grid w-full grid-cols-3 gap-x-10 gap-y-4 xl:mt-10 xl:gap-x-6 lg:mt-9 md:mt-7 md:grid-cols-1">
        {items.map(({ name, description, icon, background, className, url, hoverColor }, index) => {
          const isExternal = url.startsWith('http');
          return (
            <li key={index}>
              <a
                className={clsx(
                  'relative flex w-full rounded-md after:absolute after:-inset-px after:rounded-md after:border after:border-transparent after:p-px after:transition-colors after:duration-200',
                  hoverColor,
                  className
                )}
                href={url}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
              >
                <div
                  className={clsx(
                    'relative z-10 flex h-full w-full items-center justify-between overflow-hidden rounded-md bg-black-pure px-7 py-5 xl:flex-col xl:items-start xl:justify-normal xl:p-5 lg:p-4 md:flex-row md:items-center md:justify-between md:py-5'
                  )}
                >
                  <img
                    className="absolute right-0 -z-10 h-full w-auto object-cover"
                    src={background}
                    alt=""
                    width={457}
                    height={92}
                    aria-hidden
                  />
                  <div className="xl:order-1 xl:mt-2 md:order-none">
                    <h3
                      className="font-title text-2xl font-medium leading-none tracking-tighter xl:text-xl lg:text-lg [&_mark]:bg-transparent"
                      dangerouslySetInnerHTML={{ __html: name }}
                    />
                    <p className="mt-2.5 text-sm leading-none tracking-[-0.02em] text-gray-new-70 xl:leading-tight">
                      {description}
                    </p>
                  </div>
                  <img
                    className="h-14 w-14 xl:h-12 xl:w-12 lg:h-11 lg:w-11"
                    src={icon}
                    width={56}
                    height={56}
                    alt=""
                    loading="lazy"
                  />
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </Container>
  </section>
);

export default Communities;
