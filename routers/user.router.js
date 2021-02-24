const router = require('express').Router();
const userController = require('../contoller/user.contoller');
const userMiddleware = require('../middleware/user.middleware');

router.get('/', userController.getUsers);

router.post('/', userMiddleware.isUserNameValid, userMiddleware.isPasswordValid, userController.createUser);

router.get('/:userId', userMiddleware.isIdValid, userController.getUser);

router.delete('/:userId', userMiddleware.isIdValid, userController.deleteUser);

module.exports = router;
