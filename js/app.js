const americanoPage = document.querySelector('.americano-page');
const cappuccinoPage = document.querySelector('.cappuccino-page')
const overlay = document.querySelector('.order-settings');
const btnMenu = document.querySelectorAll('.menu-button');
const btnPlus = document.querySelectorAll('.count .increase');
const btnCart = document.querySelector('.cart button');
const btnMinus = document.querySelectorAll('.count .decrease');
const form = document.querySelector('.counter');



const wot = document.querySelector('.without-tax span');
const t = document.querySelector('.tax span');
const twt = document.querySelector('.total-with-tax span');


  btnCart.addEventListener('click',function(e){
    wot.textContent = "$2.99";
    t.textContent = "$0.19";
    twt.textContent = "$3.18";
    e.preventDefault();
    overlay.classList.add('hide');
  })
  
  


const qty = form.querySelectorAll('input');
let count = 0;
let curr;



btnMenu.forEach(function(a, i){
  a.addEventListener('click',function(){
    curr = i;
    overlay.classList.remove('hide');
  })
})


window.addEventListener('keydown',function(e){
  if(e.key === 'Escape'){
    overlay.classList.add('hide');
  }
})

  form.reset();
  btnMinus.disabled = true;
  btnCart.disabled = true;



btnPlus.forEach(function(a, i){
  curr = i;
  a.addEventListener('click', function(e){
   e.preventDefault();
    if(curr<10){
      curr++;
      checkButtonState();
      updateDisplay();
 }
})
})
btnMinus.forEach(function(a, i){
  curr = i;
  a.addEventListener('click', function(e){
   e.preventDefault();
    if(curr>0){
      curr--;
      checkButtonState();
      updateDisplay();
 }
})
})



  function checkButtonState(){
    if(curr === 0){
      btnMinus.disabled = true;
      btnPlus.disabled = false;
      btnCart.disabled = true;
    } else if(count === 10) {
      btnMinus.disabled = false;
      btnPlus.disabled = true;
      btnCart.disabled = false;
    } else {
      btnMinus.disabled = false;
      btnPlus.disabled = false;
      btnCart.disabled = false;
    }
  }
qty.forEach(function(a, i){
a.addEventListener('click', function(e){
updateDisplay();
})


})
    function updateDisplay(e){
    qty.value = count;
    quantity.textContent = curr;
    checkButtonState();
  }
