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
exports.RelatoriosfipService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const relatoriosfip_entity_1 = require("./entities/relatoriosfip.entity");
let RelatoriosfipService = class RelatoriosfipService {
    constructor(relatoriosfipRepository) {
        this.relatoriosfipRepository = relatoriosfipRepository;
    }
    async create(createRelatoriosfipDto) {
        const newRelatoriosfip = this.relatoriosfipRepository.create(createRelatoriosfipDto);
        return this.relatoriosfipRepository.save(newRelatoriosfip);
    }
    async findAll() {
        return this.relatoriosfipRepository.find();
    }
    async findOne(RelatorioID) {
        const found = await this.relatoriosfipRepository.findOne({ where: { RelatorioID: RelatorioID } });
        if (!found) {
            throw new common_1.NotFoundException(`Relatoriosfip with RelatorioID "${RelatorioID}" not found`);
        }
        return found;
    }
    async update(RelatorioID, updateRelatoriosfipDto) {
        const result = await this.relatoriosfipRepository.update({ RelatorioID: RelatorioID }, updateRelatoriosfipDto);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Relatoriosfip with RelatorioID "${RelatorioID}" not found`);
        }
        return this.findOne(RelatorioID);
    }
    async remove(RelatorioID) {
        const result = await this.relatoriosfipRepository.delete({ RelatorioID: RelatorioID });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Relatoriosfip with RelatorioID "${RelatorioID}" not found`);
        }
    }
};
exports.RelatoriosfipService = RelatoriosfipService;
exports.RelatoriosfipService = RelatoriosfipService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(relatoriosfip_entity_1.Relatoriosfip)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RelatoriosfipService);
//# sourceMappingURL=relatoriosfip.service.js.map