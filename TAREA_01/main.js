const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
let clickCounter = 0;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawFigures();
}

function drawFigures() {
    const circleRadio = canvas.height * 0.05;
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas antes de redibujar

    // definir color global
    ctx.strokeStyle = "black";

    // dibujar funcion de acuerdo a la posicion de cada figura en la matrix
    // definir opacidad de acuerdo al numero de columna
    ctx.globalAlpha = 1;
    drawGrid(circleRadio);
}

function drawGrid(circleRadio) {
    for (let y = 0; y < 5; y++) {
        for (let x = 0; x < 4; x++) {
            drawFigure(y, x, circleRadio);
        }
    }
}

function drawFigure(y, x, circleRadio) {
    const figureIndex = Math.floor(Math.random() * 4);
    if (figureIndex === 0) {
        fullCricle(y, x, circleRadio);
    } else if (figureIndex === 1) {
        rotFullCricle(y, x, circleRadio);
    } else if (figureIndex === 2) {
        halfCricle(y, x, circleRadio);
    } else if (figureIndex === 3) {
        rotHalfCricle(y, x, circleRadio);
    }
}

//Funcion por cada figura en la composicion

function fullCricle(y, x, circleRadio) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.ellipse((canvas.width * 0.2) + circleRadio * 2 * x, (canvas.height * 0.2) + circleRadio * 2 * y, circleRadio, circleRadio, 0, Math.PI, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.ellipse((canvas.width * 0.2) + circleRadio * 2 * x, (canvas.height * 0.202) + circleRadio * 2 * y, circleRadio, circleRadio, 0, Math.PI * 2, Math.PI);
    ctx.stroke();
}

function rotFullCricle(y, x, circleRadio) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.ellipse((canvas.width * 0.199) + circleRadio * 2 * x, (canvas.height * 0.2) + circleRadio * 2 * y, circleRadio, circleRadio, 0, Math.PI / 2, (3 * Math.PI) / 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.ellipse((canvas.width * 0.2) + circleRadio * 2 * x, (canvas.height * 0.2) + circleRadio * 2 * y, circleRadio, circleRadio, 0, (3 * Math.PI) / 2, Math.PI / 2);
    ctx.stroke();
}

function halfCricle(y, x, circleRadio) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.ellipse((canvas.width * 0.2) + (circleRadio * 2 * x), canvas.height * 0.2 + circleRadio * ((2 * y) - 1), circleRadio, circleRadio, 0, Math.PI * 2, Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.ellipse((canvas.width * 0.2) + circleRadio * 2 * x, (canvas.height * 0.2) + circleRadio * (2 * y + 1), circleRadio, circleRadio, 0, Math.PI, Math.PI * 2);
    ctx.stroke();
}

function rotHalfCricle(y, x, circleRadio) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.ellipse((canvas.width * 0.2) + (circleRadio * 2 * x) - circleRadio, canvas.height * 0.2 + circleRadio * ((2 * y)), circleRadio, circleRadio, 0, (3 * Math.PI) / 2, Math.PI / 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.ellipse((canvas.width * 0.2) + circleRadio * 2 * x + circleRadio, (canvas.height * 0.2) + circleRadio * (2 * y), circleRadio, circleRadio, 0, Math.PI / 2, (3 * Math.PI) / 2);
    ctx.stroke();
}

function handleClick() {
    clickCounter++;
    drawFigures();
}

canvas.addEventListener('click', handleClick);
window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Llamar a la función para ajustar el tamaño inicial del canvas



