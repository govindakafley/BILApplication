import { BASEERPAPIUIRL } from "..";

export const ERPAPI = {
  roleAndPermission: `${BASEERPAPIUIRL}/user-role-permission`,
  createLeave: `${BASEERPAPIUIRL}/create-leave`,
  updateLeave: `${BASEERPAPIUIRL}/update-leave`,
  leaveTypes: `${BASEERPAPIUIRL}/leave-type`,
  leaveQueryApproval: `${BASEERPAPIUIRL}/leave-applicant`,
  leaveApproval: `${BASEERPAPIUIRL}/leave-approval`,
  leaveapplicant: `${BASEERPAPIUIRL}/leave-applicant-list`, // list for employee
  fetchAllEmployee: `${BASEERPAPIUIRL}/employee-list`, // list for All employee
  fetchBranch: `${BASEERPAPIUIRL}/office`, // list for branch employee
  fetchAllDepartment: `${BASEERPAPIUIRL}/department`, // list for branch employee
  fetchAllSection: `${BASEERPAPIUIRL}/section`, // list for section employee

  // travel
  createTravel: `${BASEERPAPIUIRL}/create-travel`,
  travelTypes: `${BASEERPAPIUIRL}/travel-master-data`,
  travelList: `${BASEERPAPIUIRL}/travel-list`, // list for employee
  // updateTravel: `${BASEERPAPIUIRL}/update-travel`,
  travelQueryVerify: `${BASEERPAPIUIRL}/travel-reporting`, // list for admin/ ceo
  travelVerification: `${BASEERPAPIUIRL}/travel-verification`, // verified Head or Admin
  travelApproved: `${BASEERPAPIUIRL}/travel-approve`, // approve ceo

  // training

  trainingType: `${BASEERPAPIUIRL}/training-type`,
  trainingCategory : `${BASEERPAPIUIRL}/training-category`,
  trainingCountryFunding: `${BASEERPAPIUIRL}/training-country-funding`,
  createTraining: `${BASEERPAPIUIRL}/create-training`,
  trainingList: `${BASEERPAPIUIRL}/training-list`,
  trainingReporting: `${BASEERPAPIUIRL}/training-reporting`,
  trainingVerification:  `${BASEERPAPIUIRL}/training-verification`,
  trainingApproved:  `${BASEERPAPIUIRL}/training-approve`,

  // salary advance
  salaryAdvanceDetail:  `${BASEERPAPIUIRL}/salary-apply-details`,
  applySalaryAdvance: `${BASEERPAPIUIRL}/salary-advance`,
  listSalaryAdvance: `${BASEERPAPIUIRL}/list-salary-advance`,
  salaryAdvanceApproval: `${BASEERPAPIUIRL}/verify-salary-advance`,


  // leave encashment
  fetchLeaveEncashment: `${BASEERPAPIUIRL}/leave-encash`,
  applyLeaveEncashment: `${BASEERPAPIUIRL}/apply-leave-encash`,
  leaveEncashmentApproval: `${BASEERPAPIUIRL}/leave-encash-reporting`, //by ADM
  leaveEncashmentApproved: `${BASEERPAPIUIRL}/leave-encash-approval`, //approved

  // claims training
  fetchClaims: `${BASEERPAPIUIRL}/training/expense-claim`,
  fetchTrainingClaimApproval: `${BASEERPAPIUIRL}/training/expense-claim-approval`,
  approvedClaimExpenses: `${BASEERPAPIUIRL}/training/expense-claim-approve`,


// claims travel
  // fetchTravelClaim: `${BASEERPAPIUIRL}/travel/expense-claim`,
  fetchTravelClaimApproval: `${BASEERPAPIUIRL}/travel/expense-claim-approval`,
  approvedTravelClaimExpenses: `${BASEERPAPIUIRL}/travel/expense-claim-approve`
};
