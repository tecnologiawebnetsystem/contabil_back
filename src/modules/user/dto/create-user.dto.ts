import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'name' , maxLength: 255 })
  name: string;

  @ApiProperty({ description: 'email' , maxLength: 255 })
  email: string;

}
