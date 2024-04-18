class Customer {
    constructor(private _firstName: string, private _lastName: string) {}

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(v: string) {
        this._firstName = v;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(v: string) {
        this._lastName = v;
    }
}

let myCustomer = new Customer('Martin', 'Dixon');

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
