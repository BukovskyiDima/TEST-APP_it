import rest from "./rest";
import createList from "./createList";
import getResult from "./getResult";

document.addEventListener('DOMContentLoaded', () => {
	let param = [];

	rest.getParam((list) => {
		param = list;
		createList(param);

		let wrapper = document.querySelector('#wrapper'),
				name = wrapper.querySelectorAll('.name'), 
				row = wrapper.querySelectorAll('.row'),
				input = wrapper.querySelectorAll('input'),
				value = wrapper.querySelectorAll('.value'),
				button = wrapper.querySelector('button'),
				holder = wrapper.querySelectorAll('holder'),
				i = 0;

		Array.prototype.forEach.call(row, (item) => {
			item.addEventListener('click', (e) => {
				if (e.target.tagName === 'A') {
					e.target.nextSibling.style.display === 'block' ?
					e.target.nextSibling.style.display = 'none' : 
					e.target.nextSibling.style.display = 'block';
				}
			});
		});

		Array.prototype.forEach.call(input, (item, i) => {
			item.addEventListener('input', () => {
				value[i].innerHTML = input[i].value;
			})
		});

		button.addEventListener('click', () => {

			Array.prototype.forEach.call(value, (item) => {
				if (item.textContent === 'You must choose') {
					item.parentElement.parentElement.parentElement.classList.add('error');
				} else {
					item.parentElement.parentElement.parentElement.classList.remove('error');
					item.parentElement.parentElement.parentElement.classList.add('success');
				}
			});

			let error = wrapper.querySelectorAll('.error');

			if (error.length === 0) {
				wrapper.classList.add('success');
				getResult(name, input);
			}
		});
	});
});