import { Module } from '@nestjs/common';
import { WeblogController } from './weblog.controller';
import { WeblogService } from './weblog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Weblog } from './entity/weblog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Weblog])],
  controllers: [WeblogController],
  providers: [WeblogService],
})
export class WeblogModule {}
