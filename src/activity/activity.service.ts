import { PrismaClient } from '@prisma/client';
import { ActivityDto } from './dtos/activity.dto';
import { CreateActivityDto } from './dtos/create-activity.dto';
import { UpdateActivityDto } from './dtos/update-activity.dto';
import { CoordinateDto } from '@coordinate/dtos/coordinate.dto';
import { HttpError } from '@common/http-error';

export class ActivityService {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: CreateActivityDto): Promise<ActivityDto> {
    return this.prisma.activity.create({
      data: {
        ...data,
        coordinates: {
          create: data.coordinates,
        },
      },
      include: {
        coordinates: true,
      },
    });
  }

  async findOne(id: number): Promise<ActivityDto> {
    return this.prisma.activity.findUniqueOrThrow({ where: { id }, include: { coordinates: true } }).catch(() => {
      throw new HttpError(404, 'Activity not found');
    });
  }

  async findAll(): Promise<ActivityDto[]> {
    return this.prisma.activity.findMany({ include: { coordinates: true } });
  }

  async update(data: UpdateActivityDto, id: number): Promise<ActivityDto> {
    await this.findOne(id);

    const coordinateUpdates = data.coordinates?.map((coordinate: CoordinateDto) => ({
      where: { id: coordinate.id },
      data: { ...coordinate },
    }));

    return this.prisma.activity.update({
      where: { id: id },
      data: {
        ...data,
        coordinates: {
          updateMany: coordinateUpdates,
        },
      },
      include: {
        coordinates: true,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await this.findOne(id);

    const coordinates = await this.prisma.coordinate.findMany({
      where: { activityId: id },
    });

    await Promise.all(coordinates.map((coordinate) => this.prisma.coordinate.delete({ where: { id: coordinate.id } })));

    await this.prisma.activity.delete({ where: { id: id } });

    return;
  }
}
