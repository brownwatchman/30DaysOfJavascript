//Exercises: Level 1

const emptySet = new Set();

const set0to10 = new Set();
for (let i = 0; i <= 10; i++) {
  set0to10.add(i);
}

set0to10.delete(5); // Removes the value 5 from the set

set0to10.clear(); // Removes all elements from the set

const setFromArray = new Set(countries.slice(0, 5));

const countryCharCountMap = new Map();
countries.forEach((country) => {
  countryCharCountMap.set(country, country.length);
});

//Exercises: Level 2

const unionSet = new Set([...a, ...b]);

const intersectionSet = new Set(a.filter((value) => b.includes(value)));

const differenceSet = new Set(a.filter((value) => !b.includes(value)));

//Exercises: Level 3

function countLanguages(countries) {
  const languages = new Set();
  countries.forEach((country) => {
    country.languages.split(",").forEach((language) => {
      languages.add(language.trim());
    });
  });
  return languages.size;
}

function mostSpokenLanguages(countries, count) {
  const languageCount = {};
  countries.forEach((country) => {
    country.languages.split(",").forEach((language) => {
      const trimmedLanguage = language.trim();
      languageCount[trimmedLanguage] =
        (languageCount[trimmedLanguage] || 0) + 1;
    });
  });

  const sortedLanguages = Object.keys(languageCount)
    .sort((a, b) => languageCount[b] - languageCount[a])
    .slice(0, count)
    .map((language) => ({ [language]: languageCount[language] }));

  return sortedLanguages;
}
