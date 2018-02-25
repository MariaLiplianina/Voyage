var tours = document.getElementsByClassName("tours")[0];

function next() {

    var temp = tours.firstElementChild.innerHTML;
    for(var i=0; ; i++) {
        if(i==tours.childElementCount-1) {
            tours.children[i].innerHTML = temp;
            break;
        }
        tours.children[i].innerHTML = tours.children[i+1].innerHTML;
    }
}

function prev() {

   var temp = tours.lastElementChild.innerHTML;
   for(var i=tours.childElementCount-1; ; i--) {
       if(i==0) {
           tours.children[i].innerHTML = temp;
           break;
       }
       tours.children[i].innerHTML = tours.children[i-1].innerHTML;
   }
}