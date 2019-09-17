import sortNavigation from '../../sortNavigation';
import getOutputs from './sortNavigation.outputs.';
import getInputs from './sortNavigation.inputs';

const arrayLenght = 1000;
const outputs = getOutputs(arrayLenght);
const inputs = getInputs(outputs)

test('sort navigation items by deep', () => {
  expect(sortNavigation(inputs)).toStrictEqual(outputs);
});
