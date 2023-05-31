import { ApiProperty } from '@nestjs/swagger';

export class UserInsertDto {
  @ApiProperty()
  userName: string;

  @ApiProperty()
  realName: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  role: string;
}
