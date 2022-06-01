let formOne = document.querySelector('.tab-one')
let formTwo = document.querySelector('.tab-two')
let formThree = document.querySelector('.tab-three')
let tabOne = document.querySelector('#tab-one')
let tabTwo = document.querySelector('#tab-two')
let tabThree = document.querySelector('#tab-three')

tabOne.addEventListener('click',()=>{
    formOne.style.display = "block";
    tabOne.classList.add('activated')
    formThree.style.display = "none";
    formTwo.style.display = "none";
    tabTwo.classList.remove('activated')
    tabThree.classList.remove('activated')
})
tabTwo.addEventListener('click',()=>{
    formOne.style.display = "none";
    formThree.style.display = "none";
    tabTwo.classList.add('activated')
    tabOne.classList.remove('activated')
    tabThree.classList.remove('activated')
    formTwo.style.display = "block";
})
tabThree.addEventListener('click',()=>{
    formOne.style.display = "none";
    formThree.style.display = "block";
    tabThree.classList.add('activated');
    tabOne.classList.remove('activated');
    tabTwo.classList.remove('activated');
    formTwo.style.display = "none";
})

// function switchTab(form){
//     if(form =='form-one'){

//     }

// }