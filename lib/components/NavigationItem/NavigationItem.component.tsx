import * as React from 'react';
import NavigationItemComponent from './NavigationItem.interfaces';
import { NavigationLink } from '../NavigationLink';
import { NAVIGATION_LIST_ITEM_CLASSNAME } from '../../constants/classNames';

const NavigationItem: NavigationItemComponent = ({ path, title, isToPage, children }) => {
  return (
    <li className={NAVIGATION_LIST_ITEM_CLASSNAME}>
      <NavigationLink {...{ to: path, isToPage, isTarget: !!children }}>{title}</NavigationLink>
      {children}
    </li>
  );
};

export default NavigationItem;
