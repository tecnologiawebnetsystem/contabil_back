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
exports.GruporamosController = void 0;
const common_1 = require("@nestjs/common");
const gruporamos_service_1 = require("./gruporamos.service");
const create_gruporamos_dto_1 = require("./dto/create-gruporamos.dto");
const update_gruporamos_dto_1 = require("./dto/update-gruporamos.dto");
const swagger_1 = require("@nestjs/swagger");
let GruporamosController = class GruporamosController {
    constructor(gruporamosService) {
        this.gruporamosService = gruporamosService;
    }
    create(createGruporamosDto) {
        return this.gruporamosService.create(createGruporamosDto);
    }
    findAll() {
        return this.gruporamosService.findAll();
    }
    findOne(id) {
        return this.gruporamosService.findOne(+id);
    }
    update(id, updateGruporamosDto) {
        return this.gruporamosService.update(+id, updateGruporamosDto);
    }
    remove(id) {
        return this.gruporamosService.remove(+id);
    }
};
exports.GruporamosController = GruporamosController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new gruporamos' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The gruporamos has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gruporamos_dto_1.CreateGruporamosDto]),
    __metadata("design:returntype", void 0)
], GruporamosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all gruporamos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all gruporamos.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GruporamosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a gruporamos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a gruporamos.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GruporamosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a gruporamos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The gruporamos has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_gruporamos_dto_1.UpdateGruporamosDto]),
    __metadata("design:returntype", void 0)
], GruporamosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a gruporamos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The gruporamos has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GruporamosController.prototype, "remove", null);
exports.GruporamosController = GruporamosController = __decorate([
    (0, swagger_1.ApiTags)('gruporamos'),
    (0, common_1.Controller)('gruporamos'),
    __metadata("design:paramtypes", [gruporamos_service_1.GruporamosService])
], GruporamosController);
//# sourceMappingURL=gruporamos.controller.js.map