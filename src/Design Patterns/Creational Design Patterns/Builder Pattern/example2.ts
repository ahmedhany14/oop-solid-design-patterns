/*
in this example we will create a customer class with first name, last name, age, phone number, address and email
and we will create a builder class to build the customer object
*/

interface ICustomer {
    firstName: string;
    lastName: string;
    age: number;
    phone: string;
    address: string;
    email: string;
}

interface ICustomerBuilder {
    reset(): void;
    setFirstName(firstName: string): void;
    setLastName(lastName: string): void;
    setAge(age: number): void;
    setPhone(phone: string): void;
    setAddress(address: string): void;
    setEmail(email: string): void;
    build(): Customer;
}

class Customer implements ICustomer {

    constructor(
        public firstName: string = "",
        public lastName: string = "",
        public age: number = 0,
        public phone: string = "",
        public address: string = "",
        public email: string = ""
    ) { }

    public show() {
        console.log(`Customer: ${this.firstName} ${this.lastName} is ${this.age} years old, his phone number: ${this.phone}, his address: ${this.address}, his email: ${this.email}`);
    }
}

class customerBuilder implements ICustomerBuilder {
    private customer: Customer = new Customer();

    constructor() {
        this.reset();
    }

    reset(): void {
        this.customer = new Customer();
    }
    setFirstName(firstName: string) {
        this.customer.firstName = firstName;
    }

    setLastName(lastName: string) {
        this.customer.lastName = lastName;
    }

    setAge(age: number) {
        this.customer.age = age;
    }

    setPhone(phone: string) {
        this.customer.phone = phone;
    }

    setAddress(address: string) {
        this.customer.address = address;
    }

    setEmail(email: string) {
        this.customer.email = email;
    }

    build() {
        const result = this.customer;
        this.reset();
        return result;
    }
}

class customerDirector {
    private builder: ICustomerBuilder;

    constructor(builder: ICustomerBuilder) {
        this.builder = builder;
    }

    buildCustomer(firstName: string, lastName: string, age: number, phone: string, address: string, email: string) {
        this.builder.setFirstName(firstName);
        this.builder.setLastName(lastName);
        this.builder.setAge(age);
        this.builder.setPhone(phone);
        this.builder.setAddress(address);
        this.builder.setEmail(email);
        return this.builder.build();
    }
}

const buildCustomer = new customerBuilder();
const customerdirector = new customerDirector(buildCustomer);

const finalCustomer = customerdirector.buildCustomer("John", "Doe", 30, "123456789", "USA", "john@hotmail.com");

finalCustomer.show();