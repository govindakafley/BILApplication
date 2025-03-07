import { Router } from "express";
import RolePermissionController from "../../modules/ERP/controllers/RolePermission.controller";
import { VERIFY_TOKEN } from "../../middleware/token/tokenAccess";
import LeaveController from "../../modules/ERP/controllers/leaves/external/leave.controller";
import LeaveQueryController from "../../modules/ERP/controllers/leaves/external/leave.query.controller";

const router = Router();


router.post("/permission", RolePermissionController.finalRolePermission.bind(RolePermissionController));
router.post("/createleave", LeaveController.createUserLeave.bind(LeaveController));
router.get("/leaveTypesQuery", LeaveQueryController.fetchLeaveTypes.bind(LeaveQueryController));
router.post("/leaveQuery", LeaveQueryController.fetchAllLeaves.bind(LeaveQueryController));
router.post("/leaveupdate", LeaveController.updateLeave.bind(LeaveController));


export default router;
