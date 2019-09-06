import * as React from 'react';
import { NavigationProps, NavigationState } from './Navigation.interfaces';
import loadNavigation from '../../loadNavigation';
import { NavigationNode } from '../../../interfaces';
import Nav from './components/index';

class Navigation extends React.Component<NavigationProps, NavigationState> {
  constructor(props) {
    super(props);

    this.state = {
      navigation: null,
    };

    this.setNavigation = this.setNavigation.bind(this);
  }

  setNavigation(navigation: NavigationNode[]): void {
    this.setState({ navigation });
  }

  componentWillMount(): void {
    loadNavigation(navigation => this.setNavigation(navigation));
  }

  render(): JSX.Element {
    const {
      state: { navigation },
      props: { root, target, loader },
    } = this;

    if (!navigation) {
      return loader ? <>{loader}</> : <span>Navigation is not loaded</span>;
    }

    return <Nav {...{ root, target, navigation }} />;
  }
}

export default Navigation;
