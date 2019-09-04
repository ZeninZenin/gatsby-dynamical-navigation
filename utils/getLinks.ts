import { GetLinks } from './interfaces';
import getPageAttrs from './getPageAttrs';
import getNormalPath from './getNormalPath';

const getLinks: GetLinks = (tree, links = []) => {
  const { path, type, children: treeChildren = [] } = tree;

  if (type === 'directory' && treeChildren) {
    treeChildren.forEach(child => {
      getLinks(child, links);
    });

    return links;
  }

  const pageAttrs = getPageAttrs(path);
  if (pageAttrs) {
    const { title, order } = pageAttrs;

    links.push({
      path: getNormalPath(path),
      title,
      order,
    });
  }
  return links;
};

export default getLinks;
