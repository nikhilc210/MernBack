const { check, validationResult } = require('express-validator');



exports.validateSignupRequest = [
    check('firstname')
   .notEmpty()
   .withMessage('Firstname is required parameter'),
check('lastname').notEmpty().withMessage('Lastname is required parameter'), check('email').isEmail().withMessage('Email is required parameter'), check('password').isLength({min:6}).withMessage('Password must be at least 6 Char long') ]


exports.validateSigninRequest = [
 check('email').notEmpty().isEmail().withMessage('Email is required parameter'), check('password').notEmpty().isLength({min:6}).withMessage('Password must be at least 6 Char long') ]



// const errors =  validationResult(req)
// return res.status(400).json({errors:errors.array()})

exports.isRequestValidated = (req,res,next) =>{
    const errors =  validationResult(req)
// return res.status(400).json({errors:errors.array()})
    // const errors = validationResult(req);
    if(errors.array().length > 0 ){
        return res.status(400).json({
            error:errors.array()[0].msg
        })
    }
    next();
} 