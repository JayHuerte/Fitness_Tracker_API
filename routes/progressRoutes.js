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
 * /api/v1/progress/{id}:
 *   get:
 *     summary: Get a progress record by ID
 *     tags: [Progress]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Progress record
 *       404:
 *         description: Not found
 */
router.get('/:id', validateId, controller.getProgressById);

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

/**
 * @swagger
 * /api/v1/progress/{id}:
 *   put:
 *     summary: Update progress entry
 *     tags: [Progress]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.put('/:id', validateId, controller.updateProgress);

/**
 * @swagger
 * /api/v1/progress/{id}:
 *   delete:
 *     summary: Delete progress entry
 *     tags: [Progress]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           required: true
 */
router.delete('/:id', validateId, controller.deleteProgress);

module.exports = router;
