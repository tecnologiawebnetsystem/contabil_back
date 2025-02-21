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
exports.LancamentoscontabeisService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const lancamentoscontabeis_entity_1 = require("./entities/lancamentoscontabeis.entity");
let LancamentoscontabeisService = class LancamentoscontabeisService {
    constructor(lancamentoscontabeisRepository) {
        this.lancamentoscontabeisRepository = lancamentoscontabeisRepository;
    }
    async create(createLancamentoscontabeisDto) {
        const newLancamentoscontabeis = this.lancamentoscontabeisRepository.create(createLancamentoscontabeisDto);
        newLancamentoscontabeis.DataCriacao = new Date();
        return this.lancamentoscontabeisRepository.save(newLancamentoscontabeis);
    }
    async findAll() {
        return this.lancamentoscontabeisRepository.find();
    }
    async findOne(LancamentoID) {
        const found = await this.lancamentoscontabeisRepository.findOne({ where: { LancamentoID: LancamentoID } });
        if (!found) {
            throw new common_1.NotFoundException(`Lancamentoscontabeis with LancamentoID "${LancamentoID}" not found`);
        }
        return found;
    }
    async update(LancamentoID, updateLancamentoscontabeisDto) {
        const result = await this.lancamentoscontabeisRepository.update({ LancamentoID: LancamentoID }, updateLancamentoscontabeisDto);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Lancamentoscontabeis with LancamentoID "${LancamentoID}" not found`);
        }
        return this.findOne(LancamentoID);
    }
    async remove(LancamentoID) {
        const result = await this.lancamentoscontabeisRepository.delete({ LancamentoID: LancamentoID });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Lancamentoscontabeis with LancamentoID "${LancamentoID}" not found`);
        }
    }
};
exports.LancamentoscontabeisService = LancamentoscontabeisService;
exports.LancamentoscontabeisService = LancamentoscontabeisService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(lancamentoscontabeis_entity_1.Lancamentoscontabeis)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LancamentoscontabeisService);
//# sourceMappingURL=lancamentoscontabeis.service.js.map