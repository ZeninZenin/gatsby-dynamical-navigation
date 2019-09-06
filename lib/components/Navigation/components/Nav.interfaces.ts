import { NavigationNode } from '../../../../interfaces';

export interface NavProps {
  navigation: NavigationNode[];
  root: string;
  target: string;
}

type NavComponent = React.FC<NavProps>;

export default NavComponent;
