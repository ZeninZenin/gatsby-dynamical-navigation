import { GetPageAttrs } from './interfaces';
import matter = require('gray-matter');
import { Frontmatter } from '../interfaces';
import readFile from './readFile';

const getPageAttrs: GetPageAttrs = path => {
  const content = readFile(path);
  const { data }: { data: Frontmatter } = matter(content);

  if (data) {
    const { title: pageTitle, navTitle, order } = data;
    const title = navTitle || pageTitle;

    return title ? { title, order } : undefined;
  }
};

export default getPageAttrs;
