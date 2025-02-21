"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigquadroscircularesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const configquadroscirculares_service_1 = require("./configquadroscirculares.service");
const configquadroscirculares_controller_1 = require("./configquadroscirculares.controller");
const configquadroscirculares_entity_1 = require("./entities/configquadroscirculares.entity");
let ConfigquadroscircularesModule = class ConfigquadroscircularesModule {
};
exports.ConfigquadroscircularesModule = ConfigquadroscircularesModule;
exports.ConfigquadroscircularesModule = ConfigquadroscircularesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([configquadroscirculares_entity_1.Configquadroscirculares])],
        controllers: [configquadroscirculares_controller_1.ConfigquadroscircularesController],
        providers: [configquadroscirculares_service_1.ConfigquadroscircularesService],
    })
], ConfigquadroscircularesModule);
//# sourceMappingURL=configquadroscirculares.module.js.map