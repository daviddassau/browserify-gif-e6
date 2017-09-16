"use strict";

const loadCategories = (onCategoryLoad, onCategoryError) => {
	const categoryLoader = new XMLHttpRequest();
	categoryLoader.addEventListener('error', onCategoryError);
	categoryLoader.addEventListener('load', onCategoryLoad);
	categoryLoader.open('GET', '../data/categories.json');
	categoryLoader.send();
};

module.exports = loadCategories;