var trans=100;
var time=1;
var VERIF=document.getElementById("menu-js");
var CHECK=window.innerWidth;

function menuhide(){
    if (VERIF.style.transform=="translateY(0px)"){
        VERIF.style.transform= "translateY(-"+trans.toString()+"px)";
        VERIF.style.marginBottom="-"+trans.toString()+"px";
        VERIF.style.transition = time.toString()+"s";
    } 
    else {   
        VERIF.style.transform= "translateY(0px)";
        VERIF.style.marginBottom="0px";
        VERIF.style.transition = time.toString()+"s";
        VERIF.style.transition = time.toString()+"s";
    }
}

function cambiotamaño(){
    if(CHECK<900){
        VERIF.style.transform= "translateY(-100px)";
        VERIF.style.marginBottom="-100px";
        VERIF.style.transition = "1s";
    } 
    if(CHECK>900){
        VERIF.style.transform= "translateY(0px)";
        VERIF.style.marginBottom="0px";
        VERIF.style.transition = time.toString()+"s";      
    }
}
