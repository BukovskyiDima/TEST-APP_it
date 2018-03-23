console.log('появился ли css?');

let doc = document,
  redBlock = doc.querySelector('.red'),
  greenBlock = doc.querySelector('.green');

console.log(getComputedStyle(greenBlock).backgroundColor);

if (getComputedStyle(greenBlock).backgroundColor == 'rgb(0, 128, 0)') {
  console.log('появился');
} else {
  console.log('нет')
}