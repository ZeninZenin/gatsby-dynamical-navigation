import { GetOutputs } from './interfaces';
import getPaths from '../testsUtils/getPaths';
import { LinkObject } from '../../../interfaces';

const getOutputs: GetOutputs = arrayLenght => {
  const paths = getPaths(arrayLenght);

  return paths.map<LinkObject>(path => ({ path, title: '' }));
}

export default getOutputs;
