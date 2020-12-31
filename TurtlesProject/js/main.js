function myFunction() {
  var x = document.getElementById("mobLinks");
  if (x.style.display === "block"){
    x.style.display = "none";
  } 
    else {
    x.style.display = "block";
  }
} 



console.log("test1");

function payDisplay(){
    var cc = document.getElementById("creditcard");
    var pp = document.getElementById("paypal");
    
    
    console.log("test2");
    
    if (cc.checked == true){  
        document.getElementById("creditcardform").style.display = "block";
        document.getElementById("paypalform").style.display = "none";
        
        /*var payDisplay = document.getElementsByClassName("creditcardform");
        payDisplay[0].style.dispay = "block";
        console.log(payDisplay[0].style.display);*/
    }  
    
    if(pp.checked == true){
        document.getElementById("paypalform").style.display = "block";
        document.getElementById("creditcardform").style.display = "none";
    }
}

console.log("test4");

    console.log(document.getElementsByClassName("creditcardform"));