import { SourceNodesArgs, PluginOptions, CreatePagesArgs, PluginCallback, Node } from 'gatsby';

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

export interface LinkObject extends NavigationLink {
  order?: number;
}

export type Frontmatter = Partial<{
  title: string;
  navTitle: string;
  order: number;
}>;

export type SourceNodes = (args: SourceNodesArgs, options?: PluginOptions) => void;
export type CreatePages = (
  args: CreatePagesArgs & { traceId: 'initial-createPages' },
  options?: PluginOptions,
  callback?: PluginCallback,
) => void;

export interface SiteNavigationNode extends Node, NavigationNode {}

export interface AllSiteNavigationData {
  allSiteNavigation: {
    edges: {
      node: SiteNavigationNode;
    }[];
  };
}
