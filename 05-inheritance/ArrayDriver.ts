import { Circle } from './Circle';
import { Rectangle } from './Rectangle';
import { Shape } from './Shape';

const myShape = new Shape(10, 15);
const myCircle = new Circle(5, 10, 20);
const myRectangle = new Rectangle(0, 0, 3, 7);

let theShapes: Shape[] = [];

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (const tempShape of theShapes) {
    console.log(tempShape.getInfo());
}
