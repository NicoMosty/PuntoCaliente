var imag=[];

imag[0]=new Image();imag[1]=new Image();imag[2]=new Image();

imag[0].src="sources/images/banner/1.png"
imag[1].src="sources/images/banner/2.png"
imag[2].src="sources/images/banner/3.png"

var i=Math.floor(Math.random()*imag.length);
var time=5000;

// Funcion ONLOAD
document.getElementById("change-banner-1").src=imag[i].src;
i++;
if(i==imag.length){
    i=0;
}
timer=setTimeout(function(){ slide(); },time);


function next(){
    document.getElementById("change-banner-1").src=imag[i].src;
    i++;
    if(i==imag.length){
        i=0;
    }
    console.log(i);
    clearTimeout(timer);
    timer=setTimeout(function(){ slide(); },time);
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
    timer=setTimeout(function(){ slide(); },time);
}