const express = require('express');
const app = express();


  const AppError = require('./utils/appError')

const userRouter = require('./routes/userRoutes');
const adminRouter = require('./routes/adminRouter');


// 1) MIDDLEWARES 

//handling unhandled routes 
app.all('*', (req,res,next)=>{

              
             next(new AppError (`can't find ${req.originalUrl} on this server !`,404));
  })


//global error handler 

app.use((err,req,res,next)=>{
  console.log(err.stack)
  err.statusCode = err.statusCode || 500;
  err.status= err.status || 'error';
  res.status(err.statusCode).json({
    status:err.status,
    message : err.message

  })

})




// 3) ROUTES
app.use('/addrestiPartenaire/users', userRouter);
app.use('/addrestiPartenaire/admin', adminRouter);



module.exports = app;
