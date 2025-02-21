import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipocontratoresseguroService } from './tipocontratoresseguro.service';
import { CreateTipocontratoresseguroDto } from './dto/create-tipocontratoresseguro.dto';
import { UpdateTipocontratoresseguroDto } from './dto/update-tipocontratoresseguro.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('tipocontratoresseguro')
@Controller('tipocontratoresseguro')
export class TipocontratoresseguroController {
  constructor(private readonly tipocontratoresseguroService: TipocontratoresseguroService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tipocontratoresseguro' })
  @ApiResponse({ status: 201, description: 'The tipocontratoresseguro has been successfully created.' })
  create(@Body() createTipocontratoresseguroDto: CreateTipocontratoresseguroDto) {
    return this.tipocontratoresseguroService.create(createTipocontratoresseguroDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tipocontratoresseguro' })
  @ApiResponse({ status: 200, description: 'Return all tipocontratoresseguro.' })
  findAll() {
    return this.tipocontratoresseguroService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a tipocontratoresseguro' })
  @ApiResponse({ status: 200, description: 'Return a tipocontratoresseguro.' })
  findOne(@Param('id') id: string) {
    return this.tipocontratoresseguroService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a tipocontratoresseguro' })
  @ApiResponse({ status: 200, description: 'The tipocontratoresseguro has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateTipocontratoresseguroDto: UpdateTipocontratoresseguroDto) {
    return this.tipocontratoresseguroService.update(+id, updateTipocontratoresseguroDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a tipocontratoresseguro' })
  @ApiResponse({ status: 200, description: 'The tipocontratoresseguro has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.tipocontratoresseguroService.remove(+id);
  }
}
