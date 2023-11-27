import { Request, Response } from 'express';
import Gender from "../models/gender";
import { ErrorCodes } from '../helpers/error-codes';
import { QueryTypes } from 'sequelize';
import db from '../db/config';
import Periodo from '../models/periodo';

export const postGenderDate = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        if (body !== null && 'date' in body && 'ci' in body) {
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


//trae la agenda por su ci
export const getGender = async (req: Request, res: Response) => {
    const ci = req.params.ci;
    try {
        const result = await Gender.findOne({
            where: {
                Ci: ci,
            },
        });
        if (result) {
            // Se encontró una agenda para el usuario
            res.json({ found: true, data: result.dataValues });
        } else {
            // No se encontró una agenda para el usuario
            res.json({ found: false, msg: 'No se encontró una agenda ese usuario' });
        }

    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: ErrorCodes.INTERNAL_SERVER_ERROR });
    }
}

export const postPeriod = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        // Guarda en la tabla periodos_actualizacion     
        await Periodo.destroy({ where: {} });
        const form = await Periodo.create(body)
        res.json({ form });

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: ErrorCodes.INTERNAL_SERVER_ERROR });
    }
};

export const getPeriod = async (req: Request, res: Response) => {
    try {
        // Busca el último registro en la tabla periodos_actualizacion ordenado por fecha de creación descendente
        const latestPeriod = await Periodo.findOne({
            where: {}
        });

        if (latestPeriod) {
            res.json({ latestPeriod });
        } else {
            res.status(404).json({ msg: 'No se encontraron periodos' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: ErrorCodes.INTERNAL_SERVER_ERROR });
    }
};