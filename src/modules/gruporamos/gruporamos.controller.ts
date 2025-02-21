import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GruporamosService } from './gruporamos.service';
import { CreateGruporamosDto } from './dto/create-gruporamos.dto';
import { UpdateGruporamosDto } from './dto/update-gruporamos.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('gruporamos')
@Controller('gruporamos')
export class GruporamosController {
  constructor(private readonly gruporamosService: GruporamosService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new gruporamos' })
  @ApiResponse({ status: 201, description: 'The gruporamos has been successfully created.' })
  create(@Body() createGruporamosDto: CreateGruporamosDto) {
    return this.gruporamosService.create(createGruporamosDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all gruporamos' })
  @ApiResponse({ status: 200, description: 'Return all gruporamos.' })
  findAll() {
    return this.gruporamosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a gruporamos' })
  @ApiResponse({ status: 200, description: 'Return a gruporamos.' })
  findOne(@Param('id') id: string) {
    return this.gruporamosService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a gruporamos' })
  @ApiResponse({ status: 200, description: 'The gruporamos has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateGruporamosDto: UpdateGruporamosDto) {
    return this.gruporamosService.update(+id, updateGruporamosDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a gruporamos' })
  @ApiResponse({ status: 200, description: 'The gruporamos has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.gruporamosService.remove(+id);
  }
}
