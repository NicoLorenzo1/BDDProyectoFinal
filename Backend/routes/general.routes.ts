import { Router } from 'express';
import { login } from '../controllers/auth.controller';
import { registerUser } from '../controllers/auth.controller';
import { usersNotForm } from '../controllers/healthCard.controller';
import { checkDate, getGender, postGenderDate } from '../controllers/gender.controller';
import { getHealthCard, postHealthCard } from '../controllers/healthCard.controller';
import { postPeriod } from '../controllers/gender.controller';
import { getPeriod } from '../controllers/gender.controller';


const router = Router();

router.post('/register', registerUser);

router.post('/login', login);

router.post('/saveGender', postGenderDate);

router.post('/postHealthCard', postHealthCard);

router.get('/usersNotForm', usersNotForm);

router.post('/checkDate', checkDate);

router.get('/getHealthCard/:ci', getHealthCard)

router.get('/getGender/:ci', getGender)

router.post('/postPeriod', postPeriod)

router.get('/getPeriod', getPeriod)

export default router;