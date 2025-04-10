export type TravelAttributes = {
    employee_code: string,
    travel_type: number,
    travel_purpose: number,
    travel_expense_applicable:string,  //Yes or No
    travel_funding: number,
    travel_mode: number,
    travel_from_date:Date,
    travel_to_date: Date,
    travel_duration: number,
    travel_advance_amount: number,
    travel_from_place: string,
    travel_to_place: string,
    travel_description: string,
}

export type TravelResponse = {
    status: number,
    message: string,
    data: string
}