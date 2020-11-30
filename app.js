var express=require("express"); 
var bodyParser=require("body-parser"); 
var ejs = require('ejs');
var ejsMate = require('ejs-mate');
 
  
var password = 'ecommerce123';
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tcs-ecommerce:'+ password +'@ecommerce-tcs-qqgie.mongodb.net/test?retryWrites=true&w=majority'); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
    console.log("connection succeeded"); 
}) 
  
var app=express() ;

  
app.use(bodyParser.json()); 
app.use(cexpress.static('public')); 
app.use(bodyParser.urlencoded({ 
    extended: true
}));
app.engine('ejs',ejsMate);
app.set('view engine','ejs');  
  
app.post('/sign_up', function(req,res){ 
    var debitcard_name = req.query['debitcard_name']; 
    var debit_card_no =req.query['debit_card_no']; 
    var debitcard_expiration_date = req.query['debitcard_expiration_date']; 
    var cvv_no_debit =req.query['cvv_no_debit'];
    var email=req.query['email'];
    var first_name=req.query['first_name'];
    var credit_card_name=req.query['credit_card_name'];
    var credit_card_no=req.query['credit_card_no'];
    var credit_card_expiration=req.query['credit_card_expiration'];
    var credit_card_cvv=req.query['credit_card_cvv'];
    var radio=req.query['radio'];
    var paypal_account=req.query['paypal_account'];
    

    var account_password=req.query['account_password'];

  
    var data = { 
        "debitcard_name":debitcard_name,
        "debit_card_no":debit_card_no,
        "debitcard_expiration_date":debitcard_expiration_date,
        "cvv_no_debit":cvv_no_debit,
        "email":email,
        "first_name":first_name,
        "credit_card_name":credit_card_name,
        "credit_card_no":credit_card_no,
        "credit_card_expiration":credit_card_expiration,
        "credit_card_cvv":credit_card_cvv,
        "radio":radio,
        "paypal_account":paypal_account,
        "account_password":account_password,


    } 
db.collection('details').insertOne(data,function(err, collection){ 
        if (err) throw err; 
        console.log("Record inserted Successfully"); 
              
    }); 
          
    return res.redirect('/signup_success'); 
}) 
  
  
app.get('/',function(req,res){ 
res.set({ 
    'Access-control-Allow-Origin': '*'
    }); 
return res.redirect('index'); 
}).listen(3008) 
  
  
console.log("server listening at port 3000"); 



