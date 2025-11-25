const express = require('express');
const router = express.Router();
const controller = require('../controllers/exerciseController');
const validateId = require('../middleware/validateObjectId');

/**
 * @swagger
 * tags:
 *   name: Exercises
 *   description: Exercise management
 */

/**
 * @swagger
 * /api/v1/exercises:
 *   get:
 *     summary: Get all exercises
 *     tags: [Exercises]
 *     responses:
 *       200:
 *         description: List of all exercises
 */
router.get('/', controller.getAllExercises);

/**
 * @swagger
 * /api/v1/exercises/{id}:
 *   get:
 *     summary: Get a single exercise by ID
 *     tags: [Exercises]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Exercise ID
 *     responses:
 *       200:
 *         description: Exercise data
 *       404:
 *         description: Exercise not found
 */
router.get('/:id', validateId, controller.getExerciseById);

/**
 * @swagger
 * /api/v1/exercises:
 *   post:
 *     summary: Create a new exercise
 *     tags: [Exercises]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - category
 *             properties:
 *               name:
 *                 type: string
 *               category:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Exercise created successfully
 */
router.post('/', controller.createExercise);

/**
 * @swagger
 * /api/v1/exercises/{id}:
 *   put:
 *     summary: Update an exercise by ID
 *     tags: [Exercises]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               category:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Exercise updated successfully
 *       404:
 *         description: Exercise not found
 */
router.put('/:id', validateId, controller.updateExercise);

/**
 * @swagger
 * /api/v1/exercises/{id}:
 *   delete:
 *     summary: Delete an exercise by ID
 *     tags: [Exercises]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Exercise deleted successfully
 *       404:
 *         description: Exercise not found
 */
router.delete('/:id', validateId, controller.deleteExercise);

module.exports = router;
