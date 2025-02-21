import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModulocontabilService } from './modulocontabil.service';
import { CreateModulocontabilDto } from './dto/create-modulocontabil.dto';
import { UpdateModulocontabilDto } from './dto/update-modulocontabil.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('modulocontabil')
@Controller('modulocontabil')
export class ModulocontabilController {
  constructor(private readonly modulocontabilService: ModulocontabilService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new modulocontabil' })
  @ApiResponse({ status: 201, description: 'The modulocontabil has been successfully created.' })
  create(@Body() createModulocontabilDto: CreateModulocontabilDto) {
    return this.modulocontabilService.create(createModulocontabilDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all modulocontabil' })
  @ApiResponse({ status: 200, description: 'Return all modulocontabil.' })
  findAll() {
    return this.modulocontabilService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a modulocontabil' })
  @ApiResponse({ status: 200, description: 'Return a modulocontabil.' })
  findOne(@Param('id') id: string) {
    return this.modulocontabilService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a modulocontabil' })
  @ApiResponse({ status: 200, description: 'The modulocontabil has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateModulocontabilDto: UpdateModulocontabilDto) {
    return this.modulocontabilService.update(+id, updateModulocontabilDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a modulocontabil' })
  @ApiResponse({ status: 200, description: 'The modulocontabil has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.modulocontabilService.remove(+id);
  }
}
