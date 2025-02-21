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
exports.TipocontabilizacaoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tipocontabilizacao_entity_1 = require("./entities/tipocontabilizacao.entity");
let TipocontabilizacaoService = class TipocontabilizacaoService {
    constructor(tipocontabilizacaoRepository) {
        this.tipocontabilizacaoRepository = tipocontabilizacaoRepository;
    }
    async create(createTipocontabilizacaoDto) {
        const newTipocontabilizacao = this.tipocontabilizacaoRepository.create(createTipocontabilizacaoDto);
        return this.tipocontabilizacaoRepository.save(newTipocontabilizacao);
    }
    async findAll() {
        return this.tipocontabilizacaoRepository.find();
    }
    async findOne(id) {
        const found = await this.tipocontabilizacaoRepository.findOne({ where: { id: id } });
        if (!found) {
            throw new common_1.NotFoundException(`Tipocontabilizacao with id "${id}" not found`);
        }
        return found;
    }
    async update(id, updateTipocontabilizacaoDto) {
        const result = await this.tipocontabilizacaoRepository.update({ id: id }, updateTipocontabilizacaoDto);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Tipocontabilizacao with id "${id}" not found`);
        }
        return this.findOne(id);
    }
    async remove(id) {
        const result = await this.tipocontabilizacaoRepository.delete({ id: id });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Tipocontabilizacao with id "${id}" not found`);
        }
    }
};
exports.TipocontabilizacaoService = TipocontabilizacaoService;
exports.TipocontabilizacaoService = TipocontabilizacaoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tipocontabilizacao_entity_1.Tipocontabilizacao)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TipocontabilizacaoService);
//# sourceMappingURL=tipocontabilizacao.service.js.map