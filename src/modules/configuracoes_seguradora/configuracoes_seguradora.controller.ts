import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Configuracoes_seguradoraService } from './configuracoes_seguradora.service';
import { CreateConfiguracoes_seguradoraDto } from './dto/create-configuracoes_seguradora.dto';
import { UpdateConfiguracoes_seguradoraDto } from './dto/update-configuracoes_seguradora.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('configuracoes_seguradora')
@Controller('configuracoes_seguradora')
export class Configuracoes_seguradoraController {
  constructor(private readonly configuracoes_seguradoraService: Configuracoes_seguradoraService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new configuracoes_seguradora' })
  @ApiResponse({ status: 201, description: 'The configuracoes_seguradora has been successfully created.' })
  create(@Body() createConfiguracoes_seguradoraDto: CreateConfiguracoes_seguradoraDto) {
    return this.configuracoes_seguradoraService.create(createConfiguracoes_seguradoraDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all configuracoes_seguradora' })
  @ApiResponse({ status: 200, description: 'Return all configuracoes_seguradora.' })
  findAll() {
    return this.configuracoes_seguradoraService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a configuracoes_seguradora' })
  @ApiResponse({ status: 200, description: 'Return a configuracoes_seguradora.' })
  findOne(@Param('id') id: string) {
    return this.configuracoes_seguradoraService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a configuracoes_seguradora' })
  @ApiResponse({ status: 200, description: 'The configuracoes_seguradora has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateConfiguracoes_seguradoraDto: UpdateConfiguracoes_seguradoraDto) {
    return this.configuracoes_seguradoraService.update(+id, updateConfiguracoes_seguradoraDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a configuracoes_seguradora' })
  @ApiResponse({ status: 200, description: 'The configuracoes_seguradora has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.configuracoes_seguradoraService.remove(+id);
  }
}
