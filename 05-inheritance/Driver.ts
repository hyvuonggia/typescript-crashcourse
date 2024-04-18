import { Circle } from './Circle';
import { Rectangle } from './Rectangle';
import { Shape } from './Shape';

const myShape = new Shape(10, 15);
console.log(myShape.getInfo());

const myCircle = new Circle(5, 10, 20);
console.log(myCircle.getInfo());

const myRectangle = new Rectangle(0, 0, 3, 7);
console.log(myRectangle.getInfo());
