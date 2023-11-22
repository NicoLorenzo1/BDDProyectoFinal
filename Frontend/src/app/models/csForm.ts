export class csForm {
    ci: number;
    fch_Emision: Date
    fch_Vencimiento: Date
    comprobante: string

    constructor(ci: number, fch_Emision: Date, fch_Vencimiento: Date, comprobante: string) {
        this.ci = ci;
        this.fch_Emision = fch_Emision;
        this.fch_Vencimiento = fch_Vencimiento;
       this.comprobante = comprobante
    }
}