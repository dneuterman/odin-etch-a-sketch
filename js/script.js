let squareGridCount = 16;
const GRID_SIZE = 960;
let boxSize = GRID_SIZE / squareGridCount;
const mainContainer = document.querySelector('.main-container');
const resetButton = document.querySelector('.reset');
const blackSetting = document.querySelector('.black-setting');
const rainbowSetting = document.querySelector('.rainbow-setting');
const colorPicker = document.querySelector('#color-picker');
const gridResize = document.querySelector('#grid-resize');
const gridResizeLabel = document.querySelector('label[for="grid-resize"]');

const randomColorValue = () => {
  return Math.floor(Math.random() * 256)
}

const boxMouseOverColor = (rainbow = false, color = '#000000') => {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
      if (rainbow) {
        box.style.backgroundColor = `rgb(${randomColorValue()}, ${randomColorValue()}, ${randomColorValue()})`;
      } else {
        box.style.backgroundColor = color;
      }
    })
  })
}

const createGrid = () => {
  if (document.querySelectorAll('.box-row')) {
    const oldBoxRows = document.querySelectorAll('.box-row');
    oldBoxRows.forEach(oldBoxRow => {
      oldBoxRow.remove();
    })
  }
  for (i = 0; i < squareGridCount; i++) {
    const boxRow = document.createElement('div');
    boxRow.classList.add('box-row');
    for (j = 0; j < squareGridCount; j++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.setAttribute('style', `height: ${boxSize}px; width: ${boxSize}px`)
      boxRow.append(box);
    }
    mainContainer.append(boxRow);
  }
}

const resetGrid = () => {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    box.style.backgroundColor = "#ffffff";
  })
}

resetButton.addEventListener('click', resetGrid);
blackSetting.addEventListener('click', () => {
  boxMouseOverColor();
  colorPicker.value = "#000000";
});
rainbowSetting.addEventListener('click', () => boxMouseOverColor(true));
colorPicker.addEventListener('change', (event) => boxMouseOverColor(false, event.target.value));
gridResize.addEventListener('input', (event) => {
  gridResizeLabel.textContent = `${event.target.value} x ${event.target.value}`
});
gridResize.addEventListener('change', (event) => {
  console.log(event.target.value)
  squareGridCount = event.target.value;
  boxSize = GRID_SIZE / squareGridCount
  console.log(boxSize)
  createGrid();
  boxMouseOverColor(false, colorPicker.value);
});

createGrid();
boxMouseOverColor();
