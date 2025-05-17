// Create the square element and select the grid from the html
const grid = document.querySelector(".grid")

// Generate a 16x16 (256) squares and append to grid
for (let i = 1; i <= 256; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.style.border = "solid black";
    square.style.backgroundColor = "white";
    // Add event listeners for hovering and change color leaving a trail
    square.addEventListener("mouseover", function (e) {
        e.target.style.background = "red";
    });
    grid.appendChild(square);
};

console.log(grid);


