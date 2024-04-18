import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors'; 
import * as express from 'express';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {



  const app = await NestFactory.create(AppModule);
  
  app.use(cors());


  app.useGlobalPipes(new ValidationPipe({

    transform:true
  }));
  //app.use('/course', express.static('uploads'));
  // Ejecuta el sembrador
 // await userSeeder.seed();
 
 
 const config = new DocumentBuilder()
 .setTitle('Api de Sincronizacion de pagos en línea  ')
 .setDescription('The pagos API description')
 .setVersion('1.0')

 .addTag('Users')
 .addTag('Payments')
 .addTag('Transactions')
 .addTag('Synclogs')

 .addBearerAuth()

 
 
 .build();
 
 const options: SwaggerDocumentOptions =  {
  operationIdFactory: (
    controllerKey: string,
    methodKey: string
  ) => methodKey
};
const document = SwaggerModule.createDocument(app, config,options);
SwaggerModule.setup('api', app, document);
  await app.listen(8080);
}
bootstrap();
