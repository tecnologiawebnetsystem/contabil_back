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
exports.CreateCompanhiassegurosDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateCompanhiassegurosDto {
}
exports.CreateCompanhiassegurosDto = CreateCompanhiassegurosDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'CompanhiaID' }),
    __metadata("design:type", Number)
], CreateCompanhiassegurosDto.prototype, "CompanhiaID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'RazaoSocial', maxLength: 255 }),
    __metadata("design:type", String)
], CreateCompanhiassegurosDto.prototype, "RazaoSocial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'NomeFantasia', maxLength: 255 }),
    __metadata("design:type", String)
], CreateCompanhiassegurosDto.prototype, "NomeFantasia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'CNPJ', maxLength: 18 }),
    __metadata("design:type", String)
], CreateCompanhiassegurosDto.prototype, "CNPJ", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'CodigoSUSEP', maxLength: 20 }),
    __metadata("design:type", String)
], CreateCompanhiassegurosDto.prototype, "CodigoSUSEP", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'DataCriacao' }),
    __metadata("design:type", Date)
], CreateCompanhiassegurosDto.prototype, "DataCriacao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'DataAtualizacao' }),
    __metadata("design:type", Date)
], CreateCompanhiassegurosDto.prototype, "DataAtualizacao", void 0);
//# sourceMappingURL=create-companhiasseguros.dto.js.map