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
exports.TbbalanceteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tbbalancete_entity_1 = require("./entities/tbbalancete.entity");
let TbbalanceteService = class TbbalanceteService {
    constructor(tbbalanceteRepository) {
        this.tbbalanceteRepository = tbbalanceteRepository;
    }
    async create(createTbbalanceteDto) {
        const newTbbalancete = this.tbbalanceteRepository.create(createTbbalanceteDto);
        return this.tbbalanceteRepository.save(newTbbalancete);
    }
    async findAll() {
        return this.tbbalanceteRepository.find();
    }
    async findOne(id) {
        const found = await this.tbbalanceteRepository.findOne({ where: { id: id } });
        if (!found) {
            throw new common_1.NotFoundException(`Tbbalancete with id "${id}" not found`);
        }
        return found;
    }
    async update(id, updateTbbalanceteDto) {
        const result = await this.tbbalanceteRepository.update({ id: id }, updateTbbalanceteDto);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Tbbalancete with id "${id}" not found`);
        }
        return this.findOne(id);
    }
    async remove(id) {
        const result = await this.tbbalanceteRepository.delete({ id: id });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Tbbalancete with id "${id}" not found`);
        }
    }
};
exports.TbbalanceteService = TbbalanceteService;
exports.TbbalanceteService = TbbalanceteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tbbalancete_entity_1.Tbbalancete)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TbbalanceteService);
//# sourceMappingURL=tbbalancete.service.js.map