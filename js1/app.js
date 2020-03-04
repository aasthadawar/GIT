window.addEventListener('load',init());
function init(){
    var date = new Date();
        var hours=date.getHours();
        var minutes=date.getMinutes();
        var seconds=date.getSeconds();
        var newhours=hours%12;
        var onlyDate=date.toDateString();
        var element = onlyDate.split(" ");

        if(newhours<=9){
            newhours="0"+newhours;
        }
        if(minutes<=9){
            minutes="0"+minutes;
        }
        if(seconds<=9){
            seconds="0"+seconds;
        }

            
                if(hours>=6 && hours<12){
                    document.getElementById('good').innerHTML="Good Morning";
                }
                else if(hours>=12 && hours<=16){
                    document.getElementById('good').innerHTML="Good Afternoon";
                }
                else if(hours>16 && hours<=21){
                    document.getElementById('good').innerHTML="Good Evening";
                }
                else{
                    document.getElementById('good').innerHTML="Good Night";
                }

                if(hours<12)
                    { document.getElementById('time').innerHTML = newhours+":"+minutes+":"+seconds+" "+"A.M"
                    }
                else
                { document.getElementById('time').innerHTML = newhours+":"+minutes+":"+seconds+" "+"P.M"
                }

                document.getElementById('date').innerHTML=element[2]+" "+element[1]+" "+element[3];

                setTimeout(init,1000);

        
}