"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModulocontabilModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const modulocontabil_service_1 = require("./modulocontabil.service");
const modulocontabil_controller_1 = require("./modulocontabil.controller");
const modulocontabil_entity_1 = require("./entities/modulocontabil.entity");
let ModulocontabilModule = class ModulocontabilModule {
};
exports.ModulocontabilModule = ModulocontabilModule;
exports.ModulocontabilModule = ModulocontabilModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([modulocontabil_entity_1.Modulocontabil])],
        controllers: [modulocontabil_controller_1.ModulocontabilController],
        providers: [modulocontabil_service_1.ModulocontabilService],
    })
], ModulocontabilModule);
//# sourceMappingURL=modulocontabil.module.js.map