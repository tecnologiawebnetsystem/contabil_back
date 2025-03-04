"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuracoes_seguradoraController = void 0;
const common_1 = require("@nestjs/common");
const configuracoes_seguradora_service_1 = require("./configuracoes_seguradora.service");
const create_configuracoes_seguradora_dto_1 = require("./dto/create-configuracoes_seguradora.dto");
const update_configuracoes_seguradora_dto_1 = require("./dto/update-configuracoes_seguradora.dto");
const swagger_1 = require("@nestjs/swagger");
let Configuracoes_seguradoraController = class Configuracoes_seguradoraController {
    constructor(configuracoes_seguradoraService) {
        this.configuracoes_seguradoraService = configuracoes_seguradoraService;
    }
    create(createConfiguracoes_seguradoraDto) {
        return this.configuracoes_seguradoraService.create(createConfiguracoes_seguradoraDto);
    }
    findAll() {
        return this.configuracoes_seguradoraService.findAll();
    }
    findOne(id) {
        return this.configuracoes_seguradoraService.findOne(+id);
    }
    update(id, updateConfiguracoes_seguradoraDto) {
        return this.configuracoes_seguradoraService.update(+id, updateConfiguracoes_seguradoraDto);
    }
    remove(id) {
        return this.configuracoes_seguradoraService.remove(+id);
    }
};
exports.Configuracoes_seguradoraController = Configuracoes_seguradoraController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new configuracoes_seguradora' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The configuracoes_seguradora has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_configuracoes_seguradora_dto_1.CreateConfiguracoes_seguradoraDto]),
    __metadata("design:returntype", void 0)
], Configuracoes_seguradoraController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all configuracoes_seguradora' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all configuracoes_seguradora.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Configuracoes_seguradoraController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a configuracoes_seguradora' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a configuracoes_seguradora.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Configuracoes_seguradoraController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a configuracoes_seguradora' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The configuracoes_seguradora has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_configuracoes_seguradora_dto_1.UpdateConfiguracoes_seguradoraDto]),
    __metadata("design:returntype", void 0)
], Configuracoes_seguradoraController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a configuracoes_seguradora' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The configuracoes_seguradora has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Configuracoes_seguradoraController.prototype, "remove", null);
exports.Configuracoes_seguradoraController = Configuracoes_seguradoraController = __decorate([
    (0, swagger_1.ApiTags)('configuracoes_seguradora'),
    (0, common_1.Controller)('configuracoes_seguradora'),
    __metadata("design:paramtypes", [configuracoes_seguradora_service_1.Configuracoes_seguradoraService])
], Configuracoes_seguradoraController);
//# sourceMappingURL=configuracoes_seguradora.controller.js.map