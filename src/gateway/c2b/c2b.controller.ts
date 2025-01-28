import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { C2bService } from './c2b.service';
import { PushRequestDto } from './dto/push-request.dto';

@Controller('c2b')
export class C2bController {
  constructor(private readonly c2bService: C2bService) {}

  @Post()
  create(@Body() createC2bDto: PushRequestDto) {
    return this.c2bService.create(createC2bDto);
  }

  @Get()
  findAll() {
    return this.c2bService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.c2bService.findOne(+id);
  }

}
