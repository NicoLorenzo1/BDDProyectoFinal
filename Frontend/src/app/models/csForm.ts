export class csForm {
    ci: number;
    fch_Emision: Date
    fch_Vencimiento: Date
    comprobante: Blob

    constructor(ci: number, fch_Emision: Date, fch_Vencimiento: Date, comprobante: Blob) {
        this.ci = ci;
        this.fch_Emision = fch_Emision;
        this.fch_Vencimiento = fch_Vencimiento;
       this.comprobante = comprobante
    }
}