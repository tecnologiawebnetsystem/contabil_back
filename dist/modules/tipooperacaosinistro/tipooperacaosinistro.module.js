"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipooperacaosinistroModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tipooperacaosinistro_service_1 = require("./tipooperacaosinistro.service");
const tipooperacaosinistro_controller_1 = require("./tipooperacaosinistro.controller");
const tipooperacaosinistro_entity_1 = require("./entities/tipooperacaosinistro.entity");
let TipooperacaosinistroModule = class TipooperacaosinistroModule {
};
exports.TipooperacaosinistroModule = TipooperacaosinistroModule;
exports.TipooperacaosinistroModule = TipooperacaosinistroModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tipooperacaosinistro_entity_1.Tipooperacaosinistro])],
        controllers: [tipooperacaosinistro_controller_1.TipooperacaosinistroController],
        providers: [tipooperacaosinistro_service_1.TipooperacaosinistroService],
    })
], TipooperacaosinistroModule);
//# sourceMappingURL=tipooperacaosinistro.module.js.map