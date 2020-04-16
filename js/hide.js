var time=1;

HEIGHT_index=document.getElementById('index-js').offsetHeight;
HEIGHT_panaderia=document.getElementById('panaderia-js').offsetHeight;
HEIGHT_pasteleria=document.getElementById('pasteleria-js').offsetHeight;
HEIGHT_CAFETERIA=document.getElementById('cafeteria-js').offsetHeight;
HEIGHT_REPOSTERIA=document.getElementById('frio-js').offsetHeight;
HEIGHT_DESAYUNOS=document.getElementById('desayunos-js').offsetHeight;
HEIGHT_VARIOS=document.getElementById('varios-js').offsetHeight;

index=document.getElementById('index-js');
panaderia=document.getElementById('panaderia-js');
pasteleria=document.getElementById('pasteleria-js');

function hide(id){
    OBJECT=document.getElementById(id.toString());
    OBJECT.style.display= "none";
    OBJECT.className="new-font";
    // OBJECT.style.transform= "translateX(120%) ";
    // OBJECT.style.transition = time.toString()+"s";
}
function show(id){
    OBJECT=document.getElementById(id.toString());
    OBJECT.style.display= "block";
    // OBJECT.style.transform= "";
    // OBJECT.style.transition = time.toString()+"s";
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