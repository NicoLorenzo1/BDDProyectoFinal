import { Request, Response } from 'express';
import { ErrorCodes } from '../helpers/error-codes';
import db from '../db/config';
import healthCard from '../models/healthCard';


//hacer metodo para guardar fecha de agenda en base de datos pasar numero, cedula y fecha  (hay q agregar numero en front y pasarlo a back)
//no hace post, no ejecuta este metodo, llega hasta el service y luego no ejecuta nada 

export const postHealthCard = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        if (body !== null) {
            console.log("##################################################llego a if con " + body.ci + body.issueDate + body.expirationDate + body.proof)

            const issueDate = new Date(body.issueDate);
            const expireDate = new Date(body.expireDate);

            const gender = await healthCard.build({
                ci: body.ci,
                issueDate: new Date(body.issueDate),
                expireDate: new Date(body.expirationDate),
                proof: body.proof
            });
            await gender.save();
            res.status(201).json({ message: 'Form saved successfully' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: ErrorCodes.INTERNAL_SERVER_ERROR });
    }
}