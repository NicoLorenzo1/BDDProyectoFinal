import { Response, Request } from "express";
import User from "../models/user";
import Login from "../models/login"
import bcryptjs from 'bcryptjs';
import { ErrorCodes } from '../helpers/error-codes';

//devuelve la informacion de la tabla logins. Busca por el logId
export const getUserData = async (req: Request, res: Response) => {

    try {
        const loginData = await Login.findAll({
            where: {

            }
        });

        res.json(loginData);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Internal Server Error',
        });
    }
};

//crea un usuario con un identificador y una contraseña encriptada
export const registerUser = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const user = User.build(body);

        const userExists = await User.findOne({
            where: {
                ci: user.ci,
            },
        });

        //no encuentra el usuario

        if (!userExists) {
            const salt = bcryptjs.genSaltSync();
            user.password = bcryptjs.hashSync(body.password, salt);
            await user.save();

            const login = await Login.create({
                password: user.password,
            });
            res.json({ user, login });
        }
        else {
            return res.status(401).json({
                msg: 'User registered '
            });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: ErrorCodes.INTERNAL_SERVER_ERROR });
    }
};

//logueo de un usario verifica contraseña y usuario correcto
export const login = async (req: Request, res: Response) => {

    const { ci, password } = req.body;

    try {
        //busco usuario por cedula
        const user = await User.findOne({
            where: {
                ci: ci,
            },
        });

        //no encuentra el usuario
        if (!user) {

            return res.status(401).json({
                msg: 'Ci is not correct '
            });

        }
        //busco logId del usuario que encontró

        const data = await Login.findOne({

            where: {
                logId: user.logId
            }
        });
        if (!data) {
            return res.status(401)
        }
        //Busco password del usuario asociado con ese logId

        const validPassword = bcryptjs.compareSync(password, data.password);
        if (!validPassword) {
            return res.status(401).json({
                msg: 'Password is not correct'
            });
        }
        else {
            return res.status(200).json({
                msg: 'logueado correctamente!!'
            });
        }
    }

    catch (error) {
        console.error(error);
        res.status(500).json({ msg: ErrorCodes.INTERNAL_SERVER_ERROR });
    }
}