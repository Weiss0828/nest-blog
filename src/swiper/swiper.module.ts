import { Module } from '@nestjs/common';
import { SwiperController } from './swiper.controller';
import { SwiperService } from './swiper.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Swiper } from './entity/swiper-entity';

@Module({
  imports: [TypeOrmModule.forFeature([Swiper])],
  controllers: [SwiperController],
  providers: [SwiperService],
})
export class SwiperModule {}
