
// Component
interface Employee {
    name: string;
    salary: number;
    getName(): string;
    getSalary(): number;
    getRoles(): string;
}


// Leafs
class Developer implements Employee {
    constructor(public name: string, public salary: number) { }

    getName(): string {
        return this.name;
    }

    getSalary(): number {
        return this.salary;
    }

    getRoles(): string {
        return 'Developer';
    }
}

class Designer implements Employee {
    constructor(public name: string, public salary: number) { }

    getName(): string {
        return this.name;
    }

    getSalary(): number {
        return this.salary;
    }

    getRoles(): string {
        return 'Designer';
    }
}

// Composite
interface IManager {
    Employees: Employee[];
    add(employee: Employee): void;
    remove(employee: Employee): void;
    getEmployees(): Employee[];
}

class Manager implements Employee, IManager {
    public Employees: Employee[] = [];

    constructor(public name: string, public salary: number) { }

    getSalary(): number {
        return this.salary;
    }

    getName(): string {
        return this.name;
    }

    getRoles(): string {
        return 'Manager';
    }

    add(employee: Employee): void {
        this.Employees.push(employee);
    }

    remove(employee: Employee): void {
        const index = this.Employees.indexOf(employee);
        this.Employees.splice(index, 1);
    }


    getEmployees(): Employee[] {
        return this.Employees;
    }
}

const developer1 = new Developer('John Doe', 12000);
const developer2 = new Developer('Jane Doe2', 11000);

const designer1 = new Designer('Mike Doe', 10000);
const designer2 = new Designer('Chris Doe', 9000);

const manager = new Manager('Manager Doe', 25000);

manager.add(developer1);
manager.add(developer2);
manager.add(designer1);
manager.add(designer2);

console.log(manager.getEmployees().map(employee => {
    return {
        name: employee.getName(),
        salary: employee.getSalary(),
        role: employee.getRoles()
    }
}));

