import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoapoliceService } from './tipoapolice.service';
import { CreateTipoapoliceDto } from './dto/create-tipoapolice.dto';
import { UpdateTipoapoliceDto } from './dto/update-tipoapolice.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('tipoapolice')
@Controller('tipoapolice')
export class TipoapoliceController {
  constructor(private readonly tipoapoliceService: TipoapoliceService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tipoapolice' })
  @ApiResponse({ status: 201, description: 'The tipoapolice has been successfully created.' })
  create(@Body() createTipoapoliceDto: CreateTipoapoliceDto) {
    return this.tipoapoliceService.create(createTipoapoliceDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tipoapolice' })
  @ApiResponse({ status: 200, description: 'Return all tipoapolice.' })
  findAll() {
    return this.tipoapoliceService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a tipoapolice' })
  @ApiResponse({ status: 200, description: 'Return a tipoapolice.' })
  findOne(@Param('id') id: string) {
    return this.tipoapoliceService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a tipoapolice' })
  @ApiResponse({ status: 200, description: 'The tipoapolice has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateTipoapoliceDto: UpdateTipoapoliceDto) {
    return this.tipoapoliceService.update(+id, updateTipoapoliceDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a tipoapolice' })
  @ApiResponse({ status: 200, description: 'The tipoapolice has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.tipoapoliceService.remove(+id);
  }
}
