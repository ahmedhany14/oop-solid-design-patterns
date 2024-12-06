# Builder Design Pattern

The **Builder Design Pattern** is a **Creational Design Pattern** used to construct complex objects step by step. Instead of creating an object in a single constructor call, the Builder pattern constructs the object incrementally, offering flexibility and readability.

---

## Why Use the Builder Pattern?

The Builder Pattern is useful when:
- An object has many optional or required parameters.
- There is a need for complex construction logic that varies across different contexts.

### Benefits:
- **Readability**: Simplifies object creation with method chaining.
- **Flexibility**: Allows for step-by-step customization of objects.
- **Immutability**: Enables controlled object creation for immutable designs.

---

## Core Components

1. **Product**: The complex object being constructed.
2. **Builder Interface**: Defines methods to set individual parts of the product.
3. **Concrete Builder**: Implements the interface and assembles the product.
4. **Director** *(Optional)*: Orchestrates the building process using the builder.

---

## Implementation Example (TypeScript)
Here is an example of the Builder Pattern for creating a Car object

### Product: `Car`

```typescript
class Car {
  engine: string;
  wheels: number;
  gps: boolean;
  color?: string;

  toString(): string {
    return `Car [Engine=${this.engine}, Wheels=${this.wheels}, GPS=${this.gps}, Color=${this.color || "Default"}]`;
  }
}
```
### Builder Interface: `CarBuilder`

```typescript

interface ICarBuilder {
  setEngine(engine: string): this;
  setWheels(wheels: number): this;
  setGPS(gps: boolean): this;
  setColor(color: string): this;
  build(): Car;
}

````


### Builder: CarBuilder

```typescript
class CarBuilder implements ICarBuilder {
  private car: Partial<Car> = {};

  setEngine(engine: string): this {
    this.car.engine = engine;
    return this;
  }

  setWheels(wheels: number): this {
    this.car.wheels = wheels;
    return this;
  }

  setGPS(gps: boolean): this {
    this.car.gps = gps;
    return this;
  }

  setColor(color: string): this {
    this.car.color = color;
    return this;
  }

  build(): Car {
    if (!this.car.engine || !this.car.wheels || this.car.gps === undefined) {
      throw new Error("Missing required properties to build the car.");
    }
    return this.car as Car;
  }
}
```

### main.ts

```typescript
const sportsCar = new CarBuilder()
  .setEngine("V8 Engine")
  .setWheels(4)
  .setGPS(true)
  .setColor("Red")
  .build();

console.log(sportsCar.toString());
```


## When to Use the Builder Pattern?
#### Use the Builder Pattern when:

* An object has many optional or mandatory parameters.
* Complex objects need to be constructed with a clear and flexible process.
* You want to maintain readability and avoid long constructor calls.

## Advanced Usage
#### To extend functionality:

* Add new methods in the Builder (e.g., setTransmission).
* Use multiple concrete builders for different product variations.
* Implement the Director to standardize construction sequences.
