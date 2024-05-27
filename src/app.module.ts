import { Module } from '@nestjs/common';
import { FruitsModule } from './fruits/fruits.module';
import { VegetablesModule } from './vegetables/vegetables.module';
import { MiddlewareConsumer } from '@nestjs/common';
import * as cors from 'cors';

@Module({
  imports: [FruitsModule, VegetablesModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors()).forRoutes('*');
  }
}
