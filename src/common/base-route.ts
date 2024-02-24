import activityRoute from '@activity/activity.route';
import statsRoute from '@stats/stats.route';
import { Router } from 'express';

const router = Router();

router.use('/activity', activityRoute);
router.use('/stats', statsRoute);

export default router;
