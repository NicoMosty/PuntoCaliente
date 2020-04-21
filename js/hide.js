var time=1;

function hide(id){
    OBJECT=document.getElementById(id.toString());
    OBJECT.style.display= "none";
}
function hide_loader(){
    OBJECT=document.getElementById("loader");
    OBJECT.style.display= "none";
}
function show(id){
    OBJECT=document.getElementById(id.toString());
    OBJECT.style.display= "block";
}

function hide_gen(){
    hide('index-js');
    hide('panaderia-js');
    hide('pasteleria-js');
    hide('cafeteria-js');
    hide('frio-js');
    hide('desayunos-js');
    hide('varios-js');
}

function menu_index(ind){
    hide_gen();
    show(ind.toString());
    window.scrollTo(0,0);
}

function start_hide(){
    hide_gen();
    show('index-js');
}