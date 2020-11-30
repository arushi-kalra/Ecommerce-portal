var router = require('express').Router();

router.get('/',function(req,res){
  res.render('main/about');
});
router.post('/product/:product-id',function(req,res,next){
Cart.findOne({owner: req.user._id},function(err,cart){
 cart.items.push({
   Item: req.body.product-id,
   Price: parseFloat(req.body.price),
   Quantity: parseInt(req.body.quantity)
   });
   cart.total = (cart.total + parseFloat(req.body.price)).toFixed(2);
     cart.save(function(err){
       if(err)return next(err);
       return res.redirect('/cart');
     });
   });
 });
 router.post('/remove',function(req,res,next){
Cart.findOne({owner: req.user._id},function(err,foundCart){
  foundCart.items.pull(String(req.body.item));
  
  foundCart.total = (foundCart.total - parseFloat(req.body.price)).toFixed(2);
     foundCart.save(function(err , found){
       if(err)return next(err);
       req.flash('remove', 'Successfully removed');
       res.redirect('/cart');
     });
   });
 }); 
 
 

module.exports = router;
