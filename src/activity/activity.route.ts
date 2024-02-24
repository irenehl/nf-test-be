import { Router } from 'express';
import { ActivityController } from './activity.controller';

const router = Router();
const activityController = new ActivityController();

router.post('/', activityController.create.bind(activityController));

router.get('/', activityController.findAll.bind(activityController));
router.get('/:id', activityController.findOne.bind(activityController));

router.patch('/:id', activityController.update.bind(activityController));

router.delete('/:id', activityController.delete.bind(activityController));

export default router;
