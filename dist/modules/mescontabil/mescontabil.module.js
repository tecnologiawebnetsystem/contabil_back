"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MescontabilModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const mescontabil_service_1 = require("./mescontabil.service");
const mescontabil_controller_1 = require("./mescontabil.controller");
const mescontabil_entity_1 = require("./entities/mescontabil.entity");
let MescontabilModule = class MescontabilModule {
};
exports.MescontabilModule = MescontabilModule;
exports.MescontabilModule = MescontabilModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([mescontabil_entity_1.Mescontabil])],
        controllers: [mescontabil_controller_1.MescontabilController],
        providers: [mescontabil_service_1.MescontabilService],
    })
], MescontabilModule);
//# sourceMappingURL=mescontabil.module.js.map