import { ReactNode } from 'react';

interface ChildSiteNavigation extends NavigationLink {
  order?: number;
  fields: {
    isRoot: boolean;
  } | null;
}

interface NavigationLink {
  path: string;
  title: string;
}

interface NavigationNode extends NavigationLink {
  childrenSiteNavigation: ChildSiteNavigation[];
}

type CurrentNavigation = NavigationNode[] | null;

interface NavigationProps {
  root: string;
  target: string;
  loader?: ReactNode;
}

declare module 'gatsby-dynamical-navigation' {
  export const Navigation: React.FC<NavigationProps>;
  export function loadNavigation(callback: (navigation: NavigationNode[]) => void): void;
}
