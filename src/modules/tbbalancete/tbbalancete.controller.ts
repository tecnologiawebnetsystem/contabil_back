import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TbbalanceteService } from './tbbalancete.service';
import { CreateTbbalanceteDto } from './dto/create-tbbalancete.dto';
import { UpdateTbbalanceteDto } from './dto/update-tbbalancete.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('tbbalancete')
@Controller('tbbalancete')
export class TbbalanceteController {
  constructor(private readonly tbbalanceteService: TbbalanceteService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tbbalancete' })
  @ApiResponse({ status: 201, description: 'The tbbalancete has been successfully created.' })
  create(@Body() createTbbalanceteDto: CreateTbbalanceteDto) {
    return this.tbbalanceteService.create(createTbbalanceteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tbbalancete' })
  @ApiResponse({ status: 200, description: 'Return all tbbalancete.' })
  findAll() {
    return this.tbbalanceteService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a tbbalancete' })
  @ApiResponse({ status: 200, description: 'Return a tbbalancete.' })
  findOne(@Param('id') id: string) {
    return this.tbbalanceteService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a tbbalancete' })
  @ApiResponse({ status: 200, description: 'The tbbalancete has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateTbbalanceteDto: UpdateTbbalanceteDto) {
    return this.tbbalanceteService.update(+id, updateTbbalanceteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a tbbalancete' })
  @ApiResponse({ status: 200, description: 'The tbbalancete has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.tbbalanceteService.remove(+id);
  }
}
