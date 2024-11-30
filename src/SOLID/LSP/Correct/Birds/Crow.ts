import { IFlyingBirds } from "../Types/IFlyingBirds";

export class Crow extends IFlyingBirds {
    public fly(): void {
        console.log("Crow is flying");
    }

    public eat(): void {
        console.log("Crow is eating");
    }
}