// main.js
document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // Ajuste del tamaño del canvas
  canvas.width = 400;
  canvas.height = 500;
  
  const cols = 4;
  const rows = 5;
  const cellSize = canvas.width / cols;

  function drawPattern() {
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      
      for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
              const x = i * cellSize;
              const y = j * cellSize;

              // Dibujar el contorno del rectángulo
              ctx.strokeRect(x, y, cellSize, cellSize);
              
              // Dibujar círculos y arcos
              ctx.beginPath();
              ctx.arc(x + cellSize / 2, y + cellSize / 2, cellSize / 2, 0, Math.PI * 2);
              ctx.stroke();

              ctx.beginPath();
              ctx.arc(x, y + cellSize / 2, cellSize / 2, -Math.PI / 2, Math.PI / 2);
              ctx.stroke();
              
              ctx.beginPath();
              ctx.arc(x + cellSize, y + cellSize / 2, cellSize / 2, Math.PI / 2, -Math.PI / 2);
              ctx.stroke();
              
              ctx.beginPath();
              ctx.arc(x + cellSize / 2, y, cellSize / 2, 0, Math.PI);
              ctx.stroke();
              
              ctx.beginPath();
              ctx.arc(x + cellSize / 2, y + cellSize, cellSize / 2, Math.PI, 0);
              ctx.stroke();
          }
      }
  }
  
  drawPattern();
});
