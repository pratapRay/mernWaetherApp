const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL).then(()=>{
    console.log('connection is successfull')
}).catch((err)=>{
    console.log(err)
})