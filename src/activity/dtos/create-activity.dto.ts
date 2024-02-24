import { ActivityType } from '@prisma/client';
import { CoordinateDto } from './coordinate.dto';

export interface CreateActivityDto {
  number: number;
  type: ActivityType;
  coordinates: CoordinateDto;
}
