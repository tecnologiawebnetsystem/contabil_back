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
exports.Configcontabil = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const base_entity_1 = require("../../../shared/base.entity");
let Configcontabil = class Configcontabil extends base_entity_1.BaseEntity {
};
exports.Configcontabil = Configcontabil;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Configcontabil.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], Configcontabil.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'seguradora_id', nullable: true }),
    __metadata("design:type", Number)
], Configcontabil.prototype, "seguradora_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'id_eventos', nullable: true }),
    __metadata("design:type", Number)
], Configcontabil.prototype, "id_eventos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'id_objeto_contabilizacao', nullable: true }),
    __metadata("design:type", Number)
], Configcontabil.prototype, "id_objeto_contabilizacao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'id_tipo_resseguradora', nullable: true }),
    __metadata("design:type", Number)
], Configcontabil.prototype, "id_tipo_resseguradora", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'id_plano_contas', nullable: true }),
    __metadata("design:type", Number)
], Configcontabil.prototype, "id_plano_contas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'id_ramo_contabil', nullable: true }),
    __metadata("design:type", Number)
], Configcontabil.prototype, "id_ramo_contabil", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'id_historico_padrao', nullable: true }),
    __metadata("design:type", Number)
], Configcontabil.prototype, "id_historico_padrao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'id_tipo_natureza_contabilizacao', nullable: true }),
    __metadata("design:type", Number)
], Configcontabil.prototype, "id_tipo_natureza_contabilizacao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'id_tipo_contabilizacao', nullable: true }),
    __metadata("design:type", Number)
], Configcontabil.prototype, "id_tipo_contabilizacao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'flgContabiliza', nullable: true }),
    __metadata("design:type", Boolean)
], Configcontabil.prototype, "flgContabiliza", void 0);
exports.Configcontabil = Configcontabil = __decorate([
    (0, typeorm_1.Entity)('ConfigContabil')
], Configcontabil);
//# sourceMappingURL=configcontabil.entity.js.map