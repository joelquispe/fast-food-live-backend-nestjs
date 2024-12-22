import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from './modules/customers/customers.module';
import { AddressesModule } from './modules/addresses/addresses.module';
import { OrdersModule } from './modules/orders/orders.module';
import { RestaurantsModule } from './modules/restaurants/restaurants.module';
import { ProductsModule } from './modules/products/products.module';
import { DetailOrdersModule } from './modules/detail-orders/detail-orders.module';
import { DeliveriesModule } from './modules/deliveries/deliveries.module';
import { MotorizedModule } from './modules/motorized/motorized.module';
import { AuthModule } from './modules/auth/auth.module';
import environments from './environments';
import { CustomerEntity } from './modules/customers/entities/customer.entity';
import { OptionsModule } from './modules/options/options.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/auth/guard/auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { CardModule } from './modules/card/card.module';
import { EncryptionService } from './core/services/encryption/encryption.service';
import AddressEntity from './modules/addresses/entities/address.entity';
import CardEntity from './modules/card/entities/card.entity';

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
          entities: [CustomerEntity, AddressEntity, CardEntity],
        };
      },
    }),

    CustomersModule,

    AddressesModule,

    OrdersModule,

    RestaurantsModule,

    ProductsModule,

    DetailOrdersModule,

    DeliveriesModule,

    MotorizedModule,

    AuthModule,

    OptionsModule,

    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),

    CardModule,
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
