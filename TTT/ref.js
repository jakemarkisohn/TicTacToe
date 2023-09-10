// -----GAME-BOARD-----
// Get all the box elements
const boxes = document.querySelectorAll('.boxes');

// Variable to keep track of current player ('X' or 'O')
let currentPlayer = 'X';

// Add event listener to each box
boxes.forEach(box => {
  box.addEventListener('click', () => {
    // boxes.forEach(box => {: This line starts a forEach loop on the boxes array. It iterates over each element in the array and performs the provided callback function for each element.

    //   box.addEventListener('click', () => {: For each box, this line adds an event listener for the 'click' event. It means that when a box is clicked, the provided callback function will be executed.


    // Check if the box is already filled
    if (box.textContent !== '') {
      alert("Please select and empty square.")
      return
    }

    box.textContent = currentPlayer
    if (currentPlayer == 'X') {
      currentPlayer = 'O'
    }
    else if (currentPlayer == 'O') {
      currentPlayer = 'X'
    }
    // ---------------X-Bellow--------------------

    let counter = 0
    // Counter used to check for tie in the end - if counter == 9 return draw etc.

    if(document.getElementById("topLeft").innerText == 'X' && document.getElementById("midLeft").innerText == 'X' && document.getElementById("bottomLeft").innerText == 'X') {
      alert("Winner!")
      addOneHome()
      clearBoard()
    }
    else if(document.getElementById("midTop").innerText == 'X' && document.getElementById("midCenter").innerText == 'X' && document.getElementById("midBottom").innerText == 'X') { 
      alert("Winner!")
      addOneHome()
      clearBoard()
    }
    else if(document.getElementById("topRight").innerText == 'X' && document.getElementById("midRight").innerText == 'X' && document.getElementById("bottomRight").innerText == 'X') { 
      alert("Winner!")
      addOneHome()
      clearBoard()
    }
    else if(document.getElementById("topLeft").innerText == 'X' && document.getElementById("midTop").innerText == 'X' && document.getElementById("topRight").innerText == 'X') { 
      alert("Winner!")
      addOneHome()
      clearBoard()
    }
    else if(document.getElementById("midLeft").innerText == 'X' && document.getElementById("midCenter").innerText == 'X' && document.getElementById("midRight").innerText == 'X') { 
      alert("Winner!")
      addOneHome()
      clearBoard()
    }
    else if(document.getElementById("bottomLeft").innerText == 'X' && document.getElementById("midBottom").innerText == 'X' && document.getElementById("bottomRight").innerText == 'X') { 
      alert("Winner!")
      addOneHome()
      clearBoard()
    }
    else if(document.getElementById("bottomLeft").innerText == 'X' && document.getElementById("midCenter").innerText == 'X' && document.getElementById("topRight").innerText == 'X') { 
      alert("Winner!")
      addOneHome()
      clearBoard()
    }
    else if(document.getElementById("topLeft").innerText == 'X' && document.getElementById("midCenter").innerText == 'X' && document.getElementById("bottomRight").innerText == 'X') { 
      alert("Winner!")
      addOneHome()
      clearBoard()
    }
    // ---------------O-Bellow--------------------
    if(document.getElementById("topLeft").innerText == 'O' && document.getElementById("midLeft").innerText == 'O' && document.getElementById("bottomLeft").innerText == 'O') {
      alert("Winner!")
      addOneAway()
      clearBoard()
    }
    else if(document.getElementById("midTop").innerText == 'O' && document.getElementById("midCenter").innerText == 'O' && document.getElementById("midBottom").innerText == 'O') { 
      alert("Winner!")
      addOneAway()
      clearBoard()
    }
    else if(document.getElementById("topRight").innerText == 'O' && document.getElementById("midRight").innerText == 'O' && document.getElementById("bottomRight").innerText == 'O') { 
      alert("Winner!")
      addOneAway()
      clearBoard()
    }
    else if(document.getElementById("topLeft").innerText == 'O' && document.getElementById("midTop").innerText == 'O' && document.getElementById("topRight").innerText == 'O') { 
      alert("Winner!")
      addOneAway()
      clearBoard()
    }
    else if(document.getElementById("midLeft").innerText == 'O' && document.getElementById("midCenter").innerText == 'O' && document.getElementById("midRight").innerText == 'O') { 
      alert("Winner!")
      addOneAway()
      clearBoard()
    }
    else if(document.getElementById("bottomLeft").innerText == 'O' && document.getElementById("midBottom").innerText == 'O' && document.getElementById("bottomRight").innerText == 'O') { 
      alert("Winner!")
      addOneAway()
      clearBoard()
    }
    else if(document.getElementById("bottomLeft").innerText == 'O' && document.getElementById("midCenter").innerText == 'O' && document.getElementById("topRight").innerText == 'O') { 
      alert("Winner!")
      addOneAway()
      clearBoard()
    }
    else if(document.getElementById("topLeft").innerText == 'O' && document.getElementById("midCenter").innerText == 'O' && document.getElementById("bottomRight").innerText == 'O') { 
      alert("Winner!")
      addOneAway()
      clearBoard()
    }
    else if (document.getElementById("topLeft").innerText != "" && document.getElementById("midLeft").innerText != "" && document.getElementById("bottomLeft").innerText != "" && document.getElementById("midTop").innerText != "" && document.getElementById("midCenter").innerText != "" && document.getElementById("midBottom").innerText != "" && document.getElementById("topRight").innerText != "" && document.getElementById("midRight").innerText != "" && document.getElementById("bottomRight").innerText != "") {
      alert("DRAW!")
      clearBoard()
    }
    //  console.log(document.getElementById("topLeft").innerText)
  });
});



// --------------------------------

let homeCount = 0;
let guestCount = 0;

let scoreHomeEl = document.getElementById("scoreHome");
let scoreGuestEl = document.getElementById("scoreGuest");

scoreHomeEl.textContent = homeCount;
scoreGuestEl.textContent = guestCount;

// for home score
function addOneHome() {
  homeCount += 1;
  scoreHomeEl.textContent = homeCount;
}

// for guest score
function addOneAway() {
  guestCount += 1;
  scoreGuestEl.textContent = guestCount;
}

function clearScore(){
    currentPlayer = 'X'
    scoreGuestEl.textContent = 0
    scoreHomeEl.textContent = 0
    homeCount = 0
    guestCount = 0
}

function clearBoard() {
  boxes.forEach(box => {
  box.innerHTML = ''
  currentPlayer = 'X'
  return
})
}

// function getWinner() {

  
