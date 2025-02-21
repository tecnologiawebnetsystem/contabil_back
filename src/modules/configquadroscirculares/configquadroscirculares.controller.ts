import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConfigquadroscircularesService } from './configquadroscirculares.service';
import { CreateConfigquadroscircularesDto } from './dto/create-configquadroscirculares.dto';
import { UpdateConfigquadroscircularesDto } from './dto/update-configquadroscirculares.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('configquadroscirculares')
@Controller('configquadroscirculares')
export class ConfigquadroscircularesController {
  constructor(private readonly configquadroscircularesService: ConfigquadroscircularesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new configquadroscirculares' })
  @ApiResponse({ status: 201, description: 'The configquadroscirculares has been successfully created.' })
  create(@Body() createConfigquadroscircularesDto: CreateConfigquadroscircularesDto) {
    return this.configquadroscircularesService.create(createConfigquadroscircularesDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all configquadroscirculares' })
  @ApiResponse({ status: 200, description: 'Return all configquadroscirculares.' })
  findAll() {
    return this.configquadroscircularesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a configquadroscirculares' })
  @ApiResponse({ status: 200, description: 'Return a configquadroscirculares.' })
  findOne(@Param('id') id: string) {
    return this.configquadroscircularesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a configquadroscirculares' })
  @ApiResponse({ status: 200, description: 'The configquadroscirculares has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateConfigquadroscircularesDto: UpdateConfigquadroscircularesDto) {
    return this.configquadroscircularesService.update(+id, updateConfigquadroscircularesDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a configquadroscirculares' })
  @ApiResponse({ status: 200, description: 'The configquadroscirculares has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.configquadroscircularesService.remove(+id);
  }
}
