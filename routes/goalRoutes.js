const express = require('express');
const router = express.Router();
const controller = require('../controllers/goalController');
const validateId = require('../middleware/validateObjectId');

router.get('/', controller.getAllGoals);
router.get('/:id', validateId, controller.getGoalById);
router.post('/', controller.createGoal);
router.put('/:id', validateId, controller.updateGoal);
router.delete('/:id', validateId, controller.deleteGoal);

module.exports = router;
