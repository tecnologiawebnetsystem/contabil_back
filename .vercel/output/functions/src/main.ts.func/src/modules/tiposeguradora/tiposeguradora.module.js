"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiposeguradoraModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tiposeguradora_service_1 = require("./tiposeguradora.service");
const tiposeguradora_controller_1 = require("./tiposeguradora.controller");
const tiposeguradora_entity_1 = require("./entities/tiposeguradora.entity");
let TiposeguradoraModule = class TiposeguradoraModule {
};
exports.TiposeguradoraModule = TiposeguradoraModule;
exports.TiposeguradoraModule = TiposeguradoraModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tiposeguradora_entity_1.Tiposeguradora])],
        controllers: [tiposeguradora_controller_1.TiposeguradoraController],
        providers: [tiposeguradora_service_1.TiposeguradoraService],
    })
], TiposeguradoraModule);
//# sourceMappingURL=tiposeguradora.module.js.map