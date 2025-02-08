import { puzzle } from "./input.js";
import { add, multiply } from "../commonFuns.js";

const performOperation = (code, index, operation) => {
  const value1 = code[code[index + 1]];
  const value2 = code[code[index + 2]];
  const resultLoc = code[index + 3];
  code[resultLoc] = operation(value1, value2);
  return index + 4;
};

const nextOpcode = (currentOpcode, index, code) => {
  const operation = {
    1: add,
    2: multiply,
  };

  return performOperation(code, index, operation[currentOpcode]);
};

const executeCode = (code) => {
  let index = 0;
  const intcode = [...code];
  let currentOpcode = intcode[index];
  while (currentOpcode !== 99) {
    index = nextOpcode(currentOpcode, index, intcode);
    currentOpcode = intcode[index];
  }

  return intcode;
};

const updateCode = (code, noun, verb) => {
  code[1] = noun;
  code[2] = verb;
  return code;
};

const solvePuzzle = (puzzle) => {
  let noun = 1;
  while (noun < 100) {
    let verb = 1;
    while (verb < 100) {
      let code = [...puzzle];
      updateCode(code, noun, verb);
      code = executeCode(code);
      if (code[0] === 19690720) {
        return code;
      }
      verb += 1;
    }
    noun += 1;
  }
};

console.log(solvePuzzle(puzzle)); // 19690720
