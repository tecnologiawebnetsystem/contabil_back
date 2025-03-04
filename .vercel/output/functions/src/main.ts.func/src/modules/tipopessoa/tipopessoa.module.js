"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipopessoaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tipopessoa_service_1 = require("./tipopessoa.service");
const tipopessoa_controller_1 = require("./tipopessoa.controller");
const tipopessoa_entity_1 = require("./entities/tipopessoa.entity");
let TipopessoaModule = class TipopessoaModule {
};
exports.TipopessoaModule = TipopessoaModule;
exports.TipopessoaModule = TipopessoaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tipopessoa_entity_1.Tipopessoa])],
        controllers: [tipopessoa_controller_1.TipopessoaController],
        providers: [tipopessoa_service_1.TipopessoaService],
    })
], TipopessoaModule);
//# sourceMappingURL=tipopessoa.module.js.map