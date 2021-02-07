var timerEl = document.getElementById('countdown');
var timeLeft = 60;
var currentQuestion = 0;
var score = 0;
var userInitialsInput = document.querySelector('#user-initials');

var btnA = "A";
btnA.className = "ansAns";
var btnB = "B";
btnB.className = "ansAns";  
var btnC = "C";
btnC.className = "ansAns";  
var btnD = "D";
btnD.className = "ansAns";  

var submitButton = document.createElement("BUTTON");   
submitButton.innerHTML = "Start Quiz";                   
submitButton.className = "btn";  
document.body.appendChild(submitButton);  

var submitInitials = document.createElement("BUTTON");   
submitInitials.innerHTML = "Submit";                   
submitInitials.className = "btnSubInitials";  
submitInitials.id = "subBtnInitials"
document.body.appendChild(submitInitials);  
document.getElementById("subBtnInitials").style.visibility = "hidden";

//prints question
//has buttons with answer choices printed in them

var printQuestion = ()=>{
    submitButton.style.display = "none";
    document.getElementById("Q").innerHTML = questions[currentQuestion].question;

    btnA.innerHTML = questions[currentQuestion].answers.a
    btnB.innerHTML = questions[currentQuestion].answers.b
    btnC.innerHTML = questions[currentQuestion].answers.c
    btnD.innerHTML = questions[currentQuestion].answers.d

  btnA.addEventListener('click', showAnswerA);
  btnB.addEventListener('click', showAnswerB);
  btnC.addEventListener('click', showAnswerC);
  btnD.addEventListener('click', showAnswerD);

}
function footer () { 
var footer = document.createElement("FOOTER");    //https://www.tutorialspoint.com/html-dom-footer-object and https://stackoverflow.com/questions/9422974/createelement-with-id
document.body.appendChild(footer);

var div1 = document.createElement("DIV");
var t = document.createElement("P");
t.id = 'yup';  
var txtT = document.createTextNode("Correct!")

var div2 = document.createElement("DIV");
var f = document.createElement("P");
f.id = 'nope';                                  //https://stackoverflow.com/questions/9422974/createelement-with-id
var txtF = document.createTextNode("Wrong!")

t.appendChild(txtT);
f.appendChild(txtF);

div1.appendChild(t);
div2.appendChild(f);

footer.appendChild(div1);
footer.appendChild(div2);

document.getElementById("nope").style.visibility = "hidden";
document.getElementById("yup").style.visibility = "hidden";      //https://www.w3schools.com/jsref/prop_style_visibility.asp

}

//detects right/wrong
//shows right/wrong
var showAnswerA = () =>{

  document.getElementById("nope").style.visibility = "hidden";
  document.getElementById("yup").style.visibility = "hidden";   

  if (questions[currentQuestion].correctAnswer == "a"){
    score += 5;
    document.getElementById("yup").style.visibility = "visible";  
    document.getElementById("score").innerHTML = "Score: " + score;
  }
  else{
    timeLeft -=5;
    document.getElementById("nope").style.visibility = "visible";
  }

  checks()
}

var showAnswerB = () =>{

  document.getElementById("nope").style.visibility = "hidden";
  document.getElementById("yup").style.visibility = "hidden";   
  
  if (questions[currentQuestion].correctAnswer == "b"){
    score += 5;
    document.getElementById("yup").style.visibility = "visible";  
    document.getElementById("score").innerHTML = "Score: " + score;
  }
  else{
    timeLeft -=5;
    document.getElementById("nope").style.visibility = "visible";
  }

  checks()
}

var showAnswerC = () =>{

  document.getElementById("nope").style.visibility = "hidden";
  document.getElementById("yup").style.visibility = "hidden";   
  
  if (questions[currentQuestion].correctAnswer == "c"){
    score += 5;
    document.getElementById("yup").style.visibility = "visible"; 
    document.getElementById("score").innerHTML = "Score: " + score;
  }
  else{
    timeLeft -=5;
    document.getElementById("nope").style.visibility = "visible";
  }

  checks()
}

