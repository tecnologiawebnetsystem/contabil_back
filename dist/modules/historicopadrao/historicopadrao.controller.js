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
exports.HistoricopadraoController = void 0;
const common_1 = require("@nestjs/common");
const historicopadrao_service_1 = require("./historicopadrao.service");
const create_historicopadrao_dto_1 = require("./dto/create-historicopadrao.dto");
const update_historicopadrao_dto_1 = require("./dto/update-historicopadrao.dto");
const swagger_1 = require("@nestjs/swagger");
let HistoricopadraoController = class HistoricopadraoController {
    constructor(historicopadraoService) {
        this.historicopadraoService = historicopadraoService;
    }
    create(createHistoricopadraoDto) {
        return this.historicopadraoService.create(createHistoricopadraoDto);
    }
    findAll() {
        return this.historicopadraoService.findAll();
    }
    findOne(id) {
        return this.historicopadraoService.findOne(+id);
    }
    update(id, updateHistoricopadraoDto) {
        return this.historicopadraoService.update(+id, updateHistoricopadraoDto);
    }
    remove(id) {
        return this.historicopadraoService.remove(+id);
    }
};
exports.HistoricopadraoController = HistoricopadraoController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new historicopadrao' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The historicopadrao has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_historicopadrao_dto_1.CreateHistoricopadraoDto]),
    __metadata("design:returntype", void 0)
], HistoricopadraoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all historicopadrao' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all historicopadrao.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HistoricopadraoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a historicopadrao' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a historicopadrao.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HistoricopadraoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a historicopadrao' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The historicopadrao has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_historicopadrao_dto_1.UpdateHistoricopadraoDto]),
    __metadata("design:returntype", void 0)
], HistoricopadraoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a historicopadrao' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The historicopadrao has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HistoricopadraoController.prototype, "remove", null);
exports.HistoricopadraoController = HistoricopadraoController = __decorate([
    (0, swagger_1.ApiTags)('historicopadrao'),
    (0, common_1.Controller)('historicopadrao'),
    __metadata("design:paramtypes", [historicopadrao_service_1.HistoricopadraoService])
], HistoricopadraoController);
//# sourceMappingURL=historicopadrao.controller.js.map