import fs = require('fs');
import { SourceNodes, CreatePages, AllSiteNavigationData } from './interfaces';
import getLinks from './utils/getLinks';
import sortLinks from './utils/sortLinks';
import getTree from './utils/getTree';
import createNodes from './utils/createNodes';
import markRoots from './utils/markRoots';

export const sourceNodes: SourceNodes = ({ actions, createContentDigest, getNode, getNodes }) => {
  const { createNode, createParentChildLink, createNodeField } = actions;

  const tree = getTree();
  const links = getLinks(tree);
  const sortedLinks = sortLinks(links);

  createNodes(sortedLinks, getNode, createContentDigest, createNode, createParentChildLink);
  markRoots(getNodes, createNodeField);
};

export const createPages: CreatePages = async ({ graphql }) => {
  const { errors, data } = await graphql<AllSiteNavigationData>(`
    {
      allSiteNavigation(filter: { fields: { isRoot: { eq: true } } }) {
        edges {
          node {
            title
            path
            childrenSiteNavigation {
              title
              path
              order
              fields {
                isRoot
              }
            }
          }
        }
      }
    }
  `);

  if (errors) {
    errors.forEach((e: { toString: () => string }) => console.error(e.toString()));
    return errors;
  }

  const reducedData = data.allSiteNavigation.edges.map(({ node }) => node);

  fs.writeFileSync('static/site-navigation.json', JSON.stringify(reducedData));
};
