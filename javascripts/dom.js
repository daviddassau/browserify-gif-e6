"use strict";

const outputDiv = document.getElementById('output');

const domString = (gif) => {
	let domString = '';
	domString += `<div class="col-sm-3">`;
	domString +=   `<div data-category=${gif.categoryDataName} class="gif-card">`;
	domString +=     `<div class="gif-card-image">`;
	domString +=       `<img src=${gif.gif}>`;
	domString +=     `</div>`;
	domString +=     `<div class="gif-card-content">`;
	domString +=       `<h2>${gif.title}</h2>`;  
	domString +=       `<h5>${gif.categoryName}</h5>`;
	domString +=     `</div>`;
	domString +=   `</div>`;
	domString += `</div>`;
	return domString;  
};

const domOutput = (gifArray) => {
	let domOutput = '';
	for (let i = 0; i < gifArray.length; i++) {
		domOutput += (i % 4 === 0) ? '<div class="row">' : '';
		domOutput += domString(gifArray[i]);
		domOutput += (i % 4 === 3) ? '</div>' : '';
	}
	return domOutput;
};

const printToDom = (gifArray) => {
	outputDiv.innerHTML = domOutput(gifArray);
};

module.exports = printToDom;