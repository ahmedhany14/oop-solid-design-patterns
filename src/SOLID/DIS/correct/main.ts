import { IPayment } from "./types/IPayment";

import { INotification } from "./types/INotification";

import { Email } from "./NotificationService/Email";
import { SMS } from "./NotificationService/SMS";
import { PayPal } from "./PaymentService/PayPal";
import { Stripe } from "./PaymentService/Stripe";

/*
Dependency Inversion Principle (DIP):
    - High-level modules should not depend on low-level modules. Both should depend on abstractions.
    - Abstractions should not depend on details. Details should depend on abstractions.
*/

class Order { // high-level module depend on abstraction
    constructor(
        private payment: IPayment, // low-level module depend on abstraction
        private notification: INotification // low-level module depend on abstraction
    ) { }
    public processOrder(): void {
        this.payment.processPayment();
        this.notification.sendNotification();
    }
}

// first order with PayPal and Email
const order1 = new Order(new PayPal(), new Email());
order1.processOrder();


// second order with Stripe and SMS
const order2 = new Order(new Stripe(), new SMS());
order2.processOrder();


// as you can see, we can easily change the payment method and notification method without changing the Order class and there is no dependency on the concrete classes of PaymentService and NotificationService
