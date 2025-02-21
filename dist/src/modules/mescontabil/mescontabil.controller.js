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
exports.MescontabilController = void 0;
const common_1 = require("@nestjs/common");
const mescontabil_service_1 = require("./mescontabil.service");
const create_mescontabil_dto_1 = require("./dto/create-mescontabil.dto");
const update_mescontabil_dto_1 = require("./dto/update-mescontabil.dto");
const swagger_1 = require("@nestjs/swagger");
let MescontabilController = class MescontabilController {
    constructor(mescontabilService) {
        this.mescontabilService = mescontabilService;
    }
    create(createMescontabilDto) {
        return this.mescontabilService.create(createMescontabilDto);
    }
    findAll() {
        return this.mescontabilService.findAll();
    }
    findOne(id) {
        return this.mescontabilService.findOne(+id);
    }
    update(id, updateMescontabilDto) {
        return this.mescontabilService.update(+id, updateMescontabilDto);
    }
    remove(id) {
        return this.mescontabilService.remove(+id);
    }
};
exports.MescontabilController = MescontabilController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new mescontabil' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The mescontabil has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_mescontabil_dto_1.CreateMescontabilDto]),
    __metadata("design:returntype", void 0)
], MescontabilController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all mescontabil' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all mescontabil.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MescontabilController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a mescontabil' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a mescontabil.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MescontabilController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a mescontabil' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The mescontabil has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_mescontabil_dto_1.UpdateMescontabilDto]),
    __metadata("design:returntype", void 0)
], MescontabilController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a mescontabil' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The mescontabil has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MescontabilController.prototype, "remove", null);
exports.MescontabilController = MescontabilController = __decorate([
    (0, swagger_1.ApiTags)('mescontabil'),
    (0, common_1.Controller)('mescontabil'),
    __metadata("design:paramtypes", [mescontabil_service_1.MescontabilService])
], MescontabilController);
//# sourceMappingURL=mescontabil.controller.js.map