import { Module } from '@nestjs/common';
import { FruitsModule } from './fruits/fruits.module';
import { VegetablesModule } from './vegetables/vegetables.module';

@Module({
  imports: [FruitsModule, VegetablesModule],
})
export class AppModule {}
