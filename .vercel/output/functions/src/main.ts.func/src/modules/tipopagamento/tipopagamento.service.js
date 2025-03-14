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
exports.TipopagamentoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tipopagamento_entity_1 = require("./entities/tipopagamento.entity");
let TipopagamentoService = class TipopagamentoService {
    constructor(tipopagamentoRepository) {
        this.tipopagamentoRepository = tipopagamentoRepository;
    }
    async create(createTipopagamentoDto) {
        const newTipopagamento = this.tipopagamentoRepository.create(createTipopagamentoDto);
        return this.tipopagamentoRepository.save(newTipopagamento);
    }
    async findAll() {
        return this.tipopagamentoRepository.find();
    }
    async findOne(id) {
        const found = await this.tipopagamentoRepository.findOne({ where: { id: id } });
        if (!found) {
            throw new common_1.NotFoundException(`Tipopagamento with id "${id}" not found`);
        }
        return found;
    }
    async update(id, updateTipopagamentoDto) {
        const result = await this.tipopagamentoRepository.update({ id: id }, updateTipopagamentoDto);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Tipopagamento with id "${id}" not found`);
        }
        return this.findOne(id);
    }
    async remove(id) {
        const result = await this.tipopagamentoRepository.delete({ id: id });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Tipopagamento with id "${id}" not found`);
        }
    }
};
exports.TipopagamentoService = TipopagamentoService;
exports.TipopagamentoService = TipopagamentoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tipopagamento_entity_1.Tipopagamento)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TipopagamentoService);
//# sourceMappingURL=tipopagamento.service.js.map