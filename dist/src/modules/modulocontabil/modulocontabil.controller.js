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
exports.ModulocontabilController = void 0;
const common_1 = require("@nestjs/common");
const modulocontabil_service_1 = require("./modulocontabil.service");
const create_modulocontabil_dto_1 = require("./dto/create-modulocontabil.dto");
const update_modulocontabil_dto_1 = require("./dto/update-modulocontabil.dto");
const swagger_1 = require("@nestjs/swagger");
let ModulocontabilController = class ModulocontabilController {
    constructor(modulocontabilService) {
        this.modulocontabilService = modulocontabilService;
    }
    create(createModulocontabilDto) {
        return this.modulocontabilService.create(createModulocontabilDto);
    }
    findAll() {
        return this.modulocontabilService.findAll();
    }
    findOne(id) {
        return this.modulocontabilService.findOne(+id);
    }
    update(id, updateModulocontabilDto) {
        return this.modulocontabilService.update(+id, updateModulocontabilDto);
    }
    remove(id) {
        return this.modulocontabilService.remove(+id);
    }
};
exports.ModulocontabilController = ModulocontabilController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new modulocontabil' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The modulocontabil has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_modulocontabil_dto_1.CreateModulocontabilDto]),
    __metadata("design:returntype", void 0)
], ModulocontabilController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all modulocontabil' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all modulocontabil.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ModulocontabilController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a modulocontabil' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a modulocontabil.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ModulocontabilController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a modulocontabil' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The modulocontabil has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_modulocontabil_dto_1.UpdateModulocontabilDto]),
    __metadata("design:returntype", void 0)
], ModulocontabilController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a modulocontabil' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The modulocontabil has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ModulocontabilController.prototype, "remove", null);
exports.ModulocontabilController = ModulocontabilController = __decorate([
    (0, swagger_1.ApiTags)('modulocontabil'),
    (0, common_1.Controller)('modulocontabil'),
    __metadata("design:paramtypes", [modulocontabil_service_1.ModulocontabilService])
], ModulocontabilController);
//# sourceMappingURL=modulocontabil.controller.js.map