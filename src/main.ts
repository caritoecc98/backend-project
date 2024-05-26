import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors({
    origin: 'http://localhost:3000', // Cambia esto por el dominio de tu aplicación frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Especifica los métodos permitidos según tu API
    allowedHeaders: ['Authorization', 'Content-Type'], // Especifica los encabezados permitidos según tu aplicación
    credentials: true, // Habilita el intercambio de credenciales si es necesario
  });

  // Configurar el ValidationPipe global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Eliminar campos no definidos en los DTOs
      forbidNonWhitelisted: true, // Rechazar solicitudes con campos no definidos en los DTOs
      transform: true, // Convertir automáticamente los tipos de datos de las solicitudes según los DTOs
    }),
  );

  await app.listen(4000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();