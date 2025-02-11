const countDigits = (countObject, digit) => {
  if (!(digit in countObject)) {
    countObject[digit] = 0;
  }
  countObject[digit] += 1;
  return countObject;
};

const isExactlyDigitAppearsTwise = (digitsCount) => {
  return Object.values(digitsCount).some((count) => count === 2);
};

const areDoubleDigitsThere = (password) => {
  const digitsCount = password.reduce(countDigits, {});
  return isExactlyDigitAppearsTwise(digitsCount);
};

const areDigitsIncOrder = (password) => {
  const digits = password.map(Number);
  let index = 0;
  while (index < digits.length - 1) {
    if (digits[index] > digits[index + 1]) return false;
    index += 1;
  }
  return true;
};

const isMeetsCriteria = (password) => {
  const digits = Array.from(password + "");
  return areDigitsIncOrder(digits) && areDoubleDigitsThere(digits);
};

const noOfPasswords = (start, end) => {
  let count = 0;

  for (let password = start; password < end; password++) {
    if (isMeetsCriteria(password)) {
      count += 1;
    }
  }

  return count;
};
console.log(noOfPasswords(248345, 746315));

console.log(isMeetsCriteria("111122")); // Should be true
console.log(isMeetsCriteria("111111")); // Should be false
console.log(isMeetsCriteria("112233")); // Should be true
console.log(isMeetsCriteria("123444")); // Should be false
