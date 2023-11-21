import { Request, Response } from 'express';
import Gender from "../models/gender";
import { ErrorCodes } from '../helpers/error-codes';
import { QueryTypes } from 'sequelize';
import db from '../db/config';


//hacer metodo para guardar fecha de agenda en base de datos pasar numero, cedula y fecha  (hay q agregar numero en front y pasarlo a back)
//no hace post, no ejecuta este metodo, llega hasta el service y luego no ejecuta nada 

export const postGenderDate = async (req: Request, res: Response) => {
    console.log("prueba####################");

    const { body } = req;
    try {
        if (body !== null && 'date' in body && 'ci' in body) {
            const gender = await Gender.build({
                ci: body.ci,
                date: body.date,
            });
            await gender.save();
            res.status(201).json({ message: 'Gender saved successfully' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: ErrorCodes.INTERNAL_SERVER_ERROR });
    }
}




