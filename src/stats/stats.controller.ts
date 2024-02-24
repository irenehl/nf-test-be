import { StatsService } from './stats.service';
import { Request, Response } from 'express';

export class StatsController {
  private readonly statsService: StatsService;

  constructor() {
    this.statsService = new StatsService();
  }

  async getTotal(req: Request, res: Response) {
    return res.status(200).json(await this.statsService.getTotal());
  }

  async getByCoordinates(req: Request, res: Response) {
    const startDate = req.query.startDate as unknown as Date;
    const endDate = req.query.endDate as unknown as Date;
    return res.status(200).json(await this.statsService.getByCoordinates(startDate, endDate));
  }
}
