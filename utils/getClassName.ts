import { GetClassName } from './interfaces';
import { CLASSNAME_SEPARATOR } from '../lib/constants/classNames';

const getClassName: GetClassName = (baseClassName, classNames) => {
  const classNameArray = [baseClassName];

  classNames.forEach(({ flag, className }) => {
    if (flag) {
      classNameArray.push(className);
    }
  });

  return classNameArray.join(CLASSNAME_SEPARATOR);
};

export default getClassName;
