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

    changeYear(year: number): void {
        this.carDetails.year = year;
    }
}

// Client code demonstrating the prototype pattern
const carDetails = { model: "Tesla Model S", year: 2023 };

const originalCar = new Car(carDetails);
originalCar.showDetails();

// Cloning the original car using the prototype pattern
const clonedCar = originalCar.clone() as Car;
clonedCar.showDetails();
console.log(clonedCar === originalCar); // Output: false

originalCar.changeYear(2003);
clonedCar.changeYear(2025);

// Displaying the details of the original car
originalCar.showDetails();
clonedCar.showDetails();