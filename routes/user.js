var router = require('express').Router();
var User = require('../models/user');

router.post('/signup', function(req, res, next){
  var user = new User();

  user.profile.name = req.body.name;
  user.password = req.body.password;
  user.email = req.body.email;

  user.findOne({email: req.body.email}, function(err, existingUser){

     if(existingUser){
       console.log(req.body.email + " is already exist");
       return res.redirect('/signup');
     }
     else{
       user.save(function(err, user){
         if(err) return next(err);
         res.json('Sucessfully Created A New User!');
       });
     }
   });
 });

 module.exports = router;
