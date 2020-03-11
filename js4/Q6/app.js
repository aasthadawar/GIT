import {findUnique} from './logic.js';

window.addEventListener('load',init());

function init(){
    var unique = findUnique([1,2,3,4,5,3,4,5]);
    document.getElementById('unique').innerHTML = "unique array is " + " [" + unique + "]";
}