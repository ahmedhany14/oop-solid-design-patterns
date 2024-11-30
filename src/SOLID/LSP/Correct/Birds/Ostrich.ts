import { IFlyingBirds } from "../Types/IFlyingBirds";


export class Ostrich extends IFlyingBirds {
    public fly(): void {
        console.log("Ostrich is flying");
    }

    public eat(): void {
        console.log("Ostrich is eating");
    }
}