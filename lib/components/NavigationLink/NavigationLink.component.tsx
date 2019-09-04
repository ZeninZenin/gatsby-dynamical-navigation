import * as React from 'react';
import GatsbyLink from 'gatsby-link';
import NavigationLinkComponent from './NavigationLink.interfaces';
import {
  NAVIGATION_LINK_CLASSNAME,
  TARGET_CLASSNAME,
  NAVIGATION_LINK_TO_PAGE_CLASSNAME,
  ACTIVE_CLASSNAME,
  HEAD_NAVIGATION_LINK_CLASSNAME,
} from '../../constants/classNames';
import getClassName from '../../../utils/getClassName';

const NavigationLink: NavigationLinkComponent = ({ to, isTarget, isToPage, isHead, children }) => {
  const className = getClassName(NAVIGATION_LINK_CLASSNAME, [
    { flag: isTarget, className: TARGET_CLASSNAME },
    { flag: isToPage, className: NAVIGATION_LINK_TO_PAGE_CLASSNAME },
    { flag: isHead, className: HEAD_NAVIGATION_LINK_CLASSNAME },
  ]);

  return (
    <GatsbyLink
      {...{
        to,
        className,
        activeClassName: ACTIVE_CLASSNAME,
      }}
    >
      {children}
    </GatsbyLink>
  );
};
export default NavigationLink;
