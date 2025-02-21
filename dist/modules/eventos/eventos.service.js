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
exports.EventosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const eventos_entity_1 = require("./entities/eventos.entity");
let EventosService = class EventosService {
    constructor(eventosRepository) {
        this.eventosRepository = eventosRepository;
    }
    async create(createEventosDto) {
        const newEventos = this.eventosRepository.create(createEventosDto);
        return this.eventosRepository.save(newEventos);
    }
    async findAll() {
        return this.eventosRepository.find();
    }
    async findOne(id) {
        const found = await this.eventosRepository.findOne({ where: { id: id } });
        if (!found) {
            throw new common_1.NotFoundException(`Eventos with id "${id}" not found`);
        }
        return found;
    }
    async update(id, updateEventosDto) {
        const result = await this.eventosRepository.update({ id: id }, updateEventosDto);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Eventos with id "${id}" not found`);
        }
        return this.findOne(id);
    }
    async remove(id) {
        const result = await this.eventosRepository.delete({ id: id });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Eventos with id "${id}" not found`);
        }
    }
};
exports.EventosService = EventosService;
exports.EventosService = EventosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(eventos_entity_1.Eventos)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EventosService);
//# sourceMappingURL=eventos.service.js.map