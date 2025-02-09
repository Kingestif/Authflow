const express = require('express');
const {GetUserInfo, UpdateUserInfo} = require('../controllers/userController');
const router = express.Router();
const {signup, login} = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login);
router.route('/').get(GetUserInfo).patch(UpdateUserInfo);

module.exports =  router;
