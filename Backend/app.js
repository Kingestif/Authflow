const express = require('express');
const app = express();


app.use((req,res,next)=>{
    req.requestTime = new Date().toISOString();
    next();
});

const GetUserInfo = ((req,res)=>{
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
});

const UpdateUserInfo = ((req,res)=>{
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
});

const GetUser = ((req,res)=>{
    try{
        res.status(200).json({
            status: "success",
            message: "User fetched successfully",
            data: {

            }
        });

    }catch(error){
        return res.status(404).json({
            status: "error",
            message: "User not found",
            data: {

            },
        });
    }

});

const GetAllUser = ((req,res)=>{
    try{
        res.status(200).json({
            status: "success",
            message: "Users fetched successfully",
            data: {
                
            },
        });
    }catch(error){
        return res.status(500).json({
            status: "error",
            message: "Failed to fetch users",
            data: {

            },
        });
    }
});

const UpdateUser = ((req,res)=>{
    try{
        res.status(200).json({
            status: "success",
            message: "User updated successfully",
            data: {
                
            },
        });
    }catch(error){
        return res.status(400).json({
            status: "error",
            message: "Failed to update user info",
            data: {

            },
        });
    }
});

const DeleteUser = ((req,res)=>{
    try{
        res.status(200).json({
            status: "success",
            message: "User deleted successfully",
            data: {
                
            },
        });
    }catch(error){
        return res.status(500).json({
            status: "error",
            message: "Failed to delete user",
            data: {

            },
        });
    }
});


const GetAdminInfo = ((req,res)=>{
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
});


const UpdateAdminInfo = ((req,res)=>{
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
});

app.get('/api/v1/users', GetUserInfo);
app.patch('/api/v1/users', UpdateUserInfo);

app.get('/api/v1/admin/users/:id', GetUser);
app.get('/api/v1/admin/users',GetAllUser);
app.patch('/api/v1/admin/users/:id', UpdateUser);
app.delete('/api/v1/admin/users/:id',DeleteUser);


app.get('/api/v1/admin', GetAdminInfo);
app.patch('/api/v1/admin', UpdateAdminInfo);


module.exports = app;