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
exports.CreateContratosresseguroDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateContratosresseguroDto {
}
exports.CreateContratosresseguroDto = CreateContratosresseguroDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ContratoID' }),
    __metadata("design:type", Number)
], CreateContratosresseguroDto.prototype, "ContratoID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'CompanhiaID' }),
    __metadata("design:type", Number)
], CreateContratosresseguroDto.prototype, "CompanhiaID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'NumeroContrato', maxLength: 50 }),
    __metadata("design:type", String)
], CreateContratosresseguroDto.prototype, "NumeroContrato", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Resseguradora', maxLength: 255 }),
    __metadata("design:type", String)
], CreateContratosresseguroDto.prototype, "Resseguradora", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'TipoContrato', maxLength: 50 }),
    __metadata("design:type", String)
], CreateContratosresseguroDto.prototype, "TipoContrato", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'DataInicio' }),
    __metadata("design:type", Date)
], CreateContratosresseguroDto.prototype, "DataInicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'DataFim' }),
    __metadata("design:type", Date)
], CreateContratosresseguroDto.prototype, "DataFim", void 0);
//# sourceMappingURL=create-contratosresseguro.dto.js.map