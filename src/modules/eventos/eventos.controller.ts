import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { CreateEventosDto } from './dto/create-eventos.dto';
import { UpdateEventosDto } from './dto/update-eventos.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('eventos')
@Controller('eventos')
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new eventos' })
  @ApiResponse({ status: 201, description: 'The eventos has been successfully created.' })
  create(@Body() createEventosDto: CreateEventosDto) {
    return this.eventosService.create(createEventosDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all eventos' })
  @ApiResponse({ status: 200, description: 'Return all eventos.' })
  findAll() {
    return this.eventosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a eventos' })
  @ApiResponse({ status: 200, description: 'Return a eventos.' })
  findOne(@Param('id') id: string) {
    return this.eventosService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a eventos' })
  @ApiResponse({ status: 200, description: 'The eventos has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateEventosDto: UpdateEventosDto) {
    return this.eventosService.update(+id, updateEventosDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a eventos' })
  @ApiResponse({ status: 200, description: 'The eventos has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.eventosService.remove(+id);
  }
}
