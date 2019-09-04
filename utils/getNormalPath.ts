import getPathWithoutExtension from './getPathWithoutExtension';
import { GetNormalPath } from './interfaces';

const getNormalPath: GetNormalPath = path =>
  `${getPathWithoutExtension(path)
    .replace(/\\/g, '/')
    .replace(/^src\/pages|\/index$/g, '')}/`;

export default getNormalPath;
