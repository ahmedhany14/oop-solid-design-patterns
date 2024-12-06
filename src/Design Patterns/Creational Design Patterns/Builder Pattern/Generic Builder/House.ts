import { GenericBuilder } from "./builder.gen";

interface Ihouse {
    area: number;
    rooms: number;
    floors: number;
    garden?: boolean;
}

class HouseService {
    constructor(public house: Ihouse) { }

    public show() {
        console.log(`House: ${this.house.area}m2 with ${this.house.rooms} rooms and ${this.house.floors} floors`);
    }
}

const houseBuilder = new GenericBuilder<Ihouse>();

const house = houseBuilder
    .set("area", 200)
    .set("rooms", 4)
    .set("floors", 2)
    .set("garden", true)
    .build();

const houseService = new HouseService(house);

houseService.show();