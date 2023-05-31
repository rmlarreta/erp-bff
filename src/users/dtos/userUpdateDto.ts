import { ApiProperty } from '@nestjs/swagger';

export class UserUpdateDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userName: string;

  @ApiProperty()
  realName: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  endOfLife: Date;

  @ApiProperty()
  active: boolean;
}
