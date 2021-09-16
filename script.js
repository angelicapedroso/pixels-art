function pixelFrame() {

  let size = 5;
  let frame = document.getElementById('pixel-board');

  for (let index = 1; index <= size; index += 1) {
    let line = document.createElement('div');
    frame.appendChild(line);

    for (let index = 1; index <= size; index += 1) {
      let pixel = document.createElement('div');
      pixel.classList.add('pixel');
      line.appendChild(pixel);
    }
  }
}
pixelFrame();

const palette = document.getElementsByClassName('color');

for (let index = 0; index < palette.length; index += 1) {
  palette[index].addEventListener("click", selectColor);
}

function selectColor(origin) {
  for (let index = 0; index < palette.length; index += 1) {
    palette[index].classList.remove('selected');
  }
  origin.target.classList.add('selected');
}

const addColorPixel = document.getElementsByClassName('pixel');

for (let index = 0; index < addColorPixel.length; index += 1) {
  addColorPixel[index].addEventListener('click', selectPixel);
}

function selectPixel(origin) {
  origin.target.style.backgroundColor = window.getComputedStyle(document.querySelector('.selected'), null).getPropertyValue("background-color");
}
