const express = require('express');
const router = express.Router();
const controller = require('../controllers/goalController');
const validateId = require('../middleware/validateObjectId');

/**
 * @swagger
 * tags:
 *   name: Goals
 *   description: User fitness goals
 */

/**
 * @swagger
 * /api/v1/goals:
 *   get:
 *     summary: Get all goals
 *     tags: [Goals]
 *     responses:
 *       200:
 *         description: List of goals
 */
router.get('/', controller.getAllGoals);

/**
 * @swagger
 * /api/v1/goals/{id}:
 *   get:
 *     summary: Get a goal by ID
 *     tags: [Goals]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Goal data
 *       404:
 *         description: Goal not found
 */
router.get('/:id', validateId, controller.getGoalById);

/**
 * @swagger
 * /api/v1/goals:
 *   post:
 *     summary: Create a new goal
 *     tags: [Goals]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, targetValue]
 *             properties:
 *               title:
 *                 type: string
 *               targetValue:
 *                 type: number
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Goal created successfully
 */
router.post('/', controller.createGoal);

/**
 * @swagger
 * /api/v1/goals/{id}:
 *   put:
 *     summary: Update a goal
 *     tags: [Goals]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Goal updated successfully
 */
router.put('/:id', validateId, controller.updateGoal);

/**
 * @swagger
 * /api/v1/goals/{id}:
 *   delete:
 *     summary: Delete a goal
 *     tags: [Goals]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Goal deleted successfully
 */
router.delete('/:id', validateId, controller.deleteGoal);

module.exports = router;
