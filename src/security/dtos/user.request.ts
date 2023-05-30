import { ApiProperty } from '@nestjs/swagger';

export class UserRequest {
  @ApiProperty()
  user: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  npassword?: string;
}
 