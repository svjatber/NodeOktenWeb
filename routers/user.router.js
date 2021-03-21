const router = require('express').Router();
const userController = require('../contoller/user.contoller');
const userMiddleware = require('../middleware/user.middleware');

router.get('/', userController.getUsers);

router.post('/',  userMiddleware.checkIsIdValid, userController.createUser);

router.get('/:userId', userMiddleware.checkIsIdValid, userMiddleware.checkIsUserExists, userController.getUser);

router.delete('/:userId', userMiddleware.checkIsUserExists, userController.deleteUser);

module.exports = router;
