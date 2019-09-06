import * as React from 'react';
import NavigationItem from '../NavigationItem';
import NavigationListComponent from './NavigationList.interfaces';
import { NAVIGATION_LIST_CLASSNAME } from '../../constants/classNames';

const NavigationList: NavigationListComponent = ({ childrenSiteNavigation, rootPath = '/', children }) => {
  return (
    <ul className={NAVIGATION_LIST_CLASSNAME}>
      {Array.from(childrenSiteNavigation)
        .sort(
          ({ order: order1 = Number.MAX_SAFE_INTEGER }, { order: order2 = Number.MAX_SAFE_INTEGER }) => order1 - order2,
        )
        .map(({ path, title, fields }) => (
          <NavigationItem key={`item${path}`} {...{ path, title, isToPage: !(fields && fields.isRoot) }}>
            {path === rootPath && children}
          </NavigationItem>
        ))}
    </ul>
  );
};

export default NavigationList;
