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
exports.RamocontabilController = void 0;
const common_1 = require("@nestjs/common");
const ramocontabil_service_1 = require("./ramocontabil.service");
const create_ramocontabil_dto_1 = require("./dto/create-ramocontabil.dto");
const update_ramocontabil_dto_1 = require("./dto/update-ramocontabil.dto");
const swagger_1 = require("@nestjs/swagger");
let RamocontabilController = class RamocontabilController {
    constructor(ramocontabilService) {
        this.ramocontabilService = ramocontabilService;
    }
    create(createRamocontabilDto) {
        return this.ramocontabilService.create(createRamocontabilDto);
    }
    findAll() {
        return this.ramocontabilService.findAll();
    }
    findOne(id) {
        return this.ramocontabilService.findOne(+id);
    }
    update(id, updateRamocontabilDto) {
        return this.ramocontabilService.update(+id, updateRamocontabilDto);
    }
    remove(id) {
        return this.ramocontabilService.remove(+id);
    }
};
exports.RamocontabilController = RamocontabilController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new ramocontabil' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The ramocontabil has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ramocontabil_dto_1.CreateRamocontabilDto]),
    __metadata("design:returntype", void 0)
], RamocontabilController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all ramocontabil' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all ramocontabil.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RamocontabilController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a ramocontabil' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a ramocontabil.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RamocontabilController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a ramocontabil' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The ramocontabil has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ramocontabil_dto_1.UpdateRamocontabilDto]),
    __metadata("design:returntype", void 0)
], RamocontabilController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a ramocontabil' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The ramocontabil has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RamocontabilController.prototype, "remove", null);
exports.RamocontabilController = RamocontabilController = __decorate([
    (0, swagger_1.ApiTags)('ramocontabil'),
    (0, common_1.Controller)('ramocontabil'),
    __metadata("design:paramtypes", [ramocontabil_service_1.RamocontabilService])
], RamocontabilController);
//# sourceMappingURL=ramocontabil.controller.js.map