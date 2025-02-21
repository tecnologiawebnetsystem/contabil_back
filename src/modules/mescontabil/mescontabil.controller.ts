import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MescontabilService } from './mescontabil.service';
import { CreateMescontabilDto } from './dto/create-mescontabil.dto';
import { UpdateMescontabilDto } from './dto/update-mescontabil.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('mescontabil')
@Controller('mescontabil')
export class MescontabilController {
  constructor(private readonly mescontabilService: MescontabilService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new mescontabil' })
  @ApiResponse({ status: 201, description: 'The mescontabil has been successfully created.' })
  create(@Body() createMescontabilDto: CreateMescontabilDto) {
    return this.mescontabilService.create(createMescontabilDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all mescontabil' })
  @ApiResponse({ status: 200, description: 'Return all mescontabil.' })
  findAll() {
    return this.mescontabilService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a mescontabil' })
  @ApiResponse({ status: 200, description: 'Return a mescontabil.' })
  findOne(@Param('id') id: string) {
    return this.mescontabilService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a mescontabil' })
  @ApiResponse({ status: 200, description: 'The mescontabil has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateMescontabilDto: UpdateMescontabilDto) {
    return this.mescontabilService.update(+id, updateMescontabilDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a mescontabil' })
  @ApiResponse({ status: 200, description: 'The mescontabil has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.mescontabilService.remove(+id);
  }
}
