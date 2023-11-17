export class Register {
    _id?: number;
    name: string;
    lastName: string;
    email: string;
    password: string;
    confirmPass: string;

    constructor(name: string, lastName: string, email: string, password: string, confirmPass: string){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.confirmPass = confirmPass;
    }
}