interface shapeProperties {
    color: string;
    type: string;
}

abstract class Shape {
    constructor(
        protected shapeProperties: shapeProperties
    ) {
    }

    abstract clone(): Shape;

    abstract showDetails(): void;
}


class Rectangle extends Shape {

    constructor(
        public width: number,
        public height: number,
        color: string = "red"
    ) {
        super({color: color, type: "rectangle"});
    }

    clone(): Shape {
        const clone = Object.create(this);
        clone.shapeProperties = {...this.shapeProperties};
        // if we don't clone the shapeProperties, the cloned object will have a reference to the original object, shallow copy working with top-level properties only not nested properties

        return clone;
    }

    showDetails() {
        console.log(`Rectangle: ${this.shapeProperties.color}, Width: ${this.width}, Height: ${this.height}`);
    }

    changeWidth(width: number): void {
        this.width = width;
    }

    changeColor(color: string): void {
        this.shapeProperties.color = color;
    }

}

class Triangle extends Shape {

    constructor(
        public base: number,
        public height: number,
        color: string = "red"
    ) {
        super({color: color, type: "triangle"});
    }

    clone(): Shape {
        /*
            try and implement the clone method for the Triangle class to make sure that it is not matter if the way you implement the clone method is different
            but the matter is that this method should return a new instance of the Triangle class with the same properties
         */
        const ShapeProperties = {...this.shapeProperties};

        return new Triangle(this.base, this.height, ShapeProperties.color);
    }

    showDetails() {
        console.log(`Triangle: ${this.shapeProperties.color}, Base: ${this.base}, Height: ${this.height}`);
    }
}

const r1 = new Rectangle(10, 20, "blue");


const r2 = r1.clone() as Rectangle;
console.log(r1 === r2); // Output: false

r1.showDetails();
r2.showDetails();

r1.changeWidth(30);
r2.changeWidth(40);

//trying to change the properties of the cloned object will not affect the original object
r1.showDetails();
r2.showDetails();

r1.changeColor("green");
r2.changeColor("yellow");

//trying to change the properties of the cloned object will not affect the original object
r1.showDetails();
r2.showDetails();


const t1 = new Triangle(10, 20, "blue");

const t2 = t1.clone() as Triangle;

console.log(t1 === t2); // Output: false
