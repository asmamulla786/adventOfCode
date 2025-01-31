import { add } from "../commonFuns.js";
//--- Day 1: The Tyranny of the Rocket Equation ---

export const masses = Deno.readTextFileSync("./input.txt").split("\n");

export const fuelNeed = (moduleMass) => {
  return Math.floor(moduleMass / 3) - 2;
};

const totalFuel = (masses) => {
  return masses.map(fuelNeed).reduce(add, 0);
};

console.log(totalFuel(masses));
