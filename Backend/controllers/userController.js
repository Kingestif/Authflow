const User = require('../models/users');

exports.GetUserInfo = (req,res)=>{
    try{
        res.status(200).json({
            status: "success",
            message: "User information fetched successfully",
            data: {
            },
        });
    }catch(error){
        return res.status(400).json({
            status: "error",
            message: "Failed to fetch user info",
            data: {

            },
        });
    }
};

exports.UpdateUserInfo = (req,res)=>{
    try{
        res.status(200).json({
            status: "success",
            message: "User Information Updated Successfully",
            data: {
    
            }
        });
    }catch(error){
        return res.status(400).json({
            status: "error",
            message: "Failed to update user info",
            data: {

            }

        });
    }
};

