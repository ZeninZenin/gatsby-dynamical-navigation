import sortLinks from '../../sortLinks';
import getOutputs from './outputs';
import shuffleArray from '../testsUtils/shuffleArray';

const arrayLenght = 1000;
const outputs = getOutputs(arrayLenght);
const inputs = shuffleArray(outputs)

test('sort navigation items by deep', () => {
  expect(sortLinks(inputs)).toStrictEqual(outputs);
});
