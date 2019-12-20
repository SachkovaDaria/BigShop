document.addEventListener('DOMContentLoaded', function(e){
  'use strict';
  var list = document.querySelectorAll('#showcase__nav a');
  list = Array.prototype.slice.call(list, 0); // convert nodeList to Array
  list.forEach(function(el, i, ar) {
      el.addEventListener('click', function(event){
          e.preventDefault();
          var tab = document.querySelector(el.getAttribute('href'));

          // remove "act" class
          document.querySelector('#showcase__nav .showcase__nav-link--act')
              .classList.remove('showcase__nav-link--act');
          document.querySelector('#showcase__wrap .showcase__tab--act')
              .classList.remove('showcase__tab--act');

          // set "act"
          el.classList.add('showcase__nav-link--act'),
          tab.classList.add('showcase__tab--act');
          console.log ('таб');
      })
  })

});

const bags = document.querySelectorAll('.bags__cart');
const buttunBags = document.querySelectorAll ('.bags__button');
const bagsActivity = document.querySelectorAll ('.bags__activity');

for (let  i = 0; i <bags.length; i++) {
 bags [i].addEventListener('mouseover', () => {
  bags [i].classList.toggle('bags__cart--active')
  buttunBags [i].classList.toggle('bags__button--active')
  bagsActivity [i].classList.toggle('bags__activity--active')

 });
  bags [i].addEventListener('mouseout', () => {
  bags [i].classList.toggle('bags__cart--active')
  buttunBags [i].classList.toggle('bags__button--active')
  bagsActivity [i].classList.toggle('bags__activity--active')
});
};

function validate(form_id,email) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var address = document.forms[form_id].elements[email].value;
  if(reg.test(address) == false) {
     alert('Введите корректный e-mail');
     return false;
  }
}
