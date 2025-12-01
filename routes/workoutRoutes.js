const express = require('express');
const router = express.Router();
const controller = require('../controllers/workoutController');
const validateId = require('../middleware/validateObjectId');

/**
 * @swagger
 * tags:
 *   name: Workouts
 *   description: Workout routines and logs
 */

/**
 * @swagger
 * /api/v1/workouts:
 *   get:
 *     summary: Get all workouts
 *     tags: [Workouts]
 */
router.get('/', controller.getAllWorkouts);

/**
 * @swagger
 * /api/v1/workouts:
 *   post:
 *     summary: Create a workout
 *     tags: [Workouts]
 */
router.post('/', controller.createWorkout);

/**
 * @swagger
 * /api/v1/workouts/{id}:
 *   put:
 *     summary: Update a workout
 *     tags: [Workouts]
 */
router.put('/:id', validateId, controller.updateWorkout);

/**
 * @swagger
 * /api/v1/workouts/{id}:
 *   delete:
 *     summary: Delete a workout
 *     tags: [Workouts]
 */
router.delete('/:id', validateId, controller.deleteWorkout);

module.exports = router;
