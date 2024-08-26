import clsx from 'clsx';
import Image from 'next/image';
import PropTypes from 'prop-types';

import logo from 'images/logo-tr.png';

const Logo = ({ className = null, isDarkTheme, width, height, priority = undefined }) =>
  isDarkTheme ? (
    <Image
      className={clsx(className)}
      src={logo}
      alt=""
      width={width}
      height={height}
      priority={priority}
      aria-hidden
    />
  ) : (
    <>
      <Image
        className={clsx('dark:hidden', className)}
        src={logo}
        alt=""
        width={width}
        height={height}
        priority={priority}
        aria-hidden
      />
      <Image
        className={clsx('hidden dark:block', className)}
        src={logo}
        alt=""
        width={width}
        height={height}
        priority={priority}
        aria-hidden
      />
    </>
  );

Logo.propTypes = {
  className: PropTypes.string,
  isDarkTheme: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  priority: PropTypes.bool,
};

export default Logo;
