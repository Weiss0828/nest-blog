import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { WeblogService } from './weblog.service';
import { WeblogDto } from './dto/weblog.dto';
import { Pagination } from './interface/pagination';

@Controller('weblog')
export class WeblogController {
  constructor(private readonly weblogService: WeblogService) {}

  @Post()
  createLog(@Body() weblog: WeblogDto) {
    return this.weblogService.create(weblog);
  }

  @Get()
  getWebLog(@Query() pagination?: Pagination) {
    return this.weblogService.findAll(pagination ? pagination : null);
  }

  @Get(':id')
  UpdateLikes(@Param('id', new ParseIntPipe()) id: number) {
    return this.weblogService.likesUp(id);
  }
}
