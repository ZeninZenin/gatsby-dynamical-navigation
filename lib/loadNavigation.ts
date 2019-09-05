import { CurrentNavigation, LoadNavigation } from '../interfaces';

let currentNavigation: CurrentNavigation = null;

const loadNavigation: LoadNavigation = callback => {
  if (!currentNavigation && typeof window !== 'undefined') {
    window
      .fetch('/site-navigation.json')
      .then(data => data.json())
      .then(navigation => {
        currentNavigation = navigation;
        callback(navigation);
      });

    return;
  }

  callback(currentNavigation);
};

export default loadNavigation;
