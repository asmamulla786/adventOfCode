import { masses, fuelNeed } from "./part1.js";
import { add } from "../commonFuns.js";

const recursiveFuelNeed = (mass) => {
  let fuel = fuelNeed(mass);
  let totalFuel = 0;

  while (fuel > 0) {
    totalFuel = add(totalFuel, fuel);
    fuel = fuelNeed(fuel);
  }
  return totalFuel;
};

const totalFuel = (masses) => {
  return masses.map(recursiveFuelNeed).reduce(add, 0);
};

// const masses = [14, 1969, 100756]; //51,314
// const masses = [1969]; //51,314
console.log(totalFuel(masses));
