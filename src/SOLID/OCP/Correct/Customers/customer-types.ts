import { ICustomer } from "../ICustomer";

export class Regular implements ICustomer {
    getDiscount(): number {
        return 10;
    }
}


export class Premium implements ICustomer {
    getDiscount(): number {
        return 20;
    }
}

//-----------------------------------
// let's imagine that we have a new customer type called "VIP"

export class VIP implements ICustomer {
    getDiscount(): number {
        return 30;
    }
}