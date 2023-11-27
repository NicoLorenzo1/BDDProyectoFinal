import { Request, Response } from 'express';
import { ErrorCodes } from '../helpers/error-codes';
import db from '../db/config';
import healthCard from '../models/healthCard';


export const postHealthCard = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        if (body !== null) {

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

//trae un carnet de salud por su ci
export const getHealthCard = async (req: Request, res: Response) => {
    const ci = req.params.ci;
    try {
        const result = await healthCard.findOne({
            where: {
                ci: ci,
            },
        });
        res.json(result?.dataValues);

    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: ErrorCodes.INTERNAL_SERVER_ERROR });
    }
}

export const usersNotForm = async (req: Request, res: Response) => {
    try {
        const users = await db.query(`SELECT Nombre, Apellido, CI, Teléfono FROM Funcionarios AS f WHERE NOT EXISTS (SELECT * FROM Carnet_Salud AS c WHERE c.ci = f.ci)`);
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: ErrorCodes.INTERNAL_SERVER_ERROR });
    }
};