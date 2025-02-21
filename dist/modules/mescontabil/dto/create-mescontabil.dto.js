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
exports.CreateMescontabilDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateMescontabilDto {
}
exports.CreateMescontabilDto = CreateMescontabilDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'created_at' }),
    __metadata("design:type", Date)
], CreateMescontabilDto.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'seguradora_id' }),
    __metadata("design:type", Number)
], CreateMescontabilDto.prototype, "seguradora_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'MesContabil', maxLength: 10 }),
    __metadata("design:type", String)
], CreateMescontabilDto.prototype, "MesContabil", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Ativo' }),
    __metadata("design:type", Boolean)
], CreateMescontabilDto.prototype, "Ativo", void 0);
//# sourceMappingURL=create-mescontabil.dto.js.map