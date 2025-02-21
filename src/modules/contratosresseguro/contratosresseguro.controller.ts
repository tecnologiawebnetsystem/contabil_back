import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContratosresseguroService } from './contratosresseguro.service';
import { CreateContratosresseguroDto } from './dto/create-contratosresseguro.dto';
import { UpdateContratosresseguroDto } from './dto/update-contratosresseguro.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('contratosresseguro')
@Controller('contratosresseguro')
export class ContratosresseguroController {
  constructor(private readonly contratosresseguroService: ContratosresseguroService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new contratosresseguro' })
  @ApiResponse({ status: 201, description: 'The contratosresseguro has been successfully created.' })
  create(@Body() createContratosresseguroDto: CreateContratosresseguroDto) {
    return this.contratosresseguroService.create(createContratosresseguroDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all contratosresseguro' })
  @ApiResponse({ status: 200, description: 'Return all contratosresseguro.' })
  findAll() {
    return this.contratosresseguroService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a contratosresseguro' })
  @ApiResponse({ status: 200, description: 'Return a contratosresseguro.' })
  findOne(@Param('id') id: string) {
    return this.contratosresseguroService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a contratosresseguro' })
  @ApiResponse({ status: 200, description: 'The contratosresseguro has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateContratosresseguroDto: UpdateContratosresseguroDto) {
    return this.contratosresseguroService.update(+id, updateContratosresseguroDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a contratosresseguro' })
  @ApiResponse({ status: 200, description: 'The contratosresseguro has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.contratosresseguroService.remove(+id);
  }
}
