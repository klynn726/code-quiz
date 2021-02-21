
var clear = document.createElement("button");   
clear.innerHTML = "Clear High Scores";                   
clear.className = "clearHigh";                    
document.body.appendChild(clear);  

clear.addEventListener('click', function() {
localStorage.setItem("initials", "");
localStorage.setItem("score", "");
});


//on this page setInnerHTML and plug in saveScore and savedInitials 

  var savedScore = localStorage.getItem(score);
  var savedInitials = localStorage.getItem(initials);
  var initialScore = savedScore + ' - ' + savedInitials;

  var list = document.createElement("LI");
  var listTxt = document.createTextNode(initialScore);
  

  list.appendChild(listTxt);

  // document.getElementById("ulScores").appendChild(listTxt);

  //create li similar to buttons below with .innerHTML of `  <li>Name ${savedInititals} :  ${saveScore} </li>   `
 //then append to high scores .html page to ul with id of ul scores 








