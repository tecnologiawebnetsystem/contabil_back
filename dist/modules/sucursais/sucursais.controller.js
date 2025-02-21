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
exports.SucursaisController = void 0;
const common_1 = require("@nestjs/common");
const sucursais_service_1 = require("./sucursais.service");
const create_sucursais_dto_1 = require("./dto/create-sucursais.dto");
const update_sucursais_dto_1 = require("./dto/update-sucursais.dto");
const swagger_1 = require("@nestjs/swagger");
let SucursaisController = class SucursaisController {
    constructor(sucursaisService) {
        this.sucursaisService = sucursaisService;
    }
    create(createSucursaisDto) {
        return this.sucursaisService.create(createSucursaisDto);
    }
    findAll() {
        return this.sucursaisService.findAll();
    }
    findOne(id) {
        return this.sucursaisService.findOne(+id);
    }
    update(id, updateSucursaisDto) {
        return this.sucursaisService.update(+id, updateSucursaisDto);
    }
    remove(id) {
        return this.sucursaisService.remove(+id);
    }
};
exports.SucursaisController = SucursaisController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new sucursais' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The sucursais has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sucursais_dto_1.CreateSucursaisDto]),
    __metadata("design:returntype", void 0)
], SucursaisController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all sucursais' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all sucursais.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SucursaisController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a sucursais' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a sucursais.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SucursaisController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a sucursais' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The sucursais has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_sucursais_dto_1.UpdateSucursaisDto]),
    __metadata("design:returntype", void 0)
], SucursaisController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a sucursais' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The sucursais has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SucursaisController.prototype, "remove", null);
exports.SucursaisController = SucursaisController = __decorate([
    (0, swagger_1.ApiTags)('sucursais'),
    (0, common_1.Controller)('sucursais'),
    __metadata("design:paramtypes", [sucursais_service_1.SucursaisService])
], SucursaisController);
//# sourceMappingURL=sucursais.controller.js.map