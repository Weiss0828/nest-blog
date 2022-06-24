import { Controller, Get } from '@nestjs/common';
import { SwiperService } from './swiper.service';

@Controller('swiper')
export class SwiperController {
  constructor(private readonly swiperService: SwiperService) {}
  private findAll() {
    return this.swiperService.getPath();
  }

  @Get()
  async getAllImgPath() {
    return await this.findAll();
  }
}
