import { Router } from "express";
import PolicySearchController from "../../modules/IMS/controller/policy.search.controller"
const router = Router();

router.post('/policysearch', PolicySearchController.fetchPolicySearch.bind(PolicySearchController));
router.post('/claimsearch', PolicySearchController.fetchClaimSearch.bind(PolicySearchController));

export default router;
