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
exports.TipopagamentoController = void 0;
const common_1 = require("@nestjs/common");
const tipopagamento_service_1 = require("./tipopagamento.service");
const create_tipopagamento_dto_1 = require("./dto/create-tipopagamento.dto");
const update_tipopagamento_dto_1 = require("./dto/update-tipopagamento.dto");
const swagger_1 = require("@nestjs/swagger");
let TipopagamentoController = class TipopagamentoController {
    constructor(tipopagamentoService) {
        this.tipopagamentoService = tipopagamentoService;
    }
    create(createTipopagamentoDto) {
        return this.tipopagamentoService.create(createTipopagamentoDto);
    }
    findAll() {
        return this.tipopagamentoService.findAll();
    }
    findOne(id) {
        return this.tipopagamentoService.findOne(+id);
    }
    update(id, updateTipopagamentoDto) {
        return this.tipopagamentoService.update(+id, updateTipopagamentoDto);
    }
    remove(id) {
        return this.tipopagamentoService.remove(+id);
    }
};
exports.TipopagamentoController = TipopagamentoController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new tipopagamento' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The tipopagamento has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipopagamento_dto_1.CreateTipopagamentoDto]),
    __metadata("design:returntype", void 0)
], TipopagamentoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all tipopagamento' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all tipopagamento.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TipopagamentoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a tipopagamento' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a tipopagamento.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipopagamentoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a tipopagamento' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The tipopagamento has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tipopagamento_dto_1.UpdateTipopagamentoDto]),
    __metadata("design:returntype", void 0)
], TipopagamentoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a tipopagamento' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The tipopagamento has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipopagamentoController.prototype, "remove", null);
exports.TipopagamentoController = TipopagamentoController = __decorate([
    (0, swagger_1.ApiTags)('tipopagamento'),
    (0, common_1.Controller)('tipopagamento'),
    __metadata("design:paramtypes", [tipopagamento_service_1.TipopagamentoService])
], TipopagamentoController);
//# sourceMappingURL=tipopagamento.controller.js.map