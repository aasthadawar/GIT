
function rectangle(length,breadth){
  var  area = parseInt(length)*parseInt(breadth);
    return area;
}

function circle(radius){
    const PI = 3.14;
   var area =PI*parseInt(radius)*parseInt(radius);
    return area;
}

function cylinder(radius,height){
    const PI = 3.14;
  var  area= 2*PI*parseInt(radius)*parseInt(height);
    return area;
}

export {rectangle,circle,cylinder};