var showAnswerD = () =>{

  document.getElementById("nope").style.visibility = "hidden";
  document.getElementById("yup").style.visibility = "hidden";   
  
  if (questions[currentQuestion].correctAnswer == "d"){
    score += 5;
    document.getElementById("yup").style.visibility = "visible";  
    document.getElementById("score").innerHTML = "Score: " + score;
  }
  else{
    timeLeft -=5;
    document.getElementById("nope").style.visibility = "visible";
  }
  checks()
}


//if correct add points to score else minus off time
//time check, trigger end quiz 
//check for more obj in question array, trigger end quiz 
//switches between questions
//returns to printQuestion function
var checks = () =>{
 if (currentQuestion == 9)
    {
      stopQuiz();
    }
    else{
      currentQuestion++;
      printQuestion();
    }
}

//add initials

var highScore =()=>{ 
  document.getElementById("score").innerHTML = "";

  btnA.style.display = "none"; //https://www.w3schools.com/jsref/prop_style_display.asp
  btnB.style.display = "none";
  btnC.style.display = "none";
  btnD.style.display = "none";

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  //https://www.w3schools.com/tags/att_button_form.asp

  document.getElementById("Q").innerHTML = 
  `All Done!
  Your final score is: ${score}   //**************************how do i put the var score into this? 
  <form id="entInitials">
  <label for="enterInitials">Enter initials:</label>
  <input type="text" id="initials" name="enterInitials">
  </form>`;

  document.getElementById("subBtnInitials").style.visibility = "visible"

  score = document.querySelector('#user-score');
  initials = document.querySelector('#user-initials');
}

//set new score to local storage
submitInitials.addEventListener('click', function(event){ //***how do i target this button i created with js above?
  event.preventDefault();

  userInitialsInput = document.querySelector('#user-initials').Value;
  score = document.querySelector('#user-score').Value;

  localStorage.setItem('initials', userInitialsInput);
  localStorage.setItem('score', score);

  viewHighScore();
});

//retrieve local storage with high scores list
//go back and clear buttons and listeners added here
var viewHighScore =()=>{
  document.getElementById("Q").innerHTML = "High scores"

  score = localStorage.getItem(initials);
  userInitialsInput = localStorage.getItem(score);

  userInitialsSpan.textContent = initials;     ///********this causes an error */
  userScoreSpan.textContent = score;          //probably this too, i got this code from the class but wasnt sure it would work. 

  var goBack = document.createElement("button");   
    goBack.innerHTML = "Play Again?";                   
    goBack.className = "restart";                    
    document.body.appendChild(goBack);  

    goBack.addEventListener('click', startQuiz);

    var clear = document.createElement("button");   
    clear.innerHTML = "Clear high scores";                   
    goBack.className = "clearHigh";                    
    document.body.appendChild(clear);  

    clear.addEventListener('click');


}

//triggers high score function
//and clear timeLeft var
//clears correct/wrong
var stopQuiz = ()=> {
  timeLeft = "";
  highScore();

  document.getElementById("nope").style.visibility = "hidden";
  document.getElementById("yup").style.visibility = "hidden";   

}

//this is modified from the classwork to countdown from 60 in one second intervals and printing that to the screen
//when time runs out it runs the stopQuiz function and the timeInterval var is cleared. timerEl is linked to the HTML id countdown on line 1

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

//prevents default ie page relaoding when buttons are clicked, puts a score placeholder on the screen,
//adds buttons to the page for user input, runs the countdown, printQuestion, and footer functions. 

var startQuiz = function(event) {
  event.preventDefault(); 

  document.getElementById("score").innerHTML = "Score: " + score;
  
  btnA = document.createElement("button");  
  btnA.className = "button"
  document.body.appendChild(btnA);    

  btnB = document.createElement("button");  
  btnB.className = "button"
  document.body.appendChild(btnB);    

  btnC = document.createElement("button");
  btnC.className = "button"
  document.body.appendChild(btnC);    

  btnD = document.createElement("button");  
  btnD.className = "button"
  document.body.appendChild(btnD); 
 
  countdown();

  printQuestion();

  footer();
 
}

submitButton.addEventListener('click', startQuiz);

//used the idea of questions in a variable creating an object with answers and correct answers from
//https://www.sitepoint.com/simple-javascript-quiz/ the remainder of the code was not applicapable to my 
//goals for this quiz

//https://www.w3schools.com/js/js_arrays.asp and https://www.w3schools.com/js/js_objects.asp  and  
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

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