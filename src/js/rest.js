let rest = {

  getParam (callback) {
    let xhr = new XMLHttpRequest(),
      dataIn;

    xhr.open('GET', 'db/dataIn.json', true);
    xhr.send(null);
    xhr.addEventListener('readystatechange', function() {
      if (xhr.readyState != 4) return;

      if (xhr.status != 200) {
          console.error(xhr.status);
      } else {
        dataIn = JSON.parse(xhr.responseText);

        return callback(dataIn);
      }
    });
  }
};

export default rest;