import { IsNumber, IsOptional } from 'class-validator';

export class Pagination {
  @IsOptional()
  @IsNumber()
  limit: number;
  @IsOptional()
  @IsNumber()
  offset: number;
}
