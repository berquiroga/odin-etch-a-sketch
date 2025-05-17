// Create the square element and select the grid from the html
const grid = document.querySelector(".grid");

// Function to get the size of the grid (max 100 squares per side)
function getSize() {
    while (true) {
        var size = prompt("How many squares you want per side on the new grid?");
        if (size <= 100 && size > 0) {
            return size;
        } else {
            alert("The minimum amount of squares per side is 1 and the maximum is 100!");
            continue;
        };
    };
};

// Function for creating grid according to size given
function createGrid(side) {
    for (let i = 1; i <= side * side; i++) {
        // Create square div and add style via js
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        square.style.border = "solid black";
        square.style.backgroundColor = "white";
        square.style.aspectRatio = "1 / 1";
        let width = 100 / side;
        square.style.width = `${width}%`;
        square.style.boxSizing = "border-box";
        let opacity = 0.1;
        let increaseOpacity = 0.1;
        square.style.opacity = `${opacity}`;
        // Add event listeners for hovering and change color (incresing darkness) leaving a trail
        square.addEventListener("mouseover", function (e) {
            let targetOpacity = +e.target.style.opacity;
            if (targetOpacity < 1) {
                e.target.style.opacity = `${targetOpacity + increaseOpacity}`;
                // Randomize square color in RGB (0-255 for each)
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                e.target.style.background = `rgb(${r}, ${g}, ${b})`;
            };
        });
        grid.appendChild(square);
    };
};

// Function to delete the previous grid before rendering a new one
function deleteGrid() {
    grid.replaceChildren();
};

// Generate a button that prompts the user for the size of the grid and deletes
// the previous one, generating a new one the size the user specified.
const body = document.querySelector("body");
const header = document.createElement("div");
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.padding = "20px";
body.insertBefore(header, grid);

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset grid"
resetBtn.addEventListener("click", () => {
    side = getSize();
    deleteGrid();
    createGrid(side);
});
header.appendChild(resetBtn);


