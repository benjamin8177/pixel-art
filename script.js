const container = document.getElementById('pixel-canvas');
const createBtn = document.getElementById('create-grid');
const clearBtn = document.getElementById('clear-grid');
const widthInput = document.getElementById('grid-width');
const heightInput = document.getElementById('grid-height');
const colorPicker = document.getElementById('color-picker');

let isDrawing = false;

container.addEventListener('mousedown', () => isDrawing = true);
document.addEventListener('mouseup', () => isDrawing = false);

function createGrid() {
    container.innerHTML = '';
    const width = parseInt(widthInput.value);
    const height = parseInt(heightInput.value);
    container.style.gridTemplateColumns = `repeat(${width}, 20px)`;
    container.style.gridTemplateRows = `repeat(${height}, 20px)`;

    for (let i = 0; i < width * height; i++) {
        const cell = document.createElement('div');
        cell.classList.add('pixel-cell');
        cell.addEventListener('mousedown', paintCell);
        cell.addEventListener('mouseover', (e) => { if(isDrawing) paintCell(e); });
        container.appendChild(cell);
    }
}

function paintCell(e) {
    e.target.style.backgroundColor = colorPicker.value;
    e.target.style.borderColor = 'transparent';
}

createBtn.addEventListener('click', createGrid);
clearBtn.addEventListener('click', () => {
    const cells = document.querySelectorAll('.pixel-cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = '';
        cell.style.borderColor = '#eee';
    });
});

createGrid();
