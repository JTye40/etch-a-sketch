const screen = document.querySelector("#screen");

//Generate original grid squares
function createBox(num= 16) { 
  const boxSize = 400 / num;
  for (i = 0; i < num * num; i++) {
    const box = document.createElement("div");
    box.classList.add("screen-grid");
    box.style.width = `${boxSize}px`; 
    box.style.height = `${boxSize}px`;
    screen.appendChild(box);
  };
  colorFill();
  resetGrid();
};


//Generates a grid of squares based on user input
gridScreen = document.querySelector("#screen");

gridSizeButton = document.querySelector("#grid-size-button");
gridSizeButton.addEventListener("click", () => {
  sizePrompt = parseInt(prompt("Enter an amount to change the number of squares in the grid (Max: 100): "));
  while (sizePrompt > 100 || sizePrompt < 1 || isNaN(sizePrompt)) {
    alert("Not a valid selection. Enter a number between 1 and 100.");
    sizePrompt = parseInt(prompt("Enter amount: "));
  };
  gridScreen.innerHTML = '';
  createBox(sizePrompt);
});


//Establishes event listener to "fill" each square with color upon hover
function colorFill() {
  const gridSquares = document.querySelectorAll(".screen-grid");
  gridSquares.forEach(square => {
    square.addEventListener("mouseenter", (e) => {
      // square.style.backgroundColor = "black";
      const randomNumRed = Math.floor(Math.random() * 257);
      const randomNumBlue = Math.floor(Math.random() * 257);
      const randomNumGreen = Math.floor(Math.random() * 257);
      e.target.style.backgroundColor = `rgb(${randomNumRed}, ${randomNumGreen}, ${randomNumBlue})`;
    });
  });
};


//Allows for "reset" of grid
function resetGrid() {
  const resetButton = document.querySelector("#reset");
  const gridSquares = document.querySelectorAll(".screen-grid");
  gridSquares.forEach(square => {
    resetButton.addEventListener("click", () => {
      square.style.backgroundColor = "white";
    });
  });
};

createBox();
colorFill();
resetGrid();