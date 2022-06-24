import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Weblog } from './entity/weblog.entity';
import { Repository } from 'typeorm';
import { WeblogDto } from './dto/weblog.dto';
import { IRespones } from './interface/IRespones';
import { Pagination } from './interface/pagination';
@Injectable()
export class WeblogService {
  iRespones: IRespones;
  //分页的参数保存起来在分页后点赞需要用到
  pagination: Pagination;
  constructor(
    @InjectRepository(Weblog) private readonly weblogRepo: Repository<Weblog>,
  ) {}
  //创建一条博客
  async create(webLog: WeblogDto) {
    let result = await this.weblogRepo.create(webLog);
    result.createDate = new Date();
    result.updateDate = new Date();
    result = await this.weblogRepo.save(result);
    if (result) {
      return (this.iRespones = {
        msg: '创建成功',
        weblogdata: result,
        total: 1,
      });
    } else {
      throw new Error('创建失败');
    }
  }

  async findAll(pagination?: Pagination) {
    //保存查询的结果
    let result = [];
    //判断是否需要分页为true就是要分页，反之
    if (pagination !== undefined && 'limit' in pagination) {
      this.pagination = pagination;
      const { limit, offset } = pagination;
      const skip = (offset - 1) * limit;
      result = await this.weblogRepo.find({
        take: limit,
        skip,
      });
    } else {
      result = await this.weblogRepo.find();
    }
    return (this.iRespones = {
      msg: '获取成功',
      weblogdata: result,
      total: result.length,
    });
  }

  async likesUp(id: number) {
    const result = await this.weblogRepo.findOne({
      where: { id },
    });
    result.likes++;
    await this.weblogRepo.save(result);
    return this.findAll(this.pagination);
  }
}
