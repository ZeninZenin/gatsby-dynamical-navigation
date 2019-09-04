import { ReactNode } from 'react';

interface NavigationProps {
  root: string;
  target: string;
  loader?: ReactNode;
}

type NavigationComponent = React.FC<NavigationProps>;

export default NavigationComponent;
