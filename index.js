const characters = `abcdefghijklmnopqrstuvwxyz`;
const numbers = `1234567890`;
const symbols = `!@#$%^&*()-_=+,<.>/?'";:~|`;
const capChar = characters.toUpperCase();

const symArr = symbols.split(``);
const numArr = numbers.split(``);
const charArr = characters.split(``);

const allArr = [...charArr, ...numArr, ...symArr, ...capChar];
const allArrReversed = allArr.toReversed();

// use this function to create an array of characters using the cyphers. one needs to be normal, the other one reversed
export const useCypher = (cypher, characters) => {
  const cypherArr = cypher.split(``);
  const charList = [...characters];

  for (let i = 0; i < cypherArr.length; i++) {
    if (charList.includes(cypherArr[i])) {
      const index = charList.indexOf(cypherArr[i]);
      charList.splice(index, 1);
    }
  }

  const cypherPlusChar = [...cypherArr, ...charList];

  // returns array of cypher and characters without duplicates if applicable
  return cypherPlusChar.filter(
    (value, index) => cypherPlusChar.indexOf(value) === index
  );
};

export const encryptPassword = (password, cypherList, reversedCypherList) => {
  const passwordArr = password.split(``);
  const scrambledPasswordArr = [];

  for (let i = 0; i < passwordArr.length; i++) {
    const index = cypherList.indexOf(passwordArr[i]);
    scrambledPasswordArr.push(reversedCypherList[index]);
  }

  return scrambledPasswordArr.join(``);
};

// just the encrypted password, but doing the reverse
export const decryptPassword = (encryptedPassword, cypherList, reversedCypherList) => {
  const passwordArr = encryptedPassword.split(``);
  const unscrambledPasswordArr = [];

  for (let i = 0; i < encryptedPassword.length; i++) {
    const index = reversedCypherList.indexOf(passwordArr[i]);
    unscrambledPasswordArr.push(cypherList[index]);
  }

  return unscrambledPasswordArr.join(``);
};
