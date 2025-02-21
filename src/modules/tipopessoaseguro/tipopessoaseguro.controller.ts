import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipopessoaseguroService } from './tipopessoaseguro.service';
import { CreateTipopessoaseguroDto } from './dto/create-tipopessoaseguro.dto';
import { UpdateTipopessoaseguroDto } from './dto/update-tipopessoaseguro.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('tipopessoaseguro')
@Controller('tipopessoaseguro')
export class TipopessoaseguroController {
  constructor(private readonly tipopessoaseguroService: TipopessoaseguroService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tipopessoaseguro' })
  @ApiResponse({ status: 201, description: 'The tipopessoaseguro has been successfully created.' })
  create(@Body() createTipopessoaseguroDto: CreateTipopessoaseguroDto) {
    return this.tipopessoaseguroService.create(createTipopessoaseguroDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tipopessoaseguro' })
  @ApiResponse({ status: 200, description: 'Return all tipopessoaseguro.' })
  findAll() {
    return this.tipopessoaseguroService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a tipopessoaseguro' })
  @ApiResponse({ status: 200, description: 'Return a tipopessoaseguro.' })
  findOne(@Param('id') id: string) {
    return this.tipopessoaseguroService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a tipopessoaseguro' })
  @ApiResponse({ status: 200, description: 'The tipopessoaseguro has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateTipopessoaseguroDto: UpdateTipopessoaseguroDto) {
    return this.tipopessoaseguroService.update(+id, updateTipopessoaseguroDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a tipopessoaseguro' })
  @ApiResponse({ status: 200, description: 'The tipopessoaseguro has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.tipopessoaseguroService.remove(+id);
  }
}
