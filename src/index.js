import debounce from 'lodash.debounce'
import './css/styles.css';
import {fetchCountries} from "./fetchCountries";

const DEBOUNCE_DELAY = 300;

const findInput = document.querySelector('#search-box')
findInput.addEventListener('input', debounce(findCountries,DEBOUNCE_DELAY))

function findCountries (event){
    const textToFind= event.target.value.trim();
    if(!textToFind){ 
        return 
    }
    fetchCountries(textToFind)}

