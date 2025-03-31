import axios from 'axios';
import { authAPI } from '../../../middleware/externalAPI/ERP/auth.api';
import { DataBaseError} from '../../../middleware/errorHandler/error.handler'; // Import custom error classes
import { loginAttributes, loginCreationAttributes, LoginResponse, UserAttributes, UserCreationAttributes, UserCreationResponse } from '../../../../interface/auth/LoginAttributes'; // Import the loginAttributes interface from the interface folder
import User from '../model/user.model';
import apiClient from '../../../utility/api';
import errorHandler from '../../../middleware/errorHandler/commonErrorHandler';


export class AuthRepository {
  async createLogin(loginAttributes: loginAttributes): Promise<LoginResponse > {
    try {
      const response = await apiClient.post(authAPI.login, loginAttributes);
      const responseData = response.data as LoginResponse;
      return responseData;
    } catch (error: any) {
      throw errorHandler(error)
    }
  }
  async execute(userData: UserCreationAttributes): Promise<User> {
    try {
      return await User.create(userData);
    } catch (error) {
      throw new DataBaseError(`${error}`);
    }
  }
}
