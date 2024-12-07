interface ICarDetails {
    name: string;
    model: string;
    price: number;
    year: number;

    getCarDetails(): string;
}


class bmw implements ICarDetails {

    constructor(
        public name: string = 'BMW',
        public model: string = 'X5',
        public price: number = 100000,
        public year: number = 2021
    ) { }

    getCarDetails(): string {
        return `Car Name: ${this.name}, Car Model: ${this.model}, Car Price: ${this.price}$, Car Year: ${this.year}`;
    }
}

class audi implements ICarDetails {

    constructor(
        public name: string = 'Audi',
        public model: string = 'Q7',
        public price: number = 120000,
        public year: number = 2021
    ) { }

    getCarDetails(): string {
        return `Car Name: ${this.name}, Car Model: ${this.model}, Car Price: ${this.price}$, Car Year: ${this.year}`;
    }
}

class porsche implements ICarDetails {

    constructor(
        public name: string = 'Borsche',
        public model: string = 'Cayenne',
        public price: number = 150000,
        public year: number = 2021
    ) { }

    getCarDetails(): string {
        return `Car Name: ${this.name}, Car Model: ${this.model}, Car Price: ${this.price}$, Car Year: ${this.year}`;
    }
}

class CarFactory {
    private static instance: CarFactory;
    private repositories: Map<string, ICarDetails>;
    private constructor(
        private Bmw: ICarDetails = new bmw(),
        private Audi: ICarDetails = new audi(),
        private Porsche: ICarDetails = new porsche()
    ) {
        this.repositories = new Map<string, ICarDetails>();
        this.repositories.set('BMW', this.Bmw);
        this.repositories.set('Audi', this.Audi);
        this.repositories.set('Porsche', this.Porsche);
    }

    static getInstance(): CarFactory { // make it singleton to avoid creating multiple instances, to save memory
        if (!CarFactory.instance) {
            CarFactory.instance = new CarFactory();
        }
        return CarFactory.instance;
    }

    public getCar(carName: string): ICarDetails {
        const repository = this.repositories.get(carName);
        if (!repository) {
            throw new Error('Invalid Car Name');
        }
        return repository;
    }
}

const carFactory = CarFactory.getInstance();

const bmwCar = carFactory.getCar('BMW');
const audiCar = carFactory.getCar('Audi');
const porscheCar = carFactory.getCar('Porsche');
console.log(bmwCar.getCarDetails());
console.log(audiCar.getCarDetails());
console.log(porscheCar.getCarDetails());