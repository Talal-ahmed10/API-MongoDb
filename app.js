const express = require('express'); 
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const app = express();

//////////////////////////////////////////Middleware
app.use(express.json()); 
app.use(express.static(`${__dirname}/public`));
app.use(morgan('dev')); 
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});


//Mounting multiple routes
//Middleware
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter); 

/////////////////////////////////////////server
module.exports = app;











////////////////////////////////////////////Routes
// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTours);
// app.post('/api/v1/tours', createTours);
// app.patch('/api/v1/tours/:id', updateTours);
// app.delete('/api/v1/tours/:id', deleteTours);

//creating our own middleware
// app.use((req, res, next) => {
//   console.log('Hello from your own middleware 00');
//   next();
// });