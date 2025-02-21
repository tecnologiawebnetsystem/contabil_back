"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanocontasModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const planocontas_service_1 = require("./planocontas.service");
const planocontas_controller_1 = require("./planocontas.controller");
const planocontas_entity_1 = require("./entities/planocontas.entity");
let PlanocontasModule = class PlanocontasModule {
};
exports.PlanocontasModule = PlanocontasModule;
exports.PlanocontasModule = PlanocontasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([planocontas_entity_1.Planocontas])],
        controllers: [planocontas_controller_1.PlanocontasController],
        providers: [planocontas_service_1.PlanocontasService],
    })
], PlanocontasModule);
//# sourceMappingURL=planocontas.module.js.map