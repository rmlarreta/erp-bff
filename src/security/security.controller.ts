import { Controller, Put, Body } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SecurityService } from './security.service';
import { UserRequest } from './dtos/user.request';
import { UserAuth } from './dtos/user.auth';

@ApiTags('Security')
@Controller('security')
export class SecurityController {
  constructor(private readonly securityService: SecurityService) {}

  @Put('authenticate')
  @ApiResponse({ status: 200, type: UserAuth })
  async authenticate(@Body() userRequest: UserRequest): Promise<UserAuth> {
    return this.securityService.authenticate(userRequest);
  }

  @Put('changePassword')
  @ApiResponse({ status: 200, type: UserAuth })
  async changePassword(@Body() userRequest: UserRequest): Promise<UserAuth> {
    return this.securityService.changePassword(userRequest);
  }
}
