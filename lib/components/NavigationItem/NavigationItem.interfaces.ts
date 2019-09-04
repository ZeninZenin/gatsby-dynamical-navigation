import { NavigationLink } from '../../../interfaces';

interface NavigationItemProps extends NavigationLink {
  isToPage?: boolean;
}

type NavigationItemComponent = React.FC<NavigationItemProps>;

export default NavigationItemComponent;
