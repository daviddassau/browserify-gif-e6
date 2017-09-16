"use strict";

const loadGifs = (onGifLoad, onGifError) => {
	const gifLoader = new XMLHttpRequest();
	gifLoader.addEventListener('load', onGifLoad);
	gifLoader.addEventListener('error', onGifError);
	gifLoader.open('GET', '../data/gifs.json');
	gifLoader.send();
};

module.exports = loadGifs;