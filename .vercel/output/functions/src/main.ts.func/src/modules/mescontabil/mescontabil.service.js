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
exports.MescontabilService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const mescontabil_entity_1 = require("./entities/mescontabil.entity");
let MescontabilService = class MescontabilService {
    constructor(mescontabilRepository) {
        this.mescontabilRepository = mescontabilRepository;
    }
    async create(createMescontabilDto) {
        const newMescontabil = this.mescontabilRepository.create(createMescontabilDto);
        return this.mescontabilRepository.save(newMescontabil);
    }
    async findAll() {
        return this.mescontabilRepository.find();
    }
    async findOne(id) {
        const found = await this.mescontabilRepository.findOne({ where: { id: id } });
        if (!found) {
            throw new common_1.NotFoundException(`Mescontabil with id "${id}" not found`);
        }
        return found;
    }
    async update(id, updateMescontabilDto) {
        const result = await this.mescontabilRepository.update({ id: id }, updateMescontabilDto);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Mescontabil with id "${id}" not found`);
        }
        return this.findOne(id);
    }
    async remove(id) {
        const result = await this.mescontabilRepository.delete({ id: id });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Mescontabil with id "${id}" not found`);
        }
    }
};
exports.MescontabilService = MescontabilService;
exports.MescontabilService = MescontabilService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(mescontabil_entity_1.Mescontabil)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MescontabilService);
//# sourceMappingURL=mescontabil.service.js.map