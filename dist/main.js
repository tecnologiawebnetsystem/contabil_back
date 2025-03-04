"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule, { logger: ["error", "warn", "debug", "log", "verbose"] });
        app.enableCors();
        const config = new swagger_1.DocumentBuilder()
            .setTitle("API ERP Seguros - Nuxon")
            .setDescription("Descrição da API para todas as tabelas")
            .setVersion("1.0")
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup("api", app, document);
        const port = process.env.PORT || 3000;
        await app.listen(port);
        console.log(`Application is running on port ${port}`);
    }
    catch (error) {
        console.error("Application failed to start:", error);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map