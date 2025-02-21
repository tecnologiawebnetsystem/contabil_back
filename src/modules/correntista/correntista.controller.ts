import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CorrentistaService } from './correntista.service';
import { CreateCorrentistaDto } from './dto/create-correntista.dto';
import { UpdateCorrentistaDto } from './dto/update-correntista.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('correntista')
@Controller('correntista')
export class CorrentistaController {
  constructor(private readonly correntistaService: CorrentistaService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new correntista' })
  @ApiResponse({ status: 201, description: 'The correntista has been successfully created.' })
  create(@Body() createCorrentistaDto: CreateCorrentistaDto) {
    return this.correntistaService.create(createCorrentistaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all correntista' })
  @ApiResponse({ status: 200, description: 'Return all correntista.' })
  findAll() {
    return this.correntistaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a correntista' })
  @ApiResponse({ status: 200, description: 'Return a correntista.' })
  findOne(@Param('id') id: string) {
    return this.correntistaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a correntista' })
  @ApiResponse({ status: 200, description: 'The correntista has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateCorrentistaDto: UpdateCorrentistaDto) {
    return this.correntistaService.update(+id, updateCorrentistaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a correntista' })
  @ApiResponse({ status: 200, description: 'The correntista has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.correntistaService.remove(+id);
  }
}
