"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipopessoaseguroModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tipopessoaseguro_service_1 = require("./tipopessoaseguro.service");
const tipopessoaseguro_controller_1 = require("./tipopessoaseguro.controller");
const tipopessoaseguro_entity_1 = require("./entities/tipopessoaseguro.entity");
let TipopessoaseguroModule = class TipopessoaseguroModule {
};
exports.TipopessoaseguroModule = TipopessoaseguroModule;
exports.TipopessoaseguroModule = TipopessoaseguroModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tipopessoaseguro_entity_1.Tipopessoaseguro])],
        controllers: [tipopessoaseguro_controller_1.TipopessoaseguroController],
        providers: [tipopessoaseguro_service_1.TipopessoaseguroService],
    })
], TipopessoaseguroModule);
//# sourceMappingURL=tipopessoaseguro.module.js.map