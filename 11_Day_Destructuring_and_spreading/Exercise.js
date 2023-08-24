//Exercises: Level 1

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
const [fin, est, sw, den, nor] = countries;
const { width, height, area, perimeter } = rectangle;

//Exercises: Level 2

users.forEach(({ name, scores, skills, age }) => {
  console.log(Object.keys({ name, scores, skills, age }));
});

const lessThanTwoSkills = users.filter((user) => user.skills.length < 2);

//Exercises: Level 3

countries.forEach(({ name, capital, population, languages }) => {
  console.log(
    `Name: ${name}, Capital: ${capital}, Population: ${population}, Languages: ${languages}`
  );
});

const [name, skills, [jsScore, , , reactScore]] = student;
console.log(name, skills, jsScore, reactScore);

function convertArrayToObject(students) {
  return students.map(([name, skills, scores]) => ({
    name,
    skills,
    scores,
  }));
}

const newStudent = { ...student };
newStudent.skills.frontEnd.push({ skill: "Bootstrap", level: 8 });
newStudent.skills.backEnd.push({ skill: "Express", level: 9 });
newStudent.skills.dataBase.push({ skill: "SQL", level: 8 });
newStudent.skills.dataScience.push("SQL");
