let createList = (list) => {
  let doc = document,
    someText = '',
    length = list.length,
    i = 0,
    paramBox = doc.querySelector('.category-holder');

  for (; i < length; i++){
    let param = list[i];
    someText +=
      '<div class="row">'
        + '<span>' + param.surname + '</span>'
        + '<span>' + param.category + '</span>'
        + '<span>' + param.importance + '</span>'
        + '<input type="range" min="' + param.min + '" max="' + param.max + '" step="' + param.step + '" value="5">'
      + '</div>';
  }

  paramBox.innerHTML = someText;
};

export default createList;