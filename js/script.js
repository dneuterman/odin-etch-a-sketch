const SQUARE_GRID_COUNT = 64;
const GRID_SIZE = 960;
const boxSize = GRID_SIZE / SQUARE_GRID_COUNT;
const mainContainer = document.querySelector('.main-container');

const createGrid = () => {
  for (i = 0; i < SQUARE_GRID_COUNT; i++) {
    const boxRow = document.createElement('div');
    boxRow.classList.add('box-row');
    for(j = 0; j < SQUARE_GRID_COUNT; j++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.setAttribute('style', `height: ${boxSize}px; width: ${boxSize}px`)
      boxRow.append(box);
    }
    mainContainer.append(boxRow);
  }
  
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    box.addEventListener('mouseover', (event) => {
      event.target.style.backgroundColor = "red";
    })
  })
}

createGrid()
