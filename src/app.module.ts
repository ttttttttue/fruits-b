import { Module } from '@nestjs/common';
import { FruitsModule } from './fruits/fruits.module';

@Module({
  imports: [FruitsModule],
})
export class AppModule {}