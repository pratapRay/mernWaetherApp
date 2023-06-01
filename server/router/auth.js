const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../model/userSchema')
const authenticate = require('../middleware/authenticate')


// registration
router.post('/register', async(req,res)=>{
   try {
    const { name , email,  work, phone, password, cpassword } = req.body;

    if(!name || !email || !work, !phone, !password, !cpassword ){
        return res.status(422).json({error:'please fill the filled properly'})
    }
    const userExits = await User.findOne({email:email})

    if(userExits){
        return res.status(422).json({error:'Email , all ready exits'})
    }else if(password !== cpassword){
        return res.status(422).json({error:'password are not matching'})
    }else{
        const user = User({name, email, work, phone, password, cpassword})
        // password hashing pending
        const userRegister = await user.save();

        if(userRegister){
            res.status(201).json({message:"user register successfully"});
            console.log(userRegister)
        }else{
            res.status(400).json({error:" failed to register"})
        }
        
    }
   } catch (error) {
    console.log(error)
   }
})

// login
router.post('/login', async(req,res)=>{
 try {

    const {email, password} = req.body

    if(!email || !password){
        return res.status(400).json({error:"fill the filled properly"})
    }

    const userLogin = await User.findOne({email:email})
    // jwt token
    const token = await userLogin.generateAuthToken();
    console.log(token)

    // cookies
    res.cookie('jwtoken',token,{
        expires: new Date(Date.now() + 25892000000),
        httpOnly:true
    })

    if(userLogin){
        const isMatch = await bcrypt.compare(password,userLogin.password)
        if(isMatch){
            res.status(201).json({message:'Login Successfull'})
        }
        else{
            res.status(400).json({error:"Invalid credentials"})
        }
    }else{
        res.status(400).json({error:"Invalid credentials"})
    }
    
 } catch (error) {
    console.log(error)
 }
})

// profile page
router.get('/getData', authenticate, (req,res)=>{
    console.log('this is profile page');
    res.send(req.rootUser)
})
// logout page
router.get('/logout', (req,res)=>{
    console.log('this is logout page');
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send('User Logout')
})


module.exports = router;