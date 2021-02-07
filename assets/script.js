var timerEl = document.getElementById('countdown');
var timeLeft = 60;
var currentQuestion = 0;
var score = 0;

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

var t = "";
var f = "";


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

//detects right/wrong
//shows right/wrong
var showAnswerA = () =>{

  var footer = document.createElement("FOOTER");    //https://www.tutorialspoint.com/html-dom-footer-object and https://stackoverflow.com/questions/9422974/createelement-with-id
  document.body.appendChild(footer);

  var div1 = document.createElement("DIV");
  var t = document.createElement("P");
  t.setAttribute("id", "yup");  
  var txtT = document.createTextNode("Correct!")
  document.getElementById("yup").style.visibility = "hidden";             //https://www.w3schools.com/jsref/prop_style_visibility.asp

  var div2 = document.createElement("DIV");
  var f = document.createElement("P");
  f.id = 'nope';  
  var txtF = document.createTextNode("Wrong!")
  document.getElementById("nope").style.visibility = "hidden";

  t.appendChild(txtT);
  f.appendChild(txtF);

  div1.appendChild(t);
  div2.appendChild(f);

  footer.appendChild(div1);
  footer.appendChild(div2);



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
  if (timeLeft == 0) {
    stopQuiz();
  }
   else if (currentQuestion == 9)
    {
      stopQuiz();
    }
    else{
      currentQuestion++;
      printQuestion();
    }
}

//goes into stop quiz function
//clears page
//add initials, set new score to local storage and show high score page
//retrieve local storage with high scores list

var highScore =()=>{
  //***********still need to add functionality as stated above  
  document.getElementById("Q").innerHTML = "All Done! Your final score is: " + score;
  document.getElementById("tf").innerHTML = "";
  document.getElementById("tf").innerHTML = "";
  btnA.style.display = "none";
  btnB.style.display = "none";
  btnC.style.display = "none";
  btnD.style.display = "none";




  var goBack = document.createElement("button");   
    goBack.innerHTML = "Play Again?";                   
    goBack.className = "restart";                    
    document.body.appendChild(goBack);  

    goBack.addEventListener('click', startQuiz);
}

//triggers high score function
//and clear timer
var stopQuiz = ()=> {
  timeLeft = "";
  highScore();
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
      // stopQuiz()   this causes the stop quiz function to run twice and to make two go back buttons
    }
  }, 1000);

}

var startQuiz = function(event) {
  event.preventDefault(); 

  submitButton.innerHTML = "Submit";    
  
  
 
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
 
}

submitButton.addEventListener('click', startQuiz);

//used the idea of questions in a variable creating an object with answers and correct answers from
//https://www.sitepoint.com/simple-javascript-quiz/ the remainder of the code was not applicapable to my 
//goals for this quiz

//https://www.w3schools.com/js/js_arrays.asp and https://www.w3schools.com/js/js_objects.asp  and  
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

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