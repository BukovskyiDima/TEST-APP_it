import rest from "./rest";
import createList from "./createList";

document.addEventListener('DOMContentLoaded', function() {
  let doc = document,
    param = [];

  rest(function (list) {
    param = list;
    createList(list);
  });



  console.log(param);
});