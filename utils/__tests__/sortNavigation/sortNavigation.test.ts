import sortNavigation from '../../sortNavigation';
import getOutputs from './outputs';
import shuffleArray from '../testsUtils/shuffleArray';

const arrayLenght = 1000;
const outputs = getOutputs(arrayLenght);
const inputs = shuffleArray(outputs)

test('sort navigation items by deep', () => {
  expect(sortNavigation(inputs)).toStrictEqual(outputs);
});
