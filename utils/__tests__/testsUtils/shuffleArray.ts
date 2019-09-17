const shuffleArray = <T>(array: T[]) => {
  let processingArray = Array.from(array); 
  let result: T[] = [];

  while (0 !== processingArray.length) {
    const randomIndex = Math.floor(Math.random() * processingArray.length);
    const [nextItem] = processingArray.splice(randomIndex,1);

    result.push(nextItem);
  }

  return result;
}

export default shuffleArray;
