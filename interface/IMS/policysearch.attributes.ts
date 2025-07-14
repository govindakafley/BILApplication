export type PolicySearchAttributes = {
    policy_number: string;
    vehicle_reg_number: string;    
    cid_number: string;
}

export type policySearchResponse = {
    status: number;
    message: string;
    data: any
}