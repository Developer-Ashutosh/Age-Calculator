# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/solutions/age-calculator-oMHtKZkBt_). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Age Calculator](https://www.frontendmentor.io/solutions/age-calculator-oMHtKZkBt_)
- Live Site URL: [Age Calculator App](https://developer-ashutosh.github.io/Age-Calculator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Responsive

### What I learned

```js

let years = new Date().getFullYear() - yearInput.value;
let months = new Date().getMonth() - monthInput.value + 1;
let days = new Date().getDate() - dayInput.value;

if (days < 0) {
    months--;
    days += new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate();
}
if (months < 0) {
    years--;
    months += 12;
}

```

## Author

- Frontend Mentor - [@Developer-Ashutosh](https://www.frontendmentor.io/profile/Developer-Ashutosh)
- GitHub - [Developer-Ashutosh](https://github.com/Developer-Ashutosh)
