const btn_country = document.querySelector('#btn-country');
const div_country = document.querySelector('#ans-country');

const btn_capital = document.querySelector('#btn-capital');
const div_capital = document.querySelector('#ans-capital');

const btn_population = document.querySelector('#btn-population');
const div_population = document.querySelector('#ans-population');

const btn_country_number = document.querySelector('#btn-country-number');
const div_country_number = document.querySelector('#ans-country-number');

const btn_init = document.querySelector('.btn_init');

btn_country.addEventListener('click', ()=> {
    div_country.innerText = '한국';
})

btn_capital.addEventListener('click', ()=> {
    div_capital.innerText = '서울';
})

btn_population.addEventListener('click', ()=> {
    div_population.innerText = '1000만';
})

btn_country_number.addEventListener('click', ()=> {
    div_country_number.innerText = '082';
})

btn_init.addEventListener('click', ()=> {
    div_country.innerText = '';
    div_capital.innerText = '';
    div_population.innerText = '';
    div_country_number.innerText = '';
})

