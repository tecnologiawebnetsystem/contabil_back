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
exports.TipomovimentofipController = void 0;
const common_1 = require("@nestjs/common");
const tipomovimentofip_service_1 = require("./tipomovimentofip.service");
const create_tipomovimentofip_dto_1 = require("./dto/create-tipomovimentofip.dto");
const update_tipomovimentofip_dto_1 = require("./dto/update-tipomovimentofip.dto");
const swagger_1 = require("@nestjs/swagger");
let TipomovimentofipController = class TipomovimentofipController {
    constructor(tipomovimentofipService) {
        this.tipomovimentofipService = tipomovimentofipService;
    }
    create(createTipomovimentofipDto) {
        return this.tipomovimentofipService.create(createTipomovimentofipDto);
    }
    findAll() {
        return this.tipomovimentofipService.findAll();
    }
    findOne(id) {
        return this.tipomovimentofipService.findOne(+id);
    }
    update(id, updateTipomovimentofipDto) {
        return this.tipomovimentofipService.update(+id, updateTipomovimentofipDto);
    }
    remove(id) {
        return this.tipomovimentofipService.remove(+id);
    }
};
exports.TipomovimentofipController = TipomovimentofipController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new tipomovimentofip' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The tipomovimentofip has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipomovimentofip_dto_1.CreateTipomovimentofipDto]),
    __metadata("design:returntype", void 0)
], TipomovimentofipController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all tipomovimentofip' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all tipomovimentofip.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TipomovimentofipController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a tipomovimentofip' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a tipomovimentofip.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipomovimentofipController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a tipomovimentofip' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The tipomovimentofip has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tipomovimentofip_dto_1.UpdateTipomovimentofipDto]),
    __metadata("design:returntype", void 0)
], TipomovimentofipController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a tipomovimentofip' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The tipomovimentofip has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipomovimentofipController.prototype, "remove", null);
exports.TipomovimentofipController = TipomovimentofipController = __decorate([
    (0, swagger_1.ApiTags)('tipomovimentofip'),
    (0, common_1.Controller)('tipomovimentofip'),
    __metadata("design:paramtypes", [tipomovimentofip_service_1.TipomovimentofipService])
], TipomovimentofipController);
//# sourceMappingURL=tipomovimentofip.controller.js.map