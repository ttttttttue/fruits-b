import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { VegetablesService } from './vegetables.service';

@Controller('vegetables')
export class VegetablesController {
  constructor(private readonly vegService: VegetablesService) {}

  @Get()
  findAll() {
    return this.vegService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vegService.findOne(id);
  }

  @Post()
  create(
    @Body()
    createVegetablesDto: {
      id: string;
      name: string;
      description: string;
      benefits: string;
      drawbacks: string;
    },
  ) {
    return this.vegService.create(createVegetablesDto);
  }
}
