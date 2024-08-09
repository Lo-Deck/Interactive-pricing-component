# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers


### Screenshot

![screenshot mobile](https://github.com/Lo-Deck/Interactive-pricing-component/blob/main/screenshot/Interactive%20pricing%20component-mobile.png).
![screenshot desktop](https://github.com/Lo-Deck/Interactive-pricing-component/blob/main/screenshot/Interactive%20pricing%20component-desktop.png).


### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Interactive-pricing-component).
- Live Site URL: [Website](https://lo-deck.github.io/Interactive-pricing-component/).


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JS


### What I learned

I learned how to change the style of an `input type="range"` depending on the browser. 

```css

input[type=range]::-moz-range-thumb {
    background: url(./images/icon-slider.svg) no-repeat center,
                #10D8C4;
    width: 2.5rem;
    height: 2.5rem;  
    border-style: none;
    border-radius: 50%;
    box-shadow: 0rem 1rem 1rem #80FFF3;
    cursor: pointer;
}

```

And modificate some values regarding to an `input`.

```js

totalViews.innerText = '10K';
labelPrice.innerText = isYear ? labelPrice.innerText = '$6.00' : labelPrice.innerText = '$8.00';
progressBar.style.width = `calc(${Number(inputPrice.value) * 25}% - 2.2%)`;

```



### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.