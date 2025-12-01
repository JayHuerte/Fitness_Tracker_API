const express = require('express');
const router = express.Router();
const controller = require('../controllers/progressController');
const validateId = require('../middleware/validateObjectId');

/**
 * @swagger
 * components:
 *   schemas:
 *     Progress:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         user:
 *           type: string
 *         date:
 *           type: string
 *         weight:
 *           type: number
 *         bodyFat:
 *           type: number
 *         notes:
 *           type: string
 *         createdAt:
 *           type: string
 *         updatedAt:
 *           type: string
 *
 *     ProgressInput:
 *       type: object
 *       properties:
 *         date:
 *           type: string
 *         weight:
 *           type: number
 *         bodyFat:
 *           type: number
 *         notes:
 *           type: string
 *       required: []
 *
 *     ProgressCreate:
 *       type: object
 *       required: [date]
 *       properties:
 *         date:
 *           type: string
 *         weight:
 *           type: number
 *         bodyFat:
 *           type: number
 *         notes:
 *           type: string
 */

/**
 * @swagger
 * tags:
 *   name: Progress
 *   description: Tracks user fitness progress
 */

/**
 * @swagger
 * /api/v1/progress/{userId}:
 *   get:
 *     summary: Retrieve a user's fitness progress
 *     tags: [Progress]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of progress entries for the user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Progress'
 */
router.get('/:userId', validateId, controller.getUserProgress);

/**
 * @swagger
 * /api/v1/progress/{userId}:
 *   post:
 *     summary: Add a new progress record for a user
 *     tags: [Progress]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProgressCreate'
 *     responses:
 *       201:
 *         description: Progress record added
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Progress'
 */
router.post('/:userId', validateId, controller.createProgress);

module.exports = router;
