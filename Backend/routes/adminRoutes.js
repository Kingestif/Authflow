const express = require('express');
const router = express.Router();
const {GetUser, GetAllUser, UpdateUser, DeleteUser, GetAdminInfo, UpdateAdminInfo} = require('../controllers/adminController');
const {protect, restrictTo} = require('../controllers/authController');

router.route('/').get(protect, GetAdminInfo).patch(protect, UpdateAdminInfo);
router.route('/users').get(protect, restrictTo, GetAllUser);
router.route('/users/:id').get(protect, restrictTo, GetUser).patch(protect, restrictTo, UpdateUser).delete(protect, restrictTo, DeleteUser);

module.exports = router;