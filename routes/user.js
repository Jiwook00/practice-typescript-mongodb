const express = require('express');
const router = express.Router();

const { userController } = require('../controller');

router.post('/signup', userController.signup.post);
router.get('/get', userController.get.get)


module.exports = router;