const express = require('express');


const { requireSignin, adminMiddlewares } = require('../common-middleware');
const { addCategory,getCategories } = require('../controller/category');

const router = express.Router();
router.post('/category/create',requireSignin,adminMiddlewares, addCategory);
router.get('/category/getcreategory',getCategories);
module.exports = router;