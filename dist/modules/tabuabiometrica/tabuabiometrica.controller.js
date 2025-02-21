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
exports.TabuabiometricaController = void 0;
const common_1 = require("@nestjs/common");
const tabuabiometrica_service_1 = require("./tabuabiometrica.service");
const create_tabuabiometrica_dto_1 = require("./dto/create-tabuabiometrica.dto");
const update_tabuabiometrica_dto_1 = require("./dto/update-tabuabiometrica.dto");
const swagger_1 = require("@nestjs/swagger");
let TabuabiometricaController = class TabuabiometricaController {
    constructor(tabuabiometricaService) {
        this.tabuabiometricaService = tabuabiometricaService;
    }
    create(createTabuabiometricaDto) {
        return this.tabuabiometricaService.create(createTabuabiometricaDto);
    }
    findAll() {
        return this.tabuabiometricaService.findAll();
    }
    findOne(id) {
        return this.tabuabiometricaService.findOne(+id);
    }
    update(id, updateTabuabiometricaDto) {
        return this.tabuabiometricaService.update(+id, updateTabuabiometricaDto);
    }
    remove(id) {
        return this.tabuabiometricaService.remove(+id);
    }
};
exports.TabuabiometricaController = TabuabiometricaController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new tabuabiometrica' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The tabuabiometrica has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tabuabiometrica_dto_1.CreateTabuabiometricaDto]),
    __metadata("design:returntype", void 0)
], TabuabiometricaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all tabuabiometrica' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all tabuabiometrica.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TabuabiometricaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a tabuabiometrica' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a tabuabiometrica.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TabuabiometricaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a tabuabiometrica' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The tabuabiometrica has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tabuabiometrica_dto_1.UpdateTabuabiometricaDto]),
    __metadata("design:returntype", void 0)
], TabuabiometricaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a tabuabiometrica' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The tabuabiometrica has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TabuabiometricaController.prototype, "remove", null);
exports.TabuabiometricaController = TabuabiometricaController = __decorate([
    (0, swagger_1.ApiTags)('tabuabiometrica'),
    (0, common_1.Controller)('tabuabiometrica'),
    __metadata("design:paramtypes", [tabuabiometrica_service_1.TabuabiometricaService])
], TabuabiometricaController);
//# sourceMappingURL=tabuabiometrica.controller.js.map