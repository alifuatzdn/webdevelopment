const form = document.getElementById("form");
const resultContainer = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (resultContainer.innerHTML !== "") {
    resultContainer.innerHTML = "";
  }
  
  const selection = document.getElementById("bit-select");
  const bitSize = selection.options[selection.selectedIndex].value;
  
  const inputs = form.elements;
  let number = inputs[1].value;
  let result = [];

  while (number != 0) {
    let binaryResult = number % 2 ? 1 : 0;
    result.push(binaryResult);
    number = Math.floor(number / 2);
  }

  let resultLength = result.length;
  for (let i = 0; i < bitSize - resultLength; i++) {
    result.push(0);
  }

  result = result.reverse();
  let resultString = ""
  for (let i = 0; i < bitSize; i++) {
    if (i % 4 == 0) {
      resultString += " ";
    }
    resultString += result[i];
  }

  resultContainer.innerHTML = "The result: " + resultString;
}); 
