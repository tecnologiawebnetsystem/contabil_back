"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const typeorm_1 = require("typeorm");
async function generateDTOs() {
    const connection = await (0, typeorm_1.createConnection)({
        type: "mssql",
        host: process.env.DB_HOST || "sqlserver.webnetsystem.com.br",
        port: Number.parseInt(process.env.DB_PORT || "1433"),
        username: process.env.DB_USERNAME || "webnetsystem",
        password: process.env.DB_PASSWORD || "@@N56kmsd8@135",
        database: process.env.DB_NAME || "webnetsystem",
        options: {
            encrypt: true,
            trustServerCertificate: true,
        },
    });
    try {
        const tables = await connection.query(`SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'`);
        for (const table of tables) {
            const tableName = table.TABLE_NAME;
            const entityName = tableName.charAt(0).toUpperCase() + tableName.slice(1).toLowerCase();
            console.log(`Gerando DTO para: ${tableName}`);
            const columns = await connection.query(`
        SELECT 
          COLUMN_NAME, 
          DATA_TYPE,
          IS_NULLABLE,
          CHARACTER_MAXIMUM_LENGTH
        FROM INFORMATION_SCHEMA.COLUMNS 
        WHERE TABLE_NAME = '${tableName}'
      `);
            let dtoContent = `import { ApiProperty } from '@nestjs/swagger';\n\n`;
            dtoContent += `export class Create${entityName}Dto {\n`;
            for (const column of columns) {
                if (!["id", "createdAt", "updatedAt", "deletedAt"].includes(column.COLUMN_NAME)) {
                    const type = getTypeScriptType(column.DATA_TYPE);
                    const isOptional = column.IS_NULLABLE === "YES";
                    dtoContent += `  @ApiProperty({ description: '${column.COLUMN_NAME}' ${column.CHARACTER_MAXIMUM_LENGTH ? `, maxLength: ${column.CHARACTER_MAXIMUM_LENGTH}` : ""} })\n`;
                    dtoContent += `  ${column.COLUMN_NAME}${isOptional ? "?" : ""}: ${type};\n\n`;
                }
            }
            dtoContent += `}\n`;
            const moduleDir = path.join(__dirname, "src", "modules", tableName.toLowerCase());
            const dtoDir = path.join(moduleDir, "dto");
            if (!fs.existsSync(dtoDir)) {
                fs.mkdirSync(dtoDir, { recursive: true });
            }
            fs.writeFileSync(path.join(dtoDir, `create-${tableName.toLowerCase()}.dto.ts`), dtoContent);
            console.log(`DTO gerado para ${tableName}`);
            let updateDtoContent = `import { PartialType } from '@nestjs/swagger';\n`;
            updateDtoContent += `import { Create${entityName}Dto } from './create-${tableName.toLowerCase()}.dto';\n\n`;
            updateDtoContent += `export class Update${entityName}Dto extends PartialType(Create${entityName}Dto) {}\n`;
            fs.writeFileSync(path.join(dtoDir, `update-${tableName.toLowerCase()}.dto.ts`), updateDtoContent);
            console.log(`UpdateDTO gerado para ${tableName}`);
        }
        console.log("Todos os DTOs foram gerados com sucesso!");
    }
    catch (error) {
        console.error("Erro ao gerar DTOs:", error);
    }
    finally {
        await connection.close();
    }
}
function getTypeScriptType(sqlType) {
    const typeMap = {
        int: "number",
        bigint: "number",
        smallint: "number",
        tinyint: "number",
        bit: "boolean",
        decimal: "number",
        numeric: "number",
        money: "number",
        smallmoney: "number",
        float: "number",
        real: "number",
        datetime: "Date",
        datetime2: "Date",
        smalldatetime: "Date",
        date: "Date",
        time: "string",
        char: "string",
        varchar: "string",
        text: "string",
        nchar: "string",
        nvarchar: "string",
        ntext: "string",
        binary: "Buffer",
        varbinary: "Buffer",
        image: "Buffer",
        uniqueidentifier: "string",
    };
    return typeMap[sqlType.toLowerCase()] || "any";
}
generateDTOs().catch((error) => console.error("Erro não tratado:", error));
//# sourceMappingURL=generate-dtos.js.map