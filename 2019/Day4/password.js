const areDoubleDigitsThere = (password) => {
  let index = 0;
  while (index < password.length - 1) {
    if (password[index] === password[index + 1]) {
      return true;
    }
    index += 1;
  }

  return true;
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
  return areDoubleDigitsThere(digits) && areDigitsIncOrder(digits);
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
