let getResult = (name, input) => {
    let scoreName = name,
        scoreInput = input,
        allScoreInput = 0,
        averageValue = 0,
        successBox = document.querySelector('.success-holder'),
        someText = '';


    for(let i = 0; i < scoreName.length; i++) {
        allScoreInput += Number(scoreInput[i].value);

        someText +=
            '<div class="row">'
                + '<a class="name">' + scoreName[i].textContent + '</a>'
                + '<div class="content">'
                    + '<p>Your score: ' + scoreInput[i].value + '</p>'
                + '</div>'
            + '</div>';
    }

    averageValue = allScoreInput/scoreName.length;

    someText +=
        '<div class="row">'
            + '<div class="score-holder">'
                + '<span>Average score: ' + averageValue + '</span>'
                + '<span>Total score: ' + allScoreInput + '</span>'
            + '</div>'
        + '</div>';

    successBox.innerHTML = someText;
}

export default getResult;