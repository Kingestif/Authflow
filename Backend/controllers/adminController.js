const User = require('../models/users');

exports.GetUser = async(req,res)=>{
    try{
        const userinfo = await User.findById(req.params.id);
        if(!userinfo){
            return res.status(404).json({
                status: "error",
                Message: "User not found"
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
        const alluser = await User.find();
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
        const {role, ...updateData} = req.body;
        const updateUser = await User.findByIdAndUpdate(req.params.id, updateData, {
            new: true,
            runValidators: true
        });
        

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
                user: req.user
            },
        });
    }catch(error){
        return res.status(400).json({
            status: "error",
            message: "Failed to fetch admin info",
        });
    }
};


exports.UpdateAdminInfo = async(req,res)=>{
    try{
        const {role, ...updateData} = req.body;
        const updateUser = await User.findByIdAndUpdate(req.user._id, updateData, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: "success",
            message: "Admin information updated successfully",
            data: {
                user: updateUser
            },
        });
    }catch(error){
        return res.status(400).json({
            status: "error",
            message: "Failed to update admin",
        });
    }
};