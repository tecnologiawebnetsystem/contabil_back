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
exports.CircularesController = void 0;
const common_1 = require("@nestjs/common");
const circulares_service_1 = require("./circulares.service");
const create_circulares_dto_1 = require("./dto/create-circulares.dto");
const update_circulares_dto_1 = require("./dto/update-circulares.dto");
const swagger_1 = require("@nestjs/swagger");
let CircularesController = class CircularesController {
    constructor(circularesService) {
        this.circularesService = circularesService;
    }
    create(createCircularesDto) {
        return this.circularesService.create(createCircularesDto);
    }
    findAll() {
        return this.circularesService.findAll();
    }
    findOne(id) {
        return this.circularesService.findOne(+id);
    }
    update(id, updateCircularesDto) {
        return this.circularesService.update(+id, updateCircularesDto);
    }
    remove(id) {
        return this.circularesService.remove(+id);
    }
};
exports.CircularesController = CircularesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new circulares' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The circulares has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_circulares_dto_1.CreateCircularesDto]),
    __metadata("design:returntype", void 0)
], CircularesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all circulares' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all circulares.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CircularesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a circulares' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a circulares.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CircularesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a circulares' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The circulares has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_circulares_dto_1.UpdateCircularesDto]),
    __metadata("design:returntype", void 0)
], CircularesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a circulares' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The circulares has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CircularesController.prototype, "remove", null);
exports.CircularesController = CircularesController = __decorate([
    (0, swagger_1.ApiTags)('circulares'),
    (0, common_1.Controller)('circulares'),
    __metadata("design:paramtypes", [circulares_service_1.CircularesService])
], CircularesController);
//# sourceMappingURL=circulares.controller.js.map