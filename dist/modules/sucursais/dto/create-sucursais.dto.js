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
exports.CreateSucursaisDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateSucursaisDto {
}
exports.CreateSucursaisDto = CreateSucursaisDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'SucursalID' }),
    __metadata("design:type", Number)
], CreateSucursaisDto.prototype, "SucursalID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'CompanhiaID' }),
    __metadata("design:type", Number)
], CreateSucursaisDto.prototype, "CompanhiaID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nome', maxLength: 255 }),
    __metadata("design:type", String)
], CreateSucursaisDto.prototype, "Nome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Endereco', maxLength: 255 }),
    __metadata("design:type", String)
], CreateSucursaisDto.prototype, "Endereco", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cidade', maxLength: 100 }),
    __metadata("design:type", String)
], CreateSucursaisDto.prototype, "Cidade", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estado', maxLength: 50 }),
    __metadata("design:type", String)
], CreateSucursaisDto.prototype, "Estado", void 0);
//# sourceMappingURL=create-sucursais.dto.js.map