import { Router } from "express";

const router = Router();

import { authController } from "../utility/constant/constant";
import RolePermissionController from "../modules/ERP/controllers/RolePermission.controller";
import { VERIFY_TOKEN } from "../middleware/token/tokenAccess";
import LeaveController from "../modules/ERP/controllers/leave.controller";   

router.post('/login', authController.createLogin.bind(authController));
router.post("/erp_permission",VERIFY_TOKEN, RolePermissionController.finalRolePermission.bind(RolePermissionController));
router.post("/createleave",VERIFY_TOKEN, LeaveController.createUserLeave.bind(LeaveController));
router.get("/leaveTypes", LeaveController.fetchLeaveTypes.bind(LeaveController));

export default router;