const clearButton = document.querySelector('.clear');
const stroke_weight = document.querySelector('.stroke-weight');


const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;


canvas.addEventListener('mousedown', start);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stop);

clearButton.addEventListener('click', clearCanvas);

let draw_color = "gold";

// function change-color{
//  <div onclick="change_color(this)" class="color-field" style="background: red;"></div>
// }

function change_color(element) {
    draw_color=element.style.background;
}

function start (e) {
  isDrawing = true;
  draw(e);
}

function draw ({clientX: x, clientY: y}) {
  if (!isDrawing) return;
  ctx.lineWidth = stroke_weight.value;
  ctx.lineCap = "round";
  ctx.strokeStyle = draw_color;
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}

function erase() {
  var m = confirm("Want to clear");
  if (m) {
      ctx.clearRect(0, 0, w, h);
      document.getElementById("canvasimg").style.display = "none";
  }
}
function stop () {
  isDrawing = false;
  ctx.beginPath();
}

function clearCanvas () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener('resize', resizeCanvas);
function resizeCanvas () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();

const colors = ['#FBFFD6', '#A5A3C1', '#4f8fbf', '#6dcd93', 'white'];

const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  let random = Math.floor(Math.random() * colors.length);
  let buttonColor = 1;
  if(random==4){
    buttonColor = random - 1;
  } else {
    buttonColor = random + 1;
  }
    
  const body = document.body;
  body.style.backgroundColor = colors[random];
})