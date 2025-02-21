"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipocontratoresseguroModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tipocontratoresseguro_service_1 = require("./tipocontratoresseguro.service");
const tipocontratoresseguro_controller_1 = require("./tipocontratoresseguro.controller");
const tipocontratoresseguro_entity_1 = require("./entities/tipocontratoresseguro.entity");
let TipocontratoresseguroModule = class TipocontratoresseguroModule {
};
exports.TipocontratoresseguroModule = TipocontratoresseguroModule;
exports.TipocontratoresseguroModule = TipocontratoresseguroModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tipocontratoresseguro_entity_1.Tipocontratoresseguro])],
        controllers: [tipocontratoresseguro_controller_1.TipocontratoresseguroController],
        providers: [tipocontratoresseguro_service_1.TipocontratoresseguroService],
    })
], TipocontratoresseguroModule);
//# sourceMappingURL=tipocontratoresseguro.module.js.map