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
exports.Circulares = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const base_entity_1 = require("../../../shared/base.entity");
let Circulares = class Circulares extends base_entity_1.BaseEntity {
};
exports.Circulares = Circulares;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Circulares.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], Circulares.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'seguradora_id', nullable: true }),
    __metadata("design:type", Number)
], Circulares.prototype, "seguradora_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'CodigoCircular', nullable: true }),
    __metadata("design:type", String)
], Circulares.prototype, "CodigoCircular", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'NomeCircular', nullable: true }),
    __metadata("design:type", String)
], Circulares.prototype, "NomeCircular", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'NumeroAnexo', nullable: true }),
    __metadata("design:type", String)
], Circulares.prototype, "NumeroAnexo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'NomeQuadro', nullable: true }),
    __metadata("design:type", String)
], Circulares.prototype, "NomeQuadro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'Ativo', nullable: true }),
    __metadata("design:type", Boolean)
], Circulares.prototype, "Ativo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'DescricaoQuadro', nullable: true }),
    __metadata("design:type", String)
], Circulares.prototype, "DescricaoQuadro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'Periodicidade', nullable: true }),
    __metadata("design:type", String)
], Circulares.prototype, "Periodicidade", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'TipoArquivo', nullable: true }),
    __metadata("design:type", String)
], Circulares.prototype, "TipoArquivo", void 0);
exports.Circulares = Circulares = __decorate([
    (0, typeorm_1.Entity)('Circulares')
], Circulares);
//# sourceMappingURL=circulares.entity.js.map