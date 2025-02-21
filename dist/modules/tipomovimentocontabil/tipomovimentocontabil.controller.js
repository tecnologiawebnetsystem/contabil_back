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
exports.TipomovimentocontabilController = void 0;
const common_1 = require("@nestjs/common");
const tipomovimentocontabil_service_1 = require("./tipomovimentocontabil.service");
const create_tipomovimentocontabil_dto_1 = require("./dto/create-tipomovimentocontabil.dto");
const update_tipomovimentocontabil_dto_1 = require("./dto/update-tipomovimentocontabil.dto");
const swagger_1 = require("@nestjs/swagger");
let TipomovimentocontabilController = class TipomovimentocontabilController {
    constructor(tipomovimentocontabilService) {
        this.tipomovimentocontabilService = tipomovimentocontabilService;
    }
    create(createTipomovimentocontabilDto) {
        return this.tipomovimentocontabilService.create(createTipomovimentocontabilDto);
    }
    findAll() {
        return this.tipomovimentocontabilService.findAll();
    }
    findOne(id) {
        return this.tipomovimentocontabilService.findOne(+id);
    }
    update(id, updateTipomovimentocontabilDto) {
        return this.tipomovimentocontabilService.update(+id, updateTipomovimentocontabilDto);
    }
    remove(id) {
        return this.tipomovimentocontabilService.remove(+id);
    }
};
exports.TipomovimentocontabilController = TipomovimentocontabilController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new tipomovimentocontabil' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The tipomovimentocontabil has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipomovimentocontabil_dto_1.CreateTipomovimentocontabilDto]),
    __metadata("design:returntype", void 0)
], TipomovimentocontabilController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all tipomovimentocontabil' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all tipomovimentocontabil.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TipomovimentocontabilController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a tipomovimentocontabil' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a tipomovimentocontabil.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipomovimentocontabilController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a tipomovimentocontabil' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The tipomovimentocontabil has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tipomovimentocontabil_dto_1.UpdateTipomovimentocontabilDto]),
    __metadata("design:returntype", void 0)
], TipomovimentocontabilController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a tipomovimentocontabil' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The tipomovimentocontabil has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipomovimentocontabilController.prototype, "remove", null);
exports.TipomovimentocontabilController = TipomovimentocontabilController = __decorate([
    (0, swagger_1.ApiTags)('tipomovimentocontabil'),
    (0, common_1.Controller)('tipomovimentocontabil'),
    __metadata("design:paramtypes", [tipomovimentocontabil_service_1.TipomovimentocontabilService])
], TipomovimentocontabilController);
//# sourceMappingURL=tipomovimentocontabil.controller.js.map