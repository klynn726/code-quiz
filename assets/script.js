var timerEl = document.getElementById('countdown');
var timeLeft = 60;

var submitButton = document.createElement("BUTTON");   // Create a <button> element
submitButton.innerHTML = "Start";                   // text inside the buton
submitButton.className = "btn";                     // adds a class so CSS can target
document.body.appendChild(submitButton);            //adds the button to the body of the html





// Timer that counts down from 5
function countdown() {
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = 'Timer: ' + timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = 'Timer: ' + timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      stopQuiz()
    }
  }, 1000);

}

//switches between questions
//time check
//check for more obj in question array trigger end quiz 
var setNextQuestion = ()=>{

}

//shows right/wrong

var showQuestion = () =>{

}

//if correct + to score else minus off time
var selectAnswer = () =>{

}

//high score and set to local storage
//retrieve local storage with high scores list
var highScore =()=>{

}


// var questionsLoop = funtion(questions){
  // for (i = 0; i < questions.length; i++) {
  //   document.getElementById("page-content").innerHTML = questions[0];
    
  // }
// }

var startQuiz = function(event) {
  event.preventDefault();  
  countdown();
  
}

//triggers high score function
//and clear timer
var stopQuiz = function(){

}


submitButton.addEventListener('click', startQuiz);


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
  answers: {a:"{}", b:"()", c:"''", d:"[]"},
  correctAnswer: "d"
  },
  
  ]