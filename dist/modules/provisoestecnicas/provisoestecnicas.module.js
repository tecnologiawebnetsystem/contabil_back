"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvisoestecnicasModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const provisoestecnicas_service_1 = require("./provisoestecnicas.service");
const provisoestecnicas_controller_1 = require("./provisoestecnicas.controller");
const provisoestecnicas_entity_1 = require("./entities/provisoestecnicas.entity");
let ProvisoestecnicasModule = class ProvisoestecnicasModule {
};
exports.ProvisoestecnicasModule = ProvisoestecnicasModule;
exports.ProvisoestecnicasModule = ProvisoestecnicasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([provisoestecnicas_entity_1.Provisoestecnicas])],
        controllers: [provisoestecnicas_controller_1.ProvisoestecnicasController],
        providers: [provisoestecnicas_service_1.ProvisoestecnicasService],
    })
], ProvisoestecnicasModule);
//# sourceMappingURL=provisoestecnicas.module.js.map