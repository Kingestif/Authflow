const User = require('../models/users');

exports.GetUser = async(req,res)=>{
    try{
        const userinfo = await User.findById(req.params.id).select('-password -passwordConfirm');
        if(!userinfo){
            return res.status(404).json({
                status: "error",
                data: {
                    Message: "User not found"
                },
            });
        }

        res.status(200).json({
            status: "success",
            message: "User fetched successfully",
            data: {
                user: userinfo
            }
        });

    }catch(error){
        return res.status(404).json({
            status: "error",
            message: "error occured while fetching the user",
        });
    }

};

exports.GetAllUser = async(req,res)=>{
    try{
        const alluser = await User.find().select('-password -passwordConfirm');
        res.status(200).json({
            status: "success",
            message: "Users fetched successfully",
            data: {
                user: alluser
            },
        });
    }catch(error){
        return res.status(500).json({
            status: "error",
            message: "Failed to fetch users",
        });
    }
};

exports.UpdateUser = async(req,res)=>{
    try{
        console.log("hellow estif", req.body);
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        }).select('-password -passwordConfirm');
        

        res.status(200).json({
            status: "success",
            message: "User updated successfully",
            data: {
                user: updateUser
            },
        });

    }catch(error){
        return res.status(400).json({
            status: "error",
            message: "Failed to update user info",
        });
    }
};

exports.DeleteUser = async(req,res)=>{
    try{
        const userdel = await User.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: "success",
            message: "User deleted successfully",
            data: {
                user: "Deleted User"
            },
        });
    }catch(error){
        return res.status(500).json({
            status: "error",
            message: "Failed to delete user",
        });
    }
};


exports.GetAdminInfo = (req,res)=>{
    try{
        res.status(200).json({
            status: "success",
            message: "Admin information fetched successfully",
            data: {
                
            },
        });
    }catch(error){
        return res.status(400).json({
            status: "error",
            message: "Failed to fetch admin info",
            data: {

            },
        });
    }
};


exports.UpdateAdminInfo = (req,res)=>{
    try{
        res.status(200).json({
            status: "success",
            message: "Admin information updated successfully",
            data: {
                
            },
        });
    }catch(error){
        return res.status(400).json({
            status: "error",
            message: "Failed to update admin",
            data: {

            },
        });
    }
};