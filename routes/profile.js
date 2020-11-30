var router = require('express').Router();
var UserDetails = require('../models/userdetails');
var mongoose = require('mongoose');
var url = "mongodb+srv:tcs-ecommerce:ecommerce123@ecommerce-tcs-qqgie.mongodb.net/test?retryWrites=true&w=majority";

router.get('/', function (req, res) {
  if (req.session.user == undefined) {
    res.render('main/home', { useremail: "User" });
  }
  else {
    UserDetails.findOne({ email: req.session.user.email }, function (err, user) {
      if (!user) {
        res.render('main/profile', { useremail: req.session.user.email, email: req.session.user.email, username: "", firstname: "", lastname: "", dob: "", mobile: "" });
      }
      else {
        var date = user.dateofbirth;
        var format = JSON.stringify(date);
        format = format.slice(1, 11);
        console.log(format);
        res.render('main/profile', { useremail: req.session.user.email, email: req.session.user.email, username: user.username, firstname: user.firstname, lastname: user.lastname, dob: format, mobile: user.mobileno });
      }
    })
  }
});

router.post('/update', (req, res, next) => {
  UserDetails.findOne({ email: req.session.user.email })
    .exec()
    .then(userdata => {
      if (userdata != null) {
        UserDetails.findByIdAndUpdate({ _id: userdata._id }, {
          $set: {
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            dateofbirth: req.body.dob,
            mobileno: req.body.mobile
          }
        }, { upsert: true }, function (err, doc) {
          if (err) { throw err; }
          else { console.log("Updated"); }
        });
      }
      else {
        var userdata = new UserDetails({
          _id: new mongoose.Types.ObjectId(),
          email: req.session.user.email,
          username: req.body.username,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          dateofbirth: req.body.dob,
          mobileno: req.body.mobile
        });
        userdata.save();
      }
      res.redirect('/home');
    });
});

router.get('/logout', function (req, res) {
  if (req.session && req.session.user) {
    req.session.destroy();
    res.redirect('/home');
  }
  else {
    res.redirect('/home');
  }
})

module.exports = router;
