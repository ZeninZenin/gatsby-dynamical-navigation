const getPaths = (arrayLenght: number) => {
  const result: string[] = [];
  let current = '/';
  
  for (let i = 0; i < arrayLenght; i++) {
    result.push(current);

    current = `${current}${i}/`
  }

  return result;
}

export default getPaths;
