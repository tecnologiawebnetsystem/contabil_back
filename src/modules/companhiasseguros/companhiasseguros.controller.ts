import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanhiassegurosService } from './companhiasseguros.service';
import { CreateCompanhiassegurosDto } from './dto/create-companhiasseguros.dto';
import { UpdateCompanhiassegurosDto } from './dto/update-companhiasseguros.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('companhiasseguros')
@Controller('companhiasseguros')
export class CompanhiassegurosController {
  constructor(private readonly companhiassegurosService: CompanhiassegurosService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new companhiasseguros' })
  @ApiResponse({ status: 201, description: 'The companhiasseguros has been successfully created.' })
  create(@Body() createCompanhiassegurosDto: CreateCompanhiassegurosDto) {
    return this.companhiassegurosService.create(createCompanhiassegurosDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all companhiasseguros' })
  @ApiResponse({ status: 200, description: 'Return all companhiasseguros.' })
  findAll() {
    return this.companhiassegurosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a companhiasseguros' })
  @ApiResponse({ status: 200, description: 'Return a companhiasseguros.' })
  findOne(@Param('id') id: string) {
    return this.companhiassegurosService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a companhiasseguros' })
  @ApiResponse({ status: 200, description: 'The companhiasseguros has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateCompanhiassegurosDto: UpdateCompanhiassegurosDto) {
    return this.companhiassegurosService.update(+id, updateCompanhiassegurosDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a companhiasseguros' })
  @ApiResponse({ status: 200, description: 'The companhiasseguros has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.companhiassegurosService.remove(+id);
  }
}
