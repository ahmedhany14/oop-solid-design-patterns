# Singleton Pattern

## Overview

The **Singleton Pattern** is a creational design pattern that ensures a class has only one instance throughout the application's lifecycle. It provides a global access point to that instance.

## Key Features
- **Single Instance**: Ensures only one object of the class exists.
- **Centralized Control**: Useful for managing shared resources, like configurations or database connections.
- **Memory Efficiency**: Reduces resource usage by reusing the same instance.

---

## How It Works
1. **Private Constructor**: Prevents instantiation from outside the class.
2. **Static Instance Variable**: Stores the single instance of the class.
3. **Static Access Method**: Provides a global way to access the instance.

---

## Implementation in TypeScript

```typescript
class Singleton {
  // Static variable to hold the single instance
  private static instance: Singleton;

  // Private constructor to prevent external instantiation
  private constructor() {
    console.log("Singleton Instance Created!");
  }

  // Static method to get or create the single instance
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(); // Create instance if not already created
    }
    return Singleton.instance;
  }

  public sayHello(): void {
    console.log("Hello from Singleton!");
  }
}

// Usage
const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();

obj1.sayHello();

console.log(obj1 === obj2); // Output: true
```

## When to Use?

The Singleton pattern is ideal for scenarios where a single instance of a class is sufficient, such as:
- **Database Connections**
- **Configuration Settings**
- **Logging Mechanisms**

---

## Advantages and Disadvantages

### Advantages
- Reduces memory overhead by sharing a single instance.
- Centralizes control over the class's behavior.
- Ensures consistency in accessing shared resources.

### Disadvantages
- Can complicate **unit testing** due to shared state.
- May lead to **tight coupling** if overused.
- Requires careful handling in **multithreaded environments** to avoid race conditions.
