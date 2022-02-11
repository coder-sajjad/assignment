
// All Elements
const click_me = document.getElementById('click_me');
const modal_section = document.querySelector('.modal_section');
const modal_close = document.querySelector('#modal_close');
const alert_section = document.querySelector('.alert_section');
const alert_close = document.querySelector('#alert_close');
const keep_editing = document.querySelector('.keep_editing');
const dis_card = document.querySelector('.dis_card');

// Click me BTN JS
click_me.addEventListener('click', function(){
    modal_section.classList.add('active');
});

// Modal Close BTN
modal_close.addEventListener('click', function(){
    alert_section.classList.add('active');
});

// Modal Remove
modal_section.addEventListener('click', function(e){
    if( e.target == this ){
        modal_section.classList.remove('active');
    }
});

// Alert Close BTN
alert_close.addEventListener('click', function(e){
    if( e.target == this ){
        alert_section.classList.remove('active');
    }
});

// Alert Keep BTN
keep_editing.addEventListener('click', function(e){
    if( e.target == this ){
        alert_section.classList.remove('active');
    }
});

// Alert Discard BTN
dis_card.addEventListener('click', function(e){
    alert_section.classList.remove('active');
    modal_section.classList.remove('active');
});




/**
 *  Accordion CSS
 */
// All Elements
const acc_header = document.querySelectorAll('.saccordion_header');
const acc_body = document.querySelectorAll('.saccordion_body');

acc_header.forEach( item => {
    item.addEventListener('click', function(){

        acc_header.forEach(item =>{
            if( item != this ){
                item.classList.remove('active');
                item.nextElementSibling.style.height = '0px';
            }
        })

        item.classList.toggle('active');

        if( item.classList.contains('active') ){
            item.nextElementSibling.style.height = item.nextElementSibling.scrollHeight + 'px';
        }else{
            item.nextElementSibling.style.height = '0px';
        }
    });

});