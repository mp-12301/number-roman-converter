
/**
 * Utils
 */

const CONSTANTS = {
  ROMAN_LETTERS: [
    ["C", "D", "M"], // Hundreds
    ["X", "L", "C"], // Tens
    ["I", "V", "X"], // Single
  ],
};

/**
 * Converts a single roman letters to a number.
 * 
 * @param {*} roman The single roman letter
 * @param {*} order The order of the number (hundreds, tens, single)
 */
export function convertSingleRomanLetterToNumber(roman, order) {
  const letters = CONSTANTS.ROMAN_LETTERS[order];
  const count = roman.split(letters[0]).length - 1;
  switch (count) {
    case 0 :
      return (roman.length === 0) ? "0" : "5";
    case 1 : {
      if (roman.length === 1) {
        return "1";
      }
      switch (roman[1]) {
        case letters[0] :
          return "6";
        case letters[1] :
          return "4";
        case letters[2] :
          return "9";
        default :
          return "";
      }
    }
    case 2 :
      return (roman.length === 2) ? "2" : "7";
    case 3 :
      return (roman.length === 3) ? "3" : "8";
    default :
      return "";
  }
}


/**
 * Converts a number to roman letters.
 * 
 * @param {Number} num Number to convert to Roman Letters.
 */
export function convertToRoman(num) {
  if (num < 0 || num > 3999) {
    return "";
  }

  const factor = 1000;
  const nM = Array(Math.floor(num / factor) + 1).join("M");

  const rest = CONSTANTS.ROMAN_LETTERS.map((value, order) => {
    const q = factor / (10 ** (order + 1));
    const n = Math.floor(((num % factor) % (q * 10)) / q);

    if (n !== 4 && n !== 9) {
      return ((n > 4) ? value[1] : "") + Array((n % 5) + 1).join(value[0]);
    }

    return value[0] + value[(n > 4) ? 2 : 1];
  }).join("");

  return nM + rest;
}

/**
 * Converts roman letters to the respective number.
 * 
 * @param {String} roman Roman letters in a string to convert to a number.
 */
export function convertToNumber(roman) {
  const re = new RegExp("^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$");
  const matches = re.exec(roman);

  if (matches && matches[0]) {
    let output = matches[1].length;
    for (let i = 0; i < 3; i += 1) {
      output += convertSingleRomanLetterToNumber(matches[i + 2], i);
    }
    return Number(output);
  }

  return "";
}
