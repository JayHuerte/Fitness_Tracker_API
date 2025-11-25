const express = require('express');
const router = express.Router();
const controller = require('../controllers/exerciseController');
const validateId = require('../middleware/validateObjectId');

router.get('/', controller.getAllExercises);
router.get('/:id', validateId, controller.getExerciseById);
router.post('/', controller.createExercise);
router.put('/:id', validateId, controller.updateExercise);
router.delete('/:id', validateId, controller.deleteExercise);

module.exports = router;
