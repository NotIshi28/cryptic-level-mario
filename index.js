require('dotenv').config()
const express = require('express');
// const session = require('express-session');
// const passport = require('passport');
// const passportInit = require('./utils/passportConfig.js')
const bodyParser = require('body-parser')
// const flash = require('express-flash')
const cookieParser = require("cookie-parser");

// const mongoose = require('mongoose');

const indexRouter = require('./routes/indexRouter.js')


const app = express();

app.set('view engine', 'ejs')
app.use(cookieParser());

app.use(bodyParser.urlencoded({
    extended: true
  }));

//connecting mongoose
// const dbUri = process.env.MONGO_URI
// mongoose.connect(process.env.MONGO_URI, console.log('MONGODB CONNECTED'))

app.use(express.static('public'))
app.use('/', express.static('public'))
app.use(express.static('uploads'))
app.use('/', express.static('uploads'))
app.set('view engine', 'ejs')
// app.use(flash())
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: true,
//     saveUninitialized: true
// }))
// app.use(express.urlencoded({extended: false}))
app.use(express.json({limit: '1mb'}))

// app.use(passport.initialize())
// app.use(passport.session())
// passportInit(passport)


//routers
app.use('/', indexRouter)
// app.use('/login', loginRouter)
// app.use('/register', regRouter)




const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});