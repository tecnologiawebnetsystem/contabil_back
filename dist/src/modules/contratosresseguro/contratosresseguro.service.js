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
exports.ContratosresseguroService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const contratosresseguro_entity_1 = require("./entities/contratosresseguro.entity");
let ContratosresseguroService = class ContratosresseguroService {
    constructor(contratosresseguroRepository) {
        this.contratosresseguroRepository = contratosresseguroRepository;
    }
    async create(createContratosresseguroDto) {
        const newContratosresseguro = this.contratosresseguroRepository.create(createContratosresseguroDto);
        return this.contratosresseguroRepository.save(newContratosresseguro);
    }
    async findAll() {
        return this.contratosresseguroRepository.find();
    }
    async findOne(ContratoID) {
        const found = await this.contratosresseguroRepository.findOne({ where: { ContratoID: ContratoID } });
        if (!found) {
            throw new common_1.NotFoundException(`Contratosresseguro with ContratoID "${ContratoID}" not found`);
        }
        return found;
    }
    async update(ContratoID, updateContratosresseguroDto) {
        const result = await this.contratosresseguroRepository.update({ ContratoID: ContratoID }, updateContratosresseguroDto);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Contratosresseguro with ContratoID "${ContratoID}" not found`);
        }
        return this.findOne(ContratoID);
    }
    async remove(ContratoID) {
        const result = await this.contratosresseguroRepository.delete({ ContratoID: ContratoID });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Contratosresseguro with ContratoID "${ContratoID}" not found`);
        }
    }
};
exports.ContratosresseguroService = ContratosresseguroService;
exports.ContratosresseguroService = ContratosresseguroService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(contratosresseguro_entity_1.Contratosresseguro)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ContratosresseguroService);
//# sourceMappingURL=contratosresseguro.service.js.map