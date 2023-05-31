import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { DataResponse } from 'src/shared/dtos/dataResponse';
import { ErrorResponse } from 'src/shared/dtos/errorResponse';
import { UserDto } from './dtos/userDto';
import { UserInsertDto } from './dtos/userInsertDto';
import { UserUpdateDto } from './dtos/userUpdateDto';

@Injectable()
export class UsersService {
    private readonly baseUrl: string = process.env.BASE_URL;
    private errorResponse: ErrorResponse = {
        message: '',
        errorCode: 0
    };
    async createUser(userInsertDto: UserInsertDto): Promise<DataResponse<UserDto>> {
        try {
            const response = await axios.put(`${this.baseUrl}/Users/CreateUser`, userInsertDto);
            return response.data;
        } catch (error) {
            this.errorResponse.errorCode = error.response.status;
            this.errorResponse.message = error.response.status === 401 ? 'Acceso no autorizado' : error.response.data.errorResponse.message;
            const dataResponse: DataResponse<null> = new DataResponse(null, this.errorResponse);
            return dataResponse;
        }
    }

    async updateUser(userUpdateDto: UserUpdateDto): Promise<DataResponse<UserDto>> {
        try {
            const response = await axios.patch(`${this.baseUrl}/Users/UpdateUser`, userUpdateDto);
            return response.data;
        } catch (error) {
            this.errorResponse.errorCode = error.response.status;
            this.errorResponse.message = error.response.status === 401 ? 'Acceso no autorizado' : error.response.data.errorResponse.message;
            const dataResponse: DataResponse<null> = new DataResponse(null, this.errorResponse);
            return dataResponse;
        }
    }

    async deleteUser(id: string): Promise<DataResponse<void>> {
        try {
            const response = await axios.delete(`${this.baseUrl}/Users/DeleteUser/${id}`);
            return response.data;
        } catch (error) {
            this.errorResponse.errorCode = error.response.status;
            this.errorResponse.message = error.response.status === 401 ? 'Acceso no autorizado' : error.response.data.errorResponse.message;
            const dataResponse: DataResponse<null> = new DataResponse(null, this.errorResponse);
            return dataResponse;
        }
    }

    async getAllUsers(): Promise<DataResponse<UserDto[]>> {
        try {
            const response = await axios.get(`${this.baseUrl}/Users/GetAllUsers`);
            return response.data;
        } catch (error) {
            this.errorResponse.errorCode = error.response.status;
            this.errorResponse.message = error.response.status === 401 ? 'Acceso no autorizado' : error.response.data.errorResponse.message;
            const dataResponse: DataResponse<null> = new DataResponse(null, this.errorResponse);
            return dataResponse;
        }
    }

    async getUserById(id: string): Promise<DataResponse<UserDto>> {
        try {
            const response = await axios.get(`${this.baseUrl}/Users/GetUserById/${id}`);
            return response.data;
        } catch (error) {
            this.errorResponse.errorCode = error.response.status;
            this.errorResponse.message = error.response.status === 401 ? 'Acceso no autorizado' : error.response.data.errorResponse.message;
            const dataResponse: DataResponse<null> = new DataResponse(null, this.errorResponse);
            return dataResponse;
        }
    }

    async getUserByName(name: string): Promise<DataResponse<UserDto>> {
        try {
            const response = await axios.get(`${this.baseUrl}/Users/GetUserByName/${name}`);
            return response.data;
        } catch (error) {
            this.errorResponse.errorCode = error.response.status;
            this.errorResponse.message = error.response.status === 401 ? 'Acceso no autorizado' : error.response.data.errorResponse.message;
            const dataResponse: DataResponse<null> = new DataResponse(null, this.errorResponse);
            return dataResponse;
        }
    }
}
