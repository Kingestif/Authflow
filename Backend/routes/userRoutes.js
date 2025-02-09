const express = require('express');
const {GetUserInfo, UpdateUserInfo} = require('../controllers/userController');
const router = express.Router();

router.route('/').get(GetUserInfo).patch(UpdateUserInfo);

module.exports =  router;
