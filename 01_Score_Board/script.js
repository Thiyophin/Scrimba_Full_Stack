let homeScore = 0;
let guestScore = 0;

// Select boards
const leftBoard = document.querySelector(".left-board");
const rightBoard = document.querySelector(".right-board");

// HOME board logic
leftBoard.addEventListener("click", (e) => {
  if (!e.target.classList.contains("add-one") &&
      !e.target.classList.contains("add-two") &&
      !e.target.classList.contains("add-three")) return;

  const display = document.getElementById("display-1");

  if (e.target.classList.contains("add-one")) homeScore += 1;
  if (e.target.classList.contains("add-two")) homeScore += 2;
  if (e.target.classList.contains("add-three")) homeScore += 3;

  display.textContent = homeScore;
});

// GUEST board logic
rightBoard.addEventListener("click", (e) => {
  if (!e.target.classList.contains("add-one") &&
      !e.target.classList.contains("add-two") &&
      !e.target.classList.contains("add-three")) return;

  const display = document.getElementById("display-2");

  if (e.target.classList.contains("add-one")) guestScore += 1;
  if (e.target.classList.contains("add-two")) guestScore += 2;
  if (e.target.classList.contains("add-three")) guestScore += 3;

  display.textContent = guestScore;
});


function setToInitial() {
  let message = "";

  if (homeScore > guestScore) {
    message = "🏆 HOME wins!";
  } else if (guestScore > homeScore) {
    message = "🏆 GUEST wins!";
  } else {
    message = "🤝 It's a tie!";
  }

  showWinnerDialog(message);

  // Reset after animation finishes
  setTimeout(() => {
    document.getElementById("display-1").textContent = 0;
    document.getElementById("display-2").textContent = 0;
    homeScore = 0;
    guestScore = 0;
  }, 2000);
}


function showWinnerDialog(text) {
  const dialog = document.getElementById("winner-dialog");
  const winnerText = document.getElementById("winner-text");

  winnerText.textContent = text;
  dialog.classList.remove("hidden");

  // Hide after 2 seconds
  setTimeout(() => {
    dialog.classList.add("hidden");
  }, 1800);
}
