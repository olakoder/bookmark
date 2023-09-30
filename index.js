// alert ('welcome to simple bookmark')

let tabOne = document.querySelector('.tabClickOne')
    tabTwo = document.querySelector('.tabClickTwo')
    tabThree = document.querySelector('.tabClickThree')
    

tabOne.addEventListener('click', () => {
    document.querySelector('.tab-1').classList.toggle('show')
    document.querySelector('.red-border').classList.toggle('show')

}) 

// let tabOne = document.querySelector('.tabClickOne')

tabTwo.addEventListener('click', () => {
    document.querySelector('.tab-2').classList.toggle('show')
    document.querySelector('.red-border-2').classList.toggle('show')

}) 

// let tabOne = document.querySelector('.tabClickOne')

tabThree.addEventListener('click', () => {
    document.querySelector('.tab-3').classList.toggle('show')
    document.querySelector('.red-border-3').classList.toggle('show')

}) 