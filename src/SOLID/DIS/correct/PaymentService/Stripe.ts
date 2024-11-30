import { IPayment } from "../types/IPayment";

export class Stripe implements IPayment {
    processPayment(): void {
        /*
            logic to process payment
        */
    }
}