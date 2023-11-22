import { Request, Response } from 'express';
import Gender from "../models/gender";
import { ErrorCodes } from '../helpers/error-codes';
import { QueryTypes } from 'sequelize';
import db from '../db/config';

export const postGenderDate = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        if (body !== null && 'date' in body && 'ci' in body) {
            console.log("llego a if con " + body.ci + body.date)
            const gender = await Gender.build({
                ci: body.ci,
                date: new Date(body.date)
            });
            await gender.save();
            res.status(201).json({ message: 'Gender saved successfully' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: ErrorCodes.INTERNAL_SERVER_ERROR });
    }
}

export const checkDate = async (req: Request, res: Response) => {
    const { body } = req;
    console.log("backend fecha")
    try {
        const result = await Gender.findOne({
            where: db.where(
                db.fn('DATE', db.col('Fch_Agenda')),
                '=',
                db.fn('DATE', new Date(body.selectedDate))
            ),
        });
        res.json(!!result);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: ErrorCodes.INTERNAL_SERVER_ERROR });
    }
}

