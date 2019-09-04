import dirTree = require('directory-tree');

export default (): dirTree.DirectoryTree =>
  dirTree('src/pages', {
    extensions: /\.(md|mdx)$/,
  });
