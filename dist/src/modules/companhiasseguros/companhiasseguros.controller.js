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
exports.CompanhiassegurosController = void 0;
const common_1 = require("@nestjs/common");
const companhiasseguros_service_1 = require("./companhiasseguros.service");
const create_companhiasseguros_dto_1 = require("./dto/create-companhiasseguros.dto");
const update_companhiasseguros_dto_1 = require("./dto/update-companhiasseguros.dto");
const swagger_1 = require("@nestjs/swagger");
let CompanhiassegurosController = class CompanhiassegurosController {
    constructor(companhiassegurosService) {
        this.companhiassegurosService = companhiassegurosService;
    }
    create(createCompanhiassegurosDto) {
        return this.companhiassegurosService.create(createCompanhiassegurosDto);
    }
    findAll() {
        return this.companhiassegurosService.findAll();
    }
    findOne(id) {
        return this.companhiassegurosService.findOne(+id);
    }
    update(id, updateCompanhiassegurosDto) {
        return this.companhiassegurosService.update(+id, updateCompanhiassegurosDto);
    }
    remove(id) {
        return this.companhiassegurosService.remove(+id);
    }
};
exports.CompanhiassegurosController = CompanhiassegurosController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new companhiasseguros' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The companhiasseguros has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_companhiasseguros_dto_1.CreateCompanhiassegurosDto]),
    __metadata("design:returntype", void 0)
], CompanhiassegurosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all companhiasseguros' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all companhiasseguros.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CompanhiassegurosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a companhiasseguros' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a companhiasseguros.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CompanhiassegurosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a companhiasseguros' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The companhiasseguros has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_companhiasseguros_dto_1.UpdateCompanhiassegurosDto]),
    __metadata("design:returntype", void 0)
], CompanhiassegurosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a companhiasseguros' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The companhiasseguros has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CompanhiassegurosController.prototype, "remove", null);
exports.CompanhiassegurosController = CompanhiassegurosController = __decorate([
    (0, swagger_1.ApiTags)('companhiasseguros'),
    (0, common_1.Controller)('companhiasseguros'),
    __metadata("design:paramtypes", [companhiasseguros_service_1.CompanhiassegurosService])
], CompanhiassegurosController);
//# sourceMappingURL=companhiasseguros.controller.js.map