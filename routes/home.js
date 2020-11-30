var router = require('express').Router();
var User = require('../models/user');


router.get('/',function(req, res){
  if(req.session.user == undefined){
    res.render('main/home',{useremail:"User"});
  }
    else{
      if(req.session && req.session.user) { 
    User.findOne({ email: req.session.user.email }, function (err, user) {
      res.render('main/home',{useremail:req.session.user.email});
      if (!user) {
        req.session.reset();
      } else {
        res.locals.user = user;
        delete req.session.user.password;
        console.log(req.session.user);
      }
    });
  }
}
});

router.get('/dashboard', function(req, res) {
  console.log("Dashboard");
  console.log(req.session);
  console.log(req.session.user);
  if (req.session && req.session.user) { 
    User.findOne({ email: req.session.user.email }, function (err, user) {
      if (!user) {
        req.session.reset();
        res.redirect('/signup');
      } else {
        res.locals.user = user;
        res.redirect('/profile');
      }
    });
  } else {
    res.redirect('/signup');
  }
    });

module.exports = router;
