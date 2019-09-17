import { GetOutputs } from "./interfaces";
import { NavigationNode } from "../../../interfaces";

test.skip('skip', () => {});

const getOutputs: GetOutputs = (arrayLenght) => {
  const result: NavigationNode[] = [];
  let current = '/';
  
  for (let i = 0; i < arrayLenght; i++) {
    result.push({ path: current, title: '', childrenSiteNavigation: [] });

    current = `${current}${i}/`
  }

  result.reverse();
  return result;
}

export default getOutputs;
