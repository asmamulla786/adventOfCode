import { puzzle } from "./input.js";
import { add, multiply } from "../commonFuns.js";

const performOperation = (puzzle, index, operation) => {
  const value1 = puzzle[puzzle[index + 1]];
  const value2 = puzzle[puzzle[index + 2]];
  const resultLoc = puzzle[index + 3];
  puzzle[resultLoc] = operation(value1, value2);
  return index + 4;
};

const nextOpcode = (currentOpcode, index, puzzle) => {
  const operation = {
    1: add,
    2: multiply,
  };

  return performOperation(puzzle, index, operation[currentOpcode]);
};

const solvePuzzle = (puzzle) => {
  let index = 0;
  let currentOpcode = puzzle[index];
  while (currentOpcode !== 99) {
    index = nextOpcode(currentOpcode, index, puzzle);
    currentOpcode = puzzle[index];
  }

  return puzzle;
};

// const puzzle = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50];
//1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50
//0, 1,  2, 3, 4, 5,  6, 7,  8,  9, 10 ,11
console.log(solvePuzzle(puzzle));
