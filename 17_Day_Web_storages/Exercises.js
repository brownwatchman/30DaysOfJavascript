//Exercises: Level 1

localStorage.setItem("firstName", "John");
localStorage.setItem("lastName", "Doe");
localStorage.setItem("age", "30");
localStorage.setItem("country", "USA");
localStorage.setItem("city", "New York");

//Exercises: Level 2

const student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 25,
  skills: ["HTML", "CSS", "JavaScript"],
  country: "Canada",
  enrolled: true,
};

localStorage.setItem("student", JSON.stringify(student));

//Exercises: Level 3

const personAccount = {
  firstName: "Alice",
  lastName: "Johnson",
  incomes: [{ amount: 1000, description: "Salary" }],
  expenses: [{ amount: 300, description: "Rent" }],
  totalIncome() {
    return this.incomes.reduce((total, income) => total + income.amount, 0);
  },
  totalExpense() {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  },
  accountInfo() {
    return `Account holder: ${this.firstName} ${this.lastName}`;
  },
  addIncome(amount, description) {
    this.incomes.push({ amount, description });
  },
  addExpense(amount, description) {
    this.expenses.push({ amount, description });
  },
  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  },
};

localStorage.setItem("personAccount", JSON.stringify(personAccount));
