// Create the square element and select the grid from the html
const grid = document.querySelector(".grid")

// Generate a 16x16 (256) squares and append to grid
for (let i = 1; i <=256; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    grid.appendChild(square);
};

console.log(grid);


