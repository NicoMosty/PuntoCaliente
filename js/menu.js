var trans=100;
var time=1;
var VERIF=document.getElementById("menu-js");
var CHECK=window.innerWidth;

function menuhide(){
    if (VERIF.style.transform=="translateY(0px)"){
        VERIF.style.transform= "translateY(-"+trans.toString()+"px) ";
        VERIF.style.marginBottom="-"+trans.toString()+"px ";
        VERIF.style.transition = time.toString()+"s";
    } 
    else {   
        VERIF.style.transform= "translateY(0px) ";
        VERIF.style.marginBottom="0px ";
        VERIF.style.transition = time.toString()+"s";
        VERIF.style.transition = time.toString()+"s";
    }
}

var VERIF1=document.getElementsByClassName("menu");
function cambiotamaño(){
    location.reload();
}
