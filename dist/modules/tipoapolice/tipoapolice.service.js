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
exports.TipoapoliceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tipoapolice_entity_1 = require("./entities/tipoapolice.entity");
let TipoapoliceService = class TipoapoliceService {
    constructor(tipoapoliceRepository) {
        this.tipoapoliceRepository = tipoapoliceRepository;
    }
    async create(createTipoapoliceDto) {
        const newTipoapolice = this.tipoapoliceRepository.create(createTipoapoliceDto);
        return this.tipoapoliceRepository.save(newTipoapolice);
    }
    async findAll() {
        return this.tipoapoliceRepository.find();
    }
    async findOne(id) {
        const found = await this.tipoapoliceRepository.findOne({ where: { id: id } });
        if (!found) {
            throw new common_1.NotFoundException(`Tipoapolice with id "${id}" not found`);
        }
        return found;
    }
    async update(id, updateTipoapoliceDto) {
        const result = await this.tipoapoliceRepository.update({ id: id }, updateTipoapoliceDto);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Tipoapolice with id "${id}" not found`);
        }
        return this.findOne(id);
    }
    async remove(id) {
        const result = await this.tipoapoliceRepository.delete({ id: id });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Tipoapolice with id "${id}" not found`);
        }
    }
};
exports.TipoapoliceService = TipoapoliceService;
exports.TipoapoliceService = TipoapoliceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tipoapolice_entity_1.Tipoapolice)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TipoapoliceService);
//# sourceMappingURL=tipoapolice.service.js.map