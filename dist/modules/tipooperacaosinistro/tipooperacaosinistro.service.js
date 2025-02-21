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
exports.TipooperacaosinistroService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tipooperacaosinistro_entity_1 = require("./entities/tipooperacaosinistro.entity");
let TipooperacaosinistroService = class TipooperacaosinistroService {
    constructor(tipooperacaosinistroRepository) {
        this.tipooperacaosinistroRepository = tipooperacaosinistroRepository;
    }
    async create(createTipooperacaosinistroDto) {
        const newTipooperacaosinistro = this.tipooperacaosinistroRepository.create(createTipooperacaosinistroDto);
        return this.tipooperacaosinistroRepository.save(newTipooperacaosinistro);
    }
    async findAll() {
        return this.tipooperacaosinistroRepository.find();
    }
    async findOne(id) {
        const found = await this.tipooperacaosinistroRepository.findOne({ where: { id: id } });
        if (!found) {
            throw new common_1.NotFoundException(`Tipooperacaosinistro with id "${id}" not found`);
        }
        return found;
    }
    async update(id, updateTipooperacaosinistroDto) {
        const result = await this.tipooperacaosinistroRepository.update({ id: id }, updateTipooperacaosinistroDto);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Tipooperacaosinistro with id "${id}" not found`);
        }
        return this.findOne(id);
    }
    async remove(id) {
        const result = await this.tipooperacaosinistroRepository.delete({ id: id });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Tipooperacaosinistro with id "${id}" not found`);
        }
    }
};
exports.TipooperacaosinistroService = TipooperacaosinistroService;
exports.TipooperacaosinistroService = TipooperacaosinistroService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tipooperacaosinistro_entity_1.Tipooperacaosinistro)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TipooperacaosinistroService);
//# sourceMappingURL=tipooperacaosinistro.service.js.map