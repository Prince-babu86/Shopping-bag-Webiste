const express = require('express')
const app = express()


const db = require('./config/mongoose.connecton')
const userRouter = require('./routes/userRouter')
const ownersRouter = require('./routes/ownersRouter')
const productRouter = require('./routes/productRouter')
const Index = require('./routes/index')
const expressSession = require('express-session')
const flash = require('connect-flash')

require('dotenv').config();


const cookieParser = require('cookie-parser');
const path = require('path')



app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:process.env.EXPRESS_SESSION_SECRET
}))

app.use(flash());

app.use(express.static(path.join(__dirname , 'public')))
app.set('view engine' , 'ejs')

app.use('/owners' , ownersRouter )
app.use('/users' , userRouter )
app.use('/products' , productRouter)
app.use('/' , Index)


app.listen(3000)