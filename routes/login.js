var router = require('express').Router();
var User = require('../models/user');
var bcrypt = require('bcrypt');

router.get('/',function(req,res){
  res.render('main/login');
});

//Login Users data post to database
router.post('/', (req, res, next) => {
    User.findOne({ email: req.body.email })
        .exec()
        .then(user => {
            if(user == null){
                res.json({auth:false,message:"User Not Found"});
            }
            else if(req.body.password == ''){
                res.json({auth:false, message:"No password"});
            }
            else{
                    bcrypt.compare(req.body.password, user.password, (err, result) => {
                        if (err) {
                            res.json({auth:false,message: 'Auth Failed due to compare'});
                        }
                        if (result == true) {
                            req.session.user = user;
                            req.session.isLoggedIn = true;
                            res.json({auth:true});         
                        }else{
                            res.json({auth:false,message:"Incorrect Password"});                
                        }
                    });
                }
            }
        )
        .catch(err => {
                res.json({auth:false,message:"Something Went Wrong, Please Try Again!!"});
        });
});

module.exports = router;
