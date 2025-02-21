import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CircularesService } from './circulares.service';
import { CreateCircularesDto } from './dto/create-circulares.dto';
import { UpdateCircularesDto } from './dto/update-circulares.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('circulares')
@Controller('circulares')
export class CircularesController {
  constructor(private readonly circularesService: CircularesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new circulares' })
  @ApiResponse({ status: 201, description: 'The circulares has been successfully created.' })
  create(@Body() createCircularesDto: CreateCircularesDto) {
    return this.circularesService.create(createCircularesDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all circulares' })
  @ApiResponse({ status: 200, description: 'Return all circulares.' })
  findAll() {
    return this.circularesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a circulares' })
  @ApiResponse({ status: 200, description: 'Return a circulares.' })
  findOne(@Param('id') id: string) {
    return this.circularesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a circulares' })
  @ApiResponse({ status: 200, description: 'The circulares has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateCircularesDto: UpdateCircularesDto) {
    return this.circularesService.update(+id, updateCircularesDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a circulares' })
  @ApiResponse({ status: 200, description: 'The circulares has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.circularesService.remove(+id);
  }
}
