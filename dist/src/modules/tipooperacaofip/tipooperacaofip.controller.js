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
exports.TipooperacaofipController = void 0;
const common_1 = require("@nestjs/common");
const tipooperacaofip_service_1 = require("./tipooperacaofip.service");
const create_tipooperacaofip_dto_1 = require("./dto/create-tipooperacaofip.dto");
const update_tipooperacaofip_dto_1 = require("./dto/update-tipooperacaofip.dto");
const swagger_1 = require("@nestjs/swagger");
let TipooperacaofipController = class TipooperacaofipController {
    constructor(tipooperacaofipService) {
        this.tipooperacaofipService = tipooperacaofipService;
    }
    create(createTipooperacaofipDto) {
        return this.tipooperacaofipService.create(createTipooperacaofipDto);
    }
    findAll() {
        return this.tipooperacaofipService.findAll();
    }
    findOne(id) {
        return this.tipooperacaofipService.findOne(+id);
    }
    update(id, updateTipooperacaofipDto) {
        return this.tipooperacaofipService.update(+id, updateTipooperacaofipDto);
    }
    remove(id) {
        return this.tipooperacaofipService.remove(+id);
    }
};
exports.TipooperacaofipController = TipooperacaofipController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new tipooperacaofip' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The tipooperacaofip has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipooperacaofip_dto_1.CreateTipooperacaofipDto]),
    __metadata("design:returntype", void 0)
], TipooperacaofipController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all tipooperacaofip' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all tipooperacaofip.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TipooperacaofipController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a tipooperacaofip' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a tipooperacaofip.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipooperacaofipController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a tipooperacaofip' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The tipooperacaofip has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tipooperacaofip_dto_1.UpdateTipooperacaofipDto]),
    __metadata("design:returntype", void 0)
], TipooperacaofipController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a tipooperacaofip' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The tipooperacaofip has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipooperacaofipController.prototype, "remove", null);
exports.TipooperacaofipController = TipooperacaofipController = __decorate([
    (0, swagger_1.ApiTags)('tipooperacaofip'),
    (0, common_1.Controller)('tipooperacaofip'),
    __metadata("design:paramtypes", [tipooperacaofip_service_1.TipooperacaofipService])
], TipooperacaofipController);
//# sourceMappingURL=tipooperacaofip.controller.js.map