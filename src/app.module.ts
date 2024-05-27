import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { FruitsModule } from './fruits/fruits.module';
import { VegetablesModule } from './vegetables/vegetables.module';
import { CorsMiddleware } from '../cors.middleware';

@Module({
  imports: [FruitsModule, VegetablesModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CorsMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
