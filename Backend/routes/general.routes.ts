import { Router } from 'express';
import { login, pruebaBack } from '../controllers/auth.controller';
import { registerUser } from '../controllers/auth.controller';
import { postForm, usersNotForm } from '../controllers/form.controller';
import { checkDate, getGender, postGenderDate } from '../controllers/gender.controller';
import { getHealthCard, postHealthCard } from '../controllers/healthCard.controller';

const router = Router();

router.post('/register', registerUser);

router.post('/login', login);

router.post('/saveGender', postGenderDate);

router.post('/postHealthCard', postHealthCard);

router.get('/usersNotForm', usersNotForm);

router.post('/checkDate', checkDate);

router.get('/getHealthCard/:ci', getHealthCard)

router.get('/getGender/:ci', getGender)


export default router;