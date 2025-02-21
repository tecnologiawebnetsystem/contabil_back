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
exports.TipooperacaosinistroController = void 0;
const common_1 = require("@nestjs/common");
const tipooperacaosinistro_service_1 = require("./tipooperacaosinistro.service");
const create_tipooperacaosinistro_dto_1 = require("./dto/create-tipooperacaosinistro.dto");
const update_tipooperacaosinistro_dto_1 = require("./dto/update-tipooperacaosinistro.dto");
const swagger_1 = require("@nestjs/swagger");
let TipooperacaosinistroController = class TipooperacaosinistroController {
    constructor(tipooperacaosinistroService) {
        this.tipooperacaosinistroService = tipooperacaosinistroService;
    }
    create(createTipooperacaosinistroDto) {
        return this.tipooperacaosinistroService.create(createTipooperacaosinistroDto);
    }
    findAll() {
        return this.tipooperacaosinistroService.findAll();
    }
    findOne(id) {
        return this.tipooperacaosinistroService.findOne(+id);
    }
    update(id, updateTipooperacaosinistroDto) {
        return this.tipooperacaosinistroService.update(+id, updateTipooperacaosinistroDto);
    }
    remove(id) {
        return this.tipooperacaosinistroService.remove(+id);
    }
};
exports.TipooperacaosinistroController = TipooperacaosinistroController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new tipooperacaosinistro' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The tipooperacaosinistro has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipooperacaosinistro_dto_1.CreateTipooperacaosinistroDto]),
    __metadata("design:returntype", void 0)
], TipooperacaosinistroController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all tipooperacaosinistro' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all tipooperacaosinistro.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TipooperacaosinistroController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a tipooperacaosinistro' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a tipooperacaosinistro.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipooperacaosinistroController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a tipooperacaosinistro' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The tipooperacaosinistro has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tipooperacaosinistro_dto_1.UpdateTipooperacaosinistroDto]),
    __metadata("design:returntype", void 0)
], TipooperacaosinistroController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a tipooperacaosinistro' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The tipooperacaosinistro has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipooperacaosinistroController.prototype, "remove", null);
exports.TipooperacaosinistroController = TipooperacaosinistroController = __decorate([
    (0, swagger_1.ApiTags)('tipooperacaosinistro'),
    (0, common_1.Controller)('tipooperacaosinistro'),
    __metadata("design:paramtypes", [tipooperacaosinistro_service_1.TipooperacaosinistroService])
], TipooperacaosinistroController);
//# sourceMappingURL=tipooperacaosinistro.controller.js.map