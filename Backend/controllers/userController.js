const User = require('../models/users');

exports.GetUserInfo = (req,res)=>{
    try{
        res.status(200).json({
            status: "success",
            message: "User information fetched successfully",
            data: {
                user: req.user      //recieved from "protect middleware header"
            },
        });
    }catch(error){
        return res.status(401).json({
            status: "error",
            message: "Failed to fetch user info",
        });
    }
};

exports.UpdateUserInfo = async(req,res)=>{
    try{
        const {role, ...updateData} = req.body

        const updateUser = await User.findByIdAndUpdate(req.user._id, updateData, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: "success",
            message: "User Information Updated Successfully",
            data: {
                user: updateUser
            }
        });
    }catch(error){
        return res.status(400).json({
            status: "error",
            message: "Failed to update user info"
        });
    }
};

