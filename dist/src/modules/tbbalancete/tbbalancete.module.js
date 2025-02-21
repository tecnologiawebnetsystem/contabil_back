"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbbalanceteModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tbbalancete_service_1 = require("./tbbalancete.service");
const tbbalancete_controller_1 = require("./tbbalancete.controller");
const tbbalancete_entity_1 = require("./entities/tbbalancete.entity");
let TbbalanceteModule = class TbbalanceteModule {
};
exports.TbbalanceteModule = TbbalanceteModule;
exports.TbbalanceteModule = TbbalanceteModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tbbalancete_entity_1.Tbbalancete])],
        controllers: [tbbalancete_controller_1.TbbalanceteController],
        providers: [tbbalancete_service_1.TbbalanceteService],
    })
], TbbalanceteModule);
//# sourceMappingURL=tbbalancete.module.js.map