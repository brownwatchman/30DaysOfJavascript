//Exercises: Level 1

const text =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
const incomeRegex = /(\d+) euro/g;
const matches = text.match(incomeRegex);
const annualIncome = matches.reduce((acc, match) => acc + parseInt(match), 0);

const points = ["-1", "2", "-4", "-3", "-1", "0", "4", "8"];
const sortedPoints = points.map(Number).sort((a, b) => a - b);
const distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0];

function is_valid_variable(variable) {
  const validVariableRegex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  return validVariableRegex.test(variable);
}

//Exercises: Level 2

function tenMostFrequentWords(paragraph, count = 10) {
  const words = paragraph.toLowerCase().match(/\b\w+\b/g);
  const wordCount = {};
  words.forEach((word) => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  return Object.entries(wordCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, count)
    .map(([word, count]) => ({ word, count }));
}

//Exercises: Level 3

function cleanText(sentence) {
  return sentence
    .replace(/[^a-zA-Z\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const cleanedText = cleanText(sentence);

function mostFrequentWords(cleanedText, count = 3) {
  const words = cleanedText.split(" ");
  const wordCount = {};
  words.forEach((word) => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  return Object.entries(wordCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, count)
    .map(([word, count]) => ({ word, count }));
}

console.log(mostFrequentWords(cleanedText));
