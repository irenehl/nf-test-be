import { CoordinateDto } from './coordinate.dto';
import { ActivityType } from '@prisma/client';

export interface UpdateActivityDto {
  number?: number;
  type?: ActivityType;
  coordinates?: Array<CoordinateDto>;
}
