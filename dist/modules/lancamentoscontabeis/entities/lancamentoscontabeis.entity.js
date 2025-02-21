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
exports.Lancamentoscontabeis = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const base_entity_1 = require("../../../shared/base.entity");
let Lancamentoscontabeis = class Lancamentoscontabeis extends base_entity_1.BaseEntity {
};
exports.Lancamentoscontabeis = Lancamentoscontabeis;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Lancamentoscontabeis.prototype, "LancamentoID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, typeorm_1.Column)({ name: 'CompanhiaID', nullable: false }),
    __metadata("design:type", Number)
], Lancamentoscontabeis.prototype, "CompanhiaID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, typeorm_1.Column)({ name: 'DataLancamento', nullable: false }),
    __metadata("design:type", Date)
], Lancamentoscontabeis.prototype, "DataLancamento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, typeorm_1.Column)({ name: 'Descricao', nullable: false }),
    __metadata("design:type", String)
], Lancamentoscontabeis.prototype, "Descricao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, typeorm_1.Column)({ name: 'Valor', nullable: false }),
    __metadata("design:type", Number)
], Lancamentoscontabeis.prototype, "Valor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, typeorm_1.Column)({ name: 'ContaDebitoID', nullable: false }),
    __metadata("design:type", Number)
], Lancamentoscontabeis.prototype, "ContaDebitoID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, typeorm_1.Column)({ name: 'ContaCreditoID', nullable: false }),
    __metadata("design:type", Number)
], Lancamentoscontabeis.prototype, "ContaCreditoID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, typeorm_1.Column)({ name: 'UsuarioID', nullable: false }),
    __metadata("design:type", Number)
], Lancamentoscontabeis.prototype, "UsuarioID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: () => new Date() }),
    (0, typeorm_1.Column)({ name: 'DataCriacao', nullable: true, default: () => new Date() }),
    __metadata("design:type", Date)
], Lancamentoscontabeis.prototype, "DataCriacao", void 0);
exports.Lancamentoscontabeis = Lancamentoscontabeis = __decorate([
    (0, typeorm_1.Entity)('LancamentosContabeis')
], Lancamentoscontabeis);
//# sourceMappingURL=lancamentoscontabeis.entity.js.map