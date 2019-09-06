import * as React from 'react';
import NavComponent from './Nav.interfaces';
import { NAVIGATION_CLASSNAME } from '../../../../lib/constants/classNames';
import getRequiredPaths from '../../../../utils/getRequiredPaths';
import filterNavigation from '../../../../utils/filterNavigation';
import sortNavigation from '../../../../utils/sortNavigation';
import { NavigationLink } from '../../../../lib/components/NavigationLink';
import { NavigationList } from '../../../../lib/components/NavigationList/intex';

const Nav: NavComponent = ({ navigation, root, target }) => {
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

export default Nav;
