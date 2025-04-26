const questions = [
  {
    question: "Hangi ülke Asya kıtasındadır?",
    answers: [
      {text: "Endonezya", correct: true},
      {text: "Almanya", correct: false},
      {text: "Meksika", correct: false},
      {text: "Madahaskar", correct: false},
    ]
  },
  {
    question: "Kıbrıs Barış harekatı hangi tarihte gerçekleşmiştir?",
    answers: [
      {text: "1970", correct: false},
      {text: "1972", correct: true},
      {text: "1974", correct: false},
      {text: "1976", correct: false},
    ]
  },
  {
    question: "Hangi hayvan memeli değildir?",
    answers: [
      {text: "Yunus", correct: false},
      {text: "Yarasa", correct: false},
      {text: "İnek", correct: false},
      {text: "Penguen", correct: true},
    ]
  },
  {
    question: "Kürk Mantolu Madonna adlı eser kime aittir?",
    answers: [
      {text: "Sabahattin Ali", correct: true},
      {text: "Oğuz Atay", correct: false},
      {text: "Ahmet Hamdi Tanpınar", correct: false},
      {text: "Orhan Pamuk", correct: false},
    ]
  },
  {
    question: "Dünyanın en güzel, en mükemmel, en tatlı kızı olarak bilinen zarafetiyle görenleri büyüleyen ve gülüşüyle kalpleri ısıtan kimdir? <br>İpucu: Onun varlığı, hayatın en sıradan anlarını bile unutulmaz kılar. Şefkati, inceliği ve içtenliği adeta bir güneş gibi etrafını aydınlatır. Her hareketinde ayrı bir anlam, her bakışında farklı bir derinlik gizlidir. O, sadece dış güzelliğiyle değil, içindeki eşsiz ruhuyla da tarifsiz bir değer taşır. Gerçekten de böyle bir insanın varlığı, hayatta en büyük şanslardan biri olarak kabul edilir. ",
    answers: [
      {text: "Megan Fox", correct: false},
      {text: "Irmak Koçer", correct: true},
      {text: "Jennifer Lawrance", correct: false},
      {text: "Natalie Portman", correct: false},
    ]
  }
];

const questionElement = document.getElementById("question");
const answersButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

let score = questions.length;
let currentQuestionIndex = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = questions.length;
  nextButton.innerHTML = "Next";
  showQuestions();
}

function showQuestions() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answersButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while(answersButtons.firstChild) {
    answersButtons.removeChild(answersButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  Array.from(answersButtons.children).forEach(button => {
    if (selectedBtn === button & !isCorrect) {
      selectedBtn.classList.add("incorrect");
      score--;
    }
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestions();
  }
  else {
    showScore();
  }
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", (e) => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  }
  else {
    startQuiz();
  }
});

startQuiz();