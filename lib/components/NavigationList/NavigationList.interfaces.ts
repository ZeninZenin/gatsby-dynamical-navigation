import { ChildSiteNavigation } from '../../../interfaces';

interface NavigationListProps {
  rootPath: string;
  childrenSiteNavigation: ChildSiteNavigation[];
}

type NavigationListComponent = React.FC<NavigationListProps>;

export default NavigationListComponent;
