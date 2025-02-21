import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistoricopadraoService } from './historicopadrao.service';
import { CreateHistoricopadraoDto } from './dto/create-historicopadrao.dto';
import { UpdateHistoricopadraoDto } from './dto/update-historicopadrao.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('historicopadrao')
@Controller('historicopadrao')
export class HistoricopadraoController {
  constructor(private readonly historicopadraoService: HistoricopadraoService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new historicopadrao' })
  @ApiResponse({ status: 201, description: 'The historicopadrao has been successfully created.' })
  create(@Body() createHistoricopadraoDto: CreateHistoricopadraoDto) {
    return this.historicopadraoService.create(createHistoricopadraoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all historicopadrao' })
  @ApiResponse({ status: 200, description: 'Return all historicopadrao.' })
  findAll() {
    return this.historicopadraoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a historicopadrao' })
  @ApiResponse({ status: 200, description: 'Return a historicopadrao.' })
  findOne(@Param('id') id: string) {
    return this.historicopadraoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a historicopadrao' })
  @ApiResponse({ status: 200, description: 'The historicopadrao has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateHistoricopadraoDto: UpdateHistoricopadraoDto) {
    return this.historicopadraoService.update(+id, updateHistoricopadraoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a historicopadrao' })
  @ApiResponse({ status: 200, description: 'The historicopadrao has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.historicopadraoService.remove(+id);
  }
}
