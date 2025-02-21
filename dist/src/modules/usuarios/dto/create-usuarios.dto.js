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
exports.CreateUsuariosDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateUsuariosDto {
}
exports.CreateUsuariosDto = CreateUsuariosDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'UsuarioID' }),
    __metadata("design:type", Number)
], CreateUsuariosDto.prototype, "UsuarioID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email', maxLength: 255 }),
    __metadata("design:type", String)
], CreateUsuariosDto.prototype, "Email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nome', maxLength: 100 }),
    __metadata("design:type", String)
], CreateUsuariosDto.prototype, "Nome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sobrenome', maxLength: 100 }),
    __metadata("design:type", String)
], CreateUsuariosDto.prototype, "Sobrenome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Senha', maxLength: 255 }),
    __metadata("design:type", String)
], CreateUsuariosDto.prototype, "Senha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Perfil', maxLength: 50 }),
    __metadata("design:type", String)
], CreateUsuariosDto.prototype, "Perfil", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'CompanhiaID' }),
    __metadata("design:type", Number)
], CreateUsuariosDto.prototype, "CompanhiaID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'DataCriacao' }),
    __metadata("design:type", Date)
], CreateUsuariosDto.prototype, "DataCriacao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'DataAtualizacao' }),
    __metadata("design:type", Date)
], CreateUsuariosDto.prototype, "DataAtualizacao", void 0);
//# sourceMappingURL=create-usuarios.dto.js.map