import { GetPageAttrs } from './interfaces';
import matter = require('gray-matter');
import { Frontmatter } from '../interfaces';
import readFile from './readFile';

const getPageAttrs: GetPageAttrs = path => {
  const content = readFile(path);
  const { data }: { data: Frontmatter } = matter(content);

  if (data) {
    const { title: pageTitle, navTitle, order, path: pagePath } = data;
    const title = navTitle || pageTitle;

    let correctPagePath: string;

    if (pagePath.slice(-1) !== '/') {
      correctPagePath = `${pagePath}/`;
    }

    return title ? { title, order, path: correctPagePath } : undefined;
  }
};

export default getPageAttrs;
