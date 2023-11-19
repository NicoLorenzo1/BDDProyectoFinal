export class Login {
    ci: number;
    password: string;

    constructor(ci: number, password: string) {
        this.ci = ci;
        this.password = password;
    }
}