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
exports.ConfigquadroscircularesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const configquadroscirculares_entity_1 = require("./entities/configquadroscirculares.entity");
let ConfigquadroscircularesService = class ConfigquadroscircularesService {
    constructor(configquadroscircularesRepository) {
        this.configquadroscircularesRepository = configquadroscircularesRepository;
    }
    async create(createConfigquadroscircularesDto) {
        const newConfigquadroscirculares = this.configquadroscircularesRepository.create(createConfigquadroscircularesDto);
        return this.configquadroscircularesRepository.save(newConfigquadroscirculares);
    }
    async findAll() {
        return this.configquadroscircularesRepository.find();
    }
    async findOne(id) {
        const found = await this.configquadroscircularesRepository.findOne({ where: { id: id } });
        if (!found) {
            throw new common_1.NotFoundException(`Configquadroscirculares with id "${id}" not found`);
        }
        return found;
    }
    async update(id, updateConfigquadroscircularesDto) {
        const result = await this.configquadroscircularesRepository.update({ id: id }, updateConfigquadroscircularesDto);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Configquadroscirculares with id "${id}" not found`);
        }
        return this.findOne(id);
    }
    async remove(id) {
        const result = await this.configquadroscircularesRepository.delete({ id: id });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Configquadroscirculares with id "${id}" not found`);
        }
    }
};
exports.ConfigquadroscircularesService = ConfigquadroscircularesService;
exports.ConfigquadroscircularesService = ConfigquadroscircularesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(configquadroscirculares_entity_1.Configquadroscirculares)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ConfigquadroscircularesService);
//# sourceMappingURL=configquadroscirculares.service.js.map