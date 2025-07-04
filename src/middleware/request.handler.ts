import apiClient from "../utility/api";
import errorHandler from "./errorHandler/commonErrorHandler";


export class RequestHandler {
  static async get<T>(url: string): Promise<T> {
    try {
      const { data } = await apiClient.get<{ data: T }>(url);
      return data.data;
    } catch (error) {
      throw errorHandler(error);
    }
  }

  static async post<T, P>(url: string, payload: P): Promise<T | any> {
    try {
      const { data } = await apiClient.post<{ data: T }>(url, payload);
      return data.data || data;
    } catch (error) {
      throw errorHandler(error);
    }
  }
}
