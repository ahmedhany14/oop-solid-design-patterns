# Factory Pattern

The Factory Pattern is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created. This pattern promotes loose coupling by eliminating the need to bind application-specific classes into the code.

## Advantages

- **Encapsulation**: The Factory Pattern encapsulates the object creation process, making the code more modular and easier to maintain.
- **Loose Coupling**: By relying on interfaces or abstract classes, the pattern promotes loose coupling between the client and the concrete classes.
- **Scalability**: New service or product types can be added without changing the existing code, adhering to the Open/Closed Principle.

## Disadvantages

- **Complexity**: The pattern can introduce additional complexity by requiring a new set of subclasses for each service or product type.
- **Overhead**: May lead to an increase in the number of classes in the codebase.

## Use Cases

- **When the exact type of object to be created is determined at runtime.**
- **When the creation process involves complex logic that should not be duplicated across the codebase.**
- **When you want to provide a library of products and expose their creation through a common interface.**

## Example in TypeScript

### 1. Define an interface for the product

```typescript
interface Vehicle {
    getType(): string;
    startEngine(): void;
}
```

### 2. Implement concrete or repositories classes

```typescript
class Car implements Vehicle {
    getType(): string {
    return "Car";
    }
    
    startEngine(): void {
    console.log("The car engine is starting...");
    }
}

class Truck implements Vehicle {
    getType(): string {
    return "Truck";
    }
    
    startEngine(): void {
    console.log("The truck engine is starting...");
    }
}
```

### 3. Create the Factory class

```typescript
class VehicleFactory {
    private repositories: Map<string, Vehicle>;

    constructor(
        private car: Vehicle = new Car(),
        private truck: Vehicle = new Truck()
    ) {
        this.repositories = new Map<string, Vehicle>();
        this.repositories.set("car", this.car);
    }

    static createVehicle(type: string): Vehicle {
        const repository = this.repositories.get(type);
        if (!repository) throw new Error(`Repository ${type} not found`);
        return repository;
    }
}
```

### 4. Usage

```typescript
const factory = new VehicleFactory();
const car = VehicleFactory.createVehicle("car");
const truck = VehicleFactory.createVehicle("truck");
```


## Explanation

In this example, we have an interface `Vehicle` that defines the methods that all concrete classes must implement. We have two concrete classes, `Car` and `Truck`, that implement the `Vehicle` interface. The `VehicleFactory` class is responsible for creating instances of the concrete classes based on the type provided. The `createVehicle` method takes a type as an argument and returns an instance of the corresponding concrete class.