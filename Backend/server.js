const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
const User = require('./models/users');

dotenv.config({path: '.env'});

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log('mongoose connected');
}).catch((err)=>{
    console.log('Database connection error', err);
});


const port = 3000;
app.listen(port, ()=>{
    console.log(`Server started running on port ${port}`);
});


// const testUser = new User({
//     name: "user2",
//     email: "yes2@of",
//     phoneNumber: "12"
// });


// testUser.save().then(doc => {
//     console.log(doc);

// }).catch(err =>{
//     console.log("NOPEEE", err);
// });
 