let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, REACT, PYTHON.";
let arr = text.split(/[,\s]+|[\s]/);
console.log(arr);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.unshift("Meat");

shoppingCart.push("Sugar");

shoppingCart.splice(shoppingCart.lastIndexOf("Honey"), 1);

shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
console.log(shoppingCart);

if (countries.indexOf("Ethiopia")) {
  console.log("ETHIOPIA");
} else countries.push("Ethiopia");

if (webTechs.indexOf("Sass")) {
  console.log("Sass is a CSS preprocess");
} else webTechs.push("Sass");
console.log(webTechs);

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MangoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
