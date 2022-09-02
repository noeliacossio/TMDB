// Configuración del server

const express = require("express"); 
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const path = require("path");
const router = require("./routes");

const db = require("./models/db")

const User = require('./models/User')

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
    sessions({
      secret: "bootcamp",
      resave: true,
      saveUninitialized: true,
    })
  );
  
  app.use(passport.initialize());
  app.use(passport.session());
  
  passport.use(
    new localStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      function (email, password, done) {
        User.findOne({ where: { email } })
          .then((user) => {
            if (!user) {
              return done(null, false);
            }
  
            user.hash(password, user.salt).then((hash) => {
              if (hash !== user.password) {
                return done(null, false);
              }
  
              return done(null, user); 
            });
          })
          .catch(done); 
      }
    )
  );
  
  //guardar al usuario
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  
  //buscar al usuario
  passport.deserializeUser(function (id, done) {
    User.findByPk(id)
      .then((user) => {
        done(null, user);
      })
      .catch(done);
  });

app.use("/api", router);

db.sync({ force: false }).then(() => {
app.listen(3001, () => console.log(`Listening on ${3001}`))
})


