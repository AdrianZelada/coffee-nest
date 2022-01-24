import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';
import { CreateCoffeeDto } from './create-coffee.dto';
/* PaginationQueryDto */
export class PaginationQueryDto {
  @Type(() => Number)
  @IsOptional()
  @IsPositive()
  limit: number;

  @Type(() => Number)
  @IsOptional()
  @IsPositive()
  offset: number;
}
