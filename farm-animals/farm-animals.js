
import { findById } from '../utils.js';
import { animals } from '../data.js';


//console.log(window.location.search);
const params = new URLSearchParams(window.location.search);

const animal = findById(params.get('id'), animals);

//console.log('animal-name');
const animalName = document.getElementById('animal-name');
const img = document.getElementById('img');
const animalQuote = document.getElementById('animal-quote');


animalName.textContent = animal.name;
animalQuote.textContent = animal.says;
img.src = `../assets/${animal.type}.svg`;

