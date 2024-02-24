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

  async getByCarbonNumber(startDate: Date, endDate: Date) {
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
    });

    return activities;
  }

  async getTotal(startDate?: Date, endDate?: Date) {
    let whereConditions: { type: 'SOIL' | 'FERTILIZATION'; createdAt?: { gte?: Date; lte?: Date } }[] = [
      { type: 'SOIL' },
      { type: 'FERTILIZATION' },
    ];

    if (startDate && endDate) {
      whereConditions = whereConditions.map((condition) => ({
        ...condition,
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
      }));
    }

    const totals = await Promise.all(
      whereConditions.map((condition) =>
        this.prisma.activity.count({
          where: condition,
        }),
      ),
    );

    const [soilTotal, fertilizationTotal] = totals;

    return { soilTotal, fertilizationTotal };
  }
}
