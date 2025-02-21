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
exports.LancamentoscontabeisController = void 0;
const common_1 = require("@nestjs/common");
const lancamentoscontabeis_service_1 = require("./lancamentoscontabeis.service");
const create_lancamentoscontabeis_dto_1 = require("./dto/create-lancamentoscontabeis.dto");
const update_lancamentoscontabeis_dto_1 = require("./dto/update-lancamentoscontabeis.dto");
const swagger_1 = require("@nestjs/swagger");
let LancamentoscontabeisController = class LancamentoscontabeisController {
    constructor(lancamentoscontabeisService) {
        this.lancamentoscontabeisService = lancamentoscontabeisService;
    }
    create(createLancamentoscontabeisDto) {
        return this.lancamentoscontabeisService.create(createLancamentoscontabeisDto);
    }
    findAll() {
        return this.lancamentoscontabeisService.findAll();
    }
    findOne(id) {
        return this.lancamentoscontabeisService.findOne(+id);
    }
    update(id, updateLancamentoscontabeisDto) {
        return this.lancamentoscontabeisService.update(+id, updateLancamentoscontabeisDto);
    }
    remove(id) {
        return this.lancamentoscontabeisService.remove(+id);
    }
};
exports.LancamentoscontabeisController = LancamentoscontabeisController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new lancamentoscontabeis' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The lancamentoscontabeis has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lancamentoscontabeis_dto_1.CreateLancamentoscontabeisDto]),
    __metadata("design:returntype", void 0)
], LancamentoscontabeisController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all lancamentoscontabeis' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all lancamentoscontabeis.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LancamentoscontabeisController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a lancamentoscontabeis' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a lancamentoscontabeis.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LancamentoscontabeisController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a lancamentoscontabeis' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The lancamentoscontabeis has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_lancamentoscontabeis_dto_1.UpdateLancamentoscontabeisDto]),
    __metadata("design:returntype", void 0)
], LancamentoscontabeisController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a lancamentoscontabeis' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The lancamentoscontabeis has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LancamentoscontabeisController.prototype, "remove", null);
exports.LancamentoscontabeisController = LancamentoscontabeisController = __decorate([
    (0, swagger_1.ApiTags)('lancamentoscontabeis'),
    (0, common_1.Controller)('lancamentoscontabeis'),
    __metadata("design:paramtypes", [lancamentoscontabeis_service_1.LancamentoscontabeisService])
], LancamentoscontabeisController);
//# sourceMappingURL=lancamentoscontabeis.controller.js.map