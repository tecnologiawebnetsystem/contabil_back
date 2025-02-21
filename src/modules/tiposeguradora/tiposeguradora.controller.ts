import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiposeguradoraService } from './tiposeguradora.service';
import { CreateTiposeguradoraDto } from './dto/create-tiposeguradora.dto';
import { UpdateTiposeguradoraDto } from './dto/update-tiposeguradora.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('tiposeguradora')
@Controller('tiposeguradora')
export class TiposeguradoraController {
  constructor(private readonly tiposeguradoraService: TiposeguradoraService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tiposeguradora' })
  @ApiResponse({ status: 201, description: 'The tiposeguradora has been successfully created.' })
  create(@Body() createTiposeguradoraDto: CreateTiposeguradoraDto) {
    return this.tiposeguradoraService.create(createTiposeguradoraDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tiposeguradora' })
  @ApiResponse({ status: 200, description: 'Return all tiposeguradora.' })
  findAll() {
    return this.tiposeguradoraService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a tiposeguradora' })
  @ApiResponse({ status: 200, description: 'Return a tiposeguradora.' })
  findOne(@Param('id') id: string) {
    return this.tiposeguradoraService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a tiposeguradora' })
  @ApiResponse({ status: 200, description: 'The tiposeguradora has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateTiposeguradoraDto: UpdateTiposeguradoraDto) {
    return this.tiposeguradoraService.update(+id, updateTiposeguradoraDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a tiposeguradora' })
  @ApiResponse({ status: 200, description: 'The tiposeguradora has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.tiposeguradoraService.remove(+id);
  }
}
