const express = require('express');
const router = express.Router();
const controller = require('../controllers/progressController');
const validateId = require('../middleware/validateObjectId');

/**
 * @swagger
 * tags:
 *   name: Progress
 *   description: Tracks user fitness progress
 */

/**
 * @swagger
 * /api/v1/progress:
 *   get:
 *     summary: Get all progress records
 *     tags: [Progress]
 *     responses:
 *       200:
 *         description: List of progress entries
 */
router.get('/', controller.getAllProgress);

/**
 * @swagger
 * /api/v1/progress:
 *   post:
 *     summary: Create progress entry
 *     tags: [Progress]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [date, value]
 *             properties:
 *               date:
 *                 type: string
 *               value:
 *                 type: number
 *     responses:
 *       201:
 *         description: Progress created
 */
router.post('/', controller.createProgress);

module.exports = router;
