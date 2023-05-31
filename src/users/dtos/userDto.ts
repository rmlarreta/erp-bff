import { ApiProperty } from '@nestjs/swagger';
import { UserUpdateDto } from './UserUpdateDto';

export class UserDto extends UserUpdateDto {
  @ApiProperty({ description: 'The role name of the user.' })
  roleName: string;
}
