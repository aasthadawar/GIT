import {rectangle,circle,cylinder} from './two.js';

window.addEventListener('load',init());



function init(){
    
   var rect = rectangle(2,3);
    //console.log('area of rectangle is :: ',rect);
    document.getElementById('rectangle').innerHTML = "area of rectangle is::" + rect;

    var cir = circle(7);
   // console.log('area of circle is :: ',cir);
   document.getElementById('circle').innerHTML = "area of circle is:: " + cir;

   var cyl = cylinder(7,14);
    //console.log('area of cylinder is :: ',cyl);
    document.getElementById('cylinder').innerHTML = "area of cylinder is:: " + cyl;
}