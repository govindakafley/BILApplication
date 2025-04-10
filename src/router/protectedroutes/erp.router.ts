import { Router } from "express";
import RolePermissionController from "../../modules/ERP/controllers/RolePermission.controller";
import LeaveController from "../../modules/ERP/controllers/leaves/external/leave.controller";
import LeaveQueryController from "../../modules/ERP/controllers/leaves/external/leave.query.controller";
import  {hasPermission}  from "../../utility/chequePermission/checkPermission";
import TravelExternalController from "../../modules/ERP/controllers/travels/external/travel.controller";
const router = Router();


router.post("/permission",hasPermission("approve-leave"),
hasPermission("approve-leave"),
// hasPermission("travel-leave"),
// hasPermission("approve-leave"),
 RolePermissionController.finalRolePermission.bind(RolePermissionController));
router.post("/createleave", LeaveController.createLeave.bind(LeaveController));
router.get("/leaveTypesQuery", LeaveQueryController.fetchLeaveTypes.bind(LeaveQueryController));
router.post("/leaveQueryApproval",hasPermission("approve-leave"), LeaveQueryController.fetchAllLeaves.bind(LeaveQueryController));
router.post("/leaveupdate", LeaveController.updateLeave.bind(LeaveController));
router.post('/approvedLeave',LeaveController.approvedLeave.bind(LeaveController))
// travel
router.post('/createtravel', TravelExternalController.createTravel.bind(TravelExternalController))

export default router;
