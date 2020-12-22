const User = require('../models/user');
const jwt = require('jsonwebtoken');
exports.requireSignin = (req,res,next) =>{

    if(req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, process.env.JWT_SECRATE);
        req.user = user;
      
        next();
    }
    return res.status(400).json({message:'Invalid token'})

  
}

exports.requireSignin = (req,res,next) =>{
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRATE);
    req.user = user;
    console.log(token);
    next();
}

exports.userMiddlewares = (req,res,next) =>{

}
exports.adminMiddlewares = (req,res,next) =>{
    if(req.user.role !== 'admin'){
        return res.status(400).json({message:'Access Denied'})
    }
    next();
}