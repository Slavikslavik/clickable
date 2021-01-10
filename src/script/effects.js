'use strict'
let body = document.querySelector('body');
//console.log(body);

function animate(e){

        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
    
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        //console.log(_depth1,_depth2,_depth3);
        body.style.backgroundPosition = x;
        
        
};

function remove_animate(e){
    body.style.backgroundPosition = `right bottom, left top,59% 59%`;
};

document.addEventListener("mousemove", animate);
document.addEventListener("mouseout", remove_animate);

let btn = document.querySelector('.button_btn');
btn.addEventListener('mouseover',function(e){
    document.querySelector('.button_border').style.display ='none';
    btn.style.backgroundColor = 'white';
});

btn.addEventListener('mouseout',function(e){
    document.querySelector('.button_border').style.display ='block';
    btn.style.backgroundColor = '#f8ff13';
});
console.log(window.screen.width);
if(window.screen.width == 320){
    add_div();
    console.log('hello');
    // let change_div = document.querySelector('.section .header_content');
    // console.log(change_div);
    // let footer = document.querySelector('.footer');
    // console.log(footer);
    // footer.prepend(change_div);
    // change_div.style.display = 'flex';
    // let animation = document.querySelector('.section .animation_two');
    // console.log(animation);
    // animation.style.display = 'block';
}
function add_div(){
    let change_div = document.querySelector('.section .header_content');
    console.log(change_div);
    let footer = document.querySelector('.footer');
    console.log(footer);
    footer.prepend(change_div);
    change_div.style.display = 'flex';
    let animation = document.querySelector('.section .animation_two');
    console.log(animation);
    animation.style.display = 'block';
}