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
exports.CreateConfiguracoes_seguradoraDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateConfiguracoes_seguradoraDto {
}
exports.CreateConfiguracoes_seguradoraDto = CreateConfiguracoes_seguradoraDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'created_at' }),
    __metadata("design:type", Date)
], CreateConfiguracoes_seguradoraDto.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'seguradora_id' }),
    __metadata("design:type", Number)
], CreateConfiguracoes_seguradoraDto.prototype, "seguradora_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'cor_primaria', maxLength: 50 }),
    __metadata("design:type", String)
], CreateConfiguracoes_seguradoraDto.prototype, "cor_primaria", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'cor_segundaria', maxLength: 50 }),
    __metadata("design:type", String)
], CreateConfiguracoes_seguradoraDto.prototype, "cor_segundaria", void 0);
//# sourceMappingURL=create-configuracoes_seguradora.dto.js.map