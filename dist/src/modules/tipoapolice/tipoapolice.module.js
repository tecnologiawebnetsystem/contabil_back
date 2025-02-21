"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoapoliceModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tipoapolice_service_1 = require("./tipoapolice.service");
const tipoapolice_controller_1 = require("./tipoapolice.controller");
const tipoapolice_entity_1 = require("./entities/tipoapolice.entity");
let TipoapoliceModule = class TipoapoliceModule {
};
exports.TipoapoliceModule = TipoapoliceModule;
exports.TipoapoliceModule = TipoapoliceModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tipoapolice_entity_1.Tipoapolice])],
        controllers: [tipoapolice_controller_1.TipoapoliceController],
        providers: [tipoapolice_service_1.TipoapoliceService],
    })
], TipoapoliceModule);
//# sourceMappingURL=tipoapolice.module.js.map