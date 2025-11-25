const express = require('express');
const router = express.Router();
const controller = require('../controllers/workoutController');
const validateId = require('../middleware/validateObjectId');

router.get('/', controller.getAllWorkouts);
router.get('/:id', validateId, controller.getWorkoutById);
router.post('/', controller.createWorkout);
router.put('/:id', validateId, controller.updateWorkout);
router.delete('/:id', validateId, controller.deleteWorkout);

module.exports = router;
