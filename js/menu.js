var trans=100;
function menuhide(){
    var VERIF=document.getElementById("menu-js");
    VERIF.style.transform= "translateY(-"+trans.toString()+"px)";
    VERIF.style.marginBottom="-"+trans.toString()+"px";
    VERIF.style.transition = "2s";
}

function menuhide(){
    var VERIF=document.getElementById("menu-js");
    if (VERIF.style.transform=="translateY(0px)" || VERIF.style.transform==""){
        VERIF.style.transform= "translateY(-"+trans.toString()+"px)";
        VERIF.style.marginBottom="-"+trans.toString()+"px";
        VERIF.style.transition = "1s";
    } 
    else {   
        VERIF.style.transform= "translateY(0px)";
        VERIF.style.marginBottom="0px";
        VERIF.style.transition = "1s";
    }
}

function cambiotamaño(){
    var CHECK=window.innerWidth;
    var VERIF=document.getElementById("menu-js");
    if(CHECK<900){
        VERIF.style.transform= "translateY(-"+trans.toString()+"px)";
        VERIF.style.marginBottom="-"+trans.toString()+"px";
        VERIF.style.transition = "1s";
    } 
    if(CHECK>900){
        VERIF.style.transform= "translateY(0px)";
        VERIF.style.marginBottom="0px";
        VERIF.style.transition = "1s";      
    }
}