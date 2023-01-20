//declare variables
var turn = "X";
var win = false;
var count = 0;

//function to check if there is a winner
function checkWinner() {
    //check rows
    if (document.getElementById("r1c1").innerHTML == document.getElementById("r1c2").innerHTML && document.getElementById("r1c2").innerHTML == document.getElementById("r1c3").innerHTML && document.getElementById("r1c1").innerHTML != "") {
        win = true;
    } else if (document.getElementById("r2c1").innerHTML == document.getElementById("r2c2").innerHTML && document.getElementById("r2c2").innerHTML == document.getElementById("r2c3").innerHTML && document.getElementById("r2c1").innerHTML != "") {
        win = true;
    } else if (document.getElementById("r3c1").innerHTML == document.getElementById("r3c2").innerHTML && document.getElementById("r3c2").innerHTML == document.getElementById("r3c3").innerHTML && document.getElementById("r3c1").innerHTML != "") {
        win = true;
    }   else
    //check columns
    if (document.getElementById("r1c1").innerHTML == document.getElementById("r2c1").innerHTML && document.getElementById("r2c1").innerHTML == document.getElementById("r3c1").innerHTML && document.getElementById("r1c1").innerHTML != "") {
        win = true;
    } else if (document.getElementById("r1c2").innerHTML == document.getElementById("r2c2").innerHTML && document.getElementById("r2c2").innerHTML == document.getElementById("r3c2").innerHTML && document.getElementById("r1c2").innerHTML != "") {
        win = true;
    } else if (document.getElementById("r1c3").innerHTML == document.getElementById("r2c3").innerHTML && document.getElementById("r2c3").innerHTML == document.getElementById("r3c3").innerHTML && document.getElementById("r1c3").innerHTML != "") {
        win = true;
    }   else
    //check diagonals
    if (document.getElementById("r1c1").innerHTML == document.getElementById("r2c2").innerHTML && document.getElementById("r2c2").innerHTML == document.getElementById("r3c3").innerHTML && document.getElementById("r1c1").innerHTML != "") {
        win = true;
    } else if (document.getElementById("r1c3").innerHTML == document.getElementById("r2c2").innerHTML && document.getElementById("r2c2").innerHTML == document.getElementById("r3c1").innerHTML && document.getElementById("r1c3").innerHTML != "") {
        win = true;
    }
}

//function to check if there is a tie
function checkTie() {
    if (count == 9 && win == false) {
        alert("Tie!");
        reset();
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

//function to change the turn
function changeTurn() {
    if (turn == "X") {
        turn = "O";
    } else {
        turn = "X";
    }   
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

//function to check if there is a winner
function checkWinner() {
    //check rows
    if (document.getElementById("r1c1").innerHTML == document.getElementById("r1c2").innerHTML && document.getElementById("r1c2").innerHTML == document.getElementById("r1c3").innerHTML && document.getElementById("r1c1").innerHTML != "") {
        win = true;

    } else if (document.getElementById("r2c1").innerHTML == document.getElementById("r2c2").innerHTML && document.getElementById("r2c2").innerHTML == document.getElementById("r2c3").innerHTML && document.getElementById("r2c1").innerHTML != "") {
        win = true;

    } else if (document.getElementById("r3c1").innerHTML == document.getElementById("r3c2").innerHTML && document.getElementById("r3c2").innerHTML == document.getElementById("r3c3").innerHTML && document.getElementById("r3c1").innerHTML != "") {
        win = true;

    }   else
    //check columns
    if (document.getElementById("r1c1").innerHTML == document.getElementById("r2c1").innerHTML && document.getElementById("r2c1").innerHTML == document.getElementById("r3c1").innerHTML && document.getElementById("r1c1").innerHTML != "") {
        win = true;

    } else if (document.getElementById("r1c2").innerHTML == document.getElementById("r2c2").innerHTML && document.getElementById("r2c2").innerHTML == document.getElementById("r3c2").innerHTML && document.getElementById("r1c2").innerHTML != "") {
        win = true;

    } else if (document.getElementById("r1c3").innerHTML == document.getElementById("r2c3").innerHTML && document.getElementById("r2c3").innerHTML == document.getElementById("r3c3").innerHTML && document.getElementById("r1c3").innerHTML != "") {
        win = true;

    }   else
    //check diagonals
    if (document.getElementById("r1c1").innerHTML == document.getElementById("r2c2").innerHTML && document.getElementById("r2c2").innerHTML == document.getElementById("r3c3").innerHTML && document.getElementById("r1c1").innerHTML != "") {
        win = true;

    } else if (document.getElementById("r1c3").innerHTML == document.getElementById("r2c2").innerHTML && document.getElementById("r2c2").innerHTML == document.getElementById("r3c1").innerHTML && document.getElementById("r1c3").innerHTML != "") {
        win = true;

    }
    if (win == true) {
        alert(turn + " wins!");
        reset();
    }
}

//function to check if there is a tie
function checkTie() {
    if (count == 9 && win == false) {
        alert("Tie!");
        reset();
    }
}

function changeColorX() {
    var cells = document.getElementsByTagName("td");
    for (var i = 0; i < cells.length; i++) {
        if (cells[i].innerHTML == "X") {
            cells[i].style.backgroundColor = "yellow";
        } else if (cells[i].innerHTML == "O") {
            cells[i].style.backgroundColor = "orange";
        }
    }
}

