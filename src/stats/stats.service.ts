import { PrismaClient } from '@prisma/client';

export class StatsService {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getByCoordinates(startDate: Date, endDate: Date) {
    const whereClause: any = {};

    if (startDate && endDate) {
      whereClause.createdAt = {
        gte: new Date(startDate),
        lte: new Date(endDate),
      };
    } else if (startDate) {
      whereClause.createdAt = {
        gte: new Date(startDate),
      };
    } else if (endDate) {
      whereClause.createdAt = {
        lte: new Date(endDate),
      };
    }

    const activities = await this.prisma.activity.findMany({
      where: whereClause,
      include: {
        coordinates: true,
      },
    });

    const result = activities.map((activity) => ({
      id: activity.id,
      type: activity.type,
      coordinates: activity.coordinates.length,
    }));

    return result;
  }

  async getTotal() {
    const soilTotal = await this.prisma.activity.count({ where: { type: 'SOIL' } });
    const fertilizationTotal = await this.prisma.activity.count({ where: { type: 'FERTILIZATION' } });

    return { soilTotal, fertilizationTotal };
  }
}
