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
exports.SucursaisService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sucursais_entity_1 = require("./entities/sucursais.entity");
let SucursaisService = class SucursaisService {
    constructor(sucursaisRepository) {
        this.sucursaisRepository = sucursaisRepository;
    }
    async create(createSucursaisDto) {
        const newSucursais = this.sucursaisRepository.create(createSucursaisDto);
        return this.sucursaisRepository.save(newSucursais);
    }
    async findAll() {
        return this.sucursaisRepository.find();
    }
    async findOne(SucursalID) {
        const found = await this.sucursaisRepository.findOne({ where: { SucursalID: SucursalID } });
        if (!found) {
            throw new common_1.NotFoundException(`Sucursais with SucursalID "${SucursalID}" not found`);
        }
        return found;
    }
    async update(SucursalID, updateSucursaisDto) {
        const result = await this.sucursaisRepository.update({ SucursalID: SucursalID }, updateSucursaisDto);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Sucursais with SucursalID "${SucursalID}" not found`);
        }
        return this.findOne(SucursalID);
    }
    async remove(SucursalID) {
        const result = await this.sucursaisRepository.delete({ SucursalID: SucursalID });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Sucursais with SucursalID "${SucursalID}" not found`);
        }
    }
};
exports.SucursaisService = SucursaisService;
exports.SucursaisService = SucursaisService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sucursais_entity_1.Sucursais)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SucursaisService);
//# sourceMappingURL=sucursais.service.js.map