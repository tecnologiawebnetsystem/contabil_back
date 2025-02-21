"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipopagamentoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tipopagamento_service_1 = require("./tipopagamento.service");
const tipopagamento_controller_1 = require("./tipopagamento.controller");
const tipopagamento_entity_1 = require("./entities/tipopagamento.entity");
let TipopagamentoModule = class TipopagamentoModule {
};
exports.TipopagamentoModule = TipopagamentoModule;
exports.TipopagamentoModule = TipopagamentoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tipopagamento_entity_1.Tipopagamento])],
        controllers: [tipopagamento_controller_1.TipopagamentoController],
        providers: [tipopagamento_service_1.TipopagamentoService],
    })
], TipopagamentoModule);
//# sourceMappingURL=tipopagamento.module.js.map