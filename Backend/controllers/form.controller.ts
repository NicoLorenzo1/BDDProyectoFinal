import { Request, Response } from 'express';
import db from '../db/config';
import Form from '../models/form';
import { IForm } from '../interfaces/form.interface';
import { ErrorCodes } from '../helpers/error-codes';
import sequelize from 'sequelize/types/sequelize';
import { QueryTypes } from 'sequelize';

export const getForm = async (req: Request, res: Response) => {
    try {
        const forms = await Form.findAll({
            where: {
                ci: 54332613
            }
        });
        res.json(forms);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: ErrorCodes.INTERNAL_SERVER_ERROR });
    }
}

//postea un formulario 
export const postForm = async (req: Request, res: Response) => {

    const { body } = req;

    try {
        // Guardar en la tabla Formulario           
        const form = await Form.create(body)
        res.json({ form });

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: ErrorCodes.INTERNAL_SERVER_ERROR });
    }
};


export const usersNotForm = async (req: Request, res: Response) => {

    try {
        const users = await db.query(`SELECT Nombre, Apellido, CI, Teléfono FROM Funcionarios AS f WHERE NOT EXISTS (SELECT * FROM Carnet_Salud AS c WHERE c.ci = f.ci)`);
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: ErrorCodes.INTERNAL_SERVER_ERROR });
    }
};





