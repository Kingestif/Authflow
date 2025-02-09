const User = require('../models/users');

exports.signup = async(req,res,next)=>{
    try{
        const newuser = await User.create(req.body);
        const userWithoutPassword = await User.findById(newuser._id).select('-password -passwordConfirm');

        res.status(200).json({
            status: "success",
            message: "User Created successfully",
            data: {
                user: userWithoutPassword
            },
        });
    }catch(error){
        return res.status(400).json({
            status: "error",
            message: error.message || "Failed to create user",
        });
    }
}