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
exports.RelatoriosfipController = void 0;
const common_1 = require("@nestjs/common");
const relatoriosfip_service_1 = require("./relatoriosfip.service");
const create_relatoriosfip_dto_1 = require("./dto/create-relatoriosfip.dto");
const update_relatoriosfip_dto_1 = require("./dto/update-relatoriosfip.dto");
const swagger_1 = require("@nestjs/swagger");
let RelatoriosfipController = class RelatoriosfipController {
    constructor(relatoriosfipService) {
        this.relatoriosfipService = relatoriosfipService;
    }
    create(createRelatoriosfipDto) {
        return this.relatoriosfipService.create(createRelatoriosfipDto);
    }
    findAll() {
        return this.relatoriosfipService.findAll();
    }
    findOne(id) {
        return this.relatoriosfipService.findOne(+id);
    }
    update(id, updateRelatoriosfipDto) {
        return this.relatoriosfipService.update(+id, updateRelatoriosfipDto);
    }
    remove(id) {
        return this.relatoriosfipService.remove(+id);
    }
};
exports.RelatoriosfipController = RelatoriosfipController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new relatoriosfip' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The relatoriosfip has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_relatoriosfip_dto_1.CreateRelatoriosfipDto]),
    __metadata("design:returntype", void 0)
], RelatoriosfipController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all relatoriosfip' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all relatoriosfip.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RelatoriosfipController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a relatoriosfip' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a relatoriosfip.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RelatoriosfipController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a relatoriosfip' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The relatoriosfip has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_relatoriosfip_dto_1.UpdateRelatoriosfipDto]),
    __metadata("design:returntype", void 0)
], RelatoriosfipController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a relatoriosfip' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The relatoriosfip has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RelatoriosfipController.prototype, "remove", null);
exports.RelatoriosfipController = RelatoriosfipController = __decorate([
    (0, swagger_1.ApiTags)('relatoriosfip'),
    (0, common_1.Controller)('relatoriosfip'),
    __metadata("design:paramtypes", [relatoriosfip_service_1.RelatoriosfipService])
], RelatoriosfipController);
//# sourceMappingURL=relatoriosfip.controller.js.map