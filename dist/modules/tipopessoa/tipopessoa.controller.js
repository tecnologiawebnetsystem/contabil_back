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
exports.TipopessoaController = void 0;
const common_1 = require("@nestjs/common");
const tipopessoa_service_1 = require("./tipopessoa.service");
const create_tipopessoa_dto_1 = require("./dto/create-tipopessoa.dto");
const update_tipopessoa_dto_1 = require("./dto/update-tipopessoa.dto");
const swagger_1 = require("@nestjs/swagger");
let TipopessoaController = class TipopessoaController {
    constructor(tipopessoaService) {
        this.tipopessoaService = tipopessoaService;
    }
    create(createTipopessoaDto) {
        return this.tipopessoaService.create(createTipopessoaDto);
    }
    findAll() {
        return this.tipopessoaService.findAll();
    }
    findOne(id) {
        return this.tipopessoaService.findOne(+id);
    }
    update(id, updateTipopessoaDto) {
        return this.tipopessoaService.update(+id, updateTipopessoaDto);
    }
    remove(id) {
        return this.tipopessoaService.remove(+id);
    }
};
exports.TipopessoaController = TipopessoaController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new tipopessoa' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The tipopessoa has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipopessoa_dto_1.CreateTipopessoaDto]),
    __metadata("design:returntype", void 0)
], TipopessoaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all tipopessoa' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all tipopessoa.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TipopessoaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a tipopessoa' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a tipopessoa.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipopessoaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a tipopessoa' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The tipopessoa has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tipopessoa_dto_1.UpdateTipopessoaDto]),
    __metadata("design:returntype", void 0)
], TipopessoaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a tipopessoa' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The tipopessoa has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipopessoaController.prototype, "remove", null);
exports.TipopessoaController = TipopessoaController = __decorate([
    (0, swagger_1.ApiTags)('tipopessoa'),
    (0, common_1.Controller)('tipopessoa'),
    __metadata("design:paramtypes", [tipopessoa_service_1.TipopessoaService])
], TipopessoaController);
//# sourceMappingURL=tipopessoa.controller.js.map