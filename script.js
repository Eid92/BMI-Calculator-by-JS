function calculateBmi() {
    var Height = document.getElementById('Height-input').value;
    var Weight = document.getElementById('Weight-input').value;
    var bmi = Weight / (Height * Height);
    console.log(bmi);
    var resultText = '';

    if (bmi < 18.5) {
      resultText = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      resultText = 'Normal Weight';
    } else if (bmi >= 25 && bmi < 30) {
      resultText = 'Overweight';
    } else if (bmi >= 30 && bmi < 35) {
      resultText = 'Obesity Class I';
    } else if (bmi >= 35 && bmi < 40) {
      resultText = 'Obesity Class II';
    } else if (bmi >= 40) {
      resultText = 'Obesity Class III';
    } else {
      resultText = 'Something went wrong';
    }

    console.log(bmi);
    document.getElementById('result-BMI').innerHTML =
      'BMI: ' + bmi.toFixed(2);
    document.getElementById('resultText').innerHTML = resultText;
    document.getElementById('result').style.display = 'block';
  }
