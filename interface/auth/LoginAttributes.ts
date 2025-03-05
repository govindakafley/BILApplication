
export interface loginAttributes {
    username: string;
    password: string;
  }
  
  export interface loginCreationAttributes {
    email: string;
    employee_code: string;
    name: string;
    employee_id: string;
   } 

  export interface UserCreationResponse {
    status: number;
    message: string;
    data: Array<loginCreationAttributes>;
   }
   
   export interface LoginResponse {
     status: number;
     message: string;
     data: Array<loginCreationAttributes>;
   }
   export interface UserAttributes {
    id: number;
    name: string;
    employee_code: string;
    email: string;
    employee_id: string;

   }
   export interface TokenResponse {
    accessToken?: string;
    refreshToken?: string; // Optional, depending on your API response
}
  export interface UserCreationAttributes extends Omit<UserAttributes,'id'> {}