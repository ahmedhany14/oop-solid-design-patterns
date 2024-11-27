
class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    display() { //will override the display method of User class
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Admin extends User {
    role: string;

    constructor(name: string, age: number, role: string) {
        super(name, age);
        this.role = role;
    }

    display() { // will override the display method of User class
        super.display();
        console.log(`Role: ${this.role}`);
    }
}

class SuperAdmin extends Admin {
    permission: string;

    constructor(name: string, age: number, role: string, permission: string) {
        super(name, age, role);
        this.permission = permission;
    }

    display() {
        super.display();
        console.log(`Permission: ${this.permission}`);
    }
}

const user = new User('John', 30);

const admin = new Admin('Jane', 25, 'Admin');

const superAdmin = new SuperAdmin('Doe', 35, 'Super Admin', 'Full');

user.display();
admin.display();
superAdmin.display();