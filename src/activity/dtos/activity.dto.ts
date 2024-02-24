import { CoordinateDto } from '@coordinate/dtos/coordinate.dto';
import { ActivityType } from '@prisma/client';

export interface ActivityDto {
  id: number;
  number: number;
  type: ActivityType;
  coordinates?: Array<CoordinateDto>;
  createdAt: Date;
}
