import React from 'react';

import prefixable from './../../decorators/prefixable';

import { Grid, Column, MediaObject, IconSVG } from 'react-lds';

export const RecordHome = ({ prefix, icon, title, recordType, headerButtons, detailItems = [] }) => {
  const iconRendered = <IconSVG sprite={icon.sprite} icon={icon.icon} />;
  const detailItemsRendered = detailItems.map((item, index) =>
    <li className={prefix(['page-header__detail-block'])} key={`${item.title}-${index}`}>
      <p className={prefix(['text-heading--label-normal', 'truncate', 'm-bottom--xx-small'])}>{item.title}</p>
      <p className={prefix(['text-body--regular', 'truncate'])}>{item.content}</p>
    </li>
  );

  return (
    <div className={prefix(['page-header'])} role="banner">
      <Grid>
        <Column className={prefix(['has-flexi-truncate'])}>
          <MediaObject figureLeft={iconRendered} className={prefix(['grow', 'no-space', 'media--center'])}>
            <p className={prefix(['text-heading--label'])}>
              {recordType}
            </p>
            <h1 className={prefix(['page-header__title', 'm-right--small', 'truncate', 'align-middle'])} title={title}>
              {title}
            </h1>
          </MediaObject>
        </Column>
        <Column className={prefix(['no-flex', 'grid', 'align-bottom'])}>
          {headerButtons}
        </Column>
      </Grid>
      <ul className={prefix(['grid', 'page-header__detail-row'])}>
        {detailItemsRendered}
      </ul>
    </div>
  );
};

RecordHome.propTypes = {
  /**
   * prefix HOC function
   */
  prefix: React.PropTypes.func.isRequired,
  /**
   * Sprite and Icon
   */
  icon: React.PropTypes.shape({
    sprite: React.PropTypes.string.isRequired,
    icon: React.PropTypes.string.isRequired,
  }).isRequired,
  /**
   * The title
   */
  title: React.PropTypes.string.isRequired,
  /**
   * Record Type Header above the title
   */
  recordType: React.PropTypes.string.isRequired,
  /**
   * Buttons that are rendered on the right side of the header
   */
  headerButtons: React.PropTypes.node,
  /**
   * entries for the detail row, can be just strings or more complex nodes like
   * links or text with icons etc...
   */
  detailItems: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.node.isRequired,
    content: React.PropTypes.node.isRequired,
  })),
};

export default prefixable(RecordHome);