import { MarkRoots } from './interfaces';
import { Node } from 'gatsby';

const markRoots: MarkRoots = (getNodes, createNodeField) => {
  const nodes: Node[] = getNodes();

  nodes
    .filter(({ internal: { type } }) => 'SiteNavigation' === type)
    .forEach(node => {
      if (!node.parent || node.children.length) {
        createNodeField({
          node,
          name: 'isRoot',
          value: true,
        });
      }
    });
};

export default markRoots;
