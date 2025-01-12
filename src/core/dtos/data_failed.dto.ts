import { ApiProperty } from '@nestjs/swagger';

class DataFailed {
  @ApiProperty()
  message: string;

  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  error: string;
}

export default DataFailed;
