
import { IBird } from "../Types/IBird";

export class Penguin extends IBird {
    eat(): void {
        console.log("Penguin is eating");
    }
}