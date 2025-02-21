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
exports.CreateRelatoriosfipDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateRelatoriosfipDto {
}
exports.CreateRelatoriosfipDto = CreateRelatoriosfipDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'RelatorioID' }),
    __metadata("design:type", Number)
], CreateRelatoriosfipDto.prototype, "RelatorioID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'CompanhiaID' }),
    __metadata("design:type", Number)
], CreateRelatoriosfipDto.prototype, "CompanhiaID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'PeriodoReferencia' }),
    __metadata("design:type", Date)
], CreateRelatoriosfipDto.prototype, "PeriodoReferencia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'TipoQuadro', maxLength: 50 }),
    __metadata("design:type", String)
], CreateRelatoriosfipDto.prototype, "TipoQuadro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'DataEnvio' }),
    __metadata("design:type", Date)
], CreateRelatoriosfipDto.prototype, "DataEnvio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status', maxLength: 20 }),
    __metadata("design:type", String)
], CreateRelatoriosfipDto.prototype, "Status", void 0);
//# sourceMappingURL=create-relatoriosfip.dto.js.map