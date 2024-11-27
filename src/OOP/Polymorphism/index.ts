/*
Polymorphism is a fundamental concept in object-oriented programming.
It describes the concept that different classes can be treated as objects of a common superclass.
This allows us to create a structure that can process objects of different classes in a uniform way.
*/


abstract class Animal {
    constructor(private name: string) { }

    abstract makeSound(): void;
    abstract move(): void;
    getName() {
        return this.name;
    }
}


class Dog extends Animal {

    constructor(name: string) {
        super(name);
    }

    public makeSound(): void {
        console.log('Bark');
    }
    public move(): void {
        console.log('Dog moved 10 meters');
    }

}

class Cat extends Animal {

    constructor(name: string) {
        super(name);
    }

    public makeSound(): void {
        console.log('Meow');
    }
    public move(): void {
        console.log('Cat moved 10 meters');
    }
}

function makeSoundAndMove(animal: Animal) {
    animal.makeSound();
    animal.move();
}

const dog: Animal = new Dog('Rex');
const cat: Animal = new Cat('Tom');

makeSoundAndMove(dog);
makeSoundAndMove(cat);  