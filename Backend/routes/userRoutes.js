const express = require('express');
const {GetUserInfo, UpdateUserInfo} = require('../controllers/userController');
const router = express.Router();
const {signup, login, protect} = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login);
router.route('/').get(protect, GetUserInfo).patch(protect, UpdateUserInfo);

module.exports =  router;
