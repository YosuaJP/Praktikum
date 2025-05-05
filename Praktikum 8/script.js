
function startQuiz() {
  let score = 0;
  let loop = 0;
  let operators = ["+", "-", "*"];
  let jawaban;

  while (true) {
    let num1 = Math.floor(Math.random() * 20);
    let num2 = Math.floor(Math.random() * 20);
    let operator = operators[Math.floor(Math.random() * 3)];
    let question = `${num1} ${operator} ${num2}`;

    jawaban = prompt(`What is ${question}?`);

    if (jawaban === null || jawaban.toLowerCase() === "exit") {
        
        break;
    }
    let userAnswer = parseFloat(jawaban);
    let correctAnswer;

    if (operator === "+") {
      correctAnswer = num1 + num2;
    } else if (operator === "-") {
      correctAnswer = num1 - num2;
    } else if (operator === "*") {
      correctAnswer = num1 * num2;
    }

    if (Math.abs(userAnswer - correctAnswer) === 0) {
      alert("Correct!");
      score++;
    } else {
      alert(`Wrong! The correct answer is ${correctAnswer}`);
    }
    loop++
  }

  if (confirm(`You got ${score} out of ${loop}. Show results on page?`)) {
    document.getElementById("result").innerHTML = `Your final score: ${score}`;
    document.getElementById("datetime").innerHTML = `Last played: ${new Date().toLocaleString()} PM`;
  }
}
