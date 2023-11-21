import { Router } from 'express';
import { login, pruebaBack } from '../controllers/auth.controller';
import { registerUser } from '../controllers/auth.controller';
import { postForm, usersNotForm } from '../controllers/form.controller';
import { postGenderDate } from '../controllers/gender.controller';

const router = Router();

router.post('/register', registerUser);

router.post('/login', login);

router.post('/saveGender', postGenderDate);

router.post('/postHealthCard', postForm);

router.get('/usersNotForm', usersNotForm);

export default router;