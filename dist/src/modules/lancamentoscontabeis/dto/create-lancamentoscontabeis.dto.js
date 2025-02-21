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
exports.CreateLancamentoscontabeisDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateLancamentoscontabeisDto {
}
exports.CreateLancamentoscontabeisDto = CreateLancamentoscontabeisDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'LancamentoID' }),
    __metadata("design:type", Number)
], CreateLancamentoscontabeisDto.prototype, "LancamentoID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'CompanhiaID' }),
    __metadata("design:type", Number)
], CreateLancamentoscontabeisDto.prototype, "CompanhiaID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'DataLancamento' }),
    __metadata("design:type", Date)
], CreateLancamentoscontabeisDto.prototype, "DataLancamento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Descricao', maxLength: 255 }),
    __metadata("design:type", String)
], CreateLancamentoscontabeisDto.prototype, "Descricao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Valor' }),
    __metadata("design:type", Number)
], CreateLancamentoscontabeisDto.prototype, "Valor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ContaDebitoID' }),
    __metadata("design:type", Number)
], CreateLancamentoscontabeisDto.prototype, "ContaDebitoID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ContaCreditoID' }),
    __metadata("design:type", Number)
], CreateLancamentoscontabeisDto.prototype, "ContaCreditoID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'UsuarioID' }),
    __metadata("design:type", Number)
], CreateLancamentoscontabeisDto.prototype, "UsuarioID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'DataCriacao' }),
    __metadata("design:type", Date)
], CreateLancamentoscontabeisDto.prototype, "DataCriacao", void 0);
//# sourceMappingURL=create-lancamentoscontabeis.dto.js.map