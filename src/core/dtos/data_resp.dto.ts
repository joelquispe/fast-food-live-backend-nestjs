import { ApiProperty } from '@nestjs/swagger';

class DataResp<T> {
  @ApiProperty()
  data: T;

  @ApiProperty()
  error?: string;

  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  path: string;

  @ApiProperty()
  timestamp: string;
}

export default DataResp;
