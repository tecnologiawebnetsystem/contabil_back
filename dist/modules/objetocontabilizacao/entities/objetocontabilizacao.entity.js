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
exports.Objetocontabilizacao = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const base_entity_1 = require("../../../shared/base.entity");
let Objetocontabilizacao = class Objetocontabilizacao extends base_entity_1.BaseEntity {
};
exports.Objetocontabilizacao = Objetocontabilizacao;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Objetocontabilizacao.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], Objetocontabilizacao.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'seguradora_id', nullable: true }),
    __metadata("design:type", Number)
], Objetocontabilizacao.prototype, "seguradora_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'Objeto', nullable: true }),
    __metadata("design:type", String)
], Objetocontabilizacao.prototype, "Objeto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'Descricao', nullable: true }),
    __metadata("design:type", String)
], Objetocontabilizacao.prototype, "Descricao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'flgObjetoContabilizacaoAtivo', nullable: true }),
    __metadata("design:type", Boolean)
], Objetocontabilizacao.prototype, "flgObjetoContabilizacaoAtivo", void 0);
exports.Objetocontabilizacao = Objetocontabilizacao = __decorate([
    (0, typeorm_1.Entity)('ObjetoContabilizacao')
], Objetocontabilizacao);
//# sourceMappingURL=objetocontabilizacao.entity.js.map