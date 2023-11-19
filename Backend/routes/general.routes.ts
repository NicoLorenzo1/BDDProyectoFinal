import { Router } from 'express';
import { login } from '../controllers/auth.controller';
import { registerUser } from '../controllers/auth.controller';
import { postForm } from '../controllers/form.controller';

const router = Router();

router.post('/login', login);
router.post('/register', registerUser);
router.post('/postHealthCard', postForm);



export default router;