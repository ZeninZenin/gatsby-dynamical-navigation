import { ReactNode } from 'react';
import { CurrentNavigation } from '../../../interfaces';

export interface NavigationProps {
  root: string;
  target: string;
  loader?: ReactNode;
}

export interface NavigationState {
  navigation: CurrentNavigation;
}
