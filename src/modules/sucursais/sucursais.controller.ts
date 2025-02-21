import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SucursaisService } from './sucursais.service';
import { CreateSucursaisDto } from './dto/create-sucursais.dto';
import { UpdateSucursaisDto } from './dto/update-sucursais.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('sucursais')
@Controller('sucursais')
export class SucursaisController {
  constructor(private readonly sucursaisService: SucursaisService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new sucursais' })
  @ApiResponse({ status: 201, description: 'The sucursais has been successfully created.' })
  create(@Body() createSucursaisDto: CreateSucursaisDto) {
    return this.sucursaisService.create(createSucursaisDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all sucursais' })
  @ApiResponse({ status: 200, description: 'Return all sucursais.' })
  findAll() {
    return this.sucursaisService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a sucursais' })
  @ApiResponse({ status: 200, description: 'Return a sucursais.' })
  findOne(@Param('id') id: string) {
    return this.sucursaisService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a sucursais' })
  @ApiResponse({ status: 200, description: 'The sucursais has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateSucursaisDto: UpdateSucursaisDto) {
    return this.sucursaisService.update(+id, updateSucursaisDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a sucursais' })
  @ApiResponse({ status: 200, description: 'The sucursais has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.sucursaisService.remove(+id);
  }
}
