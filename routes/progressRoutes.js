const express = require('express');
const router = express.Router();
const controller = require('../controllers/progressController');
const validateId = require('../middleware/validateObjectId');

router.get('/', controller.getAllProgress);
router.get('/:id', validateId, controller.getProgressById);
router.post('/', controller.createProgress);
router.put('/:id', validateId, controller.updateProgress);
router.delete('/:id', validateId, controller.deleteProgress);

module.exports = router;
