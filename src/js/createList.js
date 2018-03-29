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
        + '<a class="name">' + param.name + '</a>'
        + '<div class="content-holder">'
          + '<span class="category">' + param.category + '</span>'
          + '<span class="importance">' + param.importance + '</span>'
          + '<input type="range" min="' + param.min + '" max="' + param.max + '" step="' + param.step + '" value="">'
          + '<span class="value">You mast choose</span>'
        + '</div>'
      + '</div>';
  }

  paramBox.innerHTML = someText;
};

export default createList;