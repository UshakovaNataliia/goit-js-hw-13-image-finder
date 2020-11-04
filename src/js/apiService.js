import refs from './refs';
import fetchImg from './fetchImage';
import {moreBtnCreate, openModal} from "../index.js";
import card from "../imageCard.hbs";
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';

const key = '17977888-d79c616f49d1f5bae461304f8';
let query;
let page = 1;
let markup;

function renderImages(e) {
  e.preventDefault();
  query = refs.input.value;

  refs.gallery.addEventListener('click', openModal);

  fetchImg(query, page, key)
  .then(hits => {
console.log(hits);
    if (hits.length === 0) {
        error({
            title: 'There is no matches found. Please enter another request.',
            delay: 2000,
        })
    }

    markup = card(hits);
    refs.gallery.innerHTML = markup;

    moreBtnCreate();
    refs.form.reset();
        
    document.querySelector('.more').addEventListener('click', showMore);

    setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
    }, 1000);
 });

 function showMore(){
    page = page+ 1;
    // refs.gallery.insertAdjacentHTML('beforeend', markup);
    // console.log(page);
    arr.reduce((acc, item) => {
        return (acc += `<li class="countryListItem">${item.name}</li>`)
    }, '');
    
};
};



export default renderImages;