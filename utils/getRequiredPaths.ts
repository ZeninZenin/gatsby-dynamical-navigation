import { GetRequiredPaths } from './interfaces';

const getRequiredPaths: GetRequiredPaths = (relativeLocation, root) =>
  relativeLocation
    .split('/')
    .slice(0, -2)
    .reduce<string[]>((result, item) => [...result, `${result.slice(-1)[0]}${item}/`], [root]);

export default getRequiredPaths;
