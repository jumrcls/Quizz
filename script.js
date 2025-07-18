const questions = [
{
    text: "De quelles couleurs est la Veuve Noire ?",
    answers: ["Blanche et verte", "Rose paillettée et bleu turquoise", "Noire et rouge"],
    correctIndex: 2
  },
  {
    text: "De quelle couleur est le cheval blanc de Henri IV ?",
    answers: ["Blanc", "Marron", "Rose"],
    correctIndex: 0
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const buttons = document.querySelectorAll(".answer-button");
const feedbackText = document.getElementById("feedback-text");
const nextButton = document.getElementById("next-button");
const reset = document.getElementById('full-Reset');

function showQuestion() {
  const current = questions[currentQuestionIndex];
  questionText.textContent = current.text;
  buttons.forEach((button, index) => {
    button.textContent = current.answers[index];
    button.disabled = false;
    button.className = "answer-button"; // reset class
  });
  feedbackText.textContent = "";
  nextButton.style.display = "none";
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedIndex = parseInt(button.dataset.index);
    const correctIndex = questions[currentQuestionIndex].correctIndex;
    const isCorrect = selectedIndex === correctIndex;

    if (isCorrect) {
      feedbackText.textContent = "Bien joué !";
      feedbackText.className = "correct";
      score++;
    } else {
      feedbackText.textContent = "Niveau primaire !";
      feedbackText.className = "incorrect";
    }

    buttons.forEach(btn => btn.disabled = true);
    nextButton.style.display = "inline-block";
  });
});

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
   
      questionText.textContent = "Try again !";
      
    
      const scoreDisplay = document.getElementById("score-display");
      scoreDisplay.textContent = `Score : ${score}/${questions.length}`;
      scoreDisplay.style.display = "block";
      
      document.querySelector(".answers").style.display = "none";
      nextButton.style.display = "none";
      fullReset.style.display = "";
      fullReset.addEventListener('click', function(e) {
        location.reload();
      }, false);
    }
  });
  showQuestion();

