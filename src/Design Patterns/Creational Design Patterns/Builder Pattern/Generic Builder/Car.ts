import { GenericBuilder } from "./builder.gen";

interface Icar {
    model: string;
    year: number;
    engine: string;
    speed?: number;
}

class CarService {
    constructor(public car: Icar) { }

    public show() {
        console.log(`Car: ${this.car.model} ${this.car.year} has ${this.car.engine} engine`);
    }
}

const carBuilder = new GenericBuilder<Icar>();
const car = carBuilder
    .set("model", "BMW")
    .set("year", 2020)
    .set("engine", "V8")
    .set("speed", 200)
    .build();

const carService = new CarService(car);

carService.show();