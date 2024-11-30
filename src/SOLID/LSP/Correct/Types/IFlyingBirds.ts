import { IBird } from "./IBird";

export abstract class IFlyingBirds extends IBird {
    abstract fly(): void;
}