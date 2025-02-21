import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ObjetocontabilizacaoService } from './objetocontabilizacao.service';
import { CreateObjetocontabilizacaoDto } from './dto/create-objetocontabilizacao.dto';
import { UpdateObjetocontabilizacaoDto } from './dto/update-objetocontabilizacao.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('objetocontabilizacao')
@Controller('objetocontabilizacao')
export class ObjetocontabilizacaoController {
  constructor(private readonly objetocontabilizacaoService: ObjetocontabilizacaoService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new objetocontabilizacao' })
  @ApiResponse({ status: 201, description: 'The objetocontabilizacao has been successfully created.' })
  create(@Body() createObjetocontabilizacaoDto: CreateObjetocontabilizacaoDto) {
    return this.objetocontabilizacaoService.create(createObjetocontabilizacaoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all objetocontabilizacao' })
  @ApiResponse({ status: 200, description: 'Return all objetocontabilizacao.' })
  findAll() {
    return this.objetocontabilizacaoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a objetocontabilizacao' })
  @ApiResponse({ status: 200, description: 'Return a objetocontabilizacao.' })
  findOne(@Param('id') id: string) {
    return this.objetocontabilizacaoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a objetocontabilizacao' })
  @ApiResponse({ status: 200, description: 'The objetocontabilizacao has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateObjetocontabilizacaoDto: UpdateObjetocontabilizacaoDto) {
    return this.objetocontabilizacaoService.update(+id, updateObjetocontabilizacaoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a objetocontabilizacao' })
  @ApiResponse({ status: 200, description: 'The objetocontabilizacao has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.objetocontabilizacaoService.remove(+id);
  }
}
