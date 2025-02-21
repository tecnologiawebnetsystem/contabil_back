import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlanocontasService } from './planocontas.service';
import { CreatePlanocontasDto } from './dto/create-planocontas.dto';
import { UpdatePlanocontasDto } from './dto/update-planocontas.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('planocontas')
@Controller('planocontas')
export class PlanocontasController {
  constructor(private readonly planocontasService: PlanocontasService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new planocontas' })
  @ApiResponse({ status: 201, description: 'The planocontas has been successfully created.' })
  create(@Body() createPlanocontasDto: CreatePlanocontasDto) {
    return this.planocontasService.create(createPlanocontasDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all planocontas' })
  @ApiResponse({ status: 200, description: 'Return all planocontas.' })
  findAll() {
    return this.planocontasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a planocontas' })
  @ApiResponse({ status: 200, description: 'Return a planocontas.' })
  findOne(@Param('id') id: string) {
    return this.planocontasService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a planocontas' })
  @ApiResponse({ status: 200, description: 'The planocontas has been successfully updated.' })
  update(@Param('id') id: string, @Body() updatePlanocontasDto: UpdatePlanocontasDto) {
    return this.planocontasService.update(+id, updatePlanocontasDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a planocontas' })
  @ApiResponse({ status: 200, description: 'The planocontas has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.planocontasService.remove(+id);
  }
}
