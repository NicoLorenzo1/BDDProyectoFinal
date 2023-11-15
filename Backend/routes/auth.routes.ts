import { Router } from 'express';
import { getUserId } from '../controllers/auth.controller';

const router = Router();


router.get('/loginInfo', getUserId);

export default router;