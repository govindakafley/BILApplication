import { Router } from "express";
import ProvidentFundExternalQueryController from "../../modules/providentFund/controllers/external/providentfund.query.controller";
const router = Router();

router.post("/permission", ProvidentFundExternalQueryController.fetchAllRoleAndPermission.bind(ProvidentFundExternalQueryController));

export default router;
