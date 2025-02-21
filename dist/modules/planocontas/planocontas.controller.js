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
exports.PlanocontasController = void 0;
const common_1 = require("@nestjs/common");
const planocontas_service_1 = require("./planocontas.service");
const create_planocontas_dto_1 = require("./dto/create-planocontas.dto");
const update_planocontas_dto_1 = require("./dto/update-planocontas.dto");
const swagger_1 = require("@nestjs/swagger");
let PlanocontasController = class PlanocontasController {
    constructor(planocontasService) {
        this.planocontasService = planocontasService;
    }
    create(createPlanocontasDto) {
        return this.planocontasService.create(createPlanocontasDto);
    }
    findAll() {
        return this.planocontasService.findAll();
    }
    findOne(id) {
        return this.planocontasService.findOne(+id);
    }
    update(id, updatePlanocontasDto) {
        return this.planocontasService.update(+id, updatePlanocontasDto);
    }
    remove(id) {
        return this.planocontasService.remove(+id);
    }
};
exports.PlanocontasController = PlanocontasController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new planocontas' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The planocontas has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_planocontas_dto_1.CreatePlanocontasDto]),
    __metadata("design:returntype", void 0)
], PlanocontasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all planocontas' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all planocontas.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlanocontasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a planocontas' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a planocontas.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlanocontasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a planocontas' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The planocontas has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_planocontas_dto_1.UpdatePlanocontasDto]),
    __metadata("design:returntype", void 0)
], PlanocontasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a planocontas' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The planocontas has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlanocontasController.prototype, "remove", null);
exports.PlanocontasController = PlanocontasController = __decorate([
    (0, swagger_1.ApiTags)('planocontas'),
    (0, common_1.Controller)('planocontas'),
    __metadata("design:paramtypes", [planocontas_service_1.PlanocontasService])
], PlanocontasController);
//# sourceMappingURL=planocontas.controller.js.map