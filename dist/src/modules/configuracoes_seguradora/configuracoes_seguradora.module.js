"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuracoes_seguradoraModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const configuracoes_seguradora_service_1 = require("./configuracoes_seguradora.service");
const configuracoes_seguradora_controller_1 = require("./configuracoes_seguradora.controller");
const configuracoes_seguradora_entity_1 = require("./entities/configuracoes_seguradora.entity");
let Configuracoes_seguradoraModule = class Configuracoes_seguradoraModule {
};
exports.Configuracoes_seguradoraModule = Configuracoes_seguradoraModule;
exports.Configuracoes_seguradoraModule = Configuracoes_seguradoraModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([configuracoes_seguradora_entity_1.Configuracoes_seguradora])],
        controllers: [configuracoes_seguradora_controller_1.Configuracoes_seguradoraController],
        providers: [configuracoes_seguradora_service_1.Configuracoes_seguradoraService],
    })
], Configuracoes_seguradoraModule);
//# sourceMappingURL=configuracoes_seguradora.module.js.map