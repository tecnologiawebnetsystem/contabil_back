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
exports.Mescontabil = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const base_entity_1 = require("../../../shared/base.entity");
let Mescontabil = class Mescontabil extends base_entity_1.BaseEntity {
};
exports.Mescontabil = Mescontabil;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Mescontabil.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], Mescontabil.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'seguradora_id', nullable: true }),
    __metadata("design:type", Number)
], Mescontabil.prototype, "seguradora_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'MesContabil', nullable: true }),
    __metadata("design:type", String)
], Mescontabil.prototype, "MesContabil", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, typeorm_1.Column)({ name: 'Ativo', nullable: true }),
    __metadata("design:type", Boolean)
], Mescontabil.prototype, "Ativo", void 0);
exports.Mescontabil = Mescontabil = __decorate([
    (0, typeorm_1.Entity)('MesContabil')
], Mescontabil);
//# sourceMappingURL=mescontabil.entity.js.map