 const express = require('express');
const { signup, signin } = require('../../controller/admin/auth');
// const user = require('../models/user');
 const router = express.Router();

  
 router.post('/admin/signup', signup)
 router.post('/admin/signin', signin);



 module.exports = router;