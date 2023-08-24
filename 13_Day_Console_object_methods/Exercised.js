//Exercises: Level 1

console.table(countries);
console.table(countriesObject);

console.group("Group 1");
console.log("Log 1");
console.log("Log 2");
console.groupEnd();

console.group("Group 2");
console.log("Log 3");
console.log("Log 4");
console.groupEnd();

//Exercises: Level 2

console.assert(10 > 2 * 10, "Assertion failed: 10 > 2 * 10 is not true");
console.warn("This is a warning message.");
console.error("This is an error message.");

//Exercises: Level 3

const array = new Array(1000000).fill(0);

// Using while loop
console.time("While Loop");
let i = 0;
while (i < array.length) {
  i++;
}
console.timeEnd("While Loop");

// Using for loop
console.time("For Loop");
for (let i = 0; i < array.length; i++) {}
console.timeEnd("For Loop");

// Using for...of loop
console.time("For...of Loop");
for (const element of array) {
}
console.timeEnd("For...of Loop");

// Using forEach loop
console.time("forEach Loop");
array.forEach((element) => {});
console.timeEnd("forEach Loop");
