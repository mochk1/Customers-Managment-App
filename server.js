const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.PORT || 8080
const cors = require('cors');
const path = require('path')
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require('cookie-parser')
const session = require("express-session");
const MongoStore = require('connect-mongo');
const mongoose  = require('mongoose');
const routes = require('./routes.js')
require("./passport-config")(passport);


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser("secretcode"))
app.use(cors({    origin: 'https://mycustomersapp.netlify.app/',    credentials:true    }));
app.use(
session({
      secret: "secretcode",
      store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
      resave: false,
      saveUninitialized: false,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
app.use(routes);



if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

})
}


app.listen(port, () => console.log(`listening at http://localhost:${port}`))





