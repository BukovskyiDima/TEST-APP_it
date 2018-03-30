import rest from "./rest";
import createList from "./createList";
import getResult from "./getResult";

document.addEventListener('DOMContentLoaded', function() {
  let doc = document,
    param = [];

  rest.getParam((list) => {
    param = list;
    createList(param);

    let name = doc.querySelectorAll('.name'),
        input = doc.querySelectorAll('input'),
        value = doc.querySelectorAll('.value'),
        button = doc.querySelector('button'),
        wrapper = doc.querySelector('#wrapper');

    for(let i = 0; i < name.length; i++){

      name[i].addEventListener('click', () => {
        let holder = name[i].nextElementSibling;

          name[i].classList.toggle('open');

        if(holder.style.display === 'block') {
          holder.style.display = 'none';
        } else {
          holder.style.display = 'block';
        }
      });

      input[i].addEventListener('input', () => {
        value[i].innerHTML = input[i].value;
      });
    }

    button.addEventListener('click', () => {
      let i = 0;

      function haveClass(list) {
          return list.parentElement.classList.contains('error');
      }

      for(; i < name.length; i++) {
        if (value[i].textContent == 'You must choose') {
          input[i].parentElement.classList.add('error');
        } else {
          input[i].parentElement.classList.remove('error');
        }
      }


      // if (input.every(haveClass)) {
      //   wrapper.classList.add('success');
      //     getResult(name, input, value);
      // }
    });
  });
});