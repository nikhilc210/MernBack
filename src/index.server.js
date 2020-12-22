const express = require('express');
const env = require('dotenv');
const app = express();
const moongoos  =  require('mongoose');
//routes
const authRouts = require('./routes/auth');
const adminRouts = require('./routes/admin/auth');
const categoryRoute = require('./routes/category');
//env variable or you can say constant
env.config();

//mongodb+srv://nikhilc210:<password>@cluster0.tx7zp.mongodb.net/<dbname>?retryWrites=true&w=majority

moongoos.connect(
    `mongodb+srv://${process.env.MON_USER}:${process.env.MON_PASS}@cluster0.tx7zp.mongodb.net/${process.env.MON_DB}?retryWrites=true&w=majority`,
      {
          useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex:true
    }
).then(() =>{
    console.log('Database Connected'); 
});

app.use(express.json());
app.use('/api', authRouts);
app.use('/api', adminRouts);
app.use('/api', categoryRoute);


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});