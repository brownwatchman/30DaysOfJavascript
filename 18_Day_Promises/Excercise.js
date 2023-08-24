//Exercises: Level 1

fetch(countriesAPI)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      const { name, capital, languages, population, area } = country;
      console.log("Country:", name);
      console.log("Capital:", capital);
      console.log("Languages:", languages);
      console.log("Population:", population);
      console.log("Area:", area);
      console.log("------------------------");
    });
  })
  .catch((error) => console.error("Error fetching data:", error));

//Exercises: Level 2

fetch(catsAPI)
  .then((response) => response.json())
  .then((data) => {
    const catNames = data.map((cat) => cat.name);
    console.log("Cat Names:", catNames);
  })
  .catch((error) => console.error("Error fetching data:", error));

//Exercises: Level 3

fetch(catsAPI)
  .then((response) => response.json())
  .then((data) => {
    const weights = data.map((cat) => parseFloat(cat.weight.metric));
    const averageWeight =
      weights.reduce((total, weight) => total + weight, 0) / weights.length;
    console.log("Average Weight of Cat:", averageWeight.toFixed(2), "kg");
  })
  .catch((error) => console.error("Error fetching data:", error));

fetch(countriesAPI)
  .then((response) => response.json())
  .then((data) => {
    const largestCountries = data
      .sort((a, b) => b.area - a.area)
      .slice(0, 10)
      .map((country) => country.name.common);
    console.log("10 Largest Countries:", largestCountries);
  })
  .catch((error) => console.error("Error fetching data:", error));

fetch(countriesAPI)
  .then((response) => response.json())
  .then((data) => {
    const allLanguages = data.flatMap((country) => country.languages.official);
    const uniqueLanguages = new Set(allLanguages);
    console.log("Total Number of Official Languages:", uniqueLanguages.size);
  })
  .catch((error) => console.error("Error fetching data:", error));
