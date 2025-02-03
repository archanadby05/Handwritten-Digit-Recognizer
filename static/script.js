let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

canvas.width = 280;
canvas.height = 280;
context.lineWidth = 15;
context.lineCap = 'round';

let drawing = false;

canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    context.beginPath();
    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
});

canvas.addEventListener('mousemove', (e) => {
    if (drawing) {
        context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        context.stroke();
    }
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
});

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function predictDigit() {
    let canvasData = canvas.toDataURL('image/png');
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image: canvasData })
    })
    .then(response => response.json())
    .then(data => {
        alert('Predicted Digit: ' + data.prediction);
    })
    .catch(err => console.error('Error:', err));
}
