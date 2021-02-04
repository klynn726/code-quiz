var timerEl = document.getElementById('countdown');


var startPageEl = document.querySelector("#page-content");

var submitButton = document.createElement("BUTTON");   // Create a <button> element
submitButton.innerHTML = "Start";                   // text inside the buton
submitButton.className = "btn";                     // adds a class so CSS can target
document.body.appendChild(submitButton);            //adds the button to the body of the html


var quiz = function() {
  preventDefault();

}

// Timer that counts down from 5
function countdown() {
  var timeLeft = 60;
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
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

var stopQuiz = function(){
  
}


submitButton.addEventListener('click', countdown);


