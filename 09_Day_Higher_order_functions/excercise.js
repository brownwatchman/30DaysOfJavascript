/*Exercises: Level 1

Difference between forEach, map, filter, and reduce:

forEach: Execute a function for each element in an array.
map: Create a new array by transforming each element in the original array.
filter: Create a new array with elements that pass a condition.
reduce: Combine elements in an array to produce a single value.
Callback function: A function passed as an argument to another function for later execution.

Using forEach:
countries.forEach(country => console.log(country));
names.forEach(name => console.log(name));
numbers.forEach(number => console.log(number));
*/

//using map
const uppercaseCountries = countries.map((country) => country.toUpperCase());
const countryLengths = countries.map((country) => country.length);
const squaredNumbers = numbers.map((number) => number ** 2);
const uppercaseNames = names.map((name) => name.toUpperCase());
const productPrices = products.map((product) => product.price);

//using filter
const countriesWithLand = countries.filter((country) =>
  country.includes("land")
);
const sixCharCountries = countries.filter((country) => country.length === 6);
const longNameCountries = countries.filter((country) => country.length >= 6);
const countriesWithoutE = countries.filter(
  (country) => !country.startsWith("E")
);
const validPrices = products.filter(
  (product) => typeof product.price === "number"
);

//getStringList
function getStringLists(array) {
  return array.filter((item) => typeof item === "string");
}

//using reduce
const sumOfNumbers = numbers.reduce((acc, current) => acc + current, 0);
const allCountries = countries.reduce((acc, country) => acc + ", " + country);

//some and every
const hasLongName = names.some((name) => name.length > 7);
const allCountriesWithLand = countries.every((country) =>
  country.includes("land")
);

//find and findIndex
const countryWithSixLetters = countries.find((country) => country.length === 6);
const indexCountryWithSixLetters = countries.findIndex(
  (country) => country.length === 6
);
const indexNorway = countries.findIndex((country) => country === "Norway"); // Returns -1 if not found
const indexRussia = countries.findIndex((country) => country === "Russia"); // Returns -1 if not found

//Exercises: Level 2

//Total price of products using chained array methods:
const totalPrice = products
  .map((product) => product.price)
  .filter((price) => typeof price === "number")
  .reduce((acc, price) => acc + price, 0);

//Sum of prices of products using reduce only:
const sumOfPrices = products.reduce((acc, product) => {
  if (typeof product.price === "number") {
    return acc + product.price;
  }
  return acc;
}, 0);

//Categorizing countries:
function categorizeCountries(pattern) {
  return countries.filter((country) => country.includes(pattern));
}

//Creating an array of letter-frequency objects:
function letterFrequency(names) {
  const letterCount = {};
  names.forEach((name) => {
    const firstLetter = name.charAt(0).toUpperCase();
    if (letterCount[firstLetter]) {
      letterCount[firstLetter]++;
    } else {
      letterCount[firstLetter] = 1;
    }
  });
  return Object.entries(letterCount).map(([letter, count]) => ({
    letter,
    count,
  }));
}

//getFirstTenCountries and getLastTenCountries functions:
function getFirstTenCountries() {
  return countries.slice(0, 10);
}

function getLastTenCountries() {
  return countries.slice(-10);
}

//Finding the most common initial letter:
function mostCommonInitialLetter(countries) {
  const letters = {};
  countries.forEach((country) => {
    const initial = country.charAt(0).toUpperCase();
    letters[initial] = (letters[initial] || 0) + 1;
  });
  const mostCommon = Object.keys(letters).reduce((a, b) =>
    letters[a] > letters[b] ? a : b
  );
  return mostCommon;
}
