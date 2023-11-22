import { Router } from 'express';
import { login, pruebaBack } from '../controllers/auth.controller';
import { registerUser } from '../controllers/auth.controller';
import { postForm, usersNotForm } from '../controllers/form.controller';
import { checkDate, postGenderDate } from '../controllers/gender.controller';
import { postHealthCard } from '../controllers/healthCard.controller';

const router = Router();

router.post('/register', registerUser);

router.post('/login', login);

router.post('/saveGender', postGenderDate);

router.post('/postHealthCard', postHealthCard);

router.get('/usersNotForm', usersNotForm);

router.post('/checkDate', checkDate);





export default router;