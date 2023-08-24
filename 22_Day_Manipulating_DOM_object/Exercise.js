// Ex 1.
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Number Generator</title>
  <style>
    .container {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
    .number {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
    .even {
      background-color: green;
    }
    .odd {
      background-color: yellow;
    }
    .prime {
      background-color: red;
    }
  </style>
</head>
<body>
  <div class="container" id="numberContainer"></div>

  <script>
    const numberContainer = document.getElementById('numberContainer');

    // Function to check if a number is prime
    function isPrime(num) {
      if (num <= 1) return false;
      if (num <= 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
      for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
      }
      return true;
    }

    // Generate numbers and append to container
    for (let i = 1; i <= 100; i++) {
      const numberElement = document.createElement('div');
      numberElement.classList.add('number');
      numberElement.textContent = i;

      if (i % 2 === 0) {
        numberElement.classList.add('even');
      } else {
        numberElement.classList.add('odd');
      }

      if (isPrime(i)) {
        numberElement.classList.remove('even', 'odd');
        numberElement.classList.add('prime');
      }

      numberContainer.appendChild(numberElement);
    }
  </script>
</body>
</html>

// Ex 2.

<!DOCTYPE html>
<html lang="en">
<head>
  <title>List of Countries</title>
</head>
<body>
  <h1>List of Countries</h1>
  <ul id="countriesList"></ul>

  <script>
    const countries = ['Finland', 'Sweden', 'Norway', /* ... */ ];

    const countriesList = document.getElementById('countriesList');

    // Loop through the countries array and create list items for each country
    countries.forEach(country => {
      const listItem = document.createElement('li');
      listItem.textContent = country;
      countriesList.appendChild(listItem);
    });
  </script>
</body>
</html>
