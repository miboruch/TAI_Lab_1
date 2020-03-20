let preQuestions = [
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "The song &quot;Twin Size Mattress&quot; was written by which band?",
    correct_answer: "The Front Bottoms",
    answers: [
      "The Front Bottoms",
      "Twenty One Pilots",
      "The Wonder Years",
      "The Smith Street Band"
    ]
  },
  {
    category: "Vehicles",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which Japanese company is the world&#039;s largest manufacturer of motorcycles?",
    correct_answer: "Honda",
    answers: ["Yamaha", "Suzuki", "Kawasaki", "Honda"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following buildings is example of a structure primarily built in the Art Deco architectural style?",
    correct_answer: "Niagara Mohawk Building",
    answers: [
      "Niagara Mohawk Building",
      "Taipei 101",
      "One Detroit Center",
      "Westendstrasse 1"
    ]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In most FPS video games such as Counter-Strike, shooting which part of the body does the highest damage?",
    correct_answer: "Head",
    answers: ["Arm", "Leg", "Chest", "Head"]
  },
  {
    category: "General Knowledge",
    type: "boolean",
    difficulty: "medium",
    question:
      "The term &quot;Spam&quot; came before the food product &quot;Spam&quot;.",
    correct_answer: "False",
    answers: ["True", "False"]
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the show Stranger Things, what is Eleven&#039;s favorite breakfast food?",
    correct_answer: "Eggo Waffles",
    answers: ["Toast", "Captain Crunch", "Bacon and Eggs", "Eggo Waffles"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the game Paper Mario for the Nintendo 64 the first partner you meet is a Goomba, what is its name?",
    correct_answer: "Goombario",
    answers: ["Goombella", "Goombarry", "Goomby", "Goombario"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question: "When was Google founded?",
    correct_answer: "September 4, 1998",
    answers: [
      "October 9, 1997",
      "December 12, 1989",
      "Feburary 7th, 2000",
      "September 4, 1998"
    ]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which is not a playable character in the 2005 video game Killer7?",
    correct_answer: "Frank Smith",
    answers: ["Frank Smith", "Mask de Smith", "Dan Smith", "Coyote Smith"]
  },
  {
    category: "Geography",
    type: "boolean",
    difficulty: "medium",
    question: "The capital of the US State Ohio is the city of Chillicothe.",
    correct_answer: "False",
    answers: ["True", "False"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Which company did Bethesda purchase the Fallout Series from?",
    correct_answer: "Interplay Entertainment",
    answers: [
      "Capcom",
      "Interplay Entertainment",
      "Blizzard Entertainment",
      "Nintendo"
    ]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which iconic album cover features the pulsar waves of CP 1919 placed in the center of the cover?",
    correct_answer: "Unknown Pleasures",
    answers: [
      "The Dark Side of the Moon",
      "Unknown Pleasures",
      "London Calling",
      "The Velvet Underground &amp; Nico"
    ]
  },
  {
    category: "Politics",
    type: "boolean",
    difficulty: "medium",
    question:
      "During the 2016 United States presidential election, the State of California possessed the most electoral votes, having 55.",
    correct_answer: "True",
    answers: ["False", "True"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question: "Who was the first prime minister of Canada?",
    correct_answer: "John Macdonald",
    answers: [
      "John Macdonald",
      "John Abbott",
      "Alexander Mackenzie",
      "Robert Borden"
    ]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "The land mass of modern day Turkey is called what?",
    correct_answer: "Anatolia",
    answers: ["Anatolia", "Ismuth of Ottoma", "Ottoma", "Ismuth of Anatolia"]
  },
  {
    category: "Sports",
    type: "boolean",
    difficulty: "easy",
    question:
      "In association football, or soccer, a corner kick is when the game restarts after someone scores a goal.",
    correct_answer: "False",
    answers: ["True", "False"]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who played the Cenobite called &quot;Pinhead&quot; in the original Hellraiser films?",
    correct_answer: "Doug Bradley",
    answers: ["Doug Bradley", "Doug Jones", "Doug Savant", "Doug Benson"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these countries is the smallest by population?",
    correct_answer: "Norway",
    answers: ["Slovakia", "Norway", "Finland", "Hong Kong"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which internet company began life as an online bookstore called &#039;Cadabra&#039;?",
    correct_answer: "Amazon",
    answers: ["eBay", "Overstock", "Shopify", "Amazon"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Generally, which component of a computer draws the most power?",
    correct_answer: "Video Card",
    answers: ["Hard Drive", "Processor", "Power Supply", "Video Card"]
  }
];

const next = document.querySelector(".next");
const previous = document.querySelector(".previous");

const question = document.querySelector(".question");
const answers = document.querySelectorAll(".list-group-item");

const currentQuestionWrapper = document.querySelector(".current-question");

const quiz = document.querySelector(".list");
const result = document.querySelector(".results");
const average = document.querySelector(".average");
const userScorePoint = document.querySelector(".userScorePoint");

const pointsElem = document.querySelector(".score");
const restart = document.querySelector(".restart");
let index = 0;
let points = 0;

/* --- */

function setCurrentQuestionNumber(number) {
  currentQuestionWrapper.innerHTML = `${++number}/${preQuestions.length}`;
}

function setQuestion(index) {
  setCurrentQuestionNumber(index);
  question.innerHTML = preQuestions[index].question;

  answers.forEach((item, indexNumber) => {
    item.innerHTML = preQuestions[index].answers[indexNumber];
    item.innerHTML === "undefined"
      ? (item.style.display = "none")
      : (item.style.display = "block");
  });
}

function activateAnswers() {
  answers.forEach(item => {
    item.addEventListener("click", doAction);
    item.classList.remove("correct", "incorrect");
  });
}

function saveToLocalStorage(currentResult) {
  if (localStorage.getItem("score") && localStorage.getItem("gamesPlayed")) {
    localStorage.setItem(
      "score",
      parseInt(localStorage.getItem("score")) + currentResult
    );
    localStorage.setItem(
      "gamesPlayed",
      parseInt(localStorage.getItem("gamesPlayed")) + 1
    );
  } else {
    localStorage.setItem("score", currentResult);
    localStorage.setItem("gamesPlayed", "1");
  }
}

function getAverage() {
  return (
    parseInt(localStorage.getItem("score")) /
    parseInt(localStorage.getItem("gamesPlayed"))
  );
}

function disableAnswers() {
  answers.forEach(item => {
    item.removeEventListener("click", doAction);
  });
}

function quizEnd(points) {
  saveToLocalStorage(points);
  quiz.style.display = "none";
  result.style.display = "block";
  userScorePoint.innerHTML = points;
  average.innerHTML = getAverage();
}

function markCorrect(elem) {
    elem.classList.add("correct");
}

function markIncorrect(elem) {
    elem.classList.add("incorrect");
}

function doAction(event) {
    if (event.target.innerHTML === preQuestions[index].correct_answer) {
        points++;
        markCorrect(event.target);
        pointsElem.innerText = points;
    } else {
        markIncorrect(event.target);
    }
    disableAnswers();
}

/* --- */

setQuestion(0);
activateAnswers();

next.addEventListener("click", function(event) {
  index++;
  if (index >= preQuestions.length) {
    quizEnd(points);
  } else {
    setQuestion(index);
    activateAnswers();
  }
});

previous.addEventListener("click", function(event) {
  index !== 0 ? setQuestion(--index) : null;
});

restart.addEventListener("click", function(event) {
  event.preventDefault();

  index = 0;
  points = 0;
  userScorePoint.innerHTML = points;
  setQuestion(0);
  activateAnswers();
  pointsElem.innerText = 0;
  quiz.style.display = "block";
  result.style.display = "none";
});
