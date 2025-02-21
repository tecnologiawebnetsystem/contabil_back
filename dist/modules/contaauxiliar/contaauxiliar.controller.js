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
exports.ContaauxiliarController = void 0;
const common_1 = require("@nestjs/common");
const contaauxiliar_service_1 = require("./contaauxiliar.service");
const create_contaauxiliar_dto_1 = require("./dto/create-contaauxiliar.dto");
const update_contaauxiliar_dto_1 = require("./dto/update-contaauxiliar.dto");
const swagger_1 = require("@nestjs/swagger");
let ContaauxiliarController = class ContaauxiliarController {
    constructor(contaauxiliarService) {
        this.contaauxiliarService = contaauxiliarService;
    }
    create(createContaauxiliarDto) {
        return this.contaauxiliarService.create(createContaauxiliarDto);
    }
    findAll() {
        return this.contaauxiliarService.findAll();
    }
    findOne(id) {
        return this.contaauxiliarService.findOne(+id);
    }
    update(id, updateContaauxiliarDto) {
        return this.contaauxiliarService.update(+id, updateContaauxiliarDto);
    }
    remove(id) {
        return this.contaauxiliarService.remove(+id);
    }
};
exports.ContaauxiliarController = ContaauxiliarController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new contaauxiliar' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The contaauxiliar has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_contaauxiliar_dto_1.CreateContaauxiliarDto]),
    __metadata("design:returntype", void 0)
], ContaauxiliarController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all contaauxiliar' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all contaauxiliar.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContaauxiliarController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a contaauxiliar' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a contaauxiliar.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContaauxiliarController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a contaauxiliar' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The contaauxiliar has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_contaauxiliar_dto_1.UpdateContaauxiliarDto]),
    __metadata("design:returntype", void 0)
], ContaauxiliarController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a contaauxiliar' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The contaauxiliar has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContaauxiliarController.prototype, "remove", null);
exports.ContaauxiliarController = ContaauxiliarController = __decorate([
    (0, swagger_1.ApiTags)('contaauxiliar'),
    (0, common_1.Controller)('contaauxiliar'),
    __metadata("design:paramtypes", [contaauxiliar_service_1.ContaauxiliarService])
], ContaauxiliarController);
//# sourceMappingURL=contaauxiliar.controller.js.map