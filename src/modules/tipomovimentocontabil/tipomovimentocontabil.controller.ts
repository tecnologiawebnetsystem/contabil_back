import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipomovimentocontabilService } from './tipomovimentocontabil.service';
import { CreateTipomovimentocontabilDto } from './dto/create-tipomovimentocontabil.dto';
import { UpdateTipomovimentocontabilDto } from './dto/update-tipomovimentocontabil.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('tipomovimentocontabil')
@Controller('tipomovimentocontabil')
export class TipomovimentocontabilController {
  constructor(private readonly tipomovimentocontabilService: TipomovimentocontabilService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tipomovimentocontabil' })
  @ApiResponse({ status: 201, description: 'The tipomovimentocontabil has been successfully created.' })
  create(@Body() createTipomovimentocontabilDto: CreateTipomovimentocontabilDto) {
    return this.tipomovimentocontabilService.create(createTipomovimentocontabilDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tipomovimentocontabil' })
  @ApiResponse({ status: 200, description: 'Return all tipomovimentocontabil.' })
  findAll() {
    return this.tipomovimentocontabilService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a tipomovimentocontabil' })
  @ApiResponse({ status: 200, description: 'Return a tipomovimentocontabil.' })
  findOne(@Param('id') id: string) {
    return this.tipomovimentocontabilService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a tipomovimentocontabil' })
  @ApiResponse({ status: 200, description: 'The tipomovimentocontabil has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateTipomovimentocontabilDto: UpdateTipomovimentocontabilDto) {
    return this.tipomovimentocontabilService.update(+id, updateTipomovimentocontabilDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a tipomovimentocontabil' })
  @ApiResponse({ status: 200, description: 'The tipomovimentocontabil has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.tipomovimentocontabilService.remove(+id);
  }
}
