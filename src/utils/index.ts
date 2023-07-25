export const shuffleArrays = (array1: any[], array2: any[]) => {
  const shuffledArray1 = shuffle(array1);
  const shuffledArray2 = shuffle(array2);
  const shuffledArrays = shuffle(shuffledArray1.concat(shuffledArray2));
  return shuffledArrays;
}

export const shuffle = (array: any[]) => {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export const ifConfirmKey = (fn: () => void) => (ev: React.KeyboardEvent) => {
  if(ev.code!=="Enter" && ev.code!=="Space") return;
  fn();
}