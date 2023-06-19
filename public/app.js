
//Submit Quiz
var displayQuizBox = document.getElementById("displayQuizBox");
function submitQuiz(){
  displayQuizBox.innerHTML=` <div class="col m-5  rounded p-5 ">
  <div class="row d-flex align-items-center justify-content-center flex-column flex-wrap">
  <div class="col">

      <div class="row mx-3 rounded d-flex align-items-center justify-content-center flex-column">
          <div class="col heading rounded p-5 question">
  <h1 >Thankyou For Attempting Quiz</h1>
<div >Click below to view marks</div>
<button class="col box_quiz sticky-bottom  rounded  bg-black pnBtn p-2 m-3" onClick="viewMarks()" >View Marks</button>
  </div></div></div></div></div>`
}
function viewMarks(){
  displayQuizBox.innerHTML=` <div class="col m-5  rounded p-5 ">
  <div class="row d-flex align-items-center justify-content-center flex-column flex-wrap">
  <div class="col">

      <div class="row mx-3 rounded d-flex align-items-center justify-content-center flex-column">
          <div class="col heading rounded p-5 question">
  <h1 >You Got: <br /> ${marks} out of ${quizQuestions.length}</h1>

  </div></div></div></div></div>`
}

//TIMER
var startTimerButton = document.getElementById("startTimerButton");
var popup = document.getElementById("popup");
var closeButton = document.querySelector(".close");

var displayThr = document.getElementById("displayThr");
var displayTmin = document.getElementById("displayTmin");
var displayTsec = document.getElementById("displayTsec");
// var timerStarted=false;


var hoursT = 0;
var minutesT = 30;
var secondsT = 0;

var intervalT;

startTimerButton.addEventListener("click", function() {
  startTimer();
  openPopup();
});

closeButton.addEventListener("click", function() {
  closePopup();
});

function startTimer() {

  intervalT = setInterval(updateTimer, 1000);
  // timerStarted = true;
}

function updateTimer() {
  if (secondsT > 0) {
    secondsT--;
  } else {
    if (minutesT > 0) {
      minutesT--;
      secondsT = 59;
    } else {
      if (hoursT > 0) {
        hoursT--;
        minutesT = 59;
        secondsT = 59;
      } else {
        stopTimer();
        
        return;
      }
    }
  }

  displayThr.textContent = hoursT < 10 ? "0" + hoursT : hoursT;
  displayTmin.textContent = minutesT < 10 ? "0" + minutesT : minutesT;
  displayTsec.textContent = secondsT < 10 ? "0" + secondsT : secondsT;
}

function stopTimer() {
    clearInterval(intervalT);
    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // var marks = calculateMarks(); // Assuming there is a function called calculateMarks() to calculate the marks 
    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    alert("Timer has reached 0. Your marks: " + marks);}


//POPUP
function openPopup() {
  popup.style.display = "block";
  document.addEventListener("click", outsideClickHandler);
  document.addEventListener("keydown", escapeKeyHandler);
}

function closePopup() {
  popup.style.display = "none";
  document.removeEventListener("click", outsideClickHandler);
  document.removeEventListener("keydown", escapeKeyHandler);
}

function outsideClickHandler(event) {
  if (event.target === popup) {
    closePopup();
  }
}

function escapeKeyHandler(event) {
  if (event.key === "Escape") {
    closePopup();
  }
}

//Quiz Questions

