const container = document.getElementById('container');

function createShape() {
  const shape = document.createElement('div');
  shape.classList.add('shape');
  container.appendChild(shape);
}

createShape();