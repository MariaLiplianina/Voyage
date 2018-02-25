var reviews = document.getElementsByClassName("carouselreviews")[0];

function next2() {

    var temp = reviews.firstElementChild.innerHTML;
    for(var i=0; ; i++) {
        if(i==reviews.childElementCount-1) {
            reviews.children[i].innerHTML = temp;
            break;
        }
       reviews.children[i].innerHTML = reviews.children[i+1].innerHTML;
    }
}

function prev2() {

   var temp = reviews.lastElementChild.innerHTML;
   for(var i=reviews.childElementCount-1; ; i--) {
       if(i==0) {
           reviews.children[i].innerHTML = temp;
           break;
       }
       reviews.children[i].innerHTML = reviews.children[i-1].innerHTML;
   }
}