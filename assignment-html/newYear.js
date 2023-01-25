function shw () {
    var txt=documne.getElementById ("txt").value;
    if (txt==0){
        alert ("hii")
    }
    else {
        document.getElementById("hd").innerHTML=txt;
        document.getElementById ("pr").style.display="none";
        document.getElementById ("pd").style.display ="block";
    }
    
}