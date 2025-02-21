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
exports.CreateEventosDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateEventosDto {
}
exports.CreateEventosDto = CreateEventosDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'created_at' }),
    __metadata("design:type", Date)
], CreateEventosDto.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'seguradora_id' }),
    __metadata("design:type", Number)
], CreateEventosDto.prototype, "seguradora_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'CodigoEvento' }),
    __metadata("design:type", Number)
], CreateEventosDto.prototype, "CodigoEvento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Descricao', maxLength: 50 }),
    __metadata("design:type", String)
], CreateEventosDto.prototype, "Descricao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ValorCoeficiente' }),
    __metadata("design:type", Number)
], CreateEventosDto.prototype, "ValorCoeficiente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'id_modulo_contabil' }),
    __metadata("design:type", Number)
], CreateEventosDto.prototype, "id_modulo_contabil", void 0);
//# sourceMappingURL=create-eventos.dto.js.map