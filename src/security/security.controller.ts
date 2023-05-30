import { Body, Controller, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { DataResponse } from 'src/shared/dtos/dataResponse';
import { UserAuth } from './dtos/user.auth';
import { UserRequest } from './dtos/user.request';
import { SecurityService } from './security.service';

@ApiTags('Security')
@Controller('security')
export class SecurityController {
  constructor(private readonly securityService: SecurityService) { }

  @Put('authenticate')
  @ApiResponse({ status: 200, type: DataResponse<UserAuth> })
  public async authenticate(@Body() userRequest: UserRequest): Promise<DataResponse<UserAuth>> {
    return this.securityService.authenticate(userRequest);
  }

  @Put('changePassword')
  @ApiResponse({ status: 200, type: DataResponse<UserAuth> })
  async changePassword(@Body() userRequest: UserRequest): Promise<DataResponse<UserAuth>> {
    return this.securityService.changePassword(userRequest);
  }
}
