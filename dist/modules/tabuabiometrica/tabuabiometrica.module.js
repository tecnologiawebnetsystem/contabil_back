"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabuabiometricaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tabuabiometrica_service_1 = require("./tabuabiometrica.service");
const tabuabiometrica_controller_1 = require("./tabuabiometrica.controller");
const tabuabiometrica_entity_1 = require("./entities/tabuabiometrica.entity");
let TabuabiometricaModule = class TabuabiometricaModule {
};
exports.TabuabiometricaModule = TabuabiometricaModule;
exports.TabuabiometricaModule = TabuabiometricaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tabuabiometrica_entity_1.Tabuabiometrica])],
        controllers: [tabuabiometrica_controller_1.TabuabiometricaController],
        providers: [tabuabiometrica_service_1.TabuabiometricaService],
    })
], TabuabiometricaModule);
//# sourceMappingURL=tabuabiometrica.module.js.map