import {Cart} from "./Cart";
import {Payment} from "./Payment";
import {Notification} from "./Notification";
import {User} from "./User";
import {Product} from "./Product";


class ProcessFacade {

    constructor(
        private cart: Cart,
        private payment: Payment,
        private notification: Notification,
        private user: User,
        private product: Product,
    ) {
    }

    processOrder() {
        this.payment.effectPayment();
        this.cart.effectCart();
        this.notification.sendNotification();
        this.user.effectUser();
        this.product.effectProduct();
    }
}

const processFacade = new ProcessFacade(
    new Cart(),
    new Payment(),
    new Notification(),
    new User(),
    new Product()
);
export default processFacade;
