import { IsEmail, IsNotEmpty } from 'class-validator';

class AuthDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

export default AuthDto;
