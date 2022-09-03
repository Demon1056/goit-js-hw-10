
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const  countryList = document.querySelector('.country-list') 
export const fetchCountries = (name)=> {
const url = 'https://restcountries.com/v3.1/name/'
const parametersRequest = "?fields=name,capital,population,flags,languages"
    fetch (`${url}${name}${parametersRequest}`).then((response)=>{
        return response.json()
    }).then((data)=>{
       
        if(data.length>10){
            Notify.info('Too many matches found. Please enter a more specific name.');
        } return data
    })
    .then((data)=>{
if(data.status===404){Notify.failure('Oops, there is no country with that name');
}return data})
.then((data)=>{
    if(data.length >=2 && data.length<=10){
     const a= data.map(({flags, name}) => { const a=`<li><img src="${flags.svg}" 
       alt="${name.official}" width=60 heigth=40><span>${name.official}</span></li>` 
       return a}).join('')
       countryList.innerHTML=a;
    } 
})
.catch((error) => {
            console.log(error); // Error handling
          });
};
