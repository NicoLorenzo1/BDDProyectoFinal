import { Response, Request } from "express";
import User from "../models/user";
import login from "../models/login"
import bcryptjs from 'bcryptjs';
import { ErrorCodes } from '../helpers/error-codes';

export const getUserId = async (req: Request, res: Response) => {
    console.log("prueba de llegada");

    try {
      const loginsInfo = await login.findAll(); // Esto devuelve todos los registros de la tabla Logins
  
      res.json(loginsInfo);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: 'Internal Server Error',
      });
    }
  };

export default getUserId;