import { Router } from 'express';
import { login } from '../controllers/auth.controller';
import { registerUser } from '../controllers/auth.controller';
import { postForm, usersNotForm } from '../controllers/form.controller';

const router = Router();

router.post('/login', login);
router.post('/register', registerUser);
router.post('/postHealthCard', postForm);
router.get('/usersNotForm', usersNotForm);




export default router;