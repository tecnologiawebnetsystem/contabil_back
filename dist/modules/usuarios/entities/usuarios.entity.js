"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuarios = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const base_entity_1 = require("../../../shared/base.entity");
let Usuarios = class Usuarios extends base_entity_1.BaseEntity {
};
exports.Usuarios = Usuarios;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Usuarios.prototype, "UsuarioID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, typeorm_1.Column)({ name: 'Email', nullable: false }),
    __metadata("design:type", String)
], Usuarios.prototype, "Email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, typeorm_1.Column)({ name: 'Nome', nullable: false }),
    __metadata("design:type", String)
], Usuarios.prototype, "Nome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, typeorm_1.Column)({ name: 'Sobrenome', nullable: false }),
    __metadata("design:type", String)
], Usuarios.prototype, "Sobrenome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, typeorm_1.Column)({ name: 'Senha', nullable: false }),
    __metadata("design:type", String)
], Usuarios.prototype, "Senha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, typeorm_1.Column)({ name: 'Perfil', nullable: false }),
    __metadata("design:type", String)
], Usuarios.prototype, "Perfil", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'CompanhiaID', nullable: true }),
    __metadata("design:type", Number)
], Usuarios.prototype, "CompanhiaID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: () => new Date() }),
    (0, typeorm_1.Column)({ name: 'DataCriacao', nullable: true, default: () => new Date() }),
    __metadata("design:type", Date)
], Usuarios.prototype, "DataCriacao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: () => new Date() }),
    (0, typeorm_1.Column)({ name: 'DataAtualizacao', nullable: true, default: () => new Date() }),
    __metadata("design:type", Date)
], Usuarios.prototype, "DataAtualizacao", void 0);
exports.Usuarios = Usuarios = __decorate([
    (0, typeorm_1.Entity)('Usuarios')
], Usuarios);
//# sourceMappingURL=usuarios.entity.js.map