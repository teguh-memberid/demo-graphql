import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
	FastifyAdapter,
	NestFastifyApplication
} from '@nestjs/platform-fastify';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter()
  );
  const port = parseInt(process.env.PORT) || 8080
	app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
  console.log(`Server Running on http://localhost:${port}`, `Bootstrap`)
}
bootstrap();
