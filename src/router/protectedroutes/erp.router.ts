import { Router } from "express";
import RolePermissionController from "../../modules/ERP/controllers/RolePermission.controller";
import LeaveController from "../../modules/ERP/controllers/leaves/external/leave.controller";
import LeaveQueryController from "../../modules/ERP/controllers/leaves/external/leave.query.controller";
import  {hasPermission}  from "../../utility/chequePermission/checkPermission";
import TravelExternalController from "../../modules/ERP/controllers/travels/external/travel.controller";
import TrainingQueryExternalRepository from "../../modules/ERP/controllers/training/training.query.controller"
import TrainingExternalController from "../../modules/ERP/controllers/training/training.controller"
import SalaryAdvanceExternalController from "../../modules/ERP/controllers/salaryadvance/external/salary.external.controller";
import LeaveEncashmentController from "../../modules/ERP/controllers/leaves/external/leave.encashment.controller";
import TrainingClaimController from "../../modules/ERP/controllers/training/training.claim.controller"
const router = Router();

router.post("/permission",RolePermissionController.finalRolePermission.bind(RolePermissionController));
router.post("/createleave", LeaveController.createLeave.bind(LeaveController));
router.get("/leaveTypesQuery", LeaveQueryController.fetchLeaveTypes.bind(LeaveQueryController));
router.post("/leaveQueryApproval", LeaveQueryController.fetchAllLeaves.bind(LeaveQueryController));
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
router.post('/trainingVerification', TrainingExternalController.TrainingVerification.bind(TrainingExternalController))
router.post('/fetchTrainingByCode', TrainingQueryExternalRepository.fetchTrainingByEmployeeCode.bind(TrainingQueryExternalRepository))

// advance salary
router.post('/fetchAdvancedetail', SalaryAdvanceExternalController.fetchSalaryAdvancedetail.bind(SalaryAdvanceExternalController))
router.post('/applySalaryAdvance',SalaryAdvanceExternalController.applySalaryAdvance.bind(SalaryAdvanceExternalController))
router.post('/fetchSalaryAdvance', SalaryAdvanceExternalController.fetchSalaryAdvance.bind(SalaryAdvanceExternalController)) //   by particular role head/ admin/ceo
router.post('/approveSalaryAdvance', SalaryAdvanceExternalController.approveSalaryAdvance.bind(SalaryAdvanceExternalController)) // approve by head/admin/ceo


router.post('/fetchLeaveEncashment', LeaveEncashmentController.fetchLeaveEncashment.bind(LeaveEncashmentController)) // fetch leave encashment by employee code
router.post('/applyLeaveEncashment', LeaveEncashmentController.applyLeaveEncashment.bind(LeaveEncashmentController)) // apply leave encashment by employee code
router.post('/fetchApprovalLeaveEncashment', LeaveEncashmentController.fetchApprovalLeaveEncashment.bind(LeaveEncashmentController)) // fetch approval leave encashment by admin/ceo
router.post('/leaveEncashmentApprove', LeaveEncashmentController.leaveEncashmentApprove.bind(LeaveEncashmentController)) // approve leave encashment by admin/ceo

// claims
router.post('/fetchTrainingClaim', TrainingClaimController.fetchTrainingClaim.bind(TrainingClaimController)) // fetch training claim by employee code
router.post('/fetchTrainingClaimApproval', TrainingClaimController.fetchTrainingClaimApproval.bind(TrainingClaimController))
router.post('/approvedTrainingClaimExpenses', TrainingClaimController.approvedClaimExpenses.bind(TrainingClaimController)) // approve training claim by admin/ceo

export default router;
