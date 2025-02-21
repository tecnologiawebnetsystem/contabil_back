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
exports.TbbalanceteController = void 0;
const common_1 = require("@nestjs/common");
const tbbalancete_service_1 = require("./tbbalancete.service");
const create_tbbalancete_dto_1 = require("./dto/create-tbbalancete.dto");
const update_tbbalancete_dto_1 = require("./dto/update-tbbalancete.dto");
const swagger_1 = require("@nestjs/swagger");
let TbbalanceteController = class TbbalanceteController {
    constructor(tbbalanceteService) {
        this.tbbalanceteService = tbbalanceteService;
    }
    create(createTbbalanceteDto) {
        return this.tbbalanceteService.create(createTbbalanceteDto);
    }
    findAll() {
        return this.tbbalanceteService.findAll();
    }
    findOne(id) {
        return this.tbbalanceteService.findOne(+id);
    }
    update(id, updateTbbalanceteDto) {
        return this.tbbalanceteService.update(+id, updateTbbalanceteDto);
    }
    remove(id) {
        return this.tbbalanceteService.remove(+id);
    }
};
exports.TbbalanceteController = TbbalanceteController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new tbbalancete' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The tbbalancete has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tbbalancete_dto_1.CreateTbbalanceteDto]),
    __metadata("design:returntype", void 0)
], TbbalanceteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all tbbalancete' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all tbbalancete.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TbbalanceteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a tbbalancete' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a tbbalancete.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TbbalanceteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a tbbalancete' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The tbbalancete has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tbbalancete_dto_1.UpdateTbbalanceteDto]),
    __metadata("design:returntype", void 0)
], TbbalanceteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a tbbalancete' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The tbbalancete has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TbbalanceteController.prototype, "remove", null);
exports.TbbalanceteController = TbbalanceteController = __decorate([
    (0, swagger_1.ApiTags)('tbbalancete'),
    (0, common_1.Controller)('tbbalancete'),
    __metadata("design:paramtypes", [tbbalancete_service_1.TbbalanceteService])
], TbbalanceteController);
//# sourceMappingURL=tbbalancete.controller.js.map