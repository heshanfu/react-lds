import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const MenuSubHeader = (props) => {
  const { children, className, divider, ...rest } = props;
  const sldsClasses = [
    'slds-dropdown__header',
    'slds-truncate',
    { 'slds-has-divider_top-space': divider },
    className,
  ];
  return (
    <li
      className={cx(sldsClasses)}
      title={children}
      role="separator"
      {...rest}
    >
      <span className="slds-text-title_caps">{children}</span>
    </li>
  );
};

MenuSubHeader.propTypes = {
  /**
   * The content of a menu item sub header, should be string
   */
  children: PropTypes.string.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * set to true if a divider should appear above this list item
   */
  divider: PropTypes.bool,
  /**
   * left icon that is only shown when selected is true
   */
};

MenuSubHeader.defaultProps = {
  className: null,
  divider: false,
};

export default MenuSubHeader;
