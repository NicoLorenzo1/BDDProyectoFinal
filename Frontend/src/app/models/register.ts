export class Register {
    _id?: number;
    name: string;
    lastName: string;
    ci: number;
    birthdate: Date
    phone: number
    adress: string;
    email: string
    password: string;
    confirmPass: string;

    constructor(name: string, lastName: string, ci: number, birthdate: Date, adress: string, phone: number, email: string, password: string, confirmPass: string) {
        this.name = name;
        this.lastName = lastName;
        this.ci = ci;
        this.birthdate = birthdate;
        this.adress = adress;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.confirmPass = confirmPass;
    }
}