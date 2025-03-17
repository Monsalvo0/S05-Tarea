const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

let separation = 35; // Separación inicial entre los óvalos

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawComposition();
}

function drawComposition() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas antes de redibujar

    // Establecer el fondo del canvas a negro
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Definir color global para los óvalos y el círculo
    ctx.strokeStyle = "white";
    ctx.lineWidth = 8;

    // Dibujar óvalos
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxRadiusX = Math.min(canvas.width, canvas.height) / 3;
    const maxRadiusY = maxRadiusX / 3; // Hacer los óvalos más aplastados
    const numEllipses = 7;

    for (let i = 0; i < numEllipses; i++) {
        const radiusX = maxRadiusX * Math.pow(0.9, i); // Reducir el tamaño del óvalo en un 10% cada vez
        const radiusY = maxRadiusY * Math.pow(0.9, i); // Reducir el tamaño del óvalo en un 10% cada vez
        ctx.beginPath();
        ctx.ellipse(centerX, centerY + (i * separation), radiusX, radiusY, 0, 0, 2 * Math.PI);
        ctx.stroke();

        // Dibujar círculo en el centro del primer óvalo
        if (i === 0) {
            const circleRadius = radiusY / 1.5; // Ajustar el tamaño del círculo
            ctx.beginPath();
            ctx.arc(centerX, centerY + (i * separation), circleRadius, 0, 2 * Math.PI);
            ctx.fillStyle = "white";
            ctx.fill();
        }
    }
}

function onMouseEnter() {
    separation = 45; // Aumentar la separación a 45 cuando el mouse está sobre el canvas
    drawComposition();
}

function onMouseLeave() {
    separation = 35; // Restablecer la separación a 35 cuando el mouse sale del canvas
    drawComposition();
}

canvas.addEventListener('mouseenter', onMouseEnter);
canvas.addEventListener('mouseleave', onMouseLeave);
window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Llamar a la función para ajustar el tamaño inicial del canvas