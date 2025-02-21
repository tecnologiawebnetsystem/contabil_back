import { registerAs } from "@nestjs/config"

export default registerAs("database", () => ({
  type: "mssql",
  host: process.env.DB_HOST || "sqlserver.webnetsystem.com.br",
  port: Number.parseInt(process.env.DB_PORT, 10) || 1433,
  username: process.env.DB_USERNAME || "webnetsystem",
  password: process.env.DB_PASSWORD || "@@N56kmsd8@135",
  database: process.env.DB_NAME || "webnetsystem",
  entities: [__dirname + "/../**/*.entity{.ts,.js}"],
  synchronize: false,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
}))

