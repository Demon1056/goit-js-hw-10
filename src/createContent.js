import { Notify } from 'notiflix/build/notiflix-notify-aio';
const  countryList = document.querySelector('.country-list') 
const  countryInfo = document.querySelector('.country-info') 
const clearcountryList=()=>countryList.innerHTML ='';
const clearcountryInfo=()=>countryInfo.innerHTML='';
    

export const notifyFindManyCountries = (data)=> {
    if(data.length > 10){clearcountryList();clearcountryInfo(); 
        Notify.info('Too many matches found. Please enter a more specific name.');
    countryList.innerHTML='' } return data
}

export const notifyCantFindCountry = (data)=> {
   if(data.status===404){clearcountryList();clearcountryInfo(); 
   Notify.failure('Oops, there is no country with that name');
    }return data
}

export const markupFewCountries = (data)=>{ 
    if(data.length >=2 && data.length<=10){clearcountryInfo(); const fewCountries = data.map(({flags, name}) =>
    `<li class="item"><img src="${flags.svg}" 
   alt="${name.official}" width=35px ><p class="item-text">${name.official}</p></li>` 
   ).join('')
        countryList.innerHTML=fewCountries;
} return data} 

export const markupCountry = (data)=>{ 
    if(data.length ===1){clearcountryList(); 
        const oneCountry = data.map(
        ({flags, name, languages, population, capital}) =>
    `<div class="title-content"><img src="${flags.svg}" 
   alt="${name.official}" width=50><p class="name">${name.official}</p></div> 
   <p><span class="properties">Capital:</span>${capital}</p><p><span class="properties">Population:
   </span>${population}</p><p>
   <span class="properties">Languages:</span>${Object.values(languages).join(', ')}</p>` 
   )
   countryInfo.innerHTML=oneCountry; ;
} }

