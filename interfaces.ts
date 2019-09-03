export interface NavigationLink {
  path: string;
  title: string;
}

export interface ChildSiteNavigation extends NavigationLink {
  order?: number;
  fields: {
    isRoot: boolean;
  } | null;
}

export interface NavigationNode extends NavigationLink {
  childrenSiteNavigation: ChildSiteNavigation[];
}

export interface NavigationDataItem {
  node: NavigationNode;
}

export type CurrentNavigation = NavigationNode[] | null;
export type LoadNavigation = (callback: () => void, isNavNotLoaded?: boolean) => CurrentNavigation;
