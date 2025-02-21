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
exports.ConfigquadroscircularesController = void 0;
const common_1 = require("@nestjs/common");
const configquadroscirculares_service_1 = require("./configquadroscirculares.service");
const create_configquadroscirculares_dto_1 = require("./dto/create-configquadroscirculares.dto");
const update_configquadroscirculares_dto_1 = require("./dto/update-configquadroscirculares.dto");
const swagger_1 = require("@nestjs/swagger");
let ConfigquadroscircularesController = class ConfigquadroscircularesController {
    constructor(configquadroscircularesService) {
        this.configquadroscircularesService = configquadroscircularesService;
    }
    create(createConfigquadroscircularesDto) {
        return this.configquadroscircularesService.create(createConfigquadroscircularesDto);
    }
    findAll() {
        return this.configquadroscircularesService.findAll();
    }
    findOne(id) {
        return this.configquadroscircularesService.findOne(+id);
    }
    update(id, updateConfigquadroscircularesDto) {
        return this.configquadroscircularesService.update(+id, updateConfigquadroscircularesDto);
    }
    remove(id) {
        return this.configquadroscircularesService.remove(+id);
    }
};
exports.ConfigquadroscircularesController = ConfigquadroscircularesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new configquadroscirculares' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The configquadroscirculares has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_configquadroscirculares_dto_1.CreateConfigquadroscircularesDto]),
    __metadata("design:returntype", void 0)
], ConfigquadroscircularesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all configquadroscirculares' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all configquadroscirculares.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConfigquadroscircularesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a configquadroscirculares' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a configquadroscirculares.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConfigquadroscircularesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a configquadroscirculares' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The configquadroscirculares has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_configquadroscirculares_dto_1.UpdateConfigquadroscircularesDto]),
    __metadata("design:returntype", void 0)
], ConfigquadroscircularesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a configquadroscirculares' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The configquadroscirculares has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConfigquadroscircularesController.prototype, "remove", null);
exports.ConfigquadroscircularesController = ConfigquadroscircularesController = __decorate([
    (0, swagger_1.ApiTags)('configquadroscirculares'),
    (0, common_1.Controller)('configquadroscirculares'),
    __metadata("design:paramtypes", [configquadroscirculares_service_1.ConfigquadroscircularesService])
], ConfigquadroscircularesController);
//# sourceMappingURL=configquadroscirculares.controller.js.map