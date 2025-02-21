import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiponaturezacontabilizacaoService } from './tiponaturezacontabilizacao.service';
import { CreateTiponaturezacontabilizacaoDto } from './dto/create-tiponaturezacontabilizacao.dto';
import { UpdateTiponaturezacontabilizacaoDto } from './dto/update-tiponaturezacontabilizacao.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('tiponaturezacontabilizacao')
@Controller('tiponaturezacontabilizacao')
export class TiponaturezacontabilizacaoController {
  constructor(private readonly tiponaturezacontabilizacaoService: TiponaturezacontabilizacaoService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tiponaturezacontabilizacao' })
  @ApiResponse({ status: 201, description: 'The tiponaturezacontabilizacao has been successfully created.' })
  create(@Body() createTiponaturezacontabilizacaoDto: CreateTiponaturezacontabilizacaoDto) {
    return this.tiponaturezacontabilizacaoService.create(createTiponaturezacontabilizacaoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tiponaturezacontabilizacao' })
  @ApiResponse({ status: 200, description: 'Return all tiponaturezacontabilizacao.' })
  findAll() {
    return this.tiponaturezacontabilizacaoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a tiponaturezacontabilizacao' })
  @ApiResponse({ status: 200, description: 'Return a tiponaturezacontabilizacao.' })
  findOne(@Param('id') id: string) {
    return this.tiponaturezacontabilizacaoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a tiponaturezacontabilizacao' })
  @ApiResponse({ status: 200, description: 'The tiponaturezacontabilizacao has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateTiponaturezacontabilizacaoDto: UpdateTiponaturezacontabilizacaoDto) {
    return this.tiponaturezacontabilizacaoService.update(+id, updateTiponaturezacontabilizacaoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a tiponaturezacontabilizacao' })
  @ApiResponse({ status: 200, description: 'The tiponaturezacontabilizacao has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.tiponaturezacontabilizacaoService.remove(+id);
  }
}
