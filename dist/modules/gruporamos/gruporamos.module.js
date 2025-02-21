"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GruporamosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const gruporamos_service_1 = require("./gruporamos.service");
const gruporamos_controller_1 = require("./gruporamos.controller");
const gruporamos_entity_1 = require("./entities/gruporamos.entity");
let GruporamosModule = class GruporamosModule {
};
exports.GruporamosModule = GruporamosModule;
exports.GruporamosModule = GruporamosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([gruporamos_entity_1.Gruporamos])],
        controllers: [gruporamos_controller_1.GruporamosController],
        providers: [gruporamos_service_1.GruporamosService],
    })
], GruporamosModule);
//# sourceMappingURL=gruporamos.module.js.map