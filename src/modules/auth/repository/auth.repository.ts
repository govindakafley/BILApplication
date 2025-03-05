import axios from 'axios';
import { authAPI } from '../../../middleware/externalAPI/ERP/auth.api';
import { axiosError, DataBaseError, NotFoundError } from '../../../middleware/errorHandler/error.handler'; // Import custom error classes
import { loginAttributes, loginCreationAttributes, LoginResponse, UserAttributes, UserCreationAttributes, UserCreationResponse } from '../../../../interface/auth/LoginAttributes'; // Import the loginAttributes interface from the interface folder
import { CreationAttributes } from 'sequelize';
import User from '../model/user.model';
import apiClient from '../../../utility/api';


export class AuthRepository {
  async createLogin(loginAttributes: loginAttributes): Promise<LoginResponse > {
    try {
      const response = await apiClient.post(authAPI.login, loginAttributes);
      const responseData = response.data as LoginResponse;
      return responseData;
    } catch (error) {
      if (error instanceof axiosError) {
        const errorMessage = error?.response?.message || error?.message || 'Unknown error';
        throw new axiosError(errorMessage);
      } else if (error instanceof DataBaseError) {
        throw new DataBaseError('Database error occurred while processing login');
      } else if (error instanceof NotFoundError) {
        throw new NotFoundError('User not found');
      } else {
        throw new Error('An unexpected error occurred');
      }
    }
  }
  async execute(userData: UserCreationAttributes): Promise<User> {
    try {
      return await User.create(userData);
    } catch (error) {
      throw new DataBaseError('FAILED TO STORE IN DATABASE');
    }
  }
}
