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
exports.TiporesseguroController = void 0;
const common_1 = require("@nestjs/common");
const tiporesseguro_service_1 = require("./tiporesseguro.service");
const create_tiporesseguro_dto_1 = require("./dto/create-tiporesseguro.dto");
const update_tiporesseguro_dto_1 = require("./dto/update-tiporesseguro.dto");
const swagger_1 = require("@nestjs/swagger");
let TiporesseguroController = class TiporesseguroController {
    constructor(tiporesseguroService) {
        this.tiporesseguroService = tiporesseguroService;
    }
    create(createTiporesseguroDto) {
        return this.tiporesseguroService.create(createTiporesseguroDto);
    }
    findAll() {
        return this.tiporesseguroService.findAll();
    }
    findOne(id) {
        return this.tiporesseguroService.findOne(+id);
    }
    update(id, updateTiporesseguroDto) {
        return this.tiporesseguroService.update(+id, updateTiporesseguroDto);
    }
    remove(id) {
        return this.tiporesseguroService.remove(+id);
    }
};
exports.TiporesseguroController = TiporesseguroController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new tiporesseguro' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The tiporesseguro has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tiporesseguro_dto_1.CreateTiporesseguroDto]),
    __metadata("design:returntype", void 0)
], TiporesseguroController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all tiporesseguro' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all tiporesseguro.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TiporesseguroController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a tiporesseguro' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a tiporesseguro.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TiporesseguroController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a tiporesseguro' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The tiporesseguro has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tiporesseguro_dto_1.UpdateTiporesseguroDto]),
    __metadata("design:returntype", void 0)
], TiporesseguroController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a tiporesseguro' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The tiporesseguro has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TiporesseguroController.prototype, "remove", null);
exports.TiporesseguroController = TiporesseguroController = __decorate([
    (0, swagger_1.ApiTags)('tiporesseguro'),
    (0, common_1.Controller)('tiporesseguro'),
    __metadata("design:paramtypes", [tiporesseguro_service_1.TiporesseguroService])
], TiporesseguroController);
//# sourceMappingURL=tiporesseguro.controller.js.map