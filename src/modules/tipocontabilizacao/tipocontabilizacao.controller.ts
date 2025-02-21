import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipocontabilizacaoService } from './tipocontabilizacao.service';
import { CreateTipocontabilizacaoDto } from './dto/create-tipocontabilizacao.dto';
import { UpdateTipocontabilizacaoDto } from './dto/update-tipocontabilizacao.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('tipocontabilizacao')
@Controller('tipocontabilizacao')
export class TipocontabilizacaoController {
  constructor(private readonly tipocontabilizacaoService: TipocontabilizacaoService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tipocontabilizacao' })
  @ApiResponse({ status: 201, description: 'The tipocontabilizacao has been successfully created.' })
  create(@Body() createTipocontabilizacaoDto: CreateTipocontabilizacaoDto) {
    return this.tipocontabilizacaoService.create(createTipocontabilizacaoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tipocontabilizacao' })
  @ApiResponse({ status: 200, description: 'Return all tipocontabilizacao.' })
  findAll() {
    return this.tipocontabilizacaoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a tipocontabilizacao' })
  @ApiResponse({ status: 200, description: 'Return a tipocontabilizacao.' })
  findOne(@Param('id') id: string) {
    return this.tipocontabilizacaoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a tipocontabilizacao' })
  @ApiResponse({ status: 200, description: 'The tipocontabilizacao has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateTipocontabilizacaoDto: UpdateTipocontabilizacaoDto) {
    return this.tipocontabilizacaoService.update(+id, updateTipocontabilizacaoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a tipocontabilizacao' })
  @ApiResponse({ status: 200, description: 'The tipocontabilizacao has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.tipocontabilizacaoService.remove(+id);
  }
}
