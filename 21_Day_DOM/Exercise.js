//Exercise: Level 1
<script>
  const firstParagraph = document.querySelector('p');
  console.log(firstParagraph);
</script>

<script>
  const secondParagraph = document.querySelector('#second');
  const thirdParagraph = document.querySelector('#third');
  const fourthParagraph = document.querySelector('#fourth');
  console.log(secondParagraph, thirdParagraph, fourthParagraph);
</script>

<script>
  const allParagraphs = document.querySelectorAll('p');
  console.log(allParagraphs);
</script>

<script>
  allParagraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
  });
</script>

<script>
  fourthParagraph.textContent = 'Fourth Paragraph';
</script>

<script>
  allParagraphs.forEach((paragraph, index) => {
    paragraph.id = `paragraph-${index + 1}`;
    paragraph.className = 'paragraph';
  });
</script>

//Exercise: Level 2

<script>
  allParagraphs.forEach((paragraph, index) => {
    paragraph.style.color = 'blue';
    paragraph.style.backgroundColor = 'lightgray';
    paragraph.style.border = '1px solid black';
    paragraph.style.fontSize = '16px';
    paragraph.style.fontFamily = 'Arial, sans-serif';
  });
</script>

<script>
  allParagraphs.forEach((paragraph, index) => {
    if (index % 2 === 0) {
      paragraph.style.color = 'green';
    } else {
      paragraph.style.color = 'red';
    }
  });
</script>

//Exercise: Level 3
<!DOCTYPE html>
<html lang="en">
<head>
  <title>JavaScript for Everyone: DOM</title>
  <style>
    .wrapper {
      text-align: center;
      font-family: Arial, sans-serif;
    }
    h1, h2 {
      color: #333;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      padding: 10px;
      font-weight: bold;
    }
    .completed {
      background-color: green;
    }
    .ongoing {
      background-color: yellow;
    }
    .coming {
      background-color: red;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <h1>Asabeneh Yetayeh challenges in 2020</h1>
    <h2>30DaysOfJavaScript Challenge</h2>
    <ul>
      <li class="completed">30DaysOfPython Challenge Done</li>
      <li class="ongoing">30DaysOfJavaScript Challenge Ongoing</li>
      <li class="coming">30DaysOfReact Challenge Coming</li>
      <li class="coming">30DaysOfFullStack Challenge Coming</li>
      <li class="coming">30DaysOfDataAnalysis Challenge Coming</li>
      <li class="coming">30DaysOfReactNative Challenge Coming</li>
      <li class="coming">30DaysOfMachineLearning Challenge Coming</li>
    </ul>
  </div>
  <script>
    // Change year color every 1 second
    const year = document.querySelector('h2');
    setInterval(() => {
      year.style.color = getRandomColor();
    }, 1000);

    // Change date and time background color every 1 second
    const dateAndTime = document.querySelector('h1');
    setInterval(() => {
      dateAndTime.style.backgroundColor = getRandomColor();
    }, 1000);

    // Utility function to generate a random color
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  </script>
</body>
</html>