var quizQuestions = [
    {
      question: "Which HTML tag is used to define an unordered list?",
      options: ["ul", "li", "ol", "dl"],
      answer: "ul"
    },
    {
      question: "Which attribute is used to define inline styles in HTML?",
      options: ["class", "id", "style", "src"],
      answer: "style"
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["br", "lb", "break", "line"],
      answer: "br"
    },
    {
      question: "Which HTML tag is used to display an image?",
      options: ["img", "src", "image", "picture"],
      answer: "img"
    },
    {
      question: "Which attribute specifies an alternate text for an image?",
      options: ["alt", "title", "src", "href"],
      answer: "alt"
    },
    {
        question: "Which property is used to change the text color in CSS?",
        options: ["color", "text-color", "font-color", "text-style"],
        answer: "color"
      },
      {
        question: "Which CSS property is used to control the spacing between lines of text?",
        options: ["line-height", "text-spacing", "line-spacing", "text-line"],
        answer: "line-height"
      },
      {
        question: "Which property is used to apply rounded corners to an element in CSS?",
        options: ["border-radius", "corner-radius", "border-style", "border-round"],
        answer: "border-radius"
      },
      {
        question: "Which CSS property is used to set the background color of an element?",
        options: ["background-color", "bg-color", "color-background", "element-background"],
        answer: "background-color"
      },
      {
        question: "Which property is used to control the opacity of an element in CSS?",
        options: ["opacity", "transparent", "visibility", "alpha"],
        answer: "opacity"
      },
      {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "variable"],
        answer: "var"
      },
      {
        question: "Which JavaScript method is used to remove the last element from an array?",
        options: ["pop()", "shift()", "slice()", "splice()"],
        answer: "pop()"
      },
      {
        question: "Which function is used to execute a block of code repeatedly at a set interval?",
        options: ["setInterval()", "setTimeout()", "forEach()", "while()"],
        answer: "setInterval()"
      },
      {
        question: "Which operator is used to check if two values are equal in JavaScript?",
        options: ["==", "===", "=", "!="],
        answer: "=="
      },
      {
        question: "Which method is used to convert a string to uppercase in JavaScript?",
        options: ["toUpperCase()", "toLowerCase()", "toUppercase()", "toUpper()"],
        answer: "toUpperCase()"
      }
  ];
  //Quiz
  var displayQuestion = document.getElementById("displayQuestion");
  var currentQuestion = document.getElementById("currentQuestion");
  var totalQuestions = document.getElementById("totalQuestions");
  var answerQuestion = document.getElementById("answerQuestion");
  var obtainedMarksElement = document.getElementById("obtainedMarks");
  var totalMarksElement = document.getElementById("totalMarks");
  var optBtn = document.getElementById("optBtn")
  var indexVal = 0;
  var marks=0;


// function startQuiz(){
//   if(timerStarted){
//     renderQue();
//   }
// else{
//   alert("Please Start Timer to  start Quiz");
// }
// }
// startQuiz();


 function renderQue(){
    var obj = quizQuestions[indexVal];
    displayQuestion.innerHTML = obj.question;
    totalQuestions.innerHTML = quizQuestions.length;
    totalMarksElement.innerHTML = quizQuestions.length;
    currentQuestion.innerHTML = indexVal + 1;
    answerQuestion.innerHTML = "";
    
    for (var i=0; i<obj.options.length; i++){
        answerQuestion.innerHTML += ` <div class="col-md-4 optDiv ">
        <button onclick="checkAnswer('${obj.answer}','${obj.options[i]}'); nextQue();" class="d-flex flex-wrap justify-content-center align-items-center heading w-100 rounded options" id="optBtn">${obj.options[i]}</button>
  </div>`
}

  }



function nextQue(){
    if(indexVal+1 < quizQuestions.length){
        indexVal++;
        renderQue();
    }
    
}
// function prevQue(){
//     if(indexVal+1 > 0){
//         indexVal--;
//         renderQue();
//         }
        
// }

var answeredQuestions = [];

function checkAnswer(a,b){
    if (!answeredQuestions.includes(indexVal+1)) {
        if (a == b) {
          marks++;
        }
        answeredQuestions.push(indexVal);

        // if (answeredQuestions.length === quizQuestions.length) {
            // obtainedMarksElement.innerHTML = marks;
          // }
            obtainedMarksElement.innerHTML = marks;
            if (indexVal+1 == quizQuestions.length) {
alert("Please Submit Your Quiz by clicking on the button below")          }
      }
}

renderQue();


 