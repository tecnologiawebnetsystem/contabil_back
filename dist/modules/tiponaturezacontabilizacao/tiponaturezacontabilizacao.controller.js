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
exports.TiponaturezacontabilizacaoController = void 0;
const common_1 = require("@nestjs/common");
const tiponaturezacontabilizacao_service_1 = require("./tiponaturezacontabilizacao.service");
const create_tiponaturezacontabilizacao_dto_1 = require("./dto/create-tiponaturezacontabilizacao.dto");
const update_tiponaturezacontabilizacao_dto_1 = require("./dto/update-tiponaturezacontabilizacao.dto");
const swagger_1 = require("@nestjs/swagger");
let TiponaturezacontabilizacaoController = class TiponaturezacontabilizacaoController {
    constructor(tiponaturezacontabilizacaoService) {
        this.tiponaturezacontabilizacaoService = tiponaturezacontabilizacaoService;
    }
    create(createTiponaturezacontabilizacaoDto) {
        return this.tiponaturezacontabilizacaoService.create(createTiponaturezacontabilizacaoDto);
    }
    findAll() {
        return this.tiponaturezacontabilizacaoService.findAll();
    }
    findOne(id) {
        return this.tiponaturezacontabilizacaoService.findOne(+id);
    }
    update(id, updateTiponaturezacontabilizacaoDto) {
        return this.tiponaturezacontabilizacaoService.update(+id, updateTiponaturezacontabilizacaoDto);
    }
    remove(id) {
        return this.tiponaturezacontabilizacaoService.remove(+id);
    }
};
exports.TiponaturezacontabilizacaoController = TiponaturezacontabilizacaoController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new tiponaturezacontabilizacao' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The tiponaturezacontabilizacao has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tiponaturezacontabilizacao_dto_1.CreateTiponaturezacontabilizacaoDto]),
    __metadata("design:returntype", void 0)
], TiponaturezacontabilizacaoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all tiponaturezacontabilizacao' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all tiponaturezacontabilizacao.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TiponaturezacontabilizacaoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a tiponaturezacontabilizacao' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a tiponaturezacontabilizacao.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TiponaturezacontabilizacaoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a tiponaturezacontabilizacao' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The tiponaturezacontabilizacao has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tiponaturezacontabilizacao_dto_1.UpdateTiponaturezacontabilizacaoDto]),
    __metadata("design:returntype", void 0)
], TiponaturezacontabilizacaoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a tiponaturezacontabilizacao' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The tiponaturezacontabilizacao has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TiponaturezacontabilizacaoController.prototype, "remove", null);
exports.TiponaturezacontabilizacaoController = TiponaturezacontabilizacaoController = __decorate([
    (0, swagger_1.ApiTags)('tiponaturezacontabilizacao'),
    (0, common_1.Controller)('tiponaturezacontabilizacao'),
    __metadata("design:paramtypes", [tiponaturezacontabilizacao_service_1.TiponaturezacontabilizacaoService])
], TiponaturezacontabilizacaoController);
//# sourceMappingURL=tiponaturezacontabilizacao.controller.js.map