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
exports.TipocontabilizacaoController = void 0;
const common_1 = require("@nestjs/common");
const tipocontabilizacao_service_1 = require("./tipocontabilizacao.service");
const create_tipocontabilizacao_dto_1 = require("./dto/create-tipocontabilizacao.dto");
const update_tipocontabilizacao_dto_1 = require("./dto/update-tipocontabilizacao.dto");
const swagger_1 = require("@nestjs/swagger");
let TipocontabilizacaoController = class TipocontabilizacaoController {
    constructor(tipocontabilizacaoService) {
        this.tipocontabilizacaoService = tipocontabilizacaoService;
    }
    create(createTipocontabilizacaoDto) {
        return this.tipocontabilizacaoService.create(createTipocontabilizacaoDto);
    }
    findAll() {
        return this.tipocontabilizacaoService.findAll();
    }
    findOne(id) {
        return this.tipocontabilizacaoService.findOne(+id);
    }
    update(id, updateTipocontabilizacaoDto) {
        return this.tipocontabilizacaoService.update(+id, updateTipocontabilizacaoDto);
    }
    remove(id) {
        return this.tipocontabilizacaoService.remove(+id);
    }
};
exports.TipocontabilizacaoController = TipocontabilizacaoController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new tipocontabilizacao' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The tipocontabilizacao has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipocontabilizacao_dto_1.CreateTipocontabilizacaoDto]),
    __metadata("design:returntype", void 0)
], TipocontabilizacaoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all tipocontabilizacao' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all tipocontabilizacao.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TipocontabilizacaoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a tipocontabilizacao' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a tipocontabilizacao.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipocontabilizacaoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a tipocontabilizacao' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The tipocontabilizacao has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tipocontabilizacao_dto_1.UpdateTipocontabilizacaoDto]),
    __metadata("design:returntype", void 0)
], TipocontabilizacaoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a tipocontabilizacao' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The tipocontabilizacao has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipocontabilizacaoController.prototype, "remove", null);
exports.TipocontabilizacaoController = TipocontabilizacaoController = __decorate([
    (0, swagger_1.ApiTags)('tipocontabilizacao'),
    (0, common_1.Controller)('tipocontabilizacao'),
    __metadata("design:paramtypes", [tipocontabilizacao_service_1.TipocontabilizacaoService])
], TipocontabilizacaoController);
//# sourceMappingURL=tipocontabilizacao.controller.js.map