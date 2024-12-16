### What is the Facade Design Pattern?
The Facade Design Pattern is a **structural pattern** that provides a simplified, high-level interface to interact with a complex subsystem.
It hides the complexity of the subsystem from clients and promotes loose coupling between them.
---------
### **Key Benefits**
- Simplifies the client interface to the subsystem.
- Reduces dependencies and tight coupling.
- Makes the system easier to understand and maintain.
---------

### **When to use the Facade Design Pattern?**

- When you want to provide a simple interface to a complex subsystem.
- When you want to decouple the client from the subsystem.
- When you want to reduce dependencies between the client and the subsystem.
- When you want to organize a subsystem into layers.
- When you want to define an entry point to each level of a subsystem.
---------

### Example of Facade Design Pattern in TypeScript

#### **Subsystem Components**
```typescript
// Amplifier.ts
export class Amplifier {
    turnOn(): void {
        console.log("Amplifier is ON");
    }
    setVolume(level: number): void {
        console.log(`Volume set to ${level}`);
    }
}

// DVDPlayer.ts
export class DVDPlayer {
    turnOn(): void {
        console.log("DVD Player is ON");
    }
    playMovie(movie: string): void {
        console.log(`Playing movie: ${movie}`);
    }
}

// Projector.ts
export class Projector {
    turnOn(): void {
        console.log("Projector is ON");
    }
    setWideScreenMode(): void {
        console.log("Projector in widescreen mode");
    }
}
```

#### **Facade**
```typescript
export class HomeTheaterFacade {
    private amplifier: Amplifier;
    private dvdPlayer: DVDPlayer;
    private projector: Projector;

    constructor(amplifier: Amplifier, dvdPlayer: DVDPlayer, projector: Projector) {
        this.amplifier = amplifier;
        this.dvdPlayer = dvdPlayer;
        this.projector = projector;
    }

    watchMovie(movie: string): void {
        console.log("Preparing to watch a movie...");
        this.amplifier.turnOn();
        this.amplifier.setVolume(10);
        this.projector.turnOn();
        this.projector.setWideScreenMode();
        this.dvdPlayer.turnOn();
        this.dvdPlayer.playMovie(movie);
        console.log("Enjoy the movie!");
    }
}
```

#### **Client**
```typescript
import { Amplifier, DVDPlayer, Projector } from "./SubsystemComponents";
import { HomeTheaterFacade } from "./Facade";

const amplifier = new Amplifier();
const dvdPlayer = new DVDPlayer();
const projector = new Projector();

const homeTheater = new HomeTheaterFacade(amplifier, dvdPlayer, projector);
homeTheater.watchMovie("Inception");
```

#### **Output**
```
Preparing to watch a movie...
Amplifier is ON
Volume set to 10
Projector is ON
Projector in widescreen mode
DVD Player is ON
Playing movie: Inception
Enjoy the movie!
``` 
---------

## Advantages of Facade Pattern
- **Simplified Interface**: Clients interact with a single, high-level interface.
- **Loose Coupling**: Changes in the subsystem do not affect the client code.
- **Improved Maintainability**: Complexity is hidden behind the facade.
---------

## Disadvantages
- **Hidden Features**: Advanced functionality of the subsystem may not be accessible.
- **Overhead**: If the facade is not well-designed, it can become an unnecessary layer.
