list.onclick = function(event){
   if (event.target.tagName != 'H2') {
     return
   }
   let hidenElement = event.target.nextElementSibling;
   let arrow = event.target.lastChild
   hidenElement.hidden = !hidenElement.hidden
   arrow.style.transform=''
   if(hidenElement.hidden == true) {
      event.target.style="font-weight: 400"
      arrow.style.transform='rotate(180)'
   } else {
      event.target.style="font-weight: 700"
      arrow.style.transform='rotate(0)'
   }
 }

