import { CoordinateDto } from '@coordinate/dtos/coordinate.dto';
import { ActivityType } from '@prisma/client';

export interface CreateActivityDto {
  number: number;
  type: ActivityType;
  coordinates: CoordinateDto;
}
