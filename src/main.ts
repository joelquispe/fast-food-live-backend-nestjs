import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';
import { ResponseFormatInterceptor } from './core/interceptors/response.interceptor';
import { GlobalExceptionFilter } from './core/filters/global_exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const configService = app.get(ConfigService);
  // app.useGlobalFilters(new GlobalExceptionFilter());
  app.useGlobalInterceptors(new ResponseFormatInterceptor());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      skipMissingProperties: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Flutter Fast Food')
    .setDescription('Api documentation')
    .setVersion('1.0')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      in: 'header',
    })
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, documentFactory, {
    swaggerOptions: { persistAuthorization: true },
  });

  console.log(`Listen on ${configService.get('port') || 3000}`);
  await app.listen(configService.get('port'));
}

bootstrap();
