export const pixelToRem = (pixel: number) => {
  return pixel / 16 + "rem";
};

export const alphabetGenerator = () => {
  const alphabet = [];
  for (let i = 65; i <= 90; i++) {
    alphabet.push(String.fromCharCode(i));
  }
  return alphabet;
};
