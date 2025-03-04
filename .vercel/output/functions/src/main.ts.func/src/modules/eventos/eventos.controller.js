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
exports.EventosController = void 0;
const common_1 = require("@nestjs/common");
const eventos_service_1 = require("./eventos.service");
const create_eventos_dto_1 = require("./dto/create-eventos.dto");
const update_eventos_dto_1 = require("./dto/update-eventos.dto");
const swagger_1 = require("@nestjs/swagger");
let EventosController = class EventosController {
    constructor(eventosService) {
        this.eventosService = eventosService;
    }
    create(createEventosDto) {
        return this.eventosService.create(createEventosDto);
    }
    findAll() {
        return this.eventosService.findAll();
    }
    findOne(id) {
        return this.eventosService.findOne(+id);
    }
    update(id, updateEventosDto) {
        return this.eventosService.update(+id, updateEventosDto);
    }
    remove(id) {
        return this.eventosService.remove(+id);
    }
};
exports.EventosController = EventosController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new eventos' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The eventos has been successfully created.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_eventos_dto_1.CreateEventosDto]),
    __metadata("design:returntype", void 0)
], EventosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all eventos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all eventos.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a eventos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return a eventos.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a eventos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The eventos has been successfully updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_eventos_dto_1.UpdateEventosDto]),
    __metadata("design:returntype", void 0)
], EventosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a eventos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The eventos has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventosController.prototype, "remove", null);
exports.EventosController = EventosController = __decorate([
    (0, swagger_1.ApiTags)('eventos'),
    (0, common_1.Controller)('eventos'),
    __metadata("design:paramtypes", [eventos_service_1.EventosService])
], EventosController);
//# sourceMappingURL=eventos.controller.js.map