//Exercises: Level 1

function outerClosure() {
  const outerVar = "I am from the outer closure";

  function innerFunction() {
    console.log(outerVar);
  }

  return innerFunction;
}

const innerFunc = outerClosure();
innerFunc(); // Output: I am from the outer closure

//Exercises: Level 2

function outerClosure() {
  const outerVar = "I am from the outer closure";

  function innerFunction1() {
    console.log(outerVar);
  }

  function innerFunction2() {
    console.log("I am inner function 2");
  }

  function innerFunction3() {
    console.log("I am inner function 3");
  }

  return {
    inner1: innerFunction1,
    inner2: innerFunction2,
    inner3: innerFunction3,
  };
}

const innerClosures = outerClosure();
innerClosures.inner1(); // Output: I am from the outer closure
innerClosures.inner2(); // Output: I am inner function 2
innerClosures.inner3(); // Output: I am inner function 3

//Exercises: Level 3

function personAccount(firstName, lastName) {
  const incomes = [];
  const expenses = [];

  function totalIncome() {
    return incomes.reduce((total, income) => total + income.amount, 0);
  }

  function totalExpense() {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  }

  function accountInfo() {
    return `Account holder: ${firstName} ${lastName}`;
  }

  function addIncome(amount, description) {
    incomes.push({ amount, description });
  }

  function addExpense(amount, description) {
    expenses.push({ amount, description });
  }

  function accountBalance() {
    return totalIncome() - totalExpense();
  }

  return {
    totalIncome,
    totalExpense,
    accountInfo,
    addIncome,
    addExpense,
    accountBalance,
  };
}

const userAccount = personAccount("John", "Doe");
userAccount.addIncome(1000, "Salary");
userAccount.addExpense(300, "Rent");

console.log(userAccount.totalIncome()); // Output: 1000
console.log(userAccount.totalExpense()); // Output: 300
console.log(userAccount.accountBalance()); // Output: 700
console.log(userAccount.accountInfo()); // Output: Account holder: John Doe
