
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {notifyFindManyCountries, notifyCantFindCountry, markupFewCountries,markupCountry} from './createContent'
export const fetchCountries = (name)=> {
const url = 'https://restcountries.com/v3.1/name/'
const parametersRequest = "?fields=name,capital,population,flags,languages"
    fetch (`${url}${name}${parametersRequest}`).then((response)=>{
        return  response.json() 
    }).then(notifyFindManyCountries)
    .then(notifyCantFindCountry)
.then(markupFewCountries)
.then(markupCountry)
.catch((error) => {
            console.log(error); 
          });
};
