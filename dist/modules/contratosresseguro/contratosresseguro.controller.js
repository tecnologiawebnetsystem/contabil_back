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
exports.ContratosresseguroController = void 0;
const common_1 = require("@nestjs/common");
const contratosresseguro_service_1 = require("./contratosresseguro.service");
const create_contratosresseguro_dto_1 = require("./dto/create-contratosresseguro.dto");
const update_contratosresseguro_dto_1 = require("./dto/update-contratosresseguro.dto");
const swagger_1 = require("@nestjs/swagger");
let ContratosresseguroController = class ContratosresseguroController {
    constructor(contratosresseguroService) {
        this.contratosresseguroService = contratosresseguroService;
    }
    create(createContratosresseguroDto) {
        return this.contratosresseguroService.create(createContratosresseguroDto);
    }
    findAll() {
        return this.contratosresseguroService.findAll();
    }
    findOne(id) {
        return this.contratosresseguroService.findOne(+id);
    }
    update(id, updateContratosresseguroDto) {
        return this.contratosresseguroService.update(+id, updateContratosresseguroDto);
    }
    remove(id) {
        return this.contratosresseguroService.remove(+id);
    }
};
exports.ContratosresseguroController = ContratosresseguroController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new contratosresseguro' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The contratosresseguro has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_contratosresseguro_dto_1.CreateContratosresseguroDto]),
    __metadata("design:returntype", void 0)
], ContratosresseguroController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all contratosresseguro' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all contratosresseguro.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContratosresseguroController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a contratosresseguro' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a contratosresseguro.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContratosresseguroController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a contratosresseguro' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The contratosresseguro has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_contratosresseguro_dto_1.UpdateContratosresseguroDto]),
    __metadata("design:returntype", void 0)
], ContratosresseguroController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a contratosresseguro' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The contratosresseguro has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContratosresseguroController.prototype, "remove", null);
exports.ContratosresseguroController = ContratosresseguroController = __decorate([
    (0, swagger_1.ApiTags)('contratosresseguro'),
    (0, common_1.Controller)('contratosresseguro'),
    __metadata("design:paramtypes", [contratosresseguro_service_1.ContratosresseguroService])
], ContratosresseguroController);
//# sourceMappingURL=contratosresseguro.controller.js.map