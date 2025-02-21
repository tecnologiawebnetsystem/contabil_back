import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuarios } from './entities/usuarios.entity';
import { CreateUsuariosDto } from './dto/create-usuarios.dto';
import { UpdateUsuariosDto } from './dto/update-usuarios.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuarios)
    private readonly usuariosRepository: Repository<Usuarios>,
  ) {}

  async create(createUsuariosDto: CreateUsuariosDto): Promise<Usuarios> {
    const newUsuarios = this.usuariosRepository.create(createUsuariosDto);
    newUsuarios.DataCriacao = new Date();
    newUsuarios.DataAtualizacao = new Date();
    return this.usuariosRepository.save(newUsuarios);
  }

  async findAll(): Promise<Usuarios[]> {
    return this.usuariosRepository.find();
  }

  async findOne(UsuarioID: any): Promise<Usuarios> {
    const found = await this.usuariosRepository.findOne({ where: { UsuarioID: UsuarioID } });
    if (!found) {
      throw new NotFoundException(`Usuarios with UsuarioID "${UsuarioID}" not found`);
    }
    return found;
  }

  async update(UsuarioID: any, updateUsuariosDto: UpdateUsuariosDto): Promise<Usuarios> {
    const result = await this.usuariosRepository.update({ UsuarioID: UsuarioID }, updateUsuariosDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Usuarios with UsuarioID "${UsuarioID}" not found`);
    }
    return this.findOne(UsuarioID);
  }

  async remove(UsuarioID: any): Promise<void> {
    const result = await this.usuariosRepository.delete({ UsuarioID: UsuarioID });
    if (result.affected === 0) {
      throw new NotFoundException(`Usuarios with UsuarioID "${UsuarioID}" not found`);
    }
  }
}
