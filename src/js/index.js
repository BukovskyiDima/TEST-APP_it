import rest from "./rest";
import createList from "./createList";

document.addEventListener('DOMContentLoaded', function() {
  let doc = document,
    param = [];

  rest(function (list) {
    param = list;
    createList(list);

    let name = doc.getElementsByClassName('name'),
      i = 0;
    console.log(name);

    for(; i < name.length; i++){
      name[i].addEventListener('click',() => {
        this.classList.toggle('open');
        console.log(this);
        let holder = this.nextElementSibling;

        if(holder.style.display === 'block') {
          holder.style.display = 'none';
        } else {
          holder.style.display = 'block';
        }
      });
    }
  });
});