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

let higherBMI;
let lowerBMI;

if(johnBMI > markBMI) {
  higherBMI = `John`;
  lowerBMI = `Mark`;
} else {
  higherBMI = `Mark`;
  lowerBMI = `John`;
}

console.log(`${higherBMI} has greater BMI than ${lowerBMI}.`);