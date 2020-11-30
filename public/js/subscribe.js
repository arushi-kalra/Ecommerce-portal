function send(){
		   var display = document.getElementById('email_subscribe').value;
           alert(display + " is now subsrcibed.");
        }

function getintouch(){

	       var getintouch = document.detailsgetintouch.c_fname.value;
	       if(c_fname.value!=""&&c_lname.value!=""&&email_subscribe!="")
	       {
	       alert(getintouch+ "your complaint has been send thank you for feedback!");
}
else
{
	alert("Please fill all the entries");
}
}

function coupon() 
{
	var message =document.d.abc.value;
	var a= Math.random();
	if((a*10>2)||message=="")
	{	
		alert(message+ "  is not a valid coupon");
	}
	else
	{
		alert("Your coupon code applied");
	}
}