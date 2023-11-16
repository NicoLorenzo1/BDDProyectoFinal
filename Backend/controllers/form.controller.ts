import { Request, Response } from 'express';
import db from '../db/config';
import Form from '../models/form';
import { IForm } from '../interfaces/form.interface';
import { ErrorCodes } from '../helpers/error-codes';

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

