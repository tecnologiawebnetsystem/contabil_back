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
exports.ProvisoestecnicasController = void 0;
const common_1 = require("@nestjs/common");
const provisoestecnicas_service_1 = require("./provisoestecnicas.service");
const create_provisoestecnicas_dto_1 = require("./dto/create-provisoestecnicas.dto");
const update_provisoestecnicas_dto_1 = require("./dto/update-provisoestecnicas.dto");
const swagger_1 = require("@nestjs/swagger");
let ProvisoestecnicasController = class ProvisoestecnicasController {
    constructor(provisoestecnicasService) {
        this.provisoestecnicasService = provisoestecnicasService;
    }
    create(createProvisoestecnicasDto) {
        return this.provisoestecnicasService.create(createProvisoestecnicasDto);
    }
    findAll() {
        return this.provisoestecnicasService.findAll();
    }
    findOne(id) {
        return this.provisoestecnicasService.findOne(+id);
    }
    update(id, updateProvisoestecnicasDto) {
        return this.provisoestecnicasService.update(+id, updateProvisoestecnicasDto);
    }
    remove(id) {
        return this.provisoestecnicasService.remove(+id);
    }
};
exports.ProvisoestecnicasController = ProvisoestecnicasController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new provisoestecnicas' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The provisoestecnicas has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_provisoestecnicas_dto_1.CreateProvisoestecnicasDto]),
    __metadata("design:returntype", void 0)
], ProvisoestecnicasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all provisoestecnicas' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all provisoestecnicas.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProvisoestecnicasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a provisoestecnicas' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a provisoestecnicas.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProvisoestecnicasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a provisoestecnicas' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The provisoestecnicas has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_provisoestecnicas_dto_1.UpdateProvisoestecnicasDto]),
    __metadata("design:returntype", void 0)
], ProvisoestecnicasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a provisoestecnicas' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The provisoestecnicas has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProvisoestecnicasController.prototype, "remove", null);
exports.ProvisoestecnicasController = ProvisoestecnicasController = __decorate([
    (0, swagger_1.ApiTags)('provisoestecnicas'),
    (0, common_1.Controller)('provisoestecnicas'),
    __metadata("design:paramtypes", [provisoestecnicas_service_1.ProvisoestecnicasService])
], ProvisoestecnicasController);
//# sourceMappingURL=provisoestecnicas.controller.js.map