const express = require("express");
const User = require("../models/User");
const Movies = require("../models/Movies");
const Favorites = require("../models/Favorites")
const passport = require("passport");
const router = express.Router();

/*
  ALL YOUR ROUTES HERE!
*/

router.get("/search", (req, res) => {
  Movies.findAll(req.body)
  .then(movie => res.send(movie))
})

router.get('/:id', (req, res) => {
  Movies.findByPk(req.params.id)
      .then(movie => movie ? res.json(movie) : res.sendStatus(404));
})

router.post("/register", (req, res) => {
  User.create(req.body)
  .then((user) => {
    res.status(201).send(user);
  });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

router.post("/logout", (req, res, next) => {
  req.logOut((error) => {
    if (error) {
     return next(error)
    }
  });
  res.sendStatus(200);
});

router.get("/", (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }

  res.send(req.user);
});

router.use("/", function (req, res) {
  res.sendStatus(404);
});

router.post("/favorites", (req,res) => {
  Favorites.create(req.body)
  .then(data => res.status(200).send(data.data))
})

router.delete("/deletefavorite", (req,res) => {
   Favorites.destroy({where: req.body})
  .then(data => res.status(200).send(data.data))
}) 

module.exports = router;
