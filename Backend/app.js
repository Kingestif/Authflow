const express = require('express');
const app = express();
const morgan = require('morgan');
const userRouter = require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes');

app.use(morgan('dev'));

app.use((req,res,next)=>{
    req.requestTime = new Date().toISOString();
    next();
});

app.use(express.json());    //json parsor 


app.use('/api/v1/users', userRouter);
app.use('/api/v1/admin', adminRouter);

module.exports = app;