import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabuabiometricaService } from './tabuabiometrica.service';
import { CreateTabuabiometricaDto } from './dto/create-tabuabiometrica.dto';
import { UpdateTabuabiometricaDto } from './dto/update-tabuabiometrica.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('tabuabiometrica')
@Controller('tabuabiometrica')
export class TabuabiometricaController {
  constructor(private readonly tabuabiometricaService: TabuabiometricaService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tabuabiometrica' })
  @ApiResponse({ status: 201, description: 'The tabuabiometrica has been successfully created.' })
  create(@Body() createTabuabiometricaDto: CreateTabuabiometricaDto) {
    return this.tabuabiometricaService.create(createTabuabiometricaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tabuabiometrica' })
  @ApiResponse({ status: 200, description: 'Return all tabuabiometrica.' })
  findAll() {
    return this.tabuabiometricaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a tabuabiometrica' })
  @ApiResponse({ status: 200, description: 'Return a tabuabiometrica.' })
  findOne(@Param('id') id: string) {
    return this.tabuabiometricaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a tabuabiometrica' })
  @ApiResponse({ status: 200, description: 'The tabuabiometrica has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateTabuabiometricaDto: UpdateTabuabiometricaDto) {
    return this.tabuabiometricaService.update(+id, updateTabuabiometricaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a tabuabiometrica' })
  @ApiResponse({ status: 200, description: 'The tabuabiometrica has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.tabuabiometricaService.remove(+id);
  }
}
