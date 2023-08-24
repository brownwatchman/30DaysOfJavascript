//Exercises: Level 1

class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  sound() {
    console.log(`${this.name} makes a sound.`);
  }

  introduce() {
    console.log(
      `Hi, I'm ${this.name}. I'm ${this.age} years old and I have ${this.legs} legs.`
    );
  }
}

class Dog extends Animal {
  constructor(name, age, color) {
    super(name, age, color, 4);
  }

  sound() {
    console.log(`${this.name} barks.`);
  }
}

class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age, color, 4);
  }

  sound() {
    console.log(`${this.name} meows.`);
  }
}

//Exercises: Level 2

class Animal {
  // ... (constructor and other methods)

  sound() {
    console.log(`${this.name} does not make any sound.`);
  }
}

//Exercises: Level 3

class Statistics {
  constructor(data) {
    this.data = data;
  }

  count() {
    return this.data.length;
  }

  sum() {
    return this.data.reduce((acc, num) => acc + num, 0);
  }

  min() {
    return Math.min(...this.data);
  }

  max() {
    return Math.max(...this.data);
  }

  range() {
    return this.max() - this.min();
  }

  mean() {
    return this.sum() / this.count();
  }

  median() {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);
    if (sortedData.length % 2 === 0) {
      return (sortedData[middle - 1] + sortedData[middle]) / 2;
    } else {
      return sortedData[middle];
    }
  }

  mode() {
    const numFrequency = {};
    this.data.forEach((num) => {
      numFrequency[num] = (numFrequency[num] || 0) + 1;
    });
    const modes = [];
    let maxFrequency = 0;
    for (const num in numFrequency) {
      if (numFrequency[num] > maxFrequency) {
        modes.length = 0;
        modes.push(num);
        maxFrequency = numFrequency[num];
      } else if (numFrequency[num] === maxFrequency) {
        modes.push(num);
      }
    }
    return modes.map((mode) => ({ mode: Number(mode), count: maxFrequency }));
  }

  var() {
    const mean = this.mean();
    const squaredDifferences = this.data.map((num) => Math.pow(num - mean, 2));
    return this.sum(squaredDifferences) / this.count();
  }

  std() {
    return Math.sqrt(this.var());
  }

  freqDist() {
    const frequency = {};
    this.data.forEach((num) => {
      frequency[num] = (frequency[num] || 0) + 1;
    });
    return Object.entries(frequency).map(([num, count]) => [
      count,
      Number(num),
    ]);
  }

  describe() {
    return `
  Count: ${this.count()}
  Sum: ${this.sum()}
  Min: ${this.min()}
  Max: ${this.max()}
  Range: ${this.range()}
  Mean: ${this.mean()}
  Median: ${this.median()}
  Mode: ${JSON.stringify(this.mode())}
  Variance: ${this.var()}
  Standard Deviation: ${this.std()}
  Frequency Distribution: ${JSON.stringify(this.freqDist())}
      `;
  }
}

const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];
const statistics = new Statistics(ages);

console.log("Count:", statistics.count());
console.log("Sum:", statistics.sum());
console.log("Min:", statistics.min());
console.log("Max:", statistics.max());
console.log("Range:", statistics.range());
console.log("Mean:", statistics.mean());
console.log("Median:", statistics.median());
console.log("Mode:", statistics.mode());
console.log("Variance:", statistics.var());
console.log("Standard Deviation:", statistics.std());
console.log("Frequency Distribution:", statistics.freqDist());
console.log(statistics.describe());

class PersonAccount {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.incomes = new Set();
    this.expenses = new Set();
  }

  addIncome(description, amount) {
    this.incomes.add({ description, amount });
  }

  addExpense(description, amount) {
    this.expenses.add({ description, amount });
  }

  get totalIncome() {
    return [...this.incomes].reduce(
      (total, income) => total + income.amount,
      0
    );
  }

  get totalExpense() {
    return [...this.expenses].reduce(
      (total, expense) => total + expense.amount,
      0
    );
  }

  get accountBalance() {
    return this.totalIncome - this.totalExpense;
  }

  accountInfo() {
    console.log(`Name: ${this.firstname} ${this.lastname}`);
    console.log(`Total Income: ${this.totalIncome}`);
    console.log(`Total Expense: ${this.totalExpense}`);
    console.log(`Account Balance: ${this.accountBalance}`);
  }
}

const person = new PersonAccount("John", "Doe");
person.addIncome("Salary", 5000);
person.addExpense("Rent", 1000);
person.addExpense("Groceries", 300);
person.accountInfo();
