let getResult = (name, input) => {
    let scoreName = name,
        scoreInput = input,
        successBox = document.querySelector('.success-holder'),
        someText = '';

    for(let i = 0; i < list.length; i++) {
        someText +=
            '<div class="row">'
                + '<a class="name">' + scoreName[i] + '</a>'
                + '<div class="content-holder">'
                    + '<p>Your score: ' + scoreInput[i].value
                + '</div>'
            + '</div>';
    }

    successBox.innerHTML = someText;
}

export default getResult;