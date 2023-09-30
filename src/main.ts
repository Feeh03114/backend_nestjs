import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('API BackEnd')
    .setDescription('Teste de API para o processo seletivo da empresa ViaMaker')
    .setVersion('1.0')
    .setContact(
      'Felipe Alessander Caetano Luiz',
      'https://www.linkedin.com/in/felipe-alessander-caetano-luiz-8087ab1a2/',
      'felipe03114@gmail.com',
    )
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);
  await app.listen(3002);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
