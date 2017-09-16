"use strict";

const printToDom = require('./dom');
const loadGifs = require('./gifs');
const loadCategories = require('./categories');

let gifArray = [];

const errorFunction = () => {
	console.log("You broke everything");
};

// When GIF loads
const whenGifLoad = function(){
	gifArray = JSON.parse(this.responseText).gifs;
	// TODO: Load categories
	loadCategories(whenCategoriesLoad, errorFunction);
};

const whenCategoriesLoad = function(){
	let categoryArray = JSON.parse(this.responseText).categories;
	// Combine arrays
	combineArrays(categoryArray);
};

const combineArrays = (categories) => {
	categories.forEach((category) => {
		gifArray.forEach((gif) => {
			if (gif.category === category.id){
				gif.categoryName = category.name;
				gif.categoryDataName = category.dataName;
			}
		});
	});
	// TODO: Call the print to DOM
	printToDom(gifArray);
};

//TODO: set up 'initializer' - load gifs
const initializer = () => {
	loadGifs(whenGifLoad, errorFunction);
};

const getGifs = () => {
	return gifArray;
};

module.exports = {initializer, getGifs};





