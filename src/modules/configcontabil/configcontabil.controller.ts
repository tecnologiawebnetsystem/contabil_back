import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConfigcontabilService } from './configcontabil.service';
import { CreateConfigcontabilDto } from './dto/create-configcontabil.dto';
import { UpdateConfigcontabilDto } from './dto/update-configcontabil.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('configcontabil')
@Controller('configcontabil')
export class ConfigcontabilController {
  constructor(private readonly configcontabilService: ConfigcontabilService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new configcontabil' })
  @ApiResponse({ status: 201, description: 'The configcontabil has been successfully created.' })
  create(@Body() createConfigcontabilDto: CreateConfigcontabilDto) {
    return this.configcontabilService.create(createConfigcontabilDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all configcontabil' })
  @ApiResponse({ status: 200, description: 'Return all configcontabil.' })
  findAll() {
    return this.configcontabilService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a configcontabil' })
  @ApiResponse({ status: 200, description: 'Return a configcontabil.' })
  findOne(@Param('id') id: string) {
    return this.configcontabilService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a configcontabil' })
  @ApiResponse({ status: 200, description: 'The configcontabil has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateConfigcontabilDto: UpdateConfigcontabilDto) {
    return this.configcontabilService.update(+id, updateConfigcontabilDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a configcontabil' })
  @ApiResponse({ status: 200, description: 'The configcontabil has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.configcontabilService.remove(+id);
  }
}
