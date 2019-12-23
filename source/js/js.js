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
      })
  })

});


const productCart = document.querySelectorAll('.product-cart');
const buttunproductCart = document.querySelectorAll ('.product-cart__button');
const productCartActivity = document.querySelectorAll ('.product-cart__activity');
const productCartPrice = document.querySelectorAll ('.product-cart__price');

for (let  i = 0; i <productCart.length; i++) {
 productCart [i].addEventListener('mouseover', () => {
  productCart [i].classList.toggle('product-cart--act')
  buttunproductCart [i].classList.toggle('product-cart__button--act')
  productCartActivity [i].classList.toggle('product-cart__activity--act')
  productCartPrice [i].classList.toggle('product-cart__price--act')

 });
  productCart [i].addEventListener('mouseout', () => {
  productCart [i].classList.toggle('product-cart--act')
  buttunproductCart [i].classList.toggle('product-cart__button--act')
  productCartActivity [i].classList.toggle('product-cart__activity--act')
  productCartPrice [i].classList.toggle('product-cart__price--act')
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
