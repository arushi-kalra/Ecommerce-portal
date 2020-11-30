function calculateTotal(){
    var id = document.activeElement.id;
    var value = document.getElementById(id).value;
    var itemtotalname;
    if(id=="itemInput1"){
        itemtotalname = "itemtotal1";
    }
    else{
        itemtotalname = "itemtotal2";
    }
    if(value>0){
        if(value == 1){
        document.getElementById(itemtotalname).innerHTML = "49";
     }
      else{
        var total = 49*value;
        document.getElementById(itemtotalname).innerHTML = total;
      }
    }
    else{
      document.getElementById(itemtotalname).innerHTML = "0";
    } 
    sumtotal();
  }
  function sumtotal(){
      console.log(parseInt(document.getElementById("itemtotal1").innerHTML));
      document.getElementById("total1").innerHTML = parseInt(document.getElementById("itemtotal1").innerHTML)+ parseInt(document.getElementById("itemtotal2").innerHTML);
      document.getElementById("total2").innerHTML = parseInt(document.getElementById("itemtotal1").innerHTML)+ parseInt(document.getElementById("itemtotal2").innerHTML);
  }

