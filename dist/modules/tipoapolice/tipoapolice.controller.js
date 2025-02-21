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
exports.TipoapoliceController = void 0;
const common_1 = require("@nestjs/common");
const tipoapolice_service_1 = require("./tipoapolice.service");
const create_tipoapolice_dto_1 = require("./dto/create-tipoapolice.dto");
const update_tipoapolice_dto_1 = require("./dto/update-tipoapolice.dto");
const swagger_1 = require("@nestjs/swagger");
let TipoapoliceController = class TipoapoliceController {
    constructor(tipoapoliceService) {
        this.tipoapoliceService = tipoapoliceService;
    }
    create(createTipoapoliceDto) {
        return this.tipoapoliceService.create(createTipoapoliceDto);
    }
    findAll() {
        return this.tipoapoliceService.findAll();
    }
    findOne(id) {
        return this.tipoapoliceService.findOne(+id);
    }
    update(id, updateTipoapoliceDto) {
        return this.tipoapoliceService.update(+id, updateTipoapoliceDto);
    }
    remove(id) {
        return this.tipoapoliceService.remove(+id);
    }
};
exports.TipoapoliceController = TipoapoliceController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new tipoapolice' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The tipoapolice has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipoapolice_dto_1.CreateTipoapoliceDto]),
    __metadata("design:returntype", void 0)
], TipoapoliceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all tipoapolice' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all tipoapolice.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TipoapoliceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a tipoapolice' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a tipoapolice.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipoapoliceController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a tipoapolice' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The tipoapolice has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tipoapolice_dto_1.UpdateTipoapoliceDto]),
    __metadata("design:returntype", void 0)
], TipoapoliceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a tipoapolice' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The tipoapolice has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipoapoliceController.prototype, "remove", null);
exports.TipoapoliceController = TipoapoliceController = __decorate([
    (0, swagger_1.ApiTags)('tipoapolice'),
    (0, common_1.Controller)('tipoapolice'),
    __metadata("design:paramtypes", [tipoapolice_service_1.TipoapoliceService])
], TipoapoliceController);
//# sourceMappingURL=tipoapolice.controller.js.map