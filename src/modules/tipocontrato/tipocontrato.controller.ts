import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipocontratoService } from './tipocontrato.service';
import { CreateTipocontratoDto } from './dto/create-tipocontrato.dto';
import { UpdateTipocontratoDto } from './dto/update-tipocontrato.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('tipocontrato')
@Controller('tipocontrato')
export class TipocontratoController {
  constructor(private readonly tipocontratoService: TipocontratoService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tipocontrato' })
  @ApiResponse({ status: 201, description: 'The tipocontrato has been successfully created.' })
  create(@Body() createTipocontratoDto: CreateTipocontratoDto) {
    return this.tipocontratoService.create(createTipocontratoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tipocontrato' })
  @ApiResponse({ status: 200, description: 'Return all tipocontrato.' })
  findAll() {
    return this.tipocontratoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a tipocontrato' })
  @ApiResponse({ status: 200, description: 'Return a tipocontrato.' })
  findOne(@Param('id') id: string) {
    return this.tipocontratoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a tipocontrato' })
  @ApiResponse({ status: 200, description: 'The tipocontrato has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateTipocontratoDto: UpdateTipocontratoDto) {
    return this.tipocontratoService.update(+id, updateTipocontratoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a tipocontrato' })
  @ApiResponse({ status: 200, description: 'The tipocontrato has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.tipocontratoService.remove(+id);
  }
}
