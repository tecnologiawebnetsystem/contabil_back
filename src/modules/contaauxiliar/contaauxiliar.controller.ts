import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContaauxiliarService } from './contaauxiliar.service';
import { CreateContaauxiliarDto } from './dto/create-contaauxiliar.dto';
import { UpdateContaauxiliarDto } from './dto/update-contaauxiliar.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('contaauxiliar')
@Controller('contaauxiliar')
export class ContaauxiliarController {
  constructor(private readonly contaauxiliarService: ContaauxiliarService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new contaauxiliar' })
  @ApiResponse({ status: 201, description: 'The contaauxiliar has been successfully created.' })
  create(@Body() createContaauxiliarDto: CreateContaauxiliarDto) {
    return this.contaauxiliarService.create(createContaauxiliarDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all contaauxiliar' })
  @ApiResponse({ status: 200, description: 'Return all contaauxiliar.' })
  findAll() {
    return this.contaauxiliarService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a contaauxiliar' })
  @ApiResponse({ status: 200, description: 'Return a contaauxiliar.' })
  findOne(@Param('id') id: string) {
    return this.contaauxiliarService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a contaauxiliar' })
  @ApiResponse({ status: 200, description: 'The contaauxiliar has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateContaauxiliarDto: UpdateContaauxiliarDto) {
    return this.contaauxiliarService.update(+id, updateContaauxiliarDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a contaauxiliar' })
  @ApiResponse({ status: 200, description: 'The contaauxiliar has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.contaauxiliarService.remove(+id);
  }
}
