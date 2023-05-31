import { Body, Controller, Put, Patch, Delete, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { DataResponse } from 'src/shared/dtos/dataResponse';
import { UserUpdateDto } from './dtos/userUpdateDto';
import { UserDto } from './dtos/userDto';
import { UserInsertDto } from './dtos/userInsertDto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  

@Put('createUser') 
@ApiResponse({ status: 200, description: 'Usuario Creado Correctamente' })
public async createUser(@Body() userInsert: UserInsertDto): Promise<void> {
  await this.userService.createUser(userInsert);
}

@Patch('updateUser') 
@ApiResponse({ status: 200, description: 'Usuario Actualizado Correctamente' })
public async updateUser(@Body() userUpdate: UserUpdateDto): Promise<void> {
  await this.userService.updateUser(userUpdate);
}

@Delete('deleteUser/:id') 
@ApiResponse({ status: 200, description: 'Usuario Eliminado Correctamente' })
public async deleteUser(@Param('id') id: string): Promise<void> {
  await this.userService.deleteUser(id);
}

@Get('getAllUsers') 
@ApiResponse({ status: 200, type: DataResponse<UserDto[]> })
public getAllUsers(): Promise<DataResponse<UserDto[]>> {
  return this.userService.getAllUsers();
}

@Get('getUserById/:id') 
@ApiResponse({ status: 200, type: DataResponse<UserDto> })
public getUserById(@Param('id') id: string): Promise<DataResponse<UserDto>> {
  return this.userService.getUserById(id);
}

@Get('getUserByName/:name') 
@ApiResponse({ status: 200, type: DataResponse<UserDto> })
public getUserByName(@Param('name') name: string): Promise<DataResponse<UserDto>> {
  return this.userService.getUserByName(name);
}

}