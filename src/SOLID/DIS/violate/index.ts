class PatmentService {
    processPayment() {
        /*
            Logic to process payment
        */
    }
}

class NotificationService {
    sendNotification() {
        /*
            Logic to send notification
        */
    }
}


class OrderService {
    constructor(
        private paymentService: PatmentService,
        private notificationService: NotificationService
    ) { }

    placeOrder() {
        this.paymentService.processPayment();
        this.notificationService.sendNotification();
    }
}

/*
This is a violation of the Dependency Inversion Principle because the OrderService class is directly dependent on the PatmentService and NotificationService classes.
What if there is another payment service or notification service that we want to use? We would have to modify the OrderService class to accommodate the new service.
*/