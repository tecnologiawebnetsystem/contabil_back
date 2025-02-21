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
exports.Provisoestecnicas = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const base_entity_1 = require("../../../shared/base.entity");
let Provisoestecnicas = class Provisoestecnicas extends base_entity_1.BaseEntity {
};
exports.Provisoestecnicas = Provisoestecnicas;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Provisoestecnicas.prototype, "ProvisaoID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, typeorm_1.Column)({ name: 'CompanhiaID', nullable: false }),
    __metadata("design:type", Number)
], Provisoestecnicas.prototype, "CompanhiaID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, typeorm_1.Column)({ name: 'TipoProvisao', nullable: false }),
    __metadata("design:type", String)
], Provisoestecnicas.prototype, "TipoProvisao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, typeorm_1.Column)({ name: 'DataCalculo', nullable: false }),
    __metadata("design:type", Date)
], Provisoestecnicas.prototype, "DataCalculo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, typeorm_1.Column)({ name: 'Valor', nullable: false }),
    __metadata("design:type", Number)
], Provisoestecnicas.prototype, "Valor", void 0);
exports.Provisoestecnicas = Provisoestecnicas = __decorate([
    (0, typeorm_1.Entity)('ProvisoesTecnicas')
], Provisoestecnicas);
//# sourceMappingURL=provisoestecnicas.entity.js.map