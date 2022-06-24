import { IsString } from 'class-validator';

export class WeblogDto {
  @IsString()
  title: string;
  @IsString()
  content: string;
}
