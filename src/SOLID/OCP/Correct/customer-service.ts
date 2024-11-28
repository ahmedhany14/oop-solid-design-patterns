/*
Open-Closed Principle

the Open-Closed Principle states that a class should be open for extension but closed for modification.

open for extension means that we should be able to add new functionality to the class without changing the existing code.

close for modification means that we should not change the existing (tested, reviewed, and working) code.

*/

import { ICustomer } from "./ICustomer";
import * as CustomerTypes from "./Customers/customer-types";

class CustomerService {
    getDiscount(customer: ICustomer): number {
        return customer.getDiscount();
    }
}

const regular = new CustomerTypes.Regular();
const premium = new CustomerTypes.Premium();

const customerService = new CustomerService();

console.log("regular discount: ", customerService.getDiscount(regular));
console.log("premium discount: ", customerService.getDiscount(premium));


const vip = new CustomerTypes.VIP();

console.log("vip discount: ", customerService.getDiscount(vip));