import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { CorsMiddleware } from 'cors.middleware';
import { FruitsService } from './fruits.service';
import { FruitsController } from './fruits.controller';

@Module({
  controllers: [FruitsController],
  providers: [FruitsService],
})
export class FruitsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CorsMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
