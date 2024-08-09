const inputPrice = document.getElementById('range-price');
const totalViews = document.getElementById('total-views');
const labelPrice = document.getElementById('price');
const btnSwitchMode = document.getElementById('switch-mode');
const progressBar = document.querySelector('.progress-bar-chromium');




let isClicked = false;
let isYear = false;

inputPrice.value = '2';


//console.log(progressBar);
//console.log(inputPrice);
//console.log(totalViews);
//console.log(labelPrice);
//console.log(btnSwitchMode);


progressBar.style.width = `calc(${Number(inputPrice.value) * 25}% - 1.25rem)`;



inputPrice.addEventListener('input', () => {

    switch(inputPrice.value){

        case '0':
            totalViews.innerText = '10K';
            labelPrice.innerText = isYear ? labelPrice.innerText = '$6.00' : labelPrice.innerText = '$8.00';
            progressBar.style.width = `calc(${Number(inputPrice.value) * 25}% - 2.2%)`;
            break;

        case '1':
            totalViews.innerText = '50K';
            labelPrice.innerText = isYear ? labelPrice.innerText = '$9.00' : labelPrice.innerText = '$12.00';  
            progressBar.style.width = `calc(${Number(inputPrice.value) * 25}% - 2.35%)`; /*  2.2%   1.25rem */
            break;

        case '2':
            totalViews.innerText = '100K';
            labelPrice.innerText = isYear ? labelPrice.innerText = '$12.00' : labelPrice.innerText = '$16.00'; 
            progressBar.style.width = `calc(${Number(inputPrice.value) * 25}% - 1.25rem)`;/*1.25rem */
            break;

        case '3':
            totalViews.innerText = '500K';
            labelPrice.innerText = isYear ? labelPrice.innerText = '$18.00' : labelPrice.innerText = '$24.00';
            progressBar.style.width = `calc(${Number(inputPrice.value) * 25}% - 1.9rem)`;/* 1.85rem */
            break;

        case '4':
            totalViews.innerText = '1M';
            labelPrice.innerText = isYear ? labelPrice.innerText = '$27.00' : labelPrice.innerText = '$36.00';
            progressBar.style.width = `calc(${Number(inputPrice.value) * 25}% - 2.5rem)`; /*2.5rem */
            break;

    }

});



btnSwitchMode.addEventListener('click', () => {

    isClicked = !isClicked;

    btnSwitchMode.firstChild.style.transform = isClicked ? 'translateX(0.6rem)' : 'translateX(-0.6rem)';

    if(isClicked)
    {
        const figure = (Number(labelPrice.innerText.split('').slice(1).join('')) * 0.75).toFixed(2);
        const letter = labelPrice.innerText.split('').shift();
        labelPrice.innerText = `${letter}${figure}`;
        isYear = true;

    }

    else
    {
        const figure = (Number(labelPrice.innerText.split('').slice(1).join('')) * (1 / 0.75)).toFixed(2);
        const letter = labelPrice.innerText.split('').shift();
        labelPrice.innerText = `${letter}${figure}`;
        isYear = false;
    }
    
});
