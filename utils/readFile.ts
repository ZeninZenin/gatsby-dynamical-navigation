import fs from 'fs';
import { ReadFile } from './interfaces';

const readFile: ReadFile = path => {
  let result: string;

  try {
    result = fs.readFileSync(path, 'utf8');
  } catch (e) {
    console.log(e);
    result = '';
  }

  return result;
};

export default readFile;
