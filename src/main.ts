import { NestFactory } from "@nestjs/core"
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger"
import { AppModule } from "./app.module"

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, { logger: ["error", "warn", "debug", "log", "verbose"] })

    // Habilitar CORS
    app.enableCors()

    const config = new DocumentBuilder()
      .setTitle("API ERP Seguros - Nuxon")
      .setDescription("Descrição da API para todas as tabelas")
      .setVersion("1.0")
      .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup("api", app, document)

    // Obter a porta do ambiente ou usar 3000 como padrão
    const port = process.env.PORT || 3000
    await app.listen(port)
    console.log(`Application is running on port ${port}`)
  } catch (error) {
    console.error("Application failed to start:", error)
  }
}
bootstrap()

