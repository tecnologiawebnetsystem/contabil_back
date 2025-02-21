import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RelatoriosfipService } from './relatoriosfip.service';
import { CreateRelatoriosfipDto } from './dto/create-relatoriosfip.dto';
import { UpdateRelatoriosfipDto } from './dto/update-relatoriosfip.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('relatoriosfip')
@Controller('relatoriosfip')
export class RelatoriosfipController {
  constructor(private readonly relatoriosfipService: RelatoriosfipService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new relatoriosfip' })
  @ApiResponse({ status: 201, description: 'The relatoriosfip has been successfully created.' })
  create(@Body() createRelatoriosfipDto: CreateRelatoriosfipDto) {
    return this.relatoriosfipService.create(createRelatoriosfipDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all relatoriosfip' })
  @ApiResponse({ status: 200, description: 'Return all relatoriosfip.' })
  findAll() {
    return this.relatoriosfipService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a relatoriosfip' })
  @ApiResponse({ status: 200, description: 'Return a relatoriosfip.' })
  findOne(@Param('id') id: string) {
    return this.relatoriosfipService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a relatoriosfip' })
  @ApiResponse({ status: 200, description: 'The relatoriosfip has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateRelatoriosfipDto: UpdateRelatoriosfipDto) {
    return this.relatoriosfipService.update(+id, updateRelatoriosfipDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a relatoriosfip' })
  @ApiResponse({ status: 200, description: 'The relatoriosfip has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.relatoriosfipService.remove(+id);
  }
}
