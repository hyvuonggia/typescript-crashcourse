class Customer {
    _firstName: string;
    _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
}

let myCustomer = new Customer('Martin', 'Dixon');

console.log(myCustomer._firstName);
console.log(myCustomer._lastName);
