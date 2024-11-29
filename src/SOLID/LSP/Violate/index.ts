/*
Liskov Substitution Principle (LSP):
    The Liskov Substitution Principle states that objects of a superclass should be replaceable with objects of its subclasses without affecting the functionality of the program.

Let's say we have a Bird class with two methods fly and eat. We have three subclasses Crow, Ostrich, and Penguin.
Crow can fly and eat, Ostrich can eat but cannot fly, and Penguin can eat but cannot fly. 
So, we have implemented the fly method in the Crow class and left it empty in the Ostrich and Penguin classes. 
But, according to the Liskov Substitution Principle, we should not implement the fly method in the Ostrich and Penguin classes because they cannot fly. 
So, we are violating the Liskov Substitution Principle here.
*/

abstract class Bird{
    abstract fly(): void;
    abstract eat(): void;
}

class Crow extends Bird{
    fly(): void {
        console.log('Crow is flying');
    }

    eat(): void {
        console.log('Crow is eating');
    }
}

class Ostrich extends Bird{
    fly(): void {
        throw new Error('Ostrich cannot fly');
    }

    eat(): void {
        console.log('Ostrich is eating');
    }
}

class Penguin extends Bird{
    fly(): void {
        throw new Error('Penguin cannot fly'); // change in the base class behavior
    }

    eat(): void {
        console.log('Penguin is eating');
    }
}


const crow = new Crow();
const ostrich = new Ostrich();
const penguin = new Penguin();

crow.fly();
crow.eat();

ostrich.fly();
ostrich.eat();

penguin.fly(); // This will throw an error because penguin cannot fly, that's why we are violating the Liskov Substitution Principle
penguin.eat();