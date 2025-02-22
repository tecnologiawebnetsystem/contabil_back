import { NestFactory } from "@nestjs/core"
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger"
import { AppModule } from "./app.module"

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
      .setTitle("API ERP Seguros - Nuxon")
      .setDescription("Descrição da API para todas as tabelas")
      .setVersion("1.0")
      .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup("api", app, document)

    await app.listen(process.env.PORT || 3000)
    console.log(`Application is running on: ${await app.getUrl()}`)
  } catch (error) {
    console.error("Application failed to start:", error)
  }
}
bootstrap()

