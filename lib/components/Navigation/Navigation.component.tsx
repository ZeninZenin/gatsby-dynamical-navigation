import * as React from 'react';
import NavigationComponent from './Navigation.interfaces';
import loadNavigation from '../../loadNavigation';
import getRequiredPaths from '../../../utils/getRequiredPaths';
import filterNavigation from '../../../utils/filterNavigation';
import sortNavigation from '../../../utils/sortNavigation';
import { NavigationList } from '../NavigationList/intex';
import { NavigationLink } from '../NavigationLink';
import { NAVIGATION_CLASSNAME } from '../../constants/classNames';

const Navigation: NavigationComponent = ({ root, target, loader }) => {
  const [isNavNotLoaded, setIsNavNotLoaded] = React.useState(true);
  const navigation = loadNavigation(() => setIsNavNotLoaded(false), isNavNotLoaded);

  if (!navigation) {
    return loader ? <>{loader}</> : <span>Navigation is not loaded</span>;
  }

  const relativeLocation = target.replace(root, '');
  const requiredNodePaths = getRequiredPaths(relativeLocation, root);
  const requiredNavigation = filterNavigation(navigation, requiredNodePaths);
  const sortedNavigation = sortNavigation(requiredNavigation);

  const [component] = sortedNavigation.reduce<[JSX.Element, string] | [null]>(
    ([component, rootPath], { path, title: rootTitle, childrenSiteNavigation }, i) => {
      const resultComponent = (
        <>
          {i >= sortedNavigation.length - 1 && (
            <NavigationLink to={path} isHead={true}>
              {rootTitle}
            </NavigationLink>
          )}
          <NavigationList
            {...{
              key: `nav-list${i}`,
              rootPath,
              childrenSiteNavigation,
              children: component,
            }}
          ></NavigationList>
        </>
      );

      return [resultComponent, path];
    },
    [null],
  );

  return <nav className={NAVIGATION_CLASSNAME}>{component}</nav>;
};

export default Navigation;
