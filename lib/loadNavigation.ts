import { CurrentNavigation, LoadNavigation } from '../interfaces';

let currentNavigation: CurrentNavigation = null;

const loadNavigation: LoadNavigation = (callback, isNavNotLoaded = true) => {
  if (isNavNotLoaded && typeof window !== 'undefined') {
    window
      .fetch('/site-navigation.json')
      .then(data => data.json())
      .then(navigation => {
        currentNavigation = navigation;
        callback();
      });
  }

  return currentNavigation;
};

export default loadNavigation;
