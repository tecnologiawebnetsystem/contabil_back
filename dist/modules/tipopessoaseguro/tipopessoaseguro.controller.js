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
exports.TipopessoaseguroController = void 0;
const common_1 = require("@nestjs/common");
const tipopessoaseguro_service_1 = require("./tipopessoaseguro.service");
const create_tipopessoaseguro_dto_1 = require("./dto/create-tipopessoaseguro.dto");
const update_tipopessoaseguro_dto_1 = require("./dto/update-tipopessoaseguro.dto");
const swagger_1 = require("@nestjs/swagger");
let TipopessoaseguroController = class TipopessoaseguroController {
    constructor(tipopessoaseguroService) {
        this.tipopessoaseguroService = tipopessoaseguroService;
    }
    create(createTipopessoaseguroDto) {
        return this.tipopessoaseguroService.create(createTipopessoaseguroDto);
    }
    findAll() {
        return this.tipopessoaseguroService.findAll();
    }
    findOne(id) {
        return this.tipopessoaseguroService.findOne(+id);
    }
    update(id, updateTipopessoaseguroDto) {
        return this.tipopessoaseguroService.update(+id, updateTipopessoaseguroDto);
    }
    remove(id) {
        return this.tipopessoaseguroService.remove(+id);
    }
};
exports.TipopessoaseguroController = TipopessoaseguroController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new tipopessoaseguro' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The tipopessoaseguro has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipopessoaseguro_dto_1.CreateTipopessoaseguroDto]),
    __metadata("design:returntype", void 0)
], TipopessoaseguroController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all tipopessoaseguro' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all tipopessoaseguro.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TipopessoaseguroController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a tipopessoaseguro' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a tipopessoaseguro.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipopessoaseguroController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a tipopessoaseguro' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The tipopessoaseguro has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tipopessoaseguro_dto_1.UpdateTipopessoaseguroDto]),
    __metadata("design:returntype", void 0)
], TipopessoaseguroController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a tipopessoaseguro' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The tipopessoaseguro has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipopessoaseguroController.prototype, "remove", null);
exports.TipopessoaseguroController = TipopessoaseguroController = __decorate([
    (0, swagger_1.ApiTags)('tipopessoaseguro'),
    (0, common_1.Controller)('tipopessoaseguro'),
    __metadata("design:paramtypes", [tipopessoaseguro_service_1.TipopessoaseguroService])
], TipopessoaseguroController);
//# sourceMappingURL=tipopessoaseguro.controller.js.map