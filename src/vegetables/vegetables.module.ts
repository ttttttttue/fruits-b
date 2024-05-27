import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { VegetablesService } from './vegetables.service';
import { VegetablesController } from './vegetables.controller';
import { CorsMiddleware } from '../../cors.middleware';

@Module({
  controllers: [VegetablesController],
  providers: [VegetablesService],
})
export class VegetablesModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CorsMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
