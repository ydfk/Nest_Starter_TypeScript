import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = 3000;
  const url = `http://localhost:${port}/`;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`✅ The server is running at ${url}`);
}
bootstrap();
