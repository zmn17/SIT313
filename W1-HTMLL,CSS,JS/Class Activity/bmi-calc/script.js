document.getElementById("bmiForm").addEventListener("submit", (e) => {
  e.preventDefault();

  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(height) || height === 0) {
    alert("Please enter valid values for weight and height.");
    return;
  }

  var bmi = weight / height;
  var result;
  if (bmi <= 18.5) {
    result = "Underweight";
  } else if (bmi <= 25) {
    result = "Normal";
  } else if (bmi <= 30) {
    result = "Overweight";
  } else if (bmi > 30) {
    result = "Obese";
  }
  alert("Your BMI is " + bmi.toFixed(2) + " (" + result + ")");
});
