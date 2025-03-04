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
exports.Planocontas = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const base_entity_1 = require("../../../shared/base.entity");
let Planocontas = class Planocontas extends base_entity_1.BaseEntity {
};
exports.Planocontas = Planocontas;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Planocontas.prototype, "ContaID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, typeorm_1.Column)({ name: 'CodigoConta', nullable: false }),
    __metadata("design:type", String)
], Planocontas.prototype, "CodigoConta", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, typeorm_1.Column)({ name: 'NomeConta', nullable: false }),
    __metadata("design:type", String)
], Planocontas.prototype, "NomeConta", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, typeorm_1.Column)({ name: 'TipoConta', nullable: false }),
    __metadata("design:type", String)
], Planocontas.prototype, "TipoConta", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, default: ((1)) }),
    (0, typeorm_1.Column)({ name: 'ContaSUSEP', nullable: false, default: ((1)) }),
    __metadata("design:type", Boolean)
], Planocontas.prototype, "ContaSUSEP", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'ContaPaiID', nullable: true }),
    __metadata("design:type", Number)
], Planocontas.prototype, "ContaPaiID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, typeorm_1.Column)({ name: 'CompanhiaID', nullable: false }),
    __metadata("design:type", Number)
], Planocontas.prototype, "CompanhiaID", void 0);
exports.Planocontas = Planocontas = __decorate([
    (0, typeorm_1.Entity)('PlanoContas')
], Planocontas);
//# sourceMappingURL=planocontas.entity.js.map