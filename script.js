let GRID_SIZE = 16;
const CONTROLS_RESIZE = document.querySelector(".controls-resize");
const CONTROLS_RESET = document.querySelector(".controls-reset");
const MAIN_GRID = document.querySelector(".main-grid");

function makeGrid() {
	for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
		let cell = document.createElement("div");
		cell.classList.add("grid-cell");
		cell.addEventListener('mouseover', e => {
			e.target.style["background-color"] = "red";
		});
		MAIN_GRID.appendChild(cell);
	}
	MAIN_GRID.style.setProperty("--cells-per-row", GRID_SIZE);
}

function removeCells() {
	const cellsNodesList = MAIN_GRID.querySelectorAll(".grid-cell");
	cellsNodesList.forEach(cell => {
		MAIN_GRID.removeChild(cell);
	});
}

function resizeGrid() {
	let promptStr = "Enter size for a square grid: ";
	do {
		GRID_SIZE = parseInt(prompt(promptStr), 10); // ,10 is the radix which is basically the base of the number to be parsed will be guessed by default if not provided. if we have 0x hex...
		if (GRID_SIZE > 100 || GRID_SIZE < 2)
			promptStr = "Enter a number 0 < 2 < 101"
	} while (isNaN(GRID_SIZE) || GRID_SIZE > 100 || GRID_SIZE < 2);

	removeCells();
	makeGrid();
}

function clearDraw() {
	const cellsNodeList = MAIN_GRID.querySelectorAll(".grid-cell");
	cellsNodeList.forEach(cell => {
		cell.style["background-color"] = "white";
	});
}

function setupEvents() {
	CONTROLS_RESET.addEventListener('click', clearDraw);
	CONTROLS_RESIZE.addEventListener('click', resizeGrid);
}

setupEvents();
makeGrid();