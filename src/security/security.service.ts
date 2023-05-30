import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { DataResponse } from 'src/shared/dtos/dataResponse';
import { ErrorResponse } from 'src/shared/dtos/errorResponse';
import { UserAuth } from './dtos/user.auth';
import { UserRequest } from './dtos/user.request';

@Injectable()
export class SecurityService {

  public async authenticate(userRequest: UserRequest): Promise<DataResponse<UserAuth>> {
    try {
      const response  = await axios.put(
        `${process.env.BASE_URL}/Security/Authenticate`, userRequest
      );
      return response.data;
    } catch (error) {
      const errorResponse: ErrorResponse = error.response.data.errorResponse;

      const dataResponse: DataResponse<UserAuth> = new DataResponse<UserAuth>(null, errorResponse);
      return dataResponse;
    }
  }

  async changePassword(userRequest: UserRequest): Promise<DataResponse<UserAuth>> {
    try {
      const response  = await axios.put(
        `${process.env.BASE_URL}/Security/ChangePassword`, userRequest
      );
      return response.data;
    } catch (error) { 
      const dataResponse: DataResponse<UserAuth> = new DataResponse<UserAuth>(null, error.response.data.errorResponse);
      return dataResponse;
    }
  }
}
