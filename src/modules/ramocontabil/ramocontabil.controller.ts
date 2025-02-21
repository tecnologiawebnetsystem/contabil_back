import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RamocontabilService } from './ramocontabil.service';
import { CreateRamocontabilDto } from './dto/create-ramocontabil.dto';
import { UpdateRamocontabilDto } from './dto/update-ramocontabil.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('ramocontabil')
@Controller('ramocontabil')
export class RamocontabilController {
  constructor(private readonly ramocontabilService: RamocontabilService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new ramocontabil' })
  @ApiResponse({ status: 201, description: 'The ramocontabil has been successfully created.' })
  create(@Body() createRamocontabilDto: CreateRamocontabilDto) {
    return this.ramocontabilService.create(createRamocontabilDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all ramocontabil' })
  @ApiResponse({ status: 200, description: 'Return all ramocontabil.' })
  findAll() {
    return this.ramocontabilService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a ramocontabil' })
  @ApiResponse({ status: 200, description: 'Return a ramocontabil.' })
  findOne(@Param('id') id: string) {
    return this.ramocontabilService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a ramocontabil' })
  @ApiResponse({ status: 200, description: 'The ramocontabil has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateRamocontabilDto: UpdateRamocontabilDto) {
    return this.ramocontabilService.update(+id, updateRamocontabilDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a ramocontabil' })
  @ApiResponse({ status: 200, description: 'The ramocontabil has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.ramocontabilService.remove(+id);
  }
}
