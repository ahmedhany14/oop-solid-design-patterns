## Prototype Pattern Explanation

The **Prototype Pattern** is used to create a new object based on an existing object, known as the prototype. This is
beneficial when the creation of new objects is costly or when we need to create similar objects quickly by copying an
existing one.

### Key Concepts:

- **Prototype Interface**: The interface defines a `clone()` method that will be implemented by the concrete prototype.
- **Concrete Prototype**: The class that implements the `clone()` method to return a copy of itself.
- **Client**: The part of the system that interacts with prototypes to obtain cloned objects.

### Why use Prototype Pattern?

- **Efficiency**: When the process of creating a new object is expensive or requires a lot of computation.
- **Customization**: Allows creating new objects based on an existing object, making it easier to modify or extend the
  object in new ways without altering the prototype.
- **Avoiding Redundancy**: Reduces the need to create new objects from scratch when similar objects already exist.

## Code Example

Here’s a simple TypeScript implementation of the **Prototype Pattern**.

### Prototype Interface

```typescript
// Prototype interface with the clone method
interface Prototype {
    clone(): Prototype;
}

// car interface
interface CarDetains {
    model: string;
    year: number;
}

// Concrete Prototype that implements the clone method
class Car implements Prototype {
    
    private carDetails: CarDetains;

    constructor(carDetails: CarDetains) {
        this.carDetails = carDetails;
    }

    // Clone method that returns a new instance of the Car with the same properties
    clone(): Prototype {
      const clone = Object.create(this);
      clone.carDetails = { ...this.carDetails };
      return clone;
    }

    // Display details of the car
    showDetails(): void {
        console.log(`Car: ${this.carDetails.model}, Year: ${this.carDetails.year}`);
    }
}

// Client code demonstrating the prototype pattern
const carDetails = { model: "Tesla Model S", year: 2023 };

const originalCar = new Car(carDetails);
originalCar.showDetails();

// Cloning the original car using the prototype pattern
const clonedCar = originalCar.clone() as Car;
clonedCar.showDetails();
```

##### in this example
- We have a `Prototype` interface that defines the `clone()` method.
- The `Car` class implements the `Prototype` interface and provides a `clone()` method that creates a new instance of the `Car` class with the same properties.
- The client code creates an original `Car` object and then clones it using the `clone()` method.

### Usage

* ***Use Case :*** The Prototype Pattern is ideal for scenarios where you need to create many objects that share the same structure but may have slight variations. Instead of manually creating each object, you can use an existing object as a prototype and clone it with the required
* ***Deep vs. Shallow Copy :*** The example above performs a ***shallow copy***. If the object contains references to other objects, you may need to implement ***deep cloning*** to avoid shared references between the original and the clone.
* ***Real-World Example :*** You might use the Prototype Pattern in applications like game development, where many entities (such as enemies, weapons, or vehicles) share common properties but require slight modifications for each instance.
