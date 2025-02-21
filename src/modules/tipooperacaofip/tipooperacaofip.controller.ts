import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipooperacaofipService } from './tipooperacaofip.service';
import { CreateTipooperacaofipDto } from './dto/create-tipooperacaofip.dto';
import { UpdateTipooperacaofipDto } from './dto/update-tipooperacaofip.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('tipooperacaofip')
@Controller('tipooperacaofip')
export class TipooperacaofipController {
  constructor(private readonly tipooperacaofipService: TipooperacaofipService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tipooperacaofip' })
  @ApiResponse({ status: 201, description: 'The tipooperacaofip has been successfully created.' })
  create(@Body() createTipooperacaofipDto: CreateTipooperacaofipDto) {
    return this.tipooperacaofipService.create(createTipooperacaofipDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tipooperacaofip' })
  @ApiResponse({ status: 200, description: 'Return all tipooperacaofip.' })
  findAll() {
    return this.tipooperacaofipService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a tipooperacaofip' })
  @ApiResponse({ status: 200, description: 'Return a tipooperacaofip.' })
  findOne(@Param('id') id: string) {
    return this.tipooperacaofipService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a tipooperacaofip' })
  @ApiResponse({ status: 200, description: 'The tipooperacaofip has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateTipooperacaofipDto: UpdateTipooperacaofipDto) {
    return this.tipooperacaofipService.update(+id, updateTipooperacaofipDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a tipooperacaofip' })
  @ApiResponse({ status: 200, description: 'The tipooperacaofip has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.tipooperacaofipService.remove(+id);
  }
}
