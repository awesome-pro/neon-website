import clsx from 'clsx';
import PropTypes from 'prop-types';

import { Vortex } from 'components/pages/home/hero/vortex';
import Button from 'components/shared/button';
import Container from 'components/shared/container';
import LINKS from 'constants/links';

const Cta = ({
  title = 'Features of tomorrow.<br /> Available today.',
  className = 'pb-[307px] pt-[445px] xl:py-[230px] lg:pb-[156px] lg:pt-[179px] sm:pb-[110px] sm:pt-[116px]',
  description = null,
  buttonText = 'Get Started',
  buttonUrl = LINKS.signup,
  buttonClassName = 'mt-[38px] h-11 px-7 min-w-[144px] text-[15px] xl:mt-8 lg:mt-7 sm:mt-5 sm:h-10',
}) => {
  const isExternal = buttonUrl.startsWith('http');

  return (
    <section className={clsx('get-started relative overflow-hidden', className)}>
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex h-full w-full flex-col items-center justify-center py-4"
      >
        <Container
          className="pointer-events-none flex flex-col items-center justify-center"
          size="1100"
        >
          <h2
            className={clsx(
              'relative text-center font-title text-[68px] font-medium leading-[0.9] -tracking-[0.03em] text-white',
              'xl:text-[56px] xl:tracking-extra-tight lg:text-[44px] sm:text-[32px]'
            )}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {description && (
            <p className="mt-3.5 text-center text-lg tracking-extra-tight text-gray-new-70 xl:mt-3 xl:max-w-[414px] lg:max-w-[338px] lg:text-base md:mt-2 md:max-w-[289px] md:text-sm">
              {description}
            </p>
          )}
          <Button
            className={clsx(
              'pointer-events-auto relative !font-semibold tracking-tighter',
              buttonClassName
            )}
            theme="primary"
            to={buttonUrl}
            target={isExternal ? '_blank' : null}
            rel={isExternal ? 'noopener noreferrer' : null}
            tag_name="Footer"
          >
            {buttonText}
          </Button>
        </Container>
      </Vortex>
    </section>
  );
};

Cta.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  buttonText: PropTypes.string,
  buttonUrl: PropTypes.string,
  description: PropTypes.string,
  buttonClassName: PropTypes.string,
};

export default Cta;
