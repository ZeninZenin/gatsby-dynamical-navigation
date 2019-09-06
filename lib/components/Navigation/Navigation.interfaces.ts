import { CurrentNavigation } from '../../../interfaces';

export interface NavigationProps {
  root: string;
  target: string;
  Loader?: React.ComponentType;
}

export interface NavigationState {
  navigation: CurrentNavigation;
}
