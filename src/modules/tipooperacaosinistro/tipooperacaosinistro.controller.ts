import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipooperacaosinistroService } from './tipooperacaosinistro.service';
import { CreateTipooperacaosinistroDto } from './dto/create-tipooperacaosinistro.dto';
import { UpdateTipooperacaosinistroDto } from './dto/update-tipooperacaosinistro.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('tipooperacaosinistro')
@Controller('tipooperacaosinistro')
export class TipooperacaosinistroController {
  constructor(private readonly tipooperacaosinistroService: TipooperacaosinistroService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tipooperacaosinistro' })
  @ApiResponse({ status: 201, description: 'The tipooperacaosinistro has been successfully created.' })
  create(@Body() createTipooperacaosinistroDto: CreateTipooperacaosinistroDto) {
    return this.tipooperacaosinistroService.create(createTipooperacaosinistroDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tipooperacaosinistro' })
  @ApiResponse({ status: 200, description: 'Return all tipooperacaosinistro.' })
  findAll() {
    return this.tipooperacaosinistroService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a tipooperacaosinistro' })
  @ApiResponse({ status: 200, description: 'Return a tipooperacaosinistro.' })
  findOne(@Param('id') id: string) {
    return this.tipooperacaosinistroService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a tipooperacaosinistro' })
  @ApiResponse({ status: 200, description: 'The tipooperacaosinistro has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateTipooperacaosinistroDto: UpdateTipooperacaosinistroDto) {
    return this.tipooperacaosinistroService.update(+id, updateTipooperacaosinistroDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a tipooperacaosinistro' })
  @ApiResponse({ status: 200, description: 'The tipooperacaosinistro has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.tipooperacaosinistroService.remove(+id);
  }
}
