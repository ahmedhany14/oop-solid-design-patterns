/*
Abstraction is a concept of hiding the implementation details and showing only functionality to the user.
In other words, it shows only important things to the user and hides the internal details for the user.

Abstraction is achieved in TypeScript by using interfaces.
it allows changing the implementation of the class without affecting the other parts of the system.
*/

interface Shape {
    area(): number;
    perimeter(): number;
}

class Circle implements Shape {
    constructor(private radius: number) { }

    area() {
        return Math.PI * this.radius ** 2;
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Square implements Shape {
    constructor(private side: number) { }

    area() {
        return this.side ** 2;
    }

    perimeter() {
        return 4 * this.side;
    }
}

function calculateArea(shape: Shape) {
    return shape.area();
}

const circle = new Circle(5);
const square = new Square(5);


//console.log('area of circle:', calculateArea(circle));
//console.log('area of square:', calculateArea(square));

// example of abstraction


interface IDate {
    getDay(): number;
    getMonth(): number;
    getYear(): number;
}
class DATE implements IDate {

    constructor(private date: Date) { }

    public getDay() {
        return this.date.getDate();
    }

    public getMonth() {
        return this.date.getMonth() + 1; // 0 based for month
    }

    public getYear() {
        return this.date.getFullYear();
    }
}

const date:IDate = new DATE(new Date());

console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getYear());

