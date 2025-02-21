import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipopagamentoService } from './tipopagamento.service';
import { CreateTipopagamentoDto } from './dto/create-tipopagamento.dto';
import { UpdateTipopagamentoDto } from './dto/update-tipopagamento.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('tipopagamento')
@Controller('tipopagamento')
export class TipopagamentoController {
  constructor(private readonly tipopagamentoService: TipopagamentoService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tipopagamento' })
  @ApiResponse({ status: 201, description: 'The tipopagamento has been successfully created.' })
  create(@Body() createTipopagamentoDto: CreateTipopagamentoDto) {
    return this.tipopagamentoService.create(createTipopagamentoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tipopagamento' })
  @ApiResponse({ status: 200, description: 'Return all tipopagamento.' })
  findAll() {
    return this.tipopagamentoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a tipopagamento' })
  @ApiResponse({ status: 200, description: 'Return a tipopagamento.' })
  findOne(@Param('id') id: string) {
    return this.tipopagamentoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a tipopagamento' })
  @ApiResponse({ status: 200, description: 'The tipopagamento has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateTipopagamentoDto: UpdateTipopagamentoDto) {
    return this.tipopagamentoService.update(+id, updateTipopagamentoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a tipopagamento' })
  @ApiResponse({ status: 200, description: 'The tipopagamento has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.tipopagamentoService.remove(+id);
  }
}
