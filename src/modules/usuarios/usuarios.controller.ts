import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuariosDto } from './dto/create-usuarios.dto';
import { UpdateUsuariosDto } from './dto/update-usuarios.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('usuarios')
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new usuarios' })
  @ApiResponse({ status: 201, description: 'The usuarios has been successfully created.' })
  create(@Body() createUsuariosDto: CreateUsuariosDto) {
    return this.usuariosService.create(createUsuariosDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all usuarios' })
  @ApiResponse({ status: 200, description: 'Return all usuarios.' })
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a usuarios' })
  @ApiResponse({ status: 200, description: 'Return a usuarios.' })
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a usuarios' })
  @ApiResponse({ status: 200, description: 'The usuarios has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateUsuariosDto: UpdateUsuariosDto) {
    return this.usuariosService.update(+id, updateUsuariosDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a usuarios' })
  @ApiResponse({ status: 200, description: 'The usuarios has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }
}
