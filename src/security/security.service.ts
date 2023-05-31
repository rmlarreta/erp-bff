import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { DataResponse } from 'src/shared/dtos/dataResponse';
import { ErrorResponse } from 'src/shared/dtos/errorResponse';
import { UserAuth } from './dtos/user.auth';
import { UserRequest } from './dtos/user.request';

@Injectable()
export class SecurityService {
  private readonly baseUrl: string = process.env.BASE_URL;
  private errorResponse: ErrorResponse = {
    message: '',
    errorCode: 0
  };
  public async authenticate(userRequest: UserRequest): Promise<DataResponse<UserAuth>> {
    try {
      const response = await axios.put(
        `${this.baseUrl}/Security/Authenticate`, userRequest
      );
      return response.data;
    } catch (error) { 
      this.errorResponse.errorCode = error.response.status;
      this.errorResponse.message = error.response.status === 401 ? 'Acceso no autorizado' : error.response.data.errorResponse.message;
      const dataResponse: DataResponse<null> = new DataResponse(null, this.errorResponse);
      return dataResponse;
    }
  }

  async changePassword(userRequest: UserRequest): Promise<DataResponse<UserAuth>> {
    try {
      const response = await axios.put(
        `${this.baseUrl}/Security/ChangePassword`, userRequest
      );
      return response.data;
    } catch (error) {
      this.errorResponse.errorCode = error.response.status;
      this.errorResponse.message = error.response.status === 401 ? 'Acceso no autorizado' : error.response.data.errorResponse.message;
      const dataResponse: DataResponse<null> = new DataResponse(null, this.errorResponse);
      return dataResponse;
    }
  }
}
