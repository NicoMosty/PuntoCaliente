var imag=[];

imag[0]=new Image();imag[1]=new Image();imag[2]=new Image();

imag[0].src="sources/images/banner/1.png"
imag[1].src="sources/images/banner/2.png"
imag[2].src="sources/images/banner/3.png"

var i=1;
var time=5000;

// Funcion ONLOAD
function openbanner(){
    document.getElementById("change-banner-1").src=imag[i].src;
    i++;
    if(i==imag.length){
        i=0;
    }
    timer=setTimeout(function(){ openbanner(); },time);
}

// Funcion ONTOUCHMOVE
function touch_start_banner(){
    var x_o = event.touches[0].clientX;
    var y_o = event.touches[0].clientY;
}
function touch_end_banner(){
    var x_f = event.touches[0].clientX;
    var y_f = event.touches[0].clientY;
    if ((Math.abs((y_f-y_o)/y_o))<0.05){
        if ((x_f-x_o)<0){
            document.getElementById("change-banner-1").src=imag[i].src;
            i++;
            if(i==imag.length){
                i=0;
            }
            console.log(i);
            clearTimeout(timer);
            timer=setTimeout(function(){ openbanner(); },time);
        } else{
            document.getElementById("change-banner-1").src=imag[i].src;
            if(i==0){
                i=imag.length-1;
            } else{
                i--;
            }
            console.log(i);
            clearTimeout(timer);
            timer=setTimeout(function(){ openbanner(); },time);
        }
    }
}

function next(){
    document.getElementById("change-banner-1").src=imag[i].src;
    i++;
    if(i==imag.length){
        i=0;
    }
    console.log(i);
    clearTimeout(timer);
    timer=setTimeout(function(){ openbanner(); },time);
}

function back(){
    document.getElementById("change-banner-1").src=imag[i].src;
    if(i==0){
        i=imag.length-1;
    } else{
        i--;
    }
    console.log(i);
    clearTimeout(timer);
    timer=setTimeout(function(){ openbanner(); },time);
}