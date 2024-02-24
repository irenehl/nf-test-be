import activityRoute from '@activity/activity.route';
import { Router } from 'express';

const router = Router();

router.use('/activity', activityRoute);

export default router;
