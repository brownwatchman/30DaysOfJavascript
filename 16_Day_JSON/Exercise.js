//Exercises: Level 1

const skillsJSON = JSON.stringify(skills);
console.log(skillsJSON);

const ageJSON = JSON.stringify(age);
console.log(ageJSON);

const isMarriedJSON = JSON.stringify(isMarried);
console.log(isMarriedJSON);

const studentJSON = JSON.stringify(student);
console.log(studentJSON);

//Exercises: Level 2

const studentPropertiesJSON = JSON.stringify(student, [
  "firstName",
  "lastName",
  "skills",
]);
console.log(studentPropertiesJSON);

//Exercises: Level 3

const parsedData = JSON.parse(txt);
console.log(parsedData);

let mostSkilledUser = null;
let maxSkills = 0;

for (const user in parsedData) {
  if (parsedData.hasOwnProperty(user)) {
    const userSkills = parsedData[user].skills.length;
    if (userSkills > maxSkills) {
      maxSkills = userSkills;
      mostSkilledUser = user;
    }
  }
}

console.log("User with the most skills:", mostSkilledUser);
