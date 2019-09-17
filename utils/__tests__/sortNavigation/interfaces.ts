import { NavigationNode } from "../../../interfaces";

test.skip('skip', () => {});

export type GetOutputs = (arrayLenght: number) => NavigationNode[];
export type GetInputs = (navigation: NavigationNode[]) => NavigationNode[];
