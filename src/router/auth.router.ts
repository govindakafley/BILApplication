import { Router } from "express";

const router = Router();
import erprouter from './protectedroutes/erp.router';
import providentfundrouter from './protectedroutes/providentfund.router';
import imsrouter from './protectedroutes/ims.router';
import { authController } from "../utility/constant/constant";
import { VERIFY_TOKEN } from "../middleware/token/tokenAccess";
import { refreshTokenHandler } from "../middleware/token/tokenAccess";
router.post('/login', authController.createLogin.bind(authController));
router.post('/refreshToken', authController.refreshToken.bind(authController));

router.use('/erp',VERIFY_TOKEN,erprouter);
router.use('/ims',VERIFY_TOKEN,imsrouter);

router.use('/ppf',VERIFY_TOKEN,providentfundrouter);

export default router;