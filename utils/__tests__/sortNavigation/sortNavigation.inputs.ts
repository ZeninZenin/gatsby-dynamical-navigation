import { GetInputs } from "./interfaces";
import { NavigationNode } from "../../../interfaces";

test.skip('skip', () => {});

const getInputs: GetInputs = array => {
  let processingArray = Array.from(array); 
  let result: NavigationNode[] = [];

  while (0 !== processingArray.length) {
    const randomIndex = Math.floor(Math.random() * processingArray.length);
    const [nextItem] = processingArray.splice(randomIndex,1);

    result.push(nextItem);
  }

  return result;
}

export default getInputs;
