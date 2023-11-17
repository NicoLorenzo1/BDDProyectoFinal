import { Router } from 'express';
import { getUserData } from '../controllers/auth.controller';
import { login } from '../controllers/auth.controller';
import { registerUser } from '../controllers/auth.controller';
const router = Router();


router.get('/loginInfo', getUserData);
router.post('/login', login);
router.post('/register', registerUser);



export default router;