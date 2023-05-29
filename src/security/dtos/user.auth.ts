import { ApiProperty } from '@nestjs/swagger';

export class UserAuth {
    @ApiProperty()
    id: string;
    userName: string;
    realName: string;
    roleName: string;
    token: string;
}
