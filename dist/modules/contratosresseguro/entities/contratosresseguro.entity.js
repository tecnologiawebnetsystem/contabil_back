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
exports.Contratosresseguro = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const base_entity_1 = require("../../../shared/base.entity");
let Contratosresseguro = class Contratosresseguro extends base_entity_1.BaseEntity {
};
exports.Contratosresseguro = Contratosresseguro;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Contratosresseguro.prototype, "ContratoID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, typeorm_1.Column)({ name: 'CompanhiaID', nullable: false }),
    __metadata("design:type", Number)
], Contratosresseguro.prototype, "CompanhiaID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, typeorm_1.Column)({ name: 'NumeroContrato', nullable: false }),
    __metadata("design:type", String)
], Contratosresseguro.prototype, "NumeroContrato", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, typeorm_1.Column)({ name: 'Resseguradora', nullable: false }),
    __metadata("design:type", String)
], Contratosresseguro.prototype, "Resseguradora", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, typeorm_1.Column)({ name: 'TipoContrato', nullable: false }),
    __metadata("design:type", String)
], Contratosresseguro.prototype, "TipoContrato", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, typeorm_1.Column)({ name: 'DataInicio', nullable: false }),
    __metadata("design:type", Date)
], Contratosresseguro.prototype, "DataInicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, typeorm_1.Column)({ name: 'DataFim', nullable: false }),
    __metadata("design:type", Date)
], Contratosresseguro.prototype, "DataFim", void 0);
exports.Contratosresseguro = Contratosresseguro = __decorate([
    (0, typeorm_1.Entity)('ContratosResseguro')
], Contratosresseguro);
//# sourceMappingURL=contratosresseguro.entity.js.map