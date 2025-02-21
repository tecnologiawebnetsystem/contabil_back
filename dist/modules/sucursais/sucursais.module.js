"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SucursaisModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const sucursais_service_1 = require("./sucursais.service");
const sucursais_controller_1 = require("./sucursais.controller");
const sucursais_entity_1 = require("./entities/sucursais.entity");
let SucursaisModule = class SucursaisModule {
};
exports.SucursaisModule = SucursaisModule;
exports.SucursaisModule = SucursaisModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([sucursais_entity_1.Sucursais])],
        controllers: [sucursais_controller_1.SucursaisController],
        providers: [sucursais_service_1.SucursaisService],
    })
], SucursaisModule);
//# sourceMappingURL=sucursais.module.js.map