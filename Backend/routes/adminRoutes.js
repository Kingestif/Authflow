const express = require('express');
const router = express.Router();
const {GetUser, GetAllUser, UpdateUser, DeleteUser, GetAdminInfo, UpdateAdminInfo} = require('../controllers/adminController');


// router.param('id', (req,res,next,val)=>{
//     console.log("Middleware called",val);
//     next();
// });

router.route('/').get(GetAdminInfo).patch(UpdateAdminInfo);
router.route('/users').get(GetAllUser);
router.route('/users/:id').get(GetUser).patch(UpdateUser).delete(DeleteUser);

module.exports = router;