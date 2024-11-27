/*
Encapsulation is the bundling of data with the methods that operate on that data,
or the restricting of direct access to some of an object's components.

it promotes security, maintainability of the code and hiding data from the outside world.
*/

// BankAccount class, have deposit and withdraw methods

class BankAccount {
    /*
    private keyword is used to make the property private and only accessible within the class.
    public keyword is used to make the property public and accessible from outside the class.
    protected keyword is used to make the property protected and accessible within the class and its subclasses (inheritance).
    */

    private balance: number = 0;

    constructor(initbalancce: number) {
        this.balance = initbalancce;
    }

    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        } else {
            console.log('Amount should be greater than 0');
        }
    }

    public withdraw(amount: number): void {
        if (amount > this.balance) {
            this.balance -= amount;
        }

    }

    public getBalance(): number {
        return this.balance;
    }
}


let account = new BankAccount(1000);

account.deposit(100);
console.log(account.getBalance()); // 1100

//account.balance // error: Property 'balance' is private and only accessible within class 'BankAccount'.
