import { LinkObject } from '../interfaces';
import { NodeInput, Node } from 'gatsby';

export type GetPageAttrs = (
  path: string,
) => Partial<{
  title: string;
  order: number;
}>;

type PathConverter = (path: string) => string;

export type ReadFile = PathConverter;
export type GetNormalPath = PathConverter;
export type GetPathWithoutExtension = PathConverter;

export type GetLinks = (tree: directoryTree.DirectoryTree, links?: LinkObject[]) => LinkObject[];
export type SortLinks = (links: LinkObject[]) => LinkObject[];

export type CreateNodes = (
  sortedLinks: LinkObject[],
  getNode: Function,
  createContentDigest: (input: LinkObject) => string,
  createNode: (node: NodeInput) => void,
  createParentChildLink,
) => void;

type CreateNodeField = (args: { node: Node; name?: string; value: boolean }) => void;

export type MarkRoots = (getNodes: Function, createNodeField: CreateNodeField) => void;