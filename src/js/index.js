console.log('появился ли css?');

let doc = document,
  redBlock = doc.querySelector('.red');

if (redBlock.style.background == 'red') {
  console.log('появился');
} else {
  console.log('нет')
}