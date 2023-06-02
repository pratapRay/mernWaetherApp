require('dotenv').config();
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 5000
// data base connection
require('./db/conn')
const router = require('./router/auth');

app.use(cors());
app.use(cookieParser())
app.use(express.json());
// express router
app.use('/api',router);

// listening port
app.listen(PORT,()=>{
    console.log(`app is listening at port ${PORT}`)
})