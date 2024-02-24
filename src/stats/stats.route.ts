import { Router } from 'express';
import { StatsController } from './stats.controller';

const router = Router();
const statsController = new StatsController();

router.get('/', statsController.getTotal.bind(statsController));
router.get('/coordinates', statsController.getByCoordinates.bind(statsController));

export default router;
