import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { FruitsService } from './fruits.service';

@Controller('fruits')
export class FruitsController {
  constructor(private readonly fruitsService: FruitsService) {}

  @Get()
  findAll() {
    return this.fruitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fruitsService.findOne(id);
  }

  @Post()
  create(
    @Body()
    createFruitDto: {
      id: string;
      name: string;
      description: string;
      benefits: string;
      drawbacks?: string;
    },
  ) {
    return this.fruitsService.create(createFruitDto);
  }
}
