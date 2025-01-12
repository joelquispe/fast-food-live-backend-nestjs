import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MotorizedModule } from './modules/motorized/motorized.module';
import { AuthModule } from './modules/auth/auth.module';
import environments from './environments';

import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/auth/guard/auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { CardModule } from './modules/card/card.module';
import { EncryptionService } from './core/services/encryption/encryption.service';
import { AddressModule } from './modules/address/address.module';
import { CustomerModule } from './modules/customer/customer.module';
import { ProductModule } from './modules/product/product.module';

import { join } from 'path';
import { OptionModule } from './modules/option/option.module';
import { OptionValueModule } from './modules/option-value/option-value.module';
import { OrderModule } from './modules/order/order.module';
import { OrderDetailModule } from './modules/order-detail/order-detail.module';
import { OrderDetailOptionModule } from './modules/order-detail-option/order-detail-option.module';
import { CartModule } from './modules/cart/cart.module';
import { CartItemsModule } from './modules/cart-items/cart-items.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env.dev',
      isGlobal: true,
      load: [configuration],
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const { host, port, username, password, database } =
          configService.get('database');
        return {
          type: 'postgres',
          host: host,
          port: port,
          username: username,
          password: password,
          database: database,
          synchronize: true,
          autoLoadEntities: true,

          entities: [join(__dirname, '**', '*.entity{.ts,.js}')],
        };
      },
    }),

    AddressModule,

    MotorizedModule,

    AuthModule,

    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),

    CardModule,

    CustomerModule,

    ProductModule,

    OptionModule,

    OptionValueModule,

    OrderModule,

    OrderDetailModule,

    OrderDetailOptionModule,

    CartModule,

    CartItemsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    EncryptionService,
  ],
})
export class AppModule {}
