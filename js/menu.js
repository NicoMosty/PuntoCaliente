var i=1;

function menuhide(){
    var VERIF=document.getElementById("menu-js").style.display;
    if (VERIF=="none"){
        document.getElementById("menu-js").style.display = "block";
        // document.getElementsByClassName("div#main-js.info1").style.marginTop = "100px";
    } else{
        document.getElementById("menu-js").style.display = "none";
        // document.getElementsByClassName("div#main-js.info1").style.marginTop = "-100px";    
    }
}