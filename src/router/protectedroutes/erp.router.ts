import { Router } from "express";
import RolePermissionController from "../../modules/ERP/controllers/RolePermission.controller";
import LeaveController from "../../modules/ERP/controllers/leaves/external/leave.controller";
import LeaveQueryController from "../../modules/ERP/controllers/leaves/external/leave.query.controller";
import  {hasPermission}  from "../../utility/chequePermission/checkPermission";
import TravelExternalController from "../../modules/ERP/controllers/travels/external/travel.controller";
import TrainingQueryExternalRepository from "../../modules/ERP/controllers/training/training.query.controller"
import TrainingExternalController from "../../modules/ERP/controllers/training/training.controller"
import SalaryAdvanceExternalController from "../../modules/ERP/controllers/salaryadvance/external/salary.external.controller";
const router = Router();


router.post("/permission",hasPermission("approve-leave"),RolePermissionController.finalRolePermission.bind(RolePermissionController));
router.post("/createleave", LeaveController.createLeave.bind(LeaveController));
router.get("/leaveTypesQuery", LeaveQueryController.fetchLeaveTypes.bind(LeaveQueryController));
router.post("/leaveQueryApproval",hasPermission("approve-leave"), LeaveQueryController.fetchAllLeaves.bind(LeaveQueryController));
router.post("/leaveupdate", LeaveController.updateLeave.bind(LeaveController));
router.post('/approvedLeave',LeaveController.approvedLeave.bind(LeaveController))

// travel
router.post('/createtravel', TravelExternalController.createTravel.bind(TravelExternalController))
router.get('/travelTypesQuery', TravelExternalController.fetchTravelTypes.bind(TravelExternalController))
router.post('/travelList', TravelExternalController.fetchTravelApplicant.bind(TravelExternalController))
router.post('/travelVerification', TravelExternalController.travelVerification.bind(TravelExternalController))
router.post('/travelApprovalList',TravelExternalController.fetchTravelByHead.bind(TravelExternalController))

//  training
router.get('/trainingType', TrainingQueryExternalRepository.trainingType.bind(TrainingQueryExternalRepository))
router.post('/trainingCategory', TrainingQueryExternalRepository.trainingCategoryById.bind(TrainingQueryExternalRepository))
router.get('/fetchTrainingCountryFunding', TrainingQueryExternalRepository.fetchTrainingCountryFunding.bind(TrainingQueryExternalRepository))
router.post('/createTraining', TrainingExternalController.createTraining.bind(TrainingExternalController))
router.post('/traininglist',TrainingQueryExternalRepository.fetchAllTrainingList.bind(TrainingQueryExternalRepository))

// advance salary
router.post('/fetchAdvancedetail', SalaryAdvanceExternalController.fetchSalaryAdvancedetail.bind(SalaryAdvanceExternalController))
export default router;
