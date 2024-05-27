import { Module } from '@nestjs/common';
import { VegetablesService, Vegetables } from './vegetables.service';
import { VegetablesController } from './vegetables.controller';

@Module({
  controllers: [VegetablesController],
  providers: [VegetablesService],
})
export class VegetablesModule {}
