//declare variables
var turn = "X";
var win = false;
var count = 0;



//function to check if there is a tie
function checkTie() {
    if (count == 9 && win == false) {
        let audio = document.getElementById("failureAudio");
        audio.play();
        alert("Tie!");
        reset();
    }
}


  //function to change the turn
function changeTurn() {
  if (turn == "X") {
      turn = "O";
  } else {
      turn = "X";
  }
  changeColor();
}

// change color x and o
function changeColor() {
  var cells = document.getElementsByTagName("td");
  for (var i = 0; i < cells.length; i++) {
      if (cells[i].innerHTML == "X") {
          cells[i].style.backgroundColor = "yellow";
      } else if (cells[i].innerHTML == "O") {
          cells[i].style.backgroundColor = "tomato";

      }
  }
}
//function to reset the game
function reset() {
  var cells = document.getElementsByTagName("td");
  for (var i = 0; i < cells.length; i++) {
      cells[i].innerHTML = "";
  }
  turn = "X";
  win = false;
  count = 0;
}


//function to check if the cell is empty
function cellClicked(cell) {
    if (cell.innerHTML == "") {
        cell.innerHTML = turn;
        count++;
        checkWinner();
        checkTie();
        changeTurn();
    }
}



//function to change color of "X" and "O" players
function changeColor() {
  var cells = document.getElementsByTagName("td");
  for (var i = 0; i < cells.length; i++) {
      if (cells[i].innerHTML == "X") {
          cells[i].style.backgroundColor = "yellow";
      } else if (cells[i].innerHTML == "O") {
          cells[i].style.backgroundColor = "tomato";

      }
  }
}

//function to check status of the game
function cellClicked(cell) {
    let audio = document.getElementById("defaultAudio");
    audio.play();
  if (cell.innerHTML == "") {
      cell.innerHTML = turn;
      count++;
      checkWinner();
      checkTie();
      changeTurn();
  }
}


//function to check if there is a winner
function checkWinner() {
  //check rows
  if (document.getElementById("r1c1").innerHTML == document.getElementById("r1c2").innerHTML && document.getElementById("r1c2").innerHTML == document.getElementById("r1c3").innerHTML && document.getElementById("r1c1").innerHTML != "") {
      win = true;
      document.getElementById("r1c1").style.backgroundColor = "green";
      document.getElementById("r1c2").style.backgroundColor = "green";
      document.getElementById("r1c3").style.backgroundColor = "green";

  } else if (document.getElementById("r2c1").innerHTML == document.getElementById("r2c2").innerHTML && document.getElementById("r2c2").innerHTML == document.getElementById("r2c3").innerHTML && document.getElementById("r2c1").innerHTML != "") {
      win = true;
      document.getElementById("r2c1").style.backgroundColor = "green";
      document.getElementById("r2c2").style.backgroundColor = "green";
      document.getElementById("r2c3").style.backgroundColor = "green";

  } else if (document.getElementById("r3c1").innerHTML == document.getElementById("r3c2").innerHTML && document.getElementById("r3c2").innerHTML == document.getElementById("r3c3").innerHTML && document.getElementById("r3c1").innerHTML != "") {
      win = true;
      document.getElementById("r3c1").style.backgroundColor = "green";
      document.getElementById("r3c2").style.backgroundColor = "green";
      document.getElementById("r3c3").style.backgroundColor = "green";

  }   else
  //check columns
  if (document.getElementById("r1c1").innerHTML == document.getElementById("r2c1").innerHTML && document.getElementById("r2c1").innerHTML == document.getElementById("r3c1").innerHTML && document.getElementById("r1c1").innerHTML != "") {
      win = true;
      document.getElementById("r1c1").style.backgroundColor = "green";
      document.getElementById("r2c1").style.backgroundColor = "green";
      document.getElementById("r3c1").style.backgroundColor = "green";

  } else if (document.getElementById("r1c2").innerHTML == document.getElementById("r2c2").innerHTML && document.getElementById("r2c2").innerHTML == document.getElementById("r3c2").innerHTML && document.getElementById("r1c2").innerHTML != "") {

      win = true;
      document.getElementById("r1c2").style.backgroundColor = "green";
      document.getElementById("r2c2").style.backgroundColor = "green";
      document.getElementById("r3c2").style.backgroundColor = "green";

  } else if (document.getElementById("r1c3").innerHTML == document.getElementById("r2c3").innerHTML && document.getElementById("r2c3").innerHTML == document.getElementById("r3c3").innerHTML && document.getElementById("r1c3").innerHTML != "") {
      win = true;
      document.getElementById("r1c3").style.backgroundColor = "green";
      document.getElementById("r2c3").style.backgroundColor = "green";
      document.getElementById("r3c3").style.backgroundColor = "green";

  }
  else
  //check diagonals
  if (document.getElementById("r1c1").innerHTML == document.getElementById("r2c2").innerHTML && document.getElementById("r2c2").innerHTML == document.getElementById("r3c3").innerHTML && document.getElementById("r1c1").innerHTML != "") {
      win = true;
      document.getElementById("r1c1").style.backgroundColor = "green";
      document.getElementById("r2c2").style.backgroundColor = "green";
      document.getElementById("r3c3").style.backgroundColor = "green";

  } else if (document.getElementById("r1c3").innerHTML == document.getElementById("r2c2").innerHTML && document.getElementById("r2c2").innerHTML == document.getElementById("r3c1").innerHTML && document.getElementById("r1c3").innerHTML != "") {
      win = true;
      document.getElementById("r1c3").style.backgroundColor = "green";
      document.getElementById("r2c2").style.backgroundColor = "green";
      document.getElementById("r3c1").style.backgroundColor = "green";

  }
  if (win) {
      alert("Player " + turn + " wins!");
      reset();
  }
}

//function to reset the game
function reset() {
  var cells = document.getElementsByTagName("td");
  for (var i = 0; i < cells.length; i++) {
      cells[i].innerHTML = "";
      cells[i].style.backgroundColor = "white";
  }
  turn = "X";
  win = false;
}

