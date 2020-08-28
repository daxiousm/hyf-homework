class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getDiameter() {
    return 2 * this.radius;
  }
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}
const circle = new Circle(10);
circle.getCircumference();

const circle1 = new Circle(20);
console.log(circle1.getArea());

/* const circle2 = new Circle(25);
circle2.getDiameter(); */
