import PropTypes from 'prop-types';

import LINKS from 'constants/links';

import Button from '../button';

const DEFAULT_DATA = {
  title: 'Try it on Neon!',
  description:
    'Unique is Serverless Postgres built for the cloud. Explore Postgres features and functions in our user-friendly SQL editor. Sign up for a free account to get started.',
  buttonText: 'Get Started',
  buttonUrl: LINKS.signup,
};

const DocCta = ({
  title = DEFAULT_DATA.title,
  description = DEFAULT_DATA.description,
  buttonText = DEFAULT_DATA.buttonText,
  buttonUrl = DEFAULT_DATA.buttonUrl,
}) => (
  <figure className="doc-cta not-prose my-5 flex items-end gap-x-16 rounded-[10px] border border-gray-new-90 bg-[linear-gradient(to_right,#FAFAFA_0%,rgba(250,250,250,0)100%)] px-7 py-6 dark:border-gray-new-20 dark:bg-[linear-gradient(to_right,#18191B_28.86%,#131415_74.18%)] md:flex-col md:items-start sm:p-6">
    <div>
      <h2 className="!my-0 font-title text-2xl font-medium leading-dense">{title}</h2>
      <p className="mt-2 text-sm font-light text-gray-new-20 dark:text-gray-new-80">
        {description}
      </p>
    </div>
    <Button className="px-6 py-3 font-semibold leading-none md:mt-4" to={buttonUrl} theme="primary">
      {buttonText}
    </Button>
  </figure>
);

DocCta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.node,
  buttonText: PropTypes.string,
  buttonUrl: PropTypes.string,
};

export default DocCta;
