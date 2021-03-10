console.log("Weight Calculator");
console.log('');

function bmiCalculator(weight, height) {
 var bmi = Math.round(weight / (height * height));
  return bmi;
}

var johnBMI = bmiCalculator(70, 1.69);
console.log("John BMI is: " + johnBMI);

var markBMI = bmiCalculator(95, 1.76);
console.log("Mark BMI is: " + markBMI);


if(johnBMI > markBMI) {
  console.log("John BMI is greater than Mark's BMI.");
} else {
  console.log("Mark's BMI is greater than John's BMI.")
}