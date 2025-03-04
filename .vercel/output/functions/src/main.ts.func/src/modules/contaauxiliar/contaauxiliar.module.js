"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaauxiliarModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const contaauxiliar_service_1 = require("./contaauxiliar.service");
const contaauxiliar_controller_1 = require("./contaauxiliar.controller");
const contaauxiliar_entity_1 = require("./entities/contaauxiliar.entity");
let ContaauxiliarModule = class ContaauxiliarModule {
};
exports.ContaauxiliarModule = ContaauxiliarModule;
exports.ContaauxiliarModule = ContaauxiliarModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([contaauxiliar_entity_1.Contaauxiliar])],
        controllers: [contaauxiliar_controller_1.ContaauxiliarController],
        providers: [contaauxiliar_service_1.ContaauxiliarService],
    })
], ContaauxiliarModule);
//# sourceMappingURL=contaauxiliar.module.js.map