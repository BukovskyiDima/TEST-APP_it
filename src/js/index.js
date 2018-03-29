import rest from "./rest";
import createList from "./createList";

document.addEventListener('DOMContentLoaded', function() {
  let doc = document,
    param = [];

  rest(function (list) {
    param = list;
    createList(list);

    let name = doc.getElementsByClassName('name');
    console.log(name);

    for(let i = 0; i < name.length; i++){
      name[i].addEventListener('click', function() {

        this.classList.toggle('open');
        let holder = this.nextElementSibling;

        if(holder.style.display === 'block') {
          holder.style.display = 'none';
        } else {
          holder.style.display = 'block';
        }
      });
    }

    let input = doc.getElementsByTagName("input"),
        value = doc.getElementsByClassName('value');

    for(let i = 0; i < input.length; i++) {

      input[i].addEventListener('input', () => {
          value[i].innerHTML = input[i].value;
      });
    }

    console.log(input);
  });
});