import { GetPathWithoutExtension } from './interfaces';

const separator = '.';

const getPathWithoutExtension: GetPathWithoutExtension = path =>
  path
    .split(separator)
    .slice(0, -1)
    .join(separator);

export default getPathWithoutExtension;
