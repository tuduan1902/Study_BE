require('dotenv').config();
var express = require('express');
var port = 3000;
const bodyParser = require('body-parser')
var userRoute = require('./routes/user.route');
var sessionMiddleware = require('./middlewares/session.middleware');
var authRoute=require('./routes/auth.route');
var session = require('express-session');
var cartRoute=require('./routes/cart.route');
var authMiddleware = require('./middlewares/auth.middleware');
var cookieParser = require('cookie-parser');
var productRoute=require('./routes/product.route');
const { parse } = require('dotenv');
var app = express();
app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static('public'));
app.use(session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: true,
    cookie:{maxAge: parseInt(process.env.SESSION_TIMEOUT) || 60}
}));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing app
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);
app.get('/',(req, res) => { 
     res.render('index',{
         name:'Tu Duan'
     });
});
app.use('/users',authMiddleware.requireAuth,userRoute);
app.use('/auth',authRoute);
app.use('/products',productRoute);
app.use('/cart',cartRoute);
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
}); 
    