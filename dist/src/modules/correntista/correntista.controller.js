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
exports.CorrentistaController = void 0;
const common_1 = require("@nestjs/common");
const correntista_service_1 = require("./correntista.service");
const create_correntista_dto_1 = require("./dto/create-correntista.dto");
const update_correntista_dto_1 = require("./dto/update-correntista.dto");
const swagger_1 = require("@nestjs/swagger");
let CorrentistaController = class CorrentistaController {
    constructor(correntistaService) {
        this.correntistaService = correntistaService;
    }
    create(createCorrentistaDto) {
        return this.correntistaService.create(createCorrentistaDto);
    }
    findAll() {
        return this.correntistaService.findAll();
    }
    findOne(id) {
        return this.correntistaService.findOne(+id);
    }
    update(id, updateCorrentistaDto) {
        return this.correntistaService.update(+id, updateCorrentistaDto);
    }
    remove(id) {
        return this.correntistaService.remove(+id);
    }
};
exports.CorrentistaController = CorrentistaController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new correntista' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The correntista has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_correntista_dto_1.CreateCorrentistaDto]),
    __metadata("design:returntype", void 0)
], CorrentistaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all correntista' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all correntista.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CorrentistaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a correntista' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a correntista.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CorrentistaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a correntista' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The correntista has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_correntista_dto_1.UpdateCorrentistaDto]),
    __metadata("design:returntype", void 0)
], CorrentistaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a correntista' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The correntista has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CorrentistaController.prototype, "remove", null);
exports.CorrentistaController = CorrentistaController = __decorate([
    (0, swagger_1.ApiTags)('correntista'),
    (0, common_1.Controller)('correntista'),
    __metadata("design:paramtypes", [correntista_service_1.CorrentistaService])
], CorrentistaController);
//# sourceMappingURL=correntista.controller.js.map