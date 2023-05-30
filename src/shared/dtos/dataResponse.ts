import { ApiProperty } from '@nestjs/swagger';
import { ErrorResponse } from './errorResponse';

export class DataResponse<T> {
  @ApiProperty({ nullable: true })
  data?: T;

  @ApiProperty({ nullable: true, type: ErrorResponse })
  errorResponse?: ErrorResponse;

  constructor(data?: T, errorResponse?: ErrorResponse) {
    this.data = data;
    this.errorResponse = errorResponse;
  }
}
