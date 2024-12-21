# Bridge Design Pattern in TypeScript

## Overview

The **Bridge Design Pattern** is a structural design pattern that separates an abstraction from its implementation,
allowing both to evolve independently. This is especially useful when you have multiple dimensions of variation, such as
different shapes that can be drawn using various rendering methods.

This repository demonstrates the Bridge Pattern using **TypeScript**, showcasing how to decouple abstraction and
implementation for more flexible and maintainable code.

---

## Key Concepts

1. **Abstraction**: Defines a high-level interface (e.g., `Shape`) that delegates implementation-specific work to an
   Implementor.
2. **Refined Abstraction**: Extends the abstraction to include more advanced features (e.g., `Circle`).
3. **Implementor**: An interface that defines the implementation-specific methods (e.g., `DrawingAPI`).
4. **Concrete Implementor**: Specific implementations of the interface (e.g., `CanvasAPI`, `SVGAPI`).
5. **Client**: Uses the abstraction to interact with the implementation (e.g., `Client`).

---

## Example in TypeScript

### 1. `DrawingAPI` (Implementor)

```typescript
interface DrawingAPI {
    drawCircle(x: number, y: number, radius: number): void;
}
```

### 2. `CanvasAPI` and `SVGAPI` (Concrete Implementors)

```typescript
class CanvasAPI implements DrawingAPI {
    drawCircle(x: number, y: number, radius: number): void {
        console.log(`Drawing circle on Canvas at (${x}, ${y}) with radius ${radius}`);
    }
}

class SVGAPI implements DrawingAPI {
    drawCircle(x: number, y: number, radius: number): void {
        console.log(`Drawing circle in SVG format at (${x}, ${y}) with radius ${radius}`);
    }
}
```

### 3. `Shape` (Abstraction)

```typescript
abstract class Shape {
    protected drawingAPI: DrawingAPI;

    constructor(drawingAPI: DrawingAPI) {
        this.drawingAPI = drawingAPI;
    }

    abstract draw(): void;

    abstract resize(factor: number): void;
}
```

### 4. `Circle` (Refined Abstraction)

```typescript

class Circle extends Shape {
    private x: number;
    private y: number;
    private radius: number;

    constructor(x: number, y: number, radius: number, drawingAPI: DrawingAPI) {
        super(drawingAPI);
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    draw(): void {
        this.drawingAPI.drawCircle(this.x, this.y, this.radius);
    }

    resize(factor: number): void {
        this.radius *= factor;
    }
}
```

### 5. `Client`

```typescript
const canvasAPI = new CanvasAPI();
const svgAPI = new SVGAPI();

const circle1 = new Circle(10, 20, 5, canvasAPI);
const circle2 = new Circle(15, 25, 10, svgAPI);

circle1.draw(); // Drawing using CanvasAPI
circle2.draw(); // Drawing using SVGAPI

circle1.resize(2); // Resize circle
circle1.draw(); // Redraw after resizing
```

---

## Usage

Use the Bridge Pattern when:

- You want to avoid a permanent binding between an abstraction and its implementation.
- Both the abstractions and implementations should be extensible by subclassing.
- Changes in the implementation should not affect clients (open-closed principle).
- You have multiple dimensions of variation that can be decoupled.

---

## Benefits of the Bridge Pattern

- **Decouples Abstraction and Implementation**: Allows both to evolve independently.
- **Open-Closed Principle**: New abstractions and implementations can be added without modifying existing code.
- **Separation of Concerns**: Decouples abstraction and implementation, allowing them to change independently.
- **Flexibility**: Easily add new abstractions `(e.g., new shapes)` or new implementations
  `(e.g., new drawing methods)`.
- **Scalability**: Reduces code duplication and enhances maintainability.