import CreateCustomerResponseDto from '@/modules/customer/dtos/create_customer_response.dto';
import CustomerCreateDto from '@/modules/customer/dtos/customer.dto';
import { CustomerService } from '@/modules/customer/services/customer.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly customersService: CustomerService,
    private readonly jwtService: JwtService,
  ) {}
  async signin(email: string, password: string) {
    const findCustomer = await this.customersService.findByEmail(email);

    if (!findCustomer) throw new NotFoundException('No se encontro el usuario');

    const isMatch = await bcrypt.compare(password, findCustomer.password);

    if (!isMatch) throw new BadRequestException('Contraseña incorrecta');
    const access_token = this.jwtService.sign({ sub: findCustomer.id });
    return { access_token };
  }

  async signup(body: CustomerCreateDto): Promise<CreateCustomerResponseDto> {
    const isExistUser = await this.customersService.findByEmail(body.email);

    if (isExistUser)
      throw new BadRequestException('El usuario ya esta registrado');

    return this.customersService.save(body);
  }
}
