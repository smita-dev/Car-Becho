const express=require('express');
const app=express();

//to keep logging details
const morgan=require('morgan');
const bodyparser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const expressLayouts=require('express-ejs-layouts');
const flash=require('connect-flash')
const session = require('express-session')
const passport=require('passport');

//port number
const port=process.env.PORT || 3000;

//passport config
require('./api/routes/passport')(passport);

//cors
app.use(cors());

//EJS
// app.use(expressLayouts);
// app.set('view engine','ejs');

//connect flash
// app.use(flash());

//global var
// app.use((req,res,next)=>{
//     res.locals.success_msg=req.flash('success_msg');
//     res.locals.error_msg=req.flash('error_msg');
//     next();
// })
//Bodyparser
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


// express session
// app.use(session({
//     secret: 'secret',
//     resave: true,
//     saveUninitialized: true,
//     // cookie: { secure: true }
//   }));


  //passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

const userRoutes=require('./api/routes/user')
//const carRoutes=require('./api/routes/car')


//filter routes
app.use('/api',userRoutes);
//app.use('/car',carRoutes);

//connected to db
mongoose.connect("mongodb+srv://dbUser:q9twDpjE06O9oTxd@cluster0-uz0v7.mongodb.net/CarApp?retryWrites=true&w=majority",
{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useCreateIndex: true,
})
.then(()=>console.log("connected to mongodb"))
.catch(err => console.log('Error occured while connecting MongoDB '+err));


app.listen(port,()=>{
    console.log("connected on port "+port)
})

module.exports=app;