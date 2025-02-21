import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiporesseguroService } from './tiporesseguro.service';
import { CreateTiporesseguroDto } from './dto/create-tiporesseguro.dto';
import { UpdateTiporesseguroDto } from './dto/update-tiporesseguro.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('tiporesseguro')
@Controller('tiporesseguro')
export class TiporesseguroController {
  constructor(private readonly tiporesseguroService: TiporesseguroService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tiporesseguro' })
  @ApiResponse({ status: 201, description: 'The tiporesseguro has been successfully created.' })
  create(@Body() createTiporesseguroDto: CreateTiporesseguroDto) {
    return this.tiporesseguroService.create(createTiporesseguroDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tiporesseguro' })
  @ApiResponse({ status: 200, description: 'Return all tiporesseguro.' })
  findAll() {
    return this.tiporesseguroService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a tiporesseguro' })
  @ApiResponse({ status: 200, description: 'Return a tiporesseguro.' })
  findOne(@Param('id') id: string) {
    return this.tiporesseguroService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a tiporesseguro' })
  @ApiResponse({ status: 200, description: 'The tiporesseguro has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateTiporesseguroDto: UpdateTiporesseguroDto) {
    return this.tiporesseguroService.update(+id, updateTiporesseguroDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a tiporesseguro' })
  @ApiResponse({ status: 200, description: 'The tiporesseguro has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.tiporesseguroService.remove(+id);
  }
}
