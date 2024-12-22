import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import CustomerCreateDto from 'src/modules/customers/dtos/customer.dto';
import { CustomerEntity } from 'src/modules/customers/entities/customer.entity';
import { CustomersService } from 'src/modules/customers/services/customers.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly customersService: CustomersService,
    private readonly jwtService: JwtService,
  ) {}
  async signin(email: string, password: string): Promise<object> {
    const findCustomer = await this.customersService.findByEmail(email);

    if (!findCustomer) throw new NotFoundException('No se encontro el usuario');

    const isMatch = await bcrypt.compare(password, findCustomer.password);

    if (!isMatch) throw new BadRequestException('Contraseña incorrecta');
    const access_token = this.jwtService.sign({ sub: findCustomer.id });
    return { access_token };
  }

  async signup(body: CustomerCreateDto): Promise<CustomerEntity> {
    const isExistUser = await this.customersService.findByEmail(body.email);

    if (isExistUser)
      throw new BadRequestException('El usuario ya esta registrado');

    return this.customersService.save(body);
  }
}
