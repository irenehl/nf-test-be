import { ActivityType } from '@prisma/client';
import { CoordinateDto } from './coordinate.dto';

export interface ActivityDto {
  id: number;
  number: number;
  type: ActivityType;
  coordinates?: Array<CoordinateDto>;
  createdAt: Date;
}
