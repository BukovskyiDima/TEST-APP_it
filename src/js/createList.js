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
        + '<div class="content-holder holder">'
          + '<span class="category">Category name: ' + param.category + '</span>'
          + '<span class="importance">Importance: ' + param.importance + '</span>'
          + '<input type="range" min="' + param.min + '" max="' + param.max + '" step="' + param.step + '" value="">'
          + '<p>Your choise: <span class="value">You must choose</span></p>'
        + '</div>'
      + '</div>';
  }

  someText += '<button type="submit">Отправить</button>';

  paramBox.innerHTML = someText;
};

export default createList;