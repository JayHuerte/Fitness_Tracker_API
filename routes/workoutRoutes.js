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
 *     responses:
 *       200:
 *         description: List of workouts
 */
router.get('/', controller.getAllWorkouts);

/**
 * @swagger
 * /api/v1/workouts:
 *   post:
 *     summary: Create a workout
 *     tags: [Workouts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [user, type]
 *             properties:
 *               user:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *               type:
 *                 type: string
 *               duration:
 *                 type: number
 *               notes:
 *                 type: string
 *     responses:
 *       201:
 *         description: Workout created
 */
router.post('/', controller.createWorkout);

/**
 * @swagger
 * /api/v1/workouts/{id}:
 *   put:
 *     summary: Update a workout
 *     tags: [Workouts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Workout ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *               date:
 *                 type: string
 *               type:
 *                 type: string
 *               duration:
 *                 type: number
 *               notes:
 *                 type: string
 *     responses:
 *       200:
 *         description: Workout updated
 *       404:
 *         description: Workout not found
 */
router.put('/:id', validateId, controller.updateWorkout);

/**
 * @swagger
 * /api/v1/workouts/{id}:
 *   delete:
 *     summary: Delete a workout
 *     tags: [Workouts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Workout ID
 *     responses:
 *       200:
 *         description: Workout deleted
 *       404:
 *         description: Workout not found
 */
router.delete('/:id', validateId, controller.deleteWorkout);


module.exports = router;
