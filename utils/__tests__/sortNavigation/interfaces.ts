import { NavigationNode } from '../../../interfaces';

export type GetOutputs = (arrayLenght: number) => NavigationNode[];
export type GetInputs = (navigation: NavigationNode[]) => NavigationNode[];
