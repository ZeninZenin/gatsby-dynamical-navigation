interface NavigationLinkProps {
  to: string;
  isTarget?: boolean;
  isToPage?: boolean;
  isHead?: boolean;
}

type NavigationLinkComponent = React.FC<NavigationLinkProps>;

export default NavigationLinkComponent;
