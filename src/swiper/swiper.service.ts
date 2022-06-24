import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Swiper } from './entity/swiper-entity';
import { Repository } from 'typeorm';

@Injectable()
export class SwiperService {
  constructor(
    @InjectRepository(Swiper) private readonly swRepo: Repository<Swiper>,
  ) {}
  getPath() {
    return this.swRepo.find();
  }
}
