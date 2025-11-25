const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const validateId = require('../middleware/validateObjectId');

router.get('/', controller.getAllUsers);
router.get('/:id', validateId, controller.getUserById);
router.post('/', controller.createUser);
router.put('/:id', validateId, controller.updateUser);
router.delete('/:id', validateId, controller.deleteUser);

module.exports = router;
