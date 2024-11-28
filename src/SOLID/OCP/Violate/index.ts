/*
suppose we have a shop system that has a discount system
regular customer get 10% discount
premium customer get 20% discount
*/

class Shop {
    constructor(private customerType: string) { }

    public calculateDiscount() {
        if (this.customerType === 'regular') {
            return 10;
        }
        else if (this.customerType === 'premium') {
            return 20;
        }
        /*
        here we have a problem, if we want to add a new customer type, we need to change this class
        and this violates the Open/Closed Principle
        */

    }
}

const shop = new Shop('regular');

console.log(shop.calculateDiscount());