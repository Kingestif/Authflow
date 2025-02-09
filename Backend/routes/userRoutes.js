const express = require('express');
const {GetUserInfo, UpdateUserInfo} = require('../controllers/userController');
const router = express.Router();
const {signup} = require('../controllers/authController');

router.post('/signup', signup);
router.route('/').get(GetUserInfo).patch(UpdateUserInfo);

module.exports =  router;
