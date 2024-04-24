const lowerCasedAlphabets = [..."abcdefghijklmnopqrstuvwxyz"];
const upperCasedAlphabets = lowerCasedAlphabets.map((alphabet) =>
  alphabet.toUpperCase()
);
const numbers = [..."1234567890"].map((num) => +num);
const symbols = [..."!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];

const getRandomNumber = (max) => Math.floor(Math.random() * max);


const getRandomPassword = () => {
  const randompassword = [];
  const params = [...lowerCasedAlphabets, ...upperCasedAlphabets, ...numbers, ...symbols];
  while (randompassword.length < 40) {
    const randomInt = Math.floor(Math.random() * params.length);
    randompassword.push(params[randomInt]);
  }
  return randompassword.join("");
};

export const generatePassword = (options) => {
  if (options) {
    const {
      length,
      includeLowerCase,
      includeNumber,
      includeSymbols,
      includeUpperCase
    } = options;
    const generatedPasssword = [];

    for (let i = 0; i < 40; i++) {
      includeUpperCase &&
        generatedPasssword.push(
          upperCasedAlphabets[getRandomNumber(upperCasedAlphabets.length)]
        );
      includeLowerCase &&
        generatedPasssword.push(
          lowerCasedAlphabets[getRandomNumber(lowerCasedAlphabets.length)]
        );
      includeNumber &&
        generatedPasssword.push(numbers[getRandomNumber(numbers.length)]);
      includeSymbols &&
        generatedPasssword.push(symbols[getRandomNumber(symbols.length)]);
    }
    /**
     * Returns the randomly generated password if generated password length is 0.
     */
    if (!generatedPasssword.length)
      return length ? generatePassword().slice(0, length) : generatePassword();
    return length
      ? generatedPasssword.slice(0, length).join("")
      : generatedPasssword.slice(0, 16).join("");
  }

  return getRandomPassword();
};
