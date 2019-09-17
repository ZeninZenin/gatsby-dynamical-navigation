import { GetOutputs } from './interfaces';
import { NavigationNode } from '../../../interfaces';
import getPaths from '../testsUtils/getPaths';

const getOutputs: GetOutputs = arrayLenght => {
  const paths = getPaths(arrayLenght);

  paths.reverse();

  return paths.map<NavigationNode>(path => ({ path, title: '', childrenSiteNavigation: [] }));
}

export default getOutputs;
