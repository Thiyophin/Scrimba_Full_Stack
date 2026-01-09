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
