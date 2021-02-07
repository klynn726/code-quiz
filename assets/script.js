var timerEl = document.getElementById('countdown');
var timeLeft = 90;
var currentQuestion = 0;
var score = 0;

var btnA = document.createElement("button");
btnA.innerHTML = "A";   
btnA.className = "button"
document.body.appendChild(btnA);    

var btnB = document.createElement("button");
btnB.innerHTML = "B";   
btnB.className = "button"
document.body.appendChild(btnB);    

var btnC = document.createElement("button");
btnC.innerHTML = "C";   
btnC.className = "button"
document.body.appendChild(btnC);    

var btnD = document.createElement("button");
btnD.innerHTML = "D";   
btnD.className = "button"
document.body.appendChild(btnD); 

var submitButton = document.createElement("BUTTON");   // Create a <button> element
submitButton.innerHTML = "Start";                   // text inside the buton
submitButton.className = "btn";                     // adds a class so CSS can target
document.body.appendChild(submitButton);            //adds the button to the body of the html



// var quizLoop =()=>{
//   for (i = 0; i < questions.length; i++) { 
//     printQuestion();
//   }
//   stopQuiz();
// }




//prints question
//switches between questions
//has buttons with answer choices printed in them

var printQuestion = ()=>{
    document.getElementById("Q").innerHTML = questions[currentQuestion].question;

    btnA.innerHTML = questions[currentQuestion].answers.a
    btnB.innerHTML = questions[currentQuestion].answers.b
    btnC.innerHTML = questions[currentQuestion].answers.c
    btnD.innerHTML = questions[currentQuestion].answers.d

    currentQuestion++;

  btnA.addEventListener('click', showAnswer);
  btnB.addEventListener('click', showAnswer);
  btnC.addEventListener('click', showAnswer);
  btnD.addEventListener('click', showAnswer);

}


//detects right/wrong
//shows right/wrong
var showAnswer = () =>{
  if (true){
        //******how to connect the answers obj to the click event to check for true/false??????
  }
  else{

  }

  checks()
}

//if correct add points to score else minus off time
//time check, trigger end quiz 
//check for more obj in question array, trigger end quiz 
var checks = () =>{




  // if (timeLeft = 0) {
  //   stopQuiz();
  // }
  //   if (questions.length = 0)
  //   {
  //     stopQuiz();
  //   }
}

//goes into stop quiz function
//high score and set to local storage
//retrieve local storage with high scores list
var highScore =()=>{

}

//triggers high score function
//and clear timer
var stopQuiz = function(){

}

function countdown() {
  var timeInterval = setInterval(function() {
    if (timeLeft > 1) {
      timerEl.textContent = 'Timer: ' + timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = 'Timer: ' + timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      stopQuiz()
    }
  }, 1000);

}



var startQuiz = function(event) {
  event.preventDefault();  
  countdown();
  printQuestion();
 
}

submitButton.addEventListener('click', startQuiz);

//used the idea of questions in a variable creating an object with answers and correct answers from https://www.sitepoint.com/simple-javascript-quiz/ the remainder of the code was not applicapable to my goals for this quiz

//https://www.w3schools.com/js/js_arrays.asp and https://www.w3schools.com/js/js_objects.asp  and  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

//thought maybe pull info to make an array of just one element ie an array of just questions in a variable. 


var questions = [
  {
  question: "What language uses syntax that begins with $",
  answers: {a: "DOM", b: "Javascript", c: "JQuery", d: "CSS"},
  correctAnswer: "c"
  },
  
  {
  question: "Where is the Javascript tag located on the HTML document?",
  answers: {a:"in the head", b:"at the top of the body", c:"in the header", d:"at the bottom of the body"},
  correctAnswer: "d"
  },
  
  {
  question: "What can be used to create a button using the DOM instead of HTML only?",
  answers: {a:"getElementById", b:"createElement", c:"querySelector", d:"appendChild"},
  correctAnswer: "b"
  },
  
  {
  question: "What can be used to attach a button created using the DOM to the HMTL?",
  answers: {a:"getElementById", b:"createElement", c:"querySelector", d:"appendChild"},
  correctAnswer: "d"
  },
  
  {
  question: "What can be used to select a specific HTML element by id?",
  answers: {a:"getElementById", b:"createElement", c:"setAttribute", d:"appendChild"},
  correctAnswer: "a"
  },
  
  {
  question: "What can be used to create an id for a DOM element?",
  answers: {a:"getElementById", b:"createElement", c:"setAttribute", d:"appendChild"},
  correctAnswer: "c"
  },
  
  {
  question: "What can be used to target the first element with a specific selector?",
  answers: {a:"getElementById", b:"querySelector", c:"createElement", d:"appendChild"},
  correctAnswer: "b"
  },
  
  {
  question: "What is not an example of a mouse event?",
  answers: {a:"trigger", b:"click", c:"contextmenu", d:"mouseover"},
  correctAnswer: "a"
  },
  
  {
  question: "What stops the page from reloading when inputs are entered?",
  answers: {a:"stopReload", b:"null", c:"preventDefault", d:"avoidRefresh"},
  correctAnswer: "c"
  },
  
  {
  question: "An array is contained in which of the following:",
  answers: {a:" { } ", b:" (  ) ", c:" '  ' ", d:" [  ] "},
  correctAnswer: "d"
  },
  
  ]