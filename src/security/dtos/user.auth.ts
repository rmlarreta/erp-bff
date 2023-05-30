import { ApiProperty } from '@nestjs/swagger';

export class UserAuth {
    @ApiProperty()
    id: string;
  
    @ApiProperty()
    userName: string;
  
    @ApiProperty()
    realName: string;
  
    @ApiProperty()
    roleName: string;
  
    @ApiProperty()
    token: string;
  }
