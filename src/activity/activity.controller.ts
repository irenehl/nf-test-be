import { ActivityService } from './activity.service';
import { Request, Response } from 'express';

export class ActivityController {
  private readonly activityService: ActivityService;

  constructor() {
    this.activityService = new ActivityService();
  }

  async create(req: Request, res: Response) {
    return res.status(201).json(await this.activityService.create(req.body));
  }

  async findOne(req: Request, res: Response) {
    return res.status(200).json(await this.activityService.findOne(Number(req.params.id)));
  }

  async findAll(req: Request, res: Response) {
    return res.status(200).json(await this.activityService.findAll());
  }

  async update(req: Request, res: Response) {
    return res.status(200).json(await this.activityService.update(req.body, Number(req.params.id)));
  }

  async delete(req: Request, res: Response) {
    return res.status(200).json(await this.activityService.delete(Number(req.params.id)));
  }
}
