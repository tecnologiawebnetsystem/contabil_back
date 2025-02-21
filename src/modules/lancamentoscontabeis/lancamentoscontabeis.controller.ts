import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LancamentoscontabeisService } from './lancamentoscontabeis.service';
import { CreateLancamentoscontabeisDto } from './dto/create-lancamentoscontabeis.dto';
import { UpdateLancamentoscontabeisDto } from './dto/update-lancamentoscontabeis.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('lancamentoscontabeis')
@Controller('lancamentoscontabeis')
export class LancamentoscontabeisController {
  constructor(private readonly lancamentoscontabeisService: LancamentoscontabeisService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new lancamentoscontabeis' })
  @ApiResponse({ status: 201, description: 'The lancamentoscontabeis has been successfully created.' })
  create(@Body() createLancamentoscontabeisDto: CreateLancamentoscontabeisDto) {
    return this.lancamentoscontabeisService.create(createLancamentoscontabeisDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all lancamentoscontabeis' })
  @ApiResponse({ status: 200, description: 'Return all lancamentoscontabeis.' })
  findAll() {
    return this.lancamentoscontabeisService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a lancamentoscontabeis' })
  @ApiResponse({ status: 200, description: 'Return a lancamentoscontabeis.' })
  findOne(@Param('id') id: string) {
    return this.lancamentoscontabeisService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a lancamentoscontabeis' })
  @ApiResponse({ status: 200, description: 'The lancamentoscontabeis has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateLancamentoscontabeisDto: UpdateLancamentoscontabeisDto) {
    return this.lancamentoscontabeisService.update(+id, updateLancamentoscontabeisDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a lancamentoscontabeis' })
  @ApiResponse({ status: 200, description: 'The lancamentoscontabeis has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.lancamentoscontabeisService.remove(+id);
  }
}
