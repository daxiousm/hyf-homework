let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillcolor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillcolor = fillcolor;
  }
  draw() {
    context.beginPath();
    context.arc(
      this.x,
      this.y,
      this.r,
      this.startAngle,
      this.endAngle,
      this.fillcolor
    );

    context.stroke();
    context.fill();
  }
}

setInterval(() => {
  let random_x = Math.random() * canvas.width;
  let random_y = Math.random() * canvas.height;
  let random_r = Math.floor(Math.random() * 100);
  context.fillStyle =
    "rgba(" +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    ".5" +
    ")";
  const c1 = new Circle(random_x, random_y, random_r, 0, 2 * Math.PI);

  c1.draw();
}, 1000);

function resizeCanvas() {
  if (canvas.width < window.innerWidth) {
    canvas.width = window.innerWidth;
  }

  if (canvas.height < window.innerHeight) {
    canvas.height = window.innerHeight;
  }
}

resizeCanvas();
