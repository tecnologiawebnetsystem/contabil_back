import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProvisoestecnicasService } from './provisoestecnicas.service';
import { CreateProvisoestecnicasDto } from './dto/create-provisoestecnicas.dto';
import { UpdateProvisoestecnicasDto } from './dto/update-provisoestecnicas.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('provisoestecnicas')
@Controller('provisoestecnicas')
export class ProvisoestecnicasController {
  constructor(private readonly provisoestecnicasService: ProvisoestecnicasService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new provisoestecnicas' })
  @ApiResponse({ status: 201, description: 'The provisoestecnicas has been successfully created.' })
  create(@Body() createProvisoestecnicasDto: CreateProvisoestecnicasDto) {
    return this.provisoestecnicasService.create(createProvisoestecnicasDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all provisoestecnicas' })
  @ApiResponse({ status: 200, description: 'Return all provisoestecnicas.' })
  findAll() {
    return this.provisoestecnicasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a provisoestecnicas' })
  @ApiResponse({ status: 200, description: 'Return a provisoestecnicas.' })
  findOne(@Param('id') id: string) {
    return this.provisoestecnicasService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a provisoestecnicas' })
  @ApiResponse({ status: 200, description: 'The provisoestecnicas has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateProvisoestecnicasDto: UpdateProvisoestecnicasDto) {
    return this.provisoestecnicasService.update(+id, updateProvisoestecnicasDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a provisoestecnicas' })
  @ApiResponse({ status: 200, description: 'The provisoestecnicas has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.provisoestecnicasService.remove(+id);
  }
}
