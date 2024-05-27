import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { FruitsService, Fruit } from './fruits.service';

@Controller('fruits')
export class FruitsController {
    constructor(private readonly fruitsService: FruitsService) {}

    @Get()
    findAll(): Fruit[] {
        return this.fruitsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Fruit {
        return this.fruitsService.findOne(id);
    }

    @Post()
    create(@Body() fruit: Fruit) {
        this.fruitsService.create(fruit);
    }
}