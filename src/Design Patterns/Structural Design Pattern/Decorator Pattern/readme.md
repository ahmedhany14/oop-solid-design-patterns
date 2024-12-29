# Decorator Pattern

The **Decorator Pattern** is a structural design pattern that allows you to dynamically add behavior or responsibilities to an object without altering its code. This pattern follows the **Open/Closed Principle**, where classes are open for extension but closed for modification.

---

##  What is the Decorator Pattern?

The **Decorator Pattern** wraps an object in another object (decorator) to add new functionality dynamically. Instead of modifying the original object or creating multiple subclasses, you can achieve flexibility by layering behaviors through decorators.

---

## Key Concepts:
1. **Component**: The interface or abstract class that defines the basic behavior.
2. **Concrete Component**: The base implementation of the component.
3. **Decorator**: An abstract class or interface that wraps the component and forwards requests.
4. **Concrete Decorator**: Adds specific functionality to the component.

---

## Example in TypeScript: Coffee Shop 

Let's consider a coffee shop where you can order different types of coffee. The `Coffee` interface defines the basic behavior of a coffee. The `SimpleCoffee` class is a concrete implementation of the `Coffee` interface.

#### Coffee Interface (`Component`)
```typescript
interface Coffee {
    getCost(): number;
    getDescription(): string;
}
```

#### Simple Coffee (`Concrete Component`)
```typescript
class SimpleCoffee implements Coffee {
    getCost(): number {
        return 10;
    }

    getDescription(): string {
        return 'Simple Coffee';
    }
}
```

#### Coffee Decorator (`Decorator`)
```typescript
abstract class CoffeeDecorator implements Coffee {
    protected decoratedCoffee: Coffee;

    constructor(coffee: Coffee) {
        this.decoratedCoffee = coffee;
    }

    getCost(): number {
        return this.decoratedCoffee.getCost();
    }

    getDescription(): string {
        return this.decoratedCoffee.getDescription();
    }
}
```

#### Milk Decorator (`Concrete Decorator`)
```typescript

class MilkDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }

    getCost(): number {
        return this.decoratedCoffee.getCost() + 5;
    }

    getDescription(): string {
        return this.decoratedCoffee.getDescription() + ', Milk';
    }
}
```

#### Client Code
```typescript
const coffee = new SimpleCoffee();
const coffeeWithMilk = new MilkDecorator(coffee);

console.log(coffeeWithMilk.getDescription()); // Simple Coffee, Milk
console.log(coffeeWithMilk.getCost()); // 15
```
### Output
```
Simple Coffee, Milk
15
```
---

## Explanation

1. The `Coffee` interface defines the basic behavior of a coffee.
2. The `SimpleCoffee` class is a concrete implementation of the `Coffee` interface.
3. The `CoffeeDecorator` abstract class implements the `Coffee` interface and wraps the `Coffee` object.
4. The `MilkDecorator` class extends the `CoffeeDecorator` class and adds specific functionality to the component.

---

## Use Cases
1. **Extending Behavior**: Decorators allow you to add new behavior to an object without modifying its code.
2. **Flexible Design**: Decorators provide a flexible alternative to subclassing for extending functionality.
3. **Open/Closed Principle**: The Decorator Pattern follows the Open/Closed Principle, where classes are open for extension but closed for modification.

