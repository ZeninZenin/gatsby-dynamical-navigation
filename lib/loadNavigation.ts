import { CurrentNavigation, LoadNavigation, RequestPromise } from '../interfaces';

let currentNavigation: CurrentNavigation = null;
let requestPromise: RequestPromise = null;

const loadNavigation: LoadNavigation = callback => {
  if (currentNavigation) {
    callback(currentNavigation);
    return;
  }

  if (requestPromise) {
    requestPromise = requestPromise.then(navigation => {
      callback(navigation);
      return navigation;
    });

    return;
  }

  if (typeof window !== 'undefined') {
    requestPromise = window
      .fetch('/site-navigation.json')
      .then(data => data.json())
      .then(navigation => {
        currentNavigation = navigation;
        callback(navigation);

        return navigation;
      });
  }
};

export default loadNavigation;
