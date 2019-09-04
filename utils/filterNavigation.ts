import { FilterNavigation } from './interfaces';

const filterNavigation: FilterNavigation = (navigation, requiredNodePaths) =>
  navigation.filter(({ path }) => requiredNodePaths.some(requiredPath => requiredPath === path));

export default filterNavigation;
