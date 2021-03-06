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
  Loader?: React.ComponentType;
}

interface NavigationState {
  navigation: CurrentNavigation;
}

declare module 'gatsby-dynamical-navigation' {
  export const Navigation: React.ComponentClass<NavigationProps, NavigationState>;
  export function loadNavigation(callback: (navigation: NavigationNode[]) => void): void;
}
