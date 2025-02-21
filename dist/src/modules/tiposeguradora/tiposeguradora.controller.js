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
exports.TiposeguradoraController = void 0;
const common_1 = require("@nestjs/common");
const tiposeguradora_service_1 = require("./tiposeguradora.service");
const create_tiposeguradora_dto_1 = require("./dto/create-tiposeguradora.dto");
const update_tiposeguradora_dto_1 = require("./dto/update-tiposeguradora.dto");
const swagger_1 = require("@nestjs/swagger");
let TiposeguradoraController = class TiposeguradoraController {
    constructor(tiposeguradoraService) {
        this.tiposeguradoraService = tiposeguradoraService;
    }
    create(createTiposeguradoraDto) {
        return this.tiposeguradoraService.create(createTiposeguradoraDto);
    }
    findAll() {
        return this.tiposeguradoraService.findAll();
    }
    findOne(id) {
        return this.tiposeguradoraService.findOne(+id);
    }
    update(id, updateTiposeguradoraDto) {
        return this.tiposeguradoraService.update(+id, updateTiposeguradoraDto);
    }
    remove(id) {
        return this.tiposeguradoraService.remove(+id);
    }
};
exports.TiposeguradoraController = TiposeguradoraController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new tiposeguradora' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The tiposeguradora has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tiposeguradora_dto_1.CreateTiposeguradoraDto]),
    __metadata("design:returntype", void 0)
], TiposeguradoraController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all tiposeguradora' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all tiposeguradora.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TiposeguradoraController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a tiposeguradora' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a tiposeguradora.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TiposeguradoraController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a tiposeguradora' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The tiposeguradora has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tiposeguradora_dto_1.UpdateTiposeguradoraDto]),
    __metadata("design:returntype", void 0)
], TiposeguradoraController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a tiposeguradora' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The tiposeguradora has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TiposeguradoraController.prototype, "remove", null);
exports.TiposeguradoraController = TiposeguradoraController = __decorate([
    (0, swagger_1.ApiTags)('tiposeguradora'),
    (0, common_1.Controller)('tiposeguradora'),
    __metadata("design:paramtypes", [tiposeguradora_service_1.TiposeguradoraService])
], TiposeguradoraController);
//# sourceMappingURL=tiposeguradora.controller.js.map