
import { farmAnimalLi, findById } from '../utils.js';
import { animals } from '../data.js';



const params = new URLSearchParams(window.location.search);

const animals = findById(params.get('id'), animals);


const animalName = document.getElementById('animal-name');
animalName.textContent = farmAnimal.name;

const div = 

