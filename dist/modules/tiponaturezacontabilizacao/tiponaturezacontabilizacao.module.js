"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiponaturezacontabilizacaoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tiponaturezacontabilizacao_service_1 = require("./tiponaturezacontabilizacao.service");
const tiponaturezacontabilizacao_controller_1 = require("./tiponaturezacontabilizacao.controller");
const tiponaturezacontabilizacao_entity_1 = require("./entities/tiponaturezacontabilizacao.entity");
let TiponaturezacontabilizacaoModule = class TiponaturezacontabilizacaoModule {
};
exports.TiponaturezacontabilizacaoModule = TiponaturezacontabilizacaoModule;
exports.TiponaturezacontabilizacaoModule = TiponaturezacontabilizacaoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tiponaturezacontabilizacao_entity_1.Tiponaturezacontabilizacao])],
        controllers: [tiponaturezacontabilizacao_controller_1.TiponaturezacontabilizacaoController],
        providers: [tiponaturezacontabilizacao_service_1.TiponaturezacontabilizacaoService],
    })
], TiponaturezacontabilizacaoModule);
//# sourceMappingURL=tiponaturezacontabilizacao.module.js.map