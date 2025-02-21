import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipomovimentofipService } from './tipomovimentofip.service';
import { CreateTipomovimentofipDto } from './dto/create-tipomovimentofip.dto';
import { UpdateTipomovimentofipDto } from './dto/update-tipomovimentofip.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('tipomovimentofip')
@Controller('tipomovimentofip')
export class TipomovimentofipController {
  constructor(private readonly tipomovimentofipService: TipomovimentofipService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tipomovimentofip' })
  @ApiResponse({ status: 201, description: 'The tipomovimentofip has been successfully created.' })
  create(@Body() createTipomovimentofipDto: CreateTipomovimentofipDto) {
    return this.tipomovimentofipService.create(createTipomovimentofipDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tipomovimentofip' })
  @ApiResponse({ status: 200, description: 'Return all tipomovimentofip.' })
  findAll() {
    return this.tipomovimentofipService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a tipomovimentofip' })
  @ApiResponse({ status: 200, description: 'Return a tipomovimentofip.' })
  findOne(@Param('id') id: string) {
    return this.tipomovimentofipService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a tipomovimentofip' })
  @ApiResponse({ status: 200, description: 'The tipomovimentofip has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateTipomovimentofipDto: UpdateTipomovimentofipDto) {
    return this.tipomovimentofipService.update(+id, updateTipomovimentofipDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a tipomovimentofip' })
  @ApiResponse({ status: 200, description: 'The tipomovimentofip has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.tipomovimentofipService.remove(+id);
  }
}
