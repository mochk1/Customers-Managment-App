const passport = require('passport')
const localStrategy = require("passport-local").Strategy;
const dbconnection = require('./connect')
const User = require("./User");
const bcrypt = require("bcryptjs");

module.exports = function(passport) {
  passport.use(
    new localStrategy((username, password, done) => {
     
      // Match user
      User.findOne({username: username})
      .then(user => { if (!user) { return done(null, false,{ message: 'No User Exists' })}
      
        // Match password
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result) {
            return done(null, user);
          } else {
            return done(null, false,{ message: 'Incorrect Password' });
          }
        });
      });
    })
  );

};
passport.serializeUser((_id, done)=> {
 done(null, _id);
});

passport.deserializeUser((id, done)=> {
  User.findOne({_id:id}, (err, user)=> {
    done(err, user);
  });
});

