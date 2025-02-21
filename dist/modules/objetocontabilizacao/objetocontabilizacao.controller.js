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
exports.ObjetocontabilizacaoController = void 0;
const common_1 = require("@nestjs/common");
const objetocontabilizacao_service_1 = require("./objetocontabilizacao.service");
const create_objetocontabilizacao_dto_1 = require("./dto/create-objetocontabilizacao.dto");
const update_objetocontabilizacao_dto_1 = require("./dto/update-objetocontabilizacao.dto");
const swagger_1 = require("@nestjs/swagger");
let ObjetocontabilizacaoController = class ObjetocontabilizacaoController {
    constructor(objetocontabilizacaoService) {
        this.objetocontabilizacaoService = objetocontabilizacaoService;
    }
    create(createObjetocontabilizacaoDto) {
        return this.objetocontabilizacaoService.create(createObjetocontabilizacaoDto);
    }
    findAll() {
        return this.objetocontabilizacaoService.findAll();
    }
    findOne(id) {
        return this.objetocontabilizacaoService.findOne(+id);
    }
    update(id, updateObjetocontabilizacaoDto) {
        return this.objetocontabilizacaoService.update(+id, updateObjetocontabilizacaoDto);
    }
    remove(id) {
        return this.objetocontabilizacaoService.remove(+id);
    }
};
exports.ObjetocontabilizacaoController = ObjetocontabilizacaoController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new objetocontabilizacao' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The objetocontabilizacao has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_objetocontabilizacao_dto_1.CreateObjetocontabilizacaoDto]),
    __metadata("design:returntype", void 0)
], ObjetocontabilizacaoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all objetocontabilizacao' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all objetocontabilizacao.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ObjetocontabilizacaoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a objetocontabilizacao' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a objetocontabilizacao.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ObjetocontabilizacaoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a objetocontabilizacao' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The objetocontabilizacao has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_objetocontabilizacao_dto_1.UpdateObjetocontabilizacaoDto]),
    __metadata("design:returntype", void 0)
], ObjetocontabilizacaoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a objetocontabilizacao' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The objetocontabilizacao has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ObjetocontabilizacaoController.prototype, "remove", null);
exports.ObjetocontabilizacaoController = ObjetocontabilizacaoController = __decorate([
    (0, swagger_1.ApiTags)('objetocontabilizacao'),
    (0, common_1.Controller)('objetocontabilizacao'),
    __metadata("design:paramtypes", [objetocontabilizacao_service_1.ObjetocontabilizacaoService])
], ObjetocontabilizacaoController);
//# sourceMappingURL=objetocontabilizacao.controller.js.map