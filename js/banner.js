// Funcion ONTOUCHMOVE
var x_o; var y_o;
class touch_banner{
    // constructor(){};
    static start(){
        x_o = event.touches[0].clientX;
        y_o = event.touches[0].clientY;
        // console.clear();
        // console.log('x_o=',x_o,'y_o=',y_o);
    };
    static end(){
        var x_f = event.changedTouches[0].clientX;
        var y_f = event.changedTouches[0].clientY;
        // console.log('--------------------');
        // console.log('x_f=',x_f,'y_f=',y_f);
        // console.log("Error=",Math.abs((y_f-y_o)/((y_o+y_f)/2)));
        if ((Math.abs((y_f-y_o)/((y_o+y_f)/2)))<0.4){
            if ((x_f-x_o)<0){
                document.getElementById("next-banner").click();
            } 
            else{
                document.getElementById("prev-banner").click();
            }
        }
    };
}

// Funcion ONTOUCHMOVE
var x_o; var y_o;
class touch_banner{
    // constructor(){};
    static start(){
        x_o = event.touches[0].clientX;
        y_o = event.touches[0].clientY;
        // console.clear();
        // console.log('x_o=',x_o,'y_o=',y_o);
    };
    static end(){
        var x_f = event.changedTouches[0].clientX;
        var y_f = event.changedTouches[0].clientY;
        // console.log('--------------------');
        // console.log('x_f=',x_f,'y_f=',y_f);
        // console.log("Error=",Math.abs((y_f-y_o)/((y_o+y_f)/2)));
        if ((Math.abs((y_f-y_o)/((y_o+y_f)/2)))<0.4){
            if ((x_f-x_o)<0){
                document.getElementById("next-banner").click();
            } 
            else{
                document.getElementById("prev-banner").click();
                document.getElementsByClassName("left carousel-control").click();
            }
        }
    };
}