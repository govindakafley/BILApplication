import { Router } from "express";

const router = Router();
import erprouter from './protectedroutes/erp.router';
import providentfundrouter from './protectedroutes/providentfund.router';

import { authController } from "../utility/constant/constant";
import { VERIFY_TOKEN } from "../middleware/token/tokenAccess";
router.post('/login', authController.createLogin.bind(authController));
router.use('/erp',VERIFY_TOKEN,erprouter);
router.use('/ppf',VERIFY_TOKEN,providentfundrouter);

export default router;