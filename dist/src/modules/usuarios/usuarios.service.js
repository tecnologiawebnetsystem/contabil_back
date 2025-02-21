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
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const usuarios_entity_1 = require("./entities/usuarios.entity");
let UsuariosService = class UsuariosService {
    constructor(usuariosRepository) {
        this.usuariosRepository = usuariosRepository;
    }
    async create(createUsuariosDto) {
        const newUsuarios = this.usuariosRepository.create(createUsuariosDto);
        newUsuarios.DataCriacao = new Date();
        newUsuarios.DataAtualizacao = new Date();
        return this.usuariosRepository.save(newUsuarios);
    }
    async findAll() {
        return this.usuariosRepository.find();
    }
    async findOne(UsuarioID) {
        const found = await this.usuariosRepository.findOne({ where: { UsuarioID: UsuarioID } });
        if (!found) {
            throw new common_1.NotFoundException(`Usuarios with UsuarioID "${UsuarioID}" not found`);
        }
        return found;
    }
    async update(UsuarioID, updateUsuariosDto) {
        const result = await this.usuariosRepository.update({ UsuarioID: UsuarioID }, updateUsuariosDto);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Usuarios with UsuarioID "${UsuarioID}" not found`);
        }
        return this.findOne(UsuarioID);
    }
    async remove(UsuarioID) {
        const result = await this.usuariosRepository.delete({ UsuarioID: UsuarioID });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Usuarios with UsuarioID "${UsuarioID}" not found`);
        }
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuarios_entity_1.Usuarios)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map