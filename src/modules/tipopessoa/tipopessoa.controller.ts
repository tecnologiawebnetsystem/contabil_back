import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipopessoaService } from './tipopessoa.service';
import { CreateTipopessoaDto } from './dto/create-tipopessoa.dto';
import { UpdateTipopessoaDto } from './dto/update-tipopessoa.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('tipopessoa')
@Controller('tipopessoa')
export class TipopessoaController {
  constructor(private readonly tipopessoaService: TipopessoaService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tipopessoa' })
  @ApiResponse({ status: 201, description: 'The tipopessoa has been successfully created.' })
  create(@Body() createTipopessoaDto: CreateTipopessoaDto) {
    return this.tipopessoaService.create(createTipopessoaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tipopessoa' })
  @ApiResponse({ status: 200, description: 'Return all tipopessoa.' })
  findAll() {
    return this.tipopessoaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a tipopessoa' })
  @ApiResponse({ status: 200, description: 'Return a tipopessoa.' })
  findOne(@Param('id') id: string) {
    return this.tipopessoaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a tipopessoa' })
  @ApiResponse({ status: 200, description: 'The tipopessoa has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateTipopessoaDto: UpdateTipopessoaDto) {
    return this.tipopessoaService.update(+id, updateTipopessoaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a tipopessoa' })
  @ApiResponse({ status: 200, description: 'The tipopessoa has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.tipopessoaService.remove(+id);
  }
}
