let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

/* let window_height = window_innerHeight;
let window_width = window_innerWidth; 

canvas.width = window_width;
canvas.height = window_height; */

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillcolor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillcolor = fillcolor;
  }
  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle, false);

    context.stroke();
  }
}

let circles = [];
let createCircle = function (c1) {
  c1.draw(context);
};

for (let i = 0; i < 10; i++) {
  let random_x = Math.random();
  let random_y = Math.random();
  const c1 = new Circle(random_x, random_y, 100, 0, 2 * Math.PI, "black");
  circles.push(c1);
  setTimeout(() => {
    createCircle(circles[i]);
  }, 3000);
}
console.log(circles);
