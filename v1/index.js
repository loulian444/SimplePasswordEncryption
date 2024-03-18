const characters = `abcdefghijklmnopqrstuvwxyz`;
const numbers = `1234567890`;
const symbols = `!@#$%^&*()-_=+,<.>/?'";:~|`;
const capChar = characters.toUpperCase();

const symArr = symbols.split(``);
const numArr = numbers.split(``);
const charArr = characters.split(``);

const allArr = [...charArr, ...numArr, ...symArr, ...capChar];

// cypher must be a number between 0 - 87
const cypher = 87;
const cypher2 = 1;
const cypher3 = 9;

const password = `password`;
const password2 = `?"|~`;
const password3 = "a";

const createNewPassword = (password, cypher) => {
  const newPasswordArr = [];

  for (let i = 0; i < password.length; i++) {
    if (allArr.includes(password[i])) {
      for (let f = 0; f < allArr.length; f++) {
        if (allArr[f] === password[i]) {
          if (f + cypher > allArr.length - 1) {
            newPasswordArr.push(allArr[f - allArr.length + cypher]);
          } else {
            newPasswordArr.push(allArr[f + cypher]);
          }
        }
      }
    }
  }

  console.log(newPasswordArr.join(``));
};

createNewPassword(password, cypher);
createNewPassword(password, cypher2);
createNewPassword(password, cypher3);
