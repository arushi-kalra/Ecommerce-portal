var router = require('express').Router();
var bcrypt = require('bcrypt');
var mongoose = require('mongoose');
var User = require('../models/user');
var UserDetails = require('../models/userdetails');


router.get('/', function (req, res) {
  res.render('main/signup');
});

//Signup Users data post to database
router.post('/', (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        res.json({ auth: false, message: "User Already Exists" });
      }
      else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            res.json({ auth: false, message: "Something Went Wrong" });
          } else {
            var user = new User({
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash
            });
            user
              .save()
              .then(result => {
                res.json({ auth: true, message: "`User Created`" });
              })
              .catch(err => {
                res.json({ auth: false, message: "Something went Wrong" });
              });
          }
        });
      }
    });
});

module.exports = router;
