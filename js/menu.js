var i=1;

function menuhide(){
    var VERIF=document.getElementById("menu-js");
    if (VERIF.style.display=="block"){
        VERIF.style.display = "none";
    } else{
        VERIF.style.display = "block";
    }
}

function cambiotamaño(){
    var CHECK=window.innerWidth;
    var VERIF=document.getElementById("menu-js");
    if(CHECK<900){
        VERIF.style.display = "none";
    } 
    if(CHECK>900){
        VERIF.style.display = "block";       
    }
}