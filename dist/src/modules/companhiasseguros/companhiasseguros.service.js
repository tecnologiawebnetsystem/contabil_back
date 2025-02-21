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
exports.CompanhiassegurosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const companhiasseguros_entity_1 = require("./entities/companhiasseguros.entity");
let CompanhiassegurosService = class CompanhiassegurosService {
    constructor(companhiassegurosRepository) {
        this.companhiassegurosRepository = companhiassegurosRepository;
    }
    async create(createCompanhiassegurosDto) {
        const newCompanhiasseguros = this.companhiassegurosRepository.create(createCompanhiassegurosDto);
        newCompanhiasseguros.DataCriacao = new Date();
        newCompanhiasseguros.DataAtualizacao = new Date();
        return this.companhiassegurosRepository.save(newCompanhiasseguros);
    }
    async findAll() {
        return this.companhiassegurosRepository.find();
    }
    async findOne(CompanhiaID) {
        const found = await this.companhiassegurosRepository.findOne({ where: { CompanhiaID: CompanhiaID } });
        if (!found) {
            throw new common_1.NotFoundException(`Companhiasseguros with CompanhiaID "${CompanhiaID}" not found`);
        }
        return found;
    }
    async update(CompanhiaID, updateCompanhiassegurosDto) {
        const result = await this.companhiassegurosRepository.update({ CompanhiaID: CompanhiaID }, updateCompanhiassegurosDto);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Companhiasseguros with CompanhiaID "${CompanhiaID}" not found`);
        }
        return this.findOne(CompanhiaID);
    }
    async remove(CompanhiaID) {
        const result = await this.companhiassegurosRepository.delete({ CompanhiaID: CompanhiaID });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Companhiasseguros with CompanhiaID "${CompanhiaID}" not found`);
        }
    }
};
exports.CompanhiassegurosService = CompanhiassegurosService;
exports.CompanhiassegurosService = CompanhiassegurosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(companhiasseguros_entity_1.Companhiasseguros)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CompanhiassegurosService);
//# sourceMappingURL=companhiasseguros.service.js.map